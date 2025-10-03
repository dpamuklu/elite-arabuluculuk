import { Metadata } from "next";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  HelpCircle,
  Scale,
  Clock,
  FileText,
  Shield,
  Users,
  ChevronDown,
  MessageSquare,
} from "lucide-react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyLead,
  TypographyP,
} from "@/components/ui/Typography";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface FAQItem {
  question: string;
  answer: string;
  bullets?: string[];
}

interface FAQSection {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  items: FAQItem[];
}

interface QuickFact {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const faqSections: FAQSection[] = [
  {
    title: "Genel Bilgiler",
    description:
      "Arabuluculuk sürecinin kapsamı, zorunlu olduğu alanlar ve kimlerin başvuru yapabileceği hakkında temel bilgiler.",
    icon: HelpCircle,
    items: [
      {
        question: "Arabuluculuk nedir ve hangi uyuşmazlıklarda uygulanır?",
        answer:
          "Arabuluculuk, tarafların tarafsız bir üçüncü kişi eşliğinde uzlaşı aradığı alternatif bir uyuşmazlık çözüm yoludur. İş hukuku, ticari, tüketici, kira ve ortaklık uyuşmazlıkları gibi pek çok alanda uygulanabilir. Taraflar kendi çözümlerini kendileri bulur ve süreç tamamen gönüllülük ilkesine dayanır.",
      },
      {
        question: "Dava açmadan önce arabuluculuk zorunlu mudur?",
        answer:
          "İşçi alacakları, ticari alacak ve tazminatlar ile tüketici ve kira uyuşmazlıklarında dava açmadan önce arabuluculuğa başvurmak kanunen zorunludur. Zorunlu olmayan alanlarda ise taraflar diledikleri zaman arabuluculuk yolunu seçebilir.",
      },
      {
        question: "Arabuluculuk başvurusunu kimler yapabilir?",
        answer:
          "Uyuşmazlık taraflarından biri, vekili veya yasal temsilcisi arabuluculuk bürosuna başvurarak süreci başlatabilir. Taraflar aynı anda da başvurabilir ve süreç boyunca isterlerse avukatlarıyla destek alabilirler.",
      },
      {
        question: "Taraflardan biri arabuluculuğa katılmazsa ne olur?",
        answer:
          "Zorunlu arabuluculuk kapsamındaki uyuşmazlıklarda davayı açacak taraf, ilk toplantıya katılım sağlamayan karşı taraf aleyhine yargılama giderleri açısından avantaj elde edebilir. Gönüllü süreçlerde ise toplantılara katılım sağlanmadığında arabulucu dosyayı sona erdirir ve taraflar mahkeme yoluna başvurabilir.",
      },
    ],
  },
  {
    title: "Süreç ve İşleyiş",
    description:
      "Arabuluculuk toplantılarının nasıl ilerlediğini, ne kadar sürdüğünü ve süreç sonunda neler olabileceğini öğrenin.",
    icon: Clock,
    items: [
      {
        question: "Arabuluculuk süreci ne kadar sürer?",
        answer:
          "Başvuru yapıldıktan sonra arabulucu genellikle birkaç gün içinde ilk toplantıyı planlar. Çoğu dosya bir veya iki oturumda sonuçlanır; karmaşık ticari dosyalarda ise ek oturumlara ihtiyaç duyulabilir.",
      },
      {
        question: "Toplantılar nasıl ilerler?",
        answer:
          "Arabulucu önce tarafları aynı masada veya ayrı ayrı dinler, uyuşmazlığın temel noktalarını belirler. Sonrasında çözüm seçenekleri değerlendirilir ve tarafların üzerinde mutabık kaldığı maddeler tutanağa aktarılır. Arabulucu karar vermez; tarafların ortak zemin bulmasına yardımcı olur.",
      },
      {
        question: "Arabuluculukta avukat bulundurmak zorunlu mudur?",
        answer:
          "Avukatla sürece katılmak zorunlu değildir ancak özellikle ticari ve yüksek tutarlı uyuşmazlıklarda hukuki danışmanlık almak hak kaybı yaşanmaması için önerilir. Taraflar süreç boyunca avukatlarından destek alabilir veya toplantılara birlikte katılabilir.",
      },
      {
        question: "Anlaşma sağlanamazsa ne olur?",
        answer:
          "Taraflar uzlaşamazsa arabulucu sona erdirme tutanağı düzenler. Zorunlu arabuluculuk hallerinde bu tutanak, dava açarken mahkemeye sunulması gereken zorunlu belgedir. Sonrasında taraflar dilerse yargı yoluna devam edebilirler.",
      },
    ],
  },
  {
    title: "Ücret ve Sonuçlar",
    description:
      "Maliyet paylaşımı, anlaşma tutanaklarının hukuki sonuçları ve ödemelere ilişkin merak edilenler.",
    icon: Scale,
    items: [
      {
        question: "Arabuluculuk ücretini kim öder?",
        answer:
          "Zorunlu arabuluculukta anlaşma sağlanmazsa ilk iki saatin ücreti Adalet Bakanlığı bütçesinden ödenir. Süre uzar veya anlaşma sağlanırsa ücret taraflarca eşit şekilde paylaşılır; istedikleri takdirde farklı bir paylaşım oranı üzerinde de anlaşabilirler.",
      },
      {
        question: "Arabuluculukta varılan anlaşma bağlayıcı mıdır?",
        answer:
          "Evet. Tarafların imzaladığı anlaşma tutanağı mahkeme kararı hükmündedir. Gerekmesi halinde sulh hukuk mahkemesinden icra edilebilirlik şerhi alınarak doğrudan icraya konu edilebilir.",
      },
      {
        question: "Anlaşma tutanağı hangi unsurları içermelidir?",
        answer:
          "Taraf bilgileri, uyuşmazlığın konusu, üzerinde uzlaşılan maddeler, ödeme planı ve tarafların imzaları mutlaka yer almalıdır. Arabulucu, tutanağın hukuken geçerli olacak şekilde düzenlenmesini sağlar.",
      },
    ],
  },
  {
    title: "Hazırlık ve Pratik Bilgiler",
    description:
      "Toplantıya hazırlık sürecinde akla gelen sorular, gizlilik ve uzaktan katılım imkânları.",
    icon: FileText,
    items: [
      {
        question: "Toplantıya gelmeden önce hangi belgeleri hazırlamalıyım?",
        answer:
          "Uyuşmazlığa konu sözleşmeler, ücret bordroları, fatura ve dekontlar, yazışmalar gibi delil niteliğindeki evrakları yanınızda bulundurmanız görüşmelerin hızlı ilerlemesini sağlar. Belgeleri dijital olarak paylaşmak da mümkündür.",
      },
      {
        question: "Arabuluculuk sürecinde gizlilik nasıl korunur?",
        answer:
          "Arabuluculuk Kanunu gereği süreçte paylaşılan tüm bilgi ve belgeler gizlidir. Arabulucu, taraflar ve varsa avukatları bu gizlilik yükümlülüğüne tabidir; toplantıda söylenenler mahkemede delil olarak kullanılamaz.",
      },
      {
        question: "Online veya hibrit arabuluculuk yapılabilir mi?",
        answer:
          "Evet. Tarafların onayı ile görüntülü toplantılar yapılabilir veya taraflardan biri çevrim içi diğeri fiziksel ortamdan katılabilir. Özellikle farklı şehirlerde bulunan taraflar için pratik bir çözümdür.",
      },
      {
        question: "Taraflar aynı anda bulunmak zorunda mı?",
        answer:
          "Gerektiğinde arabulucu ayrı oturumlar düzenleyebilir ve taraflarla birebir görüşebilir. Bu yöntem özellikle duygusal açıdan hassas uyuşmazlıklarda daha sağlıklı ilerleme sağlar.",
      },
    ],
  },
];

const quickFacts: QuickFact[] = [
  {
    title: "Gizlilik İlkesi",
    description: "Süreç boyunca paylaşılan bilgiler yalnızca tarafların onayıyla kullanılabilir.",
    icon: Shield,
  },
  {
    title: "Tarafsız Arabulucu",
    description: "Arabulucu hiçbir taraftan yana olmaz; çözüm alternatiflerini tarafların geliştirmesini sağlar.",
    icon: Users,
  },
  {
    title: "Esnek Toplantılar",
    description: "Zaman ve mekân taraflara göre uyarlanır; gerekirse akşam veya hafta sonu oturumları yapılabilir.",
    icon: MessageSquare,
  },
];

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular - Arabuluculuk | Elite Arabuluculuk",
  description:
    "Arabuluculuk süreci, zorunluluklar, ücretlendirme ve hazırlıkla ilgili en sık sorulan soruların yanıtları.",
  keywords: [
    "arabuluculuk",
    "sıkça sorulan sorular",
    "arabulucu ücretleri",
    "arabuluculuk süreci",
    "zorunlu arabuluculuk",
  ],
  openGraph: {
    title: "Arabuluculuk Hakkında Sıkça Sorulan Sorular",
    description:
      "Arabuluculuk süreci, toplantıların işleyişi ve anlaşmaların hukuki sonuçları hakkında merak ettiklerinizi yanıtladık.",
  },
};

