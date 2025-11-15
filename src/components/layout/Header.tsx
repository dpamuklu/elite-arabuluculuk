"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Ana Sayfa", href: "/" },
    {
      name: "Hizmetlerimiz",
      href: "/hizmetler",
      hasSubmenu: true,
      submenu: [
        { name: "Ticari Arabuluculuk", href: "/hizmetler/ticari" },
        { name: "Kira Arabuluculuğu", href: "/hizmetler/kira" },
        { name: "İş Hukuku Arabuluculuğu", href: "/hizmetler/is-hukuku" },
        { name: "Tüketici Arabuluculuğu", href: "/hizmetler/tuketici" },
      ],
    },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Referanslar", href: "/referanslar" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="sticky top-0 z-50 font-[var(--font-sans)]">
      {/* Top Contact Bar */}
      <div className="bg-[#050B17] text-white/80 text-xs md:text-sm py-2 px-4 md:px-8 flex items-center justify-between gap-4">
        <a
          href="tel:+905411569376"
          className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>+90 541 156 93 76</span>
        </a>
        <span className="text-white/70 tracking-tight">
          Pazartesi – Cuma: 09:00 – 18:00
        </span>
      </div>

      {/* Main Navbar */}
      <div className="bg-gradient-to-r from-[#0A1528] via-[#0A1C33] to-[#0F2040] px-4 md:px-8 py-4 border-b border-white/10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="shrink-0 rounded-md border border-white/20 bg-white/10 p-1">
            <Image
              src="/images/darklogo.png"
              alt="Elite Arabuluculuk Logo"
              width={56}
              height={56}
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
              priority
            />
          </Link>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-base md:text-lg">
              Elite Arabuluculuk
            </span>
            <span className="text-gray-300 text-xs md:text-sm tracking-wide">
              Profesyonel Arabuluculuk
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-white/80">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="p-2 -mr-1 text-white/80 hover:text-white transition md:hidden"
          aria-label="Menüyü aç/kapat"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Drawer */}
      {isMenuOpen && (
        <div className="bg-[#050B17]/95 text-white/90 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 md:px-8 py-6 space-y-3">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-1">
                <Link
                  href={item.href}
                  className="block px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-6 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
