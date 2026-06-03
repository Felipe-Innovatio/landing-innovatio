# Plan de Implementacion — Innovatio-IT Website

> **Instrucciones:** Abre este archivo con Kimi Code CLI y ejecuta paso a paso.
> Cada seccion tiene el codigo completo listo para copiar y pegar.

---

## FASE 1: Hotfixes Criticos (5 minutos)

### 1.1 — Reemplazar `next.config.ts`

**Archivo:** `next.config.ts` (raiz del proyecto)

**Accion:** Reemplazar todo el contenido por:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://www.google.com; frame-src https://www.google.com;" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/servicios", destination: "/#servicios", permanent: true },
      { source: "/nosotros", destination: "/#nosotros", permanent: true },
      { source: "/precios", destination: "/#precios", permanent: true },
      { source: "/contacto", destination: "/#contacto", permanent: true },
    ];
  },
};

export default nextConfig;
```

**Efecto:** Arregla las 404s del navbar + agrega headers de seguridad.

---

### 1.2 — Agregar theme-color y manifest al layout

**Archivo:** `app/layout.tsx`

**Accion:** Dentro del componente `RootLayout`, en el `<html>`, agregar despues de la etiqueta de cierre `</body>` y antes del `jsonLd`:

Busca esta parte:
```tsx
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
```

Y agrega dentro del `<head>` (antes de `</html>`) un segundo script con Schema.org ContactPoint:

```tsx
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Innovatio-IT",
              "url": siteUrl,
              "logo": `${siteUrl}/og-image.png`,
              "description": "Innovatio-IT es un equipo de ingenieros informaticos chilenos especializados en desarrollo de software, ciberseguridad e inteligencia artificial.",
              "email": "contacto@innovatio-it.com",
              "telephone": "+56-9-5637-9853",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santiago",
                "addressCountry": "CL"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+56-9-5637-9853",
                "contactType": "sales",
                "availableLanguage": ["Spanish", "English"],
                "areaServed": "CL"
              },
              "priceRange": "$$$",
              "knowsAbout": [
                "Desarrollo de Software",
                "Ciberseguridad",
                "Inteligencia Artificial",
                "Cloud e Infraestructura",
                "Consultoria Tecnologica"
              ]
            }),
          }}
        />
```

Tambien agrega en el `<head>` del html:
```tsx
      <head>
        <meta name="theme-color" content="#06080f" />
        <link rel="manifest" href="/manifest.json" />
      </head>
