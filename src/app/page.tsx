import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
// import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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
      <Header />
      <main className="pt-16">
        <Hero />
        <TechStack />
        <About />
        <Services />
        <Process />
        {/* <Testimonials /> */}
        <CtaBanner />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
