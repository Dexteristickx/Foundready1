export interface Tier {
  id: 1 | 2 | 3;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  paymentStructure: string;
  consultationRequired: string;
  deliverables: string[];
  sectorSpecific: boolean;
  regulatoryLicence: boolean;
  ctaLabel: string;
  ctaVariant: 'primary' | 'gold' | 'outline';
  featured: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
}

export interface PurchaseFormData {
  fullName: string;
  phone: string;
  email: string;
  companyName: string;
  sector: string;
  state: string;
  stage: string;
  notes: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
  sector: string;
  duration: '30' | '60';
  notes: string;
}
