import { Metadata } from "next";
import ServiciosPage from "./ServiciosPage";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Desarrollo web, ciberseguridad, hosting en la nube, consultoría tecnológica e inteligencia artificial. Soluciones a medida para empresas chilenas.",
  keywords: "desarrollo web Chile, ciberseguridad empresas, hosting cloud, consultoría tecnológica, inteligencia artificial Chile",
};

export default function Page() {
  return (
    <>
      <ServiciosPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "Service",
              position: 1,
              name: "Diseño y Desarrollo",
              description: "Desarrollo de sitios web, aplicaciones y plataformas a medida.",
              provider: { "@type": "Organization", name: "Innovatio-IT" },
              areaServed: { "@type": "Country", name: "Chile" },
              offers: { "@type": "Offer", price: "800000", priceCurrency: "CLP" },
            },
            {
              "@type": "Service",
              position: 2,
              name: "Hosting e Infraestructura",
              description: "Gestión de infraestructura cloud con AWS, GCP, Docker y Kubernetes.",
              provider: { "@type": "Organization", name: "Innovatio-IT" },
              areaServed: { "@type": "Country", name: "Chile" },
              offers: { "@type": "Offer", price: "150000", priceCurrency: "CLP" },
            },
            {
              "@type": "Service",
              position: 3,
              name: "Consultoría Tecnológica",
              description: "Auditoría técnica, recomendación de stack y roadmap de migración.",
              provider: { "@type": "Organization", name: "Innovatio-IT" },
              areaServed: { "@type": "Country", name: "Chile" },
            },
            {
              "@type": "Service",
              position: 4,
              name: "Ciberseguridad",
              description: "Pentesting, hardening de servidores, SIEM e ISO 27001.",
              provider: { "@type": "Organization", name: "Innovatio-IT" },
              areaServed: { "@type": "Country", name: "Chile" },
            },
            {
              "@type": "Service",
              position: 5,
              name: "Inteligencia Artificial",
              description: "Integración de LLMs, sistemas RAG, automatización con IA.",
              provider: { "@type": "Organization", name: "Innovatio-IT" },
              areaServed: { "@type": "Country", name: "Chile" },
            },
          ],
        }),
      }} />
    </>
  );
}