```

---

### 1.3 — Crear `public/manifest.json`

**Archivo nuevo:** `public/manifest.json`

```json
{
  "name": "Innovatio-IT",
  "short_name": "Innovatio-IT",
  "description": "Desarrollo de Software, Ciberseguridad e IA en Chile",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#06080f",
  "theme_color": "#06080f",
  "icons": [
    {
      "src": "/favicon.ico",
      "sizes": "256x256",
      "type": "image/x-icon"
    }
  ]
}
```

**Verificacion Fase 1:**
```bash
npm run build
# o
npm run dev
```
- Probar que /servicios redirige a /#servicios
- Verificar headers con curl -I http://localhost:3000

---

## FASE 2: Componentes Nuevos (15 minutos)

### 2.1 — Crear ScrollReveal

**Archivo nuevo:** `components/ui/ScrollReveal.tsx`

```tsx
"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const getInitialTransform = () => {
    switch (direction) {
      case "up": return "translateY(32px)";
      case "down": return "translateY(-32px)";
      case "left": return "translateX(32px)";
      case "right": return "translateX(-32px)";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : getInitialTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
```

---

### 2.2 — Crear Testimonials

**Archivo nuevo:** `components/sections/Testimonials.tsx`

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "El equipo de Innovatio-IT no solo entrego lo que pedimos — nos propusieron mejoras que ni habiamos considerado. El resultado supero todas nuestras expectativas.",
    author: "Cliente Anonimo",
    role: "Gerente de Operaciones",
    company: "Empresa Retail Chile",
    initials: "CA",
  },
  {
    quote: "Migraron nuestra infraestructura completa a la nube sin un solo minuto de downtime. El monitoreo que implementaron nos ha salvado mas de una vez.",
    author: "Cliente Anonimo",
    role: "CTO",
    company: "Startup Fintech",
    initials: "CT",
  },
  {
    quote: "La auditoria de seguridad revelo vulnerabilidades criticas que nuestro proveedor anterior nunca detecto. Su enfoque profesional nos dio la tranquilidad que necesitabamos.",
    author: "Cliente Anonimo",
    role: "Director de Tecnologia",
    company: "Empresa Logistica",
    initials: "DL",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="testimonios" className="py-20 md:py-32 px-6" style={{ background: "rgba(55,138,221,0.03)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
            Lo que dicen <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>nuestros clientes</em>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Historias reales de empresas que confiaron en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 150}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(55,138,221,0.3)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(55,138,221,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="text-4xl font-serif mb-4" style={{ color: "var(--accent)", opacity: 0.4 }}>&ldquo;</div>
              <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>{t.quote}</p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" style={{ background: "rgba(55,138,221,0.15)", color: "var(--accent)" }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{t.author}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{t.role} &middot; {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

> **Nota:** Reemplaza los testimonios anonimos con testimonios reales cuando los tengas.

---

### 2.3 — Crear TeamSection

**Archivo nuevo:** `components/sections/TeamSection.tsx`

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Ingeniero Principal",
    role: "Lider Tecnico & Co-fundador",
    bio: "Ingeniero informatico con experiencia en arquitectura de software, infraestructura cloud y liderazgo tecnico de equipos multidisciplinarios.",
    initials: "IP",
    specialties: ["Arquitectura", "Cloud", "DevOps"],
  },
  {
    name: "Especialista en IA",
    role: "Inteligencia Artificial & ML",
    bio: "Especialista en integracion de modelos de lenguaje, sistemas RAG y automatizacion inteligente de procesos empresariales.",
    initials: "EI",
    specialties: ["LLMs", "RAG", "ML"],
  },
  {
    name: "Experto Seguridad",
    role: "Ciberseguridad & Infraestructura",
    bio: "Certificado en seguridad ofensiva y defensiva. Experiencia en pentesting, hardening de sistemas y cumplimiento normativo ISO 27001.",
    initials: "ES",
    specialties: ["Pentesting", "SIEM", "ISO 27001"],
  },
  {
    name: "Desarrollador Full Stack",
    role: "Desarrollo Web & Mobile",
    bio: "Especialista en React, Next.js y Node.js. Enfocado en crear experiencias de usuario excepcionales con codigo limpio y escalable.",
    initials: "DF",
    specialties: ["React", "Next.js", "Node.js"],
  },
];

export default function TeamSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="equipo" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
            Ingenieros, <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>no freelancers</em>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Equipo estable de titulados en ingenieria informatica. Sin subcontratos, sin sorpresas de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(55,138,221,0.3)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(55,138,221,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold" style={{ background: "rgba(55,138,221,0.1)", color: "var(--accent)", border: "2px solid rgba(55,138,221,0.2)" }}>
                {member.initials}
              </div>
              <h3 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>{member.name}</h3>
              <p className="text-xs font-medium mb-3" style={{ color: "var(--accent)" }}>{member.role}</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.specialties.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(55,138,221,0.08)", color: "var(--accent-light)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

> **Nota:** Actualiza con los datos reales de tu equipo (nombres, fotos, LinkedIn).

---

## FASE 3: Activar Testimonials en la Homepage (1 minuto)

### 3.1 — Editar `app/page.tsx`

**Accion:** Descomentar Testimonials y agregar TeamSection.

Busca estas lineas:
```tsx
// import Testimonials from "@/components/sections/Testimonials";
```

Cambiala por:
```tsx
import Testimonials from "@/components/sections/Testimonials";
import TeamSection from "@/components/sections/TeamSection";
```

Luego busca:
```tsx
        {/* <Testimonials /> */}
        <CtaBanner />
```

Cambialo por:
```tsx
        <Testimonials />
        <TeamSection />
        <CtaBanner />
```

**Guardar y probar.**

---

## FASE 4: Nuevas Paginas (20 minutos)

### 4.1 — Crear `app/servicios/page.tsx`

**Archivo nuevo:** `app/servicios/page.tsx`

```tsx
import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Desarrollo web, ciberseguridad, hosting en la nube, consultoria tecnologica e inteligencia artificial. Soluciones a medida para empresas chilenas.",
  keywords: "desarrollo web Chile, ciberseguridad empresas, hosting cloud, consultoria tecnologica, inteligencia artificial Chile",
};

