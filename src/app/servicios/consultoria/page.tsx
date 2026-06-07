import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Consultoría Tecnológica | Innovatio-IT Chile",
  description: "Auditoría técnica, recomendación de stack y roadmap de migración. Desde $200.000 CLP por sesión. Toma decisiones claras antes de invertir.",
  keywords: "consultoría tecnológica Chile, auditoría técnica, arquitectura software, tech strategy",
};

export default function ConsultoriaPage() {
  return (
    <>
      <ServiceDetail
        code="003"
        area="Consultoría"
        title="Decidir bien,"
        titleAccent="antes de invertir"
        intro="¿Sientes que tu tecnología te frena? Te ayudamos a tomar decisiones claras antes de gastar un peso: auditoría técnica, revisión de código y roadmap de migración."
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
        ctaTitle="¿Lo revisamos?"
        ctaText="Agenda una sesión de diagnóstico y sal con recomendaciones por escrito."
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
