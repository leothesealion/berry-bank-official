import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Berry Bank | Latin America's First Green Digital Bank",
  description:
    "Where your money grows green. Berry Bank is Latin America's first fully green digital bank. Switching to a green bank reduces your carbon footprint by 52.2%.",
  keywords: [
    'green bank',
    'digital bank',
    'sustainable banking',
    'eco-friendly',
    'Latin America',
    'fintech',
    'carbon footprint',
  ],
  authors: [{ name: 'Berry Fintech, Inc.' }],
  openGraph: {
    title: "Berry Bank | Latin America's First Green Digital Bank",
    description:
      "Where your money grows green. Switching to a green bank reduces your carbon footprint by 52.2%.",
    url: 'https://berrybank.app',
    siteName: 'Berry Bank',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Berry Bank | Latin America's First Green Digital Bank",
    description:
      "Where your money grows green. Switching to a green bank reduces your carbon footprint by 52.2%.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Pass-through root layout - no styles here to avoid wrapping Studio
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