const services = [
  { icon: "◈", title: "Diseño y Desarrollo", desc: "Tu idea, convertida en producto real. Desarrollamos sitios web, aplicaciones y plataformas a medida que funcionan, escalan y se ven bien.", techs: ["React", "Next.js", "Node.js", "React Native"], features: ["Arquitectura escalable", "Diseño responsive", "SEO tecnico", "APIs REST/GraphQL", "CI/CD"], price: "desde $800.000 CLP", time: "2-6 semanas" },
  { icon: "⬡", title: "Hosting e Infraestructura", desc: "Tu aplicacion siempre disponible, sin que tengas que preocuparte por servidores. Gestionamos la nube para que tu te enfoques en el negocio.", techs: ["AWS", "GCP", "Docker", "Kubernetes"], features: ["Infraestructura como codigo", "Escalado automatico", "Backups y monitoreo 24/7", "SSL + CDN", "Optimizacion de costos"], price: "desde $150.000 CLP/mes", time: "1-2 semanas" },
  { icon: "◎", title: "Consultoria Tecnologica", desc: "¿No sabes por donde empezar o sientes que tu tecnologia no te acompana? Te ayudamos a tomar las decisiones correctas antes de invertir.", techs: ["Arquitectura", "Code Review", "Tech Strategy"], features: ["Auditoria tecnica", "Recomendacion de stack", "Revision de codigo", "Roadmap de migracion", "Mentoria"], price: "desde $200.000 CLP", time: "Por sesion" },
  { icon: "⬢", title: "Ciberseguridad", desc: "Un solo incidente puede costar mas que años de prevencion. Auditamos, reforzamos y protegemos tus sistemas antes de que sea tarde.", techs: ["Pentesting", "SIEM", "Hardening", "ISO 27001"], features: ["Pruebas de penetracion", "Hardening de servidores", "Implementacion de SIEM", "Cumplimiento ISO 27001", "Capacitacion"], price: "A cotizar", time: "Por alcance" },
  { icon: "◉", title: "Inteligencia Artificial", desc: "Automatiza lo repetitivo, potencia tu equipo y toma mejores decisiones con IA integrada en tus procesos.", techs: ["LLMs", "RAG", "Automatizacion", "ML"], features: ["Integracion de LLMs", "Sistemas RAG", "Automatizacion con IA", "ML a medida", "Gobernanza de IA"], price: "A cotizar", time: "Por alcance" },
];

export default function ServiciosPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>
              Nuestros Servicios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
              Soluciones para cada etapa<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>de tu crecimiento</em>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
              Desde una landing page hasta una plataforma empresarial completa. Cada servicio se adapta a tus necesidades reales.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <div
                className="rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(55,138,221,0.3)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(55,138,221,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6" style={{ background: "rgba(55,138,221,0.06)", color: "var(--accent)" }}>{s.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--foreground)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.techs.map((t) => <span key={t} className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>{t}</span>)}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.features.map((f) => <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted)" }}><span style={{ color: "var(--accent)" }}>—</span>{f}</li>)}
                </ul>
                <div className="pt-4 flex items-center justify-between text-sm" style={{ borderTop: "1px solid var(--border)" }}>
                  <span style={{ color: "var(--accent-light)" }}>{s.price}</span>
                  <span style={{ color: "var(--muted)" }}>{s.time}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "rgba(55,138,221,0.04)", border: "1px solid var(--border)" }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>¿Listo para empezar?</h2>
            <p className="mb-6" style={{ color: "var(--muted)" }}>Cuentanos tu proyecto y te respondemos con una propuesta concreta en menos de 24 horas.</p>
            <a href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "var(--accent)", color: "#fff" }}>Hablemos →</a>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
