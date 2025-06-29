"use client";

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneLinkProps {
  phoneNumber: string;
  displayNumber?: string;
  className?: string;
  showIcon?: boolean;
  iconClassName?: string;
}

export function PhoneLink({ 
  phoneNumber, 
  displayNumber,
  className = "",
  showIcon = true,
  iconClassName = "w-4 h-4"
}: PhoneLinkProps) {
  // Clean phone number for tel: link
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const telNumber = cleanNumber.startsWith("90") ? `+${cleanNumber}` : `+90${cleanNumber}`;
  
  // Format display number if not provided
  const formattedDisplay = displayNumber || formatPhoneNumber(phoneNumber);
  
  return (
    <a
      href={`tel:${telNumber}`}
      className={cn(
        "inline-flex items-center gap-2 text-primary hover:text-primary-700 transition-colors",
        className
      )}
    >
      {showIcon && <Phone className={iconClassName} />}
      <span>{formattedDisplay}</span>
    </a>
  );
}

interface ClickToCallButtonProps {
  phoneNumber: string;
  variant?: "primary" | "gold" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export function ClickToCallButton({ 
  phoneNumber,
  variant = "primary",
  size = "md",
  className = "",
  children
}: ClickToCallButtonProps) {
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const telNumber = cleanNumber.startsWith("90") ? `+${cleanNumber}` : `+90${cleanNumber}`;
  
  const baseStyles = "inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-700 focus:ring-primary",
    gold: "bg-gold-500 text-white hover:bg-gold-600 focus:ring-gold-500",
    white: "bg-white text-primary hover:bg-gray-50 focus:ring-white"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  
  return (
    <a
      href={`tel:${telNumber}`}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
    >
      <Phone className={size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5"} />
      {children || "Hemen Ara"}
    </a>
  );
}

// Helper function to format phone numbers
function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  
  if (cleaned.startsWith("90")) {
    // +90 XXX XXX XX XX
    const number = cleaned.substring(2);
    return `+90 ${number.substring(0, 3)} ${number.substring(3, 6)} ${number.substring(6, 8)} ${number.substring(8, 10)}`;
  } else if (cleaned.startsWith("0")) {
    // 0XXX XXX XX XX
    const number = cleaned.substring(1);
    return `0${number.substring(0, 3)} ${number.substring(3, 6)} ${number.substring(6, 8)} ${number.substring(8, 10)}`;
  } else {
    // XXX XXX XX XX
    return `${cleaned.substring(0, 3)} ${cleaned.substring(3, 6)} ${cleaned.substring(6, 8)} ${cleaned.substring(8, 10)}`;
  }
}