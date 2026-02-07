'use client';

import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { ProductCard } from './ProductCard';

// Sample products - in production these would come from Sanity
const SAMPLE_PRODUCTS = [
  {
    id: '1',
    title: 'Berry Bank T-Shirt',
    price: 29.99,
    description: 'Organic cotton tee with the Berry Bank logo',
    image: null,
    stripePriceId: undefined,
  },
  {
    id: '2',
    title: 'Eco Water Bottle',
    price: 24.99,
    description: 'Reusable stainless steel bottle',
    image: null,
    stripePriceId: undefined,
  },
  {
    id: '3',
    title: 'Berry Tote Bag',
    price: 19.99,
    description: 'Sustainable canvas tote bag',
    image: null,
    stripePriceId: undefined,
  },
];

export function ShopSection() {
  return (
    <div className="relative w-full h-full bg-void flex items-center justify-center p-6 md:p-12 overflow-y-auto">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-growth/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-berry/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-growth/10 border border-growth/20 mb-4">
            <ShoppingBag className="w-4 h-4 text-growth" />
            <span className="text-sm font-medium text-growth">Merch Store</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-mist mb-4">
            Shop Berry
          </h2>
          <p className="text-mist/60 max-w-xl mx-auto">
            Support sustainable banking with eco-friendly merchandise. All products are made with environmentally conscious materials.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image || undefined}
                stripePriceId={product.stripePriceId}
              />
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-mist/40 text-sm mt-8"
        >
          More products coming soon. Join the waitlist to be notified!
        </motion.p>
      </div>
    </div>
  );
}
