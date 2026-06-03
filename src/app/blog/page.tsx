import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | Innovatio-IT — Tecnología para Empresas Chilenas",
  description: "Artículos sobre desarrollo de software, ciberseguridad, inteligencia artificial y tecnología para empresas en Chile.",
};

export default function BlogPage() {
  return <BlogContent />;
}
