const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#68A063" },
  { name: "Python", color: "#FFD43B" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#DC382D" },
  { name: "Terraform", color: "#7B42BC" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Linux", color: "#FCC624" },
  { name: "TailwindCSS", color: "#38BDF8" },
  { name: "Supabase", color: "#3ECF8E" },
];

export default function TechStack() {
  const doubled = [...technologies, ...technologies];

  return (
    <section
      className="py-16 overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
    >
      <p className="text-center text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "var(--muted)" }}>
        Tecnologías que usamos
      </p>

      <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 mx-5 shrink-0"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: tech.color }}
              />
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: "var(--muted)" }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
