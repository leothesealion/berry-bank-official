import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, ShoppingBag, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Order Successful | Berry Bank',
  description: 'Thank you for your purchase!',
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-void text-mist flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-growth/20 mb-4">
            <CheckCircle className="w-10 h-10 text-growth" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Successful!</h1>
          <p className="text-mist/60">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="w-5 h-5 text-berry" />
            <span className="font-semibold">Order Confirmation</span>
          </div>
          <p className="text-sm text-mist/60">
            A confirmation email has been sent to your inbox with your order details.
          </p>
        </div>

        {/* Environmental Impact */}
        <div className="bg-growth/10 border border-growth/20 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Leaf className="w-5 h-5 text-growth" />
            <span className="font-semibold text-growth">Eco Impact</span>
          </div>
          <p className="text-sm text-mist/70">
            Your purchase supports sustainable practices. Thank you for choosing eco-friendly!
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-berry text-mist rounded-full font-semibold hover:bg-berry-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <Link
            href="/#shop"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white/5 border border-white/10 text-mist rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
