# Plan Completo de Implementacion v3 — Innovatio-IT

> **Exclusion:** Testimonios y equipo (decision deliberada del cliente)
> **Prioridad:** Impacto SEO/Conversion / Esfuerzo

---

## FASE A: Quick Wins (15 minutos totales)

### A.1 — Sitemap.xml completo (5 min)

**Archivo:** `public/sitemap.xml` (reemplazar completo)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://innovatio-it.com</loc>
    <lastmod>2026-06-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://innovatio-it.com/servicios</loc>
    <lastmod>2026-06-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://innovatio-it.com/nosotros</loc>
    <lastmod>2026-06-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://innovatio-it.com/precios</loc>
    <lastmod>2026-06-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://innovatio-it.com/contacto</loc>
    <lastmod>2026-06-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Verificacion:**
```bash
curl -s https://innovatio-it.com/sitemap.xml
```

---

### A.2 — Headers de cache Vercel (5 min)

**Archivo:** `vercel.json` (crear en raiz del proyecto)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate, stale-while-revalidate=86400"
        }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

> Nota: Esto complementa (no reemplaza) los headers de next.config.ts. El `stale-while-revalidate=86400` permite que Vercel sirva cache mientras revalida en background.

---

### A.3 — reCAPTCHA v3 en formulario (5 min setup)

**Paso 1:** Registrar el sitio en https://www.google.com/recaptcha/admin
- Elegir reCAPTCHA v3
- Agregar dominios: `innovatio-it.com` y `www.innovatio-it.com`
- Copiar Site Key y Secret Key

**Paso 2:** Crear `.env.local` en raiz (si no existe)

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_aqui
RECAPTCHA_SECRET_KEY=tu_secret_key_aqui
```

**Paso 3:** Instalar dependencia
```bash
npm install react-google-recaptcha-v3
```

**Paso 4:** Crear provider `components/ui/RecaptchaProvider.tsx`

```tsx
"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) return <>{children}</>;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
```

**Paso 5:** Wrappear el formulario en `components/sections/Contact.tsx` (o donde este tu formulario)

Busca el componente Contact existente y agrega al inicio del return:
```tsx
import RecaptchaProvider from "@/components/ui/RecaptchaProvider";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
```

Dentro del componente:
```tsx
const { executeRecaptcha } = useGoogleReCaptcha();
```

En el submit handler:
```tsx
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  
  if (!executeRecaptcha) return;
  
  const token = await executeRecaptcha("contact_form");
  
  // Ahora enviar el token al backend junto con los datos del formulario
  // await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ ...formData, recaptchaToken: token }) });
};
```

**Paso 6:** Crear API route `app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, servicio, mensaje, recaptchaToken } = body;

    // Verificar reCAPTCHA v3
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.success || verifyData.score < 0.5) {
      return NextResponse.json(
        { error: "Verificacion de seguridad fallida. Intente nuevamente." },
        { status: 400 }
      );
    }

    // TODO: Integrar con tu servicio de email (Resend, SendGrid, Nodemailer)
    // Ejemplo con Resend:
    // await resend.emails.send({
    //   from: "contacto@innovatio-it.com",
    //   to: "contacto@innovatio-it.com",
    //   subject: `Nuevo contacto: ${servicio} - ${nombre}`,
    //   html: `<p><strong>Nombre:</strong> ${nombre}</p><p><strong>Email:</strong> ${email}</p><p><strong>Servicio:</strong> ${servicio}</p><p><strong>Mensaje:</strong> ${mensaje}</p>`,
    // });

    return NextResponse.json({ success: true, message: "Mensaje enviado correctamente" });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar el mensaje" },
      { status: 500 }
    );
  }
}
```

---

## FASE B: Mejoras de UX (1 hora)

### B.1 — Scroll-reveal en homepage

**Archivo a editar:** Cada seccion en `components/sections/` (Hero, TechStack, About, Services, Process, Pricing, Faq, Contact)

**Instruccion:** Envolver el contenido principal de cada seccion con ScrollReveal.

Ejemplo para `components/sections/About.tsx`:

```tsx
import ScrollReveal from "@/components/ui/ScrollReveal";

// Dentro del return:
<ScrollReveal>
  <div className="...">
    {/* contenido existente */}
  </div>
