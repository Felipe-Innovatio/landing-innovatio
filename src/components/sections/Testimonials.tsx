"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "El equipo de Innovatio-IT no solo entregó lo que pedimos. Nos propusieron mejoras que ni siquiera habíamos pensado. El resultado fue mejor de lo que esperábamos.",
    author: "Cliente Anónimo",
    role: "Gerente de Operaciones",
    company: "Empresa Retail Chile",
    initials: "CA",
  },
  {
    quote: "Migraron nuestra infraestructura completa a la nube sin un solo minuto de downtime. El monitoreo que implementaron nos ha salvado más de una vez.",
    author: "Cliente Anónimo",
    role: "CTO",
    company: "Startup Fintech",
    initials: "CT",
  },
  {
    quote: "La auditoría de seguridad descubrió vulnerabilidades graves que nuestro proveedor anterior nunca había detectado. Su forma de trabajar nos devolvió la tranquilidad.",
    author: "Cliente Anónimo",
    role: "Director de Tecnología",
    company: "Empresa Logística",
    initials: "DL",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="testimonios" className="py-20 md:py-32 px-6" style={{ background: "rgba(55,138,221,0.03)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
            Lo que dicen <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>nuestros clientes</em>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Historias reales de empresas que confiaron en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 150}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(55,138,221,0.3)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(55,138,221,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="text-4xl font-serif mb-4" style={{ color: "var(--accent)", opacity: 0.4 }}>&ldquo;</div>
              <p className="leading-relaxed mb-6" style={{ color: "var(--muted)" }}>{t.quote}</p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" style={{ background: "rgba(55,138,221,0.15)", color: "var(--accent)" }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{t.author}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{t.role} &middot; {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
