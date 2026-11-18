import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const offers = [
  {
    name: "Sitio corporativo",
    list: "$1.500.000",
    price: "$990.000",
    detail: "Hasta 8 páginas, CMS y SEO técnico. 4 a 6 semanas.",
  },
  {
    name: "Landing page",
    list: "$800.000",
    price: "$490.000",
    detail: "Una página con diseño a medida y formulario. 2 a 3 semanas.",
  },
  {
    name: "Auditoría de seguridad",
    list: "$300.000",
    price: "$190.000",
    detail: "Dependencias, accesos y configuraciones. Informe priorizado.",
  },
];

export default function Launch() {
  return (
    <section
      id="apertura"
      className="py-20 md:py-28"
      style={{ background: "var(--foreground)", color: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-12">
            <div className="md:col-span-7">
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.14em] mb-4"
                style={{ color: "var(--accent-on-ink)" }}
              >
                Apertura · tres cupos
              </p>
              <h2
                className="display font-bold"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Tres proyectos a precio de apertura.
              </h2>
            </div>
            <div className="md:col-span-5 md:justify-self-end md:text-right">
              <Link href="/contacto" className="pill-light">
                Reservar un cupo
              </Link>
              <p className="mt-3 text-[13.5px]" style={{ color: "rgba(242,242,240,0.6)" }}>
                Pesos chilenos, sin IVA.
                <br />
                50% al inicio y 50% al entregar.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {offers.map((o, i) => (
            <ScrollReveal key={o.name} delay={i * 90}>
              <div
                className="pb-6 h-full flex flex-col"
                style={{ borderTop: "1px solid rgba(242,242,240,0.25)", paddingTop: "1.25rem" }}
              >
                <h3 className="display text-xl md:text-2xl font-bold">{o.name}</h3>
                <p className="mt-3 flex items-baseline gap-3">
                  <span
                    className="text-[15px] line-through"
                    style={{ color: "rgba(242,242,240,0.45)" }}
                  >
                    {o.list}
                  </span>
                  <span className="display text-2xl font-bold" style={{ color: "var(--accent-on-ink)" }}>
                    {o.price}
                  </span>
                </p>
                <p
                  className="mt-3 text-[14.5px] leading-relaxed flex-1"
                  style={{ color: "rgba(242,242,240,0.7)" }}
                >
                  {o.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
