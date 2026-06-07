import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "El equipo de Innovatio-IT no solo entregó lo que pedimos. Nos propusieron mejoras que ni siquiera habíamos pensado. El resultado fue mejor de lo que esperábamos.",
    author: "Cliente Anónimo",
    role: "Gerente de Operaciones",
    company: "Empresa Retail Chile",
    initials: "CA",
  },
  {
    quote:
      "Migraron nuestra infraestructura completa a la nube sin un solo minuto de downtime. El monitoreo que implementaron nos ha salvado más de una vez.",
    author: "Cliente Anónimo",
    role: "CTO",
    company: "Startup Fintech",
    initials: "CT",
  },
  {
    quote:
      "La auditoría de seguridad descubrió vulnerabilidades graves que nuestro proveedor anterior nunca había detectado. Su forma de trabajar nos devolvió la tranquilidad.",
    author: "Cliente Anónimo",
    role: "Director de Tecnología",
    company: "Empresa Logística",
    initials: "DL",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2
            className="display font-bold mb-12 md:mb-16"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--foreground)" }}
          >
            Lo que dicen nuestros clientes
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.initials} delay={i * 90}>
              <figure className="card card-hover p-7 h-full flex flex-col m-0">
                <blockquote className="m-0 p-0 flex-1">
                  <p className="text-[15px] leading-relaxed m-0" style={{ color: "#33312B" }}>
                    “{t.quote}”
                  </p>
                </blockquote>
                <figcaption className="mt-6 pt-5 flex items-center gap-3" style={{ borderTop: "1px solid var(--line)" }}>
                  <span
                    className="display flex items-center justify-center w-11 h-11 rounded-full text-sm font-bold shrink-0"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[14.5px] font-bold" style={{ color: "var(--foreground)" }}>
                      {t.author}
                    </span>
                    <span className="text-[13px]" style={{ color: "var(--muted)" }}>
                      {t.role} · {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
