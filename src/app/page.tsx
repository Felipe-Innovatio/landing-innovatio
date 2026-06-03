import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TechStack = dynamic(() => import("@/components/sections/TechStack"));
const About = dynamic(() => import("@/components/sections/About"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Process = dynamic(() => import("@/components/sections/Process"));
const CtaBanner = dynamic(() => import("@/components/sections/CtaBanner"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const Faq = dynamic(() => import("@/components/sections/Faq"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Con qué tipo de empresas trabajan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos con startups, pymes y empresas en crecimiento que necesitan soluciones tecnológicas confiables. No tenemos restricción por tamaño — evaluamos cada proyecto según su alcance y objetivos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo integran la inteligencia artificial en sus proyectos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usamos herramientas de IA para acelerar el desarrollo, mejorar la calidad del código y automatizar procesos. Pero cada entregable pasa por revisión profesional humana — así garantizamos resultados confiables, sin los errores comunes del desarrollo exclusivamente asistido por IA.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con clientes fuera de Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Al ser un equipo 100% remoto podemos trabajar con clientes en cualquier país de habla hispana y también en inglés.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto demora un proyecto típico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del alcance. Un sitio web o MVP puede estar listo en 2 a 6 semanas. Proyectos más complejos se planifican en etapas con entregas intermedias para que siempre tengas visibilidad del avance.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo empezar a trabajar con ustedes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Escríbenos por el formulario de contacto o al WhatsApp. Conversamos sobre tu proyecto sin compromiso, definimos el alcance y te entregamos una propuesta.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="pt-16">
        <Hero />
        <ScrollReveal>
          <TechStack />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <Process />
        </ScrollReveal>
        <ScrollReveal>
          <CtaBanner />
        </ScrollReveal>
        <ScrollReveal>
          <Pricing />
        </ScrollReveal>
        <ScrollReveal>
          <Faq />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
    </>
  );
}
