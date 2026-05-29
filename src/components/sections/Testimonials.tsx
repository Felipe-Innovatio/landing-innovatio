import FadeIn from "@/components/ui/FadeIn";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "El equipo de Innovatio-IT entendió desde el primer momento lo que necesitábamos. Entregaron una plataforma robusta en tiempo récord y con una calidad técnica impecable.",
    name: "Martín Rodríguez",
    role: "CTO, StartupCL",
    initials: "MR",
  },
  {
    quote:
      "La auditoría de ciberseguridad identificó vulnerabilidades críticas que no habíamos detectado. Su enfoque proactivo nos evitó un incidente muy serio.",
    name: "Laura Gómez",
    role: "IT Manager, FinancieraCL",
    initials: "LG",
  },
  {
    quote:
      "Implementaron un sistema de IA que automatizó el 60% de nuestro proceso de atención al cliente. El retorno de inversión fue visible en el primer mes.",
    name: "Diego Fernández",
    role: "CEO, RetailPlus",
    initials: "DF",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">

        <FadeIn className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: "var(--accent)" }}>
            Testimonios
          </span>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            Lo que dicen nuestros clientes
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <div
                className="card-hover p-8 rounded-2xl border flex flex-col gap-6 h-full"
                style={{ borderColor: "var(--border)", background: "var(--background)" }}
              >
                {/* Quote mark */}
                <span
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "52px",
                    lineHeight: "1",
                    color: "var(--accent)",
                    opacity: 0.25,
                    display: "block",
                    marginBottom: "-8px",
                  }}
                >
                  &ldquo;
                </span>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                    style={{ background: "var(--accent-dim)", color: "var(--accent-light)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
