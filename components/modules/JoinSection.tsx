'use client';

import { motion } from 'framer-motion';
import { Mail, Send, Leaf } from 'lucide-react';
import { Newsletter } from '@/components/shop';

export function JoinSection() {
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
          Be Part of the Change
        </h2>
        
        <p className="text-mist/60 max-w-xl mx-auto text-lg mb-2">
          Don&apos;t choose between a sleek experience and saving the planet.
        </p>
        
        <p className="text-growth font-semibold">
          Bank Green. Live Clean.
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
        <span>🔒 AES-256 Encryption</span>
        <span>•</span>
        <span>✅ PCI-DSS Compliant</span>
        <span>•</span>
        <span>🌱 100% Carbon Neutral</span>
      </motion.div>
    </div>
  );
}
