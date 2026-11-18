export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "¿Con qué tipo de empresas trabajan?",
    answer:
      "Con pymes y empresas de servicios, comercio e industria, en general de entre 10 y 200 personas. También trabajamos con startups en etapa temprana. Si el proyecto es muy pequeño para el equipo, lo decimos en la primera conversación.",
  },
  {
    question: "¿Cómo usan la inteligencia artificial en sus proyectos?",
    answer:
      "De dos formas. En el desarrollo, para escribir código, documentar y automatizar tareas internas. En los productos de nuestros clientes, cuando el proceso lo justifica. En ambos casos, cada entrega pasa por revisión de una persona antes de llegar a producción.",
  },
  {
    question: "¿Trabajan con clientes fuera de Chile?",
    answer:
      "Sí. Trabajamos de forma remota, con reuniones en español y documentación en inglés. La ubicación del cliente no cambia el precio.",
  },
  {
    question: "¿Cuánto demora un proyecto típico?",
    answer:
      "Un sitio corporativo toma entre 2 y 6 semanas. Una aplicación a medida, entre 8 y 16. El plazo depende también de la velocidad con que el cliente entrega contenidos, accesos y respuestas, y queda fijado en la propuesta.",
  },
  {
    question: "¿Cómo empezamos?",
    answer:
      "Por el formulario o por WhatsApp. Agendamos una llamada de veinte minutos. Si hay acuerdo, enviamos la propuesta por escrito en menos de 24 horas.",
  },
  {
    question: "¿Qué incluye una entrega?",
    answer:
      "El código en un repositorio del cliente, la documentación técnica y el traspaso de accesos. Si contratan hosting con nosotros, la administración queda incluida mientras dure el servicio.",
  },
];
