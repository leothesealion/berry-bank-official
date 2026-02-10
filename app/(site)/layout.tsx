import { M_PLUS_2 } from 'next/font/google';
import '@/app/globals.css';
import { FlyoutNav, FloatingDock, LoadingScreen } from '@/components/core';
import { Cart } from '@/components/shop';

const mplus = M_PLUS_2({
  subsets: ['latin'],
  variable: '--font-mplus',
  display: 'swap',
});

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${mplus.variable} font-sans bg-void text-mist antialiased`}>
      <LoadingScreen />
      <FlyoutNav />
      <FloatingDock />
      <Cart />
      {children}
    </div>
  );
}
