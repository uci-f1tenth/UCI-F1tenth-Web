import React from 'react';
import { motion, Variants } from 'motion/react';

interface SlantSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgColor?: string;
  slantColor?: string;
}

export default function SlantSection({ children, id, className = "", bgColor = "bg-white", slantColor = "bg-brand-blue" }: SlantSectionProps) {
  // Use a simple hash of the ID to create deterministic variety per section
  const seed = id ? id.length % 3 : 0;
  const skews = [-20, -35, -15];
  const selectedSkew = skews[seed];

  // Define variants to trigger animations simultaneously when the parent section enters view
  const sweepVariants: Variants = {
    hidden: (item: "primary" | "secondary" | "border") => ({
      x: item === "secondary" ? "-180%" : "-150%",
      skewX: item === "secondary" ? selectedSkew - 5 : selectedSkew,
      opacity: 0,
      pointerEvents: "none"
    }),
    visible: (item: "primary" | "secondary" | "border") => ({
      x: item === "primary" ? "400%" : item === "secondary" ? "450%" : "350%",
      opacity: item === "primary" ? 0.25 : item === "secondary" ? 0.1 : 0.4,
      transition: {
        duration: item === "primary" ? 1.0 : item === "secondary" ? 1.2 : 0.8,
        delay: item === "secondary" ? 0.1 : 0,
        ease: [0.8, 0, 0.2, 1],
      }
    })
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } 
    }
  };

  return (
    <motion.section 
      id={id} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`relative py-32 overflow-hidden ${bgColor} ${className}`}
    >
      {/* Primary Sweep - Faster and Larger */}
      <motion.div 
        custom="primary"
        variants={sweepVariants}
        className={`absolute inset-0 z-0 pointer-events-none ${slantColor} w-[100%]`}
      />

      {/* Secondary Accent Sweep - Different Speed */}
      <motion.div 
        custom="secondary"
        variants={sweepVariants}
        className={`absolute inset-0 z-0 pointer-events-none bg-white w-[60%] blur-2xl`}
      />

      {/* Dynamic Sharp Edge Accent */}
      <motion.div 
        custom="border"
        variants={sweepVariants}
        className={`absolute inset-0 z-0 pointer-events-none border-r-[40px] border-white/20 w-[70%]`}
      />
      
      <motion.div
        variants={contentVariants}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
