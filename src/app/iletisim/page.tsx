import { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyLead,
} from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import {
  ContactMethodsGrid,
  QuickContactCard,
} from "@/components/ui/ContactMethods";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { QuickConsultationForm } from "@/components/forms/QuickConsultationForm";

export const metadata: Metadata = {
  title: "İletişim - Elite Arabuluculuk | Hemen Ulaşın",
  description:
    "Arabuluculuk hizmetleri için bizimle iletişime geçin. Ücretsiz danışmanlık için hemen arayın.",
  keywords: ["iletişim", "contact", "arabulucu", "randevu", "danışmanlık"],
  openGraph: {
    title: "İletişim | Elite Arabuluculuk",
    description:
      "Uzman arabulucularımızla iletişime geçin ve ücretsiz danışmanlık alın.",
  },
};

export default function IletisimPage() {
  const breadcrumbs = generateBreadcrumbs("/iletisim");

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
              Bizimle İletişime Geçin
            </TypographyH1>
            <TypographyLead className="mb-8">
              Uyuşmazlığınızın çözümü için ilk adımı atın. Uzman
              arabulucularımız size yardımcı olmak için hazır.
            </TypographyLead>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container">
          <ContactMethodsGrid className="mb-16" />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <TypographyH2 className="mb-6">Mesaj Gönderiniz</TypographyH2>
              <TypographyP className="mb-8">
                Formu doldurarak bize ulaşın. En kısa sürede size geri dönüş
                yapacağız.
              </TypographyP>

              <ContactForm />
            </div>

            {/* Quick Contact */}
            <div className="space-y-8">
              {/* Quick Consultation Form */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Phone className="w-6 h-6 text-primary-700" />
                  <TypographyH2 className="text-xl">Hızlı Görüşme</TypographyH2>
                </div>
                <TypographyP className="mb-6 text-navy-600">
                  Size hemen geri dönmemiz için bilgilerinizi bırakın.
                </TypographyP>
                <QuickConsultationForm />
              </div>

              <QuickContactCard />

              {/* Office Hours */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-primary-700" />
                  <TypographyH2 className="text-xl">
                    Çalışma Saatleri
                  </TypographyH2>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-navy-700 turkish-text">
                      Pazartesi - Cuma
                    </span>
                    <span className="font-medium text-navy-900">
                      09:00 - 18:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-navy-700 turkish-text">
                      Cumartesi
                    </span>
                    <span className="font-medium text-navy-900">
                      10:00 - 14:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-navy-700 turkish-text">Pazar</span>
                    <span className="font-medium text-navy-900">Kapalı</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-navy-700 turkish-text">
                        Acil Durumlar
                      </span>
                      <span className="font-medium text-accent">
                        7/24 Erişilebilir
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary-700" />
                  <TypographyH2 className="text-xl">Adresimiz</TypographyH2>
                </div>

                <div className="space-y-2">
                  <p className="text-navy-700 turkish-text">
                    Piri Mehmet Paşa Mah.
                  </p>
                  <p className="text-navy-700 turkish-text">
                    Recep Silahtaroğlu Sok. No:18/A
                  </p>
                  <p className="text-navy-700 turkish-text">
                    34570 Silivri/İstanbul
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4"
                  asChild
                >
                  <a
                    href="https://maps.app.goo.gl/b3RUqmfSzJ4NKqnQ9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Haritada Görüntüle
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <TypographyH2 className="mb-4">Konumumuz</TypographyH2>
            <TypographyP className="text-lg max-w-2xl mx-auto">
              Silivri'de merkezi konumda bulunan ofisimizde yüz yüze görüşmeler
              için randevu alabilirsiniz.
            </TypographyP>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.615378133101!2d28.2427094!3d41.077399299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b515707262050f%3A0x2730b4da32b8ccc0!2sElite%20hukuk%20b%C3%BCrosu!5e0!3m2!1sen!2str!4v1753170227485!5m2!1sen!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite Arabuluculuk Harita"
              className="w-full"
            ></iframe>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-primary-700" />
              </div>
              <TypographyH3 className="text-lg mb-2">Kolay Ulaşım</TypographyH3>
              <TypographyP className="text-sm">
                Silivri merkeze yakın, toplu taşıma ile kolayca ulaşılabilir
              </TypographyP>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-primary-700" />
              </div>
              <TypographyH3 className="text-lg mb-2">Otopark</TypographyH3>
              <TypographyP className="text-sm">
                Müşterilerimiz için ücretsiz otopark imkanı
              </TypographyP>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-primary-700" />
              </div>
              <TypographyH3 className="text-lg mb-2">Randevu</TypographyH3>
              <TypographyP className="text-sm">
                Görüşme öncesi mutlaka randevu alınız
              </TypographyP>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
