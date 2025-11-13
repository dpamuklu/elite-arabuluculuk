import { Metadata } from "next";
import Link from "next/link";
import { Scale, Users, Briefcase, ShoppingCart, Clock, CheckCircle, ArrowRight, Star, Award } from "lucide-react";
import { TypographyH1, TypographyH2, TypographyH3, TypographyP, TypographyLead } from "@/components/ui/Typography";
import { FeatureCard } from "@/components/ui/Card";
import { Button, GoldButton } from "@/components/ui/Button";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import type { ServiceCategory } from "@/types/content";

export const metadata: Metadata = {
  title: "Hizmetlerimiz - Profesyonel Arabuluculuk | Elite Arabuluculuk",
  description: "Ticari, kira, iş hukuku ve tüketici arabuluculuğu hizmetlerimiz. Uzman arabulucularımızla uyuşmazlıklarınızı hızla çözün.",
  keywords: ["arabuluculuk hizmetleri", "ticari arabuluculuk", "kira arabuluculuğu", "iş hukuku arabuluculuğu", "tüketici arabuluculuğu"],
  openGraph: {
    title: "Arabuluculuk Hizmetlerimiz | Elite Arabuluculuk",
    description: "Profesyonel arabuluculuk hizmetlerimiz ile uyuşmazlıklarınızı adil ve hızlı şekilde çözün.",
  },
};

