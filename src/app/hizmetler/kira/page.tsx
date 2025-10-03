import { Metadata } from "next";
import Link from "next/link";
import { Home, Users, Scale, FileText, Shield, ArrowRight } from "lucide-react";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from "@/components/ui/Typography";
import { Button, GoldButton } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Kira Arabuluculuğu | Elite Arabuluculuk",
  description: "Kiracı–ev sahibi uyuşmazlıklarında (kira tespiti, uyarlama, tahliye, alacak) hızlı ve adil arabuluculuk.",
};

export default function KiraPage() {
  const breadcrumbs = generateBreadcrumbs("/hizmetler/kira");

  const topics = [
    "Kira tespiti ve uyarlama",
    "Tahliye protokolü ve süre yönetimi",
    "Birikmiş kira ve alacak uzlaşısı",
    "Sözleşme ihlali, tadilat ve hasar ihtilafları",
    "Aidat ve yan gider anlaşmazlıkları",
  ];

  const process = [
    "Başvuru ve sözleşme/ödeme kayıtlarının paylaşılması",
    "Taraflarla ön görüşmeler (ayrı)",
    "Ortak müzakere ve çözüm alternatifleri",
    "Anlaşma metni ve tahliye/ödeme planı",
  ];

  const docs = [
    "Kira sözleşmesi ve ekleri",
    "Ödeme dekontları, ihtarnameler",
    "Tespit tutanağı/fotoğraf (varsa hasar)",
    "Kimlik ve vekâlet/temsil belgeleri",
  ];

  const benefits = [
    "2-4 haftada sonuç",
    "Taraf ilişkilerinin korunması",
    "Gizlilik ve esnek ödeme planı",
    "Uygulanabilir protokoller",
  ];

  return (
    <div>
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <TypographyH1 className="mb-4">Kira Arabuluculuğu</TypographyH1>
          <TypographyP className="text-navy-700 mb-8">
            Kiracı–ev sahibi uyuşmazlıklarında, hızlı ve uygulanabilir anlaşmalarla mağduriyetleri en aza indiriyoruz.
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Home className="w-5 h-5"/>Konular</CardTitle>
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
            <TypographyH2 className="text-white mb-3">Tahliye/Ödeme Planı İçin Çözüm</TypographyH2>
            <TypographyP className="text-white/90 mb-6">Uygun plan ve protokolü birlikte oluşturalım.</TypographyP>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldButton size="lg" asChild>
                <Link href="/iletisim">Görüşme Talep Et <ArrowRight className="w-5 h-5 ml-2"/></Link>
              </GoldButton>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-800" asChild>
                <Link href="/surecimiz">Süreci Görün</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

