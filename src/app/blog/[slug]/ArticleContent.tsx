"use client";

import { notFound } from "next/navigation";
import { articles } from "./articles";

export default function ArticleContent({ slug, contentOverride }: { slug: string; contentOverride?: string }) {
  const article = articles[slug];
  if (!article) return notFound();

  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: contentOverride ?? article.content }}
    />
  );
}
