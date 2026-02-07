'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useUIStore, useCartStore } from '@/lib/store';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Green Hub', href: '/green-hub' },
  { label: 'Mission', href: '/mission' },
  { label: 'Impact', href: '/impact' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const { toggleCart } = useUIStore();
  const cartItems = useCartStore((state) => state.getTotalItems());
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Universal Glass Header - Desktop Only */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 h-16 hidden md:flex items-center justify-between px-6 bg-black/10 backdrop-blur-md border-b border-white/10 transition-all duration-300"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-berry group-hover:bg-berry/80 transition-colors">
            <Leaf className="w-5 h-5 text-mist" />
          </div>
          <span className="font-bold text-xl text-mist">
            Berry Bank
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  isActive
                    ? 'bg-berry text-mist'
                    : 'text-mist/70 hover:text-mist hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Cart + CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleCart}
            className="relative p-2.5 rounded-full text-mist/70 hover:text-mist hover:bg-white/10 transition-all"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-berry text-mist text-xs font-bold rounded-full flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </button>
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full font-semibold bg-growth text-mist hover:bg-growth/80 hover:shadow-lg hover:shadow-growth/30 transition-all"
          >
            Join Waitlist
          </Link>
        </div>
      </motion.header>
    </>
  );
}
