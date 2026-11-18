export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "¿Con qué tipo de empresas trabajan?",
    answer:
      "Con pymes y empresas de servicios, comercio e industria. También con startups en etapa temprana.",
  },
  {
    question: "¿Cómo usan la inteligencia artificial en sus proyectos?",
    answer:
      "En el desarrollo, para escribir código y documentar. En los productos del cliente, cuando el proceso lo justifica. Cada entrega pasa por revisión de una persona.",
  },
  {
    question: "¿Trabajan con clientes fuera de Chile?",
    answer:
      "Sí. Trabajamos de forma remota, con reuniones en español y documentación en inglés. La ubicación del cliente no cambia el precio.",
  },
  {
    question: "¿Cuánto demora un proyecto típico?",
    answer:
      "Un sitio corporativo, entre 4 y 6 semanas. Una aplicación a medida, entre 8 y 16. El plazo queda fijado en la propuesta.",
  },
  {
    question: "¿Cómo empezamos?",
    answer:
      "Por el formulario o por WhatsApp. Agendamos una llamada de veinte minutos. Si hay acuerdo, enviamos la propuesta por escrito en menos de 24 horas.",
  },
];
