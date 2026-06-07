import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Service {
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    title: "Desarrollo web y apps",
    description: "Sitios, plataformas y aplicaciones a medida que escalan contigo.",
    href: "/servicios/desarrollo",
  },
  {
    title: "Ciberseguridad",
    description: "Auditorías, pentesting y protección continua de tus sistemas.",
    href: "/servicios/ciberseguridad",
  },
  {
    title: "Inteligencia artificial",
    description: "Automatización útil, integrada en tus procesos reales.",
    href: "/servicios/ia",
  },
  {
    title: "Cloud y hosting",
    description: "Tu aplicación siempre disponible, sin que pienses en servidores.",
    href: "/servicios/hosting",
  },
  {
    title: "Consultoría",
    description: "Decisiones técnicas claras antes de invertir.",
    href: "/servicios/consultoria",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2
            className="display font-bold mb-12 md:mb-16"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "var(--foreground)" }}
          >
            Lo que hacemos
          </h2>
        </ScrollReveal>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {services.map((service, i) => (
            <ScrollReveal key={service.href} delay={i * 60}>
              <Link
                href={service.href}
                className="service-row group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-7 md:py-9"
                style={{ borderBottom: "1px solid var(--line)", textDecoration: "none" }}
              >
                <h3
                  className="row-title display font-bold flex-1"
                  style={{ fontSize: "clamp(24px, 3.2vw, 40px)", color: "var(--foreground)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[15px] md:text-base md:max-w-sm md:flex-1" style={{ color: "var(--muted)" }}>
                  {service.description}
                </p>
                <span
                  className="row-arrow hidden md:flex items-center justify-center w-12 h-12 rounded-full shrink-0"
                  style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
