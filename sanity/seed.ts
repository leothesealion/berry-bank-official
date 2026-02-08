/**
 * Berry Bank — Mega-Seed Script
 * Populates every singleton + collection document in Sanity so that
 * the site runs with ZERO hardcoded strings on the very first load.
 *
 * Run:  npx tsx sanity/seed.ts
 */

import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

if (!projectId || !dataset) {
  console.error('❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET in .env.local');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
});

// ──────────────────────────────────────────────
// Singletons
// ──────────────────────────────────────────────

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  siteName: 'Berry Bank',
  siteDescription: "Latin America's First Fully Green Digital Bank",
  siteUrl: 'https://berrybank.app',
  contactEmail: 'contact@berrybank.app',
  navItems: [
    {
      _key: 'nav-about',
      label: 'About',
      href: '#',
      children: [
        { _key: 'nav-mission', label: 'Mission & Vision', href: '/mission', emoji: '🎯' },
        { _key: 'nav-impact', label: 'Our Impact', href: '/impact', emoji: '📊' },
        { _key: 'nav-contact', label: 'Contact', href: '/contact', emoji: '💌' },
      ],
    },
    {
      _key: 'nav-products',
      label: 'Products',
      href: '#',
      children: [
        { _key: 'nav-hub', label: 'Green Hub', href: '/green-hub', emoji: '🌿' },
        { _key: 'nav-shop', label: 'Shop', href: '/shop', emoji: '🛍️' },
      ],
    },
  ],
  navCtaText: 'Join Waitlist',
  navCtaLink: '/contact',
  footerTagline: 'Where Your Money Grows Green',
  footerQuote: 'Cherries are Berries.',
  footerLinks: [
    { _key: 'fl1', label: 'Mission', href: '/mission' },
    { _key: 'fl2', label: 'Impact', href: '/impact' },
    { _key: 'fl3', label: 'Green Hub', href: '/green-hub' },
    { _key: 'fl4', label: 'Privacy Policy', href: '/privacy' },
  ],
  socialLinks: [
    { _key: 'sl1', platform: 'LinkedIn', url: 'https://linkedin.com/company/berrybank', handle: '@BerryBank' },
    { _key: 'sl2', platform: 'Instagram', url: 'https://instagram.com/berrybank', handle: '@BerryBank' },
    { _key: 'sl3', platform: 'X (Twitter)', url: 'https://x.com/BerryBankApp', handle: '@BerryBankApp' },
  ],
};

const companyInfo = {
  _id: 'companyInfo',
  _type: 'companyInfo',
  name: 'Berry Bank',
  tagline: 'Where Your Money Grows Green',
  secondaryTaglines: ['Bank Green. Live Clean.', 'Cherries are Berries.'],
  mission:
    'To be the leading green digital bank in Latin America, empowering individuals to align their finances with their values.',
  vision:
    'To empower individuals to positively impact the world through sustainable neobanking.',
  coreValues: ['Sustainability', 'Transparency', 'Customer-centricity', 'Innovation', 'Social Responsibility'],
  contactEmail: 'contact@berrybank.app',
  legalName: 'Berry Fintech, Inc.',
  legalType: 'Delaware C Corp',
  headquarters: 'Austin, TX',
};

const homePage = {
  _id: 'homePage',
  _type: 'homePage',
  heroHeadline: "Latin America's First Fully Green Digital Bank",
  heroSubline: "Don't choose between a sleek experience and saving the planet.",
  heroHook: 'Switching to a green bank reduces your carbon footprint by 52.2%.',
  ctaText: 'Join the Waitlist',
  heroBadge: 'Now accepting early access signups',
  heroLearnMoreText: 'Learn More',
  missionSectionTitle: 'Our Purpose',
  missionSectionSubline: 'More than a bank. A movement for a greener future.',
  joinHeadline: 'Be Part of the Change',
  joinSubline: "Don't choose between a sleek experience and saving the planet.",
  joinSlogan: 'Bank Green. Live Clean.',
  trustBadges: ['AES-256 Encryption', 'PCI-DSS Compliant', 'FDIC Insured Partner', 'Carbon Neutral'],
};

const impactSection = {
  _id: 'impactSection',
  _type: 'impactSection',
  title: 'Your Impact',
  description:
    'See how switching to a green bank compares to other lifestyle changes in reducing your carbon footprint.',
  chartData: [
    { _key: 'cd1', label: 'Switching to Green Bank', value: 52.2, color: '#16A075' },
    { _key: 'cd2', label: 'Switching to EV', value: 25.1, color: '#555555' },
    { _key: 'cd3', label: 'Going Vegetarian', value: 6.9, color: '#555555' },
  ],
};

const greenHub = {
  _id: 'greenHub',
  _type: 'greenHub',
  embedUrl: 'https://greeninitiatives-client-prod-608881704830.us-central1.run.app/',
  title: 'Green Hub',
  description: 'Track your environmental impact and see how your banking choices contribute to a greener planet.',
};

