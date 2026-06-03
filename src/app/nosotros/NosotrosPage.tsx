"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const differentiators = [
  { num: "01", title: "Ingenieros, no freelancers", desc: "Equipo estable de titulados en ingeniería informática. Sin subcontratos, sin sorpresas de calidad. Cada proyecto cuenta con profesionales dedicados de inicio a fin." },
  { num: "02", title: "IA como multiplicador", desc: "Usamos inteligencia artificial para entregar más rápido, pero con criterio profesional para que cada línea resista en producción. La IA acelera; el ingeniero controla." },
  { num: "03", title: "Codigo real, sin plantillas", desc: "Cada proyecto parte desde cero: arquitectura, stack y diseño pensados para tu caso, no para todos. No usamos WordPress ni plantillas genéricas." },
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
                Tecnología que funciona{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>para negocios que quieren crecer</em>
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                En Innovatio-IT no solo escribimos código. Resolvemos problemas de verdad. Somos ingenieros informáticos especializados en distintas áreas, y trabajamos juntos para entregar soluciones que funcionen en producción, no solo en el papel.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                Usamos inteligencia artificial para avanzar más rápido, pero siempre con criterio profesional. Revisamos cada línea de código para que sea sólida. El resultado: proyectos listos en menos tiempo y sin sorpresas de último momento.
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
            {[{ value: "5", label: "Áreas de especialización" }, { value: "100%", label: "Ingenieros titulados" }, { value: "IA", label: "Potenciados por IA" }, { value: "24h", label: "Respuesta de propuesta" }].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--accent)" }}>{s.value}</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>


    </main>
  );
}
