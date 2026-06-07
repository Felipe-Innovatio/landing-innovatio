import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const TechStack = dynamic(() => import("@/components/sections/TechStack"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Process = dynamic(() => import("@/components/sections/Process"), { ssr: true });
const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: true });
const Faq = dynamic(() => import("@/components/sections/Faq"), { ssr: true });
const CtaBanner = dynamic(() => import("@/components/sections/CtaBanner"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });
// Pendiente de activar cuando haya testimonios reales:
// const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: true });

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Con qué tipo de empresas trabajan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con startups, pymes y empresas en crecimiento. No filtramos por tamaño: evaluamos cada proyecto según su alcance y objetivos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo usan la inteligencia artificial en sus proyectos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La usamos para acelerar el desarrollo y automatizar procesos, y revisamos cada entrega antes de que llegue a producción. Así obtienes la velocidad de la IA sin sus errores típicos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con clientes fuera de Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Trabajamos 100% remoto con clientes de cualquier país de habla hispana, y también en inglés.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto demora un proyecto típico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un sitio web o MVP puede estar listo en 2 a 6 semanas. Proyectos más grandes se planifican por etapas, con entregas intermedias para que veas el avance.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo empezamos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Escríbenos por el formulario o por WhatsApp. Conversamos sin compromiso, definimos el alcance y te enviamos una propuesta.",
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
      <main>
        <Hero />
        <TechStack />
        <Services />
        <About />
        <Process />
        <Pricing />
        {/* Pendiente de activar cuando haya testimonios reales:
        <Testimonials /> */}
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
    </>
  );
}
