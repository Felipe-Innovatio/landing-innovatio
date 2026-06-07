import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaBanner() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-[28px] px-7 py-14 md:px-16 md:py-20"
            style={{ background: "var(--accent)" }}
          >
            <div
              className="spin-slow absolute -right-10 -bottom-14 pointer-events-none select-none"
              aria-hidden="true"
            >
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
                <path
                  d="M50 6v88M12 28l76 44M12 72l76-44"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="11"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h2
              className="display font-bold relative"
              style={{ fontSize: "clamp(32px, 5vw, 64px)", color: "var(--on-accent)" }}
            >
              ¿Hablamos de tu proyecto?
            </h2>
            <p className="mt-4 text-base md:text-lg max-w-md relative" style={{ color: "rgba(255,255,255,0.85)" }}>
              Escríbenos hoy y mañana tienes una propuesta concreta sobre la mesa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 relative">
              <Link href="/contacto" className="pill-light">
                Escribir ahora
              </Link>
              <a
                href="mailto:contacto@innovatio-it.com"
                className="link-slide inline-flex items-center text-[15px] font-semibold"
                style={{ color: "var(--on-accent)" }}
              >
                contacto@innovatio-it.com
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
