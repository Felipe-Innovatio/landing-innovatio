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
        title="Tu aplicación,"
        titleAccent="siempre arriba"
        intro="Gestionamos tu infraestructura en la nube para que no pierdas el sueño con servidores. Escalado automático, respaldos y monitoreo continuo, administrados por ingenieros."
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
        ctaTitle="¿Migramos?"
        ctaText="Cuéntanos tu proyecto y te armamos una arquitectura a tu medida, con costos claros."
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
