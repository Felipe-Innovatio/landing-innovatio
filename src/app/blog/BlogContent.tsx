"use client";

import { useState, useMemo } from "react";
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

const categoryBg: Record<string, string> = {
  "Desarrollo Web": "rgba(55,138,221,0.08)",
  "Ciberseguridad": "rgba(225,29,72,0.08)",
  "Inteligencia Artificial": "rgba(139,92,246,0.08)",
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

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function BlogContent() {
  const [activeFilter, setActiveFilter] = useState("Todas");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = activeFilter === "Todas" ? allArticles : allArticles.filter((a) => a.category === activeFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q));
    }
    return result;
  }, [activeFilter, search]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <ScrollReveal>
          <div className="relative rounded-3xl border p-8 md:p-14 mb-14 overflow-hidden" style={{ borderColor: "var(--border)", background: "linear-gradient(135deg, rgba(55,138,221,0.06) 0%, rgba(10,14,26,0.9) 60%)" }}>
            <div className="relative z-10">
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest" style={{ background: "rgba(55,138,221,0.12)", color: "var(--accent-light)" }}>
                Blog
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-5" style={{ color: "var(--foreground)", letterSpacing: "-0.04em" }}>
                Tecnología para <em className="not-italic" style={{ color: "var(--accent)" }}>empresas reales</em>
              </h1>
              <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-8" style={{ color: "#9aa8c2" }}>
                Guías prácticas, comparativas y consejos para tomar mejores decisiones tecnológicas. Sin buzzwords, sin relleno.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
                  {allArticles.length} artículos
                </span>
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full" style={{ background: "var(--accent-light)" }} />
                  {categories.length - 1} categorías
                </span>
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#8b5cf6" }} />
                  Última actualización: junio 2026
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Search + Filters */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--muted)" }}>
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-[var(--accent)]"
                style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)", color: "var(--foreground)" }}
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="px-4 py-2 rounded-full text-xs font-medium border transition-all"
                  style={{
                    borderColor: activeFilter === cat ? "var(--accent)" : "var(--border)",
                    background: activeFilter === cat ? "rgba(55,138,221,0.12)" : "transparent",
                    color: activeFilter === cat ? "var(--accent-light)" : "var(--muted)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Featured article */}
        {featured && (
          <ScrollReveal delay={150}>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-2xl border p-6 md:p-10 mb-8 transition-all duration-300"
              style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-dim)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(55, 138, 221, 0.10)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "var(--accent)", color: "#fff" }}>
                  Destacado
                </span>
                <span className="text-xl" aria-hidden>{categoryEmoji[featured.category] ?? "📄"}</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: categoryBg[featured.category], color: categoryColor[featured.category] }}>
                  {featured.category}
                </span>
                <span className="text-xs ml-auto" style={{ color: "var(--muted)" }}>{featured.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-[var(--accent-light)] transition-colors" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
                {featured.title}
              </h2>
              <p className="text-base leading-relaxed max-w-3xl mb-5" style={{ color: "#9aa8c2" }}>
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--accent-light)" }}>
                <span>Leer artículo</span>
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* Grid */}
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 80}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col rounded-2xl border p-6 transition-all duration-300 h-full"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "var(--border)" }}
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
                    <span className="text-2xl" aria-hidden>{categoryEmoji[article.category] ?? "📄"}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: categoryBg[article.category], color: categoryColor[article.category] }}>
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 leading-snug group-hover:text-[var(--accent-light)] transition-colors" style={{ color: "var(--foreground)" }}>
                    {article.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#9aa8c2" }}>
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{article.date}</span>
                    <span className="text-xs font-medium" style={{ color: "var(--accent-light)" }}>{article.readTime}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg mb-2" style={{ color: "var(--foreground)" }}>No encontramos artículos</p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>Probá con otra búsqueda o categoría.</p>
          </div>
        )}

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-16 rounded-2xl border p-8 md:p-12 text-center" style={{ background: "rgba(55,138,221,0.03)", borderColor: "var(--border)" }}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{ color: "var(--foreground)" }}>
              ¿Necesitas ayuda con tu proyecto?
            </h3>
            <p className="text-sm md:text-base max-w-xl mx-auto mb-6" style={{ color: "var(--muted)" }}>
              Escríbenos y te respondemos en menos de 24 horas. Sin compromiso, sin costo de diagnóstico.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Hablemos de tu proyecto →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
