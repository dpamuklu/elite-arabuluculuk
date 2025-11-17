"use server";

import { headers } from "next/headers";
import {
  ContactFormData,
  QuickConsultationData,
  ServiceInquiryData,
  NewsletterData,
  contactFormSchema,
  quickConsultationSchema,
  serviceInquirySchema,
  newsletterSchema,
} from "@/lib/validations/contact";
import { sendQuickConsultationNotification } from "@/lib/notifications/quick-consultation";
import { sendContactNotification } from "@/lib/notifications/contact";
import { NotificationError } from "@/lib/notifications/errors";

// Rate limiting helper
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  
  // Remove old requests
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

// Get client IP
async function getClientIp(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  
  if (realIp) {
    return realIp.trim();
  }
  
  return "unknown";
}

function formatPhoneNumber(phone: string): string {
  const trimmed = phone.replace(/\s+/g, "");
  if (trimmed.startsWith("+90")) {
    return trimmed;
  }
  if (trimmed.startsWith("90")) {
    return `+${trimmed}`;
  }
  if (trimmed.startsWith("0")) {
    return `+90${trimmed.substring(1)}`;
  }
  return `+90${trimmed}`;
}

function logActionError(context: string, error: unknown) {
  if (error instanceof Error) {
    console.error(`${context}: ${error.message}`);
    return;
  }

  console.error(context, error);
}

// Contact form submission
export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate data
    const validatedData = contactFormSchema.parse(data);
    
    // Check rate limit
    const clientIp = await getClientIp();
    if (!checkRateLimit(clientIp)) {
      return { 
        success: false, 
        error: "Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyiniz." 
      };
    }
    
    const formattedPhone = formatPhoneNumber(validatedData.phone);
    
    await sendContactNotification({
      name: validatedData.name,
      email: validatedData.email,
      phone: formattedPhone,
      serviceType: validatedData.serviceType,
      subject: validatedData.subject,
      message: validatedData.message,
      kvkkConsent: validatedData.kvkkConsent,
      submittedAt: new Date().toISOString(),
      ip: clientIp,
    });
    
    // TODO: Save to database
    
    return { success: true };
  } catch (error) {
    if (error instanceof NotificationError) {
      logActionError("Contact form notification error", error);
      return { 
        success: false, 
        error: "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz." 
      };
    }
    
    logActionError("Contact form error", error);
    
    if (error instanceof Error) {
      return { 
        success: false, 
        error: "Form doğrulama hatası. Lütfen bilgilerinizi kontrol ediniz." 
      };
    }
    
    return { 
      success: false, 
      error: "Beklenmeyen bir hata oluştu." 
    };
  }
}

// Quick consultation submission
export async function submitQuickConsultation(data: QuickConsultationData) {
  try {
    // Validate data
    const validatedData = quickConsultationSchema.parse(data);
    
    // Check rate limit
    const clientIp = await getClientIp();
    if (!checkRateLimit(clientIp)) {
      return { 
        success: false, 
        error: "Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyiniz." 
      };
    }
    
    // Format phone number
    const formattedPhone = formatPhoneNumber(validatedData.phone);
    
    await sendQuickConsultationNotification({
      name: validatedData.name,
      phone: formattedPhone,
      preferredTime: validatedData.preferredTime,
      kvkkConsent: validatedData.kvkkConsent,
      submittedAt: new Date().toISOString(),
      ip: clientIp,
    });
    
    // TODO: Save to database
    // TODO: Add to CRM for callback
    
    return { success: true };
  } catch (error) {
    if (error instanceof NotificationError) {
      logActionError("Quick consultation notification error", error);
    } else {
      logActionError("Quick consultation error", error);
    }
    return { 
      success: false, 
      error: "Form gönderilirken bir hata oluştu." 
    };
  }
}

// Service inquiry submission
export async function submitServiceInquiry(data: ServiceInquiryData) {
  try {
    // Validate data
    serviceInquirySchema.parse(data);
    
    // Check rate limit
    const clientIp = await getClientIp();
    if (!checkRateLimit(clientIp)) {
      return { 
        success: false, 
        error: "Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyiniz." 
      };
    }
    
    // TODO: Send email with priority flag
    // TODO: Save to database
    // TODO: Trigger notification for urgent cases
    
    return { success: true };
  } catch (error) {
    logActionError("Service inquiry error", error);
    return { 
      success: false, 
      error: "Başvuru gönderilirken bir hata oluştu." 
    };
  }
}

// Newsletter subscription
export async function subscribeNewsletter(data: NewsletterData) {
  try {
    // Validate data
    newsletterSchema.parse(data);
    
    // Check rate limit
    const clientIp = await getClientIp();
    if (!checkRateLimit(clientIp)) {
      return { 
        success: false, 
        error: "Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyiniz." 
      };
    }
    
    // TODO: Add to mailing list (Resend, Mailchimp, etc.)
    // TODO: Send welcome email
    // TODO: Save to database
    
    return { success: true };
  } catch (error) {
    logActionError("Newsletter subscription error", error);
    
    if (error instanceof Error && error.message.includes("already subscribed")) {
      return { 
        success: false, 
        error: "Bu e-posta adresi zaten kayıtlı." 
      };
    }
    
    return { 
      success: false, 
      error: "Abonelik işlemi sırasında bir hata oluştu." 
    };
  }
}
