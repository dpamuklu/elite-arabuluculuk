import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  TypographyH3,
  TypographyP,
  TypographySmall,
} from "@/components/ui/Typography";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Ticari Arabuluculuk", href: "/hizmetler/ticari" },
    { name: "Kira Arabuluculuğu", href: "/hizmetler/kira" },
    { name: "İş Hukuku", href: "/hizmetler/is-hukuku" },
    { name: "Tüketici Hakları", href: "/hizmetler/tuketici" },
  ];

  const legalLinks = [
    { name: "Gizlilik Politikası", href: "/gizlilik" },
    { name: "Kullanım Koşulları", href: "/kullanim-kosullari" },
    { name: "Çerez Politikası", href: "/cerez-politikasi" },
    { name: "KVKK", href: "/kvkk" },
  ];

  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      value: "2k+",
      label: "Başarılı Vaka",
    },
    { icon: <Award className="w-5 h-5" />, value: "10+", label: "Yıl Deneyim" },
    { icon: <Shield className="w-5 h-5" />, value: "100%", label: "Gizlilik" },
  ];

  return (
    <footer className="bg-navy-900 text-white no-print">
      {/* Main Footer */}
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-14 h-14 flex-shrink-0 bg-white rounded-xl p-1">
                <Image
                  src="/images/darklogo.png"
                  alt="Elite Arabuluculuk Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white turkish-text">
                  Elite Arabuluculuk
                </span>
                <span className="text-sm text-navy-300 turkish-text">
                  Profesyonel Arabuluculuk
                </span>
              </div>
            </div>

            <TypographyP className="text-navy-300 mb-6 max-w-sm">
              Türkiye&apos;nin önde gelen arabuluculuk firması olarak,
              uyuşmazlıklarınızı adil, hızlı ve güvenilir bir şekilde çözmek
              için buradayız.
            </TypographyP>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-gold-400">
                    {stat.icon}
                  </div>
                  <div className="text-lg font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-navy-300 turkish-text">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button variant="gold" size="sm" className="w-full" asChild>
              <Link href="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link>
            </Button>
          </div>

          {/* Services */}
          <div>
            <TypographyH3 className="text-white mb-6">
              Hizmetlerimiz
            </TypographyH3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-navy-300 hover:text-gold-400 transition-colors turkish-text"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <TypographyH3 className="text-white mb-6">Kurumsal</TypographyH3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-navy-300 hover:text-gold-400 transition-colors turkish-text"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/referanslar"
                  className="text-navy-300 hover:text-gold-400 transition-colors turkish-text"
                >
                  Referanslar
                </Link>
              </li>
              <li>
                <Link
                  href="/sikca-sorulan-sorular"
                  className="text-navy-300 hover:text-gold-400 transition-colors turkish-text"
                >
                  Sık Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <TypographyH3 className="text-white mb-6">İletişim</TypographyH3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold-400 mt-0.5" />
                <div>
                  <a
                    href="tel:+905411569376"
                    className="text-navy-300 hover:text-gold-400 transition-colors block"
                  >
                    +90 541 156 93 76
                  </a>
                  <TypographySmall className="text-navy-400">
                    Acil Hat: 7/24 Erişilebilir
                  </TypographySmall>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold-400 mt-0.5" />
                <div>
                  <a
                    href="mailto:info@elitearabuluculuk.com"
                    className="text-navy-300 hover:text-gold-400 transition-colors block"
                  >
                    info@elitearabuluculuk.com
                  </a>
                  <TypographySmall className="text-navy-400">
                    24 saat içinde yanıt
                  </TypographySmall>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5" />
                <div>
                  <span className="text-navy-300 block">
                    Piri Mehmet Paşa Mah.
                  </span>
                  <span className="text-navy-300 block">
                    Recep Silahtaroğlu Sok. No:18/A
                  </span>
                  <span className="text-navy-300 block">
                    34570 Silivri/İstanbul
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold-400 mt-0.5" />
                <div>
                  <span className="text-navy-300 block">
                    Pazartesi - Cuma: 09:00 - 18:00
                  </span>
                  <span className="text-navy-300 block">
                    Cumartesi: 10:00 - 14:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <TypographySmall className="text-navy-400">
                © {currentYear} Elite Arabuluculuk. Tüm hakları saklıdır.
              </TypographySmall>
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-navy-400 hover:text-gold-400 transition-colors text-sm turkish-text"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <TypographySmall className="text-navy-400">
                Adalet Bk. siciline kayıtlı ruhsatlı arabulucu
              </TypographySmall>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
