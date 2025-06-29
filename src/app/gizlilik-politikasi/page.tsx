import { Metadata } from "next";
import { Shield, Eye, Lock, UserCheck } from "lucide-react";
import { TypographyH1, TypographyH2, TypographyH3, TypographyP, TypographyLegal } from "@/components/ui/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Gizlilik Politikası - Elite Arabuluculuk | KVKK Uyumlu",
  description: "Elite Arabuluculuk gizlilik politikası ve kişisel verilerin korunması hakkında detaylı bilgiler.",
  keywords: ["gizlilik politikası", "KVKK", "kişisel veri", "privacy policy"],
  openGraph: {
    title: "Gizlilik Politikası | Elite Arabuluculuk",
    description: "Kişisel verilerinizin korunması ve KVKK uyumluluğu hakkında bilgiler.",
  },
  robots: "noindex",
};

export default function GizlilikPolitikasiPage() {
  const breadcrumbs = generateBreadcrumbs("/gizlilik-politikasi");

  const lastUpdated = "01 Ocak 2024";

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-navy-50 to-primary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white">
                <Shield className="w-8 h-8" />
              </div>
            </div>
            <TypographyH1 className="mb-4">
              Gizlilik Politikası
            </TypographyH1>
            <TypographyP className="text-lg">
              Son güncelleme: {lastUpdated}
            </TypographyP>
            <TypographyP className="text-navy-600 mt-4">
              Kişisel verilerinizin korunması bizim için çok önemlidir. 
              Bu politika, verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
            </TypographyP>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Veri Sorumlusu */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <UserCheck className="w-6 h-6 text-primary-700" />
                  <span>Veri Sorumlusu</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyLegal>
                  <p className="mb-4">
                    6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, 
                    kişisel verilerinizin veri sorumlusu Elite Arabuluculuk Hizmetleri'dir.
                  </p>
                  <p>
                    <strong>İletişim Bilgileri:</strong><br />
                    Adres: Levent, Büyükdere Cad. No:123, 34330 Beşiktaş/İstanbul<br />
                    E-posta: kvkk@elitearabulucu.com<br />
                    Telefon: +90 (XXX) XXX XX XX
                  </p>
                </TypographyLegal>
              </CardContent>
            </Card>

            {/* Kişisel Verilerin Toplanması */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Eye className="w-6 h-6 text-primary-700" />
                  <span>Kişisel Verilerin Toplanması</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyLegal>
                  <TypographyH3 className="mb-4">Toplanan Veri Türleri</TypographyH3>
                  <ul className="list-disc ml-6 space-y-2 mb-6">
                    <li>Kimlik Bilgileri: Ad, soyad, T.C. kimlik numarası</li>
                    <li>İletişim Bilgileri: Telefon, e-posta, adres</li>
                    <li>Hukuki İşlem Bilgileri: Uyuşmazlık konusu, taraf bilgileri</li>
                    <li>Teknik Veriler: IP adresi, çerez bilgileri</li>
                  </ul>

                  <TypographyH3 className="mb-4">Toplama Yöntemleri</TypographyH3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Web sitesi üzerinden gönderilen formlar</li>
                    <li>Telefon görüşmeleri</li>
                    <li>E-posta yazışmaları</li>
                    <li>Yüz yüze görüşmeler</li>
                    <li>Resmi belgeler ve başvurular</li>
                  </ul>
                </TypographyLegal>
              </CardContent>
            </Card>

            {/* İşleme Amaçları */}
            <Card>
              <CardHeader>
                <CardTitle>Kişisel Verilerin İşleme Amaçları</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyLegal>
                  <p className="mb-4">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Arabuluculuk hizmetlerinin sunulması</li>
                    <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
                    <li>İletişimin sağlanması</li>
                    <li>Kalite kontrol ve değerlendirme</li>
                    <li>Arşivleme ve kayıt tutma</li>
                    <li>Yasal düzenlemelere uyum</li>
                  </ul>
                </TypographyLegal>
              </CardContent>
            </Card>

            {/* Hukuki Dayanak */}
            <Card>
              <CardHeader>
                <CardTitle>İşlemenin Hukuki Dayağı</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyLegal>
                  <p className="mb-4">Kişisel verileriniz KVKK'nın 5. maddesinde belirtilen aşağıdaki hukuki dayanaklar çerçevesinde işlenmektedir:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Açık rızanız</li>
                    <li>Hukuki yükümlülüğün yerine getirilmesi</li>
                    <li>Sözleşmenin kurulması veya ifası</li>
                    <li>Meşru menfaatlerimiz</li>
                  </ul>
                </TypographyLegal>
              </CardContent>
            </Card>

            {/* Veri Güvenliği */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Lock className="w-6 h-6 text-primary-700" />
                  <span>Veri Güvenliği</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyLegal>
                  <p className="mb-4">
                    Kişisel verilerinizin güvenliğini sağlamak için aşağıdaki teknik ve idari tedbirleri almaktayız:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>SSL şifreleme teknolojisi</li>
                    <li>Güvenli sunucu altyapısı</li>
                    <li>Erişim kontrolü ve yetkilendirme</li>
                    <li>Düzenli güvenlik denetimleri</li>
                    <li>Personel eğitimi ve gizlilik taahhütleri</li>
                    <li>Veri yedekleme ve kurtarma sistemleri</li>
                  </ul>
                </TypographyLegal>
              </CardContent>
            </Card>

            {/* Haklarınız */}
            <Card>
              <CardHeader>
                <CardTitle>KVKK Kapsamındaki Haklarınız</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyLegal>
                  <p className="mb-4">KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                  <ul className="list-disc ml-6 space-y-2 mb-6">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
                    <li>İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                    <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                    <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                    <li>Kanunlarda öngörülen şartlar çerçevesinde kişisel verilerin silinmesini isteme</li>
                    <li>Kişisel verilerin düzeltilmesi veya silinmesi halinde bu işlemlerin paylaştığımız üçüncü kişilere bildirilmesini isteme</li>
                    <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                    <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
                  </ul>

                  <p className="mb-4">
                    <strong>Başvuru Yöntemi:</strong><br />
                    Haklarınızı kullanmak için kvkk@elitearabulucu.com adresine yazılı olarak başvurabilirsiniz.
                    Başvurularınız en geç 30 gün içinde cevaplanacaktır.
                  </p>
                </TypographyLegal>
              </CardContent>
            </Card>

            {/* Çerezler */}
            <Card>
              <CardHeader>
                <CardTitle>Çerez Politikası</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyLegal>
                  <p className="mb-4">
                    Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanmaktayız. 
                    Çerezler hakkında detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.
                  </p>
                  <p>
                    Çerez kullanımını tarayıcınızın ayarlarından kontrol edebilir, 
                    kabul etmemeyi veya silmeyi tercih edebilirsiniz.
                  </p>
                </TypographyLegal>
              </CardContent>
            </Card>

            {/* Değişiklikler */}
            <Card>
              <CardHeader>
                <CardTitle>Politika Değişiklikleri</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyLegal>
                  <p>
                    Bu gizlilik politikası gerektiğinde güncellenebilir. 
                    Yapılan değişiklikler web sitemizde yayımlanacak ve 
                    önemli değişiklikler için size bilgi verilecektir.
                  </p>
                </TypographyLegal>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}