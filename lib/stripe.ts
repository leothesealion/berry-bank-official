import { loadStripe } from '@stripe/stripe-js';

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

let stripePromise: Promise<any> | null = null;

export const getStripe = () => {
  if (!stripePromise && stripePublishableKey) {
    stripePromise = loadStripe(stripePublishableKey);
  }
  return stripePromise;
};

export async function redirectToCheckout(priceId: string, quantity: number = 1) {
  const stripe = await getStripe();
  
  if (!stripe) {
    console.error('Stripe not loaded');
    return;
  }

  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity }],
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/shop`,
  });

  if (error) {
    console.error('Stripe checkout error:', error);
  }
}
