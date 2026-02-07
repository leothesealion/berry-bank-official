'use client';

import { motion } from 'framer-motion';
import { FooterSection } from '@/components/modules';
import { ShopSection } from '@/components/shop';

export default function ShopPage() {
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
              Sustainable Style
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-mist mb-6">
              Berry Shop
            </h1>
            <p className="text-lg md:text-xl text-mist/70">
              Premium eco-friendly merchandise. Every purchase supports our 
              mission to make green banking accessible to all.
            </p>
          </motion.div>
        </section>

        {/* Shop Section */}
        <section className="container mx-auto px-4 pb-24">
          <ShopSection />
        </section>

        {/* Benefits */}
        <section className="bg-mist/5 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: '🌱',
                  title: 'Eco-Friendly Materials',
                  description: 'All products made from sustainable, recycled, or organic materials.'
                },
                {
                  icon: '🚚',
                  title: 'Carbon-Neutral Shipping',
                  description: 'We offset 100% of shipping emissions on every order.'
                },
                {
                  icon: '💚',
                  title: 'Mission-Driven',
                  description: 'Proceeds support green banking education initiatives.'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <span className="text-4xl mb-4 block">{benefit.icon}</span>
                  <h3 className="text-lg font-semibold text-mist mb-2">{benefit.title}</h3>
                  <p className="text-mist/60">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}
