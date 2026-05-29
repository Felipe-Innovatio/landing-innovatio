import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function CtaBanner() {
  return (
    <section className="py-24 px-6">
      <FadeIn>
        <div
          className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{ background: "var(--surface)", border: "1px solid var(--accent-dim)" }}
        >
          <div className="relative z-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-6"
              style={{ borderColor: "var(--accent-dim)", color: "var(--accent)" }}
            >
              Empecemos
            </span>

            <h2
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
            >
              ¿Tu negocio está listo para
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>dar el siguiente paso?</em>
            </h2>

            <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "var(--muted)" }}>
              Cuéntanos tu proyecto y te respondemos con una propuesta concreta en menos de 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Hablemos →
              </Link>
              <a
                href="mailto:contacto@innovatio-it.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-sm border transition-all hover:border-opacity-60"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              >
                contacto@innovatio-it.com
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
