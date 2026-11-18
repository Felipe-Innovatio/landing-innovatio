import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
// Pendiente de activar cuando el equipo quiera mostrarse públicamente:
// import TeamSection from "@/components/sections/TeamSection";

const values = [
  {
    title: "Quién cotiza es quién construye",
    desc: "La persona que cotiza el proyecto es la misma que lo construye y la que responde después. No hay intermediarios entre el cliente y el equipo técnico.",
  },
  {
    title: "Uso de IA con revisión",
    desc: "Usamos modelos de lenguaje para escribir código y documentar más rápido. Cada entrega pasa por la revisión de otra persona antes de llegar a producción.",
  },
  {
    title: "El código es del cliente",
    desc: "Cada proyecto parte desde cero, sin plantillas. El repositorio queda a nombre del cliente desde el primer día, con su documentación.",
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
            Un equipo pequeño
            <br />
            de ingenieros senior<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="mt-7 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
            Somos entre cuatro y seis personas, con experiencia en desarrollo,
            infraestructura y seguridad. Trabajamos desde Santiago con clientes
            en Chile y en el resto de Latinoamérica.
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
              Veinte minutos para entender qué necesitas. Sin costo y sin compromiso.
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
