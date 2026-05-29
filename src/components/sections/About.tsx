import FadeIn from "@/components/ui/FadeIn";

const stats = [
  { value: "100%", label: "Proyectos entregados" },
  { value: "5+", label: "Tecnologías core" },
  { value: "3", label: "Áreas de servicio" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-28 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: "var(--accent)" }}>
              En Innovatio-IT
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Tecnología de alto nivel para negocios que quieren crecer
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              Diseñamos, desarrollamos y protegemos productos digitales personalizados,
              aprovechando la inteligencia artificial y las mejores prácticas de
              ciberseguridad para ofrecer resultados extraordinarios.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              Combinamos experiencia técnica con una visión orientada al negocio,
              para que cada solución que construimos genere impacto real y medible.
            </p>
          </FadeIn>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 120}>
                <div
                  className="p-6 rounded-2xl border text-center h-full"
                  style={{ borderColor: "var(--border)", background: "var(--background)" }}
                >
                  <div className="text-3xl font-semibold mb-2 gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs leading-snug" style={{ color: "var(--muted)" }}>
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
