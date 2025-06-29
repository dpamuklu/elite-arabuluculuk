export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: string[];
  duration: string;
  cost: string;
  href: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  duration?: string;
  details: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  experience: string;
  specializations: string[];
  education: string[];
  languages: string[];
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  content: string;
  rating: number;
  serviceType: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  image: string;
  readTime: number;
  featured: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface ContactInfo {
  address: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  };
  phone: {
    primary: string;
    emergency: string;
    whatsapp: string;
  };
  email: {
    general: string;
    support: string;
    legal: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    emergency: string;
  };
}

export interface Breadcrumb {
  label: string;
  href: string;
  current?: boolean;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  features?: string[];
}

export interface StatsSection {
  title: string;
  stats: Array<{
    label: string;
    value: string;
    description: string;
    icon: string;
  }>;
}

export interface LegalDocument {
  id: string;
  title: string;
  slug: string;
  content: string;
  lastUpdated: string;
  version: string;
  category: 'privacy' | 'terms' | 'cookies' | 'kvkk';
}