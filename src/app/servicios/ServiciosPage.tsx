"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  { icon: "◈", title: "Diseño y Desarrollo", desc: "Llevamos tu idea a algo tangible. Desarrollamos sitios, aplicaciones y plataformas que funcionan de verdad, escalan sin drama y se ven bien.", techs: ["React", "Next.js", "Node.js", "React Native"], features: ["Arquitectura escalable", "Diseño responsive", "SEO técnico", "APIs REST/GraphQL", "CI/CD"], price: "desde $800.000 CLP", time: "2-6 semanas" },
  { icon: "⬡", title: "Hosting e Infraestructura", desc: "Tu aplicación siempre online, sin que pierdas el sueño con servidores. Nosotros manejamos la nube; tú te enfocas en lo que sabes hacer.", techs: ["AWS", "GCP", "Docker", "Kubernetes"], features: ["Infraestructura como código", "Escalado automático", "Backups y monitoreo 24/7", "SSL + CDN", "Optimización de costos"], price: "desde $150.000 CLP/mes", time: "1-2 semanas" },
  { icon: "◎", title: "Consultoría Tecnológica", desc: "¿Sientes que tu tecnología te frena en vez de impulsarte? Te ayudamos a tomar decisiones claras antes de invertir un peso.", techs: ["Arquitectura", "Code Review", "Tech Strategy"], features: ["Auditoría técnica", "Recomendación de stack", "Revisión de código", "Roadmap de migración", "Mentoria"], price: "desde $200.000 CLP", time: "Por sesión" },
  { icon: "⬢", title: "Ciberseguridad", desc: "Un solo hackeo puede costarte más que años de prevención. Auditamos, reforzamos y protegemos tus sistemas antes de que pase algo grave.", techs: ["Pentesting", "SIEM", "Hardening", "ISO 27001"], features: ["Pruebas de penetración", "Hardening de servidores", "Implementación de SIEM", "Cumplimiento ISO 27001", "Capacitación"], price: "A cotizar", time: "Por alcance" },
  { icon: "◉", title: "Inteligencia Artificial", desc: "Dejemos que la IA se encargue de lo aburrido. Así tu equipo puede enfocarse en lo que realmente importa y tomar mejores decisiones.", techs: ["LLMs", "RAG", "Automatización", "ML"], features: ["Integración de LLMs", "Sistemas RAG", "Automatización con IA", "ML a medida", "Gobernanza de IA"], price: "A cotizar", time: "Por alcance" },
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
              Desde una landing simple hasta una plataforma compleja. Cada servicio se ajusta a lo que realmente necesitas, sin relleno.
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
            <p className="mb-6" style={{ color: "var(--muted)" }}>Cuéntanos qué necesitas y te respondemos con una propuesta concreta en menos de 24 horas.</p>
            <a href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "var(--accent)", color: "#fff" }}>Hablemos →</a>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
