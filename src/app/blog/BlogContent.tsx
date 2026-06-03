"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categoryEmoji: Record<string, string> = {
  "Desarrollo Web": "💻",
  "Ciberseguridad": "🔒",
  "Inteligencia Artificial": "🤖",
};

const categoryColor: Record<string, string> = {
  "Desarrollo Web": "#378ADD",
  "Ciberseguridad": "#e11d48",
  "Inteligencia Artificial": "#8b5cf6",
};

const allArticles = [
  {
    slug: "cuanto-cuesta-pagina-web-chile-2026",
    title: "Cuánto cuesta hacer una página web en Chile en 2026",
    excerpt: "Desde $100.000 hasta $15.000.000+. Te explicamos por qué hay tanta diferencia y cómo elegir la opción correcta para tu negocio.",
    date: "2026-06-03",
    category: "Desarrollo Web",
    readTime: "12 min",
  },
  {
    slug: "wordpress-vs-codigo-a-medida",
    title: "WordPress vs Código a medida: Cuál elegir para tu empresa",
    excerpt: "Comparamos rendimiento, seguridad, escalabilidad y costo total de propiedad. La respuesta depende de tu etapa de crecimiento.",
    date: "2026-05-28",
    category: "Desarrollo Web",
    readTime: "10 min",
  },
  {
    slug: "ciberseguridad-pymes-chile",
    title: "Ciberseguridad para PYMES en Chile: Guía práctica 2026",
    excerpt: "El 43% de las PYMES chilenas han sufrido algún incidente de seguridad. Aprende a proteger tu empresa sin gastar una fortuna.",
    date: "2026-05-20",
    category: "Ciberseguridad",
    readTime: "14 min",
  },
  {
    slug: "ia-empresas-chile-como-empezar",
    title: "Inteligencia Artificial para empresas chilenas: Cómo empezar sin morir en el intento",
    excerpt: "De ChatGPT a sistemas RAG personalizados. Una guía práctica para integrar IA en tu empresa paso a paso.",
    date: "2026-05-15",
    category: "Inteligencia Artificial",
    readTime: "15 min",
  },
];

const categories = ["Todas", ...Array.from(new Set(allArticles.map((a) => a.category)))];

export default function BlogContent() {
  const [activeFilter, setActiveFilter] = useState("Todas");

  const filtered = activeFilter === "Todas"
    ? allArticles
    : allArticles.filter((a) => a.category === activeFilter);

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest"
              style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}
            >
              Blog
            </span>
            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
              style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
            >
              Tecnología para <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>empresas reales</em>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
              Guías prácticas, comparativas y consejos para tomar mejores decisiones tecnológicas.
            </p>
            <p className="text-sm mt-3" style={{ color: "var(--muted)" }}>
              {allArticles.length} artículos
            </p>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-1.5 rounded-full text-xs font-medium border transition-all"
              style={{
                borderColor: activeFilter === cat ? "var(--accent)" : "var(--border)",
                background: activeFilter === cat ? "rgba(55,138,221,0.1)" : "transparent",
                color: activeFilter === cat ? "var(--accent-light)" : "var(--muted)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 100}>
              <Link
                href={`/blog/${article.slug}`}
                className="group block rounded-2xl border p-6 md:p-7 transition-all duration-300 h-full"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "var(--border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-dim)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(55, 138, 221, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xl"
                    aria-hidden
                  >
                    {categoryEmoji[article.category] ?? "📄"}
                  </span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${categoryColor[article.category] ?? "var(--accent)"}15`,
                      color: categoryColor[article.category] ?? "var(--accent-light)",
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs ml-auto" style={{ color: "var(--muted)" }}>
                    {article.readTime}
                  </span>
                </div>

                <h2
                  className="text-lg md:text-xl font-semibold mb-3 leading-snug group-hover:text-[var(--accent-light)] transition-colors"
                  style={{ color: "var(--foreground)" }}
                >
                  {article.title}
                </h2>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "#9aa8c2" }}>
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    {article.date}
                  </span>
                  <span
                    className="text-xs font-medium group-hover:translate-x-0.5 transition-transform"
                    style={{ color: "var(--accent-light)" }}
                  >
                    Leer →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
