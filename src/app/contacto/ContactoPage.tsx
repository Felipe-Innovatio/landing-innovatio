"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Contact from "@/components/sections/Contact";

export default function ContactoPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <ScrollReveal className="lg:col-span-2">
            <div>
              <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>Contacto</span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
                Tienes un <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>proyecto?</em>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                Cuéntanos de qué se trata y te respondemos con una propuesta concreta en menos de 24 horas. Sin compromiso, sin spam.
              </p>

              <div className="space-y-4 mb-8">
                <a href="https://wa.me/56956379853?text=Hola%2C%20vi%20su%20pagina%20y%20me%20gustaria%20consultar%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5" style={{ background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  <div><div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>WhatsApp</div><div className="text-sm" style={{ color: "var(--muted)" }}>+56 9 5637 9853 · Respuesta inmediata</div></div>
                </a>

                <a href="mailto:contacto@innovatio-it.com" className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5" style={{ background: "rgba(55,138,221,0.05)", border: "1px solid var(--border)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 5L2 7" /></svg>
                  <div><div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Email</div><div className="text-sm" style={{ color: "var(--muted)" }}>contacto@innovatio-it.com</div></div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(55,138,221,0.05)", border: "1px solid var(--border)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <div><div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Ubicación</div><div className="text-sm" style={{ color: "var(--muted)" }}>Santiago, Chile · 100% Remoto</div></div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} className="lg:col-span-3">
            <div className="rounded-2xl p-6 md:p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
              <h2 className="text-xl font-semibold mb-6" style={{ color: "var(--foreground)" }}>Cuéntanos sobre tu proyecto</h2>
              <Contact />
            </div>
          </ScrollReveal>
        </div>
      </div>

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
