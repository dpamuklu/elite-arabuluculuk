import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Users,
  Scale,
  CheckCircle,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyLead,
} from "@/components/ui/Typography";
import { Button, GoldButton } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Hakkımızda - Elite Arabuluculuk | Deneyimli Arabuluculuk Ekibi",
  description:
    "10+ yıl deneyime sahip uzman arabulucu ekibimiz, binlerce başarılı vaka ile size güvenilir arabuluculuk hizmeti sunuyor.",
  keywords: [
    "arabulucu",
    "mediation",
    "uzman arabulucu",
    "deneyimli arabulucu",
    "sertifikalı arabulucu",
  ],
  openGraph: {
    title: "Hakkımızda | Elite Arabuluculuk",
    description: "Uzman arabulucu ekibimiz ve deneyimimiz hakkında bilgi alın.",
  },
};

export default function HakkimizdaPage() {
  const breadcrumbs = generateBreadcrumbs("/hakkimizda");

  const stats = [
    { value: "10+", label: "Yıl Deneyim", icon: <Award className="w-6 h-6" /> },
    {
      value: "2k+",
      label: "Başarılı Vaka",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    { value: "7/24", label: "Destek", icon: <Users className="w-6 h-6" /> },
  ];

  const credentials = [
    "Adalet Bakanlığı resmî siciline kayıtlı ruhsatlı arabulucu",
    "Ticari Arabuluculuk Uzmanlık Sertifikası",
    "İş Hukuku Arabulucuğu Uzmanlık Sertifikası",
    "Kira Hukuku Arabuluculuğu Uzmanlık Sertifikası",
  ];

  const expertise = [
    {
      title: "Ticari Arabuluculuk",
      description: "Şirketler arası uyuşmazlıkların çözümünde uzmanlaşma",
    },
    {
      title: "Kira Arabuluculuğu",
      description:
        "Kiracı–ev sahibi uyuşmazlıklarında (kira tespiti, uyarlama, tahliye, alacak) deneyim",
    },
    {
      title: "İş Hukuku",
      description: "İşçi-işveren uyuşmazlıklarında deneyim",
    },
    {
      title: "Tüketici Hakları",
      description: "Tüketici-satıcı anlaşmazlıklarında uzmanlık",
    },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy-50 to-primary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <TypographyH1 className="mb-6">
              Elite Arabuluculuk Hakkında
            </TypographyH1>
            <TypographyLead className="mb-8">
              10 yılı aşkın deneyimimiz ve 2k+ başarılı vakamızla
              Türkiye&apos;nin önde gelen arabuluculuk firmasıyız.
            </TypographyLead>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center"
                >
                  <div className="text-primary-700 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-navy-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-navy-600 turkish-text">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <TypographyH2 className="mb-6">Misyonumuz</TypographyH2>
              <TypographyP className="mb-6">
                Elite Arabuluculuk olarak, uyuşmazlıkların mahkeme süreçlerine
                gerek kalmadan, adil, hızlı ve ekonomik şekilde çözülmesini
                sağlamak için çalışıyoruz. Taraflar arasında köprü kurarak,
                karşılıklı anlaşma temelli çözümler üretiyoruz.
              </TypographyP>
              <TypographyP className="mb-8">
                Deneyimli ve sicile kayıtlı arabulucu kadromuzla, her türlü
                uyuşmazlığa özel çözümler geliştiriyor, tarafların menfaatlerini
                koruyarak sürdürülebilir anlaşmalar sağlıyoruz.
              </TypographyP>

              <div className="flex flex-col sm:flex-row gap-4">
                <GoldButton size="lg" asChild>
                  <Link href="/iletisim">
                    İletişime Geçin
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </GoldButton>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/hizmetler">Hizmetlerimizi İnceleyin</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-legal-lg">
                <Image
                  src="/images/hakkimizda-01.jpg"
                  alt="Elite Arabuluculuk – Ofisimizde arabuluculuk görüşmesinden bir kare"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <GraduationCap className="w-6 h-6 text-primary-700" />
                    <span>Eğitim ve Sertifikalar</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {credentials.map((credential, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                        <span className="text-navy-700 turkish-text">
                          {credential}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="section-padding bg-accent">
        <div className="container">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-4">Uzmanlık Alanlarımız</TypographyH2>
            <TypographyP className="text-lg max-w-2xl mx-auto">
              Her alanda derinlemesine bilgi ve deneyim sahibi olmak, size en
              kaliteli hizmeti sunmamızı sağlıyor.
            </TypographyP>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <TypographyP className="text-navy-600">
                    {area.description}
                  </TypographyP>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-4">
              Neden Elite Arabuluculuk?
            </TypographyH2>
            <TypographyP className="text-lg max-w-3xl mx-auto">
              Sektördeki deneyimimiz ve başarı hikayelerimiz, size güvenilir bir
              arabuluculuk hizmeti sunacağımızın en önemli göstergeleridir.
            </TypographyP>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Scale className="w-8 h-8" />
              </div>
              <TypographyH3 className="mb-4">Tarafsızlık</TypographyH3>
              <TypographyP>
                Her durumda tam tarafsızlık ilkesini benimser, adil çözümler
                üretiriz.
              </TypographyP>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <TypographyH3 className="mb-4">Deneyim</TypographyH3>
              <TypographyP>
                10 yılı aşkın deneyimimizle en karmaşık uyuşmazlıkları bile
                çözüyoruz.
              </TypographyP>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <TypographyH3 className="mb-4">Güven</TypographyH3>
              <TypographyP>
                Binlerce müşterimizin güvenini kazanmış, sektörde öncü
                konumdayız.
              </TypographyP>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container text-center">
          <TypographyH2 className="text-white mb-4">
            Uzman Arabulucumuzla Tanışın
          </TypographyH2>
          <TypographyP className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Uyuşmazlığınızın çözümü için ilk adımı atın. Ücretsiz ön görüşme ile
            sürecimizi yakından tanıyın.
          </TypographyP>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton size="lg" asChild>
              <Link href="/iletisim">
                Ücretsiz Görüşme Ayarlayın
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </GoldButton>
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary-800"
              asChild
            >
              <Link href="/surecimiz">Sürecimizi Öğrenin</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
