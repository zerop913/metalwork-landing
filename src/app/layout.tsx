import type { Metadata } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "КОВКА 53 — Воплотим любые идеи в металле",
  description:
    "Металлообработка на заказ: лестницы, навесы, фермы, каркасы, кованые заборы и декор. Варим, гнём, режем, красим, собираем. Работы любой сложности. Великий Новгород. Звоните!",
  keywords:
    "ковка 53, металлообработка, металлоконструкции, лестницы металлические, навесы, фермы, каркасы, кованые заборы, сварка, Великий Новгород",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "КОВКА 53 — Воплотим любые идеи в металле",
    description: "Лестницы, фермы, навесы, каркасы, кованые заборы и декор",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${montserrat.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <body className="font-body antialiased text-text bg-bg">{children}</body>
    </html>
  );
}
