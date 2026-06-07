import Link from "next/link";
import { articles } from "@/app/blog/[slug]/articles";
import ArticleContent from "@/app/blog/[slug]/ArticleContent";
import TableOfContents from "./TableOfContents";
import ShareBar from "./ShareBar";
import ArticleNav from "./ArticleNav";
import { notFound } from "next/navigation";

export default function ArticleLayout({ slug }: { slug: string }) {
  const article = articles[slug];
  if (!article) return notFound();

  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 pt-36 md:pt-44 pb-10">
        <p className="text-[14px] font-semibold mb-5">
          <Link href="/blog" className="link-slide" style={{ color: "var(--muted)" }}>
            Blog
          </Link>
          <span style={{ color: "var(--muted)" }}> / </span>
          <span style={{ color: "var(--accent)" }}>{article.category}</span>
        </p>
        <h1
          className="display font-extrabold max-w-4xl"
          style={{ fontSize: "clamp(30px, 4.5vw, 60px)", color: "var(--foreground)" }}
        >
          {article.title}
        </h1>
        <p className="mt-5 text-[14px]" style={{ color: "var(--muted)" }}>
          {article.date} · {article.readTime} de lectura
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="hidden lg:block lg:col-span-3">
            <TableOfContents contentHtml={article.content} />
          </aside>

          <article className="lg:col-span-9 max-w-3xl">
            <ArticleContent slug={slug} />

            <div className="mt-12 pt-7" style={{ borderTop: "1px solid var(--line)" }}>
              <ShareBar title={article.title} />
            </div>

            <div
              className="mt-10 rounded-[24px] px-7 py-10 md:px-10"
              style={{ background: "var(--accent)" }}
            >
              <h3 className="display text-2xl md:text-3xl font-bold" style={{ color: "var(--on-accent)" }}>
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="mt-2.5 text-[15px] max-w-md" style={{ color: "rgba(255,255,255,0.85)" }}>
                Conversemos sin compromiso. Respondemos en menos de 24 horas.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contacto" className="pill-light">
                  Hablemos
                </Link>
                <Link
                  href="/servicios"
                  className="link-slide inline-flex items-center text-[15px] font-semibold"
                  style={{ color: "var(--on-accent)" }}
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            <ArticleNav currentSlug={slug} />
          </article>
        </div>
      </section>
    </main>
  );
}
