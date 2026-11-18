import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import { faqs } from "@/content/faq";

const Commitments = dynamic(() => import("@/components/sections/Commitments"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Process = dynamic(() => import("@/components/sections/Process"), { ssr: true });
const Proof = dynamic(() => import("@/components/sections/Proof"), { ssr: true });
const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: true });
const Faq = dynamic(() => import("@/components/sections/Faq"), { ssr: true });
const CtaBanner = dynamic(() => import("@/components/sections/CtaBanner"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });
// Pendiente de activar cuando haya testimonios reales:
// const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: true });

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
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
        <Commitments />
        <Services />
        <About />
        <Process />
        <Proof />
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
