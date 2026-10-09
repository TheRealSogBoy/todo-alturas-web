import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileFloatingCta } from "@/components/layout/MobileFloatingCta";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://todoenalturas.com"),
  title: {
    template: "%s | Todo Alturas — Soluciones de Seguridad Industrial",
    default: "Todo Alturas | Capacitación, Ingeniería y Protección Contra Caídas",
  },
  description:
    "Soluciones empresariales de seguridad industrial en Colombia: formación avalada bajo Res. 4272/2021, diseño e instalación de sistemas de ingeniería (líneas de vida, puntos de anclaje) y equipos certificados. Respaldo Grupo Empresarial Eficaz.",
  keywords: [
    "trabajo en alturas colombia",
    "curso de alturas bogota ibague",
    "lineas de vida certificadas",
    "puntos de anclaje ingenieria",
    "seguridad industrial b2b",
    "resolucion 4272 de 2021",
    "espacios confinados resolucion 0491",
    "arneses certificados",
  ],
  authors: [{ name: "Todo Alturas - Grupo Empresarial Eficaz" }],
  openGraph: {
    title: "Todo Alturas — Capacitación, Ingeniería y Protección para Operaciones de Alto Riesgo",
    description:
      "Soluciones B2B de seguridad industrial, sistemas de ingeniería contra caídas y capacitación normativa. Sedes en Ibagué y Bogotá.",
    url: "https://todoenalturas.com",
    siteName: "Todo Alturas",
    images: [
      {
        url: "/images/hero-industrial.jpg",
        width: 1600,
        height: 900,
        alt: "Todo Alturas - Seguridad Industrial e Ingeniería",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  icons: {
    icon: "/images/logo-todo-alturas.png",
    apple: "/images/logo-todo-alturas.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${barlowCondensed.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0B0B0B] text-[#F7F7F5] flex flex-col font-sans selection:bg-[#FFDE3B] selection:text-[#0B0B0B]">
        <SiteHeader />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
        <MobileFloatingCta />
      </body>
    </html>
  );
}
