import { Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[hsl(18,55%,12%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Aviel Alpha Logo" className="h-12 w-auto" />
              <div>
                <p className="text-[10px] font-medium text-[hsl(25,20%,60%)] uppercase tracking-widest mb-1">
                  Aviel Alpha Secretaries Limited
                </p>
                <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Found<span className="text-[hsl(28,95%,52%)]">Ready</span>
                </h3>
              </div>
            </div>
            <p className="text-sm text-[hsl(25,15%,70%)] leading-relaxed max-w-xs">
              Nigeria's Startup Legal & Compliance Pack. Get incorporated. Get documented. Get compliant.
            </p>
            <div className="flex items-center gap-2 text-sm text-[hsl(25,15%,65%)]">
              <MapPin size={14} className="text-[hsl(28,95%,52%)] shrink-0" />
              <span>Abuja · Lagos · Ibadan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[hsl(28,95%,52%)]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Packages & Pricing', href: '#packages' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Book a Consultation', href: '#consultation' },
                { label: 'Frequently Asked Questions', href: '#faqs' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-[hsl(25,15%,70%)] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[hsl(28,95%,52%)]">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@aasecretaries.com.ng"
                className="flex items-center gap-2 text-sm text-[hsl(25,15%,70%)] hover:text-white transition-colors duration-200"
              >
                <Mail size={14} className="text-[hsl(28,95%,52%)] shrink-0" />
                hello@aasecretaries.com.ng
              </a>
              <a
                href="https://wa.me/2347072752983"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(25,15%,70%)] hover:text-white transition-colors duration-200"
              >
                <ExternalLink size={14} className="text-[hsl(28,95%,52%)] shrink-0" />
                WhatsApp (Support)
              </a>
              <a
                href="https://wa.me/2349019011976"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(25,15%,70%)] hover:text-white transition-colors duration-200"
              >
                <ExternalLink size={14} className="text-[hsl(28,95%,52%)] shrink-0" />
                WhatsApp (Advisory)
              </a>
              <a
                href="https://www.aasecretaries.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(25,15%,70%)] hover:text-white transition-colors duration-200"
              >
                <ExternalLink size={14} className="text-[hsl(28,95%,52%)] shrink-0" />
                www.aasecretaries.com.ng
              </a>
            </div>
            <div className="pt-4">
              <p className="text-xs text-[hsl(25,10%,50%)] leading-relaxed">
                Backed by the legal expertise of{' '}
                <span className="text-[hsl(25,15%,70%)]">Aviel Avenante Law Practice (AALP)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[hsl(20,30%,20%)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[hsl(25,10%,50%)]">
            © 2026 Aviel Alpha Secretaries Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-xs text-[hsl(25,10%,50%)] hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-xs text-[hsl(25,10%,50%)] hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
