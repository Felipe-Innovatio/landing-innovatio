import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Hosting e Infraestructura Cloud | Innovatio-IT Chile",
  description: "Infraestructura cloud gestionada con AWS, GCP, Docker y Kubernetes. Desde $150.000 CLP/mes. Escalado automático, backups y monitoreo 24/7.",
  keywords: "hosting cloud Chile, infraestructura AWS, Kubernetes Docker, servidores gestionados",
};

export default function HostingPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>
              ⬡ Hosting e Infraestructura
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
              Tu aplicación <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>siempre online</em>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
              Gestionamos tu infraestructura en la nube para que no pierdas el sueño con servidores. Escalado automático, backups y monitoreo continuo.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>Tecnologías</h2>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Linux"].map((t) => (
                  <span key={t} className="text-sm px-3 py-1.5 rounded-full" style={{ background: "rgba(55,138,221,0.08)", color: "var(--accent-light)" }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>Incluye</h2>
              <ul className="space-y-2">
                {["Infraestructura como código", "Escalado automático", "Backups y monitoreo 24/7", "SSL + CDN", "Optimización de costos", "Alertas en tiempo real"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted)" }}><span style={{ color: "var(--accent)" }}>—</span>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl p-8 text-center mb-16" style={{ background: "rgba(55,138,221,0.04)", border: "1px solid var(--border)" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div><span className="text-3xl font-bold" style={{ color: "var(--accent)" }}>desde $150.000/mes</span><span className="text-sm ml-2" style={{ color: "var(--muted)" }}>+ IVA</span></div>
              <div style={{ color: "var(--muted)" }}>|</div>
              <div style={{ color: "var(--muted)" }}>Setup en <strong style={{ color: "var(--foreground)" }}>1-2 semanas</strong></div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(55,138,221,0.04)", border: "1px solid rgba(55,138,221,0.15)" }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>¿Necesitas infraestructura confiable?</h2>
            <p className="mb-6" style={{ color: "var(--muted)" }}>Cuéntanos tu proyecto y te armamos una arquitectura a tu medida.</p>
            <a href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "var(--accent)", color: "#fff" }}>Solicitar cotización →</a>
          </div>
        </ScrollReveal>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Hosting e Infraestructura Cloud",
          provider: { "@type": "Organization", name: "Innovatio-IT" },
          areaServed: { "@type": "Country", name: "Chile" },
          description: "Gestión de infraestructura cloud con AWS, GCP, Docker y Kubernetes.",
          offers: {
            "@type": "Offer",
            price: "150000",
            priceCurrency: "CLP",
            availability: "https://schema.org/InStock",
          },
        }),
      }} />
    </main>
  );
}
