import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://innovatio-it.com";
const description =
  "Estudio de software en Santiago de Chile. Hacemos webs, plataformas, ciberseguridad e IA para empresas de toda Latinoamérica. Respondemos en menos de 24 horas.";

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
    title: "Innovatio-IT — Estudio de software en Santiago",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovatio-IT — Estudio de software en Santiago",
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
      className={`${bricolage.variable} ${hanken.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#F4F1EA" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
              `,
            }} />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Innovatio-IT",
              "url": siteUrl,
              "logo": `${siteUrl}/og-image.png`,
              "description": "Innovatio-IT es un equipo de ingenieros informáticos chilenos especializados en desarrollo de software, ciberseguridad e inteligencia artificial.",
              "email": "contacto@innovatio-it.com",
              "telephone": "+56-9-5637-9853",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santiago",
                "addressCountry": "CL"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+56-9-5637-9853",
                "contactType": "sales",
                "availableLanguage": ["Spanish", "English"],
                "areaServed": "CL"
              },
              "priceRange": "$$$",
              "knowsAbout": [
                "Desarrollo de Software",
                "Ciberseguridad",
                "Inteligencia Artificial",
                "Cloud e Infraestructura",
                "Consultoría Tecnológica"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
