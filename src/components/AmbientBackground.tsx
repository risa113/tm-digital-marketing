import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Animated Floating Glow Orb 1 (Top Left) */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-28 -left-28 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-transparent blur-3xl"
      />
      {/* Animated Floating Glow Orb 2 (Middle Right) */}
      <motion.div 
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -60, 0],
          y: [0, 40, 0],
          opacity: [0.18, 0.35, 0.18]
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 -right-28 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-bl from-indigo-600/25 via-purple-500/15 to-transparent blur-3xl"
      />
      {/* Animated Floating Glow Orb 3 (Bottom Center) */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -40, 0],
          x: [0, 30, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-32 left-1/3 w-96 h-96 sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-cyan-600/20 via-blue-500/15 to-transparent blur-3xl"
      />

      {/* Subtle Depth Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800f_1px,transparent_1px),linear-gradient(to_bottom,#8080800f_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
