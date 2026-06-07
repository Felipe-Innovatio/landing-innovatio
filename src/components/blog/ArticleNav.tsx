import Link from "next/link";

const navArticles = [
  { slug: "cuanto-cuesta-pagina-web-chile-2026", title: "Cuánto cuesta hacer una página web en Chile en 2026", category: "Desarrollo Web" },
  { slug: "wordpress-vs-codigo-a-medida", title: "WordPress vs código a medida: cuál elegir para tu empresa", category: "Desarrollo Web" },
  { slug: "ciberseguridad-pymes-chile", title: "Ciberseguridad para pymes en Chile: guía práctica 2026", category: "Ciberseguridad" },
  { slug: "ia-empresas-chile-como-empezar", title: "IA para empresas chilenas: cómo empezar sin morir en el intento", category: "Inteligencia Artificial" },
];

export default function ArticleNav({ currentSlug }: { currentSlug: string }) {
  const idx = navArticles.findIndex((a) => a.slug === currentSlug);
  if (idx === -1) return null;

  const prev = navArticles[idx - 1];
  const next = navArticles[idx + 1];

  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-10">
      {prev ? (
        <Link href={`/blog/${prev.slug}`} className="card card-hover block p-5" style={{ textDecoration: "none" }}>
          <span className="block text-[12.5px] font-semibold mb-1.5" style={{ color: "var(--muted)" }}>
            ← Anterior
          </span>
          <span className="block text-[14.5px] font-bold leading-snug" style={{ color: "var(--foreground)" }}>
            {prev.title}
          </span>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}
      {next ? (
        <Link href={`/blog/${next.slug}`} className="card card-hover block p-5 sm:text-right" style={{ textDecoration: "none" }}>
          <span className="block text-[12.5px] font-semibold mb-1.5" style={{ color: "var(--muted)" }}>
            Siguiente →
          </span>
          <span className="block text-[14.5px] font-bold leading-snug" style={{ color: "var(--foreground)" }}>
            {next.title}
          </span>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}
    </div>
  );
}
