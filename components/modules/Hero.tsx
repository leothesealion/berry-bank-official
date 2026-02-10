'use client';

import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/core';
import { ReactivePixelBackground } from './ReactivePixelBackground';

interface HeroProps {
  cmsData?: {
    heroHeadline?: string;
    heroSubline?: string;
    heroHook?: string;
    ctaText?: string;
    heroBadge?: string;
    heroLearnMoreText?: string;
  } | null;
}

export function Hero({ cmsData }: HeroProps) {
  const headline = cmsData?.heroHeadline || "Latin America's First Fully Green Digital Bank";
  const subline = cmsData?.heroSubline || "Don't choose between a sleek experience and saving the planet.";
  const hook = cmsData?.heroHook || 'Switching to a green bank reduces your carbon footprint by 52.2%.';
  const cta = cmsData?.ctaText || 'Join the Waitlist';
  const badge = cmsData?.heroBadge || 'Now accepting early access signups';
  const learnMore = cmsData?.heroLearnMoreText || 'Learn More';

  const handleJoinWaitlist = () => {
    const joinSection = document.querySelector('#join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-berry">
      {/* Reactive Pixel Background */}
      <ReactivePixelBackground
        pixelSize={25}
        color="#FAFAFA"
        trailLength={12}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-berry/50 via-transparent to-berry/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-growth animate-pulse" />
            <span className="text-sm text-mist/90 font-medium">
              {badge}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-mist mb-6 leading-tight"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-mist/80 mb-4 font-medium"
          >
            {subline}
          </motion.p>

          {/* Hook/Stat */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-mist/60 mb-10 max-w-2xl mx-auto"
          >
            {hook}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton
              variant="secondary"
              size="lg"
              onClick={handleJoinWaitlist}
            >
              {cta}
            </MagneticButton>

            <MagneticButton
              variant="outline"
              size="lg"
              onClick={() => {
                const greenHubSection = document.querySelector('#green-hub');
                if (greenHubSection) {
                  greenHubSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {learnMore}
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-mist/50 uppercase tracking-wider">
              Scroll
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-mist/30 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-mist/50"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
