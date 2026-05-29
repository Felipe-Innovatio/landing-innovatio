"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "¿Con qué tipo de empresas trabajan?",
    answer:
      "Trabajamos con startups, pymes y empresas en crecimiento que necesitan soluciones tecnológicas confiables. No tenemos restricción por tamaño — evaluamos cada proyecto según su alcance y objetivos.",
  },
  {
    question: "¿Cómo integran la inteligencia artificial en sus proyectos?",
    answer:
      "Usamos herramientas de IA para acelerar el desarrollo, mejorar la calidad del código y automatizar procesos. Pero cada entregable pasa por revisión profesional humana — así garantizamos resultados confiables, sin los errores comunes del desarrollo exclusivamente asistido por IA.",
  },
  {
    question: "¿Trabajan con clientes fuera de Chile?",
    answer:
      "Sí. Al ser un equipo 100% remoto podemos trabajar con clientes en cualquier país de habla hispana y también en inglés.",
  },
  {
    question: "¿Cuánto demora un proyecto típico?",
    answer:
      "Depende del alcance. Un sitio web o MVP puede estar listo en 2 a 6 semanas. Proyectos más complejos se planifican en etapas con entregas intermedias para que siempre tengas visibilidad del avance.",
  },
  {
    question: "¿Cómo puedo empezar a trabajar con ustedes?",
    answer:
      "Escríbenos por el formulario de contacto o al WhatsApp. Conversamos sobre tu proyecto sin compromiso, definimos el alcance y te entregamos una propuesta.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas frecuentes
            </h2>
            <p style={{ color: "var(--muted)" }}>
              Todo lo que necesitas saber antes de comenzar.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 60}>
              <div
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: openIndex === index ? "var(--surface)" : "transparent",
                  transition: "background 0.2s",
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex items-center justify-between gap-4 px-6 py-5"
                  aria-expanded={openIndex === index}
                  style={{ cursor: "pointer", background: "transparent", border: "none" }}
                >
                  <span className="font-medium text-lg" style={{ color: "var(--foreground)" }}>
                    {faq.question}
                  </span>
                  <span
                    style={{
                      color: "var(--accent)",
                      fontSize: "20px",
                      flexShrink: 0,
                      transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                      display: "inline-block",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: openIndex === index ? "300px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p
                    className="px-6 pb-5 text-base leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
