import { Metadata } from "next";
import ArticleContent from "./ArticleContent";

const articles: Record<string, { title: string; description: string; date: string; readTime: string; category: string; content: string }> = {
  "cuanto-cuesta-pagina-web-chile-2026": {
    title: "Cuánto cuesta hacer una página web en Chile en 2026",
    description: "Desde $100.000 hasta $15.000.000+. Te explicamos por qué hay tanta diferencia y cómo elegir la opción correcta para tu negocio.",
    date: "2026-06-03",
    readTime: "8 min",
    category: "Desarrollo Web",
    content: ``,
  },
  "wordpress-vs-codigo-a-medida": {
    title: "WordPress vs Código a medida: Cuál elegir para tu empresa",
    description: "Comparamos rendimiento, seguridad, escalabilidad y costo total de propiedad. La respuesta depende de tu etapa de crecimiento.",
    date: "2026-05-28",
    readTime: "6 min",
    category: "Desarrollo Web",
    content: ``,
  },
  "ciberseguridad-pymes-chile": {
    title: "Ciberseguridad para PYMES en Chile: Guía práctica 2026",
    description: "El 43% de las PYMES chilenas han sufrido algún incidente de seguridad. Aprende a proteger tu empresa sin gastar una fortuna.",
    date: "2026-05-20",
    readTime: "10 min",
    category: "Ciberseguridad",
    content: ``,
  },
  "ia-empresas-chile-como-empezar": {
    title: "Inteligencia Artificial para empresas chilenas: Cómo empezar sin morir en el intento",
    description: "De ChatGPT a sistemas RAG personalizados. Una guía práctica para integrar IA en tu empresa paso a paso.",
    date: "2026-05-15",
    readTime: "12 min",
    category: "Inteligencia Artificial",
    content: ``,
  },
};

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
  return <ArticleContent slug={slug} />;
}
