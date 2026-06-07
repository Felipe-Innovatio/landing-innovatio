import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cita confirmada",
  description: "Tu cita con Innovatio-IT ha sido confirmada.",
  robots: { index: false, follow: false },
};

export default function ConfirmacionPage() {
  return (
    <main className="flex-1">
      <section className="max-w-3xl mx-auto px-6 pt-40 md:pt-48 pb-24 text-center">
        <span
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-7"
          style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
          aria-hidden="true"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <h1
          className="display font-extrabold mb-5"
          style={{ fontSize: "clamp(36px, 5.5vw, 72px)", color: "var(--foreground)" }}
        >
          ¡Cita confirmada!
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-md mx-auto mb-3" style={{ color: "var(--muted)" }}>
          Gracias por agendar con nosotros. Te contactaremos a la brevedad para
          confirmar los detalles.
        </p>
        <p className="text-[14px] mb-10" style={{ color: "var(--muted)" }}>
          ¿Dudas?{" "}
          <a
            href="mailto:contacto@innovatio-it.com"
            className="underline underline-offset-2 font-medium"
            style={{ color: "var(--foreground)" }}
          >
            contacto@innovatio-it.com
          </a>
        </p>
        <Link href="/" className="pill">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
