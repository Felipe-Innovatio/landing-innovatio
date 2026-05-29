"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

interface PriceTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

interface ServicePricing {
  id: string;
  label: string;
  icon: string;
  tiers: PriceTier[];
}

const services: ServicePricing[] = [
  {
    id: "desarrollo",
    label: "Desarrollo",
    icon: "◈",
    tiers: [
      {
        name: "Starter",
        price: "desde $800.000",
        description: "Landing page profesional",
        features: [
          "Diseño a medida",
          "Responsive (móvil + desktop)",
          "SEO técnico básico",
          "Formulario de contacto",
          "Entrega en 2–3 semanas",
        ],
      },
      {
        name: "Business",
        price: "desde $1.500.000",
        description: "Sitio corporativo completo",
        features: [
          "Múltiples páginas y secciones",
          "CMS para gestión de contenido",
          "Blog y SEO avanzado",
          "Integraciones (Analytics, CRM)",
          "Entrega en 3–6 semanas",
          "1 mes de soporte incluido",
        ],
        highlight: true,
      },
      {
        name: "Custom",
        price: "A cotizar",
        description: "App web / Software a medida",
        features: [
          "Aplicación web completa",
          "Autenticación y roles de usuario",
          "Base de datos y API propia",
          "Panel de administración",
          "Integraciones avanzadas",
          "MVP en 8–16 semanas",
        ],
      },
    ],
  },
  {
    id: "hosting",
    label: "Hosting",
    icon: "⬡",
    tiers: [
      {
        name: "Básico",
        price: "desde $150.000",
        period: "/mes",
        description: "Gestión básica cloud",
        features: [
          "Deploy y configuración inicial",
          "Dominio + SSL incluidos",
          "Monitoreo de disponibilidad",
          "Backups semanales",
          "Soporte por email",
        ],
      },
      {
        name: "Profesional",
        price: "desde $300.000",
        period: "/mes",
        description: "Infraestructura gestionada",
        features: [
          "AWS / GCP administrado",
          "CI/CD automatizado",
          "Backups diarios",
          "Alertas en tiempo real",
          "Escalado automático",
          "Soporte prioritario",
        ],
        highlight: true,
      },
      {
        name: "Enterprise",
        price: "desde $700.000",
        period: "/mes",
        description: "Alta disponibilidad",
        features: [
          "Arquitectura multi-región",
          "Disaster recovery",
          "SLA 99.9% uptime garantizado",
          "Seguridad avanzada",
          "Reportes mensuales",
          "Soporte 24/7",
        ],
      },
    ],
  },
  {
    id: "consultoria",
    label: "Consultoría",
    icon: "◎",
    tiers: [
      {
        name: "Sesión",
        price: "desde $150.000",
        description: "Diagnóstico inicial",
        features: [
          "2 horas con ingeniero senior",
          "Análisis de situación actual",
          "Recomendaciones por escrito",
          "Roadmap preliminar",
          "Sin compromiso de continuidad",
        ],
      },
      {
        name: "Proyecto",
        price: "desde $500.000",
        description: "Consultoría por proyecto",
        features: [
          "Auditoría técnica completa",
          "Definición de arquitectura",
          "Selección de stack tecnológico",
          "Code review",
          "Informe ejecutivo",
          "Presentación al equipo",
        ],
        highlight: true,
      },
      {
        name: "Retainer",
        price: "desde $500.000",
        period: "/mes",
        description: "Acompañamiento continuo",
        features: [
          "Reuniones periódicas incluidas",
          "Revisión de decisiones técnicas",
          "Acceso directo a ingenieros",
          "Respuesta prioritaria",
          "Soporte estratégico continuo",
          "Informes de avance mensuales",
        ],
      },
    ],
  },
  {
    id: "ciberseguridad",
    label: "Ciberseguridad",
    icon: "⬢",
    tiers: [
      {
        name: "Básico",
        price: "desde $300.000",
        description: "Escaneo de vulnerabilidades",
        features: [
          "Análisis automatizado OWASP",
          "Reporte de vulnerabilidades",
          "Clasificación por nivel de riesgo",
          "Recomendaciones de mitigación",
          "Entrega en 2–5 días hábiles",
        ],
      },
      {
        name: "Pentest",
        price: "desde $900.000",
        description: "Prueba de penetración",
        features: [
          "Pentesting manual + automatizado",
          "Metodología OWASP / MITRE",
          "Informe técnico detallado",
          "Informe ejecutivo para directivos",
          "Plan de remediación",
          "Entrega en 5–10 días hábiles",
        ],
        highlight: true,
      },
      {
        name: "Enterprise",
        price: "A cotizar",
        description: "Auditoría completa",
        features: [
          "Auditoría de infraestructura completa",
          "Ingeniería social",
          "Preparación ISO 27001",
          "Plan de respuesta a incidentes",
          "Retainer de seguridad mensual",
          "Capacitación al equipo",
        ],
      },
    ],
  },
  {
    id: "ia",
    label: "IA",
    icon: "◉",
    tiers: [
      {
        name: "Estrategia",
        price: "desde $300.000",
        description: "Consultoría estratégica IA",
        features: [
          "Diagnóstico de procesos",
          "Roadmap de implementación IA",
          "Identificación de quick wins",
          "Evaluación de herramientas",
          "Taller con el equipo",
        ],
      },
      {
        name: "Implementación",
        price: "desde $1.500.000",
        description: "Automatización / Agente IA",
        features: [
          "Agente o chatbot con IA",
          "Integración con tus sistemas",
          "RAG sobre tus datos propios",
          "Panel de administración",
          "Infraestructura incluida",
          "Soporte post-lanzamiento",
        ],
        highlight: true,
      },
      {
        name: "Enterprise",
        price: "A cotizar",
        description: "Sistema IA a medida",
        features: [
          "Pipeline o modelo personalizado",
          "Integración ERP / CRM / APIs",
          "Fine-tuning si aplica",
          "Costos operativos optimizados",
          "Mantenimiento continuo",
          "Capacitación al equipo",
        ],
      },
    ],
  },
];

