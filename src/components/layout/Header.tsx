"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: "rgba(8,8,8,0.85)", backdropFilter: "blur(12px)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo size="sm" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          Contáctanos
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="block w-5 h-0.5" style={{ background: "var(--foreground)", transition: "transform 0.2s", transform: open ? "rotate(45deg) translateY(8px)" : "" }} />
          <span className="block w-5 h-0.5" style={{ background: "var(--foreground)", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
          <span className="block w-5 h-0.5" style={{ background: "var(--foreground)", transition: "transform 0.2s", transform: open ? "rotate(-45deg) translateY(-8px)" : "" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm"
              style={{ color: "var(--muted)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: "var(--accent)", color: "#fff" }}
            onClick={() => setOpen(false)}
          >
            Contáctanos
          </Link>
        </div>
      )}
    </header>
  );
}
