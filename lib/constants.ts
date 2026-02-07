// Site-wide constants
export const SITE_CONFIG = {
  name: 'Berry Bank',
  description: "Latin America's First Fully Green Digital Bank",
  url: 'https://berrybank.app',
  contact: 'contact@berrybank.app',
  legal: {
    company: 'Berry Fintech, Inc.',
    type: 'Delaware C Corp',
    headquarters: 'Austin, TX',
  },
};

export const COMPANY_INFO = {
  name: 'Berry Bank',
  tagline: 'Where Your Money Grows Green',
  secondaryTaglines: ['Bank Green. Live Clean.', 'Cherries are Berries.'],
  mission: 'To be the leading green digital bank in Latin America, empowering individuals to align their finances with their values.',
  vision: 'To empower individuals to positively impact the world through sustainable neobanking.',
  coreValues: ['Sustainability', 'Transparency', 'Customer-centricity', 'Innovation', 'Social Responsibility'],
  contact: {
    email: 'contact@berrybank.app',
    phone: '+1 (512) 555-0123',
    address: 'Austin, TX, USA',
  },
};

export const GREEN_HUB_URL = 'https://greeninitiatives-client-prod-608881704830.us-central1.run.app/';

export const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: 'Home' },
  { label: 'Green Hub', href: '/green-hub', icon: 'Leaf' },
  { label: 'Mission', href: '/mission', icon: 'Target' },
  { label: 'Impact', href: '/impact', icon: 'BarChart3' },
  { label: 'Shop', href: '/shop', icon: 'ShoppingBag' },
  { label: 'Contact', href: '/contact', icon: 'Mail' },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Enrique Gomez Jackson',
    role: 'CEO & Co-Founder',
    image: null,
  },
  {
    id: 2,
    name: 'Don Vasser',
    role: 'CTO & Co-Founder',
    image: null,
  },
  {
    id: 3,
    name: 'Leo Sanchez',
    role: 'CFO/CMO & Co-Founder',
    image: null,
  },
];

export const FEATURES = [
  {
    id: 1,
    title: 'The Green Hub',
    description: 'Geofenced marketplace to fund local projects.',
    icon: 'Leaf',
  },
  {
    id: 2,
    title: 'Digital Wallet',
    description: 'Fee-free, virtual-only. No plastic waste.',
    icon: 'Wallet',
  },
  {
    id: 3,
    title: 'Pooling',
    description: 'Split bills and group gifts instantly.',
    icon: 'Users',
  },
];

export const IMPACT_DATA = [
  { label: 'Switching to Green Bank', value: 52.2, color: '#16A075' },
  { label: 'Switching to EV', value: 25.1, color: '#555555' },
  { label: 'Going Vegetarian', value: 6.9, color: '#555555' },
];

export const FAQS = [
  {
    id: 1,
    question: 'Is my money safe?',
    answer: 'We use AES-256 encryption and adhere to PCI-DSS compliance.',
  },
  {
    id: 2,
    question: 'Physical cards?',
    answer: 'No, we are a digital wallet to minimize plastic waste.',
  },
  {
    id: 3,
    question: 'How do you make money?',
    answer: 'Interchange fees and future premium features.',
  },
];

export const HERO_CONTENT = {
  headline: "Latin America's First Fully Green Digital Bank",
  subline: "Don't choose between a sleek experience and saving the planet.",
  hook: 'Switching to a green bank reduces your carbon footprint by 52.2%.',
  cta: 'Join the Waitlist',
};
