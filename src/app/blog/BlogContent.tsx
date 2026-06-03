"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const articles = [
  {
    slug: "cuanto-cuesta-pagina-web-chile-2026",
    title: "Cuánto cuesta hacer una página web en Chile en 2026",
    excerpt: "Desde $100.000 hasta $15.000.000+. Te explicamos por qué hay tanta diferencia y cómo elegir la opción correcta para tu negocio.",
    date: "2026-06-03",
    category: "Desarrollo Web",
    readTime: "8 min",
  },
  {
    slug: "wordpress-vs-codigo-a-medida",
    title: "WordPress vs Código a medida: Cuál elegir para tu empresa",
    excerpt: "Comparamos rendimiento, seguridad, escalabilidad y costo total de propiedad. La respuesta depende de tu etapa de crecimiento.",
    date: "2026-05-28",
    category: "Desarrollo Web",
    readTime: "6 min",
  },
  {
    slug: "ciberseguridad-pymes-chile",
    title: "Ciberseguridad para PYMES en Chile: Guía práctica 2026",
    excerpt: "El 43% de las PYMES chilenas han sufrido algún incidente de seguridad. Aprende a proteger tu empresa sin gastar una fortuna.",
    date: "2026-05-20",
    category: "Ciberseguridad",
    readTime: "10 min",
  },
  {
    slug: "ia-empresas-chile-como-empezar",
    title: "Inteligencia Artificial para empresas chilenas: Cómo empezar sin morir en el intento",
    excerpt: "De ChatGPT a sistemas RAG personalizados. Una guía práctica para integrar IA en tu empresa paso a paso.",
    date: "2026-05-15",
    category: "Inteligencia Artificial",
    readTime: "12 min",
  },
];

export default function BlogContent() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>Blog</span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
              Tecnología para <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>empresas reales</em>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>Guías prácticas, comparativas y consejos para tomar mejores decisiones tecnológicas.</p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {articles.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 100}>
              <a href={`/blog/${article.slug}`} className="block rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(55,138,221,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(55,138,221,0.08)", color: "var(--accent-light)" }}>{article.category}</span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>{article.date} · {article.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>{article.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{article.excerpt}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