```

---

### 4.2 — Crear `app/nosotros/page.tsx`

**Archivo nuevo:** `app/nosotros/page.tsx`

```tsx
import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Somos ingenieros informaticos chilenos especializados en desarrollo de software, ciberseguridad e inteligencia artificial. Codigo real, sin plantillas.",
  keywords: "equipo ingenieros informaticos Chile, desarrollo software Santiago",
};

const differentiators = [
  { num: "01", title: "Ingenieros, no freelancers", desc: "Equipo estable de titulados en ingenieria informatica. Sin subcontratos, sin sorpresas de calidad. Cada proyecto cuenta con profesionales dedicados de inicio a fin." },
  { num: "02", title: "IA como multiplicador", desc: "Usamos inteligencia artificial para entregar mas rapido — y criterio profesional para asegurar que cada linea resista produccion. La IA acelera, el ingeniero controla." },
  { num: "03", title: "Codigo real, sin plantillas", desc: "Cada proyecto parte desde cero: arquitectura, stack y diseno pensados para tu caso, no para todos. No usamos WordPress ni plantillas genericas." },
];

export default function NosotrosPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <ScrollReveal>
            <div>
              <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>Sobre Nosotros</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
                Tecnologia de alto nivel{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>para negocios que quieren crecer</em>
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                En Innovatio-IT no solo escribimos codigo — resolvemos problemas. Somos ingenieros informaticos especializados en distintas areas que trabajan juntos para entregar soluciones que realmente funcionan en produccion.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                Usamos inteligencia artificial para movernos mas rapido, y criterio profesional para asegurarnos de que cada linea de codigo sea solida. El resultado: proyectos entregados en menos tiempo, sin sorpresas.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="space-y-6">
              {differentiators.map((d) => (
                <div key={d.num} className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(55,138,221,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold shrink-0" style={{ color: "var(--accent)", opacity: 0.5 }}>{d.num}</span>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>{d.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{d.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="rounded-2xl p-8 md:p-12 mb-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" style={{ background: "rgba(55,138,221,0.04)", border: "1px solid var(--border)" }}>
            {[{ value: "5", label: "Areas de especializacion" }, { value: "100%", label: "Ingenieros titulados" }, { value: "IA", label: "Potenciados por IA" }, { value: "24h", label: "Respuesta de propuesta" }].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--accent)" }}>{s.value}</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <TeamSection />

      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6 mt-16 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "rgba(55,138,221,0.04)", border: "1px solid rgba(55,138,221,0.15)" }}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
              ¿Queres ser parte del <em style={{ fontStyle: "italic", color: "var(--accent)" }}>equipo?</em>
            </h2>
            <p className="mb-6" style={{ color: "var(--muted)" }}>Siempre estamos buscando talento apasionado por la tecnologia.</p>
            <a href="mailto:contacto@innovatio-it.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "var(--accent)", color: "#fff" }}>Enviar CV →</a>
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
}
```

---

### 4.3 — Crear `app/precios/page.tsx`

**Archivo nuevo:** `app/precios/page.tsx`

```tsx
import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Precios",
  description: "Precios transparentes de desarrollo web, ciberseguridad e inteligencia artificial. Desde $800.000 CLP. Cotiza tu proyecto sin compromiso.",
  keywords: "precio desarrollo web Chile, cotizar pagina web, costo aplicacion web Chile",
};

const plans = [
  { name: "Starter", desc: "Landing page profesional", price: "desde $800.000", features: ["Diseno a medida", "Responsive (movil + desktop)", "SEO tecnico basico", "Formulario de contacto", "Entrega en 2-3 semanas"], cta: "Empezar", highlight: false },
  { name: "Business", desc: "Sitio corporativo completo", price: "desde $1.500.000", note: "Mas popular", features: ["Multiples paginas y secciones", "CMS para gestion de contenido", "Blog y SEO avanzado", "Integraciones (Analytics, CRM)", "Entrega en 3-6 semanas", "1 mes de soporte incluido"], cta: "Empezar", highlight: true },
  { name: "Custom", desc: "App web / Software a medida", price: "A cotizar", features: ["Aplicacion web completa", "Autenticacion y roles de usuario", "Base de datos y API propia", "Panel de administracion", "Integraciones avanzadas", "MVP en 8-16 semanas"], cta: "Cotizar", highlight: false },
];

export default function PreciosPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>Precios</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
              Inversion clara, <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>resultados reales</em>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>Precios referenciales en pesos chilenos. Cada proyecto se cotiza segun su alcance real — sin sorpresas.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div className="rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ background: plan.highlight ? "rgba(55,138,221,0.06)" : "rgba(255,255,255,0.02)", border: `2px solid ${plan.highlight ? "var(--accent)" : "var(--border)"}`, boxShadow: plan.highlight ? "0 8px 32px rgba(55,138,221,0.1)" : "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(55,138,221,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = plan.highlight ? "var(--accent)" : "var(--border)"; }}>
                {plan.note && <span className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ background: "var(--accent)", color: "#fff" }}>{plan.note}</span>}
                <h3 className="text-xl font-semibold mb-1" style={{ color: "var(--foreground)" }}>{plan.name}</h3>
                <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold" style={{ color: "var(--accent)" }}>{plan.price}</span>
                  <span className="text-sm ml-1" style={{ color: "var(--muted)" }}>+ IVA</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted)" }}><span style={{ color: "var(--accent)" }}>—</span>{f}</li>)}
                </ul>
                <a href="/contacto" className="block w-full text-center py-3 rounded-full text-sm font-medium transition-all duration-200"
                  style={{ background: plan.highlight ? "var(--accent)" : "transparent", color: plan.highlight ? "#fff" : "var(--foreground)", border: plan.highlight ? "none" : "1px solid var(--border)" }}>
                  {plan.cta} →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="rounded-xl p-6 mb-16" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderLeftWidth: "3px", borderLeftColor: "var(--accent)" }}>
            <h3 className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>¿Por que no la opcion mas barata?</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              En Chile puedes encontrar webs desde $100.000 — son plantillas WordPress hechas en dias por personas sin formacion en ingenieria. Nosotros desarrollamos con codigo real, ingenieros titulados y tecnologias modernas. La diferencia se nota en rendimiento, seguridad y escalabilidad.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "rgba(55,138,221,0.04)", border: "1px solid rgba(55,138,221,0.15)" }}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>¿Necesitas algo mas <em style={{ fontStyle: "italic", color: "var(--accent)" }}>personalizado?</em></h2>
            <p className="mb-6" style={{ color: "var(--muted)" }}>Cada proyecto es unico. Hablemos y te damos una propuesta a tu medida.</p>
            <a href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "var(--accent)", color: "#fff" }}>Solicitar cotizacion →</a>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
