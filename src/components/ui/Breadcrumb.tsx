import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Breadcrumb as BreadcrumbType } from "@/types/content";

interface BreadcrumbProps {
  items: BreadcrumbType[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex items-center space-x-2 text-sm text-navy-600", className)}
    >
      <Link 
        href="/" 
        className="flex items-center text-navy-600 hover:text-primary-700 transition-colors"
        aria-label="Ana Sayfa"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-navy-400" />
          {item.current ? (
            <span 
              className="text-navy-900 font-medium turkish-text"
              aria-current="page"
            >
              {item.label}
            </span>
          ) : (
            <Link 
              href={item.href}
              className="text-navy-600 hover:text-primary-700 transition-colors turkish-text"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

export function generateBreadcrumbs(pathname: string): BreadcrumbType[] {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbType[] = [];

  const pathMap: Record<string, string> = {
    'hizmetler': 'Hizmetlerimiz',
    'hakkimizda': 'Hakkımızda',
    'surecimiz': 'Sürecimiz',
    'iletisim': 'İletişim',
    'blog': 'Blog',
    'gizlilik': 'Gizlilik Politikası',
    'kullanim-kosullari': 'Kullanım Koşulları',
    'cerez-politikasi': 'Çerez Politikası',
    'kvkk': 'KVKK',
    'ticari': 'Ticari Arabuluculuk',
    'kira': 'Kira Arabuluculuğu',
    'aile': 'Aile Arabuluculuğu',
    'is-hukuku': 'İş Hukuku',
    'tuketici': 'Tüketici Hakları',
    'sikca-sorulan-sorular': 'Sıkça Sorulan Sorular',
  };

  let currentPath = '';
  
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const label = pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
    
    breadcrumbs.push({
      label,
      href: currentPath,
      current: index === paths.length - 1
    });
  });

  return breadcrumbs;
}
