import { z } from "zod";

// Turkish phone number regex
const turkishPhoneRegex = /^(\+90|0)?[1-9][0-9]{9}$/;

// Common validation messages in Turkish
export const validationMessages = {
  required: "Bu alan zorunludur",
  email: "Geçerli bir e-posta adresi giriniz",
  phone: "Geçerli bir telefon numarası giriniz (5XXXXXXXXX)",
  minLength: (min: number) => `En az ${min} karakter olmalıdır`,
  maxLength: (max: number) => `En fazla ${max} karakter olabilir`,
  kvkk: "KVKK metnini kabul etmeniz gerekmektedir",
};

const normalizeTurkishPhone = (val: string): string => {
  if (val.startsWith("0")) {
    return val.substring(1);
  }
  if (val.startsWith("+90")) {
    return val.substring(3);
  }
  return val;
};

// Main contact form schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, validationMessages.required)
    .min(3, validationMessages.minLength(3))
    .max(100, validationMessages.maxLength(100)),
  email: z
    .string()
    .min(1, validationMessages.required)
    .email(validationMessages.email),
  phone: z
    .string()
    .min(1, validationMessages.required)
    .regex(turkishPhoneRegex, validationMessages.phone)
    .transform(normalizeTurkishPhone),
  serviceType: z
    .string()
    .min(1, validationMessages.required),
  subject: z
    .string()
    .min(1, validationMessages.required)
    .min(5, validationMessages.minLength(5))
    .max(200, validationMessages.maxLength(200)),
  message: z
    .string()
    .min(1, validationMessages.required)
    .min(20, validationMessages.minLength(20))
    .max(2000, validationMessages.maxLength(2000)),
  kvkkConsent: z
    .boolean()
    .refine((val) => val === true, validationMessages.kvkk),
});

// Quick consultation form schema
export const quickConsultationSchema = z.object({
  name: z
    .string()
    .min(1, validationMessages.required)
    .min(3, validationMessages.minLength(3)),
  phone: z
    .string()
    .min(1, validationMessages.required)
    .regex(turkishPhoneRegex, validationMessages.phone)
    .transform(normalizeTurkishPhone),
  preferredTime: z.enum(["morning", "afternoon", "evening", "anytime"], {
    required_error: validationMessages.required,
  }),
  kvkkConsent: z
    .boolean()
    .refine((val) => val === true, validationMessages.kvkk),
});

// Service inquiry form schema
export const serviceInquirySchema = z.object({
  name: z
    .string()
    .min(1, validationMessages.required)
    .min(3, validationMessages.minLength(3)),
  email: z
    .string()
    .min(1, validationMessages.required)
    .email(validationMessages.email),
  phone: z
    .string()
    .min(1, validationMessages.required)
    .regex(turkishPhoneRegex, validationMessages.phone)
    .transform(normalizeTurkishPhone),
  serviceType: z
    .string()
    .min(1, validationMessages.required),
  caseDetails: z
    .string()
    .min(1, validationMessages.required)
    .min(50, validationMessages.minLength(50))
    .max(3000, validationMessages.maxLength(3000)),
  urgency: z.enum(["normal", "urgent", "very-urgent"]),
  kvkkConsent: z
    .boolean()
    .refine((val) => val === true, validationMessages.kvkk),
});

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, validationMessages.required)
    .email(validationMessages.email),
  kvkkConsent: z
    .boolean()
    .refine((val) => val === true, validationMessages.kvkk),
});

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type QuickConsultationData = z.infer<typeof quickConsultationSchema>;
export type ServiceInquiryData = z.infer<typeof serviceInquirySchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
