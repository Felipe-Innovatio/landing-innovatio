import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://innovatio-it.com";
const description =
  "Innovatio-IT es un equipo de ingenieros informáticos chilenos, expertos en distintas áreas tecnológicas y potenciados con inteligencia artificial. Combinamos las herramientas más avanzadas con rigor profesional para entregar soluciones confiables y de alto impacto.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Innovatio-IT",
  url: siteUrl,
  logo: `${siteUrl}/og-image.png`,
  description,
  email: "admin@innovatio-it.com",
  foundingLocation: {
    "@type": "Place",
    name: "Santiago, Región Metropolitana, Chile",
  },
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
  knowsAbout: [
    "Desarrollo de Software",
    "Diseño Web",
    "Ciberseguridad",
    "Inteligencia Artificial",
    "Cloud e Infraestructura",
    "Consultoría Tecnológica",
    "DevOps",
  ],
  sameAs: [
    "https://github.com/Felipe-Innovatio",
    "https://linkedin.com/company/innovatio-it",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Innovatio-IT | Desarrollo de Software, Ciberseguridad e IA en Chile",
    template: "%s | Innovatio-IT",
  },
  description,
  metadataBase: new URL(siteUrl),
  keywords: [
    "desarrollo de software Chile",
    "empresa tecnología Santiago",
    "ciberseguridad Chile",
    "inteligencia artificial empresas",
    "ingenieros informáticos Chile",
    "desarrollo web Chile",
    "consultoría tecnológica Santiago",
    "cloud hosting Chile",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Innovatio-IT",
    title: "Innovatio-IT — Tecnología que transforma tu negocio",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovatio-IT — Tecnología que transforma tu negocio",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
