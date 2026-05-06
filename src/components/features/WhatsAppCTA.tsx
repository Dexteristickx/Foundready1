import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = () => {
  return (
    <a
      href="https://wa.me/2348000000000?text=Hi%2C%20I%20am%20interested%20in%20FoundReady%20by%20Aviel%20Alpha%20Secretaries."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1fbd5a] text-white shadow-2xl rounded-full pl-4 pr-5 py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="shrink-0" />
      <span className="text-sm font-semibold whitespace-nowrap hidden sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppCTA;
