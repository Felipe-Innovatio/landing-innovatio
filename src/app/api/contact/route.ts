import { Resend } from "resend";
import { z } from "zod";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const body: unknown = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const { name, email, service, message } = parsed.data;

  const serviceLabels: Record<string, string> = {
    desarrollo: "Diseño y Desarrollo",
    hosting: "Hosting e Infraestructura",
    consultoria: "Consultoría Tecnológica",
    ciberseguridad: "Ciberseguridad",
    ia: "Inteligencia Artificial",
  };

  const { error } = await resend.emails.send({
    from: "Innovatio-IT Contacto <onboarding@resend.dev>",
    to: [process.env.CONTACT_EMAIL ?? "contacto@innovatio-it.com"],
    replyTo: email,
    subject: `[Contacto] ${name} — ${serviceLabels[service] ?? service}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #06080f; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <p style="color: #378ADD; font-weight: 600; font-size: 18px; margin: 0;">
            innovatio<span style="color: #85B7EB;">-it</span>
          </p>
        </div>
        <div style="border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
          <h2 style="margin: 0 0 24px; font-size: 20px;">Nuevo mensaje de contacto</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 120px;">Nombre</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                <a href="mailto:${email}" style="color: #378ADD;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;">Servicio</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${serviceLabels[service] ?? service}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #6b7280; margin: 0 0 8px; font-size: 14px;">Mensaje</p>
            <p style="background: #f9fafb; border-radius: 6px; padding: 16px; margin: 0; line-height: 1.6;">${message}</p>
          </div>
          <p style="margin: 24px 0 0; font-size: 13px; color: #9ca3af;">
            Puedes responder directamente a este email — llegará a ${email}
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
