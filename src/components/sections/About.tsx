import FadeIn from "@/components/ui/FadeIn";

const differentiators = [
  {
    number: "01",
    title: "Ingenieros, no freelancers",
    body: "Equipo estable de titulados en ingeniería informática. Sin subcontratos, sin sorpresas de calidad.",
  },
  {
    number: "02",
    title: "IA como multiplicador",
    body: "Usamos IA para entregar más rápido — y criterio profesional para asegurar que cada línea resista producción.",
  },
  {
    number: "03",
    title: "Código real, sin plantillas",
    body: "Cada proyecto parte desde cero: arquitectura, stack y diseño pensados para tu caso, no para todos.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-28 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: "var(--accent)" }}>
              En Innovatio-IT
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Tecnología de alto nivel para negocios que quieren crecer
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              En Innovatio-IT no solo escribimos código — resolvemos problemas.
              Somos ingenieros informáticos especializados en distintas áreas que
              trabajan juntos para entregar soluciones que realmente funcionan
              en producción.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
              Usamos inteligencia artificial para movernos más rápido, y criterio
              profesional para asegurarnos de que cada línea de código sea sólida.
              El resultado: proyectos entregados en menos tiempo, sin sorpresas.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-0">
            {differentiators.map((item, i) => (
              <FadeIn key={item.number} delay={i * 100}>
                <div
                  className="py-6 flex gap-6 items-start"
                  style={{ borderBottom: i < differentiators.length - 1 ? "1px solid var(--border)" : "none" }}
                >
                  <span
                    className="font-bold shrink-0 leading-none select-none"
                    style={{
                      fontSize: "13px",
                      color: "var(--accent)",
                      opacity: 0.5,
                      letterSpacing: "0.04em",
                      paddingTop: "3px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {item.number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {item.body}
                    </p>
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
