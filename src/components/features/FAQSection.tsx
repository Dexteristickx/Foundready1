import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/constants/data';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-[hsl(25,25%,96%)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(20,85%,38%)]">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(20,30%,8%)] mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[hsl(20,10%,45%)] leading-relaxed">
            Everything you need to know about FoundReady packages and the process.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border-2 overflow-hidden transition-all duration-200 ${
                openIndex === index
                  ? 'border-[hsl(20,85%,28%)] shadow-md'
                  : 'border-[hsl(25,15%,88%)] shadow-sm hover:border-[hsl(20,85%,44%)]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[hsl(20,30%,8%)] text-base leading-snug pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[hsl(20,85%,28%)] transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-[hsl(25,15%,90%)] mb-4" />
                  <p className="text-sm text-[hsl(20,10%,40%)] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[hsl(20,10%,45%)] mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/2347072752983"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(20,85%,28%)] hover:bg-[hsl(20,85%,22%)] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Contact Support
            </a>
            <a
              href="mailto:hello@aasecretaries.com.ng"
              className="inline-flex items-center justify-center gap-2 border-2 border-[hsl(20,85%,28%)] text-[hsl(20,85%,28%)] hover:bg-[hsl(25,30%,95%)] font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
