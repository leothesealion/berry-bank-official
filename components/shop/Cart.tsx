'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import { redirectToCheckout } from '@/lib/stripe';

export function Cart() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  const handleCheckout = async () => {
    // If items have Stripe price IDs, redirect to checkout
    const itemsWithPriceIds = items.filter(item => item.stripePriceId);
    
    if (itemsWithPriceIds.length > 0) {
      // For simplicity, checkout with first item's price ID
      // In production, you'd use a session with multiple line items
      await redirectToCheckout(itemsWithPriceIds[0].stripePriceId!, itemsWithPriceIds[0].quantity);
    } else {
      // Show message or handle items without Stripe IDs
      alert('Checkout coming soon! We will notify you when products are available.');
    }
  };

  return (
    <>
      {/* Cart Toggle Button - Desktop Only (mobile uses FloatingDock) */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="hidden md:flex fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-berry text-mist items-center justify-center shadow-lg shadow-berry/30 hover:bg-berry/80 transition-colors"
        onClick={toggleCart}
      >
        <ShoppingBag className="w-6 h-6" />
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-growth text-xs font-bold flex items-center justify-center">
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
              onClick={toggleCart}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[201] w-full max-w-md bg-void border-l border-white/10"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <h2 className="text-xl font-bold text-mist">Your Cart</h2>
                  <button
                    onClick={toggleCart}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-mist" />
                  </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <ShoppingBag className="w-16 h-16 text-mist/20 mb-4" />
                      <p className="text-mist/60">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                        >
                          {/* Image */}
                          <div className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <ShoppingBag className="w-8 h-8 text-mist/30" />
                            )}
                          </div>

                          {/* Info */}
                          <div className="flex-1">
                            <h3 className="font-semibold text-mist mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-growth font-bold">
                              {formatPrice(item.price)}
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                              >
                                <Minus className="w-4 h-4 text-mist" />
                              </button>
                              <span className="text-mist font-medium w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                              >
                                <Plus className="w-4 h-4 text-mist" />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="ml-auto p-2 text-red-400 hover:bg-red-400/10 rounded-full transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                  <div className="p-6 border-t border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-mist/60">Total</span>
                      <span className="text-2xl font-bold text-mist">
                        {formatPrice(getTotalPrice())}
                      </span>
                    </div>

                    <button
                      onClick={handleCheckout}
                      className="w-full py-4 bg-growth text-mist rounded-full font-bold hover:bg-growth-600 transition-colors"
                    >
                      Checkout
                    </button>

                    <button
                      onClick={clearCart}
                      className="w-full py-3 mt-2 text-mist/60 hover:text-mist transition-colors text-sm"
                    >
                      Clear Cart
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
