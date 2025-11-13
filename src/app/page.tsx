import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button, GoldButton } from "@/components/ui/Button";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/Typography";
import {
  ServiceCard,
  FeatureCard,
  TestimonialCard,
} from "@/components/ui/Card";

export default function Home() {
  const services = [
    {
      title: "Ticari Arabuluculuk",
      description: "Şirketler arası uyuşmazlıkların profesyonel çözümü",
      icon: <Scale className="w-6 h-6" />,
      features: [
        "Hızlı çözüm süreci",
        "Maliyet etkin yaklaşım",
        "Gizlilik garantisi",
        "Uzman arabulucular",
      ],
    },
    {
      title: "Kira Arabuluculuğu",
      description: "Kiracı–ev sahibi uyuşmazlıklarının hızlı ve adil çözümü",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Kira tespiti ve uyarlama",
        "Tahliye ve alacak uzlaşısı",
        "Sözleşme kaynaklı ihtilaflar",
        "Gizlilik ve sürdürülebilir çözüm",
      ],
    },
    {
      title: "İş Hukuku Arabuluculuğu",
      description: "İşçi-işveren uyuşmazlıklarının çözümü",
      icon: <Award className="w-6 h-6" />,
      features: [
        "İş barışının korunması",
        "Yasal uyumluluk",
        "Hızlı süreç",
        "Win-win çözümler",
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "İlk Görüşme",
      description: "Ücretsiz ön değerlendirme ve danışmanlık",
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: 2,
      title: "Arabuluculuk Süreci",
      description: "Tarafların katılımıyla müzakere oturumları",
      icon: <Scale className="w-8 h-8" />,
    },
    {
      step: 3,
      title: "Anlaşma",
      description: "Karşılıklı kabul edilen çözümün formüle edilmesi",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  const stats = [
    {
      value: "2k+",
      label: "Başarılı Vaka",
      description: "Son 5 yılda çözülen uyuşmazlık",
    },
    {
      value: "10+",
      label: "Yıl Deneyim",
      description: "Arabuluculuk alanında",
    },
    { value: "7/24", label: "Destek", description: "Acil durumlar için" },
  ];

  const testimonials = [
    {
      content:
        "Elite Arabuluculuk sayesinde şirketimizin ticari uyuşmazlığını hızla çözdük. Mahkeme sürecinden çok daha ekonomik ve etkili oldu.",
      author: "Boajing Yang",
      role: "CEO ",
      company: "Mekotek A.Ş.",
      companyHref: "https://www.mekotek.com.tr/en/",
      rating: 5,
    },
    {
      content:
        "Yıllardır personellerimizle alakalı arabuluculuk süreçlerimizi büyük bir memnuniyet ile yürütüyoruz. Hizmet kalitesi mükemmel.",
      author: "İ. Cem İskar",
      role: "İK Müdürü",
      company: "Betafence A.Ş.",
      companyHref: "https://www.betafence.com.tr/",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
        {/* CSS Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:60px_40px]"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.85)_0%,rgba(15,23,42,0.95)_70%)]"></div>

        {/* Justice Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]">
          <div className="relative w-full h-full bg-[radial-gradient(circle,rgba(217,119,6,0.2)_0%,transparent_70%)]">
            <div className="absolute w-[400px] h-[2px] bg-gold-500 opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-[2px] h-[300px] bg-gold-500 opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100px]"></div>
          </div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0">
          <div className="absolute w-[200px] h-[200px] top-[10%] right-[15%] rotate-45 rounded-lg border border-gold-500/20 animate-spin-slow"></div>
          <div className="absolute w-[150px] h-[150px] bottom-[15%] left-[10%] rotate-[30deg] border border-gold-500/20 animate-spin-slow-reverse"></div>
          <div className="absolute w-[100px] h-[100px] top-[40%] left-[5%] rounded-full border border-gold-500/30 animate-pulse"></div>
          <div className="absolute w-[250px] h-[250px] bottom-[10%] right-[5%] bg-gold-500/5 clip-path-diamond animate-float"></div>
        </div>

        <div className="relative z-10 container text-center px-4">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-6 mb-10 px-10 py-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm">
            <div className="relative w-20 h-20 flex-shrink-0 bg-white/90 rounded-xl p-2">
              <Image
                src="/images/whitelogo.png"
                alt="Elite Arabuluculuk Logo"
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="text-left">
              <div className="text-gold-400 text-base font-semibold tracking-wider uppercase">
                Adalet Bakanlığı Onaylı
              </div>
              <div className="text-white/80 text-sm">Elite Arabuluculuk</div>
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
            Profesyonel{" "}
            <span className="font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Arabuluculuk Hizmetleri
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Uyuşmazlıklarınızı adil, hızlı ve ekonomik bir şekilde çözmek için
            uzman arabulucularımızla çalışın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:from-gold-700 hover:to-gold-800 transition-all hover:shadow-xl hover:shadow-gold-500/20 hover:-translate-y-0.5"
            >
              Hemen Başvur
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Detaylı Bilgi Al
              <span className="text-xl">📞</span>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-1">10+</div>
              <div className="text-sm text-white/70 uppercase tracking-wide">
                Yıl Deneyim
              </div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-1">2k+</div>
              <div className="text-sm text-white/70 uppercase tracking-wide">
                Çözülen Dava
              </div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-1">7/24</div>
              <div className="text-sm text-white/70 uppercase tracking-wide">
                Destek
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Showcase */}
      <section className="section-padding bg-secondary">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <TypographyH2 className="mb-4">Ofisimizden Bir Kare</TypographyH2>
            <TypographyP className="text-lg">
              Silivri&apos;deki modern ofisimizde yüz yüze görüşmelere ev sahipliği
              yapıyoruz. Rahat ve güvenli ortamımız, tarafların yapıcı diyalog
              kurmasına yardımcı olacak şekilde tasarlandı.
            </TypographyP>
            <TypographyP className="mt-6">
              İlk toplantılarınızı ister çevrim içi ister ofisimizde
              gerçekleştirebilirsiniz. Ekip arkadaşlarımız sizi karşılamak ve
              süreci adım adım yönlendirmek için hazır.
            </TypographyP>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-white text-primary-800 px-6 py-3 rounded-lg font-semibold shadow-legal hover:shadow-legal-lg transition-all"
              >
                Ziyaret Planlayın
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://maps.app.goo.gl/b3RUqmfSzJ4NKqnQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-200 text-primary-800 hover:bg-white transition-all"
              >
                Haritada Görüntüle
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold-500/10 rounded-3xl blur-lg" aria-hidden="true"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-legal-lg border border-white/60">
              <Image
                src="/images/ofis.jpg"
                alt="Elite Arabuluculuk ofisinden görünüm"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-4">
              Neden Elite Arabuluculuk?
            </TypographyH2>
            <TypographyP className="text-lg max-w-2xl mx-auto">
              Yılların deneyimi ve uzman kadromuzla size en iyi hizmeti
              sunuyoruz.
            </TypographyP>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Adalet"
              description="Tarafsız ve objektif çözümler"
              icon={<Scale className="w-8 h-8" />}
            />
            <FeatureCard
              title="Hızlı Çözüm"
              description="Mahkeme sürecinden daha hızlı"
              icon={<Clock className="w-8 h-8" />}
            />
            <FeatureCard
              title="Uzman Ekip"
              description="Deneyimli arabulucular"
              icon={<Users className="w-8 h-8" />}
            />
            <FeatureCard
              title="Güvenilir"
              description="Binlerce başarılı çözüm"
              icon={<Award className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-4">Hizmet Alanlarımız</TypographyH2>
            <TypographyP className="text-lg max-w-2xl mx-auto">
              Geniş yelpazede profesyonel arabuluculuk hizmetleri sunuyoruz.
            </TypographyP>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <Link href="/hizmetler">
                Tüm Hizmetleri Görün
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-4">Arabuluculuk Süreci</TypographyH2>
            <TypographyP className="text-lg max-w-2xl mx-auto">
              Basit ve etkili 3 adımda uyuşmazlığınızı çözün.
            </TypographyP>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <TypographyH3 className="mb-4 text-xl">
                  {step.title}
                </TypographyH3>
                <TypographyP>{step.description}</TypographyP>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/surecimiz">Süreci Detaylı İnceleyin</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-navy-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <TypographyH2 className="mb-4">
              Hizmet Alan Geri Bildirimleri
            </TypographyH2>
            <TypographyP className="text-lg max-w-2xl mx-auto">
              Başarıyla çözdüğümüz vakalarda müşterilerimizin deneyimleri.
            </TypographyP>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                companyHref={testimonial.companyHref}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container text-center">
          <TypographyH2 className="text-white mb-4">
            Uyuşmazlığınızı Çözmek İçin Hazır Mısınız?
          </TypographyH2>
          <TypographyP className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Ücretsiz ön görüşme için hemen iletişime geçin. Deneyimli
            arabulucularımız size en uygun çözümü bulmak için burada.
          </TypographyP>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton size="lg" asChild>
              <Link href="/iletisim">
                Hemen İletişime Geçin
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </GoldButton>
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary-800"
              asChild
            >
              <Link href="/hakkimizda" className="inline-flex items-center justify-center gap-2">
                Hakkımızda Daha Fazla
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