export default function SikcaSorulanSorularPage() {
  const breadcrumbs = generateBreadcrumbs("/sikca-sorulan-sorular");

  return (
    <div>
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="section-padding bg-gradient-to-br from-navy-50 to-primary-50">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <TypographyH1 className="mb-6">
              Arabuluculuk Hakkında Sıkça Sorulan Sorular
            </TypographyH1>
            <TypographyLead className="mb-8">
              Arabuluculuk sürecinin her adımı hakkında merak ettiğiniz konuları
              açıklığa kavuşturduk. Sorunuzun yanıtını aşağıda bulamazsanız
              ekibimizle iletişime geçebilirsiniz.
            </TypographyLead>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Shield className="w-4 h-4 text-primary-700" />
                <span className="text-sm font-medium text-navy-800 turkish-text">
                  Gizlilik güvenceli süreç
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-4 h-4 text-primary-700" />
                <span className="text-sm font-medium text-navy-800 turkish-text">
                  Hızlı ve esnek planlama
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-legal-lg p-8 border border-border">
            <TypographyH3 className="mb-4">Aradığınız başlığı seçin</TypographyH3>
            <TypographyP className="mb-6">
              Soruları dört ana başlık altında topladık. Genel bilgilerden ücret
              detaylarına kadar dilediğiniz bölüme göz atabilirsiniz.
            </TypographyP>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {faqSections.map((section) => (
                <div
                  key={section.title}
                  className="flex items-center space-x-3 rounded-xl border border-primary-100 bg-primary-50/60 px-4 py-3"
                >
                  <section.icon className="w-5 h-5 text-primary-700" />
                  <span className="text-sm font-semibold text-primary-800 turkish-text">
                    {section.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container space-y-12">
          {faqSections.map((section) => {
            const Icon = section.icon;
            return (
              <Card key={section.title} className="border-primary-100">
                <CardHeader className="pb-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="mb-1">{section.title}</CardTitle>
                      <TypographyP className="mt-0 text-base text-navy-600">
                        {section.description}
                      </TypographyP>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  {section.items.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-xl border border-border bg-navy-50/30 backdrop-blur-sm"
                    >
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-5 py-4 list-none">
                        <span className="font-semibold text-navy-900 turkish-text text-base">
                          {item.question}
                        </span>
                        <ChevronDown className="w-5 h-5 text-primary-700 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                      </summary>
                      <div className="px-5 pb-5 space-y-3">
                        <p className="text-sm leading-relaxed text-navy-700 turkish-text">
                          {item.answer}
                        </p>
                        {item.bullets && (
                          <ul className="list-disc pl-5 space-y-1 text-sm text-navy-700 turkish-text">
                            {item.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </details>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <Card key={fact.title} className="bg-white/80 backdrop-blur">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl mb-2">{fact.title}</CardTitle>
                    <TypographyP className="mt-0 text-sm text-navy-600">
                      {fact.description}
                    </TypographyP>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl px-10 py-12 text-white text-center">
            <TypographyH2 className="text-white mb-4">
              Sorunuz Yanıt Bulmadı mı?
            </TypographyH2>
            <TypographyP className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
              Arabuluculuk sürecinizle ilgili özel sorularınızı uzman ekibimize
              iletebilirsiniz. En geç 24 saat içinde dönüş sağlıyoruz.
            </TypographyP>
            <Button variant="gold" size="lg" asChild className="px-6">
              <Link href="/iletisim">Uzmanımıza Sorun</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
