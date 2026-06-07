import Link from "next/link";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Precios", href: "/precios" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const services = [
  { label: "Desarrollo web y apps", href: "/servicios/desarrollo" },
  { label: "Cloud y hosting", href: "/servicios/hosting" },
  { label: "Consultoría", href: "/servicios/consultoria" },
  { label: "Ciberseguridad", href: "/servicios/ciberseguridad" },
  { label: "Inteligencia artificial", href: "/servicios/ia" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--foreground)", color: "#F4F1EA" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <Logo size="lg" inverted />
            <p className="mt-4 text-[15px] leading-relaxed max-w-xs" style={{ color: "rgba(244,241,234,0.65)" }}>
              Estudio de software en Santiago de Chile. Construimos productos
              digitales para empresas de toda Latinoamérica.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[13px] font-semibold mb-4" style={{ color: "rgba(244,241,234,0.45)" }}>
              Mapa
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] transition-colors duration-200 hover:text-[var(--accent-on-ink)]"
                  style={{ color: "#F4F1EA" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="text-[13px] font-semibold mb-4" style={{ color: "rgba(244,241,234,0.45)" }}>
              Servicios
            </p>
            <nav className="flex flex-col gap-2.5">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-[15px] transition-colors duration-200 hover:text-[var(--accent-on-ink)]"
                  style={{ color: "#F4F1EA" }}
                >
                  {s.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(244,241,234,0.15)" }}
        >
          <p className="text-[13px]" style={{ color: "rgba(244,241,234,0.5)" }}>
            © {new Date().getFullYear()} Innovatio-IT · Santiago, Chile
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:contacto@innovatio-it.com"
              className="text-[13px] transition-colors duration-200 hover:text-[var(--accent-on-ink)]"
              style={{ color: "rgba(244,241,234,0.5)" }}
            >
              contacto@innovatio-it.com
            </a>
            <Link
              href="/privacidad"
              className="text-[13px] transition-colors duration-200 hover:text-[var(--accent-on-ink)]"
              style={{ color: "rgba(244,241,234,0.5)" }}
            >
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
