'use client';

import { motion } from 'framer-motion';
import { Leaf, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

interface FooterSectionProps {
  companyName?: string;
  tagline?: string;
  contactEmail?: string;
  legalName?: string;
  legalType?: string;
  headquarters?: string;
}

export function FooterSection({
  companyName = 'Berry Bank',
  tagline = 'Where Your Money Grows Green',
  contactEmail = 'contact@berrybank.app',
  legalName = 'Berry Fintech, Inc.',
  legalType = 'Delaware C Corp',
  headquarters = 'Austin, TX',
}: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-void border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-berry flex items-center justify-center">
                <Leaf className="w-5 h-5 text-mist" />
              </div>
              <span className="text-xl font-bold text-mist">{companyName}</span>
            </div>
            <p className="text-mist/60 mb-4">{tagline}</p>
            <p className="text-sm text-growth italic">&quot;Cherries are Berries.&quot;</p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-mist mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2 text-mist/60 hover:text-mist transition-colors"
              >
                <Mail className="w-4 h-4" />
                {contactEmail}
              </a>
              <div className="flex items-center gap-2 text-mist/60">
                <MapPin className="w-4 h-4" />
                {headquarters}
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-mist mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/mission" className="block text-mist/60 hover:text-mist transition-colors">
                Mission
              </Link>
              <Link href="/impact" className="block text-mist/60 hover:text-mist transition-colors">
                Impact
              </Link>
              <Link href="/green-hub" className="block text-mist/60 hover:text-mist transition-colors">
                Green Hub
              </Link>
              <Link href="/privacy" className="block text-mist/60 hover:text-mist transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-mist/40"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span>{legalName}</span>
            <span className="hidden md:inline">•</span>
            <span>{legalType}</span>
          </div>
          <p>© {currentYear} {companyName}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
