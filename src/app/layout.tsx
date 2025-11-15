import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { FloatingWhatsApp } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
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
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}>
        <ToastProvider />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp phoneNumber="905411569376" />
      </body>
    </html>
  );
}
