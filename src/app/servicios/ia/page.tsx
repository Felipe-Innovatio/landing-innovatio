import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Inteligencia Artificial para Empresas | Innovatio-IT Chile",
  description: "Integración de modelos de lenguaje, búsqueda sobre datos propios y automatización de procesos. Medimos el resultado antes de ampliar el alcance.",
  keywords: "inteligencia artificial Chile, IA empresas, LLMs, RAG, automatización, machine learning",
};

export default function IaPage() {
  return (
    <>
      <ServiceDetail
        code="005"
        area="Inteligencia Artificial"
        title="Automatización"
        titleAccent="con IA"
        intro="Integramos modelos de lenguaje en procesos concretos: atención de consultas, clasificación de documentos, generación de borradores y búsqueda sobre datos propios. Medimos el resultado antes de ampliar el alcance."
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
        ctaTitle="Cuéntanos el proceso."
        ctaText="Describimos juntos el proceso que quieres automatizar y estimamos el ahorro antes de cotizar."
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
