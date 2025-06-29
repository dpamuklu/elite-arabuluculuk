import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = {
  variant: {
    default: "bg-primary-800 text-primary-foreground hover:bg-primary-900 focus:ring-primary-500",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive",
    outline: "border border-primary-800 bg-background text-primary-800 hover:bg-primary-50 hover:text-primary-900 focus:ring-primary-500",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-primary-500",
    ghost: "text-primary-800 hover:bg-primary-50 hover:text-primary-900 focus:ring-primary-500",
    link: "text-primary-800 underline-offset-4 hover:underline focus:ring-primary-500",
    gold: "bg-gold-500 text-white hover:bg-gold-600 focus:ring-gold-500",
    navy: "bg-navy-800 text-white hover:bg-navy-900 focus:ring-navy-500",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    xl: "h-12 rounded-lg px-10 text-lg",
    icon: "h-10 w-10",
  },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          // Base styles
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "active:scale-95 transform",
          // Variant styles
          buttonVariants.variant[variant],
          // Size styles
          buttonVariants.size[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Specific button components for common use cases
export const PrimaryButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, "variant">>(
  (props, ref) => <Button variant="default" ref={ref} {...props} />
);
PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, "variant">>(
  (props, ref) => <Button variant="outline" ref={ref} {...props} />
);
SecondaryButton.displayName = "SecondaryButton";

export const GoldButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, "variant">>(
  (props, ref) => <Button variant="gold" ref={ref} {...props} />
);
GoldButton.displayName = "GoldButton";

export const NavyButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, "variant">>(
  (props, ref) => <Button variant="navy" ref={ref} {...props} />
);
NavyButton.displayName = "NavyButton";

export { Button };