</ScrollReveal>
```

Para secciones con items multiples (como Services), usar delay escalonado:

```tsx
{services.map((service, i) => (
  <ScrollReveal key={service.id} delay={i * 100}>
    <ServiceCard service={service} />
  </ScrollReveal>
))}
```

**Nota:** Hero NO necesita scroll-reveal (debe ser visible inmediatamente).

---

### B.2 — Navbar scroll-spy (indicador de seccion activa)

**Archivo a editar:** `components/layout/Header.tsx`

**Instruccion:** Agregar estado para tracking de seccion activa.

```tsx
"use client";

import { useEffect, useState } from "react";

// Dentro del componente Header:
const [activeSection, setActiveSection] = useState("");

useEffect(() => {
  const sections = ["servicios", "nosotros", "precios", "contacto"];
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        return;
      }
    }
    setActiveSection("");
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

Luego en cada link del nav:
```tsx
<a
  href="#servicios"
  className={activeSection === "servicios" ? "text-[var(--accent)]" : "text-[var(--muted)]"}
>
  Servicios
</a>
```

---

### B.3 — Hover states enriquecidos en tarjetas de servicios de la homepage

**Archivo a editar:** `components/sections/Services.tsx` (o donde esten las tarjetas)

**Instruccion:** Agregar a cada tarjeta:

```tsx
<div
  className="... transition-all duration-300 hover:-translate-y-1"
  style={{ border: "1px solid var(--border)" }}
  onMouseEnter={(e) => {
    e.currentTarget.style.borderColor = "rgba(55,138,221,0.3)";
    e.currentTarget.style.boxShadow = "0 8px 32px rgba(55,138,221,0.08)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
```

---

## FASE C: Performance — Reducir HTML Homepage (2-3 horas)

### C.1 — Lazy load de secciones por debajo del fold

**Archivo a editar:** `app/page.tsx`

**Instruccion:** Usar `next/dynamic` con `ssr: false` para secciones que no son visibles inicialmente.

```tsx
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

// Lazy load de secciones por debajo del fold
const TechStack = dynamic(() => import("@/components/sections/TechStack"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false });
const Process = dynamic(() => import("@/components/sections/Process"), { ssr: false });
const CtaBanner = dynamic(() => import("@/components/sections/CtaBanner"), { ssr: false });
const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: false });
const Faq = dynamic(() => import("@/components/sections/Faq"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });
```

**Meta:** Reducir HTML inicial de ~350KB a ~80-120KB.

---

### C.2 — Priority hints para LCP

**Archivo a editar:** `app/layout.tsx`

Agregar dentro del `<head>`:

```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

---

## FASE D: SEO Avanzado (2 horas)

### D.1 — Paginas individuales por servicio

**Crear:** `app/servicios/desarrollo/page.tsx`

```tsx
import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Desarrollo Web y Aplicaciones | Innovatio-IT Chile",
  description: "Desarrollamos sitios web, aplicaciones y plataformas a medida con React, Next.js y Node.js. Desde $800.000 CLP. Entrega en 2-6 semanas.",
  keywords: "desarrollo web Chile, crear pagina web Santiago, aplicacion web a medida, React Next.js desarrolladores",
};

