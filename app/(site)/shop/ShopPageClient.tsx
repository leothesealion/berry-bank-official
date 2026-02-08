'use client';

import { motion } from 'framer-motion';
import { FooterSection } from '@/components/modules';
import { ShopSection } from '@/components/shop';

interface ShopPageData {
  shopPage: {
    badge?: string;
    headline?: string;
    subline?: string;
    benefits?: Array<{
      _key: string;
      emoji: string;
      title: string;
      description: string;
    }>;
  } | null;
  products: Array<{
    _id: string;
    title: string;
    price: number;
    description?: string;
    image?: any;
    stripePriceId?: string;
  }> | null;
  companyInfo: {
    name?: string;
    tagline?: string;
    contactEmail?: string;
    legalName?: string;
    legalType?: string;
    headquarters?: string;
  } | null;
  siteSettings: {
    footerTagline?: string;
  } | null;
}

const defaultBenefits = [
  { _key: '1', emoji: '🌱', title: 'Eco-Friendly Materials', description: 'All products made from sustainable, recycled, or organic materials.' },
  { _key: '2', emoji: '🚚', title: 'Carbon-Neutral Shipping', description: 'We offset 100% of shipping emissions on every order.' },
  { _key: '3', emoji: '💚', title: 'Mission-Driven', description: 'Proceeds support green banking education initiatives.' },
];

export function ShopPageClient({ data }: { data: ShopPageData }) {
  const sp = data.shopPage;
  const benefits = sp?.benefits || defaultBenefits;

  return (
    <main className="min-h-screen bg-void pt-24 pb-24 md:pb-0" data-nav-theme="dark">
      {/* Hero Header */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-berry/20 text-berry rounded-full text-sm font-medium mb-6">
            {sp?.badge || 'Sustainable Style'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-mist mb-6">
            {sp?.headline || 'Berry Shop'}
          </h1>
          <p className="text-lg md:text-xl text-mist/70">
            {sp?.subline || 'Premium eco-friendly merchandise. Every purchase supports our mission to make green banking accessible to all.'}
          </p>
        </motion.div>
      </section>

      {/* Shop Section */}
      <section className="container mx-auto px-4 pb-24">
        <ShopSection products={data.products || undefined} />
      </section>

      {/* Benefits */}
      <section className="bg-mist/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits?.map((benefit, index) => (
              <motion.div
                key={benefit._key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-4xl mb-4 block">{benefit.emoji}</span>
                <h3 className="text-lg font-semibold text-mist mb-2">{benefit.title}</h3>
                <p className="text-mist/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection
        companyName={data.companyInfo?.name}
        tagline={data.siteSettings?.footerTagline || data.companyInfo?.tagline}
        contactEmail={data.companyInfo?.contactEmail}
        legalName={data.companyInfo?.legalName}
        legalType={data.companyInfo?.legalType}
        headquarters={data.companyInfo?.headquarters}
      />
    </main>
  );
}
