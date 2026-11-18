import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Hosting e Infraestructura Cloud | Innovatio-IT Chile",
  description: "Infraestructura cloud gestionada con AWS, GCP, Docker y Kubernetes. Desde $150.000 CLP/mes. Escalado automático, backups y monitoreo 24/7.",
  keywords: "hosting cloud Chile, infraestructura AWS, Kubernetes Docker, servidores gestionados",
};

export default function HostingPage() {
  return (
    <>
      <ServiceDetail
        code="002"
        area="Hosting"
        title="Infraestructura"
        titleAccent="administrada"
        intro="Administramos la infraestructura en la nube: despliegues, respaldos, monitoreo y certificados. Incluye optimización de costos y alertas cuando algo falla."
        techs={["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Linux"]}
        features={[
          "Infraestructura como código",
          "Escalado automático",
          "Backups y monitoreo 24/7",
          "SSL + CDN",
          "Optimización de costos",
          "Alertas en tiempo real",
        ]}
        price="desde $150.000/mes"
        priceNote="+ IVA"
        timeLabel="Setup inicial"
        timeValue="1 a 2 semanas"
        ctaTitle="Revisemos tu infraestructura."
        ctaText="Cuéntanos qué tienes hoy y te proponemos una arquitectura con costos mensuales estimados."
        ctaButton="Solicitar cotización"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Hosting e Infraestructura Cloud",
          provider: { "@type": "Organization", name: "Innovatio-IT" },
          areaServed: { "@type": "Country", name: "Chile" },
          description: "Gestión de infraestructura cloud con AWS, GCP, Docker y Kubernetes.",
          offers: {
            "@type": "Offer",
            price: "150000",
            priceCurrency: "CLP",
            availability: "https://schema.org/InStock",
          },
        }),
      }} />
    </>
  );
}
