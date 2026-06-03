"use client";

import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Ingeniero Principal",
    role: "Líder Técnico & Co-fundador",
    bio: "Ingeniero informático con experiencia en arquitectura de software, infraestructura cloud y liderazgo técnico de equipos multidisciplinarios.",
    initials: "IP",
    specialties: ["Arquitectura", "Cloud", "DevOps"],
  },
  {
    name: "Especialista en IA",
    role: "Inteligencia Artificial & ML",
    bio: "Especialista en integración de modelos de lenguaje, sistemas RAG y automatización inteligente de procesos empresariales.",
    initials: "EI",
    specialties: ["LLMs", "RAG", "ML"],
  },
  {
    name: "Experto Seguridad",
    role: "Ciberseguridad & Infraestructura",
    bio: "Certificado en seguridad ofensiva y defensiva. Experiencia en pentesting, hardening de sistemas y cumplimiento normativo ISO 27001.",
    initials: "ES",
    specialties: ["Pentesting", "SIEM", "ISO 27001"],
  },
  {
    name: "Desarrollador Full Stack",
    role: "Desarrollo Web & Mobile",
    bio: "Especialista en React, Next.js y Node.js. Enfocado en crear experiencias de usuario excepcionales con código limpio y escalable.",
    initials: "DF",
    specialties: ["React", "Next.js", "Node.js"],
  },
];

export default function TeamSection() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="equipo" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full border mb-6 uppercase tracking-widest" style={{ borderColor: "var(--accent-dim)", color: "var(--accent-light)", background: "rgba(55,138,221,0.08)" }}>
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>
            Ingenieros, <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: "inherit" }}>no freelancers</em>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Equipo estable de titulados en ingeniería informática. Sin subcontratos, sin sorpresas de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 100}ms`,
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
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold" style={{ background: "rgba(55,138,221,0.1)", color: "var(--accent)", border: "2px solid rgba(55,138,221,0.2)" }}>
                {member.initials}
              </div>
              <h3 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>{member.name}</h3>
              <p className="text-xs font-medium mb-3" style={{ color: "var(--accent)" }}>{member.role}</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.specialties.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(55,138,221,0.08)", color: "var(--accent-light)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
