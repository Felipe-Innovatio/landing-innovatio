import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface ServiceDetailProps {
  code?: string;
  area: string;
  title: string;
  titleAccent: string;
  intro: string;
  techLabel?: string;
  techs: string[];
  features: string[];
  price: string;
  priceNote: string;
  timeLabel: string;
  timeValue: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export default function ServiceDetail({
  area,
  title,
  titleAccent,
  intro,
  techLabel = "Tecnologías",
  techs,
  features,
  price,
  priceNote,
  timeLabel,
  timeValue,
  ctaTitle,
  ctaText,
  ctaButton,
}: ServiceDetailProps) {
  return (
    <main>
      {/* Cabecera */}
      <section className="max-w-6xl mx-auto px-6 pt-36 md:pt-44 pb-14 md:pb-20">
        <ScrollReveal>
          <p className="text-[14px] font-semibold mb-4">
            <Link href="/servicios" className="link-slide" style={{ color: "var(--muted)" }}>
              Servicios
            </Link>
            <span style={{ color: "var(--muted)" }}> / </span>
            <span style={{ color: "var(--accent)" }}>{area}</span>
          </p>
          <h1
            className="display font-extrabold"
            style={{ fontSize: "clamp(38px, 6vw, 84px)", color: "var(--foreground)" }}
          >
            {title}
            <br />
            <span style={{ color: "var(--accent)" }}>{titleAccent}</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="mt-7 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
            {intro}
          </p>
        </ScrollReveal>
      </section>

      {/* Detalle */}
      <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <ScrollReveal>
            <div className="card p-7 h-full">
              <p className="text-[14px] font-semibold mb-4" style={{ color: "var(--foreground)" }}>
                {techLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {techs.map((t) => (
                  <span
                    key={t}
                    className="text-[13px] font-medium px-3 py-1.5 rounded-full"
                    style={{ background: "var(--surface-2)", color: "var(--muted)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="card p-7 h-full">
              <p className="text-[14px] font-semibold mb-4" style={{ color: "var(--foreground)" }}>
                Incluye
              </p>
              <ul className="flex flex-col gap-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14.5px]" style={{ color: "#33312B" }}>
                    <svg
                      className="shrink-0 mt-[3px]"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={120}>
          <div className="card p-7 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
            <div>
              <p className="text-[13px] font-medium mb-1" style={{ color: "var(--muted)" }}>
                Precio de referencia
              </p>
              <p className="display text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                {price}
                {priceNote && (
                  <span className="text-sm font-medium ml-2" style={{ color: "var(--muted)" }}>
                    {priceNote}
                  </span>
                )}
              </p>
            </div>
            <div>
              <p className="text-[13px] font-medium mb-1" style={{ color: "var(--muted)" }}>
                {timeLabel}
              </p>
              <p className="display text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                {timeValue}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-[28px] px-7 py-12 md:px-14 md:py-16"
            style={{ background: "var(--accent)" }}
          >
            <h2
              className="display font-bold"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "var(--on-accent)" }}
            >
              {ctaTitle}
            </h2>
            <p className="mt-3 text-base max-w-md" style={{ color: "rgba(255,255,255,0.85)" }}>
              {ctaText}
            </p>
            <Link href="/contacto" className="pill-light mt-7">
              {ctaButton}
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
