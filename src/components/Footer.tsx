import React from 'react';
import { Zap, Github, Twitter, Youtube, Instagram, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img src="./src/images/F1TenthUCIlogo.png" alt="F1TENTH @ UCI" className="w-8 h-8" />

              <span className="font-display font-bold text-2xl tracking-tighter text-brand-ink">F1TENTH<span className="text-brand-blue">@UCI</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-10 leading-relaxed font-light">
              Accelerating autonomous vehicle research through competitive high-speed racing at the 1:10 scale.
            </p>
            <div className="flex gap-6">
              <Github className="w-5 h-5 text-slate-300 hover:text-brand-blue cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-300 hover:text-brand-blue cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-slate-300 hover:text-brand-blue cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-slate-300 hover:text-brand-blue cursor-pointer transition-colors" />
              <MessageSquare className="w-5 h-5 text-slate-300 hover:text-brand-blue cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-[10px] text-brand-blue uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-light">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Lab Environment</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Race Results</a></li>
              {/*<li><a href="#" className="hover:text-brand-blue transition-colors">Publications</a></li>*/}
              <li><a href="#" className="hover:text-brand-blue transition-colors">Alumni</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-[10px] text-brand-blue uppercase tracking-[0.2em] mb-8">Contact Us</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-light leading-relaxed">
              <li>f1tenth@uci.edu</li>
              <li>University of California, Irvine</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-100 gap-6">
          <p className="text-slate-300 font-mono text-[10px] tracking-widest">© 2026 F1TENTH@UCI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-slate-300 font-mono text-[10px] tracking-widest">
            <span className="hover:text-slate-500 cursor-pointer">PRIVACY_POLICY</span>
            <span className="hover:text-slate-500 cursor-pointer">TERMS_OF_SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
