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
  newsletterSchema
} from "@/lib/validations/contact";

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
    
    // Format phone number
    const formattedPhone = `+90${validatedData.phone}`;
    
    // TODO: Send email via Resend
    console.log("Contact form submission:", {
      ...validatedData,
      phone: formattedPhone,
      submittedAt: new Date().toISOString(),
      ip: clientIp,
    });
    
    // TODO: Save to database
    
    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    
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
    const formattedPhone = `+90${validatedData.phone}`;
    
    // TODO: Send email notification
    console.log("Quick consultation submission:", {
      ...validatedData,
      phone: formattedPhone,
      submittedAt: new Date().toISOString(),
      ip: clientIp,
    });
    
    // TODO: Save to database
    // TODO: Add to CRM for callback
    
    return { success: true };
  } catch (error) {
    console.error("Quick consultation error:", error);
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
    const validatedData = serviceInquirySchema.parse(data);
    
    // Check rate limit
    const clientIp = await getClientIp();
    if (!checkRateLimit(clientIp)) {
      return { 
        success: false, 
        error: "Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyiniz." 
      };
    }
    
    // Format phone number
    const formattedPhone = `+90${validatedData.phone}`;
    
    // Determine priority based on urgency
    const priority = {
      "very-urgent": "HIGH",
      "urgent": "MEDIUM",
      "normal": "NORMAL"
    }[validatedData.urgency];
    
    // TODO: Send email with priority flag
    console.log("Service inquiry submission:", {
      ...validatedData,
      phone: formattedPhone,
      priority,
      submittedAt: new Date().toISOString(),
      ip: clientIp,
    });
    
    // TODO: Save to database
    // TODO: Trigger notification for urgent cases
    
    return { success: true };
  } catch (error) {
    console.error("Service inquiry error:", error);
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
    const validatedData = newsletterSchema.parse(data);
    
    // Check rate limit
    const clientIp = await getClientIp();
    if (!checkRateLimit(clientIp)) {
      return { 
        success: false, 
        error: "Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyiniz." 
      };
    }
    
    // TODO: Add to mailing list (Resend, Mailchimp, etc.)
    console.log("Newsletter subscription:", {
      ...validatedData,
      subscribedAt: new Date().toISOString(),
      ip: clientIp,
    });
    
    // TODO: Send welcome email
    // TODO: Save to database
    
    return { success: true };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    
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