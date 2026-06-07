import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Asterisco decorativo */}
      <div
        className="spin-slow absolute -right-16 top-24 md:right-10 md:top-28 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg width="220" height="220" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 6v88M12 28l76 44M12 72l76-44"
            stroke="var(--accent)"
            strokeWidth="11"
            strokeLinecap="round"
            opacity="0.14"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-36 md:pt-44 pb-20 md:pb-28 relative">
        <ScrollReveal>
          <h1
            className="display font-extrabold"
            style={{ fontSize: "clamp(46px, 7.5vw, 104px)", color: "var(--foreground)" }}
          >
            Software con
            <br />
            oficio<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p
            className="mt-7 text-lg md:text-xl leading-relaxed max-w-xl"
            style={{ color: "var(--muted)" }}
          >
            Diseñamos y construimos productos digitales que funcionan: webs,
            plataformas, seguridad e inteligencia artificial. Desde Santiago,
            para toda Latinoamérica.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contacto" className="pill">
              Hablemos de tu proyecto
            </Link>
            <Link href="/servicios" className="pill-ghost">
              Ver servicios
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
