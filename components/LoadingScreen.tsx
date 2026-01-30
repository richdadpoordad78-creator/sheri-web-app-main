
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
      }}
      className="fixed inset-0 z-[1000] bg-brand-onyx flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Noise Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Decorative Rotating Rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-brand-silk/5 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] border border-brand-terracotta/10 rounded-full"
      />

      <div className="relative z-10 text-center space-y-8">
        {/* Logo Mark Animation */}
        <div className="relative mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-brand-terracotta flex items-center justify-center mx-auto"
          >
            <span className="text-brand-silk text-2xl md:text-3xl font-serif font-bold">S</span>
          </motion.div>
          
          {/* Pulsing Aura */}
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border border-brand-terracotta"
          />
        </div>

        {/* Text Animation */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-brand-silk text-[10px] md:text-xs font-bold uppercase tracking-[0.8em] mb-4">
              Sheri Salon
            </h2>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-[1px] bg-brand-terracotta"></div>
              <span className="text-brand-terracotta font-serif italic text-xl md:text-2xl font-light">
                Refining The Absolute
              </span>
              <div className="w-8 h-[1px] bg-brand-terracotta"></div>
            </div>
          </motion.div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-48 h-[1px] bg-brand-silk/10 mx-auto mt-12 relative overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-brand-terracotta"
          />
        </div>
      </div>

      {/* Side Numbers (Editorial Style) */}
      <div className="absolute bottom-12 right-12 text-brand-silk/10 font-serif text-8xl md:text-9xl select-none hidden md:block">
        01
      </div>
      <div className="absolute top-12 left-12 text-brand-silk/10 font-serif text-8xl md:text-9xl select-none hidden md:block">
        SS
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
