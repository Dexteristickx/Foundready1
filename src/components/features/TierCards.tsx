import { Check, Star } from 'lucide-react';
import { TIERS } from '@/constants/data';
import type { Tier } from '@/types';

interface TierCardsProps {
  onBuyTier0: () => void;
  onBuyTier1: () => void;
  onBookConsultation: (tier: 2 | 3) => void;
}

const TierCard = ({
  tier,
  onBuyTier0,
  onBuyTier1,
  onBookConsultation,
}: {
  tier: Tier;
  onBuyTier0: () => void;
  onBuyTier1: () => void;
  onBookConsultation: (t: 2 | 3) => void;
}) => {
  const handleCTA = () => {
    if (tier.id === 0) onBuyTier0();
    else if (tier.id === 1) onBuyTier1();
    else onBookConsultation(tier.id as 2 | 3);
  };

  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        tier.featured
          ? 'border-[hsl(24,100%,50%)] shadow-xl shadow-[hsl(24,100%,50%)]/15'
          : 'border-[hsl(25,15%,88%)] shadow-md'
      }`}
    >
      {/* Featured Badge */}
      {tier.featured && (
        <div className="absolute top-0 left-0 right-0 bg-[hsl(24,100%,50%)] text-white text-[10px] font-bold uppercase tracking-widest text-center py-2 flex items-center justify-center gap-1.5 z-10">
          <Star size={10} fill="currentColor" />
          Recommended / Most Popular
          <Star size={10} fill="currentColor" />
        </div>
      )}

      {/* Header */}
      <div
        className={`px-6 py-7 ${tier.featured ? 'pt-12' : 'pt-7'} ${
          tier.featured ? 'bg-[hsl(24,100%,45%)]' : 'bg-[hsl(25,30%,97%)]'
        }`}
      >
        <div className="mb-1">
          <span
            className={`text-[10px] font-semibold uppercase tracking-widest ${
              tier.featured ? 'text-orange-200' : 'text-[hsl(24,100%,35%)]'
            }`}
          >
            Tier {tier.id}
          </span>
        </div>
        <h3
          className={`text-xl font-bold mb-2 ${tier.featured ? 'text-white' : 'text-[hsl(20,30%,8%)]'}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {tier.name}
        </h3>
        <p className={`text-xs leading-relaxed mb-5 h-10 overflow-hidden ${tier.featured ? 'text-[hsl(25,15%,80%)]' : 'text-[hsl(20,10%,45%)]'}`}>
          {tier.tagline}
        </p>
        <div className="mb-1">
          <span
            className={`text-2xl font-bold ${tier.featured ? 'text-white' : 'text-[hsl(24,100%,45%)]'}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {tier.price}
          </span>
        </div>
        <p className={`text-[10px] ${tier.featured ? 'text-[hsl(25,15%,72%)]' : 'text-[hsl(20,10%,50%)]'}`}>
          {tier.priceNote}
        </p>
      </div>

      {/* Details */}
      <div className={`px-6 py-4 border-t ${tier.featured ? 'bg-[hsl(24,100%,40%)] border-[hsl(24,100%,35%)]' : 'bg-white border-[hsl(25,15%,92%)]'}`}>
        <div className="space-y-2 text-[11px]">
          <div className="flex justify-between items-center">
            <span className={`font-semibold ${tier.featured ? 'text-orange-200' : 'text-[hsl(24,100%,45%)]'}`}>Payment</span>
            <p className={`${tier.featured ? 'text-[hsl(25,15%,72%)]' : 'text-[hsl(20,10%,45%)]'}`}>{tier.paymentStructure}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className={`font-semibold ${tier.featured ? 'text-orange-200' : 'text-[hsl(24,100%,45%)]'}`}>Consultation</span>
            <p className={`${tier.featured ? 'text-[hsl(25,15%,72%)]' : 'text-[hsl(20,10%,45%)]'}`}>{tier.consultationRequired}</p>
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className={`flex-1 px-6 py-6 ${tier.featured ? 'bg-[hsl(24,100%,40%)]' : 'bg-white'}`}>
        <p className={`text-[10px] font-semibold uppercase tracking-widest mb-4 ${tier.featured ? 'text-[hsl(25,15%,70%)]' : 'text-[hsl(20,10%,50%)]'}`}>
          Key Features
        </p>
        <ul className="space-y-3">
          {tier.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check
                size={14}
                className={`shrink-0 mt-0.5 ${tier.featured ? 'text-white' : 'text-[hsl(24,100%,45%)]'}`}
              />
              <span className={`text-xs leading-snug ${tier.featured ? 'text-[hsl(25,15%,82%)]' : 'text-[hsl(20,20%,25%)]'}`}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className={`px-6 py-6 border-t ${tier.featured ? 'bg-[hsl(24,100%,35%)] border-[hsl(24,100%,30%)]' : 'bg-[hsl(25,20%,97%)] border-[hsl(25,15%,90%)]'}`}>
        <button
          onClick={handleCTA}
          className={`w-full py-3 rounded-lg font-semibold text-xs transition-all duration-200 ${
            tier.featured
              ? 'bg-[hsl(24,100%,50%)] hover:bg-[hsl(24,100%,55%)] text-white shadow-md hover:shadow-lg'
              : (tier.id === 0 || tier.id === 1)
              ? 'bg-[hsl(24,100%,45%)] hover:bg-[hsl(24,100%,40%)] text-white'
              : 'border-2 border-[hsl(24,100%,45%)] text-[hsl(24,100%,45%)] hover:bg-[hsl(25,30%,95%)]'
          }`}
        >
          {tier.ctaLabel}
        </button>
        {tier.id === 1 && (
          <p className={`text-[10px] text-center mt-2 ${tier.featured ? 'text-[hsl(25,15%,65%)]' : 'text-[hsl(20,10%,50%)]'}`}>
            ₦300,000 balance due on delivery
          </p>
        )}
        {(tier.id === 2 || tier.id === 3) && (
          <p className={`text-[10px] text-center mt-2 ${tier.featured ? 'text-[hsl(25,15%,65%)]' : 'text-[hsl(20,10%,50%)]'}`}>
            Fee redeemable against package
          </p>
        )}
      </div>
    </div>
  );
};

const TierCards = ({ onBuyTier0, onBuyTier1, onBookConsultation }: TierCardsProps) => {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(24,100%,45%)]">
            Fixed-Price Legal Packs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(20,30%,8%)] mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Choose Your Package
          </h2>
          <p className="text-base text-[hsl(20,10%,45%)] max-w-2xl mx-auto leading-relaxed">
            Four tiers designed for every stage of your startup journey. All prices are fixed. No hidden fees.
            Statutory fees included in Tiers 0 & 1 for share capital up to ₦1M.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {TIERS.map((tier) => (
            <TierCard
              key={tier.id}
              tier={tier}
              onBuyTier0={onBuyTier0}
              onBuyTier1={onBuyTier1}
              onBookConsultation={onBookConsultation}
            />
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-12 bg-[hsl(25,30%,97%)] border border-[hsl(25,15%,88%)] rounded-xl p-6 text-center">
          <p className="text-sm text-[hsl(20,10%,40%)] leading-relaxed">
            <strong className="text-[hsl(24,100%,45%)]">Additional trademark classes</strong> available at{' '}
            <strong className="text-[hsl(24,100%,45%)]">₦175,000 per class.</strong> All packages include government liaison and status updates throughout.
            Need guidance? <button onClick={() => onBookConsultation(2)} className="text-[hsl(24,100%,45%)] underline font-semibold hover:text-[hsl(24,100%,35%)] transition-colors">Book a consultation</button> — the fee is fully redeemable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TierCards;
