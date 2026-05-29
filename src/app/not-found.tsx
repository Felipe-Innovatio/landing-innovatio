import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--background)" }}
    >
      <div className="mb-8">
        <Logo size="md" href="/" />
      </div>

      <p
        className="text-8xl font-bold mb-4"
        style={{ color: "var(--accent)", letterSpacing: "-0.04em" }}
      >
        404
      </p>

      <h1
        className="text-2xl md:text-3xl font-semibold mb-4"
        style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
      >
        Página no encontrada
      </h1>

      <p className="max-w-md mb-10" style={{ color: "var(--muted)" }}>
        La página que buscas no existe o fue movida. Vuelve al inicio y encuentra lo que necesitas.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-sm transition-all hover:opacity-90"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          Volver al inicio →
        </Link>
        <Link
          href="/#contacto"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-sm border transition-all"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          Contactarnos
        </Link>
      </div>
    </div>
  );
}
