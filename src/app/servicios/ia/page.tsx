import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Inteligencia Artificial para Empresas | Innovatio-IT Chile",
  description: "Integración de LLMs, sistemas RAG, automatización con IA y ML a medida. Potencia tu equipo sin reemplazarlo. Cotiza sin compromiso.",
  keywords: "inteligencia artificial Chile, IA empresas, LLMs, RAG, automatización, machine learning",
};

export default function IaPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>
              ◉ Inteligencia Artificial
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
              IA que <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>potencia</em>, no reemplaza
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
              Dejemos que la IA se encargue de lo aburrido. Así tu equipo puede enfocarse en lo que realmente importa y tomar mejores decisiones.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>Tecnologías</h2>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python", "TensorFlow"].map((t) => (
                  <span key={t} className="text-sm px-3 py-1.5 rounded-full" style={{ background: "rgba(55,138,221,0.08)", color: "var(--accent-light)" }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>Incluye</h2>
              <ul className="space-y-2">
                {["Integración de LLMs", "Sistemas RAG personalizados", "Automatización con IA", "ML a medida", "Gobernanza de IA", "Capacitación de equipo"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted)" }}><span style={{ color: "var(--accent)" }}>—</span>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl p-8 text-center mb-16" style={{ background: "rgba(55,138,221,0.04)", border: "1px solid var(--border)" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div><span className="text-3xl font-bold" style={{ color: "var(--accent)" }}>A cotizar</span></div>
              <div style={{ color: "var(--muted)" }}>|</div>
              <div style={{ color: "var(--muted)" }}>Por <strong style={{ color: "var(--foreground)" }}>alcance</strong></div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(55,138,221,0.04)", border: "1px solid rgba(55,138,221,0.15)" }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>¿Listo para potenciar tu equipo?</h2>
            <p className="mb-6" style={{ color: "var(--muted)" }}>Cuéntanos tu caso de uso y te proponemos una solución concreta.</p>
            <a href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "var(--accent)", color: "#fff" }}>Solicitar propuesta →</a>
          </div>
        </ScrollReveal>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Inteligencia Artificial para Empresas",
          provider: { "@type": "Organization", name: "Innovatio-IT" },
          areaServed: { "@type": "Country", name: "Chile" },
          description: "Integración de LLMs, sistemas RAG, automatización con IA y ML a medida.",
        }),
      }} />
    </main>
  );
}
