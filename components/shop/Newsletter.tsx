'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, Loader2 } from 'lucide-react';
import { MagneticButton } from '@/components/core';
import { SITE_CONFIG } from '@/lib/constants';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Welcome to the movement! Check your inbox.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-berry/10 border border-berry/20 mb-4">
          <Mail className="w-4 h-4 text-berry" />
          <span className="text-sm font-medium text-berry">Newsletter</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-mist mb-3">
          Join the Movement
        </h3>
        <p className="text-mist/60">
          Be the first to know about our launch and exclusive updates.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="relative"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === 'loading' || status === 'success'}
              className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 text-mist placeholder:text-mist/40 focus:outline-none focus:border-berry/50 focus:bg-white/10 transition-all disabled:opacity-50"
            />
          </div>
          
          <MagneticButton
            variant="primary"
            size="lg"
            onClick={() => {}}
            disabled={status === 'loading' || status === 'success' || !email}
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Joining...
              </span>
            ) : status === 'success' ? (
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Joined!
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Subscribe
              </span>
            )}
          </MagneticButton>
        </div>

        {/* Status Message */}
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-sm text-center ${
              status === 'success' ? 'text-growth' : 'text-red-400'
            }`}
          >
            {message}
          </motion.p>
        )}
      </motion.form>

      {/* Privacy Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-mist/30 text-xs mt-4"
      >
        We respect your privacy. Unsubscribe at any time.
      </motion.p>
    </div>
  );
}