export default function DesarrolloPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>
              ◈ Diseño y Desarrollo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
              Tu idea, convertida en <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>producto real</em>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
              Desarrollamos sitios web, aplicaciones y plataformas a medida que funcionan, escalan y se ven bien. Sin plantillas, sin atajos.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>Tecnologias</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "React Native", "TypeScript", "TailwindCSS", "GraphQL"].map((t) => (
                  <span key={t} className="text-sm px-3 py-1.5 rounded-full" style={{ background: "rgba(55,138,221,0.08)", color: "var(--accent-light)" }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>Incluye</h2>
              <ul className="space-y-2">
                {["Arquitectura escalable", "Diseño responsive", "SEO tecnico integrado", "APIs REST y GraphQL", "Despliegue continuo CI/CD", "Tests automaticos"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted)" }}><span style={{ color: "var(--accent)" }}>—</span>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl p-8 text-center mb-16" style={{ background: "rgba(55,138,221,0.04)", border: "1px solid var(--border)" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div><span className="text-3xl font-bold" style={{ color: "var(--accent)" }}>desde $800.000</span><span className="text-sm ml-2" style={{ color: "var(--muted)" }}>+ IVA</span></div>
              <div style={{ color: "var(--muted)" }}>|</div>
              <div style={{ color: "var(--muted)" }}>Entrega en <strong style={{ color: "var(--foreground)" }}>2-6 semanas</strong></div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(55,138,221,0.04)", border: "1px solid rgba(55,138,221,0.15)" }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>¿Tienes un proyecto en mente?</h2>
            <p className="mb-6" style={{ color: "var(--muted)" }}>Cuentanos lo que necesitas y te damos una propuesta en menos de 24 horas.</p>
            <a href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "var(--accent)", color: "#fff" }}>Solicitar cotizacion →</a>
          </div>
        </ScrollReveal>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Desarrollo Web y Aplicaciones",
          provider: { "@type": "Organization", name: "Innovatio-IT" },
          areaServed: { "@type": "Country", name: "Chile" },
          description: "Desarrollo de sitios web, aplicaciones y plataformas a medida.",
          offers: {
            "@type": "Offer",
            price: "800000",
            priceCurrency: "CLP",
            availability: "https://schema.org/InStock",
          },
        }),
      }} />
    </main>
  );
}
```

**Repetir** para los otros 4 servicios:
- `app/servicios/hosting/page.tsx`
- `app/servicios/consultoria/page.tsx`
- `app/servicios/ciberseguridad/page.tsx`
- `app/servicios/ia/page.tsx`

**Actualizar** `app/servicios/page.tsx` para agregar links a las sub-paginas:

En cada tarjeta de servicio, agregar:
```tsx
<a href={`/servicios/${service.id}`} className="...">Ver detalles →</a>
```

**Actualizar** `public/sitemap.xml` con las 5 nuevas URLs:

```xml
  <url>
    <loc>https://innovatio-it.com/servicios/desarrollo</loc>
    <lastmod>2026-06-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- repetir para hosting, consultoria, ciberseguridad, ia -->
```

---

### D.2 — Blog basico (4-6 articulos pilar)

**Crear:** `app/blog/page.tsx`

```tsx
import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog | Innovatio-IT — Tecnologia para Empresas Chilenas",
  description: "Articulos sobre desarrollo de software, ciberseguridad, inteligencia artificial y tecnologia para empresas en Chile.",
};

