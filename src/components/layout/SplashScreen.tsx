import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(21,41%,96%)]"
    >
      <div className="relative flex flex-col items-center w-full max-w-lg px-4">
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
          className="relative w-64 sm:w-80 h-40 sm:h-48 mb-12"
        >
          {/* Subtle Background Glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.05, 0.1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-3xl bg-black/5 blur-2xl"
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
          className="text-center w-full"
        >
          <h1 className="text-[hsl(18,33%,8%)] text-5xl sm:text-7xl font-black tracking-tighter mb-8 uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            Found<span className="text-[hsl(21,96%,28%)]">Ready</span>
          </h1>
          
          <div className="flex items-center justify-center px-8">
            <div className="h-[4px] bg-black/5 w-full max-w-md rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: 2.5,
                  ease: "easeInOut"
                }}
                className="h-full bg-[hsl(21,96%,28%)] shadow-[0_0_15px_rgba(139,51,3,0.2)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default SplashScreen;
