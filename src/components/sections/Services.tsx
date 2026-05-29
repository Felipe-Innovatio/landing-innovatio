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
      "Creamos productos digitales a medida: sitios web, aplicaciones móviles y plataformas escalables con las tecnologías más modernas.",
    tags: ["React", "Next.js", "Node.js", "React Native"],
  },
  {
    icon: "⬡",
    title: "Hosting e Infraestructura",
    description:
      "Desplegamos y gestionamos tu infraestructura en la nube con alta disponibilidad, monitoreo continuo y optimización de costos.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes"],
  },
  {
    icon: "◎",
    title: "Consultoría Tecnológica",
    description:
      "Analizamos tu stack actual y te acompañamos en la toma de decisiones técnicas para escalar de forma inteligente y eficiente.",
    tags: ["Arquitectura", "Code Review", "Tech Strategy"],
  },
  {
    icon: "⬢",
    title: "Ciberseguridad",
    description:
      "Protegemos tus sistemas con auditorías de seguridad, pruebas de penetración, hardening y planes de respuesta a incidentes.",
    tags: ["Pentesting", "SIEM", "Hardening", "ISO 27001"],
    accent: true,
  },
  {
    icon: "◉",
    title: "Inteligencia Artificial",
    description:
      "Integramos y desarrollamos soluciones de IA: desde chatbots y automatizaciones hasta modelos personalizados para tu industria.",
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
            Todo lo que tu negocio digital necesita
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
