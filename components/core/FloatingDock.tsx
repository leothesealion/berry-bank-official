'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, Leaf, ShoppingBag, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useUIStore, useCartStore } from '@/lib/store';

const icons = {
  Home,
  Leaf,
  ShoppingBag,
  ShoppingCart,
  User,
};

interface DockItem {
  label: string;
  href: string;
  icon: keyof typeof icons;
  isAction?: boolean;
}

const dockItems: DockItem[] = [
  { label: 'Home', href: '/', icon: 'Home' },
  { label: 'Hub', href: '/green-hub', icon: 'Leaf' },
  { label: 'Shop', href: '/shop', icon: 'ShoppingBag' },
  { label: 'Cart', href: '#cart', icon: 'ShoppingCart', isAction: true },
  { label: 'Profile', href: '/contact', icon: 'User' },
];

export function FloatingDock() {
  const pathname = usePathname();
  const { toggleCart } = useUIStore();
  const cartItems = useCartStore((state) => state.getTotalItems());

  const handleClick = (item: DockItem, e: React.MouseEvent) => {
    if (item.isAction && item.href === '#cart') {
      e.preventDefault();
      toggleCart();
    }
  };

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-4 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      {dockItems.map((item) => {
        const Icon = icons[item.icon];
        const isActive = !item.isAction && pathname === item.href;
        const isCart = item.isAction && item.href === '#cart';

        const content = (
          <motion.div
            className={cn(
              'relative p-3 rounded-full transition-colors',
              isActive
                ? 'text-berry bg-berry/20'
                : 'text-mist/60 hover:text-mist hover:bg-white/10'
            )}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="w-5 h-5" />
            
            {/* Cart badge */}
            {isCart && cartItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-berry text-mist text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartItems}
              </span>
            )}
            
            {/* Active indicator */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId="dock-indicator"
                  className="absolute inset-0 rounded-full bg-berry/20 border border-berry/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        );

        if (item.isAction) {
          return (
            <button
              key={item.label}
              onClick={(e) => handleClick(item, e)}
              aria-label={item.label}
            >
              {content}
            </button>
          );
        }

        return (
          <Link key={item.label} href={item.href}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}