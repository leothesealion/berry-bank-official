'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { Newsletter } from '@/components/shop';

interface JoinSectionProps {
  headline?: string;
  subline?: string;
  slogan?: string;
  trustBadges?: string[];
}

const defaultTrustBadges = ['🔒 AES-256 Encryption', '✅ PCI-DSS Compliant', '🌱 100% Carbon Neutral'];

export function JoinSection({
  headline = 'Be Part of the Change',
  subline = "Don't choose between a sleek experience and saving the planet.",
  slogan = 'Bank Green. Live Clean.',
  trustBadges = defaultTrustBadges,
}: JoinSectionProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-berry/10 border border-berry/20 mb-6">
          <Leaf className="w-4 h-4 text-berry" />
          <span className="text-sm font-medium text-berry">Join the Movement</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-mist mb-4">
          {headline}
        </h2>
        
        <p className="text-mist/60 max-w-xl mx-auto text-lg mb-2">
          {subline}
        </p>
        
        <p className="text-growth font-semibold">
          {slogan}
        </p>
      </motion.div>

      <Newsletter />

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-mist/40"
      >
        {trustBadges?.map((badge, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span>•</span>}
            <span>{badge}</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
