export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  idealFor: string[];
  imageUrl: string;
  badge?: string;
}

export interface BrandPartner {
  name: string;
  category: string;
  description: string;
  logoText: string;
}

export interface ServiceAreaLocation {
  name: string;
  region: 'Lower Mainland & Fraser Valley' | 'Fraser Canyon & Coquihalla' | 'Okanagan & Interior';
  responseTime: string;
  typicalClients: string[];
  highlight: string;
  coords: { x: number; y: number }; // Relative SVG percentage for visual map
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  serviceType: string;
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: 'Maintenance' | 'Troubleshooting' | 'Energy & Rebates';
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  serviceType: string;
  equipmentType: string;
  urgency: 'Emergency (within 2-4 hrs)' | 'Standard (within 24-48 hrs)' | 'Planning & Quote';
  message: string;
}
