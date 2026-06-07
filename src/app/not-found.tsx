import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1">
      <section className="max-w-3xl mx-auto px-6 pt-40 md:pt-48 pb-24 text-center">
        <p
          className="display font-extrabold"
          style={{ fontSize: "clamp(90px, 18vw, 200px)", color: "var(--accent)", lineHeight: 1 }}
        >
          404
        </p>
        <h1 className="display text-2xl md:text-3xl font-bold mt-4 mb-4" style={{ color: "var(--foreground)" }}>
          Esta página no existe
        </h1>
        <p className="text-base leading-relaxed max-w-md mx-auto mb-10" style={{ color: "var(--muted)" }}>
          El enlace puede estar roto o la página fue movida. Volvamos a un
          lugar seguro.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="pill">
            Volver al inicio
          </Link>
          <Link href="/contacto" className="pill-ghost">
            Contactarnos
          </Link>
        </div>
      </section>
    </main>
  );
}
