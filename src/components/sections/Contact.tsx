import ContactForm from "./ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32" style={{ background: "var(--surface-2)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <h2
                className="display font-bold"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--foreground)" }}
              >
                Cuéntanos qué necesitas
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: "var(--muted)" }}>
                Respondemos en menos de 24 horas con una propuesta concreta.
                Sin compromiso y sin spam.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="mailto:contacto@innovatio-it.com"
                  className="link-slide self-start text-[16px] font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  contacto@innovatio-it.com
                </a>
                <a
                  href="https://wa.me/56956379853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-slide self-start text-[16px] font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  WhatsApp +56 9 5637 9853
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal delay={150}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
