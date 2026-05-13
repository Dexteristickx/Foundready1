import heroBg from '@/assets/hero-bg.jpg';
import { Shield, FileCheck, Award } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
  onBookConsultation: () => void;
}

const HeroSection = ({ onGetStarted, onBookConsultation }: HeroSectionProps) => {
  const trust = [
    { icon: Shield, label: 'CAC Registered', sub: 'Fully licensed corporate secretaries' },
    { icon: FileCheck, label: 'NDPA Compliant', sub: 'Nigeria Data Protection Act 2023' },
    { icon: Award, label: 'Backed by AALP', sub: 'Aviel Avenante Law Practice' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional legal services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(18,55%,8%)]/95 via-[hsl(20,50%,12%)]/80 to-[hsl(20,50%,12%)]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[hsl(28,95%,52%)]/15 border border-[hsl(28,95%,52%)]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(28,95%,52%)]" />
            <span className="text-[hsl(28,95%,52%)] text-xs font-semibold uppercase tracking-widest">
              Nigeria's Startup Legal & Compliance Pack
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get Incorporated.
            <br />
            <span className="text-[hsl(28,95%,52%)]">Get Documented.</span>
            <br />
            Get Compliant.
          </h1>

          {/* Sub */}
          <p className="text-lg text-[hsl(25,15%,80%)] leading-relaxed mb-10 max-w-2xl">
            FoundReady is a fixed-price, end-to-end legal and compliance solution built for Nigerian founders.
            Select your package, pay online, and receive everything your startup needs to operate legally — delivered by professionals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center justify-center gap-2 bg-[hsl(28,95%,52%)] hover:bg-[hsl(28,95%,44%)] text-white font-semibold text-base px-8 py-4 rounded transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started — from ₦250,000
            </button>
            <button
              onClick={onBookConsultation}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded border border-white/30 transition-all duration-200"
            >
              Book a Consultation
            </button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trust.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white/8 border border-white/10 rounded-lg px-4 py-3"
              >
                <div className="w-9 h-9 rounded bg-[hsl(28,95%,52%)]/20 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-[hsl(28,95%,52%)]" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{label}</p>
                  <p className="text-[hsl(25,10%,65%)] text-xs leading-tight mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