```

---

### 4.4 — Crear `app/contacto/page.tsx`

**Archivo nuevo:** `app/contacto/page.tsx`

```tsx
import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a Innovatio-IT para desarrollo de software, ciberseguridad o inteligencia artificial. Respondemos en menos de 24 horas.",
  keywords: "contacto desarrollo software Chile, cotizar proyecto tecnologico",
};

export default function ContactoPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <ScrollReveal className="lg:col-span-2">
            <div>
              <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>Contacto</span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
                Tienes un <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>proyecto?</em>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                Cuentanos de que se trata y te respondemos con una propuesta concreta en menos de 24 horas. Sin compromiso, sin spam.
              </p>

              <div className="space-y-4 mb-8">
                <a href="https://wa.me/56956379853?text=Hola%2C%20vi%20su%20pagina%20y%20me%20gustaria%20consultar%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5" style={{ background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  <div><div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>WhatsApp</div><div className="text-sm" style={{ color: "var(--muted)" }}>+56 9 5637 9853 · Respuesta inmediata</div></div>
                </a>

                <a href="mailto:contacto@innovatio-it.com" className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5" style={{ background: "rgba(55,138,221,0.05)", border: "1px solid var(--border)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 5L2 7" /></svg>
                  <div><div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Email</div><div className="text-sm" style={{ color: "var(--muted)" }}>contacto@innovatio-it.com</div></div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(55,138,221,0.05)", border: "1px solid var(--border)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <div><div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Ubicacion</div><div className="text-sm" style={{ color: "var(--muted)" }}>Santiago, Chile · 100% Remoto</div></div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} className="lg:col-span-3">
            <div className="rounded-2xl p-6 md:p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
              <h2 className="text-xl font-semibold mb-6" style={{ color: "var(--foreground)" }}>Cuentanos sobre tu proyecto</h2>
              <Contact />
            </div>
          </ScrollReveal>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          mainEntity: {
            "@type": "Organization",
            name: "Innovatio-IT",
            url: "https://innovatio-it.com",
            email: "contacto@innovatio-it.com",
            telephone: "+56-9-5637-9853",
            address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
            contactPoint: { "@type": "ContactPoint", telephone: "+56-9-5637-9853", contactType: "sales", availableLanguage: ["Spanish", "English"], areaServed: "CL" },
          },
        }),
      }} />
    </main>
  );
}
```

---

## FASE 5: Actualizar Navbar Links (2 minutos)

### 5.1 — Editar `components/layout/Header.tsx`

Busca los links del navbar que apuntan a `/#servicios`, `/#nosotros`, etc.

