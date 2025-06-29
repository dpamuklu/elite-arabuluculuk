import Link from "next/link";
import { Scale, Users, Award, Clock, CheckCircle, ArrowRight, Star, Shield } from "lucide-react";
import { Button, GoldButton } from "@/components/ui/Button";
import { TypographyH1, TypographyH2, TypographyH3, TypographyP, TypographyLead } from "@/components/ui/Typography";
import { ServiceCard, FeatureCard, TestimonialCard } from "@/components/ui/Card";

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
        "Uzman arabulucular"
      ]
    },
    {
      title: "Aile Arabuluculuğu",
      description: "Boşanma, velayet ve nafaka konularında arabuluculuk",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Çocuk odaklı çözümler",
        "Duygusal destek",
        "Adil anlaşmalar",
        "Geleceğe yönelik planlama"
      ]
    },
    {
      title: "İş Hukuku Arabuluculuğu",
      description: "İşçi-işveren uyuşmazlıklarının çözümü",
      icon: <Award className="w-6 h-6" />,
      features: [
        "İş barışının korunması",
        "Yasal uyumluluk",
        "Hızlı süreç",
        "Win-win çözümler"
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "İlk Görüşme",
      description: "Ücretsiz ön değerlendirme ve danışmanlık",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: 2,
      title: "Arabuluculuk Süreci",
      description: "Tarafların katılımıyla müzakere oturumları",
      icon: <Scale className="w-8 h-8" />
    },
    {
      step: 3,
      title: "Anlaşma",
      description: "Karşılıklı kabul edilen çözümün formüle edilmesi",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const stats = [
    { value: "1000+", label: "Başarılı Vaka", description: "Son 5 yılda çözülen uyuşmazlık" },
    { value: "95%", label: "Başarı Oranı", description: "Anlaşma ile sonuçlanan vakalar" },
    { value: "15+", label: "Yıl Deneyim", description: "Arabuluculuk alanında" },
    { value: "7/24", label: "Destek", description: "Acil durumlar için" }
  ];

  const testimonials = [
    {
      content: "Elite Arabuluculuk sayesinde şirketimizin ticari uyuşmazlığını hızla çözdük. Mahkeme sürecinden çok daha ekonomik ve etkili oldu.",
      author: "Mehmet Yılmaz",
      role: "Genel Müdür",
      company: "ABC Ticaret A.Ş.",
      rating: 5
    },
    {
      content: "Boşanma sürecimizde çocuklarımızın menfaatini ön planda tutan profesyonel yaklaşımları için teşekkür ederiz.",
      author: "Ayşe Demir",
      role: "Müşteri",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-primary-800 to-navy-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <TypographyH1 className="text-white mb-6 text-4xl lg:text-6xl">
              Profesyonel Arabuluculuk Hizmetleri
            </TypographyH1>
            <TypographyLead className="text-navy-100 mb-8 text-xl lg:text-2xl">
              Uyuşmazlıklarınızı adil, hızlı ve ekonomik bir şekilde çözmek için
              uzman arabulucularımızla çalışın.
            </TypographyLead>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <GoldButton size="lg" asChild>
                <Link href="/iletisim">
                  Ücretsiz Danışmanlık Al
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </GoldButton>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900" asChild>
                <Link href="/hizmetler">Hizmetlerimizi İnceleyin</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-navy-700">
              <div className="text-center">
                <Shield className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                <div className="text-sm text-navy-200">Adalet Bakanlığı</div>
                <div className="text-xs text-navy-300">Onaylı Arabulucu</div>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                <div className="text-sm text-navy-200">15+ Yıl</div>
                <div className="text-xs text-navy-300">Deneyim</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                <div className="text-sm text-navy-200">1000+</div>
                <div className="text-xs text-navy-300">Başarılı Vaka</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                <div className="text-sm text-navy-200">%95</div>
                <div className="text-xs text-navy-300">Başarı Oranı</div>
              </div>
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
              Yılların deneyimi ve uzman kadromuzla size en iyi hizmeti sunuyoruz.
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
            <TypographyH2 className="mb-4">
              Hizmet Alanlarımız
            </TypographyH2>
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
            <TypographyH2 className="mb-4">
              Arabuluculuk Süreci
            </TypographyH2>
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
                <TypographyP>
                  {step.description}
                </TypographyP>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-navy-300">
                  {stat.description}
                </div>
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
              Müşteri Yorumları
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
          <TypographyP className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Ücretsiz ön görüşme için hemen iletişime geçin. 
            Deneyimli arabulucularımız size en uygun çözümü bulmak için burada.
          </TypographyP>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton size="lg" asChild>
              <Link href="/iletisim">
                Hemen İletişime Geçin
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </GoldButton>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-800" asChild>
              <Link href="/hakkimizda">Hakkımızda Daha Fazla</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
