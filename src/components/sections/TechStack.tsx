const technologies = [
  // Frontend
  { name: "React", color: "#61DAFB", url: "https://react.dev/" },
  { name: "Next.js", color: "#ffffff", url: "https://nextjs.org/" },
  { name: "TypeScript", color: "#3178C6", url: "https://www.typescriptlang.org/" },
  { name: "TailwindCSS", color: "#38BDF8", url: "https://tailwindcss.com/" },
  { name: "Vue.js", color: "#42B883", url: "https://vuejs.org/" },
  // Backend
  { name: "Node.js", color: "#68A063", url: "https://nodejs.org/" },
  { name: "Python", color: "#FFD43B", url: "https://www.python.org/" },
  { name: "FastAPI", color: "#009688", url: "https://fastapi.tiangolo.com/" },
  { name: "GraphQL", color: "#E10098", url: "https://graphql.org/" },
  { name: "Supabase", color: "#3ECF8E", url: "https://supabase.com/" },
  // Cloud
  { name: "AWS", color: "#FF9900", url: "https://aws.amazon.com/" },
  { name: "Google Cloud", color: "#4285F4", url: "https://cloud.google.com/" },
  { name: "Azure", color: "#0089D6", url: "https://azure.microsoft.com/" },
  { name: "Docker", color: "#2496ED", url: "https://www.docker.com/" },
  { name: "Kubernetes", color: "#326CE5", url: "https://kubernetes.io/" },
  { name: "Terraform", color: "#7B42BC", url: "https://www.terraform.io/" },
  { name: "Linux", color: "#FCC624", url: "https://www.linux.org/" },
  // Datos
  { name: "PostgreSQL", color: "#336791", url: "https://www.postgresql.org/" },
  { name: "MongoDB", color: "#47A248", url: "https://www.mongodb.com/" },
  { name: "Redis", color: "#DC382D", url: "https://redis.io/" },
  { name: "MySQL", color: "#4479A1", url: "https://www.mysql.com/" },
  { name: "Firebase", color: "#FFCA28", url: "https://firebase.google.com/" },
  // IA Cloud
  { name: "OpenAI", color: "#74AA9C", url: "https://openai.com/" },
  { name: "Claude", color: "#CC785C", url: "https://anthropic.com/claude" },
  { name: "Gemini", color: "#4285F4", url: "https://gemini.google.com/" },
  { name: "AWS Bedrock", color: "#FF9900", url: "https://aws.amazon.com/bedrock/" },
  { name: "Cohere", color: "#39594D", url: "https://cohere.com/" },
  // IA Local
  { name: "Ollama", color: "#ffffff", url: "https://ollama.com/" },
  { name: "LangChain", color: "#1C8C5E", url: "https://www.langchain.com/" },
  { name: "LlamaIndex", color: "#6929C4", url: "https://www.llamaindex.ai/" },
  { name: "HuggingFace", color: "#FFD21E", url: "https://huggingface.co/" },
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
