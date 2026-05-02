/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSpecs from './components/TechSpecs';
import Events from './components/Events';
import Simulators from './components/Simulators';
import Footer from './components/Footer';
import SlantSection from './components/SlantSection';
import { LazyMotion, domAnimation, motion } from 'motion/react';
import { Zap, Brain, Cpu, Rocket } from 'lucide-react';

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main>
          <Hero />
          
          <SlantSection id="tech" slantColor="bg-brand-blue">
            <TechSpecs />
          </SlantSection>

          <SlantSection id="simulators" bgColor="bg-slate-50" slantColor="bg-brand-ink">
            <Simulators />
          </SlantSection>

          <SlantSection id="research" bgColor="bg-brand-ink" slantColor="bg-brand-yellow" className="text-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                <div className="relative">
                  <span className="font-mono text-[10px] text-brand-blue uppercase tracking-[0.6em] mb-4 font-bold block">Neural_Framework_v3.2</span>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-[0.8] mb-4">
                    DEEP<br/>LEARNING
                  </h2>
                  <div className="absolute -left-6 top-0 w-1 h-full bg-brand-yellow" />
                </div>
                <div className="max-w-md text-right md:text-left">
                  <p className="text-white/70 font-mono text-[10px] uppercase tracking-widest mb-4">Research focus: End-to-end autonomous racing via reinforcement learning.</p>
                  <div className="h-[2px] w-full bg-white/10" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/10 overflow-hidden">
                <motion.div 
                  className="p-16 border-r border-white/10 group cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue mb-10 transition-transform">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 italic tracking-tight">PPO // STABILITY</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-10">
                    Proximal Policy Optimization for continuous control. Our baseline for collision-free trajectory tracking and adaptive braking.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-[1px] bg-white/10" />
                    <span className="font-mono text-[9px] text-brand-blue tracking-tighter">0.985 CONFIDENCE</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-16 group cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center text-brand-yellow mb-10 transition-transform">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 italic tracking-tight">DreamerV3 // PREDICTION</h3>
                  <p className="text-white/70 font-light leading-relaxed mb-10">
                    World-model based RL. Drastically reducing real-world samples by training in highly accurate learned latent spaces.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-[1px] bg-white/10" />
                    <span className="font-mono text-[9px] text-brand-yellow tracking-tighter">MODEL_BASED_ACTIVE</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </SlantSection>
          
          
          <SlantSection id="events" bgColor="bg-slate-50" slantColor="bg-brand-ink">
            <Events />
          </SlantSection>
          

          <SlantSection id="join" bgColor="bg-white" className="border-t border-slate-100" slantColor="bg-brand-blue">
            <div className="max-w-5xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-16 md:p-32 bg-brand-ink rounded-[60px] overflow-hidden group shadow-2xl"
              >
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue blur-[150px] -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow blur-[150px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="relative z-10 text-center">
                  <span className="font-mono text-[10px] text-brand-blue font-bold tracking-[0.8em] uppercase mb-12 block">Recruitment_Phase_Active</span>
                  <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-white mb-10 leading-none">JOIN THE<br/><span className="text-stroke text-white">COLLECTIVE</span></h2>
                  <p className="text-white/70 text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                    We're engineers, designers, and dreamers. If you code for speed, you should be one of us. (No previous robotics experience required)
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button onClick={() => window.open('https://discord.gg/fW2hf9Xtfy', '_blank')} className="px-26 py-6 bg-brand-blue text-white font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-sm italic">
                      Join Us
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </SlantSection>
        </main>

        <Footer />
      </div>
    </LazyMotion>
  );
}

