import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const whatsappUrl = "https://wa.me/2347072752983"; // Using the Support number

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group flex items-center gap-3 transition-all duration-300 transform hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Tooltip */}
      <div className="bg-white px-4 py-2 rounded-full shadow-xl border border-[hsl(25,15%,90%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <p className="text-[hsl(20,30%,8%)] text-sm font-semibold">Chat with an Expert</p>
      </div>

      {/* Button */}
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl relative overflow-hidden group-hover:bg-[#128C7E] transition-colors">
        <MessageCircle size={28} />
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-white/20 animate-ping rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
