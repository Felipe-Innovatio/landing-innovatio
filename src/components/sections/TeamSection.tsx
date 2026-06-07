import ScrollReveal from "@/components/ui/ScrollReveal";

const team = [
  {
    name: "Ingeniero Principal",
    role: "Líder Técnico & Co-fundador",
    bio: "Arquitectura de software, infraestructura cloud y liderazgo técnico de equipos multidisciplinarios.",
    initials: "IP",
  },
  {
    name: "Especialista en IA",
    role: "Inteligencia Artificial & ML",
    bio: "Integración de modelos de lenguaje, sistemas RAG y automatización de procesos.",
    initials: "EI",
  },
  {
    name: "Experto en Seguridad",
    role: "Ciberseguridad & Infraestructura",
    bio: "Seguridad ofensiva y defensiva: pentesting, hardening y cumplimiento ISO 27001.",
    initials: "ES",
  },
  {
    name: "Desarrollador Full Stack",
    role: "Desarrollo Web & Mobile",
    bio: "React, Next.js y Node.js. Experiencias de usuario con código limpio y escalable.",
    initials: "DF",
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" className="py-24 md:py-32" style={{ background: "var(--surface-2)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2
            className="display font-bold mb-12 md:mb-16"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--foreground)" }}
          >
            El equipo
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <ScrollReveal key={member.initials} delay={i * 80}>
              <div className="card card-hover p-7 h-full">
                <span
                  className="display flex items-center justify-center w-14 h-14 rounded-full text-lg font-bold mb-5"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  {member.initials}
                </span>
                <h3 className="display text-lg font-bold" style={{ color: "var(--foreground)" }}>
                  {member.name}
                </h3>
                <p className="text-[13px] font-semibold mt-0.5 mb-3" style={{ color: "var(--accent)" }}>
                  {member.role}
                </p>
                <p className="text-[14px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {member.bio}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
