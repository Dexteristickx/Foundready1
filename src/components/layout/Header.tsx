import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Packages', href: '#packages' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Consultation', href: '#consultation' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[hsl(25,15%,88%)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] font-medium text-[hsl(20,10%,45%)] uppercase tracking-widest leading-none">
                Aviel Alpha Secretaries
              </span>
              <span className="text-xl font-bold text-[hsl(20,85%,28%)] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Found<span className="text-[hsl(28,95%,52%)]">Ready</span>
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-[hsl(20,10%,35%)] hover:text-[hsl(20,85%,28%)] transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[hsl(20,85%,28%)] border border-[hsl(20,85%,28%)] rounded px-4 py-2 hover:bg-[hsl(25,30%,95%)] transition-colors duration-200"
            >
              <Phone size={14} />
              WhatsApp Us
            </a>
            <button
              onClick={() => scrollTo('#packages')}
              className="text-sm font-semibold bg-[hsl(20,85%,28%)] text-white rounded px-5 py-2 hover:bg-[hsl(20,85%,22%)] transition-colors duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[hsl(20,85%,28%)]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[hsl(25,15%,88%)] px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-base font-medium text-[hsl(20,30%,8%)] py-2"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 space-y-3 border-t border-[hsl(25,15%,88%)]">
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[hsl(20,85%,28%)] border border-[hsl(20,85%,28%)] rounded px-4 py-3 w-full justify-center"
            >
              <Phone size={14} />
              WhatsApp Us
            </a>
            <button
              onClick={() => scrollTo('#packages')}
              className="w-full text-sm font-semibold bg-[hsl(20,85%,28%)] text-white rounded px-5 py-3"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
