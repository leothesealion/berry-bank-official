'use client';

import { motion } from 'framer-motion';
import { ImpactChart, FooterSection } from '@/components/modules';

const impactStats = [
  { label: 'CO₂ Offset', value: '12,450', unit: 'tons', icon: '🌱' },
  { label: 'Green Projects Funded', value: '847', unit: 'projects', icon: '🏗️' },
  { label: 'Trees Planted', value: '125K', unit: 'trees', icon: '🌳' },
  { label: 'Clean Energy Generated', value: '45.2', unit: 'GWh', icon: '⚡' },
];

const projectCategories = [
  {
    title: 'Renewable Energy',
    percentage: 45,
    description: 'Solar, wind, and hydroelectric projects across Latin America',
    color: 'bg-growth'
  },
  {
    title: 'Sustainable Agriculture',
    percentage: 25,
    description: 'Regenerative farming and organic food production',
    color: 'bg-green-600'
  },
  {
    title: 'Green Infrastructure',
    percentage: 20,
    description: 'Eco-friendly buildings and sustainable urban development',
    color: 'bg-emerald-500'
  },
  {
    title: 'Conservation',
    percentage: 10,
    description: 'Forest preservation and biodiversity protection',
    color: 'bg-teal-500'
  }
];

export default function ImpactPage() {
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
            <span className="inline-block px-4 py-2 bg-growth/20 text-growth rounded-full text-sm font-medium mb-6">
              Real Results
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-mist mb-6">
              Our Impact
            </h1>
            <p className="text-lg md:text-xl text-mist/70">
              Every deposit makes a difference. See how your money is creating 
              positive change across Latin America and beyond.
            </p>
          </motion.div>
        </section>

        {/* Stats Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-mist/5 border border-mist/10 rounded-2xl p-6 text-center"
              >
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <div className="text-3xl md:text-4xl font-bold text-growth mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-mist/50 uppercase tracking-wider">{stat.unit}</div>
                <div className="text-sm text-mist/70 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact Chart Section */}
        <section className="bg-mist/5 py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-mist text-center mb-8"
            >
              How Green Are Berry Bank Members?
            </motion.h2>
            <div className="max-w-4xl mx-auto bg-void rounded-2xl p-6 md:p-10">
              <ImpactChart />
            </div>
          </div>
        </section>

        {/* Project Categories */}
        <section className="container mx-auto px-4 py-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-mist text-center mb-12"
          >
            Where Your Money Goes
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-mist/5 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-mist">{category.title}</h3>
                  <span className="text-2xl font-bold text-growth">{category.percentage}%</span>
                </div>
                <div className="h-3 bg-void rounded-full overflow-hidden mb-3">
                  <motion.div
                    className={`h-full ${category.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-sm text-mist/60">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-berry to-growth py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-mist mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-lg text-mist/80 mb-8 max-w-2xl mx-auto">
                Join thousands of members who are growing their wealth while 
                protecting our planet.
              </p>
              <a
                href="/#join"
                className="inline-block px-8 py-4 bg-mist text-void font-semibold rounded-full hover:bg-mist/90 transition-colors"
              >
                Get Started Today
              </a>
            </motion.div>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}
