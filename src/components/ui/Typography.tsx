import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn(
      "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl turkish-text",
      "text-navy-900",
      className
    )}>
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn(
      "scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl turkish-text",
      "text-navy-900",
      className
    )}>
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl turkish-text",
      "text-navy-900",
      className
    )}>
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl turkish-text",
      "text-navy-900",
      className
    )}>
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "leading-7 text-navy-700 turkish-text",
      "[&:not(:first-child)]:mt-6",
      className
    )}>
      {children}
    </p>
  );
}

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-xl text-muted-foreground leading-7 turkish-text",
      "text-navy-600",
      className
    )}>
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <div className={cn(
      "text-lg font-semibold text-navy-900 turkish-text",
      className
    )}>
      {children}
    </div>
  );
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <small className={cn(
      "text-sm font-medium leading-none text-navy-600 turkish-text",
      className
    )}>
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-sm text-muted-foreground text-navy-500 turkish-text",
      className
    )}>
      {children}
    </p>
  );
}

export function TypographyLegal({ children, className }: TypographyProps) {
  return (
    <div className={cn(
      "legal-text text-navy-800 leading-relaxed",
      "prose prose-sm max-w-none",
      className
    )}>
      {children}
    </div>
  );
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
  return (
    <blockquote className={cn(
      "mt-6 border-l-4 border-gold-500 pl-6 italic text-navy-700 turkish-text",
      "bg-gold-50 py-4 rounded-r-lg",
      className
    )}>
      {children}
    </blockquote>
  );
}

export function TypographyList({ children, className }: TypographyProps) {
  return (
    <ul className={cn(
      "my-6 ml-6 list-disc [&>li]:mt-2 text-navy-700 turkish-text",
      className
    )}>
      {children}
    </ul>
  );
}

export function TypographyCode({ children, className }: TypographyProps) {
  return (
    <code className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      "bg-navy-100 text-navy-800",
      className
    )}>
      {children}
    </code>
  );
}