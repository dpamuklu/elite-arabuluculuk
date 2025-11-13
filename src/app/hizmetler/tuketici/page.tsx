import { Metadata } from "next";
import Link from "next/link";
import { ShoppingCart, FileText, Shield, Scale, ArrowRight } from "lucide-react";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/Typography";
import { Button, GoldButton } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Tüketici Arabuluculuğu | Elite Arabuluculuk",
  description: "Ayıplı mal/hizmet, iade ve mesafeli satış uyuşmazlıklarında pratik tüketici arabuluculuğu.",
};

export default function TuketiciPage() {
  const breadcrumbs = generateBreadcrumbs("/hizmetler/tuketici");

  const topics = [
    "Ayıplı mal/hizmet ve iade süreçleri",
    "Teslimat, kurulum ve garanti uyuşmazlıkları",
    "Mesafeli satış ve cayma hakkı",
    "Abonelik ve sözleşme değişiklikleri",
  ];

  const docs = [
    "Fatura/fiş ve sözleşme",
    "Servis/tespit tutanağı",
    "Yazışmalar ve başvuru kayıtları",
    "Ürün fotoğraf ve videoları",
  ];

  const benefits = [
    "Hızlı ve masrafsız çözüm",
    "Satıcı–tüketici ilişkisini koruma",
    "Gizlilik ve uzlaşı odaklı yaklaşım",
    "Uygulanabilir iade/telafi planı",
  ];

  const process = [
    "Başvuru ve belge inceleme",
    "Taraflarla iletişim ve beklenti analizi",
    "Müzakere ve çözüm seçenekleri",
    "Anlaşma metni ve uygulama planı",
  ];

  return (
    <div>
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <TypographyH1 className="mb-4">Tüketici Arabuluculuğu</TypographyH1>
          <TypographyP className="text-navy-700 mb-8">
            Tüketici-satıcı arasındaki uyuşmazlıklarda, tarafları yormadan pratik ve kalıcı çözümler sunuyoruz.
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShoppingCart className="w-5 h-5"/>Konular</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-navy-700">
                  {topics.map((t) => (<li key={t}>{t}</li>))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5"/>Avantajlar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-navy-700">
                  {benefits.map((b) => (<li key={b}>{b}</li>))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Scale className="w-5 h-5"/>Süreç</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2 text-navy-700">
                  {process.map((p) => (<li key={p}>{p}</li>))}
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5"/>Gerekli Belgeler</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-navy-700">
                  {docs.map((d) => (<li key={d}>{d}</li>))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white text-center">
            <TypographyH2 className="text-white mb-3">Hızlı Çözüm İçin İletişime Geçin</TypographyH2>
            <TypographyP className="text-white/90 mb-6">İade, değişim veya telafi süreçlerini hızlandıralım.</TypographyP>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldButton size="lg" asChild>
                <Link href="/iletisim">Ücretsiz Danışmanlık <ArrowRight className="w-5 h-5 ml-2"/></Link>
              </GoldButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary-800"
                asChild
              >
                <Link href="/surecimiz">Süreç Detayları</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
