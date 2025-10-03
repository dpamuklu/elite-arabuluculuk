import { Metadata } from "next";
import Link from "next/link";
import { Users, FileText, MessageSquare, CheckCircle, Clock, ArrowRight, Phone } from "lucide-react";
import { TypographyH1, TypographyH2, TypographyH3, TypographyP, TypographyLead } from "@/components/ui/Typography";
import { Button, GoldButton } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Arabuluculuk Sürecimiz - Elite Arabuluculuk",
  description: "Arabuluculuk sürecimiz nasıl işler? Adım adım açıklanan sürecimizle uyuşmazlığınızı hızla çözün.",
  keywords: ["arabuluculuk süreci", "mediation process", "uyuşmazlık çözümü", "arabuluculuk nasıl işler"],
  openGraph: {
    title: "Arabuluculuk Sürecimiz | Elite Arabuluculuk",
    description: "Profesyonel arabuluculuk sürecimizi öğrenin ve uyuşmazlığınızı hızla çözün.",
  },
};

export default function SurecimizPage() {
  const breadcrumbs = generateBreadcrumbs("/surecimiz");

  const processSteps = [
    {
      step: 1,
      title: "İlk İletişim ve Değerlendirme",
      description: "Uyuşmazlığınızın detaylarını dinliyoruz ve arabuluculuk için uygunluğunu değerlendiriyoruz.",
      icon: <Phone className="w-8 h-8" />,
      duration: "1 gün",
      details: [
        "Ücretsiz telefon görüşmesi",
        "Uyuşmazlığın temel özelliklerinin tespiti",
        "Arabuluculuk uygunluğunun değerlendirilmesi",
        "Tarafların gönüllü katılım iradesinin teyidi",
        "Süreç ve maliyetler hakkında bilgilendirme"
      ]
    },
    {
      step: 2,
      title: "Başvuru ve Dokümantasyon",
      description: "Formal başvuru sürecini başlatıyor ve gerekli belgeler hazırlanıyor.",
      icon: <FileText className="w-8 h-8" />,
      duration: "2-3 gün",
      details: [
        "Arabuluculuk başvuru formunun doldurulması",
        "Tarafların kimlik tespiti",
        "İlgili belge ve sözleşmelerin incelenmesi",
        "Arabuluculuk anlaşmasının imzalanması",
        "İlk oturum tarihinin belirlenmesi"
      ]
    },
    {
      step: 3,
      title: "Ön Görüşmeler",
      description: "Her tarafla ayrı ayrı görüşerek pozisyonları ve çıkarları belirliyoruz.",
      icon: <Users className="w-8 h-8" />,
      duration: "1 hafta",
      details: [
        "Taraflarla bireysel ön görüşmeler",
        "Pozisyonların ve çıkarların tespiti",
        "Müzakere stratejisinin belirlenmesi",
        "Gizli bilgilerin korunması",
        "Beklenti yönetimi"
      ]
    },
    {
      step: 4,
      title: "Müzakere Oturumları",
      description: "Tarafları bir araya getirerek yapıcı müzakereleri yönlendiriyoruz.",
      icon: <MessageSquare className="w-8 h-8" />,
      duration: "2-4 hafta",
      details: [
        "Ortak oturumlarda müzakere yönetimi",
        "Yaratıcı çözüm önerilerinin geliştirilmesi",
        "Kısmi anlaşmaların tespit edilmesi",
        "İletişim engellerinin aşılması",
        "Win-win çözümlerin aranması"
      ]
    },
    {
      step: 5,
      title: "Anlaşma ve Sonuçlandırma",
      description: "Anlaşmaya varılan konuları yazılı hale getiriyoruz ve süreç tamamlanıyor.",
      icon: <CheckCircle className="w-8 h-8" />,
      duration: "1 hafta",
      details: [
        "Anlaşma metninin kaleme alınması",
        "Hukuki kontrolün yapılması",
        "Tarafların onayının alınması",
        "İcra edilebilir belge haline getirilmesi",
        "Takip ve destek sürecinin başlatılması"
      ]
    }
  ];

  const advantages = [
    {
      title: "Hız",
      description: "Ortalama 4-6 hafta içinde çözüm",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Ekonomik",
      description: "Mahkeme masraflarının %70'i tasarruf",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Gizlilik",
      description: "Süreç tamamen gizli ve taraflara özeldir",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Kontrol",
      description: "Taraflar çözüm üzerinde tam kontrole sahip",
      icon: <MessageSquare className="w-6 h-6" />
    }
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
              Arabuluculuk Sürecimiz
            </TypographyH1>
            <TypographyLead className="mb-8">
              Şeffaf, sistematik ve etkili sürecimizle uyuşmazlığınızı 
              adım adım çözüme ulaştırıyoruz.
            </TypographyLead>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-primary-700 mb-3 flex justify-center">
                    {advantage.icon}
                  </div>
                  <div className="font-semibold text-navy-900 mb-1">
                    {advantage.title}
                  </div>
                  <div className="text-sm text-navy-600 turkish-text">
                    {advantage.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-4">
              5 Adımda Arabuluculuk Süreci
            </TypographyH2>
            <TypographyP className="text-lg max-w-2xl mx-auto">
              Her adımda size rehberlik ediyor, sürecin şeffaflığını sağlıyoruz.
            </TypographyP>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <span className="text-sm bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <TypographyP className="text-navy-600">
                        {step.description}
                      </TypographyP>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-navy-700 turkish-text">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container text-center">
          <TypographyH2 className="text-white mb-4">
            Süreçimizi Yakından Tanımak İster Misiniz?
          </TypographyH2>
          <TypographyP className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Ücretsiz danışmanlık görüşmesinde sürecimizi detaylarıyla anlatıyor, 
            sorularınızı yanıtlıyoruz.
          </TypographyP>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton size="lg" asChild>
              <Link href="/iletisim">
                Ücretsiz Danışmanlık Al
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </GoldButton>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-800" asChild>
              <Link href="/hizmetler">Hizmetlerimizi İnceleyin</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
