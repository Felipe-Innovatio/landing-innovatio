"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const allArticles = [
  {
    slug: "cuanto-cuesta-pagina-web-chile-2026",
    title: "Cuánto cuesta hacer una página web en Chile en 2026",
    excerpt:
      "Desde $100.000 hasta $15.000.000+. Te explicamos por qué hay tanta diferencia y cómo elegir la opción correcta para tu negocio.",
    date: "3 jun 2026",
    category: "Desarrollo Web",
    readTime: "12 min",
  },
  {
    slug: "wordpress-vs-codigo-a-medida",
    title: "WordPress vs código a medida: cuál elegir para tu empresa",
    excerpt:
      "Comparamos rendimiento, seguridad, escalabilidad y costo total. La respuesta depende de tu etapa de crecimiento.",
    date: "28 may 2026",
    category: "Desarrollo Web",
    readTime: "10 min",
  },
  {
    slug: "ciberseguridad-pymes-chile",
    title: "Ciberseguridad para pymes en Chile: guía práctica 2026",
    excerpt:
      "El 43% de las pymes chilenas ha sufrido algún incidente de seguridad. Aprende a proteger tu empresa sin gastar una fortuna.",
    date: "20 may 2026",
    category: "Ciberseguridad",
    readTime: "14 min",
  },
  {
    slug: "ia-empresas-chile-como-empezar",
    title: "IA para empresas chilenas: cómo empezar sin morir en el intento",
    excerpt:
      "De ChatGPT a sistemas RAG personalizados. Una guía práctica para integrar IA en tu empresa paso a paso.",
    date: "15 may 2026",
    category: "Inteligencia Artificial",
    readTime: "15 min",
  },
];

const categories = ["Todas", ...Array.from(new Set(allArticles.map((a) => a.category)))];

export default function BlogContent() {
  const [activeFilter, setActiveFilter] = useState("Todas");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result =
      activeFilter === "Todas"
        ? allArticles
        : allArticles.filter((a) => a.category === activeFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeFilter, search]);

  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 pt-36 md:pt-44 pb-10 md:pb-14">
        <ScrollReveal>
          <h1
            className="display font-extrabold"
            style={{ fontSize: "clamp(42px, 7vw, 96px)", color: "var(--foreground)" }}
          >
            Blog<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
            Guías prácticas y comparativas para tomar mejores decisiones
            tecnológicas, escritas por quienes construyen.
          </p>
        </ScrollReveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <ScrollReveal delay={120}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-10">
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input sm:max-w-xs"
              aria-label="Buscar artículos"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className="text-[13.5px] font-semibold px-4 py-2 rounded-full transition-all duration-200"
                    style={{
                      background: isActive ? "var(--foreground)" : "var(--surface)",
                      color: isActive ? "var(--background)" : "var(--muted)",
                      border: "1px solid " + (isActive ? "var(--foreground)" : "var(--line)"),
                      cursor: "pointer",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 70}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="card card-hover flex flex-col p-7 h-full"
                  style={{ textDecoration: "none" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[12.5px] font-semibold px-3 py-1 rounded-full"
                      style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                    >
                      {article.category}
                    </span>
                    <span className="text-[13px]" style={{ color: "var(--muted)" }}>
                      {article.readTime} de lectura
                    </span>
                  </div>
                  <h2
                    className="display text-xl md:text-[22px] font-bold leading-snug mb-3"
                    style={{ color: "var(--foreground)" }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-[14.5px] leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                    {article.excerpt}
                  </p>
                  <p className="text-[13px] mt-5" style={{ color: "var(--muted)" }}>
                    {article.date}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="card p-10 text-center">
            <p className="display text-xl font-bold mb-1" style={{ color: "var(--foreground)" }}>
              Sin resultados
            </p>
            <p className="text-[14px]" style={{ color: "var(--muted)" }}>
              Prueba con otra búsqueda u otra categoría.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
