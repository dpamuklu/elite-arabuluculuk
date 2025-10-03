import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { FloatingWhatsApp } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Elite Arabuluculuk - Profesyonel Arabuluculuk Hizmetleri",
  description: "Türkiye'nin en deneyimli arabuluculuk firması. Ticari ve hukuki uyuşmazlıklar için profesyonel arabuluculuk hizmetleri.",
  keywords: "arabulucu, arabuluculuk, hukuk, uyuşmazlık çözümü, mediasyon, istanbul arabulucu",
  authors: [{ name: "Elite Arabuluculuk" }],
  icons: {
    icon: "/images/whitelogo.png",
    shortcut: "/images/whitelogo.png",
    apple: "/images/whitelogo.png",
  },
  openGraph: {
    title: "Elite Arabuluculuk - Profesyonel Arabuluculuk Hizmetleri",
    description: "Türkiye'nin en deneyimli arabuluculuk firması. Ticari ve hukuki uyuşmazlıklar için profesyonel arabuluculuk hizmetleri.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <ToastProvider />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp phoneNumber="905551234567" />
      </body>
    </html>
  );
}