const impactPage = {
  _id: 'impactPage',
  _type: 'impactPage',
  badge: 'Real Results',
  headline: 'Our Impact',
  subline: 'Every deposit makes a difference. See how your money is creating positive change across Latin America and beyond.',
  stats: [
    { _key: 'is1', label: 'CO₂ Offset', value: '12,450', unit: 'tons', emoji: '🌱' },
    { _key: 'is2', label: 'Green Projects Funded', value: '847', unit: 'projects', emoji: '🏗️' },
    { _key: 'is3', label: 'Trees Planted', value: '125K', unit: 'trees', emoji: '🌳' },
    { _key: 'is4', label: 'Clean Energy Generated', value: '45.2', unit: 'GWh', emoji: '⚡' },
  ],
  projectCategories: [
    { _key: 'pc1', title: 'Renewable Energy', percentage: 45, description: 'Solar, wind, and hydroelectric projects across Latin America', color: 'bg-growth' },
    { _key: 'pc2', title: 'Sustainable Agriculture', percentage: 25, description: 'Regenerative farming and organic food production', color: 'bg-green-600' },
    { _key: 'pc3', title: 'Green Infrastructure', percentage: 20, description: 'Eco-friendly buildings and sustainable urban development', color: 'bg-emerald-500' },
    { _key: 'pc4', title: 'Conservation', percentage: 10, description: 'Forest preservation and biodiversity protection', color: 'bg-teal-500' },
  ],
  ctaHeadline: 'Ready to Make an Impact?',
  ctaSubline: 'Join thousands of members who are growing their wealth while protecting our planet.',
  ctaButtonText: 'Get Started Today',
};

const missionPage = {
  _id: 'missionPage',
  _type: 'missionPage',
  badge: 'Our Purpose',
  headline: 'Mission & Vision',
  subline: 'Building a financial system that works for people and the planet.',
  whyChooseHeadline: 'Why Choose Berry Bank?',
  whyChooseCards: [
    { _key: 'wc1', title: '100% Green Investments', description: 'Every dollar deposited is channeled into verified sustainable projects.' },
    { _key: 'wc2', title: 'Full Transparency', description: 'Track exactly where your money goes with our real-time impact dashboard.' },
    { _key: 'wc3', title: 'Competitive Returns', description: "Green banking doesn't mean sacrificing growth. Earn market-leading rates." },
    { _key: 'wc4', title: 'Community Impact', description: 'Join a community of like-minded individuals building a better future.' },
  ],
};

const contactPage = {
  _id: 'contactPage',
  _type: 'contactPage',
  badge: 'Get In Touch',
  headline: 'Contact Us',
  subline: "Have questions about green banking? We're here to help you on your sustainable finance journey.",
  cards: [
    { _key: 'cc1', icon: 'Mail', title: 'Email', value: 'contact@berrybank.app', linkPrefix: 'mailto:' },
    { _key: 'cc2', icon: 'MapPin', title: 'Location', value: 'Austin, TX, USA', linkPrefix: '' },
    { _key: 'cc3', icon: 'Phone', title: 'Social', value: '@BerryBank', linkPrefix: '' },
  ],
  newsletterHeading: 'Join the Movement',
  newsletterSubline: 'Be the first to know about our launch and exclusive updates.',
};

const shopPage = {
  _id: 'shopPage',
  _type: 'shopPage',
  badge: 'Sustainable Style',
  headline: 'Berry Shop',
  subline: 'Premium eco-friendly merchandise. Every purchase supports our mission to make green banking accessible to all.',
  benefits: [
    { _key: 'sb1', emoji: '🌱', title: 'Eco-Friendly Materials', description: 'All products made from sustainable, recycled, or organic materials.' },
    { _key: 'sb2', emoji: '🚚', title: 'Carbon-Neutral Shipping', description: 'We offset 100% of shipping emissions on every order.' },
    { _key: 'sb3', emoji: '💚', title: 'Mission-Driven', description: 'Proceeds support green banking education initiatives.' },
  ],
};

const aboutPage = {
  _id: 'aboutPage',
  _type: 'aboutPage',
  headline: 'About Berry Bank',
};

// ──────────────────────────────────────────────
// Collections
// ──────────────────────────────────────────────

const features = [
  { _type: 'feature', title: 'The Green Hub', description: 'Geofenced marketplace to fund local environmental projects in your area.', icon: 'TreePine', order: 1 },
  { _type: 'feature', title: 'Digital Wallet', description: 'Fee-free, virtual-only. No plastic waste.', icon: 'Wallet', order: 2 },
  { _type: 'feature', title: 'Pooling', description: 'Split bills and group gifts instantly.', icon: 'Users', order: 3 },
  { _type: 'feature', title: 'Impact Dashboard', description: 'Track your carbon offset and sustainability score in real time.', icon: 'Smartphone', order: 4 },
  { _type: 'feature', title: 'Green Rewards', description: 'Earn rewards for eco-friendly purchases and habits.', icon: 'Shield', order: 5 },
  { _type: 'feature', title: 'Gamified Savings', description: 'Turn saving money into a game with challenges and leaderboards.', icon: 'Gamepad2', order: 6 },
];

