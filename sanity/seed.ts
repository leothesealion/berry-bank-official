/**
 * Berry Bank Mega-Seed Script
 * 
 * This script populates the Sanity CMS with the complete Knowledge Base.
 * Run with: npx tsx sanity/seed.ts
 */

import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Needs write access
  useCdn: false,
});

async function seed() {
  console.log('🌱 Starting Berry Bank Mega-Seed...\n');

  try {
    // 1. Company Info (Singleton)
    console.log('📋 Creating Company Info...');
    await client.createOrReplace({
      _id: 'companyInfo',
      _type: 'companyInfo',
      name: 'Berry Bank',
      tagline: 'Where Your Money Grows Green',
      secondaryTaglines: ['Bank Green. Live Clean.', 'Cherries are Berries.'],
      mission: 'To be the leading green digital bank in Latin America, empowering individuals to align their finances with their values.',
      vision: 'To empower individuals to positively impact the world through sustainable neobanking.',
      coreValues: ['Sustainability', 'Transparency', 'Customer-centricity', 'Innovation', 'Social Responsibility'],
      contactEmail: 'contact@berrybank.app',
      legalName: 'Berry Fintech, Inc.',
      legalType: 'Delaware C Corp',
      headquarters: 'Austin, TX',
    });
    console.log('✅ Company Info created\n');

    // 2. Home Page (Singleton)
    console.log('🏠 Creating Home Page...');
    await client.createOrReplace({
      _id: 'homePage',
      _type: 'homePage',
      heroHeadline: "Latin America's First Fully Green Digital Bank",
      heroSubline: "Don't choose between a sleek experience and saving the planet.",
      heroHook: 'Switching to a green bank reduces your carbon footprint by 52.2%.',
      ctaText: 'Join the Waitlist',
    });
    console.log('✅ Home Page created\n');

    // 3. Impact Section (Singleton)
    console.log('📊 Creating Impact Section...');
    await client.createOrReplace({
      _id: 'impactSection',
      _type: 'impactSection',
      title: 'Your Impact',
      description: 'More effective than an EV or a diet change. Your money has power.',
      chartData: [
        { _key: 'greenbank', label: 'Switching to Green Bank', value: 52.2, color: '#16A075' },
        { _key: 'ev', label: 'Switching to EV', value: 25.1, color: '#555555' },
        { _key: 'vegetarian', label: 'Going Vegetarian', value: 6.9, color: '#555555' },
      ],
    });
    console.log('✅ Impact Section created\n');

    // 4. Green Hub (Singleton)
    console.log('🌿 Creating Green Hub...');
    await client.createOrReplace({
      _id: 'greenHub',
      _type: 'greenHub',
      title: 'Green Hub',
      embedUrl: 'https://greeninitiatives-client-prod-608881704830.us-central1.run.app/',
      description: 'Track your environmental impact and fund local green projects.',
    });
    console.log('✅ Green Hub created\n');

    // 5. About Page (Singleton)
    console.log('ℹ️ Creating About Page...');
    await client.createOrReplace({
      _id: 'aboutPage',
      _type: 'aboutPage',
      headline: 'Our Mission',
    });
    console.log('✅ About Page created\n');

    // 6. Features (Collection - 3 documents)
    console.log('⭐ Creating Features...');
    
    await client.createOrReplace({
      _id: 'feature-green-hub',
      _type: 'feature',
      title: 'The Green Hub',
      description: 'Geofenced marketplace to fund local projects.',
      icon: 'Leaf',
      order: 1,
    });

    await client.createOrReplace({
      _id: 'feature-digital-wallet',
      _type: 'feature',
      title: 'Digital Wallet',
      description: 'Fee-free, virtual-only. No plastic waste.',
      icon: 'Wallet',
      order: 2,
    });

    await client.createOrReplace({
      _id: 'feature-pooling',
      _type: 'feature',
      title: 'Pooling',
      description: 'Split bills and group gifts instantly.',
      icon: 'Users',
      order: 3,
    });
    
    console.log('✅ Features created (3 documents)\n');

    // 7. Team Members (Collection - 3 documents)
    console.log('👥 Creating Team Members...');
    
    await client.createOrReplace({
      _id: 'team-enrique',
      _type: 'teamMember',
      name: 'Enrique Gomez Jackson',
      role: 'CEO & Co-Founder',
      order: 1,
    });

    await client.createOrReplace({
      _id: 'team-don',
      _type: 'teamMember',
      name: 'Don Vasser',
      role: 'CTO & Co-Founder',
      order: 2,
    });

    await client.createOrReplace({
      _id: 'team-leo',
      _type: 'teamMember',
      name: 'Leo Sanchez',
      role: 'CFO/CMO & Co-Founder',
      order: 3,
    });
    
    console.log('✅ Team Members created (3 documents)\n');

    // 8. FAQs (Collection - 3 documents)
    console.log('❓ Creating FAQs...');
    
    await client.createOrReplace({
      _id: 'faq-safe',
      _type: 'faq',
      question: 'Is my money safe?',
      answer: 'We use AES-256 encryption and adhere to PCI-DSS compliance.',
      order: 1,
    });

    await client.createOrReplace({
      _id: 'faq-cards',
      _type: 'faq',
      question: 'Physical cards?',
      answer: 'No, we are a digital wallet to minimize plastic waste.',
      order: 2,
    });

    await client.createOrReplace({
      _id: 'faq-money',
      _type: 'faq',
      question: 'How do you make money?',
      answer: 'Interchange fees and future premium features.',
      order: 3,
    });
    
    console.log('✅ FAQs created (3 documents)\n');

    console.log('🎉 Mega-Seed Complete! All content has been populated.\n');
    console.log('📝 Summary:');
    console.log('   - 1 Company Info (singleton)');
    console.log('   - 1 Home Page (singleton)');
    console.log('   - 1 Impact Section (singleton)');
    console.log('   - 1 Green Hub (singleton)');
    console.log('   - 1 About Page (singleton)');
    console.log('   - 3 Features');
    console.log('   - 3 Team Members');
    console.log('   - 3 FAQs');
    console.log('\n🔗 Visit /studio to view and edit content.');

  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

seed();
