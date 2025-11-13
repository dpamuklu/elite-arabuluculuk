import { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Scale, FileText, Shield, ArrowRight } from "lucide-react";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/Typography";
import { Button, GoldButton } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Ticari Arabuluculuk | Elite Arabuluculuk",
  description: "Şirketler arası sözleşme, ortaklık, alacak ve tedarik uyuşmazlıklarında hızlı ve güvenilir ticari arabuluculuk.",
};

export default function TicariPage() {
  const breadcrumbs = generateBreadcrumbs("/hizmetler/ticari");

  const features = [
    "Sözleşme ve alacak uyuşmazlıkları",
    "Ortaklık ve pay devri anlaşmazlıkları",
    "Tedarik/lojistik ve kalite ihtilafları",
    "Fikri mülkiyet ve dağıtım sözleşmeleri",
  ];

  const benefits = [
    "2-6 haftada sonuçlanan süreç",
    "İş ilişkilerinin korunması",
    "Gizlilik ve esneklik",
    "Mahkeme masraflarına kıyasla tasarruf",
  ];

  const process = [
    "Ön başvuru ve belge paylaşımı",
    "Taraflarla ayrı ön görüşmeler",
    "Ortak müzakere oturumları",
    "Anlaşma metni ve protokol",
  ];

  const documents = [
    "Sözleşmeler, ek protokoller, e‑postalar",
    "Fatura/irsaliye ve ödeme kayıtları",
    "Keşif/teslim tutanakları",
    "Temsil ve imza yetki belgeleri",
  ];

  return (
    <div>
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <TypographyH1 className="mb-4">Ticari Arabuluculuk</TypographyH1>
          <TypographyP className="text-navy-700 mb-8">
            Şirketler arası ticari uyuşmazlıklarda, iş ilişkilerini koruyarak hızlı ve uygulanabilir çözümler üretiyoruz.
          </TypographyP>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Briefcase className="w-5 h-5"/>Konular</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-navy-700">
                  {features.map((f) => (<li key={f}>{f}</li>))}
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
                  {documents.map((d) => (<li key={d}>{d}</li>))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white text-center">
            <TypographyH2 className="text-white mb-3">Ücretsiz Ön Değerlendirme</TypographyH2>
            <TypographyP className="text-white/90 mb-6">Uygulanabilir ve hızlı bir çözüm için belgelerinizi inceleyelim.</TypographyP>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldButton size="lg" asChild>
                <Link href="/iletisim">Görüşme Talep Et <ArrowRight className="w-5 h-5 ml-2"/></Link>
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
    </div>
  );
}
