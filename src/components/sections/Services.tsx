import FadeIn from "@/components/ui/FadeIn";

interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  accent?: boolean;
}

const services: Service[] = [
  {
    icon: "◈",
    title: "Diseño y Desarrollo",
    description:
      "Tu idea, convertida en producto real. Desarrollamos sitios web, aplicaciones y plataformas a medida que funcionan, escalan y se ven bien.",
    tags: ["React", "Next.js", "Node.js", "React Native"],
  },
  {
    icon: "⬡",
    title: "Hosting e Infraestructura",
    description:
      "Tu aplicación siempre disponible, sin que tengas que preocuparte por servidores. Gestionamos la nube para que tú te enfoques en el negocio.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes"],
  },
  {
    icon: "◎",
    title: "Consultoría Tecnológica",
    description:
      "¿No sabes por dónde empezar o sientes que tu tecnología no te acompaña? Te ayudamos a tomar las decisiones correctas antes de invertir.",
    tags: ["Arquitectura", "Code Review", "Tech Strategy"],
  },
  {
    icon: "⬢",
    title: "Ciberseguridad",
    description:
      "Un solo incidente puede costar más que años de prevención. Auditamos, reforzamos y protegemos tus sistemas antes de que sea tarde.",
    tags: ["Pentesting", "SIEM", "Hardening", "ISO 27001"],
    accent: true,
  },
  {
    icon: "◉",
    title: "Inteligencia Artificial",
    description:
      "Automatiza lo repetitivo, potencia tu equipo y toma mejores decisiones con IA integrada en tus procesos — sin reemplazar a las personas.",
    tags: ["LLMs", "RAG", "Automatización", "ML"],
    accent: true,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <FadeIn className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: "var(--accent)" }}>
            Nuestros Servicios
          </span>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight max-w-2xl"
            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            Soluciones para cada etapa de tu crecimiento
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 80}>
              <div
                className="card-hover p-8 rounded-2xl border h-full flex flex-col"
                style={{
                  borderColor: service.accent ? "var(--accent-dim)" : "var(--border)",
                  background: service.accent
                    ? "linear-gradient(135deg, rgba(55,138,221,0.07) 0%, var(--surface) 100%)"
                    : "var(--surface)",
                }}
              >
                <div
                  className="text-2xl mb-6 w-11 h-11 flex items-center justify-center rounded-xl border"
                  style={{
                    borderColor: service.accent ? "var(--accent-dim)" : "var(--border)",
                    color: "var(--accent)",
                  }}
                >
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--muted)" }}>
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: service.accent ? "var(--accent-dim)" : "var(--border)",
                        color: service.accent ? "var(--accent-light)" : "var(--muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
