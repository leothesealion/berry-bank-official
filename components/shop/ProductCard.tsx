'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Plus } from 'lucide-react';
import { TiltCard } from '@/components/core';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image?: string;
  description?: string;
  stripePriceId?: string;
}

export function ProductCard({
  id,
  title,
  price,
  image,
  description,
  stripePriceId,
}: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      price,
      image,
      stripePriceId,
    });
  };

  return (
    <TiltCard className="h-full" tiltAmount={6} glareEnabled={true}>
      <div className="h-full flex flex-col bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
        {/* Image */}
        <div className="relative aspect-square bg-white/5">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-mist/20" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col">
          <h3 className="text-lg font-bold text-mist mb-1">{title}</h3>
          {description && (
            <p className="text-sm text-mist/60 mb-3 line-clamp-2">
              {description}
            </p>
          )}
          
          <div className="mt-auto flex items-center justify-between">
            <span className="text-xl font-bold text-growth">
              {formatPrice(price)}
            </span>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="flex items-center gap-2 px-4 py-2 bg-berry rounded-full text-mist text-sm font-semibold hover:bg-berry-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add
            </motion.button>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
