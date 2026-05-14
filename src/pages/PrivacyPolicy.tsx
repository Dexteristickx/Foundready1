import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[hsl(25,30%,98%)] text-[hsl(20,30%,8%)]">
      {/* Navigation */}
      <nav className="bg-white border-b border-[hsl(25,15%,90%)] sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-[hsl(20,85%,28%)] hover:text-[hsl(28,95%,52%)] transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>FoundReady</span>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-[hsl(25,15%,90%)] p-8 md:p-12">
          <p className="text-[hsl(28,95%,52%)] text-xs font-bold uppercase tracking-widest mb-4">Last Updated: May 2026</p>
          <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-8 text-[hsl(20,10%,30%)] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[hsl(20,30%,8%)] mb-4">1. Introduction</h2>
              <p>
                Aviel Alpha Secretaries Limited ("FoundReady", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[hsl(20,30%,8%)] mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Purchase a FoundReady legal pack</li>
                <li>Book a consultation</li>
                <li>Contact us through our website or WhatsApp</li>
                <li>Provide documents for CAC incorporation or trademark registration</li>
              </ul>
              <p className="mt-4">This information may include your full name, email address, phone number, business details, director information, and identification documents.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[hsl(20,30%,8%)] mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information for purposes including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing your company incorporation with the Corporate Affairs Commission (CAC)</li>
                <li>Drafting founders' agreements and other legal documents</li>
                <li>Communicating with you about your order status</li>
                <li>Sending you important updates regarding Nigerian compliance and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[hsl(20,30%,8%)] mb-4">4. Data Protection (NDPA 2023)</h2>
              <p>
                In accordance with the Nigeria Data Protection Act (NDPA) 2023, we implement strict technical and organizational measures to ensure the security of your personal data. We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[hsl(20,30%,8%)] mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <span className="font-semibold text-[hsl(20,85%,28%)]">talk@aasecretaries.com.ng</span>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
