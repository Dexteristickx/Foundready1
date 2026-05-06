import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Adaeze O.',
    title: 'Co-Founder, Healthtech Startup — Lagos',
    quote:
      "FoundReady saved us months of confusion. We had an idea, a prototype, and no legal structure. Within two weeks we had our CAC certificate, shareholders' agreement and all our compliance documents. Exactly what we needed to raise our pre-seed.",
    initials: 'AO',
  },
  {
    name: 'Emeka D.',
    title: 'Founder, Logistics Platform — Abuja',
    quote:
      "I had been operating for 18 months without a single legal document. The Growth Pack gave us our driver agreements, cargo policies and privacy policy — all tailored to our specific model. Worth every naira.",
    initials: 'ED',
  },
  {
    name: 'Fatima B.',
    title: 'CEO, Fintech Startup — Lagos',
    quote:
      "The consultation was the best investment I made before launch. They identified two licensing requirements I hadn't even considered. The Regulatory Pack handled everything from CBN licensing advisory to the full application.",
    initials: 'FB',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[hsl(20,85%,28%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(42,90%,62%)]">
            Founder Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Founders Are Saying
          </h2>
          <p className="text-base text-[hsl(25,15%,75%)] max-w-2xl mx-auto leading-relaxed">
            Testimonials will be populated as reviews come in. These are representative of the experience we deliver.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[hsl(20,75%,22%)] border border-[hsl(20,50%,35%)] rounded-2xl p-7 flex flex-col"
            >
              <Quote size={28} className="text-[hsl(42,90%,62%)] mb-5 opacity-80" />
              <p className="text-[hsl(25,15%,82%)] text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[hsl(20,45%,35%)]">
                <div className="w-10 h-10 rounded-full bg-[hsl(28,95%,52%)] flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-[hsl(25,15%,65%)] text-xs mt-0.5">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
