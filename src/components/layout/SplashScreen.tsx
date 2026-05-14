import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(20,85%,12%)]"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            transition: { 
              duration: 1,
              ease: "easeOut"
            }
          }}
          className="relative w-44 h-32 mb-8"
        >
          {/* Pulsing ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.05, 0.2]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-xl bg-white/5"
          />
          
          {/* The Logo */}
          <img 
            src="/logo.png" 
            alt="FoundReady Logo" 
            className="w-full h-full object-contain relative z-10"
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: { delay: 0.5, duration: 0.8 }
          }}
          className="text-center"
        >
          <h1 className="text-white text-3xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Found<span className="text-[hsl(28,95%,52%)]">Ready</span>
          </h1>
          <div className="flex items-center gap-2 justify-center">
            <motion.div
              animate={{ 
                width: ["0%", "100%"],
              }}
              transition={{ 
                duration: 2,
                ease: "easeInOut"
              }}
              className="h-[2px] bg-[hsl(28,95%,52%)]/40 w-24 overflow-hidden"
            >
              <div className="h-full bg-[hsl(28,95%,52%)] w-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
