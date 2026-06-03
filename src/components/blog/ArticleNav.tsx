import Link from "next/link";

const navArticles = [
  { slug: "cuanto-cuesta-pagina-web-chile-2026", title: "Cuánto cuesta hacer una página web en Chile en 2026", category: "Desarrollo Web" },
  { slug: "wordpress-vs-codigo-a-medida", title: "WordPress vs Código a medida: Cuál elegir para tu empresa", category: "Desarrollo Web" },
  { slug: "ciberseguridad-pymes-chile", title: "Ciberseguridad para PYMES en Chile: Guía práctica 2026", category: "Ciberseguridad" },
  { slug: "ia-empresas-chile-como-empezar", title: "Inteligencia Artificial para empresas chilenas: Cómo empezar sin morir en el intento", category: "Inteligencia Artificial" },
];

export default function ArticleNav({ currentSlug }: { currentSlug: string }) {
  const idx = navArticles.findIndex((a) => a.slug === currentSlug);
  if (idx === -1) return null;

  const prev = navArticles[idx - 1];
  const next = navArticles[idx + 1];

  return (
    <div className="grid gap-4 sm:grid-cols-2 mt-12">
      {prev && (
        <Link
          href={`/blog/${prev.slug}`}
          className="group rounded-2xl border p-5 transition-all hover:-translate-y-0.5"
          style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
        >
          <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: "var(--muted)" }}>← Anterior</span>
          <span className="text-sm font-medium block group-hover:text-[var(--accent-light)] transition-colors" style={{ color: "var(--foreground)" }}>{prev.title}</span>
          <span className="text-xs mt-1 block" style={{ color: "var(--accent-light)" }}>{prev.category}</span>
        </Link>
      )}
      {next && (
        <Link
          href={`/blog/${next.slug}`}
          className="group rounded-2xl border p-5 transition-all hover:-translate-y-0.5 sm:text-right"
          style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
        >
          <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: "var(--muted)" }}>Siguiente →</span>
          <span className="text-sm font-medium block group-hover:text-[var(--accent-light)] transition-colors" style={{ color: "var(--foreground)" }}>{next.title}</span>
          <span className="text-xs mt-1 block" style={{ color: "var(--accent-light)" }}>{next.category}</span>
        </Link>
      )}
    </div>
  );
}
