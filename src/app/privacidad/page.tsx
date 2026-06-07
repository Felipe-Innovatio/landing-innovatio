import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y tratamiento de datos personales de Innovatio-IT.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content: `Innovatio-IT (en adelante, "la Empresa") es responsable del tratamiento de los datos personales que se recopilan a través del sitio web innovatio-it.com. Para consultas relacionadas con el tratamiento de sus datos, puede contactarnos en contacto@innovatio-it.com.`,
  },
  {
    title: "2. Datos que recopilamos",
    content: `A través del formulario de contacto recopilamos los siguientes datos personales: nombre completo, dirección de correo electrónico, servicio de interés y el mensaje que nos envía. Estos datos son proporcionados de forma voluntaria por el usuario. No recopilamos datos sensibles, bancarios ni de menores de edad. El acceso al sitio mediante el botón de WhatsApp puede implicar el tratamiento de su número de teléfono directamente por WhatsApp Inc., sujeto a sus propias políticas de privacidad.`,
  },
  {
    title: "3. Finalidad del tratamiento",
    content: `Los datos recopilados se utilizan exclusivamente para: (a) responder a su consulta o solicitud de cotización; (b) contactarlo en relación con los servicios de Innovatio-IT que indicó en el formulario; (c) mejorar la calidad de nuestros servicios. No utilizamos sus datos para fines publicitarios de terceros ni los cedemos a otras empresas sin su consentimiento explícito.`,
  },
  {
    title: "4. Base legal del tratamiento",
    content: `El tratamiento de sus datos se basa en el consentimiento explícito que usted otorga al marcar la casilla de aceptación antes de enviar el formulario de contacto, en conformidad con la Ley N° 19.628 sobre Protección de la Vida Privada y la Ley N° 21.719 de Protección de Datos Personales de Chile.`,
  },
  {
    title: "5. Conservación de los datos",
    content: `Sus datos serán conservados durante el tiempo necesario para gestionar su consulta y mantener la relación comercial, o hasta que solicite su eliminación. Una vez finalizada la relación y transcurrido el plazo legal aplicable, los datos serán eliminados de forma segura.`,
  },
  {
    title: "6. Comunicación de datos a terceros",
    content: `Innovatio-IT no vende, alquila ni cede sus datos personales a terceros. Únicamente podemos compartir datos con proveedores de servicios tecnológicos estrictamente necesarios para operar el sitio (como el proveedor de envío de correos electrónicos), quienes están obligados contractualmente a tratarlos con confidencialidad y solo para las finalidades indicadas.`,
  },
  {
    title: "7. Derechos del titular",
    content: `Como titular de sus datos personales, usted tiene derecho a: (a) acceder a los datos que poseemos sobre usted; (b) rectificar datos inexactos o incompletos; (c) eliminar sus datos cuando ya no sean necesarios; (d) oponerse al tratamiento de sus datos; (e) revocar el consentimiento otorgado en cualquier momento. Para ejercer cualquiera de estos derechos, escríbanos a contacto@innovatio-it.com indicando su solicitud. Daremos respuesta dentro de un plazo razonable.`,
  },
  {
    title: "8. Seguridad de los datos",
    content: `Adoptamos medidas técnicas y organizativas apropiadas para proteger sus datos personales frente a accesos no autorizados, pérdida, alteración o divulgación. La comunicación entre su navegador y nuestro sitio está protegida mediante cifrado SSL/TLS.`,
  },
  {
    title: "9. Cookies y análisis",
    content: `Este sitio utiliza Vercel Analytics para recopilar estadísticas de uso de forma anónima y agregada (páginas visitadas, tiempo de sesión, dispositivo). No utilizamos cookies de seguimiento publicitario ni compartimos estos datos con redes de publicidad.`,
  },
  {
    title: "10. Modificaciones a esta política",
    content: `Innovatio-IT se reserva el derecho de actualizar esta política en cualquier momento. Las modificaciones serán publicadas en esta misma página con indicación de la fecha de última actualización. Le recomendamos revisarla periódicamente.`,
  },
];

export default function PrivacidadPage() {
  return (
    <main>
      <section className="max-w-3xl mx-auto px-6 pt-36 md:pt-44 pb-20 md:pb-28">
        <h1
          className="display font-extrabold mb-3"
          style={{ fontSize: "clamp(34px, 5vw, 64px)", color: "var(--foreground)" }}
        >
          Política de privacidad
        </h1>
        <p className="text-[14px] mb-12" style={{ color: "var(--muted)" }}>
          Última actualización: mayo de 2026
        </p>

        <div className="flex flex-col gap-9">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="display text-lg font-bold mb-2.5" style={{ color: "var(--foreground)" }}>
                {section.title}
              </h2>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="card p-6 mt-12">
          <p className="text-[14px]" style={{ color: "var(--muted)" }}>
            ¿Tienes preguntas sobre el tratamiento de tus datos?{" "}
            <a
              href="mailto:contacto@innovatio-it.com"
              className="underline underline-offset-2 font-medium"
              style={{ color: "var(--foreground)" }}
            >
              contacto@innovatio-it.com
            </a>
          </p>
        </div>

        <Link
          href="/"
          className="link-slide inline-block mt-10 text-[15px] font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          ← Volver al inicio
        </Link>
      </section>
    </main>
  );
}
