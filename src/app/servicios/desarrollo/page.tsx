import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Desarrollo Web y Aplicaciones | Innovatio-IT Chile",
  description: "Desarrollamos sitios web, aplicaciones y plataformas a medida con React, Next.js y Node.js. Desde $800.000 CLP. Entrega en 2-6 semanas.",
  keywords: "desarrollo web Chile, crear página web Santiago, aplicación web a medida, React Next.js desarrolladores",
};

export default function DesarrolloPage() {
  return (
    <>
      <ServiceDetail
        code="001"
        area="Desarrollo"
        title="Tu idea,"
        titleAccent="en producción"
        intro="Desarrollamos sitios web, aplicaciones y plataformas a medida que funcionan, escalan y se ven bien. Sin plantillas ni atajos: código propio, escrito para tu caso."
        techs={["React", "Next.js", "Node.js", "React Native", "TypeScript", "TailwindCSS", "GraphQL"]}
        features={[
          "Arquitectura escalable",
          "Diseño responsive",
          "SEO técnico integrado",
          "APIs REST y GraphQL",
          "Despliegue continuo CI/CD",
          "Tests automáticos",
        ]}
        price="desde $800.000"
        priceNote="+ IVA"
        timeLabel="Plazo de entrega"
        timeValue="2 a 6 semanas"
        ctaTitle="¿Construimos?"
        ctaText="Cuéntanos qué necesitas y te respondemos con una propuesta concreta en menos de 24 horas."
        ctaButton="Iniciar proyecto"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Desarrollo Web y Aplicaciones",
          provider: { "@type": "Organization", name: "Innovatio-IT" },
          areaServed: { "@type": "Country", name: "Chile" },
          description: "Desarrollo de sitios web, aplicaciones y plataformas a medida.",
          offers: {
            "@type": "Offer",
            price: "800000",
            priceCurrency: "CLP",
            availability: "https://schema.org/InStock",
          },
        }),
      }} />
    </>
  );
}
