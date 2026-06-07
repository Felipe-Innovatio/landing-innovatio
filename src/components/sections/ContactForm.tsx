"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRecaptcha } from "@/hooks/useRecaptcha";

const schema = z.object({
  name: z.string().min(2, "Ingresa al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad",
  }),
});

type FormData = z.infer<typeof schema>;

const labelClass = "block text-[14px] font-semibold mb-1.5";
const errorClass = "block mt-1.5 text-[13px] font-medium";

export default function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const { execute: executeRecaptcha } = useRecaptcha(
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setServerError(null);

    let token = "";
    try {
      token = await executeRecaptcha("contact_form");
    } catch {
      token = "";
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken: token }),
      });

      if (!res.ok) {
        const json = (await res.json()) as { error?: string };
        setServerError(json.error ?? "Error al enviar. Intenta de nuevo.");
      }
    } catch {
      setServerError("Error de red. Verifica tu conexión e intenta de nuevo.");
    }
  }

  if (isSubmitSuccessful) {
    return (
      <div className="card p-10 text-center">
        <span
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
          style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
          aria-hidden="true"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <p className="display text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
          ¡Mensaje recibido!
        </p>
        <p className="text-[15px]" style={{ color: "var(--muted)" }}>
          Te respondemos en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card p-7 md:p-9 flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="contact-name" style={{ color: "var(--foreground)" }}>
            Nombre
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Tu nombre"
            {...register("name")}
            className={`input ${errors.name ? "has-error" : ""}`}
          />
          {errors.name && (
            <span className={errorClass} style={{ color: "#D63B2F" }}>
              {errors.name.message}
            </span>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="contact-email" style={{ color: "var(--foreground)" }}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="tu@email.com"
            {...register("email")}
            className={`input ${errors.email ? "has-error" : ""}`}
          />
          {errors.email && (
            <span className={errorClass} style={{ color: "#D63B2F" }}>
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-service" style={{ color: "var(--foreground)" }}>
          Servicio de interés
        </label>
        <select
          id="contact-service"
          {...register("service")}
          className={`input ${errors.service ? "has-error" : ""}`}
        >
          <option value="">Selecciona un servicio</option>
          <option value="desarrollo">Desarrollo web y apps</option>
          <option value="hosting">Cloud y hosting</option>
          <option value="consultoria">Consultoría</option>
          <option value="ciberseguridad">Ciberseguridad</option>
          <option value="ia">Inteligencia artificial</option>
        </select>
        {errors.service && (
          <span className={errorClass} style={{ color: "#D63B2F" }}>
            {errors.service.message}
          </span>
        )}
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-message" style={{ color: "var(--foreground)" }}>
          Mensaje
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Cuéntanos sobre tu proyecto..."
          {...register("message")}
          className={`input resize-none ${errors.message ? "has-error" : ""}`}
        />
        {errors.message && (
          <span className={errorClass} style={{ color: "#D63B2F" }}>
            {errors.message.message}
          </span>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("privacy")}
            className="mt-1 flex-shrink-0"
            style={{ accentColor: "var(--accent)", width: "16px", height: "16px" }}
          />
          <span className="text-[13px] leading-relaxed" style={{ color: "var(--muted)" }}>
            He leído y acepto la{" "}
            <Link
              href="/privacidad"
              target="_blank"
              className="underline underline-offset-2 font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Política de Privacidad
            </Link>{" "}
            y autorizo el tratamiento de mis datos personales para gestionar mi consulta.
          </span>
        </label>
        {errors.privacy && (
          <span className={errorClass} style={{ color: "#D63B2F" }}>
            {errors.privacy.message}
          </span>
        )}
      </div>

      <p className="text-[12px] leading-relaxed" style={{ color: "var(--muted)" }}>
        Este sitio está protegido por reCAPTCHA y se aplican la{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
          style={{ color: "var(--foreground)" }}
        >
          Política de Privacidad
        </a>{" "}
        y los{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
          style={{ color: "var(--foreground)" }}
        >
          Términos de Servicio
        </a>{" "}
        de Google.
      </p>

      {serverError && (
        <p
          className="text-[14px] font-medium px-4 py-3 rounded-xl"
          style={{ background: "rgba(214,59,47,0.08)", color: "#D63B2F" }}
        >
          {serverError}
        </p>
      )}

      <button type="submit" disabled={isSubmitting} className="pill w-full" style={{ opacity: isSubmitting ? 0.65 : 1 }}>
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
