import { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import { TypographyH1, TypographyH2, TypographyP, TypographyLead } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { ContactMethodsGrid, QuickContactCard } from "@/components/ui/ContactMethods";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { QuickConsultationForm } from "@/components/forms/QuickConsultationForm";

export const metadata: Metadata = {
  title: "İletişim - Elite Arabuluculuk | Hemen Ulaşın",
  description: "Arabuluculuk hizmetleri için bizimle iletişime geçin. Ücretsiz danışmanlık için hemen arayın.",
  keywords: ["iletişim", "contact", "arabulucu", "randevu", "danışmanlık"],
  openGraph: {
    title: "İletişim | Elite Arabuluculuk",
    description: "Uzman arabulucularımızla iletişime geçin ve ücretsiz danışmanlık alın.",
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
              Uyuşmazlığınızın çözümü için ilk adımı atın. 
              Uzman arabulucularımız size yardımcı olmak için hazır.
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
              <TypographyH2 className="mb-6">
                Mesaj Gönderiniz
              </TypographyH2>
              <TypographyP className="mb-8">
                Formu doldurarak bize ulaşın. En kısa sürede size geri dönüş yapacağız.
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
                  <TypographyH2 className="text-xl">Çalışma Saatleri</TypographyH2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-navy-700 turkish-text">Pazartesi - Cuma</span>
                    <span className="font-medium text-navy-900">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-navy-700 turkish-text">Cumartesi</span>
                    <span className="font-medium text-navy-900">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-navy-700 turkish-text">Pazar</span>
                    <span className="font-medium text-navy-900">Kapalı</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-navy-700 turkish-text">Acil Durumlar</span>
                      <span className="font-medium text-accent">7/24 Erişilebilir</span>
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
                  <p className="text-navy-700 turkish-text">Levent, Büyükdere Cad. No:123</p>
                  <p className="text-navy-700 turkish-text">Kat: 15, Daire: 45</p>
                  <p className="text-navy-700 turkish-text">34330 Beşiktaş/İstanbul</p>
                </div>
                
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Haritada Görüntüle
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}