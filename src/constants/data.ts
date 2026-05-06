import type { Tier, FAQItem, JourneyStep } from '@/types';

export const TIERS: Tier[] = [
  {
    id: 1,
    name: 'Starter Pack',
    tagline: 'Everything to launch legally from day one',
    price: '₦1,000,000',
    priceNote: 'All-inclusive. Government fees included.',
    paymentStructure: '₦700,000 now · ₦300,000 on delivery',
    consultationRequired: 'Optional',
    featured: false,
    ctaLabel: 'Buy Now — ₦700,000',
    ctaVariant: 'primary',
    sectorSpecific: false,
    regulatoryLicence: false,
    deliverables: [
      'CAC Company Incorporation',
      'Memorandum & Articles of Association (MEMART)',
      "Founders' / Shareholders' Agreement",
      'Terms & Conditions / Terms of Use',
      'Privacy Policy (NDPA 2023 compliant)',
      'Non-Disclosure Agreement (NDA) Template',
      'Employment Contract Template',
      'Trademark Registration — 1 class',
    ],
  },
  {
    id: 2,
    name: 'Growth Pack',
    tagline: 'For sector-specific startups that need more',
    price: 'From ₦1,500,000',
    priceNote: 'Final price confirmed after consultation.',
    paymentStructure: '70% on confirmation · 30% on delivery',
    consultationRequired: 'Required (fee redeemable)',
    featured: true,
    ctaLabel: 'Book a Consultation',
    ctaVariant: 'gold',
    sectorSpecific: true,
    regulatoryLicence: false,
    deliverables: [
      'Everything in Starter Pack',
      'Sector-specific legal documents',
      'Logistics, Fintech, Healthtech, SaaS & more',
      'KYC/AML Policy (where applicable)',
      'Data Processing Agreement',
      'SLA / EULA / Vendor Agreements',
      'Tailored to your exact business model',
      'Expert-led scoping consultation',
    ],
  },
  {
    id: 3,
    name: 'Regulatory Pack',
    tagline: 'For businesses that need a licence to operate',
    price: 'From ₦3,000,000',
    priceNote: 'Pricing confirmed after scoping consultation.',
    paymentStructure: '50% to commence · 25% on submission · 25% on grant',
    consultationRequired: 'Mandatory',
    featured: false,
    ctaLabel: 'Book a Consultation',
    ctaVariant: 'outline',
    sectorSpecific: true,
    regulatoryLicence: true,
    deliverables: [
      'Everything in Growth Pack',
      'Regulatory eligibility advisory',
      'Licence application preparation & submission',
      'CBN, SEC, NAFDAC, NCC & more',
      'Agency liaison until licence is granted',
      'Inspection coordination support',
      'Compliance roadmap post-licensing',
      'Full regulatory filing on your behalf',
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Who is FoundReady for?',
    answer:
      'FoundReady is for any Nigerian founder, entrepreneur or small business owner at any stage — whether you are just starting out, already operating without documentation, or scaling and need sector-specific legal protection.',
  },
  {
    question: 'What is included in Tier 1 (Starter Pack)?',
    answer:
      'CAC incorporation, MEMART, Founders\' Agreement, Terms & Conditions, Privacy Policy (NDPA-compliant), NDA template, Employment Contract template, and trademark registration in one class — all for ₦1,000,000.',
  },
  {
    question: 'Are government fees included?',
    answer:
      'Yes. For Tier 1, all CAC statutory fees are included for companies with a share capital of up to ₦1,000,000. Companies with higher share capital pay the statutory difference at cost. Trademark Registry fees are included for one class.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Legal documents are delivered within 7 to 10 working days. CAC incorporation and trademark registration timelines are subject to the Corporate Affairs Commission and the Trademarks Registry respectively. We keep you updated throughout.',
  },
  {
    question: 'Do I need a consultation for Tier 1?',
    answer:
      'No. Tier 1 is self-select — you can purchase it directly on the website. A consultation is recommended but not required for Tier 1.',
  },
  {
    question: 'Why do I need a consultation for Tier 2 and Tier 3?',
    answer:
      'Because every sector has different legal requirements. The consultation ensures you get exactly the documents your business needs — not a generic pack. The consultation fee is fully redeemable against your package purchase within 30 days.',
  },
  {
    question: 'What is the payment structure?',
    answer:
      'Tier 1 & Tier 2: 70% upon purchase, 30% on delivery. Tier 3: 50% to commence, 25% on submission of the licence application, 25% on grant of the licence.',
  },
  {
    question: 'I am already incorporated. Can I still use FoundReady?',
    answer:
      'Absolutely. Many founders are incorporated but missing key legal documents. FoundReady can be tailored to fill those gaps without duplicating work already done.',
  },
  {
    question: 'What if I need more than one trademark class?',
    answer:
      'Tier 1 includes one trademark class. Additional classes are available at ₦175,000 per class.',
  },
  {
    question: 'Is my information safe?',
    answer:
      'Yes. All information provided to aasecretaries is handled with strict confidentiality in accordance with our Privacy Policy and the Nigeria Data Protection Act 2023.',
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: 'Discovery',
    description:
      'Find FoundReady through our website, social media, referral or WhatsApp. Review all tiers, deliverables and pricing clearly displayed.',
  },
  {
    step: 2,
    title: 'Selection or Consultation',
    description:
      'Select Tier 1 directly, or book a paid consultation for Tier 2 & 3. Our intake form captures your business details and needs.',
  },
  {
    step: 3,
    title: 'Payment',
    description:
      'Pay 70% of the package price securely online. Receive an automated receipt and onboarding email immediately upon payment.',
  },
  {
    step: 4,
    title: 'Onboarding',
    description:
      'Complete our structured form — company name, directors, share structure, brand details and sector information as needed.',
  },
  {
    step: 5,
    title: 'Delivery',
    description:
      'Our team prepares all legal documents and initiates CAC incorporation and trademark registration. Documents delivered in 7–10 working days.',
  },
  {
    step: 6,
    title: 'Balance & Final Delivery',
    description:
      'Pay the 30% balance upon delivery. Receive final executed documents, CAC certificate and trademark certificate.',
  },
  {
    step: 7,
    title: 'Post-Delivery Support',
    description:
      'We inform you of all renewal and compliance obligations. aasecretaries is available for ongoing corporate secretarial support.',
  },
];

export const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
  'FCT (Abuja)', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina',
  'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo',
  'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
];

export const BUSINESS_SECTORS = [
  'Fintech / Payments', 'Healthtech / Telemedicine', 'Logistics / Delivery',
  'E-Commerce / Marketplace', 'SaaS / Software', 'Agritech / Food',
  'Edtech', 'Proptech / Real Estate', 'Legal Tech', 'Media / Entertainment',
  'Retail / FMCG', 'Manufacturing', 'Consulting / Professional Services',
  'Non-Governmental Organisation', 'Other',
];