export default function HizmetlerPage() {
  const breadcrumbs = generateBreadcrumbs("/hizmetler");

  const serviceCategories: ServiceCategory[] = [
    {
      id: "ticari",
      title: "Ticari Arabuluculuk",
      description: "Şirketler arası ticari uyuşmazlıkların profesyonel çözümü",
      icon: "briefcase",
      features: [
        "Sözleşme uyuşmazlıkları",
        "Ortaklık anlaşmazlıkları",
        "Ödeme gecikmeleri",
        "Tedarik zinciri sorunları",
        "Fikri mülkiyet uyuşmazlıkları"
      ],
      benefits: [
        "Mahkeme masraflarından %70 tasarruf",
        "2-4 hafta içinde çözüm",
        "İş ilişkilerinin korunması",
        "Gizlilik garantisi"
      ],
      process: [
        "Başvuru ve ön değerlendirme",
        "Taraflarla ayrı görüşmeler",
        "Ortak müzakere oturumları",
        "Anlaşma metninin hazırlanması"
      ],
      duration: "2-6 hafta",
      cost: "Mahkeme masraflarının %30'u",
      href: "/hizmetler/ticari"
    },
    {
      id: "kira",
      title: "Kira Arabuluculuğu",
      description: "Kiracı–ev sahibi arasında kira tespiti, tahliye ve alacak uyuşmazlıklarının çözümlenmesi",
      icon: "users",
      features: [
        "Kira tespiti ve uyarlama",
        "Tahliye protokolü ve süre yönetimi",
        "Birikmiş kira/alacak uzlaşısı",
        "Sözleşme ihlalleri ve tadilat uyuşmazlıkları",
        "Aidat ve yan gider anlaşmazlıkları"
      ],
      benefits: [
        "Hızlı ve maliyet etkin çözüm",
        "Taraf ilişkilerinin korunması",
        "Gizlilik ve esneklik",
        "Uygulanabilir protokoller"
      ],
      process: [
        "Taraf ön görüşmeleri",
        "Sözleşme ve delil incelemesi",
        "Ortak müzakere oturumları",
        "Anlaşma metni ve protokol"
      ],
      duration: "2-4 hafta",
      cost: "Mahkeme sürecinin %40'ı",
      href: "/hizmetler/kira"
    },
    {
      id: "is-hukuku",
      title: "İş Hukuku Arabuluculuğu",
      description: "İşçi-işveren uyuşmazlıklarının yapıcı çözümü",
      icon: "scale",
      features: [
        "İş sözleşmesi uyuşmazlıkları",
        "Mobbing vakaları",
        "Ücret anlaşmazlıkları",
        "İşten çıkarma süreçleri",
        "Çalışma koşulları uyuşmazlıkları"
      ],
      benefits: [
        "İş barışının korunması",
        "Hızlı çözüm süreci",
        "Yasal uyumluluk",
        "İtibar korunması"
      ],
      process: [
        "Durum tespiti",
        "Yasal çerçeve belirleme",
        "Müzakere oturumları",
        "Çözüm anlaşması"
      ],
      duration: "2-4 hafta",
      cost: "Dava masraflarının %25'i",
      href: "/hizmetler/is-hukuku"
    },
    {
      id: "tuketici",
      title: "Tüketici Arabuluculuğu",
      description: "Tüketici-satıcı arasındaki uyuşmazlıkların çözümü",
      icon: "shopping-cart",
      features: [
        "Ürün garantisi sorunları",
        "Hizmet kalitesi şikayetleri",
        "Ayıplı mal iadesi",
        "Kampanya ve promosyon uyuşmazlıkları",
        "Online alışveriş sorunları"
      ],
      benefits: [
        "Hızlı ve pratik çözüm",
        "Masrafsız süreç",
        "Uzman değerlendirme",
        "Adil çözümler"
      ],
      process: [
        "Online başvuru",
        "Belge inceleme",
        "Taraf görüşmeleri",
        "Anlaşma veya karar"
      ],
      duration: "1-3 hafta",
      cost: "Ücretsiz",
      href: "/hizmetler/tuketici"
    }
  ];

  const processFeatures = [
    {
      title: "Hızlı Çözüm",
      description: "Ortalama 2-6 hafta içinde sonuca ulaşım",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Ekonomik",
      description: "Mahkeme masraflarının %70'e varan tasarrufu",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Gizlilik",
      description: "Süreçteki tüm bilgilerin gizliliği garantisi",
      icon: <Scale className="w-8 h-8" />
    },
    {
      title: "Uzmanlaşma",
      description: "Her alanda uzman arabulucular",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "briefcase": return <Briefcase className="w-6 h-6" />;
      case "users": return <Users className="w-6 h-6" />;
      case "scale": return <Scale className="w-6 h-6" />;
      case "shopping-cart": return <ShoppingCart className="w-6 h-6" />;
      default: return <Scale className="w-6 h-6" />;
    }
  };

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
              Profesyonel Arabuluculuk Hizmetlerimiz
            </TypographyH1>
            <TypographyLead className="mb-8">
              Geniş yelpazede uzmanlaşmış arabuluculuk hizmetleri ile 
              uyuşmazlıklarınızı adil, hızlı ve ekonomik şekilde çözüyoruz.
            </TypographyLead>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {processFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  className="border-0 bg-white/80 backdrop-blur-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-4">
              Hizmet Alanlarımız
            </TypographyH2>
            <TypographyP className="text-lg max-w-2xl mx-auto">
              Her alanda uzmanlaşmış arabulucularımızla size en uygun çözümü sunuyoruz.
            </TypographyP>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {serviceCategories.map((service) => (
              <div key={service.id} className="bg-white rounded-xl border border-border p-8 card-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div className="flex-1">
                    <TypographyH3 className="mb-2">{service.title}</TypographyH3>
                    <TypographyP className="text-navy-600">{service.description}</TypographyP>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-3 turkish-text">Çözüm Alanları:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-navy-700 turkish-text">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-navy-500 turkish-text">
                          +{service.features.length - 3} diğer alan
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-navy-900">Süre:</span>
                      <div className="text-navy-700">{service.duration}</div>
                    </div>
                    <div>
                      <span className="font-medium text-navy-900">Maliyet:</span>
                      <div className="text-navy-700">{service.cost}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={service.href}>
                        Detaylı Bilgi Al
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-white text-center">
            <TypographyH2 className="text-white mb-4">
              Hangi Hizmete İhtiyacınız Olduğundan Emin Değil Misiniz?
            </TypographyH2>
            <TypographyP className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Uzman arabulucularımız size en uygun çözümü bulmak için ücretsiz ön değerlendirme yapıyor.
            </TypographyP>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldButton size="lg" asChild>
                <Link href="/iletisim">
                  Ücretsiz Danışmanlık Al
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </GoldButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary-800"
                asChild
              >
                <Link href="/surecimiz">Sürecimizi İnceleyin</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-accent">
        <div className="container">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-4">
              Neden Bizim Hizmetlerimizi Tercih Etmelisiniz?
            </TypographyH2>
            <TypographyP className="text-lg max-w-3xl mx-auto">
              10 yılı aşkın deneyimimiz ve 2k+ başarılı vakamızla 
              size en kaliteli arabuluculuk hizmetini sunuyoruz.
            </TypographyP>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <TypographyH3 className="mb-4">Uzman Kadro</TypographyH3>
              <TypographyP>
                Her alanda uzmanlaşmış, sertifikalı ve deneyimli arabulucularımız ile çalışıyoruz.
              </TypographyP>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <TypographyH3 className="mb-4">Kanıtlanmış Başarı</TypographyH3>
              <TypographyP>
                Yüksek müşteri memnuniyetiyle sektörde öncü konumdayız.
              </TypographyP>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Scale className="w-8 h-8" />
              </div>
              <TypographyH3 className="mb-4">Güven ve Gizlilik</TypographyH3>
              <TypographyP>
                Tüm süreçlerimizde tam gizlilik ve tarafsızlık ilkelerine bağlı kalıyoruz.
              </TypographyP>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
