// Services data for Hubris Minerals

import { ServiceData, NavItem, ContactInfo } from '../types';

export const SERVICES: ServiceData[] = [
  {
    id: 'exploration',
    title: 'Gold Exploration',
    description: 'Professional geological surveys and site assessments to identify high-potential gold deposits across the DRC.',
    features: [
      'Geological mapping and analysis',
      'Soil and rock sampling',
      'Geophysical surveys',
      'Environmental impact assessments',
      'Mining feasibility studies'
    ],
    icon: 'Search',
  },
  {
    id: 'sourcing',
    title: 'Gold Sourcing',
    description: 'Direct sourcing from artisanal miners and established mining operations throughout the Democratic Republic of Congo.',
    features: [
      'Network of trusted local miners',
      'Fair trade pricing',
      'Quality verification at source',
      'Conflict-free certification',
      'Sustainable sourcing practices'
    ],
    icon: 'MapPin',
  },
  {
    id: 'refining',
    title: 'Gold Refining',
    description: 'State-of-the-art refining processes to achieve maximum purity and meet international gold standards.',
    features: [
      'Advanced smelting technology',
      'Purity testing and certification',
      '99.99% gold purity achievement',
      'International standard compliance',
      'Quality assurance protocols'
    ],
    icon: 'Flame',
  },
  {
    id: 'assay',
    title: 'Assay Services',
    description: 'Comprehensive testing and analysis services to determine gold content, purity, and quality characteristics.',
    features: [
      'Fire assay testing',
      'X-ray fluorescence analysis',
      'Chemical composition analysis',
      'Purity certification',
      'Third-party verification'
    ],
    icon: 'FlaskConical',
  },
  {
    id: 'export',
    title: 'Gold Export',
    description: 'Complete export services including documentation, logistics, and international shipping for global clients.',
    features: [
      'International shipping coordination',
      'Export documentation management',
      'Customs clearance assistance',
      'Secure transportation',
      'Insurance and tracking services'
    ],
    icon: 'Plane',
  },
];

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Minerals', href: '/minerals' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQs', href: '/faqs' },
];

// Contact information
export const CONTACT_INFO: ContactInfo = {
  email: 'contact@hubrisminerals.info',
  phone: '+243 973091479',
  whatsapp: '+243 973091479',
  address: 'Democratic Republic of Congo'
};

// Company stats for hero section
export const COMPANY_STATS = [
  {
    id: 'experience',
    value: '15+',
    label: 'Years Experience',
    description: 'Established mining operations'
  },
  {
    id: 'purity',
    value: '99.99%',
    label: 'Gold Purity',
    description: 'Certified premium quality'
  },
  {
    id: 'clients',
    value: '500+',
    label: 'Global Clients',
    description: 'Trusted worldwide'
  },
  {
    id: 'production',
    value: '2.5T+',
    label: 'Annual Production',
    description: 'Metric tons of gold'
  }
];

// FAQ data
export const FAQ_DATA = [
  {
    category: 'General',
    questions: [
      {
        question: 'What makes Hubris Minerals different from other gold suppliers?',
        answer: 'We operate directly from the Democratic Republic of Congo with established relationships with local artisanal miners. Our commitment to ethical sourcing, conflict-free gold, and sustainable mining practices sets us apart. We provide complete traceability from mine to market.'
      },
      {
        question: 'Are you a legitimate gold mining company?',
        answer: 'Yes, Hubris Minerals is a fully licensed and certified gold mining and export company operating in the DRC. We hold all necessary permits and comply with international regulations for gold trading and export.'
      },
      {
        question: 'What certifications do you provide?',
        answer: 'We provide certificates of origin, purity certificates from accredited assay labs, conflict-free certification, and all necessary export documentation. Each shipment includes comprehensive certification packages.'
      }
    ]
  },
  {
    category: 'Products',
    questions: [
      {
        question: 'What types of gold products do you offer?',
        answer: 'We offer gold bars (3g-19g), gold nuggets (50g-200g), and gold flakes (50g-300g). All products are available in various purities from 92% to 99.99% depending on the product type and processing level.'
      },
      {
        question: 'What is the purity of your gold products?',
        answer: 'Gold bars achieve 99.99% purity, gold nuggets range from 95-98% purity, and gold flakes range from 92-96% purity. All purity levels are verified by independent assay laboratories.'
      },
      {
        question: 'Can I request specific quantities or custom orders?',
        answer: 'Yes, we accommodate custom orders for specific quantities, weights, and purity requirements. Contact us to discuss your specific needs and we will provide a tailored solution.'
      }
    ]
  },
  {
    category: 'Services',
    questions: [
      {
        question: 'Do you provide mining exploration services?',
        answer: 'Yes, we offer comprehensive exploration services including geological surveys, site assessments, soil sampling, and feasibility studies for potential mining sites across the DRC.'
      },
      {
        question: 'What refining processes do you use?',
        answer: 'We utilize advanced smelting and refining technology to achieve maximum purity. Our processes include fire assay testing, chemical purification, and final quality verification to meet international standards.'
      },
      {
        question: 'Do you offer assay and testing services?',
        answer: 'Yes, we provide comprehensive assay services including fire assay testing, X-ray fluorescence analysis, and chemical composition testing. We also offer third-party verification through accredited laboratories.'
      }
    ]
  },
  {
    category: 'Shipping',
    questions: [
      {
        question: 'How do you ship gold internationally?',
        answer: 'We work with specialized precious metals shipping companies and use secure, insured transportation methods. All shipments include proper documentation, insurance coverage, and tracking services.'
      },
      {
        question: 'What are your shipping timeframes?',
        answer: 'Shipping timeframes vary by destination and quantity. Typically, international shipments take 5-14 business days depending on customs clearance and destination country requirements.'
      },
      {
        question: 'Do you handle export documentation?',
        answer: 'Yes, we handle all export documentation including certificates of origin, export permits, customs declarations, and any required compliance documentation for the destination country.'
      }
    ]
  },
  {
    category: 'Quality',
    questions: [
      {
        question: 'How do you ensure gold quality and authenticity?',
        answer: 'We employ rigorous quality control measures including source verification, multiple testing phases, independent assay verification, and comprehensive documentation. Every product comes with authenticated certificates.'
      },
      {
        question: 'Are your gold products conflict-free?',
        answer: 'Yes, all our gold products are certified conflict-free. We maintain strict sourcing standards and work only with verified, ethical mining operations that comply with international standards.'
      },
      {
        question: 'What quality guarantees do you provide?',
        answer: 'We guarantee the purity and authenticity of all our gold products. If any product does not meet the specified purity levels or quality standards, we provide full refund or replacement.'
      }
    ]
  }
];
