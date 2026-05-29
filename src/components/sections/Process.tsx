import FadeIn from "@/components/ui/FadeIn";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Analizamos tu negocio, tus objetivos y el contexto técnico actual. Definimos el alcance, los riesgos y el plan de acción.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Arquitectamos la solución: UX, flujos, stack tecnológico y modelo de seguridad. Sin código hasta tener el plan claro.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos en sprints cortos con entregas incrementales. Revisiones continuas para que siempre estés al tanto del avance.",
  },
  {
    number: "04",
    title: "Entrega y soporte",
    description:
      "Deploy, documentación y transferencia de conocimiento. Soporte post-lanzamiento para que todo funcione en producción.",
  },
];

export default function Process() {
  return (
    <section className="py-28 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">

        <FadeIn className="mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: "var(--accent)" }}>
            Cómo trabajamos
          </span>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight max-w-2xl"
            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            Un proceso claro de principio a fin
          </h2>
        </FadeIn>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-0 relative">

          {/* Connector line */}
          <div
            className="hidden md:block absolute top-[38px] left-[12.5%] right-[12.5%] h-px pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, var(--border) 20%, var(--border) 80%, transparent)" }}
          />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100} className="relative">
              <div className="flex flex-col items-center md:items-start text-center md:text-left px-6 pb-8 md:pb-0">

                {/* Step number */}
                <div
                  className="relative z-10 mb-5 font-bold leading-none select-none"
                  style={{
                    fontSize: "64px",
                    color: "var(--accent)",
                    opacity: 0.15,
                    letterSpacing: "-0.04em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {step.number}
                </div>

                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {step.description}
                </p>
              </div>

              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div
                  className="md:hidden mx-auto w-px h-8 mb-2"
                  style={{ background: "var(--accent-dim)" }}
                />
              )}
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
