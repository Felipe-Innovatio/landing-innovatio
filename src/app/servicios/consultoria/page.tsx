import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Consultoría Tecnológica | Innovatio-IT Chile",
  description: "Auditoría técnica, recomendación de stack y roadmap de migración. Desde $200.000 CLP por sesión.",
  keywords: "consultoría tecnológica Chile, auditoría técnica, arquitectura software, tech strategy",
};

export default function ConsultoriaPage() {
  return (
    <>
      <ServiceDetail
        code="003"
        area="Consultoría"
        title="Consultoría"
        titleAccent="técnica"
        intro="Revisamos arquitectura, código y costos de infraestructura, y entregamos un informe con recomendaciones y estimaciones. Sirve para decidir antes de invertir en un desarrollo nuevo."
        techLabel="Especialidades"
        techs={["Arquitectura", "Code Review", "Tech Strategy", "Revisión de Stack", "Mentoría"]}
        features={[
          "Auditoría técnica completa",
          "Recomendación de stack",
          "Revisión de código",
          "Roadmap de migración",
          "Mentoría técnica",
          "Documentación de arquitectura",
        ]}
        price="desde $200.000"
        priceNote="+ IVA"
        timeLabel="Modalidad"
        timeValue="Por sesión"
        ctaTitle="Agenda una sesión de diagnóstico."
        ctaText="Dos horas con un ingeniero senior. Al terminar recibes las recomendaciones por escrito."
        ctaButton="Agendar sesión"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Consultoría Tecnológica",
          provider: { "@type": "Organization", name: "Innovatio-IT" },
          areaServed: { "@type": "Country", name: "Chile" },
          description: "Auditoría técnica, recomendación de stack y roadmap de migración.",
          offers: {
            "@type": "Offer",
            price: "200000",
            priceCurrency: "CLP",
            availability: "https://schema.org/InStock",
          },
        }),
      }} />
    </>
  );
}
