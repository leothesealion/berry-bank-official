import { Metadata } from 'next';
import { Leaf, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Berry Bank',
  description: 'Berry Bank privacy policy and data protection information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-void text-mist py-20 pb-28 md:pb-20 px-6" data-nav-theme="dark">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-mist/60 hover:text-mist transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-berry flex items-center justify-center">
              <Leaf className="w-6 h-6 text-mist" />
            </div>
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          
          <p className="text-mist/60">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-bold text-mist mb-4">1. Introduction</h2>
            <p className="text-mist/70 leading-relaxed">
              Berry Fintech, Inc. (&quot;Berry Bank,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-mist mb-4">2. Information We Collect</h2>
            <p className="text-mist/70 leading-relaxed mb-4">
              We may collect information about you in various ways, including:
            </p>
            <ul className="list-disc list-inside text-mist/70 space-y-2">
              <li>Personal information you provide (name, email, etc.)</li>
              <li>Financial information necessary for banking services</li>
              <li>Device and usage information</li>
              <li>Location data (with your consent)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-mist mb-4">3. Data Security</h2>
            <p className="text-mist/70 leading-relaxed">
              We use AES-256 encryption and adhere to PCI-DSS compliance standards to protect your data. 
              We implement administrative, technical, and physical security measures to safeguard your personal information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-mist mb-4">4. How We Use Your Information</h2>
            <p className="text-mist/70 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-mist/70 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-mist mb-4">5. Contact Us</h2>
            <p className="text-mist/70 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-mist mt-4">
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@berrybank.app" className="text-berry hover:underline">
                contact@berrybank.app
              </a>
            </p>
            <p className="text-mist mt-2">
              <strong>Address:</strong> Berry Fintech, Inc., Austin, TX
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-mist/40">
          <p>© {new Date().getFullYear()} Berry Fintech, Inc. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
