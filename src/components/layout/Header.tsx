"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Precios", href: "/precios" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || open ? "rgba(244,241,234,0.92)" : "transparent",
        backdropFilter: scrolled || open ? "blur(10px)" : "none",
        borderBottom: scrolled || open ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Logo size="sm" />

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-slide text-[15px] font-medium"
              style={{ color: "var(--foreground)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" className="pill" style={{ padding: "11px 22px", fontSize: "14px" }}>
            Hablemos
          </Link>
        </nav>

        {/* Botón móvil */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          aria-expanded={open}
        >
          <span
            className="block w-6 h-[2px] rounded transition-transform duration-300"
            style={{ background: "var(--foreground)", transform: open ? "rotate(45deg) translateY(5.5px)" : "none" }}
          />
          <span
            className="block w-6 h-[2px] rounded transition-opacity duration-300"
            style={{ background: "var(--foreground)", opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[2px] rounded transition-transform duration-300"
            style={{ background: "var(--foreground)", transform: open ? "rotate(-45deg) translateY(-5.5px)" : "none" }}
          />
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "320px" : "0px" }}
      >
        <nav className="px-6 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="display text-[26px] font-bold py-1.5"
              style={{ color: "var(--foreground)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="pill self-start mt-3"
            onClick={() => setOpen(false)}
          >
            Hablemos
          </Link>
        </nav>
      </div>
    </header>
  );
}
