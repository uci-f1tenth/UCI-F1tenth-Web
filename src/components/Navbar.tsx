import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Cpu, Zap, Car } from 'lucide-react';
import logo from '/apple-touch-icon.png';

export default function Navbar() {
  // Key update in Navbar.tsx for "Flowing" progress
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, // Much softer stiffness for "weighty" flow
    damping: 25,   // Higher damping to avoid jittery bounces
    restDelta: 0.001
  });
  const carX = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 h-20">
      {/* Race Progress Bar - "The Track" */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-100/50 overflow-visible">
        <motion.div 
          className="absolute top-0 h-full bg-brand-blue shadow-[0_0_10px_rgba(0,163,255,0.4)]"
          style={{ width: carX }}
        >
          <div className="absolute right-0 top-3 h-full flex items-center">
             {/* The Car pinned ON TOP of the track */}
             <motion.div 
               className="relative -translate-y-[10px]"
               animate={{ 
                 y: [-10, -10.3, -10, -9.7, -10],
               }}
               transition={{ 
                 repeat: Infinity, 
                 duration: 1.5, // Subtle engine vibration
                 ease: "easeInOut"
               }}
             >
                <img src="/images/car_sihlouette.png" alt="Car" className="w-8 h-3 text-brand-blue fill-brand-blue drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]" />
                {/* Exhaust/Motion Trail */}
                <div className="absolute right-full h-1 w-20 bg-gradient-to-l from-brand-blue to-transparent opacity-40 blur-[2px]" />
             </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="F1TENTH@UCI Logo" width="40" height="40" className="w-12 h-12" />
          <div>
            <div className="text-xl font-display font-bold tracking-tight leading-none">F1TENTH</div>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-400">Autonomous Racing</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <a href="#about" className="hover:text-brand-blue transition-colors">Lab_01</a>
          <a href="#tech" className="hover:text-brand-blue transition-colors">Stack_02</a>
          <a href="#simulators" className="hover:text-brand-blue transition-colors">Sim_03</a>
          <a href="#events" className="hover:text-brand-blue transition-colors">Events_04</a>
          <a href="#join" className="hover:text-brand-blue transition-colors">Join_05</a>
        </div>

        <button onClick={() => window.open('https://github.com/uci-f1tenth', '_blank')} className="px-6 py-2 bg-brand-ink text-white font-display font-bold text-xs rounded-full hover:bg-brand-blue hover:shadow-xl hover:shadow-blue-500/30 transition-all uppercase tracking-widest">
          Race Stack
        </button>
      </div>
    </nav>
  );
}
