import { Metadata } from "next";
import Link from "next/link";
import { Scale, Users, FileText, Shield, ArrowRight } from "lucide-react";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/Typography";
import { Button, GoldButton } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "İş Hukuku Arabuluculuğu | Elite Arabuluculuk",
  description: "İşçi–işveren arasında sözleşme, ücret, fesih ve mobbing uyuşmazlıklarında hızlı arabuluculuk.",
};

export default function IsHukukuPage() {
  const breadcrumbs = generateBreadcrumbs("/hizmetler/is-hukuku");

  const topics = [
    "Ücret, prim, kıdem/ihbar alacakları",
    "Fesih, işe iade ve tazminatlar",
    "Mobbing ve eşit işlem borcu",
    "Fazla mesai, yıllık izin, SGK kayıtları",
  ];

  const process = [
    "Durum tespiti ve hakların belirlenmesi",
    "Taraflarla ayrı görüşmeler",
    "Müzakere ve çözüm alternatifleri",
    "Anlaşma metni ve ödeme planı",
  ];

  const docs = [
    "İş sözleşmesi ve ekleri",
    "Bordro, puantaj, yazışmalar",
    "İhtarlar, fesih bildirimi",
    "Tanık/tespit ve SGK kayıtları",
  ];

  const benefits = [
    "Hızlı ve düşük maliyetli çözüm",
    "İş barışının korunması",
    "Gizlilik ve uygulanabilir protokol",
    "Yasal uyum",
  ];

  return (
    <div>
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <TypographyH1 className="mb-4">İş Hukuku Arabuluculuğu</TypographyH1>
          <TypographyP className="text-navy-700 mb-8">
            Çatışmaları tırmandırmadan, hak ve menfaat dengesini koruyarak çözüme ulaştırıyoruz.
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Users className="w-5 h-5"/>Konular</CardTitle>
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
            <TypographyH2 className="text-white mb-3">Ücretsiz Değerlendirme</TypographyH2>
            <TypographyP className="text-white/90 mb-6">Haklarınızı birlikte değerlendirelim, uygulanabilir bir protokol oluşturalım.</TypographyP>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldButton size="lg" asChild>
                <Link href="/iletisim">Danışmanlık Al <ArrowRight className="w-5 h-5 ml-2"/></Link>
              </GoldButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary-800"
                asChild
              >
                <Link href="/surecimiz">Süreci İnceleyin</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
