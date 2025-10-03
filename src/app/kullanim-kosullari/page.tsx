import { Metadata } from "next";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Elite Arabuluculuk",
  description: "Web sitemizin kullanımına ilişkin hükümler ve şartlar.",
};

export default function KullanimKosullariPage() {
  const breadcrumbs = generateBreadcrumbs("/kullanim-kosullari");

  return (
    <div>
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <TypographyH1 className="mb-6">Kullanım Koşulları</TypographyH1>
          <TypographyP className="mb-6">
            Bu siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız lütfen siteyi kullanmayınız.
          </TypographyP>

          <TypographyH2 className="mb-3">Hizmetin Kapsamı</TypographyH2>
          <TypographyP className="mb-4">
            Sitedeki bilgiler genel niteliktedir; hukuki danışmanlık yerine geçmez. Hizmetler, randevu ve yazılı onay akışına tabidir.
          </TypographyP>

          <TypographyH2 className="mb-3">Sorumluluk Reddi</TypographyH2>
          <TypographyP className="mb-4">
            İçeriklerin doğruluğu için özen gösterilse de hatalar olabilir. Site kullanımından doğan dolaylı zararlardan sorumluluk kabul edilmez.
          </TypographyP>

          <TypographyH2 className="mb-3">Fikri Mülkiyet</TypographyH2>
          <TypographyP className="mb-4">
            Metin, görsel ve logolar dâhil tüm içerikler telif hakkına tabidir. Yazılı izin olmadan kopyalanamaz veya çoğaltılamaz.
          </TypographyP>

          <TypographyH2 className="mb-3">Yürürlük ve Uyuşmazlıklar</TypographyH2>
          <TypographyP className="mb-4">
            Koşullar gerektiğinde güncellenebilir. Uyuşmazlıklarda İstanbul (Merkez) mahkemeleri ve icra daireleri yetkilidir.
          </TypographyP>
        </div>
      </section>
    </div>
  );
}

