"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { quickConsultationSchema, type QuickConsultationData } from "@/lib/validations/contact";
import { submitQuickConsultation } from "@/app/actions/contact";
import { Input } from "@/components/ui/Form";
import { PrimaryButton } from "@/components/ui/Button";

const timeOptions = [
  { value: "morning", label: "Sabah (09:00 - 12:00)" },
  { value: "afternoon", label: "Öğleden Sonra (12:00 - 17:00)" },
  { value: "evening", label: "Akşam (17:00 - 19:00)" },
  { value: "anytime", label: "Herhangi Bir Zaman" },
];

export function QuickConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuickConsultationData>({
    resolver: zodResolver(quickConsultationSchema),
    defaultValues: {
      kvkkConsent: false,
    },
  });

  const onSubmit = async (data: QuickConsultationData) => {
    setIsSubmitting(true);
    
    try {
      const result = await submitQuickConsultation(data);
      
      if (result.success) {
        toast.success("Talebiniz alındı! Size en kısa sürede dönüş yapacağız.");
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          type="tel"
          label="Telefon"
          placeholder="5XX XXX XX XX"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-700 mb-2">
          Aranmak İstediğiniz Zaman
        </label>
        <select
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          {...register("preferredTime")}
        >
          <option value="">Seçiniz</option>
          {timeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.preferredTime && (
          <p className="mt-1 text-sm text-destructive">{errors.preferredTime.message}</p>
        )}
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
            &apos;ni kabul ediyorum.
          </span>
        </label>
        {errors.kvkkConsent && (
          <p className="mt-1 text-sm text-destructive">{errors.kvkkConsent.message}</p>
        )}
      </div>

      <PrimaryButton 
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
            <Phone className="w-5 h-5 mr-2" />
            Hemen Aranmak İstiyorum
          </>
        )}
      </PrimaryButton>
    </form>
  );
}