const articles = [
  {
    slug: "cuanto-cuesta-pagina-web-chile-2026",
    title: "Cuanto cuesta hacer una pagina web en Chile en 2026",
    excerpt: "Desde $100.000 hasta $15.000.000+. Te explicamos por que hay tanta diferencia y como elegir la opcion correcta para tu negocio.",
    date: "2026-06-03",
    category: "Desarrollo Web",
    readTime: "8 min",
  },
  {
    slug: "wordpress-vs-codigo-a-medida",
    title: "WordPress vs Codigo a medida: Cual elegir para tu empresa",
    excerpt: "Comparamos rendimiento, seguridad, escalabilidad y costo total de propiedad. La respuesta depende de tu etapa de crecimiento.",
    date: "2026-05-28",
    category: "Desarrollo Web",
    readTime: "6 min",
  },
  {
    slug: "ciberseguridad-pymes-chile",
    title: "Ciberseguridad para PYMES en Chile: Guia practica 2026",
    excerpt: "El 43% de las PYMES chilenas han sufrido algun incidente de seguridad. Aprende a proteger tu empresa sin gastar una fortuna.",
    date: "2026-05-20",
    category: "Ciberseguridad",
    readTime: "10 min",
  },
  {
    slug: "ia-empresas-chile-como-empezar",
    title: "Inteligencia Artificial para empresas chilenas: Como empezar sin morir en el intento",
    excerpt: "De ChatGPT a sistemas RAG personalizados. Una guia practica para integrar IA en tu empresa paso a paso.",
    date: "2026-05-15",
    category: "Inteligencia Artificial",
    readTime: "12 min",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>Blog</span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
              Tecnologia para <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>empresas reales</em>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>Guías prácticas, comparativas y consejos para tomar mejores decisiones tecnológicas.</p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {articles.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 100}>
              <a href={`/blog/${article.slug}`} className="block rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(55,138,221,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(55,138,221,0.08)", color: "var(--accent-light)" }}>{article.category}</span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>{article.date} · {article.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>{article.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{article.excerpt}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
```

**Crear plantilla para articulos:** `app/blog/[slug]/page.tsx`

```tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";

const articles: Record<string, { title: string; description: string; date: string; readTime: string; category: string; content: string }> = {
  "cuanto-cuesta-pagina-web-chile-2026": {
    title: "Cuanto cuesta hacer una pagina web en Chile en 2026",
    description: "Desde $100.000 hasta $15.000.000+. Te explicamos por que hay tanta diferencia y como elegir la opcion correcta.",
    date: "2026-06-03",
    readTime: "8 min",
    category: "Desarrollo Web",
    content: `CONTENIDO DEL ARTICULO AQUI...`,
  },
  // Agregar otros articulos
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Articulo no encontrado" };
  return { title: article.title, description: article.description };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return notFound();

  return (
    <main className="pt-32 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block" style={{ background: "rgba(55,138,221,0.08)", color: "var(--accent-light)" }}>{article.category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>{article.title}</h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>{article.date} · {article.readTime} de lectura</p>
        </header>
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </main>
  );
}
```

---

### D.3 — Schema.org Service en /servicios

**Archivo a editar:** `app/servicios/page.tsx`

Agregar al final del return (antes del cierre `</main>`):

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Diseño y Desarrollo",
        description: "Desarrollo de sitios web, aplicaciones y plataformas a medida.",
        provider: { "@type": "Organization", name: "Innovatio-IT" },
        areaServed: { "@type": "Country", name: "Chile" },
        offers: { "@type": "Offer", price: "800000", priceCurrency: "CLP" },
      },
      {
        "@type": "Service",
        position: 2,
        name: "Hosting e Infraestructura",
        description: "Gestion de infraestructura cloud con AWS, GCP, Docker y Kubernetes.",
        provider: { "@type": "Organization", name: "Innovatio-IT" },
        areaServed: { "@type": "Country", name: "Chile" },
        offers: { "@type": "Offer", price: "150000", priceCurrency: "CLP" },
      },
      {
        "@type": "Service",
        position: 3,
        name: "Consultoria Tecnologica",
        description: "Auditoria tecnica, recomendacion de stack y roadmap de migracion.",
        provider: { "@type": "Organization", name: "Innovatio-IT" },
        areaServed: { "@type": "Country", name: "Chile" },
      },
      {
        "@type": "Service",
        position: 4,
        name: "Ciberseguridad",
        description: "Pentesting, hardening de servidores, SIEM e ISO 27001.",
        provider: { "@type": "Organization", name: "Innovatio-IT" },
        areaServed: { "@type": "Country", name: "Chile" },
      },
      {
        "@type": "Service",
        position: 5,
        name: "Inteligencia Artificial",
        description: "Integracion de LLMs, sistemas RAG, automatizacion con IA.",
        provider: { "@type": "Organization", name: "Innovatio-IT" },
        areaServed: { "@type": "Country", name: "Chile" },
      },
    ],
  }),
}} />
```

---

## FASE E: Analytics y Tracking (30 min)

### E.1 — Google Analytics 4

**Archivo a editar:** `app/layout.tsx`

Agregar dentro del `<head>`:

```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
    <script dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
      `,
    }} />
  </>
)}
```

Agregar a `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## FASE F: Footer mejorado (15 min)

### F.1 — Agregar link al blog en el footer

**Archivo a editar:** `components/layout/Footer.tsx`

Buscar la seccion de navegacion y agregar:

```tsx
<a href="/blog" className="...">Blog</a>
```

---

## Resumen de Tareas

| Fase | Tarea | Tiempo estimado | Impacto |
|------|-------|-----------------|---------|
| **A** | Sitemap.xml completo | 5 min | Alto (SEO) |
| **A** | Cache headers Vercel | 5 min | Medio (Performance) |
| **A** | reCAPTCHA v3 | 30 min | Alto (Seguridad) |
| **B** | Scroll-reveal homepage | 30 min | Medio (UX) |
| **B** | Navbar scroll-spy | 20 min | Medio (UX) |
| **B** | Hover states tarjetas | 15 min | Bajo (UX) |
| **C** | Lazy load secciones | 1h | Alto (Performance) |
| **D** | 5 paginas por servicio | 2h | Alto (SEO) |
| **D** | Blog + 4 articulos | 2h | Alto (SEO) |
| **D** | Schema.org Service | 10 min | Medio (SEO) |
| **E** | Google Analytics 4 | 15 min | Medio (Conversion) |
| **F** | Footer + blog link | 5 min | Bajo |

**Tiempo total estimado: ~7 horas**
**Orden recomendado: A → B → D → C → E → F**
