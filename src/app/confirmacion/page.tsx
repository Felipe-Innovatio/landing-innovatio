import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Cita confirmada",
  description: "Tu cita con Innovatio-IT ha sido confirmada.",
  robots: { index: false, follow: false },
};

export default function ConfirmacionPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--background)" }}
    >
      <div className="mb-10">
        <Logo size="md" href="/" />
      </div>

      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ background: "rgba(55,138,221,0.12)", color: "var(--accent)", fontSize: "28px" }}
      >
        ✓
      </div>

      <h1
        className="text-3xl md:text-4xl font-bold mb-4"
        style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
      >
        ¡Cita confirmada!
      </h1>

      <p className="max-w-md mb-3" style={{ color: "var(--muted)" }}>
        Gracias por agendar con Innovatio-IT. Nos pondremos en contacto contigo a la brevedad para confirmar los detalles.
      </p>

      <p className="text-sm mb-10" style={{ color: "var(--muted)" }}>
        ¿Tienes dudas?{" "}
        <a
          href="mailto:contacto@innovatio-it.com"
          className="transition-opacity hover:opacity-70"
          style={{ color: "var(--accent-light)" }}
        >
          contacto@innovatio-it.com
        </a>
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-sm transition-all hover:opacity-90"
        style={{ background: "var(--accent)", color: "#fff" }}
      >
        Volver al inicio →
      </Link>
    </div>
  );
}
