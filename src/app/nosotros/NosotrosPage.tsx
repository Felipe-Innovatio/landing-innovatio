import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
// Pendiente de activar cuando el equipo quiera mostrarse públicamente:
// import TeamSection from "@/components/sections/TeamSection";

const values = [
  {
    title: "Sin intermediarios",
    desc: "La persona que cotiza tu proyecto es la misma que lo construye. Hablas directo con quien hace el trabajo.",
  },
  {
    title: "IA con criterio",
    desc: "Usamos inteligencia artificial para avanzar rápido, y revisamos cada entrega antes de que llegue a tus manos.",
  },
  {
    title: "Código propio",
    desc: "Nada de plantillas. Cada proyecto parte desde cero, pensado para tu caso, y el código queda a tu nombre.",
  },
];

export default function NosotrosPage() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 pt-36 md:pt-44 pb-14 md:pb-20">
        <ScrollReveal>
          <h1
            className="display font-extrabold"
            style={{ fontSize: "clamp(38px, 6vw, 84px)", color: "var(--foreground)" }}
          >
            Un estudio chico,
            <br />
            senior y sin vueltas<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="mt-7 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
            Somos ingenieros que diseñan, construyen y mantienen lo que
            entregan. Trabajamos desde Santiago con empresas de toda
            Latinoamérica, y nos gusta que las cosas queden bien hechas.
          </p>
        </ScrollReveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="grid md:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 90}>
              <div className="card card-hover p-7 h-full">
                <h2 className="display text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                  {v.title}
                </h2>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {v.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Pendiente de activar cuando el equipo quiera mostrarse públicamente:
      <TeamSection /> */}

      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <ScrollReveal>
          <div
            className="rounded-[28px] px-7 py-12 md:px-14 md:py-16"
            style={{ background: "var(--accent)" }}
          >
            <h2 className="display font-bold" style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "var(--on-accent)" }}>
              Trabajemos juntos
            </h2>
            <p className="mt-3 text-base max-w-md" style={{ color: "rgba(255,255,255,0.85)" }}>
              Cuéntanos tu proyecto y mañana tienes una propuesta concreta.
            </p>
            <Link href="/contacto" className="pill-light mt-7">
              Contactar
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
