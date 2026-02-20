import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "МеталлСтрой — Лестницы, Фермы, Навесы, Каркасы, Декор",
  description:
    "Изготовление металлоконструкций на заказ: лестницы, навесы, фермы, каркасы, декоративные изделия. Работаем по всему региону. Звоните!",
  keywords:
    "металлоконструкции, лестницы металлические, навесы, каркас, сварка, металлодекор",
  openGraph: {
    title: "МеталлСтрой — Металлоконструкции на заказ",
    description: "Лестницы, фермы, навесы, каркасы и декор из металла",
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
    <html lang="ru" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
