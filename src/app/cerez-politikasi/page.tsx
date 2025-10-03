import { Metadata } from "next";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Çerez Politikası | Elite Arabuluculuk",
  description: "Çerezlerin ne olduğu, nasıl kullanıldığı ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgiler.",
};

export default function CerezPolitikasiPage() {
  const breadcrumbs = generateBreadcrumbs("/cerez-politikasi");

  return (
    <div>
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <TypographyH1 className="mb-6">Çerez Politikası</TypographyH1>
          <TypographyP className="mb-6">
            Bu politika; çerezlerin ne olduğunu, hangi amaçlarla kullanıldığını ve tercihlerinizin nasıl yönetileceğini açıklar.
          </TypographyP>

          <TypographyH2 className="mb-3">Çerez Nedir?</TypographyH2>
          <TypographyP className="mb-4">
            Çerezler, web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Oturum yönetimi, tercihler ve analitik için kullanılır.
          </TypographyP>

          <TypographyH2 className="mb-3">Kullandığımız Çerez Türleri</TypographyH2>
          <TypographyP className="mb-4">
            Zorunlu çerezler (site işlevselliği), performans/analitik çerezleri (trafik ölçümü) ve tercihe bağlı işlevsel çerezler kullanılabilir.
          </TypographyP>

          <TypographyH2 className="mb-3">Çerez Tercihleri</TypographyH2>
          <TypographyP className="mb-4">
            Tarayıcı ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Bazı çerezleri devre dışı bırakmak site deneyimini etkileyebilir.
          </TypographyP>

          <TypographyH2 className="mb-3">Üçüncü Taraf Çerezleri</TypographyH2>
          <TypographyP className="mb-4">
            Ziyaretçi trafiğini ölçümlemek için üçüncü taraf analitik araçlar kullanılabilir. Bu sağlayıcıların politikaları ayrıca geçerlidir.
          </TypographyP>
        </div>
      </section>
    </div>
  );
}

