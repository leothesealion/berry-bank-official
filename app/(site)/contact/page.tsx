'use client';

import { motion } from 'framer-motion';
import { FooterSection } from '@/components/modules';
import { ContactSection } from '@/components/shop';
import { COMPANY_INFO } from '@/lib/constants';

export default function ContactPage() {
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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-mist mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-mist/70">
              Have questions about green banking? We&apos;re here to help you on 
              your sustainable finance journey.
            </p>
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-mist/5 border border-mist/10 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-berry/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-berry" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-mist mb-2">Email</h3>
              <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-growth hover:underline">
                {COMPANY_INFO.contact.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-mist/5 border border-mist/10 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-growth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-growth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-mist mb-2">Phone</h3>
              <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-growth hover:underline">
                {COMPANY_INFO.contact.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-mist/5 border border-mist/10 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-berry/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-berry" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-mist mb-2">Address</h3>
              <p className="text-mist/70">{COMPANY_INFO.contact.address}</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto px-4 pb-24">
          <ContactSection />
        </section>

        {/* FAQ Preview */}
        <section className="bg-mist/5 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-mist mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 text-left">
                {[
                  {
                    q: 'How do I open a Berry Bank account?',
                    a: 'Simply download our app, complete the verification process, and you can have your account active within minutes.'
                  },
                  {
                    q: 'Is my money FDIC insured?',
                    a: 'Yes, all deposits are insured up to $250,000 through our banking partner.'
                  },
                  {
                    q: 'How can I track my environmental impact?',
                    a: 'Your Green Hub dashboard shows real-time metrics of how your deposits are funding sustainable projects.'
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-void rounded-xl p-6 border border-mist/10"
                  >
                    <h3 className="text-lg font-semibold text-mist mb-2">{faq.q}</h3>
                    <p className="text-mist/60">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}
