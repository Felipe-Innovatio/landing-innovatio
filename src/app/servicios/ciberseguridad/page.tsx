import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Ciberseguridad Empresarial | Innovatio-IT Chile",
  description: "Pentesting, hardening de servidores, SIEM e ISO 27001. Informe técnico, informe ejecutivo y plan de corrección.",
  keywords: "ciberseguridad Chile, pentesting empresas, ISO 27001, auditoría seguridad",
};

export default function CiberseguridadPage() {
  return (
    <>
      <ServiceDetail
        code="004"
        area="Ciberseguridad"
        title="Seguridad"
        titleAccent="informática"
        intro="Revisamos configuraciones, dependencias y accesos, y probamos los sistemas con la misma metodología que usaría un atacante. Entregamos informe técnico, informe ejecutivo y plan de corrección."
        techLabel="Especialidades"
        techs={["Pentesting", "SIEM", "Hardening", "ISO 27001", "Forense", "OSINT"]}
        features={[
          "Pruebas de penetración",
          "Hardening de servidores",
          "Implementación de SIEM",
          "Cumplimiento ISO 27001",
          "Capacitación de equipo",
          "Informe ejecutivo",
        ]}
        price="desde $450.000"
        priceNote=""
        timeLabel="Modalidad"
        timeValue="Por alcance"
        ctaTitle="Solicita una revisión."
        ctaText="Conversamos sobre el estado de tus sistemas y definimos el alcance de la revisión."
        ctaButton="Solicitar auditoría"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Ciberseguridad Empresarial",
          provider: { "@type": "Organization", name: "Innovatio-IT" },
          areaServed: { "@type": "Country", name: "Chile" },
          description: "Pentesting, hardening de servidores, SIEM e ISO 27001.",
        }),
      }} />
    </>
  );
}
