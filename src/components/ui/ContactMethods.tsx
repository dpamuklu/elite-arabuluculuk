import * as React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { ClickToCallButton } from "./PhoneLink";
import { WhatsAppButton } from "./WhatsAppButton";

// Contact Method Item Component
interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  description?: string;
  className?: string;
}

const ContactMethod = React.forwardRef<HTMLDivElement, ContactMethodProps>(
  ({ icon, title, value, href, description, className }, ref) => (
    <div ref={ref} className={cn("flex items-start space-x-4", className)}>
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-navy-900 turkish-text">{title}</h3>
        {href ? (
          <a
            href={href}
            className="text-primary-700 hover:text-primary-800 transition-colors turkish-text"
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {value}
          </a>
        ) : (
          <p className="text-navy-700 turkish-text">{value}</p>
        )}
        {description && (
          <p className="text-sm text-navy-600 mt-1 turkish-text">{description}</p>
        )}
      </div>
    </div>
  )
);
ContactMethod.displayName = "ContactMethod";

// Contact Methods Grid Component
interface ContactMethodsGridProps {
  className?: string;
}

const ContactMethodsGrid = React.forwardRef<HTMLDivElement, ContactMethodsGridProps>(
  ({ className }, ref) => (
    <div ref={ref} className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      <ContactMethod
        icon={<Phone className="w-6 h-6" />}
        title="Telefon"
        value="+90 (555) 123 45 67"
        href="tel:+905551234567"
        description="Haftanın 7 günü, 09:00 - 18:00"
      />
      
      <ContactMethod
        icon={<Mail className="w-6 h-6" />}
        title="E-posta"
        value="info@elitearabulucu.com"
        href="mailto:info@elitearabulucu.com"
        description="24 saat içinde yanıt garantisi"
      />
      
      <ContactMethod
        icon={<MessageCircle className="w-6 h-6" />}
        title="WhatsApp"
        value="+90 (555) 123 45 67"
        href="https://wa.me/905551234567?text=Merhaba, Elite Arabuluculuk hizmetleri hakkında bilgi almak istiyorum."
        description="Hızlı mesajlaşma için"
      />
      
      <ContactMethod
        icon={<MapPin className="w-6 h-6" />}
        title="Adres"
        value="İstanbul, Türkiye"
        description="Merkezi konum"
      />
      
      <ContactMethod
        icon={<Clock className="w-6 h-6" />}
        title="Çalışma Saatleri"
        value="09:00 - 18:00"
        description="Pazartesi - Cuma"
      />
      
      <ContactMethod
        icon={<Calendar className="w-6 h-6" />}
        title="Randevu"
        value="Online Randevu Al"
        href="/randevu"
        description="Uygun saatleri görün"
      />
    </div>
  )
);
ContactMethodsGrid.displayName = "ContactMethodsGrid";

// Quick Contact Card Component
interface QuickContactCardProps {
  className?: string;
}

const QuickContactCard = React.forwardRef<HTMLDivElement, QuickContactCardProps>(
  ({ className }, ref) => (
    <Card ref={ref} className={cn("bg-gradient-to-br from-primary-600 to-primary-800 text-white", className)}>
      <CardHeader>
        <CardTitle className="text-white">Hemen İletişime Geçin</CardTitle>
        <p className="text-primary-100 turkish-text">
          Arabuluculuk konusunda ücretsiz ön görüşme için bize ulaşın.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <ClickToCallButton
            phoneNumber="905551234567"
            variant="white"
            size="lg"
            className="w-full sm:w-auto"
          >
            Hemen Ara
          </ClickToCallButton>
          
          <WhatsAppButton
            phoneNumber="905551234567"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-800"
            message="Merhaba, Elite Arabuluculuk hizmetleri hakkında ücretsiz danışmanlık almak istiyorum."
          >
            WhatsApp
          </WhatsAppButton>
        </div>
        
        <div className="pt-4 border-t border-primary-500">
          <p className="text-sm text-primary-100 turkish-text">
            <strong>Acil Durumlar:</strong> 7/24 erişilebilir acil hat
          </p>
        </div>
      </CardContent>
    </Card>
  )
);
QuickContactCard.displayName = "QuickContactCard";

// Contact Information Card Component
interface ContactInfoCardProps {
  title: string;
  description: string;
  contactMethods: Array<{
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
  }>;
  className?: string;
}

const ContactInfoCard = React.forwardRef<HTMLDivElement, ContactInfoCardProps>(
  ({ title, description, contactMethods, className }, ref) => (
    <Card ref={ref} className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-navy-600 turkish-text">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="text-primary-700">{method.icon}</div>
            <div>
              <span className="text-sm text-navy-600 turkish-text">{method.label}:</span>
              {method.href ? (
                <a
                  href={method.href}
                  className="ml-2 text-primary-700 hover:text-primary-800 transition-colors turkish-text"
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {method.value}
                </a>
              ) : (
                <span className="ml-2 text-navy-900 turkish-text">{method.value}</span>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
);
ContactInfoCard.displayName = "ContactInfoCard";

// Emergency Contact Component
interface EmergencyContactProps {
  className?: string;
}

const EmergencyContact = React.forwardRef<HTMLDivElement, EmergencyContactProps>(
  ({ className }, ref) => (
    <div ref={ref} className={cn(
      "bg-red-50 border border-red-200 rounded-lg p-6",
      className
    )}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-red-600" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-red-900 turkish-text">
            Acil Arabuluculuk Hattı
          </h3>
          <p className="text-red-700 mt-1 turkish-text">
            Acil arabuluculuk gerektiren durumlar için 7/24 erişilebilir hatımız.
          </p>
          <div className="mt-4">
            <ClickToCallButton
              phoneNumber="905551234567"
              className="bg-red-600 hover:bg-red-700 text-white"
              size="sm"
            >
              Acil Hat: +90 (555) 123 45 67
            </ClickToCallButton>
          </div>
        </div>
      </div>
    </div>
  )
);
EmergencyContact.displayName = "EmergencyContact";

export {
  ContactMethod,
  ContactMethodsGrid,
  QuickContactCard,
  ContactInfoCard,
  EmergencyContact,
};