import type { QuickConsultationData } from "@/lib/validations/contact";
import { NotificationError } from "@/lib/notifications/errors";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

type PreferredTime = QuickConsultationData["preferredTime"];

const preferredTimeLabels: Record<PreferredTime, string> = {
  morning: "Sabah (09:00 - 12:00)",
  afternoon: "Öğleden Sonra (12:00 - 17:00)",
  evening: "Akşam (17:00 - 19:00)",
  anytime: "Herhangi Bir Zaman",
};

export interface QuickConsultationNotification {
  name: string;
  phone: string;
  preferredTime: PreferredTime;
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

function buildHtmlContent(payload: QuickConsultationNotification): string {
  const submittedAt = formatSubmissionDate(payload.submittedAt);
  const preferredTimeLabel = preferredTimeLabels[payload.preferredTime];

  return `
    <div style="font-family: 'Inter', Arial, sans-serif; color: #0f172a;">
      <h2>Yeni Hızlı Görüşme Talebi</h2>
      <p><strong>Ad Soyad:</strong> ${payload.name}</p>
      <p><strong>Telefon:</strong> ${payload.phone}</p>
      <p><strong>Tercih Edilen Zaman:</strong> ${preferredTimeLabel}</p>
      <p><strong>KVKK Onayı:</strong> ${
        payload.kvkkConsent ? "Onaylandı" : "Onaylanmadı"
      }</p>
      <hr />
      <p><strong>Gönderim:</strong> ${submittedAt}</p>
      <p><strong>IP:</strong> ${payload.ip}</p>
    </div>
  `;
}

function buildTextContent(payload: QuickConsultationNotification): string {
  const submittedAt = formatSubmissionDate(payload.submittedAt);
  const preferredTimeLabel = preferredTimeLabels[payload.preferredTime];

  return [
    "Yeni Hızlı Görüşme Talebi",
    `Ad Soyad: ${payload.name}`,
    `Telefon: ${payload.phone}`,
    `Tercih Edilen Zaman: ${preferredTimeLabel}`,
    `KVKK Onayı: ${payload.kvkkConsent ? "Evet" : "Hayır"}`,
    `Gönderim: ${submittedAt}`,
    `IP: ${payload.ip}`,
  ].join("\n");
}

export async function sendQuickConsultationNotification(
  payload: QuickConsultationNotification
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail =
    process.env.QUICK_CONSULTATION_INBOX ||
    process.env.CONTACT_NOTIFICATION_EMAIL;
  const fromEmail =
    process.env.NOTIFICATIONS_FROM_EMAIL ||
    "Elite Arabuluculuk <info@elitearabuluculuk.com>";

  if (!apiKey) {
    throw new NotificationError("RESEND_API_KEY is not configured.");
  }

  if (!toEmail) {
    throw new NotificationError(
      "Quick consultation inbox email is not configured."
    );
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
        subject: `Yeni Hızlı Görüşme Talebi - ${payload.name}`,
        html: buildHtmlContent(payload),
        text: buildTextContent(payload),
        tags: [
          { name: "category", value: "quick-consultation" },
          { name: "preferredTime", value: payload.preferredTime },
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

    throw new NotificationError("Failed to send quick consultation email.", {
      cause: error,
    });
  }
}
