import ScrollReveal from "@/components/ui/ScrollReveal";

const projects = [
  {
    n: "01",
    title: "Plataforma de agentes",
    what: "Sistema propio que ejecuta tareas con modelos de lenguaje sobre una cola de trabajo, con permisos por departamento, bandeja de aprobación humana y registro de cada acción ejecutada.",
    proves:
      "Infraestructura, control de acceso y observabilidad en un sistema que corre todos los días.",
    tags: ["Python", "PostgreSQL", "Linux", "Docker"],
  },
  {
    n: "02",
    title: "Simulador económico",
    what: "Juego de gestión escrito en Godot: economía con ciclos de producción, precios y guardado determinista que sobrevive a reinicios del proceso.",
    proves:
      "Diseño de sistemas con estado, pruebas automatizadas y empaquetado para escritorio.",
    tags: ["Godot", "GDScript", "JSON"],
  },
  {
    n: "03",
    title: "Motor de reglas reimplementado",
    what: "Reconstrucción del comportamiento de un sistema cerrado a partir de su operación observable: 33 reglas medidas una por una y verificadas contra el original.",
    proves:
      "Lectura de sistemas ajenos sin código fuente y disciplina de verificación sobre cada regla.",
    tags: ["Python", "Análisis", "Verificación"],
  },
];

export default function Proof() {
  return (
    <section id="prueba" className="py-24 md:py-32" style={{ background: "var(--surface-2)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-16">
            <h2
              className="display font-bold md:col-span-7"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--foreground)" }}
            >
              Sistemas que hemos construido
            </h2>
            <p
              className="text-[15px] md:text-base md:col-span-5 max-w-sm"
              style={{ color: "var(--muted)" }}
            >
              Trabajo propio, con verificación automática en cada cambio. Todavía no
              publicamos casos de clientes: preferimos mostrar lo que corre antes que
              una lista de logos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 90}>
              <article style={{ borderTop: "1px solid var(--foreground)", paddingTop: "1.25rem" }}>
                <span
                  className="text-[13px] font-semibold tabular-nums"
                  style={{ color: "var(--accent)" }}
                >
                  {p.n}
                </span>
                <h3
                  className="display text-xl md:text-2xl font-bold mt-3"
                  style={{ color: "var(--foreground)" }}
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {p.what}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--foreground)" }}>
                  {p.proves}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="text-[12px] font-medium px-2.5 py-1"
                      style={{
                        color: "var(--muted)",
                        border: "1px solid var(--line)",
                        borderRadius: "6px",
                        background: "var(--surface)",
                      }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
