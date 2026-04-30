import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-40 pb-24 overflow-hidden technical-grid-light min-h-[90vh] flex items-center bg-white">
      {/* Persona Sweeps */}
      <motion.div 
        initial={{ x: "-150%", skewX: -20 }}
        animate={{ x: "400%", skewX: -20 }}
        transition={{ duration: 1.2, ease: [0.8, 0, 0.2, 1], delay: 0.2 }}
        className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-brand-blue w-[100%]"
      />
      <motion.div 
        initial={{ x: "-180%", skewX: -25 }}
        animate={{ x: "450%", skewX: -25 }}
        transition={{ duration: 1.4, ease: [0.8, 0, 0.2, 1], delay: 0.3 }}
        className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-white w-[50%] blur-xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-brand-blue" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-blue font-bold">Protocol://Autonomous_Lab</span>
            </div>
            
            <h2 className="text-7xl md:text-9xl leading-[0.85] font-black tracking-tighter mb-10 text-brand-ink uppercase">
              SPEED<br/>
              <span className="text-stroke text-brand-blue">THROUGH</span><br/>
              CODE
            </h2>
            
            <p className="text-slate-500 text-xl max-w-xl font-light leading-relaxed mb-12">
              UCI's premier autonomous racing collective. We engineer high-performance vehicles for the <span className="text-brand-blue font-semibold italic">F1TENTH Grand Prix</span>, pushing the boundaries of robotics at UC Irvine.
            </p>
            
            {/*<div className="flex flex-wrap gap-6">
              <button className="px-10 py-5 bg-brand-blue text-white font-display font-bold text-sm rounded-full shadow-2xl shadow-blue-500/20 hover:scale-105 transition-all flex items-center gap-2 uppercase tracking-widest">
                Start Racing <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-10 py-5 border border-slate-200 text-brand-ink font-display font-bold text-sm rounded-full hover:bg-slate-50 transition-all uppercase tracking-widest">
                The Stack
              </button>
            </div>*/}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-5 hidden lg:block"
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-slate-50 border border-slate-100 p-3 shadow-soft relative z-10">
                <img 
                  src="./src/images/IMG_3700.jpg" 
                  alt="Autonomous Hardware" 
                  className="w-full h-full object-cover brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue/5 mix-blend-overlay" />
                
                <div className="absolute -bottom-10 -left-10 bg-brand-yellow px-10 py-8 shadow-2xl skew-x-[-12deg]">
                  <div className="skew-x-[12deg]">
                    <div className="font-mono text-[12px] text-brand-ink/60 uppercase tracking-widest mb-1">Built</div>
                    <div className="text-2xl font-black italic tracking-tighter text-brand-ink">TO RACE</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-blue/10 rounded-full -z-10" />
              <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-brand-blue/10 blur-[80px] -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
