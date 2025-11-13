"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  // Close services submenu on outside click (desktop)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <header className="bg-white shadow-legal border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-navy-900 text-white no-print">
        <div className="container">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <a
                href="tel:+905411569376"
                className="flex items-center space-x-2 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+90 541 156 93 76</span>
              </a>
              <span className="text-navy-300">
                Pazartesi - Cuma: 09:00 - 18:00
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <Button variant="gold" size="sm" asChild>
                <Link href="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/images/darklogo.png"
                  alt="Elite Arabuluculuk Logo"
                  width={56}
                  height={56}
                  className="object-contain group-hover:scale-105 transition-transform"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-navy-900 turkish-text">
                  Elite Arabuluculuk
                </span>
                <span className="text-sm text-navy-600 turkish-text">
                  Profesyonel Arabuluculuk
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasSubmenu ? (
                  <div
                    className="group"
                    ref={servicesMenuRef}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className="flex items-center space-x-1 text-navy-700 hover:text-primary-700 transition-colors duration-200 font-medium turkish-text"
                      onClick={() => setIsServicesOpen((v) => !v)}
                      aria-haspopup="menu"
                      aria-expanded={isServicesOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Submenu */}
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-legal-lg border border-border",
                        "transform transition-all duration-200 origin-top-left",
                        isServicesOpen
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="py-2">
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-navy-700 hover:text-primary-700 hover:bg-primary-50 transition-colors turkish-text"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-navy-700 hover:text-primary-700 transition-colors duration-200 font-medium turkish-text"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/iletisim">İletişim</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="/iletisim">Randevu Al</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy-700 hover:text-primary-700 p-2"
              aria-label="Menüyü aç/kapat"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-navy-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors turkish-text font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-navy-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors turkish-text text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="px-4 pt-4 space-y-3 border-t border-border">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/iletisim">İletişim</Link>
                </Button>
                <Button variant="default" size="sm" className="w-full" asChild>
                  <Link href="/iletisim">Randevu Al</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
