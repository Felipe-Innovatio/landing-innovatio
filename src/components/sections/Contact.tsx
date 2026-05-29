"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FadeIn from "@/components/ui/FadeIn";

const schema = z.object({
  name: z.string().min(2, "Ingresá al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Seleccioná un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof schema>;

const inputStyle = {
  borderColor: "var(--border)",
  color: "var(--foreground)",
  background: "transparent",
};

const errorStyle = {
  color: "#f87171",
  fontSize: "11px",
  marginTop: "4px",
};

export default function Contact() {
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setServerError(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const json = await res.json() as { error?: string };
      setServerError(json.error ?? "Error al enviar. Intentá de nuevo.");
    }
  }

  return (
    <section id="contacto" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <FadeIn>
          <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: "var(--accent)" }}>
            Contacto
          </span>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            ¿Tienes un proyecto?
          </h2>
          <p style={{ color: "var(--muted)" }}>
            Cuéntanos de qué se trata y te respondemos en menos de 24 horas.
          </p>
        </FadeIn>
      </div>

      <FadeIn className="max-w-xl mx-auto" delay={100}>
        {isSubmitSuccessful ? (
          <div
            className="p-10 rounded-2xl border text-center"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(55,138,221,0.12)", color: "var(--accent)", fontSize: "20px" }}
            >
              ✓
            </div>
            <p className="font-semibold text-lg mb-2" style={{ color: "var(--foreground)" }}>
              ¡Mensaje enviado!
            </p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Te respondemos a <span style={{ color: "var(--accent-light)" }}>contacto@innovatio-it.com</span> a la brevedad.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="p-8 rounded-2xl border flex flex-col gap-5"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  {...register("name")}
                  className="px-4 py-3 rounded-xl border text-sm outline-none bg-transparent"
                  style={{ ...inputStyle, borderColor: errors.name ? "#f87171" : "var(--border)" }}
                />
                {errors.name && <span style={errorStyle}>{errors.name.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  {...register("email")}
                  className="px-4 py-3 rounded-xl border text-sm outline-none bg-transparent"
                  style={{ ...inputStyle, borderColor: errors.email ? "#f87171" : "var(--border)" }}
                />
                {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                Servicio de interés
              </label>
              <select
                {...register("service")}
                className="px-4 py-3 rounded-xl border text-sm outline-none"
                style={{
                  borderColor: errors.service ? "#f87171" : "var(--border)",
                  color: "var(--muted)",
                  background: "var(--surface)",
                }}
              >
                <option value="">Seleccioná un servicio</option>
                <option value="desarrollo">Diseño y Desarrollo</option>
                <option value="hosting">Hosting e Infraestructura</option>
                <option value="consultoria">Consultoría Tecnológica</option>
                <option value="ciberseguridad">Ciberseguridad</option>
                <option value="ia">Inteligencia Artificial</option>
              </select>
              {errors.service && <span style={errorStyle}>{errors.service.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                Mensaje
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto..."
                {...register("message")}
                className="px-4 py-3 rounded-xl border text-sm outline-none resize-none bg-transparent"
                style={{ ...inputStyle, borderColor: errors.message ? "#f87171" : "var(--border)" }}
              />
              {errors.message && <span style={errorStyle}>{errors.message.message}</span>}
            </div>

            {serverError && (
              <p className="text-sm text-center py-2 px-4 rounded-lg" style={{ background: "rgba(248,113,113,0.1)", color: "#f87171" }}>
                {serverError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full font-medium text-sm transition-opacity"
              style={{
                background: "var(--accent)",
                color: "#fff",
                opacity: isSubmitting ? 0.6 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        )}
      </FadeIn>
    </section>
  );
}
