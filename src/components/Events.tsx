import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Flag, ChevronRight } from 'lucide-react';

const events = [
  {
    date: "FRIDAY 5PM, 2026",
    title: "General Meeting",
    location: "DBH 1433",
    type: "Meeting",
    status: "WEEKLY",
    link: "https://discord.gg/fW2hf9Xtfy"
  },
  {
    date: "WEDNESDAY 5PM",
    title: "Research Meeting",
    location: ";)",
    type: "Research",
    status: "WEEKLY",
    link: "https://forms.gle/LefG1JNm1nLGyLeb8"
  },
  {
    date: "JUNE 22, 2026",
    title: "28th Roboracer Autonomous Racing Competition",
    location: "Detroit, MI, USA",
    type: "RACE",
    status: "UPCOMING",
    link: "none"
  }
];

export default function Events() {
  return (
    <section id="events" className="py-32 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="font-mono text-[10px] text-brand-blue uppercase tracking-[0.4em] mb-4 block">Calendar</span>
            <h2 className="text-5xl font-display font-bold tracking-tight text-brand-ink uppercase">Upcoming Events</h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Live Updates</span>
          </div>
        </div>
        
        <div className="grid gap-4">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border border-slate-100 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all rounded-2xl gap-8"
            >
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-center justify-center min-w-[100px] py-4 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  <span className="font-display font-bold text-3xl text-brand-blue leading-none">{event.date.split(',')[0].split(' ')[1]}</span>
                  <span className="font-mono text-slate-500 text-[10px] uppercase tracking-widest mt-1">{event.date.split(',')[0].split(' ')[0]}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold font-mono tracking-widest ${
                      event.status === 'WEEKLY' ? 'bg-green-100 text-green-600' : 
                      event.status === 'UPCOMING' ? 'bg-brand-yellow/20 text-brand-ink' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {event.status}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{event.type}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-ink group-hover:text-brand-blue transition-colors">{event.title}</h3>
                  <div className="flex items-center gap-4 mt-3 text-slate-500 text-sm">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {event.location}</span>
                  </div>
                </div>
              </div>
              
              {event.link && event.link !== "none" && (
                <a 
                  href={event.link}
                  target="_blank" 
                  rel="noreferrer"
                  aria-label={`Register for ${event.title}`}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-ink text-white font-display font-bold text-xs rounded-full group-hover:bg-brand-blue transition-all uppercase tracking-widest cursor-pointer"
                >
                  Register <ChevronRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
