import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServiceRow {
  title: string;
  desc: string;
  price: string;
  href: string;
}

const services: ServiceRow[] = [
  {
    title: "Desarrollo web y apps",
    desc: "Sitios, plataformas y aplicaciones a medida que escalan contigo.",
    price: "desde $800.000",
    href: "/servicios/desarrollo",
  },
  {
    title: "Ciberseguridad",
    desc: "Auditorías, pentesting y protección continua de tus sistemas.",
    price: "a cotizar",
    href: "/servicios/ciberseguridad",
  },
  {
    title: "Inteligencia artificial",
    desc: "Automatización útil, integrada en tus procesos reales.",
    price: "a cotizar",
    href: "/servicios/ia",
  },
  {
    title: "Cloud y hosting",
    desc: "Tu aplicación siempre disponible, sin que pienses en servidores.",
    price: "desde $150.000/mes",
    href: "/servicios/hosting",
  },
  {
    title: "Consultoría",
    desc: "Decisiones técnicas claras antes de invertir.",
    price: "desde $200.000",
    href: "/servicios/consultoria",
  },
];

export default function ServiciosPage() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 pt-36 md:pt-44 pb-12 md:pb-16">
        <ScrollReveal>
          <h1
            className="display font-extrabold"
            style={{ fontSize: "clamp(42px, 7vw, 96px)", color: "var(--foreground)" }}
          >
            Servicios<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
            Desde una landing hasta una plataforma completa. Entra a cada
            servicio para ver qué incluye y cuánto cuesta.
          </p>
        </ScrollReveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {services.map((s, i) => (
            <ScrollReveal key={s.href} delay={i * 60}>
              <Link
                href={s.href}
                className="service-row group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-7 md:py-9"
                style={{ borderBottom: "1px solid var(--line)", textDecoration: "none" }}
              >
                <h2
                  className="row-title display font-bold flex-1"
                  style={{ fontSize: "clamp(24px, 3.2vw, 40px)", color: "var(--foreground)" }}
                >
                  {s.title}
                </h2>
                <p className="text-[15px] md:max-w-xs md:flex-1" style={{ color: "var(--muted)" }}>
                  {s.desc}
                </p>
                <span className="text-[15px] font-semibold md:w-44 md:text-right" style={{ color: "var(--foreground)" }}>
                  {s.price}
                </span>
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

        <ScrollReveal delay={150}>
          <div
            className="mt-14 rounded-[28px] px-7 py-12 md:px-14 md:py-14"
            style={{ background: "var(--accent)" }}
          >
            <h2 className="display font-bold" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--on-accent)" }}>
              ¿No encuentras lo que buscas?
            </h2>
            <p className="mt-3 text-base max-w-md" style={{ color: "rgba(255,255,255,0.85)" }}>
              Cuéntanos igual. Si no es lo nuestro, te lo decimos al tiro.
            </p>
            <Link href="/contacto" className="pill-light mt-7">
              Hablemos
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
