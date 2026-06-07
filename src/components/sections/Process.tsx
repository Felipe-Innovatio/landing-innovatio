import ScrollReveal from "@/components/ui/ScrollReveal";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "1",
    title: "Conversamos",
    description: "Nos cuentas qué necesitas. Te respondemos con una propuesta concreta en menos de 24 horas.",
  },
  {
    number: "2",
    title: "Diseñamos",
    description: "Definimos juntos el alcance, los flujos y el plan. Nada se construye sin un plan aprobado.",
  },
  {
    number: "3",
    title: "Construimos",
    description: "Avances reales cada semana. Ves el progreso, no promesas.",
  },
  {
    number: "4",
    title: "Acompañamos",
    description: "Lanzamos, documentamos y seguimos cerca para que todo funcione.",
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2
            className="display font-bold mb-12 md:mb-16"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--foreground)" }}
          >
            Cómo trabajamos
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 90}>
              <div className="card card-hover p-7 h-full flex flex-col">
                <span
                  className="display flex items-center justify-center w-11 h-11 rounded-full text-lg font-bold mb-5"
                  style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3 className="display text-xl font-bold mb-2.5" style={{ color: "var(--foreground)" }}>
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
