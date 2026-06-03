import Link from "next/link";
import { articles } from "@/app/blog/[slug]/ArticleContent";
import ArticleContent from "@/app/blog/[slug]/ArticleContent";
import TableOfContents from "./TableOfContents";
import ShareBar from "./ShareBar";
import ArticleNav from "./ArticleNav";
import { notFound } from "next/navigation";

export default function ArticleLayout({ slug }: { slug: string }) {
  const article = articles[slug];
  if (!article) return notFound();

  return (
    <main className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm" style={{ color: "var(--muted)" }}>
          <Link href="/blog" className="hover:text-[var(--accent-light)] transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--accent-light)]">{article.category}</span>
        </nav>

        {/* Header */}
        <header className="mb-10 max-w-3xl">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-wider"
            style={{ background: "rgba(55,138,221,0.08)", color: "var(--accent-light)" }}
          >
            {article.category}
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
          >
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "var(--muted)" }}>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} de lectura</span>
          </div>
        </header>

        {/* Layout: sidebar + content */}
        <div className="flex gap-12">
          {/* TOC Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <TableOfContents contentHtml={article.content} />
          </aside>

          {/* Main content */}
          <article className="flex-1 min-w-0 max-w-3xl">
            <ArticleContent slug={slug} />

            {/* Share bar */}
            <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
              <ShareBar title={article.title} />
            </div>

            {/* CTA card */}
            <div
              className="mt-10 rounded-2xl p-8 text-center border"
              style={{ background: "rgba(55,138,221,0.04)", borderColor: "rgba(55,138,221,0.15)" }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                ¿Te sirvió este artículo?
              </h3>
              <p className="mb-6 text-sm" style={{ color: "var(--muted)" }}>
                Si tienes un proyecto en mente o quieres profundizar en este tema, conversemos sin compromiso.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  Solicitar asesoría →
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm border transition-all hover:border-[var(--accent)]"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            {/* Prev / Next */}
            <ArticleNav currentSlug={slug} />
          </article>
        </div>
      </div>
    </main>
  );
}
