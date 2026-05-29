import Link from "next/link";

const stats = [
  { value: "IA", label: "Potenciados por inteligencia artificial" },
  { value: "5", label: "Áreas de servicio" },
  { value: "100%", label: "Rigor profesional" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">

      {/* Background grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.35,
        }}
      />

      {/* Radial fade over grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, var(--background) 100%)",
        }}
      />

      {/* Glow orb */}
      <div
        className="glow-pulse absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--accent)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

        <span
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full border mb-8 uppercase tracking-widest"
          style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--accent)" }} />
          Innovatio-IT · Soluciones tecnológicas
        </span>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-semibold leading-none tracking-tight mb-6"
          style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
        >
          Tecnología que{" "}
          <span className="gradient-text">transforma</span>
          <br />
          tu negocio
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Convertimos tus desafíos tecnológicos en soluciones reales.
          Velocidad de entrega con IA, calidad garantizada por ingenieros expertos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Hablemos →
          </Link>
          <Link
            href="#servicios"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-sm border transition-all hover:border-opacity-60"
            style={{ borderColor: "var(--border)", color: "var(--muted)", background: "rgba(255,255,255,0.03)" }}
          >
            Ver servicios
          </Link>
        </div>

        {/* Stats strip */}
        <div
          className="flex flex-col sm:flex-row items-center gap-0 border rounded-2xl overflow-hidden"
          style={{ borderColor: "var(--border)", background: "rgba(10,14,26,0.7)", backdropFilter: "blur(12px)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-5 px-10"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span
                className="text-3xl font-semibold mb-1"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }}
      />
    </section>
  );
}
