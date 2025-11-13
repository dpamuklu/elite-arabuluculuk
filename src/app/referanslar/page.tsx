import { Metadata } from "next";
import Image from "next/image";
import { TypographyH1, TypographyP } from "@/components/ui/Typography";
import { Breadcrumb, generateBreadcrumbs } from "@/components/ui/Breadcrumb";

interface ReferenceLogo {
  name: string;
  src: string;
}

const referenceLogos: ReferenceLogo[] = [
  { name: "Mekotek A.Ş.", src: "/images/referanslar/mekotek.jpg" },
  { name: "Mikronix Teknoloji", src: "/images/referanslar/mikronix.jpg" },
  { name: "Napal Makine", src: "/images/referanslar/napal.jpg" },
  { name: "Kent A.Ş.", src: "/images/referanslar/kentas.jpg" },
  { name: "QCert Belgelendirme", src: "/images/referanslar/qcert.jpg" },
  { name: "Rumeli Makine", src: "/images/referanslar/rumeli.jpg" },
  { name: "Haypak", src: "/images/referanslar/haypak.jpg" },
  { name: "Hisar Yapı", src: "/images/referanslar/hisaryapi.jpg" },
  { name: "Nazeli", src: "/images/referanslar/nazeli.jpg" },
  { name: "3B Harita", src: "/images/referanslar/3bharita.jpg" },
  { name: "Akkim Kimya", src: "/images/referanslar/akkim.jpg" },
  { name: "Ako", src: "/images/referanslar/ako.jpg" },
  { name: "Alpaydın", src: "/images/referanslar/alpaydin.jpg" },
  { name: "Ares Çevre", src: "/images/referanslar/ares.jpg" },
  { name: "Arsoy Group", src: "/images/referanslar/arsoy.jpg" },
  { name: "Atasan Mühendislik", src: "/images/referanslar/atasan.jpg" },
  { name: "Cenansa", src: "/images/referanslar/cenansa.jpg" },
  { name: "Conreq", src: "/images/referanslar/conreq.jpg" },
  { name: "Data2K", src: "/images/referanslar/data2k.jpg" },
  { name: "Fah-Ler", src: "/images/referanslar/fah-ler.jpg" },
  { name: "Fega Group", src: "/images/referanslar/fega.jpg" },
  { name: "Kizilkaya Kirtasiye", src: "/images/referanslar/kizilkaya.jpg" },
  { name: "Tayf Kimya", src: "/images/referanslar/tayf.jpg" },
  { name: "Uyumkent", src: "/images/referanslar/uyumkent.jpg" },
];

export const metadata: Metadata = {
  title: "Referanslar - Elite Arabuluculuk",
  description:
    "Bize güvenen iş ortaklarımız arasında sanayi, teknoloji ve hizmet sektörlerinden şirketler yer alıyor.",
  keywords: [
    "elite arabuluculuk referansları",
    "kurumsal arabuluculuk",
    "müşteri portföyü",
  ],
  openGraph: {
    title: "Elite Arabuluculuk Referansları",
    description:
      "Sanayi kuruluşlarından teknoloji şirketlerine kadar farklı ölçek ve sektörlerden işletmeler bize güveniyor.",
  },
};

export default function ReferanslarPage() {
  const breadcrumbs = generateBreadcrumbs("/referanslar");

  return (
    <div>
      <div className="container py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <TypographyH1 className="mb-4">Bize Güvenen İş Ortakları</TypographyH1>
            <TypographyP className="text-lg">
              Referanslarımız arasında sanayi kuruluşlarından teknoloji şirketlerine kadar farklı ölçek ve sektörlerden işletmeler bulunuyor.
            </TypographyP>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {referenceLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center rounded-xl border border-border bg-navy-50/40 py-6 px-4"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logosu`}
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
