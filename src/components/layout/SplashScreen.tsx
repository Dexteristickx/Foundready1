import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(24,100%,45%)]"
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
          className="relative w-32 h-32 mb-8"
        >
          {/* Pulsing ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-white/20"
          />
          
          {/* The Logo */}
          <img 
            src="/logo.png" 
            alt="Aviel Alpha Logo" 
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
          <h1 className="text-white text-3xl font-bold tracking-tight mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Found<span className="text-orange-200">Ready</span>
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
              className="h-[2px] bg-white/40 w-24 overflow-hidden"
            >
              <div className="h-full bg-white w-full" />
            </motion.div>
          </div>
          <p className="text-orange-100 text-xs mt-4 uppercase tracking-[0.2em] font-medium">
            Aviel Alpha Secretaries
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
