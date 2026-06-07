import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Ciberseguridad Empresarial | Innovatio-IT Chile",
  description: "Pentesting, hardening de servidores, SIEM e ISO 27001. Protege tu empresa antes de que pase algo grave. Cotiza sin compromiso.",
  keywords: "ciberseguridad Chile, pentesting empresas, ISO 27001, auditoría seguridad",
};

export default function CiberseguridadPage() {
  return (
    <>
      <ServiceDetail
        code="004"
        area="Ciberseguridad"
        title="Seguridad real,"
        titleAccent="no promesas"
        intro="Un solo incidente puede costar más que años de prevención. Auditamos, reforzamos y protegemos tus sistemas antes de que algo grave pase."
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
        price="A cotizar"
        priceNote=""
        timeLabel="Modalidad"
        timeValue="Por alcance"
        ctaTitle="¿Última auditoría?"
        ctaText="La prevención siempre sale más barata que el remedio. Conversemos sobre el estado de tus sistemas."
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
