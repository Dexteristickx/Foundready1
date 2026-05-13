import { useState } from 'react';
import { MessageCircle, X, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const agents = [
    {
      name: 'Agent 1 (Support)',
      number: '2347072752983',
      message: 'Hi, I am interested in FoundReady Support.',
      color: 'bg-[#25D366]'
    },
    {
      name: 'Agent 2 (Advisory)',
      number: '2349019011976',
      message: 'Hi, I would like to inquire about Legal/Tax Advisory.',
      color: 'bg-[#128C7E]'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl border border-[hsl(25,15%,90%)] p-4 w-64 overflow-hidden"
          >
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-bold text-[hsl(20,30%,8%)]">Chat with an Agent</h4>
              <button onClick={() => setIsOpen(false)} className="text-[hsl(20,10%,60%)] hover:text-[hsl(20,30%,8%)]">
                <X size={16} />
              </button>
            </div>
            
            <div className="space-y-2">
              {agents.map((agent) => (
                <a
                  key={agent.number}
                  href={`https://wa.me/${agent.number}?text=${encodeURIComponent(agent.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[hsl(25,30%,97%)] transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-full ${agent.color} flex items-center justify-center text-white shrink-0`}>
                    <MessageCircle size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[hsl(20,30%,8%)] truncate">{agent.name}</p>
                    <p className="text-[10px] text-[hsl(20,10%,50%)]">WhatsApp Online</p>
                  </div>
                </a>
              ))}
            </div>
            
            <p className="mt-3 pt-3 border-t border-[hsl(25,15%,92%)] text-[10px] text-center text-[hsl(20,10%,50%)]">
              Typically replies in a few minutes
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1fbd5a] text-white shadow-2xl rounded-full pl-4 pr-5 py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] group"
      >
        <MessageCircle size={22} className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
        <span className="text-sm font-semibold whitespace-nowrap hidden sm:inline">
          {isOpen ? 'Close' : 'Chat on WhatsApp'}
        </span>
        {!isOpen && <ChevronUp size={16} className="hidden sm:block opacity-60 group-hover:translate-y-[-2px] transition-transform" />}
      </button>
    </div>
  );
};

export default WhatsAppCTA;
