import Link from "next/link";
import Logo from "@/components/ui/Logo";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Felipe-Innovatio" },
];

export default function Footer() {
  return (
    <footer
      className="border-t py-14 px-6"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Logo size="md" />
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Ingenieros informáticos chilenos que combinan IA y rigor profesional para entregar tecnología que funciona.
            </p>
            <a
              href="mailto:contacto@innovatio-it.com"
              className="text-sm transition-opacity hover:opacity-80"
              style={{ color: "var(--accent-light)" }}
            >
              contacto@innovatio-it.com
            </a>
          </div>

          {/* Nav + Socials */}
          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
                Navegación
              </p>
              <nav className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-80"
                    style={{ color: "var(--muted)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
                Redes
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-opacity hover:opacity-80"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-2" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Innovatio-IT. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacidad"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ color: "var(--muted)" }}
            >
              Política de Privacidad
            </Link>
            <span className="text-xs" style={{ color: "var(--muted)" }}>·</span>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              Santiago, Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
