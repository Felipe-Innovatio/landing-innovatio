import ScrollReveal from "@/components/ui/ScrollReveal";

const items = [
  { label: "Propuesta", value: "por escrito en 24 horas" },
  { label: "Equipo", value: "senior, sin subcontratar" },
  { label: "Modalidad", value: "por proyecto o por horas" },
  { label: "Cobertura", value: "Chile y Latinoamérica" },
];

export default function Commitments() {
  return (
    <section
      aria-label="Cómo trabajamos"
      style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 70}>
              <div
                className="py-6 md:py-7 pr-6"
                style={i > 0 ? { borderLeft: "1px solid var(--line)", paddingLeft: "1.5rem" } : undefined}
              >
                <dt
                  className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  {item.label}
                </dt>
                <dd className="text-[15px] md:text-base" style={{ color: "var(--foreground)" }}>
                  {item.value}
                </dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
