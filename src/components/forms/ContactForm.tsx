"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";
import { Input, Textarea } from "@/components/ui/Form";
import { GoldButton } from "@/components/ui/Button";

const serviceOptions = [
  { value: "ticari", label: "Ticari Arabuluculuk" },
  { value: "aile", label: "Aile Arabuluculuğu" },
  { value: "is-hukuku", label: "İş Hukuku Arabuluculuğu" },
  { value: "tuketici", label: "Tüketici Arabuluculuğu" },
  { value: "diger", label: "Diğer" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      kvkkConsent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(data);
      
      if (result.success) {
        toast.success("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
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
            Hizmet Türü
          </label>
          <select
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            {...register("serviceType")}
          >
            <option value="">Seçiniz</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-destructive">{errors.serviceType.message}</p>
          )}
        </div>
      </div>

      <div>
        <Input
          label="Konu"
          placeholder="Mesajınızın konusu"
          error={errors.subject?.message}
          {...register("subject")}
        />
      </div>

      <div>
        <Textarea
          label="Mesajınız"
          placeholder="Uyuşmazlığınız hakkında kısaca bilgi veriniz..."
          rows={6}
          error={errors.message?.message}
          {...register("message")}
        />
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

      <GoldButton 
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
            <Send className="w-5 h-5 mr-2" />
            Mesaj Gönder
          </>
        )}
      </GoldButton>
    </form>
  );
}