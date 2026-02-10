'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
      >
        <SplitRevealAnimation />
      </motion.div>
    </AnimatePresence>
  );
}

// Split Reveal - Screen splits to reveal content
function SplitRevealAnimation() {
  return (
    <>
      {/* Left panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ delay: 1.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 left-0 w-1/2 bg-berry/95 backdrop-blur-md flex items-center justify-end pr-8 pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Image 
            src="/images/logo.svg" 
            alt="Berry Bank" 
            width={80} 
            height={80}
            style={{ filter: 'invert(1) brightness(1.2)' }}
          />
        </motion.div>
      </motion.div>

      {/* Right panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ delay: 1.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 right-0 w-1/2 bg-growth/95 backdrop-blur-md flex items-center justify-start pl-8 pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-left"
        >
          <h1 className="text-3xl font-bold text-void">Berry Bank</h1>
          <p className="text-void/70 text-sm mt-1">Green Banking</p>
        </motion.div>
      </motion.div>
    </>
  );
}

