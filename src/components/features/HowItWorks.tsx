import { JOURNEY_STEPS } from '@/constants/data';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[hsl(25,25%,96%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(20,85%,38%)]">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(20,30%,8%)] mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            How FoundReady Works
          </h2>
          <p className="text-base text-[hsl(20,10%,45%)] max-w-2xl mx-auto leading-relaxed">
            From discovery to delivery — a clear, structured journey with no surprises.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line - Desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-gradient-to-r from-[hsl(25,15%,88%)] via-[hsl(28,95%,52%)] to-[hsl(25,15%,88%)]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOURNEY_STEPS.slice(0, 4).map((step) => (
              <StepCard key={step.step} step={step} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:max-w-3xl lg:mx-auto">
            {JOURNEY_STEPS.slice(4).map((step) => (
              <StepCard key={step.step} step={step} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[hsl(20,85%,28%)] rounded-2xl px-8 py-6">
            <div className="text-left">
              <p className="text-white font-semibold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to start your journey?
              </p>
              <p className="text-[hsl(25,15%,75%)] text-sm mt-1">
                Tier 1 is self-select — no consultation required.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="shrink-0 bg-[hsl(28,95%,52%)] hover:bg-[hsl(28,95%,44%)] text-white font-semibold text-sm px-7 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap"
            >
              See Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step }: { step: { step: number; title: string; description: string } }) => (
  <div className="bg-white rounded-xl border border-[hsl(25,15%,88%)] p-6 shadow-sm hover:shadow-md transition-shadow duration-200 relative">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-[hsl(20,85%,28%)] flex items-center justify-center shrink-0">
        <span className="text-white text-sm font-bold">{step.step}</span>
      </div>
      <h3 className="font-semibold text-[hsl(20,30%,8%)] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
        {step.title}
      </h3>
    </div>
    <p className="text-sm text-[hsl(20,10%,45%)] leading-relaxed">{step.description}</p>
  </div>
);

export default HowItWorks;
