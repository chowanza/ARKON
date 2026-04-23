import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARKON C.A | Soluciones Estratégicas Oil & Gas",
  description: "Especialistas en ingeniería, procura, construcción (IPC), mantenimiento de pozos y saneamiento ambiental para la industria Oil & Gas.",
  keywords: ["Ingeniería", "Oil & Gas", "Mantenimiento de Pozos", "HSEQ", "Construcción", "Saneamiento Ambiental", "ARKON"],
  openGraph: {
    title: "ARKON C.A | Soluciones Estratégicas Oil & Gas",
    description: "Especialistas en ingeniería, procura, construcción (IPC), mantenimiento de pozos y saneamiento ambiental para la industria Oil & Gas.",
    url: "https://arkon-ca.vercel.app/",
    siteName: "ARKON C.A",
    locale: "es_VE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
