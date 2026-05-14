import { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Packages', href: '#packages' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Consultation', href: '#consultation' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const whatsappAgents = [
    { name: 'Support', number: '2347072752983', icon: <Phone size={14} /> },
    { name: 'Advisory', number: '2349019011976', icon: <MessageCircle size={14} /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setWhatsappOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[70] bg-white/95 backdrop-blur-sm border-b border-[hsl(25,15%,88%)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="FoundReady Logo" 
              className="h-8 w-auto object-contain" 
            />
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setWhatsappOpen(!whatsappOpen)}
                className="flex items-center gap-2 text-sm font-medium text-[hsl(20,85%,28%)] border border-[hsl(20,85%,28%)] rounded px-4 py-2 hover:bg-[hsl(25,30%,95%)] transition-colors duration-200"
              >
                <Phone size={14} />
                WhatsApp Us
                <ChevronDown size={14} className={`transition-transform duration-200 ${whatsappOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {whatsappOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-[hsl(25,15%,90%)] py-2 w-48 overflow-hidden"
                  >
                    {whatsappAgents.map((agent) => (
                      <a
                        key={agent.number}
                        href={`https://wa.me/${agent.number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-[hsl(20,30%,8%)] hover:bg-[hsl(25,30%,97%)] transition-colors"
                      >
                        <span className="text-[hsl(20,85%,28%)]">{agent.icon}</span>
                        <span className="font-medium">{agent.name}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
            <p className="text-xs font-semibold text-[hsl(20,10%,50%)] uppercase tracking-widest px-1">WhatsApp Channels</p>
            <div className="grid grid-cols-2 gap-3">
              {whatsappAgents.map((agent) => (
                <a
                  key={agent.number}
                  href={`https://wa.me/${agent.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-[hsl(20,85%,28%)] border border-[hsl(20,85%,28%)] rounded px-4 py-3"
                >
                  {agent.icon}
                  {agent.name}
                </a>
              ))}
            </div>
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
