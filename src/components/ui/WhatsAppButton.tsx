"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./Button";

interface WhatsAppButtonProps {
  message?: string;
  phoneNumber?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "gold" | "outline";
  children?: React.ReactNode;
}

export function WhatsAppButton({ 
  message = "Merhaba, Elite Arabuluculuk hizmetleri hakkında bilgi almak istiyorum.",
  phoneNumber = "905551234567", // Replace with actual number
  className = "",
  size = "md",
  variant = "default",
  children
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size={size}
      variant={variant}
      className={`${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children || "WhatsApp ile İletişim"}
    </Button>
  );
}

interface FloatingWhatsAppProps {
  message?: string;
  phoneNumber?: string;
}

export function FloatingWhatsApp({ 
  message = "Merhaba, Elite Arabuluculuk hizmetleri hakkında bilgi almak istiyorum.",
  phoneNumber = "905551234567" // Replace with actual number
}: FloatingWhatsAppProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 group"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        WhatsApp ile yazın
      </span>
    </button>
  );
}