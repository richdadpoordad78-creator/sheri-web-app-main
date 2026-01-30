
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Instagram, Facebook, Send } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { CONTACT_DATA } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'The Studio', path: '/about' },
    { name: 'Artisans', path: '/team' },
    { name: 'Connect', path: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[999] transition-colors duration-500 ease-in-out ${
          scrolled || isOpen 
            ? 'bg-brand-silk/95 backdrop-blur-xl border-b border-brand-onyx/5 py-4 shadow-sm' 
            : 'bg-transparent py-8'
        }`}
      >
        {/* Scroll Progress Indicator */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[1px] bg-brand-terracotta origin-left z-[1001]"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center relative h-10 md:h-12">
          
          {/* Logo - Force visibility above drawer */}
          <Link 
            to="/" 
            className={`flex items-center transition-colors duration-500 relative z-[1100] ${isOpen ? 'text-brand-silk' : 'text-brand-onyx'}`}
            onClick={() => setIsOpen(false)}
          >
            <div className={`w-9 h-9 md:w-11 md:h-11 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'border-brand-silk/20' : 'border-brand-onyx'}`}>
              <span className="text-xs md:text-sm font-bold">S</span>
            </div>
            <div className="flex flex-col ml-3 md:ml-4">
              <span className="text-[10px] md:text-xs font-extrabold tracking-[0.3em] uppercase leading-none">Sheri Salon</span>
              {!isOpen && (
                <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.1em] mt-1 opacity-60 text-brand-terracotta">Aesthetic Sanctuary</span>
              )}
            </div>
          </Link>

          {/* PC Links */}
          <div className="hidden lg:flex items-center space-x-10 xl:space-x-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.3em] transition-all relative group py-2 ${
                  location.pathname === link.path ? 'text-brand-terracotta' : 'text-brand-onyx hover:text-brand-terracotta'
                }`}
              >
                {link.name}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-terracotta origin-right"
                  initial={false}
                  animate={{ scaleX: location.pathname === link.path ? 1 : 0 }}
                />
              </Link>
            ))}
            
            <Link 
              to="/booking" 
              className="flex items-center space-x-3 bg-brand-onyx text-brand-silk px-8 py-4 rounded-full hover:bg-brand-terracotta transition-all shadow-lg active:scale-95"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Reserve Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Toggle - Higher Z for visibility */}
          <button 
            className={`lg:hidden relative z-[1100] p-2 -mr-2 transition-colors duration-500 ${isOpen ? 'text-brand-silk' : 'text-brand-onyx'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Drawer - Isolated from Nav flow */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 35, stiffness: 200 }}
            className="fixed inset-0 w-full h-[100dvh] bg-brand-onyx text-brand-silk z-[1000] flex flex-col pt-32 pb-10 px-8 md:px-16"
          >
            {/* Grain Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <div className="flex-1 flex flex-col justify-between relative z-10 max-w-lg mx-auto w-full">
              {/* Menu Items */}
              <div className="flex flex-col space-y-4 md:space-y-8 pt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className="group flex items-center space-x-6 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-brand-terracotta font-serif italic text-2xl">0{i+1}</span>
                      <span className={`text-5xl md:text-7xl font-serif font-bold tracking-tighter ${location.pathname === link.path ? 'text-brand-silk' : 'text-brand-silk/30 hover:text-brand-silk transition-colors'}`}>
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="space-y-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link 
                    to="/booking"
                    className="w-full flex items-center justify-center space-x-6 bg-brand-silk text-brand-onyx py-8 rounded-full font-bold uppercase tracking-[0.4em] text-[11px] shadow-2xl active:scale-95 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <Send className="w-5 h-5" />
                    <span>Reserve Session</span>
                  </Link>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-between items-center"
                >
                  <div className="flex space-x-8">
                    <a href={CONTACT_DATA.socialLinks.instagram} target="_blank" className="text-brand-silk/20 hover:text-brand-terracotta transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href={CONTACT_DATA.socialLinks.facebook} target="_blank" className="text-brand-silk/20 hover:text-brand-terracotta transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-brand-silk/10">© 2024 Sheri Salon TX</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