Cambiar las rutas de los links del navbar de:
```tsx
<a href="#servicios">Servicios</a>
<a href="#nosotros">Nosotros</a>
<a href="#precios">Precios</a>
<a href="#contacto">Contacto</a>
```

A:
```tsx
<a href="/servicios">Servicios</a>
<a href="/nosotros">Nosotros</a>
<a href="/precios">Precios</a>
<a href="/contacto">Contacto</a>
```

> **Nota:** Si usas `<Link>` de Next.js, cambia `href="#servicios"` a `href="/servicios"`.

---

## FASE 6: Verificacion Final

### 6.1 — Build y test

```bash
npm run build
```

### 6.2 — Checklist de verificacion

- [ ] `/servicios` — carga pagina completa con 5 servicios
- [ ] `/nosotros` — carga con equipo y diferenciadores
- [ ] `/precios` — carga con 3 planes
- [ ] `/contacto` — carga con formulario + WhatsApp + email
- [ ] `/` (homepage) — muestra Testimonials y TeamSection
- [ ] Navbar links funcionan (sin 404s)
- [ ] Headers de seguridad presentes (curl -I)
- [ ] Las redirecciones 301 funcionan desde URLs antiguas

---

## Resumen: Que se arregla con este plan

| Problema Original | Solucion en este plan |
|---|---|
| 🔴 404s en /servicios, /nosotros, /precios, /contacto | Redirecciones 301 + paginas reales |
| 🔴 Sin testimonios | Componente Testimonials activado en homepage |
| 🔴 Sin equipo visible | Componente TeamSection en /nosotros y homepage |
| 🔴 Sin headers de seguridad | CSP, HSTS, X-Frame-Options, etc. |
| 🟡 Sin animaciones de scroll | ScrollReveal en todas las paginas nuevas |
| 🟡 Hover states basicos | Hover enriquecidos en tarjetas de servicios |
| 🟡 1 sola URL indexada | 4 paginas nuevas indexables |

**Estimado total:** 45 minutos
