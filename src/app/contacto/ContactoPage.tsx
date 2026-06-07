import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactoPage() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <h1
                className="display font-extrabold"
                style={{ fontSize: "clamp(42px, 6vw, 84px)", color: "var(--foreground)" }}
              >
                Hablemos<span style={{ color: "var(--accent)" }}>.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-base md:text-lg leading-relaxed max-w-md" style={{ color: "var(--muted)" }}>
                Cuéntanos qué necesitas y te respondemos en menos de 24 horas
                con una propuesta concreta. Sin compromiso y sin spam.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://wa.me/56956379853?text=Hola%2C%20vi%20su%20pagina%20y%20me%20gustaria%20consultar%20sobre%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-slide self-start text-[16px] font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  WhatsApp +56 9 5637 9853
                </a>
                <a
                  href="mailto:contacto@innovatio-it.com"
                  className="link-slide self-start text-[16px] font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  contacto@innovatio-it.com
                </a>
                <p className="text-[14px] mt-2" style={{ color: "var(--muted)" }}>
                  Santiago, Chile · trabajo 100% remoto
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal delay={150}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          mainEntity: {
            "@type": "Organization",
            name: "Innovatio-IT",
            url: "https://innovatio-it.com",
            email: "contacto@innovatio-it.com",
            telephone: "+56-9-5637-9853",
            address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
            contactPoint: { "@type": "ContactPoint", telephone: "+56-9-5637-9853", contactType: "sales", availableLanguage: ["Spanish", "English"], areaServed: "CL" },
          },
        }),
      }} />
    </main>
  );
}
