import React from 'react';
import { motion } from 'motion/react';
import { Box, Ghost, Layers } from 'lucide-react';

const sims = [
  {
    icon: <Ghost className="w-6 h-6" />,
    title: "Warporacer",
    desc: "Our custom high-performance simulator. Optimized for RL training throughput, this is where 90% of our research iterations happen.",
    tag: "CUSTOM_ENGINE",
    status: "PRIMARY",
    color: "text-brand-blue",
    mediaType: "video",
    mediaSrc: "/images/warporacer.mp4"
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "AutoDrive",
    desc: "The official competition simulator. Used for final validation and cross-bridge telemetry testing before real-world deployment.",
    tag: "STDC_OFFICIAL",
    status: "VALIDATION",
    color: "text-brand-yellow",
    mediaType: "video",
    mediaSrc: "/images/autodrive.mp4"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "ISSACLab",
    desc: "NVIDIA-powered high-fidelity physics environment. Currently in early integration for multi-agent interaction research.",
    tag: "NVIDIA_PHYSICS",
    status: "BETA",
    color: "text-brand-cyan",
    mediaType: "image",
    mediaSrc: "/images/Car_Side.png"
  }
];

export default function Simulators() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-16">
        <span className="font-mono text-[10px] text-brand-blue font-bold tracking-[0.4em] uppercase mb-4 block">Simulation_Layer</span>
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-brand-ink uppercase">Training Grounds</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {sims.map((sim, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/5 hover:-translate-y-1">
              
              {/* Image / Scene Space */}
              <div className="aspect-square bg-slate-50 relative overflow-hidden flex items-center justify-center">
                {/* The Grid Overlay */}
                <div className="absolute inset-0 opacity-40 technical-grid-light z-10 pointer-events-none" />
                
                {/* Dynamic Media Rendering */}
                {sim.mediaType === 'video' ? (
                  <video 
                    autoPlay 
                    aria-hidden="true"
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                  >
                    <source src={sim.mediaSrc} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={sim.mediaSrc} 
                    alt={`Media of ${sim.title} simulator`}
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                  />
                )}

                {/* Sensor Tag */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="font-mono text-[8px] px-2 py-1 bg-white/80 backdrop-blur border border-slate-200 rounded uppercase font-bold text-slate-500">
                    SENS_ARRAY_{idx + 1}
                  </span>
                </div>
              </div>

              <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold tracking-tight text-brand-ink">{sim.title}</h3>
                    <div className="flex items-center gap-2">
                       <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                         sim.status === 'PRIMARY' ? 'bg-brand-blue' : 
                         sim.status === 'VALIDATION' ? 'bg-brand-yellow' : 'bg-brand-cyan'
                       }`} />
                       <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                         {sim.status}
                       </span>
                    </div>
                  </div>
                 <p className="text-slate-500 text-sm leading-relaxed mb-8">
                   {sim.desc}
                 </p>
                 <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-brand-blue font-bold uppercase tracking-widest">{sim.tag}</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-3 bg-brand-blue/20 rounded-full" />
                      <div className="w-1 h-3 bg-brand-blue/40 rounded-full" />
                      <div className="w-1 h-3 bg-brand-blue/60 rounded-full animate-pulse" />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}