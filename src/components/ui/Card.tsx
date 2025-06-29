import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-legal",
      "bg-white border-border card-shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-navy-900 turkish-text",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground text-navy-600 turkish-text", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Service Card Component
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  className?: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ title, description, icon, features, className }, ref) => (
    <Card ref={ref} className={cn("h-full", className)}>
      <CardHeader>
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
            {icon}
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      {features && (
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-navy-700 turkish-text">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )
);
ServiceCard.displayName = "ServiceCard";

// Testimonial Card Component
interface TestimonialCardProps {
  content: string;
  author: string;
  role?: string;
  company?: string;
  rating?: number;
  className?: string;
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ content, author, role, company, rating, className }, ref) => (
    <Card ref={ref} className={cn("h-full", className)}>
      <CardHeader>
        {rating && (
          <div className="flex space-x-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={cn(
                  "w-5 h-5",
                  i < rating ? "text-gold-500" : "text-gray-300"
                )}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        )}
        <CardDescription className="text-base leading-relaxed italic text-navy-700">
          "{content}"
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-start space-y-1">
        <p className="font-semibold text-navy-900 turkish-text">{author}</p>
        {role && (
          <p className="text-sm text-navy-600 turkish-text">
            {role}
            {company && ` - ${company}`}
          </p>
        )}
      </CardFooter>
    </Card>
  )
);
TestimonialCard.displayName = "TestimonialCard";

// Feature Card Component
interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ title, description, icon, className }, ref) => (
    <Card ref={ref} className={cn("text-center p-8", className)}>
      {icon && (
        <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white mb-6">
          {icon}
        </div>
      )}
      <CardTitle className="text-xl mb-4">{title}</CardTitle>
      <CardDescription className="text-base leading-relaxed">
        {description}
      </CardDescription>
    </Card>
  )
);
FeatureCard.displayName = "FeatureCard";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  ServiceCard,
  TestimonialCard,
  FeatureCard,
};