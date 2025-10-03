import { Metadata } from "next";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Elite Arabuluculuk",
  description: "Kişisel verilerinizi nasıl işlediğimizi ve koruduğumuzu açıklayan gizlilik politikamız.",
};

export default function GizlilikPage() {
  const breadcrumbs = generateBreadcrumbs("/gizlilik");

  return (
    <div>
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <TypographyH1 className="mb-6">Gizlilik Politikası</TypographyH1>
          <TypographyP className="mb-6">
            Elite Arabuluculuk olarak kişisel verilerinizin güvenliği ve gizliliğine önem veriyoruz. Bu politika; hangi verileri topladığımızı, nasıl kullandığımızı ve haklarınızı açıklar.
          </TypographyP>

          <TypographyH2 className="mb-3">Toplanan Veriler</TypographyH2>
          <TypographyP className="mb-4">
            Ad, soyad, e‑posta, telefon, tercih ve talep içerikleri; iletişim formları ve hızlı danışma formları üzerinden toplanır. Trafik/cihaz verileri analitik amaçlı anonimleştirilmiş şekilde işlenebilir.
          </TypographyP>

          <TypographyH2 className="mb-3">Veri Kullanımı</TypographyH2>
          <TypographyP className="mb-4">
            Taleplerinizi yanıtlamak, randevu oluşturmak, bilgilendirme yapmak ve hizmet kalitesini artırmak için verileriniz işlenir. Yasal yükümlülükler kapsamında gerekli saklama yapılabilir.
          </TypographyP>

          <TypographyH2 className="mb-3">Çerezler</TypographyH2>
          <TypographyP className="mb-4">
            Deneyiminizi iyileştirmek için çerezler kullanabiliriz. Ayrıntılar için Çerez Politikası'na bakınız.
          </TypographyP>

          <TypographyH2 className="mb-3">Güvenlik</TypographyH2>
          <TypographyP className="mb-4">
            Verileriniz; erişim kontrolleri, şifreleme ve güvenlik başlıkları gibi teknik/idari tedbirlerle korunur. Üçüncü taraflarla yalnızca hizmet sunumu ve yasal gereklilikler kapsamında paylaşılır.
          </TypographyP>

          <TypographyH2 className="mb-3">Haklarınız</TypographyH2>
          <TypographyP className="mb-4">
            KVKK kapsamındaki başvuru, erişim, düzeltme, silme ve işlemeyi kısıtlama haklarınızı kullanabilirsiniz. Başvurular için iletişim sayfasındaki kanallardan bize ulaşın.
          </TypographyP>
        </div>
      </section>
    </div>
  );
}

