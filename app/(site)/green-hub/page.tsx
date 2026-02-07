'use client';

import { motion } from 'framer-motion';
import { GreenHubEmbed, FooterSection } from '@/components/modules';

export default function GreenHubPage() {
  return (
    <>
      <main className="min-h-screen bg-void pt-24">
        {/* Header */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-growth/20 text-growth rounded-full text-sm font-medium mb-6">
              Your Financial Ecosystem
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-mist mb-6">
              The Green Hub
            </h1>
            <p className="text-lg md:text-xl text-mist/70">
              All your sustainable banking tools in one place. Track your impact, 
              manage your investments, and watch your money grow green.
            </p>
          </motion.div>
        </section>

        {/* Green Hub Embed - Full Width */}
        <section className="container mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-mist rounded-2xl p-4 md:p-8"
          >
            <GreenHubEmbed />
          </motion.div>
        </section>

        {/* Features List */}
        <section className="container mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🌿',
                title: 'Impact Tracking',
                description: 'See exactly how your deposits fund renewable energy, sustainable agriculture, and green infrastructure.'
              },
              {
                icon: '📊',
                title: 'Portfolio View',
                description: 'Monitor your green investments with real-time ESG scores and sustainability metrics.'
              },
              {
                icon: '🎯',
                title: 'Goal Setting',
                description: 'Set and track financial goals while maintaining your commitment to sustainability.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-void border border-mist/10 rounded-xl p-6 hover:border-growth/50 transition-colors"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-mist mb-2">{feature.title}</h3>
                <p className="text-mist/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}
