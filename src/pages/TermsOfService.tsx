import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none space-y-8 text-[hsl(20,10%,30%)] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[hsl(20,30%,8%)] mb-4">1. Scope of Service</h2>
              <p>
                FoundReady provides business registration and legal documentation services through Aviel Alpha Secretaries Limited, a firm of chartered secretaries and legal practitioners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[hsl(20,30%,8%)] mb-4">2. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>The Essentials Pack:</strong> 100% upfront payment is required.</li>
                <li><strong>The Pro Pack:</strong> 70% upfront payment (₦700,000) and 30% (₦300,000) upon delivery.</li>
              </ul>
              <p className="mt-4">All statutory and government fees are included in the quoted prices unless otherwise stated.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[hsl(20,30%,8%)] mb-4">3. Client Responsibilities</h2>
              <p>
                Clients must provide accurate information and valid identification documents as required by the Corporate Affairs Commission (CAC) and other regulatory bodies in Nigeria. FoundReady is not liable for delays caused by inaccurate information provided by the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[hsl(20,30%,8%)] mb-4">4. Timelines</h2>
              <p>
                Standard business registration typically takes 7-10 working days after successful name reservation. These timelines are subject to the processing speed of the CAC.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[hsl(20,30%,8%)] mb-4">5. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Federal Republic of Nigeria.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
