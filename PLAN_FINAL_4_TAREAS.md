# Plan Final — 4 Tareas para 9.0+

> **Puntaje actual:** 8.6/10
> **Objetivo:** 9.0+
> **Tiempo total:** ~2 horas
> **Exclusion:** Testimonios y equipo (sin cambio)

---

## TAREA 1: reCAPTCHA v3 (30 min)

### 1.1 Instalar
```bash
npm install react-google-recaptcha-v3
```

### 1.2 Crear `components/ui/RecaptchaProvider.tsx`
```tsx
"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) return <>{children}</>;
  return <GoogleReCaptchaProvider reCaptchaKey={siteKey}>{children}</>;
}
```

### 1.3 Wrappear en `app/layout.tsx`

Busca el `<body>` y wrappea `{children}`:

```tsx
import RecaptchaProvider from "@/components/ui/RecaptchaProvider";

// En el return:
<body className="min-h-full flex flex-col" suppressHydrationWarning>
  <RecaptchaProvider>
    {children}
  </RecaptchaProvider>
</body>
```

### 1.4 Integrar en el formulario de contacto

En tu componente de formulario (ej: `components/Contact.tsx` o similar):

```tsx
"use client";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.error("reCAPTCHA no disponible");
      return;
    }

    const token = await executeRecaptcha("contact_form");

    // Enviar al backend
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: formData.nombre,
        email: formData.email,
        servicio: formData.servicio,
        mensaje: formData.mensaje,
        recaptchaToken: token,
      }),
    });

    if (res.ok) {
      // Mensaje de exito
    }
  };

  return <form onSubmit={handleSubmit}>{/* campos */}</form>;
}
```

### 1.5 Crear `app/api/contact/route.ts`
```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { nombre, email, servicio, mensaje, recaptchaToken } = await req.json();

    if (!nombre || !email || !mensaje || !recaptchaToken) {
      return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
    }

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.success || verifyData.score < 0.5) {
      return NextResponse.json(
        { error: "Verificacion de seguridad fallida" },
        { status: 400 }
      );
    }

    // Aqui conectar con tu servicio de email
    // Ejemplo: Resend, SendGrid, Nodemailer, Amazon SES

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Error al procesar" }, { status: 500 });
  }
}
```

### 1.6 Agregar a `.env.local`
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_aqui
RECAPTCHA_SECRET_KEY=tu_secret_key_aqui
```

Obtener keys en: https://www.google.com/recaptcha/admin (elegir v3, agregar dominio innovatio-it.com)

---

## TAREA 2: Google Analytics 4 (15 min)

### 2.1 Editar `app/layout.tsx`

Dentro del `<head>`, agregar:

```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `,
      }}
    />
  </>
)}
```

### 2.2 Agregar a `.env.local`
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Obtener ID en: https://analytics.google.com (crear propiedad, copiar Measurement ID)

---

## TAREA 3: Scroll-reveal + Scroll-spy (1h)

### 3.1 Crear `components/ui/ScrollReveal.tsx`
```tsx
"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
```

### 3.2 Aplicar a `app/page.tsx`

```tsx
import ScrollReveal from "@/components/ui/ScrollReveal";

// Hero NO lleva ScrollReveal (above the fold)
<Hero />

// Todo lo demas si:
<ScrollReveal><TechStack /></ScrollReveal>
<ScrollReveal delay={100}><About /></ScrollReveal>
<ScrollReveal delay={100}><Services /></ScrollReveal>
<ScrollReveal delay={100}><Process /></ScrollReveal>
<ScrollReveal delay={100}><CtaBanner /></ScrollReveal>
<ScrollReveal delay={100}><Pricing /></ScrollReveal>
<ScrollReveal delay={100}><Faq /></ScrollReveal>
<ScrollReveal delay={100}><Contact /></ScrollReveal>
```

### 3.3 Scroll-spy en `components/layout/Header.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["servicios", "nosotros", "precios", "contacto"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // En los nav links, usar:
  // style={{ color: activeSection === "servicios" ? "var(--accent)" : "var(--muted)" }}
}
```

---

## TAREA 4: Corregir Sitemap (5 min)

### 4.1 Editar `next-sitemap.config.js`

Buscar la seccion `exclude` y cambiar:

```javascript
exclude: ['/privacidad'],  // ← QUITAR esto (o comentarlo)
```

Agregar `/privacidad` a `additionalPaths`:

```javascript
additionalPaths: async (config) => [
  // ... paths existentes ...
  { loc: '/privacidad', priority: 0.5 },
],
```

Para quitar `/robots.txt` del sitemap, agregar:

```javascript
exclude: ['/robots.txt'],
```

Configuracion final del exclude:

```javascript
exclude: ['/robots.txt'],
```

### 4.2 Re-build para regenerar
```bash
npm run build
# O push para que Vercel lo haga
```

### 4.3 Verificar
```bash
curl -s https://innovatio-it.com/sitemap-0.xml
```
Deberia mostrar `/privacidad` y NO `/robots.txt`.

---

## Orden recomendado

1. Tarea 4 (sitemap) — 5 min
2. Tarea 2 (GA4) — 15 min
3. Tarea 1 (reCAPTCHA) — 30 min
4. Tarea 3 (scroll-reveal + scroll-spy) — 1h

**Total: ~2 horas**
