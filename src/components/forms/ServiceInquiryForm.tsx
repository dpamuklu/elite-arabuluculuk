"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { serviceInquirySchema, type ServiceInquiryData } from "@/lib/validations/contact";
import { submitServiceInquiry } from "@/app/actions/contact";
import { Input, Textarea } from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";

interface ServiceInquiryFormProps {
  serviceType?: string;
}

const urgencyOptions = [
  { value: "normal", label: "Normal (1-2 hafta içinde)" },
  { value: "urgent", label: "Acil (3-5 gün içinde)" },
  { value: "very-urgent", label: "Çok Acil (24 saat içinde)" },
];

export function ServiceInquiryForm({ serviceType = "" }: ServiceInquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ServiceInquiryData>({
    resolver: zodResolver(serviceInquirySchema),
    defaultValues: {
      serviceType,
      urgency: "normal",
      kvkkConsent: false,
    },
  });

  const onSubmit = async (data: ServiceInquiryData) => {
    setIsSubmitting(true);
    
    try {
      const result = await submitServiceInquiry(data);
      
      if (result.success) {
        toast.success("Başvurunuz alındı! Size en kısa sürede detaylı bilgi vereceğiz.");
        reset();
      } else {
        toast.error(result.error || "Bir hata oluştu. Lütfen tekrar deneyiniz.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            label="Ad Soyad"
            placeholder="Adınız ve soyadınız"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>
        
        <div>
          <Input
            type="email"
            label="E-posta"
            placeholder="ornek@email.com"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            type="tel"
            label="Telefon"
            placeholder="5XX XXX XX XX"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Aciliyet Durumu
          </label>
          <select
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            {...register("urgency")}
          >
            {urgencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.urgency && (
            <p className="mt-1 text-sm text-destructive">{errors.urgency.message}</p>
          )}
        </div>
      </div>

      {!serviceType && (
        <input type="hidden" {...register("serviceType")} value={serviceType} />
      )}

      <div>
        <Textarea
          label="Vaka Detayları"
          placeholder="Uyuşmazlığınızın detaylarını açıklayınız. Taraflar, konu, süreç hakkında bilgi veriniz..."
          rows={8}
          error={errors.caseDetails?.message}
          {...register("caseDetails")}
        />
        <p className="mt-1 text-sm text-navy-600">
          Lütfen en az 50 karakter giriniz. Detaylı bilgi, size daha iyi yardımcı olmamızı sağlar.
        </p>
      </div>

      <div>
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
            {...register("kvkkConsent")}
          />
          <span className="text-sm text-navy-700 turkish-text">
            <a href="/gizlilik-politikasi" target="_blank" className="text-primary hover:underline">
              KVKK Aydınlatma Metni
            </a>
            &apos;ni okudum ve kişisel verilerimin işlenmesini kabul ediyorum.
          </span>
        </label>
        {errors.kvkkConsent && (
          <p className="mt-1 text-sm text-destructive">{errors.kvkkConsent.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            <FileText className="w-5 h-5 mr-2" />
            Başvuru Yap
          </>
        )}
      </Button>
    </form>
  );
}