import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Inteligencia Artificial para Empresas | Innovatio-IT Chile",
  description: "Integración de LLMs, sistemas RAG, automatización con IA y ML a medida. Potencia tu equipo sin reemplazarlo. Cotiza sin compromiso.",
  keywords: "inteligencia artificial Chile, IA empresas, LLMs, RAG, automatización, machine learning",
};

export default function IaPage() {
  return (
    <>
      <ServiceDetail
        code="005"
        area="Inteligencia Artificial"
        title="IA que potencia,"
        titleAccent="no reemplaza"
        intro="La IA se encarga de lo repetitivo y tu equipo se enfoca en lo que importa. Integramos modelos de lenguaje, sistemas RAG y automatización en tus procesos, con supervisión profesional."
        techs={["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python", "TensorFlow"]}
        features={[
          "Integración de LLMs",
          "Sistemas RAG personalizados",
          "Automatización con IA",
          "ML a medida",
          "Gobernanza de IA",
          "Capacitación de equipo",
        ]}
        price="A cotizar"
        priceNote=""
        timeLabel="Modalidad"
        timeValue="Por alcance"
        ctaTitle="¿Automatizamos?"
        ctaText="Cuéntanos tu caso de uso y te proponemos una solución concreta, con costos operativos claros."
        ctaButton="Solicitar propuesta"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Inteligencia Artificial para Empresas",
          provider: { "@type": "Organization", name: "Innovatio-IT" },
          areaServed: { "@type": "Country", name: "Chile" },
          description: "Integración de LLMs, sistemas RAG, automatización con IA y ML a medida.",
        }),
      }} />
    </>
  );
}
