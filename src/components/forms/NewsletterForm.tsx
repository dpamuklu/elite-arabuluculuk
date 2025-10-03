"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { newsletterSchema, type NewsletterData } from "@/lib/validations/contact";
import { subscribeNewsletter } from "@/app/actions/contact";
import { Input } from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      kvkkConsent: false,
    },
  });

  const onSubmit = async (data: NewsletterData) => {
    setIsSubmitting(true);
    
    try {
      const result = await subscribeNewsletter(data);
      
      if (result.success) {
        toast.success("Bültenimize başarıyla abone oldunuz!");
        reset();
      } else {
        toast.error(result.error || "Bir hata oluştu. Lütfen tekrar deneyiniz.");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          type="email"
          placeholder="E-posta adresiniz"
          error={errors.email?.message}
          {...register("email")}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
        />
      </div>

      <div>
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
            {...register("kvkkConsent")}
          />
          <span className="text-xs text-white/90">
            <a href="/kvkk" target="_blank" className="underline hover:text-white">
              KVKK Aydınlatma Metni
            </a>
            &apos;ni kabul ediyorum.
          </span>
        </label>
        {errors.kvkkConsent && (
          <p className="mt-1 text-xs text-red-300">{errors.kvkkConsent.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        variant="secondary"
        size="md" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Abone Olunuyor...
          </>
        ) : (
          <>
            <Mail className="w-4 h-4 mr-2" />
            Abone Ol
          </>
        )}
      </Button>
    </form>
  );
}
