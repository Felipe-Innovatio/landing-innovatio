import {
  siReact, siNextdotjs, siTypescript, siTailwindcss, siVuedotjs,
  siNodedotjs, siPython, siFastapi, siGraphql, siSupabase,
  siGooglecloud, siDocker, siKubernetes, siTerraform, siLinux,
  siPostgresql, siMongodb, siRedis, siMysql, siFirebase,
  siAnthropic, siGooglegemini, siOllama, siLangchain, siHuggingface,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

interface Tech {
  name: string;
  icon?: SimpleIcon;
  color?: string;
  url?: string;
}

const technologies: Tech[] = [
  // Frontend
  { name: "React", icon: siReact, url: "https://react.dev/" },
  { name: "Next.js", icon: siNextdotjs, url: "https://nextjs.org/" },
  { name: "TypeScript", icon: siTypescript, url: "https://www.typescriptlang.org/" },
  { name: "TailwindCSS", icon: siTailwindcss, url: "https://tailwindcss.com/" },
  { name: "Vue.js", icon: siVuedotjs, url: "https://vuejs.org/" },
  // Backend
  { name: "Node.js", icon: siNodedotjs, url: "https://nodejs.org/" },
  { name: "Python", icon: siPython, url: "https://www.python.org/" },
  { name: "FastAPI", icon: siFastapi, url: "https://fastapi.tiangolo.com/" },
  { name: "GraphQL", icon: siGraphql, url: "https://graphql.org/" },
  { name: "Supabase", icon: siSupabase, url: "https://supabase.com/" },
  // Cloud
  { name: "AWS", color: "#FF9900", url: "https://aws.amazon.com/" },
  { name: "Google Cloud", icon: siGooglecloud, url: "https://cloud.google.com/" },
  { name: "Azure", color: "#0089D6", url: "https://azure.microsoft.com/" },
  { name: "Docker", icon: siDocker, url: "https://www.docker.com/" },
  { name: "Kubernetes", icon: siKubernetes, url: "https://kubernetes.io/" },
  { name: "Terraform", icon: siTerraform, url: "https://www.terraform.io/" },
  { name: "Linux", icon: siLinux, url: "https://www.linux.org/" },
  // Bases de datos
  { name: "PostgreSQL", icon: siPostgresql, url: "https://www.postgresql.org/" },
  { name: "MongoDB", icon: siMongodb, url: "https://www.mongodb.com/" },
  { name: "Redis", icon: siRedis, url: "https://redis.io/" },
  { name: "MySQL", icon: siMysql, url: "https://www.mysql.com/" },
  { name: "Firebase", icon: siFirebase, url: "https://firebase.google.com/" },
  // IA Cloud
  { name: "OpenAI", color: "#74AA9C", url: "https://openai.com/" },
  { name: "Anthropic", icon: siAnthropic, url: "https://anthropic.com/" },
  { name: "Gemini", icon: siGooglegemini, url: "https://gemini.google.com/" },
  { name: "AWS Bedrock", url: "https://aws.amazon.com/bedrock/" },
  // IA Local
  { name: "Ollama", icon: siOllama, url: "https://ollama.com/" },
  { name: "LangChain", icon: siLangchain, url: "https://www.langchain.com/" },
  { name: "HuggingFace", icon: siHuggingface, url: "https://huggingface.co/" },
];

function iconColor(hex: string): string {
  if (hex === "FFFFFF" || hex === "000000") return "var(--foreground)";
  return `#${hex}`;
}

export default function TechStack() {
  const doubled = [...technologies, ...technologies];

  return (
    <section
      className="py-16 overflow-hidden"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <p
        className="text-center text-xs font-semibold uppercase tracking-widest mb-8"
        style={{ color: "var(--muted)" }}
      >
        Tecnologías que usamos
      </p>

      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <a
              key={`${tech.name}-${i}`}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 mx-5 shrink-0 hover:opacity-80 transition-opacity"
            >
              {tech.icon ? (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  aria-hidden="true"
                  style={{ fill: iconColor(tech.icon.hex), opacity: 0.7, flexShrink: 0 }}
                >
                  <path d={tech.icon.path} />
                </svg>
              ) : tech.color ? (
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: tech.color, opacity: 0.8 }}
                />
              ) : null}
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
