import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
// import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <TechStack />
        <About />
        <Services />
        <Process />
        {/* <Testimonials /> */}
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
