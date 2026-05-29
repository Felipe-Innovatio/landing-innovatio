import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  "Empresa de desarrollo de software, ciberseguridad e inteligencia artificial. Diseñamos, desarrollamos y protegemos productos digitales de clase mundial.";

export const metadata: Metadata = {
  title: {
    default: "Innovatio-IT | Desarrollo de software, Ciberseguridad e IA",
    template: "%s | Innovatio-IT",
  },
  description,
  metadataBase: new URL(siteUrl),
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
