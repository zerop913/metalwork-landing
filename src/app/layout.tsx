import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import { LeadModal } from "@/components/ui/LeadModal";

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
    <html lang="ru">
      <body className="font-body antialiased text-text bg-bg">
        <ModalProvider>
          {children}
          <LeadModal />
        </ModalProvider>
      </body>
    </html>
  );
}
