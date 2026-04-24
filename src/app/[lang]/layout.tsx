import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { getDictionary, Locale } from "@/dictionaries/getDictionary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return {
    title: "ARKON C.A | " + (lang === 'en' ? "Strategic Oil & Gas Solutions" : "Soluciones Estratégicas Oil & Gas"),
    description: dict.footer.tagline,
    keywords: ["Ingeniería", "Oil & Gas", "Mantenimiento de Pozos", "HSEQ", "Construcción", "Saneamiento Ambiental", "ARKON"],
    openGraph: {
      title: "ARKON C.A | " + (lang === 'en' ? "Strategic Oil & Gas Solutions" : "Soluciones Estratégicas Oil & Gas"),
      description: dict.footer.tagline,
      url: "https://arkon-ca.vercel.app/",
      siteName: "ARKON C.A",
      locale: lang === 'en' ? "en_US" : "es_VE",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
