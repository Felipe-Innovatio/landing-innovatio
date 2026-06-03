"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const plans = [
  { name: "Starter", desc: "Landing page profesional", price: "desde $800.000", features: ["Diseño a medida", "Responsive (móvil + desktop)", "SEO técnico básico", "Formulario de contacto", "Entrega en 2-3 semanas"], cta: "Empezar", highlight: false },
  { name: "Business", desc: "Sitio corporativo completo", price: "desde $1.500.000", note: "Más popular", features: ["Múltiples páginas y secciones", "CMS para gestión de contenido", "Blog y SEO avanzado", "Integraciones (Analytics, CRM)", "Entrega en 3-6 semanas", "1 mes de soporte incluido"], cta: "Empezar", highlight: true },
  { name: "Custom", desc: "App web / Software a medida", price: "A cotizar", features: ["Aplicación web completa", "Autenticación y roles de usuario", "Base de datos y API propia", "Panel de administración", "Integraciones avanzadas", "MVP en 8-16 semanas"], cta: "Cotizar", highlight: false },
];

export default function PreciosPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>Precios</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
              Inversión clara, <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>resultados reales</em>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>Precios referenciales en pesos chilenos. Cada proyecto se cotiza según su alcance real — sin sorpresas.</p>
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
            <h3 className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>¿Por qué no la opción más barata?</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              En Chile puedes encontrar webs desde $100.000 — son plantillas WordPress hechas en días por gente sin formación en ingeniería. Nosotros desarrollamos con código real, ingenieros titulados y tecnologías actuales. La diferencia se nota en rendimiento, seguridad y en que no se cae cuando creces.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "rgba(55,138,221,0.04)", border: "1px solid rgba(55,138,221,0.15)" }}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>¿Necesitas algo más <em style={{ fontStyle: "italic", color: "var(--accent)" }}>personalizado?</em></h2>
            <p className="mb-6" style={{ color: "var(--muted)" }}>Cada proyecto es distinto. Hablemos y te armamos una propuesta que calce con lo que buscas.</p>
            <a href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "var(--accent)", color: "#fff" }}>Solicitar cotización →</a>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
