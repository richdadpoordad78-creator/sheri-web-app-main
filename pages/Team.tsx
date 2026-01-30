
import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM } from '../constants';
import { Instagram, Mail, Sparkle, ShieldCheck, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40 pb-24 bg-brand-silk min-h-screen overflow-x-hidden">
      <section className="container mx-auto px-6 mb-16 md:mb-32 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 text-brand-terracotta font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px] mb-6 md:mb-8"
        >
          <Sparkle className="w-3 h-3" />
          <span>The Artistic Collective</span>
        </motion.div>
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif font-bold text-brand-onyx tracking-tighter mb-6 md:mb-8 leading-[1] md:leading-[0.8]">
          Meet the <br /><span className="italic text-brand-terracotta">Artisans</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-onyx/40 max-w-2xl mx-auto font-light leading-relaxed italic px-4">
          Every transformation at Sheri Salon is a collaboration between client and master. Meet the experts who define Plano's gold standard.
        </p>
      </section>

      <div className="container mx-auto px-6 space-y-24 md:space-y-40">
        {TEAM.map((member, idx) => (
          <motion.div 
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-16 lg:gap-32 items-center`}
          >
            {/* Image Block */}
            <div className="w-full lg:w-1/2 relative group px-4">
              <div className="absolute -inset-4 md:-inset-8 bg-brand-terracotta/5 rounded-[80px] md:rounded-[120px] rotate-2 md:rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="relative z-10 aspect-[4/5] rounded-[60px] md:rounded-[100px] overflow-hidden shadow-2xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx/40 via-transparent to-transparent opacity-20"></div>
                {idx === 0 && (
                   <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/90 backdrop-blur px-4 md:px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                      <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-brand-terracotta" />
                      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-onyx">Verified Master</span>
                   </div>
                )}
              </div>
            </div>

            {/* Content Block */}
            <div className="w-full lg:w-1/2 space-y-8 md:space-y-10 text-center lg:text-left">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-3 md:space-x-4">
                   <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-brand-onyx leading-tight">{member.name}</h2>
                   <div className="bg-blue-500 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm flex-shrink-0">
                      <Check className="text-white w-2 h-2 md:w-3 md:h-3 stroke-[5]" />
                   </div>
                </div>
                <p className="text-brand-terracotta font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px]">{member.role}</p>
              </div>
              
              <div className="relative px-6 lg:px-0">
                <div className="absolute -left-2 lg:-left-8 top-0 text-5xl md:text-7xl font-serif text-brand-terracotta/10 select-none">“</div>
                <p className="text-xl md:text-2xl text-brand-onyx/60 leading-relaxed font-light italic relative z-10">
                  {member.bio}
                </p>
              </div>

              <div className="flex justify-center lg:justify-start pt-4">
                {member.social?.instagram && (
                  <a 
                    href={member.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 bg-white px-6 md:px-8 py-3 md:py-4 rounded-full border border-brand-onyx/5 shadow-sm hover:bg-brand-onyx hover:text-white transition-all group"
                  >
                    <Instagram className="w-4 h-4 text-brand-terracotta group-hover:text-white" />
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-brand-onyx group-hover:text-white">Instagram Profile</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
