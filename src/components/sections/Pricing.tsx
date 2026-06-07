"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
  tiers: PriceTier[];
}

const services: ServicePricing[] = [
  {
    id: "desarrollo",
    label: "Desarrollo",
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
          "Entrega en 2 a 3 semanas",
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
          "Entrega en 3 a 6 semanas",
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
          "MVP en 8 a 16 semanas",
        ],
      },
    ],
  },
  {
    id: "hosting",
    label: "Hosting",
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
          "Entrega en 2 a 5 días hábiles",
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
          "Entrega en 5 a 10 días hábiles",
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
  const current = services.find((s) => s.id === active) ?? services[0];

  return (
    <section id="precios" className="py-24 md:py-32" style={{ background: "var(--surface-2)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <h2
              className="display font-bold"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--foreground)" }}
            >
              Precios claros
            </h2>
            <p className="text-[15px] max-w-sm" style={{ color: "var(--muted)" }}>
              Valores de referencia en pesos chilenos. Cada proyecto se cotiza
              según su alcance, por escrito.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Seleccionar servicio">
            {services.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(s.id)}
                  className="text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
                  style={{
                    background: isActive ? "var(--foreground)" : "var(--surface)",
                    color: isActive ? "var(--background)" : "var(--muted)",
                    border: "1px solid " + (isActive ? "var(--foreground)" : "var(--line)"),
                    cursor: "pointer",
                  }}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {current.tiers.map((tier, i) => (
            <ScrollReveal key={current.id + "-" + tier.name} delay={i * 80}>
              <div
                className="card card-hover relative flex flex-col p-7 h-full"
                style={tier.highlight ? { border: "2px solid var(--accent)" } : undefined}
              >
                {tier.highlight && (
                  <span
                    className="absolute -top-3.5 left-6 text-[12px] font-bold px-3 py-1 rounded-full"
                    style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                  >
                    Recomendado
                  </span>
                )}

                <h3 className="display text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                  {tier.name}
                </h3>
                <p className="text-[14px] mt-1 mb-5" style={{ color: "var(--muted)" }}>
                  {tier.description}
                </p>

                <p className="mb-6">
                  <span className="display text-[26px] font-bold" style={{ color: "var(--foreground)" }}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm ml-0.5" style={{ color: "var(--muted)" }}>
                      {tier.period}
                    </span>
                  )}
                  {tier.price !== "A cotizar" && (
                    <span className="text-[12px] ml-2" style={{ color: "var(--muted)" }}>
                      + IVA
                    </span>
                  )}
                </p>

                <ul className="flex flex-col gap-2.5 flex-1 mb-8 pt-5" style={{ borderTop: "1px solid var(--line)" }}>
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-[14.5px]" style={{ color: "#33312B" }}>
                      <svg
                        className="shrink-0 mt-[3px]"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className={tier.highlight ? "pill w-full" : "pill-ghost w-full"}
                >
                  {tier.price === "A cotizar" ? "Cotizar" : "Empezar"}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={160}>
          <p className="mt-10 text-[14px] leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
            ¿Por qué no somos la opción más barata? Porque trabajamos con código
            propio y tecnologías actuales, no con plantillas. La diferencia se
            nota en rendimiento, seguridad y en que el sitio no se cae cuando tu
            negocio crece.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
