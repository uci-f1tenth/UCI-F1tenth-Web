import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Wifi, Eye, Radio } from 'lucide-react';

const specs = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "NVIDIA Jetson",
    desc: "Parallel processing for GPU-accelerated perception and real-time path planning.",
    value: "ROS2",
    label: "Middleware"
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Hokuyo LIDAR",
    desc: "10-meter laser scanning for high-fidelity SLAM and obstacle detection.",
    value: "10hz",
    label: "Scan rate"
  },
  {
    icon: <Radio className="w-5 h-5" />,
    title: "VESC Drive",
    desc: "Open-source motor controller for precision velocity and odometry feedback.",
    value: "4S",
    label: "LiPo power"
  },
  {
    icon: <Wifi className="w-5 h-5" />,
    title: "Link System",
    desc: "Remote telemetry bridge for live visualization and safety override.",
    value: "<20ms",
    label: "Latency"
  }
];

export default function TechSpecs() {
  return (
    <section id="tech" className="bg-white py-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] text-brand-blue uppercase tracking-[0.4em] mb-4 block">Hardware_Audit</span>
            <h2 className="text-5xl font-display font-bold tracking-tight text-brand-ink mb-6">THE CORE STACK</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Engineered for precision. Every component in the F1TENTH ecosystem is selected for its performance-to-scale ratio, enabling true high-speed autonomy.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-brand-yellow/10 border border-brand-yellow/20 rounded-lg">
              <span className="font-mono text-[10px] text-brand-ink/60 block uppercase">Hardware_State</span>
              <span className="font-bold text-brand-ink">OPTIMIZED</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden shadow-soft mb-12">
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 flex flex-col justify-between group hover:bg-slate-50 transition-all"
            >
              <div className="mb-12">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:bg-blue-50 transition-all mb-6">
                  {spec.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-ink mb-3">{spec.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {spec.desc}
                </p>
              </div>
              
              <div className="pt-6 border-t border-slate-50">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1">{spec.label}</span>
                <span className="text-3xl font-display font-bold text-brand-blue">{spec.value}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200"
        >
          <iframe 
            className=" absolute inset-0 w-full h-full z-10"
            src="https://www.youtube.com/embed/jEkM8n8AQvY?rel=0&modestbranding=1&color=white"
            title="F1TENTH UCI Hardware Showcase"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}