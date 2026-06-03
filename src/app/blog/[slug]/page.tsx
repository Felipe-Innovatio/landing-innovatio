import { Metadata } from "next";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articles } from "./articles";

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Artículo no encontrado" };
  return { title: article.title, description: article.description };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticleLayout slug={slug} />;
}
