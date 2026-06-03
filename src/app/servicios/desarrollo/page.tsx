import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Desarrollo Web y Aplicaciones | Innovatio-IT Chile",
  description: "Desarrollamos sitios web, aplicaciones y plataformas a medida con React, Next.js y Node.js. Desde $800.000 CLP. Entrega en 2-6 semanas.",
  keywords: "desarrollo web Chile, crear página web Santiago, aplicación web a medida, React Next.js desarrolladores",
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
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>Tecnologías</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "React Native", "TypeScript", "TailwindCSS", "GraphQL"].map((t) => (
                  <span key={t} className="text-sm px-3 py-1.5 rounded-full" style={{ background: "rgba(55,138,221,0.08)", color: "var(--accent-light)" }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>Incluye</h2>
              <ul className="space-y-2">
                {["Arquitectura escalable", "Diseño responsive", "SEO técnico integrado", "APIs REST y GraphQL", "Despliegue continuo CI/CD", "Tests automáticos"].map((f) => (
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
            <p className="mb-6" style={{ color: "var(--muted)" }}>Cuéntanos lo que necesitas y te damos una propuesta en menos de 24 horas.</p>
            <a href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "var(--accent)", color: "#fff" }}>Solicitar cotización →</a>
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