export default function Pricing() {
  const [active, setActive] = useState("desarrollo");

  const current = services.find((s) => s.id === active)!;

  return (
    <section id="precios" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Precios
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>
              Inversión clara, resultados reales
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
              Precios referenciales en pesos chilenos. Cada proyecto se cotiza según su alcance real — sin sorpresas.
            </p>
          </div>
        </FadeIn>

        {/* Service tabs */}
        <FadeIn delay={80}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                style={{
                  background: active === s.id ? "var(--accent)" : "transparent",
                  color: active === s.id ? "#fff" : "var(--muted)",
                  border: `1px solid ${active === s.id ? "var(--accent)" : "var(--border)"}`,
                  cursor: "pointer",
                }}
              >
                <span>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {current.tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 80}>
              <div
                className="relative flex flex-col rounded-2xl p-8 h-full"
                style={{
                  border: tier.highlight
                    ? "2px solid var(--accent)"
                    : "1px solid var(--border)",
                  background: tier.highlight
                    ? "linear-gradient(135deg, rgba(55,138,221,0.08) 0%, var(--background) 100%)"
                    : "var(--background)",
                }}
              >
                {tier.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full"
                    style={{ background: "var(--accent)", color: "#fff" }}
                  >
                    Más popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                    {tier.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
                    {tier.description}
                  </p>
                  <div className="flex items-baseline gap-1" suppressHydrationWarning>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: tier.highlight ? "var(--accent)" : "var(--foreground)" }}
                    >
                      {tier.price}
                    </span>
                    <span className="text-sm" style={{ color: "var(--muted)", visibility: tier.period ? "visible" : "hidden" }}>
                      {tier.period ?? "/mes"}
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--muted)", visibility: tier.price !== "A cotizar" ? "visible" : "hidden" }}
                    >
                      + IVA
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--muted)" }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contacto"
                  className="block text-center py-3 rounded-full text-sm font-medium transition-all hover:opacity-90"
                  style={{
                    background: tier.highlight ? "var(--accent)" : "transparent",
                    color: tier.highlight ? "#fff" : "var(--foreground)",
                    border: `1px solid ${tier.highlight ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  {tier.price === "A cotizar" ? "Cotizar →" : "Empezar →"}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom note */}
        <FadeIn delay={240}>
          <div
            className="mt-12 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-4"
            style={{ border: "1px solid var(--border)", background: "var(--background)" }}
          >
            <div className="text-2xl">💡</div>
            <div>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>
                ¿Por qué no la opción más barata?
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                En Chile puedes encontrar webs desde $100.000 — son plantillas WordPress hechas en días por personas sin formación en ingeniería. Nosotros desarrollamos con código real, ingenieros titulados y tecnologías modernas. La diferencia se nota en rendimiento, seguridad y escalabilidad.
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