const teamMembers = [
  { _type: 'teamMember', name: 'Enrique Gomez Jackson', role: 'CEO & Co-Founder', bio: 'Visionary leader passionate about sustainable finance and environmental impact across Latin America.', order: 1 },
  { _type: 'teamMember', name: 'Don Vasser', role: 'CTO & Co-Founder', bio: 'Full-stack technologist building the infrastructure for a greener banking future.', order: 2 },
  { _type: 'teamMember', name: 'Leo Sanchez', role: 'CFO/CMO & Co-Founder', bio: 'Finance and marketing expert driving growth strategies for Berry Bank\'s mission.', order: 3 },
  { _type: 'teamMember', name: 'Sofia Rodriguez', role: 'Head of Sustainability', bio: 'Environmental scientist ensuring every product decision aligns with our green commitment.', order: 4 },
];

const products = [
  { _type: 'product', title: 'Berry Bank T-Shirt', slug: { _type: 'slug', current: 'berry-bank-t-shirt' }, price: 29.99, description: 'Organic cotton tee with the Berry Bank logo. 100% sustainably sourced.', featured: true },
  { _type: 'product', title: 'Eco Water Bottle', slug: { _type: 'slug', current: 'eco-water-bottle' }, price: 24.99, description: 'Reusable stainless steel bottle. Keeps drinks cold 24 hours.', featured: true },
  { _type: 'product', title: 'Berry Tote Bag', slug: { _type: 'slug', current: 'berry-tote-bag' }, price: 19.99, description: 'Sustainable canvas tote bag. Perfect for groceries and everyday use.', featured: false },
  { _type: 'product', title: 'Seed Paper Notebook', slug: { _type: 'slug', current: 'seed-paper-notebook' }, price: 14.99, description: 'Plant it when you finish — the paper grows into wildflowers.', featured: false },
  { _type: 'product', title: 'Berry Bamboo Sunglasses', slug: { _type: 'slug', current: 'berry-bamboo-sunglasses' }, price: 39.99, description: 'Handcrafted bamboo frames with UV400 polarized lenses.', featured: true },
];

const faqs = [
  { _type: 'faq', question: 'Is my money safe?', answer: 'Absolutely. We use AES-256 encryption and adhere to PCI-DSS compliance. Your deposits are held with our FDIC-insured banking partner.', order: 1 },
  { _type: 'faq', question: 'Do you offer physical cards?', answer: 'No. Berry Bank is a fully digital wallet to minimize plastic waste. You can pay anywhere via NFC, QR codes, or online checkout.', order: 2 },
  { _type: 'faq', question: 'How do you make money?', answer: 'We earn revenue from interchange fees on transactions and plan to offer premium features in the future. We never sell your data.', order: 3 },
  { _type: 'faq', question: 'Where are you available?', answer: 'We are launching in select Latin American markets first, with plans to expand across the region. Join our waitlist to be notified.', order: 4 },
  { _type: 'faq', question: 'How does the Green Hub work?', answer: 'The Green Hub is a geofenced marketplace that connects you with local environmental projects. Fund reforestation, clean energy, and more — right from your app.', order: 5 },
  { _type: 'faq', question: 'Can I open a business account?', answer: 'Business accounts are on our roadmap. Sign up for our newsletter to get early access when they launch.', order: 6 },
];

// ──────────────────────────────────────────────
// Runner
// ──────────────────────────────────────────────

async function seed() {
  console.log('🌱 Berry Bank Seed — Starting...');
  console.log(`   Project: ${projectId} / Dataset: ${dataset}\n`);

  const singletons = [
    siteSettings,
    companyInfo,
    homePage,
    impactSection,
    greenHub,
    impactPage,
    missionPage,
    contactPage,
    shopPage,
    aboutPage,
  ];

  // Upsert singletons
  for (const doc of singletons) {
    try {
      await client.createOrReplace(doc as any);
      console.log(`  ✅ ${doc._type} (${doc._id})`);
    } catch (err: any) {
      console.error(`  ❌ ${doc._type}: ${err.message}`);
    }
  }

  // Delete existing collections to avoid duplicates
  const collectionTypes = ['feature', 'teamMember', 'product', 'faq'];
  for (const type of collectionTypes) {
    try {
      await client.delete({ query: `*[_type == "${type}"]` });
      console.log(`  🗑️  Cleared old ${type} documents`);
    } catch (err: any) {
      console.error(`  ⚠️  Could not clear ${type}: ${err.message}`);
    }
  }

  // Create collections
  const collections = [
    ...features,
    ...teamMembers,
    ...products,
    ...faqs,
  ];

  for (const doc of collections) {
    try {
      await client.create(doc as any);
      console.log(`  ✅ ${doc._type}: ${('title' in doc && doc.title) || ('name' in doc && doc.name) || ('question' in doc && doc.question)}`);
    } catch (err: any) {
      console.error(`  ❌ ${doc._type}: ${err.message}`);
    }
  }

  console.log('\n🎉 Seed complete!');
}

seed().catch((err) => {
  console.error('Fatal seed error:', err);
  process.exit(1);
});
