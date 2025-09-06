// Translation types and interfaces

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export interface TranslationContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  translate: (text: string) => Promise<string>;
  isTranslating: boolean;
  cachedTranslations: Map<string, Map<string, string>>;
}

export interface ProductData {
  id: string;
  name: string;
  description: string;
  weight: string;
  purity: string;
  price: string;
  image: string;
  category: 'bars' | 'nuggets' | 'flakes';
}

export interface TestimonialData {
  id: string;
  name: string;
  company: string;
  message: string;
  rating: number;
  avatar?: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
}
