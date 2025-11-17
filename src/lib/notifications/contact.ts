import { NotificationError } from "@/lib/notifications/errors";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const serviceTypeLabels: Record<string, string> = {
  ticari: "Ticari Arabuluculuk",
  kira: "Kira Arabuluculuğu",
  "is-hukuku": "İş Hukuku Arabuluculuğu",
  tuketici: "Tüketici Arabuluculuğu",
  diger: "Diğer",
};

export interface ContactNotificationPayload {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  subject: string;
  message: string;
  kvkkConsent: boolean;
  submittedAt: string;
  ip: string;
}

function formatSubmissionDate(timestamp: string): string {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "Europe/Istanbul",
    }).format(new Date(timestamp));
  } catch {
    return timestamp;
  }
}

function formatServiceType(value: string): string {
  return serviceTypeLabels[value] || value;
}

function formatMessageHtml(message: string): string {
  const escaped = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/\n/g, "<br />");
}

function buildHtmlContent(payload: ContactNotificationPayload): string {
  const submittedAt = formatSubmissionDate(payload.submittedAt);
  const serviceTypeLabel = formatServiceType(payload.serviceType);

  return `
    <div style="font-family: 'Inter', Arial, sans-serif; color: #0f172a;">
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>Ad Soyad:</strong> ${payload.name}</p>
      <p><strong>E-posta:</strong> ${payload.email}</p>
      <p><strong>Telefon:</strong> ${payload.phone}</p>
      <p><strong>Hizmet Türü:</strong> ${serviceTypeLabel}</p>
      <p><strong>Konu:</strong> ${payload.subject}</p>
      <p><strong>Mesaj:</strong></p>
      <div style="background:#f8fafc;padding:16px;border-radius:8px;margin-bottom:16px;white-space:pre-wrap;">
        ${formatMessageHtml(payload.message)}
      </div>
      <p><strong>KVKK Onayı:</strong> ${
        payload.kvkkConsent ? "Onaylandı" : "Onaylanmadı"
      }</p>
      <hr />
      <p><strong>Gönderim:</strong> ${submittedAt}</p>
      <p><strong>IP:</strong> ${payload.ip}</p>
    </div>
  `;
}

function buildTextContent(payload: ContactNotificationPayload): string {
  const submittedAt = formatSubmissionDate(payload.submittedAt);
  const serviceTypeLabel = formatServiceType(payload.serviceType);

  return [
    "Yeni İletişim Formu Mesajı",
    `Ad Soyad: ${payload.name}`,
    `E-posta: ${payload.email}`,
    `Telefon: ${payload.phone}`,
    `Hizmet Türü: ${serviceTypeLabel}`,
    `Konu: ${payload.subject}`,
    "",
    "Mesaj:",
    payload.message,
    "",
    `KVKK Onayı: ${payload.kvkkConsent ? "Evet" : "Hayır"}`,
    `Gönderim: ${submittedAt}`,
    `IP: ${payload.ip}`,
  ].join("\n");
}

export async function sendContactNotification(
  payload: ContactNotificationPayload
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL;
  const fromEmail =
    process.env.NOTIFICATIONS_FROM_EMAIL ||
    "Elite Arabuluculuk <notifications@elitearabuluculuk.com>";

  if (!apiKey) {
    throw new NotificationError("RESEND_API_KEY is not configured.");
  }

  if (!toEmail) {
    throw new NotificationError("CONTACT_NOTIFICATION_EMAIL is not configured.");
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Yeni İletişim Formu Mesajı - ${payload.name}`,
        html: buildHtmlContent(payload),
        text: buildTextContent(payload),
        reply_to: payload.email,
        tags: [
          { name: "category", value: "contact-form" },
          { name: "serviceType", value: payload.serviceType },
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new NotificationError(
        `Resend API error: ${response.status} ${response.statusText}`,
        { cause: errorBody }
      );
    }
  } catch (error) {
    if (error instanceof NotificationError) {
      throw error;
    }

    throw new NotificationError("Failed to send contact form email.", {
      cause: error,
    });
  }
}
