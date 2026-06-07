import ScrollReveal from "@/components/ui/ScrollReveal";

const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS",
  "Google Cloud", "Docker", "Kubernetes", "PostgreSQL", "OpenAI", "Anthropic",
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32" style={{ background: "var(--surface-2)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-7">
            <ScrollReveal>
              <h2
                className="display font-bold leading-tight"
                style={{ fontSize: "clamp(28px, 3.8vw, 48px)", color: "var(--foreground)" }}
              >
                Un estudio chico, senior y sin vueltas.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
                Somos ingenieros que diseñan, construyen y mantienen lo que
                entregan. Usamos IA para avanzar rápido y revisamos cada
                entrega antes de que llegue a tus manos. Sin intermediarios ni
                promesas infladas: lo que conversamos es lo que se construye.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal delay={180}>
              <div className="card p-7">
                <p className="text-[14px] font-semibold mb-4" style={{ color: "var(--foreground)" }}>
                  Herramientas que usamos a diario
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="text-[13px] font-medium px-3 py-1.5 rounded-full"
                      style={{ background: "var(--background)", color: "var(--muted)", border: "1px solid var(--line)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
