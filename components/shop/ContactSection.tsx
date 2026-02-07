'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Leaf } from 'lucide-react';
import { Newsletter } from './Newsletter';
import { FAQ } from '@/components/modules';
import { SITE_CONFIG } from '@/lib/constants';

export function ContactSection() {
  return (
    <div className="relative w-full min-h-screen bg-void flex items-center justify-center p-6 md:p-12 overflow-y-auto">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-berry/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-growth/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-mist mb-4">
            Get in Touch
          </h2>
          <p className="text-mist/60 max-w-xl mx-auto">
            Have questions? We&apos;d love to hear from you. Join our community and be part of the green banking revolution.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Newsletter & Contact */}
          <div className="space-y-12">
            {/* Newsletter */}
            <Newsletter />

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-mist text-center">
                Contact Us
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href={`mailto:${SITE_CONFIG.contact}`}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-berry" />
                  <span className="text-mist/70 group-hover:text-mist transition-colors">
                    {SITE_CONFIG.contact}
                  </span>
                </a>

                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-growth" />
                  <span className="text-mist/70">
                    {SITE_CONFIG.legal.headquarters}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - FAQ */}
          <FAQ />
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-berry flex items-center justify-center">
                <Leaf className="w-5 h-5 text-mist" />
              </div>
              <span className="font-bold text-xl text-mist">Berry Bank</span>
            </div>

            {/* Legal */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-mist/40">
              <span>{SITE_CONFIG.legal.company}</span>
              <span className="hidden md:inline">•</span>
              <span>{SITE_CONFIG.legal.type}</span>
              <span className="hidden md:inline">•</span>
              <a href="/privacy" className="hover:text-mist transition-colors">
                Privacy Policy
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-mist/40">
              © {new Date().getFullYear()} Berry Bank. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
