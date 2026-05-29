const technologies = [
  { name: "React", color: "#61DAFB", url: "https://react.dev/" },
  { name: "Next.js", color: "#ffffff", url: "https://nextjs.org/" },
  { name: "TypeScript", color: "#3178C6", url: "https://www.typescriptlang.org/" },
  { name: "Node.js", color: "#68A063", url: "https://nodejs.org/" },
  { name: "Python", color: "#FFD43B", url: "https://www.python.org/" },
  { name: "AWS", color: "#FF9900", url: "https://aws.amazon.com/" },
  { name: "Docker", color: "#2496ED", url: "https://www.docker.com/" },
  { name: "Kubernetes", color: "#326CE5", url: "https://kubernetes.io/" },
  { name: "PostgreSQL", color: "#336791", url: "https://www.postgresql.org/" },
  { name: "MongoDB", color: "#47A248", url: "https://www.mongodb.com/" },
  { name: "Redis", color: "#DC382D", url: "https://redis.io/" },
  { name: "Terraform", color: "#7B42BC", url: "https://www.terraform.io/" },
  { name: "GraphQL", color: "#E10098", url: "https://graphql.org/" },
  { name: "Linux", color: "#FCC624", url: "https://www.linux.org/" },
  { name: "TailwindCSS", color: "#38BDF8", url: "https://tailwindcss.com/" },
  { name: "Supabase", color: "#3ECF8E", url: "https://supabase.com/" },
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
            <a
              key={`${tech.name}-${i}`}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 mx-5 shrink-0 hover:opacity-80 transition-opacity"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
