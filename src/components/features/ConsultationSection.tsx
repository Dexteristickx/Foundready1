import { Clock, RefreshCw, Video, MapPin } from 'lucide-react';

interface ConsultationSectionProps {
  onBookConsultation: () => void;
}

const ConsultationSection = ({ onBookConsultation }: ConsultationSectionProps) => {
  const features = [
    {
      icon: Clock,
      title: '30 or 60 Minutes',
      desc: '₦75,000 for 30 mins · ₦100,000 for 60 mins',
    },
    {
      icon: RefreshCw,
      title: 'Fee Redeemable',
      desc: 'Fee credited against Tiers 1, 2, or 3 within 30 days (Excludes Tier 0)',
    },
    {
      icon: Video,
      title: 'Video or In-Person',
      desc: 'Online video call or visit Abuja, Lagos, or Ibadan',
    },
    {
      icon: MapPin,
      title: 'Any Sector',
      desc: 'We cover all Nigerian industries and regulatory bodies',
    },
  ];

  const covers = [
    'Review of your current legal and compliance position',
    'Identification of gaps and risks in your current structure',
    'Recommendation of the appropriate FoundReady tier',
    'Specific documents tailored to your business model',
    'Regulatory assessment — whether you need a licence and which agency applies',
    'Q&A on legal, compliance and corporate secretarial matters',
  ];

  return (
    <section id="consultation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(20,85%,38%)]">
              Expert Advisory
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(20,30%,8%)] mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Not Sure Which Package You Need?
            </h2>
            <p className="text-base text-[hsl(20,10%,40%)] leading-relaxed mb-8">
              Book a paid consultation with our aasecretaries/AALP team. We review your
              legal and compliance position, identify gaps, and recommend exactly what
              your business needs — before you commit to a package.
            </p>

            {/* What's Covered */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[hsl(20,10%,45%)] mb-4">
                The Consultation Covers
              </h3>
              <ul className="space-y-3">
                {covers.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[hsl(28,95%,52%)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(28,95%,52%)]" />
                    </div>
                    <span className="text-sm text-[hsl(20,15%,30%)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onBookConsultation}
              className="inline-flex items-center gap-2 bg-[hsl(20,85%,28%)] hover:bg-[hsl(20,85%,22%)] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Book a Consultation
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-[hsl(20,85%,28%)] rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[hsl(28,95%,52%)] px-8 py-6">
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                FoundReady Consultation
              </h3>
              <p className="text-white/80 text-sm mt-1">
                by Aviel Alpha Secretaries Limited & AALP
              </p>
            </div>

            {/* Pricing Options */}
            <div className="p-8 space-y-4">
              {[
                { duration: '30 Minutes', price: '₦75,000', desc: 'Quick advisory for focused questions' },
                { duration: '60 Minutes', price: '₦100,000', desc: 'Comprehensive compliance review' },
              ].map((opt) => (
                <div
                  key={opt.duration}
                  className="bg-[hsl(20,75%,22%)] border border-[hsl(20,50%,32%)] rounded-xl p-5"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-semibold text-base">{opt.duration} Session</p>
                      <p className="text-[hsl(25,15%,70%)] text-xs mt-1">{opt.desc}</p>
                    </div>
                    <span className="text-[hsl(42,90%,62%)] font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {opt.price}
                    </span>
                  </div>
                </div>
              ))}

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-[hsl(20,75%,22%)] rounded-lg p-4">
                    <Icon size={16} className="text-[hsl(42,90%,62%)] mb-2" />
                    <p className="text-white text-xs font-semibold leading-snug">{title}</p>
                    <p className="text-[hsl(25,15%,65%)] text-xs mt-1 leading-snug">{desc}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={onBookConsultation}
                className="w-full bg-[hsl(28,95%,52%)] hover:bg-[hsl(28,95%,44%)] text-white font-semibold py-4 rounded-lg transition-colors duration-200 text-sm mt-2"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
