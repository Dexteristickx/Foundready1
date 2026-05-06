import { Check, Star } from 'lucide-react';
import { TIERS } from '@/constants/data';
import type { Tier } from '@/types';

interface TierCardsProps {
  onBuyTier1: () => void;
  onBookConsultation: (tier: 2 | 3) => void;
}

const TierCard = ({
  tier,
  onBuyTier1,
  onBookConsultation,
}: {
  tier: Tier;
  onBuyTier1: () => void;
  onBookConsultation: (t: 2 | 3) => void;
}) => {
  const handleCTA = () => {
    if (tier.id === 1) onBuyTier1();
    else onBookConsultation(tier.id as 2 | 3);
  };

  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        tier.featured
          ? 'border-[hsl(28,95%,52%)] shadow-xl shadow-[hsl(28,95%,52%)]/15'
          : 'border-[hsl(25,15%,88%)] shadow-md'
      }`}
    >
      {/* Featured Badge */}
      {tier.featured && (
        <div className="absolute top-0 left-0 right-0 bg-[hsl(28,95%,52%)] text-white text-xs font-bold uppercase tracking-widest text-center py-2 flex items-center justify-center gap-1.5">
          <Star size={11} fill="currentColor" />
          Most Popular
          <Star size={11} fill="currentColor" />
        </div>
      )}

      {/* Header */}
      <div
        className={`px-7 py-7 ${tier.featured ? 'pt-12' : 'pt-7'} ${
          tier.featured ? 'bg-[hsl(20,85%,28%)]' : 'bg-[hsl(25,30%,97%)]'
        }`}
      >
        <div className="mb-1">
          <span
            className={`text-xs font-semibold uppercase tracking-widest ${
              tier.featured ? 'text-[hsl(42,90%,62%)]' : 'text-[hsl(20,85%,38%)]'
            }`}
          >
            Tier {tier.id}
          </span>
        </div>
        <h3
          className={`text-2xl font-bold mb-2 ${tier.featured ? 'text-white' : 'text-[hsl(20,30%,8%)]'}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {tier.name}
        </h3>
        <p className={`text-sm leading-relaxed mb-5 ${tier.featured ? 'text-[hsl(25,15%,80%)]' : 'text-[hsl(20,10%,45%)]'}`}>
          {tier.tagline}
        </p>
        <div className="mb-1">
          <span
            className={`text-3xl font-bold ${tier.featured ? 'text-[hsl(42,90%,62%)]' : 'text-[hsl(20,85%,28%)]'}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {tier.price}
          </span>
        </div>
        <p className={`text-xs ${tier.featured ? 'text-[hsl(25,15%,72%)]' : 'text-[hsl(20,10%,50%)]'}`}>
          {tier.priceNote}
        </p>
      </div>

      {/* Details */}
      <div className={`px-7 py-5 border-t ${tier.featured ? 'bg-[hsl(20,80%,23%)] border-[hsl(20,50%,32%)]' : 'bg-white border-[hsl(25,15%,92%)]'}`}>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className={`font-semibold ${tier.featured ? 'text-[hsl(42,90%,62%)]' : 'text-[hsl(20,85%,28%)]'}`}>Payment</span>
            <p className={`mt-0.5 leading-relaxed ${tier.featured ? 'text-[hsl(25,15%,72%)]' : 'text-[hsl(20,10%,45%)]'}`}>{tier.paymentStructure}</p>
          </div>
          <div>
            <span className={`font-semibold ${tier.featured ? 'text-[hsl(42,90%,62%)]' : 'text-[hsl(20,85%,28%)]'}`}>Consultation</span>
            <p className={`mt-0.5 ${tier.featured ? 'text-[hsl(25,15%,72%)]' : 'text-[hsl(20,10%,45%)]'}`}>{tier.consultationRequired}</p>
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className={`flex-1 px-7 py-6 ${tier.featured ? 'bg-[hsl(20,80%,23%)]' : 'bg-white'}`}>
        <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${tier.featured ? 'text-[hsl(25,15%,70%)]' : 'text-[hsl(20,10%,50%)]'}`}>
          What's Included
        </p>
        <ul className="space-y-2.5">
          {tier.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check
                size={15}
                className={`shrink-0 mt-0.5 ${tier.featured ? 'text-[hsl(42,90%,62%)]' : 'text-[hsl(20,85%,38%)]'}`}
              />
              <span className={`text-sm leading-snug ${tier.featured ? 'text-[hsl(25,15%,82%)]' : 'text-[hsl(20,20%,25%)]'}`}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className={`px-7 py-6 border-t ${tier.featured ? 'bg-[hsl(20,75%,18%)] border-[hsl(20,45%,28%)]' : 'bg-[hsl(25,20%,97%)] border-[hsl(25,15%,90%)]'}`}>
        <button
          onClick={handleCTA}
          className={`w-full py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
            tier.featured
              ? 'bg-[hsl(28,95%,52%)] hover:bg-[hsl(28,95%,44%)] text-white shadow-md hover:shadow-lg'
              : tier.id === 1
              ? 'bg-[hsl(20,85%,28%)] hover:bg-[hsl(20,85%,22%)] text-white'
              : 'border-2 border-[hsl(20,85%,28%)] text-[hsl(20,85%,28%)] hover:bg-[hsl(25,30%,95%)]'
          }`}
        >
          {tier.ctaLabel}
        </button>
        {tier.id === 1 && (
          <p className={`text-xs text-center mt-2 ${tier.featured ? 'text-[hsl(25,15%,65%)]' : 'text-[hsl(20,10%,50%)]'}`}>
            ₦300,000 balance due on delivery
          </p>
        )}
        {(tier.id === 2 || tier.id === 3) && (
          <p className={`text-xs text-center mt-2 ${tier.featured ? 'text-[hsl(25,15%,65%)]' : 'text-[hsl(20,10%,50%)]'}`}>
            Consultation fee redeemable against package
          </p>
        )}
      </div>
    </div>
  );
};

const TierCards = ({ onBuyTier1, onBookConsultation }: TierCardsProps) => {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(20,85%,38%)]">
            Fixed-Price Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(20,30%,8%)] mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Choose Your Package
          </h2>
          <p className="text-base text-[hsl(20,10%,45%)] max-w-2xl mx-auto leading-relaxed">
            Three tiers designed for every stage of your startup journey. All prices are fixed. No hidden fees.
            All government statutory fees included in Tier 1.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {TIERS.map((tier) => (
            <TierCard
              key={tier.id}
              tier={tier}
              onBuyTier1={onBuyTier1}
              onBookConsultation={onBookConsultation}
            />
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-12 bg-[hsl(25,30%,97%)] border border-[hsl(25,15%,88%)] rounded-xl p-6 text-center">
          <p className="text-sm text-[hsl(20,10%,40%)] leading-relaxed">
            <strong className="text-[hsl(20,85%,28%)]">Additional trademark classes</strong> available at{' '}
            <strong className="text-[hsl(20,85%,28%)]">₦175,000 per class.</strong> All packages include government liaison and status updates throughout the process.
            Need guidance? <button onClick={onBookConsultation.bind(null, 2)} className="text-[hsl(20,85%,28%)] underline font-semibold hover:text-[hsl(28,95%,44%)] transition-colors">Book a consultation</button> — the fee is fully redeemable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TierCards;
