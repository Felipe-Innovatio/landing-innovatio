"use client";

import { notFound } from "next/navigation";

const articles: Record<string, { title: string; description: string; date: string; readTime: string; category: string; content: string }> = {
  "cuanto-cuesta-pagina-web-chile-2026": {
    title: "Cuánto cuesta hacer una página web en Chile en 2026",
    description: "Desde $100.000 hasta $15.000.000+. Te explicamos por qué hay tanta diferencia y cómo elegir la opción correcta para tu negocio.",
    date: "2026-06-03",
    readTime: "8 min",
    category: "Desarrollo Web",
    content: `<p>En Chile, el costo de una página web puede variar desde <strong>$100.000</strong> hasta más de <strong>$15.000.000</strong>. La diferencia no es capricho: depende de quién la hace, con qué tecnología y qué tan preparada está para crecer contigo.</p>
<h3>Los tres mundos del desarrollo web</h3>
<p><strong>Plantillas y freelancers sin formación técnica ($100.000 – $500.000):</strong> Son sitios hechos con WordPress o Wix en un par de días. Funcionan si solo necesitas una tarjeta de presentación digital, pero se caen cuando creces. El SEO técnico es malo, la seguridad es inexistente y escalar cuesta más que rehacerlo.</p>
<p><strong>Agencias tradicionales ($1.500.000 – $5.000.000):</strong> Entregan sitios decentes, pero suelen usar stacks obsoletos, cobran por cada cambio pequeño y los tiempos de entrega se miden en meses, no en semanas.</p>
<p><strong>Equipos de ingeniería con código real ($800.000 – $15.000.000+):</strong> Arquitectura pensada para tu caso, tecnologías modernas (React, Next.js, Node.js), SEO técnico integrado desde el primer día y una base que puede escalar sin drama.</p>
<h3>La pregunta que deberías hacerte</h3>
<p>No es "¿cuánto cuesta una página web?". Es "¿cuánto me cuesta que mi tecnología me frene?". Una mala decisión al inicio se paga con intereses compuestos: rediseños costosos, hackeos, caídas en Black Friday y clientes que se van porque tu sitio tarda 8 segundos en cargar.</p>
<p>En Innovatio-IT partimos desde <strong>$800.000</strong> porque es el precio mínimo para hacer las cosas bien: código limpio, SEO técnico, responsive real y una arquitectura que no se cae cuando creces.</p>`,
  },
  "wordpress-vs-codigo-a-medida": {
    title: "WordPress vs Código a medida: Cuál elegir para tu empresa",
    description: "Comparamos rendimiento, seguridad, escalabilidad y costo total de propiedad. La respuesta depende de tu etapa de crecimiento.",
    date: "2026-05-28",
    readTime: "6 min",
    category: "Desarrollo Web",
    content: `<p>WordPress es el rey de los CMS: potencia el 43% de la web. Pero no es la respuesta correcta para todos. Si tu negocio depende de la velocidad, la seguridad o la personalización profunda, el código a medida gana por goleada.</p>
<h3>Rendimiento</h3>
<p>Un sitio en WordPress con 20 plugins tarda entre 3 y 8 segundos en cargar. Un sitio hecho con Next.js y optimizado correctamente carga en menos de 1 segundo. En ecommerce, cada segundo de demora reduce las conversiones un 7%.</p>
<h3>Seguridad</h3>
<p>WordPress es el objetivo #1 de ataques automatizados. Un plugin desactualizado puede abrir la puerta a tu servidor entero. Con código propio, el área de ataque es mínima y controlada.</p>
<h3>Escalabilidad</h3>
<p>WordPress escala verticalmente (más servidor). El código moderno escala horizontalmente (más instancias, menos costo). La diferencia se nota cuando pasas de 1.000 a 100.000 visitas al mes.</p>
<h3>La regla simple</h3>
<p>Si solo publicas contenido y no te importa la velocidad, usa WordPress. Si tu sitio es tu negocio —ventas, reservas, dashboards, integraciones— invierte en código a medida desde el día uno.</p>`,
  },
  "ciberseguridad-pymes-chile": {
    title: "Ciberseguridad para PYMES en Chile: Guía práctica 2026",
    description: "El 43% de las PYMES chilenas han sufrido algún incidente de seguridad. Aprende a proteger tu empresa sin gastar una fortuna.",
    date: "2026-05-20",
    readTime: "10 min",
    category: "Ciberseguridad",
    content: `<p>Las PYMES chilenas son el blanco favorito de los cibercriminales. No porque sean las más lucrativas, sino porque son las más fáciles. Un ataque de ransomware puede paralizar una empresa de 20 personas durante semanas y costar millones en rescates y tiempo perdido.</p>
<h3>Los 5 errores más comunes</h3>
<ol>
<li><strong>Contraseñas débiles reutilizadas:</strong> El 65% de los empleados usa la misma contraseña en trabajo y en redes sociales.</li>
<li><strong>Sin actualizaciones automáticas:</strong> Un servidor con un parche de seguridad pendiente de 6 meses es una puerta abierta.</li>
<li><strong>Sin backups probados:</strong> Tener backup no sirve si nunca lo restauraste.</li>
<li><strong>Phishing sin capacitación:</strong> El 91% de los ataques empieza con un correo malicioso.</li>
<li><strong>WiFi de invitados en la misma red:</strong> Cualquier persona conectada puede escanear tus dispositivos internos.</li>
</ol>
<h3>Por dónde empezar</h3>
<p>No necesitas un CISO de $5.000.000 al mes. Necesitas un par de horas de auditoría, un hardening básico de servidores y una capacitación de phishing para tu equipo. En Innovatio-IT hacemos auditorías de seguridad accesibles y te entregamos un plan concreto para cerrar las brechas.</p>`,
  },
  "ia-empresas-chile-como-empezar": {
    title: "Inteligencia Artificial para empresas chilenas: Cómo empezar sin morir en el intento",
    description: "De ChatGPT a sistemas RAG personalizados. Una guía práctica para integrar IA en tu empresa paso a paso.",
    date: "2026-05-15",
    readTime: "12 min",
    category: "Inteligencia Artificial",
    content: `<p>Toda empresa quiere "usar IA" en 2026. Pocas saben por dónde empezar. La mayoría cae en la trampa de comprar herramientas caras que nadie usa o de intentar automatizar todo de una vez.</p>
<h3>Paso 1: Identifica el dolor real</h3>
<p>La IA no es magia. Es una herramienta para resolver problemas específicos. ¿Tus vendedores pasan 3 horas al día respondiendo las mismas preguntas? ¿Tus analistas transcriben datos manualmente? Esos son los candidatos perfectos.</p>
<h3>Paso 2: Empieza con un piloto de 2 semanas</h3>
<p>No contrates una consultora de 6 meses. Arma un piloto pequeño: un chatbot interno con tus documentos, un flujo de automatización para una tarea repetitiva, un modelo de clasificación para tus tickets de soporte.</p>
<h3>Paso 3: Mide antes de escalar</h3>
<p>Si el piloto ahorra 5 horas semanales, escálalo. Si nadie lo usa, aborta y aprende. La ventaja de la IA moderna es que los costos de experimentación son bajos.</p>
<h3>Lo que NO hacer</h3>
<ul>
<li>No reemplaces a tu equipo sin un plan de transición.</li>
<li>No uses IA para decisiones críticas sin supervisión humana.</li>
<li>No compartas datos sensibles con APIs de terceros sin revisar contratos.</li>
</ul>
<p>En Innovatio-IT diseñamos sistemas RAG, automatizaciones con IA e integraciones de LLMs pensados para empresas chilenas reales. Sin buzzwords, sin vendor lock-in.</p>`,
  },
};

export default function ArticleContent({ slug }: { slug: string }) {
  const article = articles[slug];
  if (!article) return notFound();

  return (
    <main className="pt-32 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <span className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block" style={{ background: "rgba(55,138,221,0.08)", color: "var(--accent-light)" }}>{article.category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4" style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}>{article.title}</h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>{article.date} · {article.readTime} de lectura</p>
        </header>
        <div
          className="prose prose-invert max-w-none"
          style={{ color: "var(--muted)", lineHeight: "1.8" }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </main>
  );
}
