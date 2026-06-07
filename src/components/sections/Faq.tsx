"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "¿Con qué tipo de empresas trabajan?",
    answer:
      "Con startups, pymes y empresas en crecimiento. No filtramos por tamaño: evaluamos cada proyecto según su alcance y objetivos.",
  },
  {
    question: "¿Cómo usan la inteligencia artificial en sus proyectos?",
    answer:
      "La usamos para acelerar el desarrollo y automatizar procesos, y revisamos cada entrega antes de que llegue a producción. Así obtienes la velocidad de la IA sin sus errores típicos.",
  },
  {
    question: "¿Trabajan con clientes fuera de Chile?",
    answer:
      "Sí. Trabajamos 100% remoto con clientes de cualquier país de habla hispana, y también en inglés.",
  },
  {
    question: "¿Cuánto demora un proyecto típico?",
    answer:
      "Un sitio web o MVP puede estar listo en 2 a 6 semanas. Proyectos más grandes se planifican por etapas, con entregas intermedias para que veas el avance.",
  },
  {
    question: "¿Cómo empezamos?",
    answer:
      "Escríbenos por el formulario o por WhatsApp. Conversamos sin compromiso, definimos el alcance y te enviamos una propuesta.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h2
            className="display font-bold mb-10 md:mb-14 text-center"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--foreground)" }}
          >
            Preguntas frecuentes
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={faq.question} delay={index * 60}>
                <div className="card overflow-hidden">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    style={{ cursor: "pointer", background: "transparent", border: "none" }}
                  >
                    <span className="text-[16px] font-semibold" style={{ color: "var(--foreground)" }}>
                      {faq.question}
                    </span>
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-transform duration-300"
                      style={{
                        background: isOpen ? "var(--accent)" : "var(--surface-2)",
                        color: isOpen ? "var(--on-accent)" : "var(--foreground)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{ maxHeight: isOpen ? "240px" : "0px" }}
                  >
                    <p className="px-6 pb-6 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
