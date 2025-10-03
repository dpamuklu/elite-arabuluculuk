import { Metadata } from "next";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Elite Arabuluculuk",
  description: "6698 sayılı KVKK kapsamında veri sorumlusu, işleme amaçları, aktarım ve haklarınıza ilişkin aydınlatma metni.",
};

export default function KvkkPage() {
  const breadcrumbs = generateBreadcrumbs("/kvkk");

  return (
    <div>
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <TypographyH1 className="mb-6">KVKK Aydınlatma Metni</TypographyH1>
          <TypographyP className="mb-6">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, veri sorumlusu sıfatıyla kişisel verilerinizi aşağıda açıklanan amaçlarla işlemekteyiz.
          </TypographyP>

          <TypographyH2 className="mb-3">Veri Sorumlusu</TypographyH2>
          <TypographyP className="mb-4">
            Elite Arabuluculuk — iletişim kanallarımız aracılığıyla bize ulaşabilirsiniz.
          </TypographyP>

          <TypographyH2 className="mb-3">İşleme Amaçları</TypographyH2>
          <TypographyP className="mb-4">
            Danışma taleplerinin yönetimi, randevu süreçleri, hizmet sunumu, yasal yükümlülüklerin yerine getirilmesi ve hizmet kalitesinin artırılması.
          </TypographyP>

          <TypographyH2 className="mb-3">İşlenen Veri Kategorileri</TypographyH2>
          <TypographyP className="mb-4">
            Kimlik ve iletişim bilgileri, işlem güvenliği kayıtları, talep/içerik bilgileri; gerekli hallerde hukuki işlem verileri.
          </TypographyP>

          <TypographyH2 className="mb-3">Aktarım ve Saklama</TypographyH2>
          <TypographyP className="mb-4">
            Veri işleyen hizmet sağlayıcılarla ve yasal mercilerle mevzuata uygun şekilde paylaşım yapılabilir. Saklama süreleri ilgili mevzuat ve meşru menfaatlerle sınırlıdır.
          </TypographyP>

          <TypographyH2 className="mb-3">Haklarınız (KVKK m.11)</TypographyH2>
          <TypographyP className="mb-4">
            Verilerinize erişme, düzeltme, silme, işlemeyi kısıtlama, itiraz ve tazminat talep etme haklarına sahipsiniz. Başvurularınızı iletişim sayfamızdaki kanallardan iletebilirsiniz.
          </TypographyP>
        </div>
      </section>
    </div>
  );
}

