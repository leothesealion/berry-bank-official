'use client';

import { motion } from 'framer-motion';
import { Hero, GreenHubEmbed, MissionSection, ImpactChart, JoinSection, FooterSection, FeatureGrid, Team, FAQ } from '@/components/modules';

interface HomePageData {
  homePage: {
    heroHeadline?: string;
    heroSubline?: string;
    heroHook?: string;
    ctaText?: string;
    heroBadge?: string;
    heroLearnMoreText?: string;
    missionSectionTitle?: string;
    missionSectionSubline?: string;
    joinHeadline?: string;
    joinSubline?: string;
    joinSlogan?: string;
    trustBadges?: string[];
  } | null;
  impactSection: {
    description?: string;
    chartData?: Array<{
      label: string;
      value: number;
      color: string;
    }>;
  } | null;
  companyInfo: {
    name?: string;
    tagline?: string;
    mission?: string;
    vision?: string;
    coreValues?: string[];
    contactEmail?: string;
    legalName?: string;
    legalType?: string;
    headquarters?: string;
  } | null;
  siteSettings: {
    footerTagline?: string;
    footerQuote?: string;
    footerLinks?: Array<{ label: string; href: string }>;
  } | null;
  greenHub: {
    embedUrl?: string;
    title?: string;
    description?: string;
  } | null;
  features: Array<{
    _id: string;
    title: string;
    description: string;
    icon?: string;
  }> | null;
  teamMembers: Array<{
    _id: string;
    name: string;
    role: string;
    image?: any;
    bio?: string;
  }> | null;
  faqs: Array<{
    _id: string;
    question: string;
    answer: string;
  }> | null;
  products: Array<{
    _id: string;
    title: string;
    price: number;
    description?: string;
    image?: any;
    stripePriceId?: string;
  }> | null;
}

interface HomePageClientProps {
  data: HomePageData;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function HomePageClient({ data }: HomePageClientProps) {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Section 1: Hero - Full viewport height */}
      <section id="hero" data-nav-theme="dark" className="relative min-h-screen w-full">
        <Hero cmsData={data.homePage} />
      </section>

      {/* Section 2: Green Hub */}
      <motion.section
        id="green-hub"
        data-nav-theme="light"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative w-full"
      >
        <GreenHubEmbed
          embedUrl={data.greenHub?.embedUrl}
          title={data.greenHub?.title}
          description={data.greenHub?.description}
        />
      </motion.section>

      {/* Section 3: Features */}
      <motion.section
        id="features"
        data-nav-theme="dark"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative w-full bg-void py-20 md:py-32"
      >
        <FeatureGrid features={data.features || undefined} />
      </motion.section>

      {/* Section 4: Mission & Vision */}
      <motion.section
        id="mission"
        data-nav-theme="dark"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative w-full bg-void py-20 md:py-32"
      >
        <MissionSection
          mission={data.companyInfo?.mission}
          vision={data.companyInfo?.vision}
          coreValues={data.companyInfo?.coreValues}
        />
      </motion.section>

      {/* Section 5: Impact Chart */}
      <motion.section
        id="impact"
        data-nav-theme="dark"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative w-full bg-void py-20 md:py-32"
      >
        <ImpactChart cmsData={data.impactSection} />
      </motion.section>

      {/* Section 6: Team */}
      <motion.section
        id="team"
        data-nav-theme="dark"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative w-full bg-void py-20 md:py-32"
      >
        <Team
          members={data.teamMembers || undefined}
          legalName={data.companyInfo?.legalName}
          legalType={data.companyInfo?.legalType}
          headquarters={data.companyInfo?.headquarters}
        />
      </motion.section>

      {/* Section 7: FAQ */}
      <motion.section
        id="faq"
        data-nav-theme="dark"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative w-full bg-void py-20 md:py-32 px-4"
      >
        <FAQ faqs={data.faqs || undefined} />
      </motion.section>

      {/* Section 8: Join / Newsletter */}
      <motion.section
        id="join"
        data-nav-theme="dark"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative w-full bg-void py-20 md:py-32"
      >
        <JoinSection
          headline={data.homePage?.joinHeadline}
          subline={data.homePage?.joinSubline}
          slogan={data.homePage?.joinSlogan}
          trustBadges={data.homePage?.trustBadges ?? undefined}
        />
      </motion.section>

      {/* Section 6: Footer */}
      <section id="footer" data-nav-theme="dark">
        <FooterSection
          companyName={data.companyInfo?.name}
          tagline={data.siteSettings?.footerTagline || data.companyInfo?.tagline}
          contactEmail={data.companyInfo?.contactEmail}
          legalName={data.companyInfo?.legalName}
          legalType={data.companyInfo?.legalType}
          headquarters={data.companyInfo?.headquarters}
        />
      </section>
    </main>
  );
}
