'use client';

import { motion } from 'framer-motion';
import { MissionSection, FooterSection } from '@/components/modules';
import { COMPANY_INFO } from '@/lib/constants';

export default function MissionPage() {
  return (
    <>
      <main className="min-h-screen bg-void pt-24">
        {/* Hero Header */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-berry/20 text-berry rounded-full text-sm font-medium mb-6">
              Our Purpose
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-mist mb-6">
              Mission & Vision
            </h1>
            <p className="text-lg md:text-xl text-mist/70">
              Building a financial system that works for people and the planet.
            </p>
          </motion.div>
        </section>

        {/* Mission Statement */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-berry to-berry/80 rounded-2xl p-8 md:p-12 mb-8"
            >
              <h2 className="text-sm uppercase tracking-wider text-mist/70 mb-4">Our Mission</h2>
              <p className="text-2xl md:text-3xl font-semibold text-mist leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-growth to-growth/80 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-sm uppercase tracking-wider text-void/70 mb-4">Our Vision</h2>
              <p className="text-2xl md:text-3xl font-semibold text-void leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="container mx-auto px-4 pb-24">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-mist text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {COMPANY_INFO.coreValues.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-mist/5 border border-mist/10 rounded-xl p-8 text-center hover:border-growth/50 transition-colors"
              >
                <div className="w-16 h-16 bg-growth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">
                    {index === 0 ? '🌍' : index === 1 ? '🤝' : '💡'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-mist">{value}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Berry Bank */}
        <section className="bg-mist/5 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-mist mb-8">
                Why Choose Berry Bank?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-void rounded-xl p-6 border border-mist/10">
                  <h3 className="text-lg font-semibold text-growth mb-2">100% Green Investments</h3>
                  <p className="text-mist/70">Every dollar deposited is channeled into verified sustainable projects.</p>
                </div>
                <div className="bg-void rounded-xl p-6 border border-mist/10">
                  <h3 className="text-lg font-semibold text-growth mb-2">Full Transparency</h3>
                  <p className="text-mist/70">Track exactly where your money goes with our real-time impact dashboard.</p>
                </div>
                <div className="bg-void rounded-xl p-6 border border-mist/10">
                  <h3 className="text-lg font-semibold text-growth mb-2">Competitive Returns</h3>
                  <p className="text-mist/70">Green banking doesn&apos;t mean sacrificing growth. Earn market-leading rates.</p>
                </div>
                <div className="bg-void rounded-xl p-6 border border-mist/10">
                  <h3 className="text-lg font-semibold text-growth mb-2">Community Impact</h3>
                  <p className="text-mist/70">Join a community of like-minded individuals building a better future.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}
