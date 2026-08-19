import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  // Pre-generate deterministic floating particles for performance
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: (i * 17) % 100,
      y: (i * 23) % 100,
      size: (i % 3) * 2 + 3,
      duration: 8 + (i % 6) * 2,
      delay: (i % 5) * 1.2,
      color: i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-cyan-400' : 'bg-indigo-400'
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* Heavy Animated Plasma Glow Orb 1 (Top-Left Electric Blue) */}
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 80, 0],
          y: [0, -50, 0],
          opacity: [0.35, 0.6, 0.35]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-36 -left-36 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-tr from-blue-600/40 via-sky-400/30 to-transparent blur-[120px]"
      />

      {/* Heavy Animated Plasma Glow Orb 2 (Middle-Right Purple & Indigo Neon) */}
      <motion.div 
        animate={{
          scale: [1, 1.35, 1],
          x: [0, -90, 0],
          y: [0, 60, 0],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/4 -right-36 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-bl from-indigo-600/35 via-purple-500/25 to-transparent blur-[130px]"
      />

      {/* Heavy Animated Plasma Glow Orb 3 (Center-Bottom Cyan Laser Pulse) */}
      <motion.div 
        animate={{
          scale: [1, 1.25, 1],
          y: [0, -60, 0],
          x: [0, 60, 0],
          opacity: [0.25, 0.45, 0.25]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-transparent blur-[110px]"
      />

      {/* Heavy Animated Plasma Glow Orb 4 (Top-Right Amber Sunrise Accent) */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute -top-20 right-1/4 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-amber-500/20 via-rose-500/15 to-transparent blur-[100px]"
      />

      {/* Rotating Cybernetic Cosmic Rings */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-blue-500/10 dark:border-blue-400/10 pointer-events-none animate-spin [animation-duration:45s]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-cyan-500/15 dark:border-cyan-400/15 pointer-events-none animate-spin [animation-duration:30s] [animation-direction:reverse]" />

      {/* High-Tech Glowing Particles Stream */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -60, 0],
            x: [0, (p.id % 2 === 0 ? 30 : -30), 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay
          }}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`
          }}
          className={`absolute rounded-full ${p.color} shadow-[0_0_12px_rgba(56,189,248,0.8)]`}
        />
      ))}

      {/* Perspective Grid with Cyber Radial Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f612_1px,transparent_1px),linear-gradient(to_bottom,#3b82f612_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,#000_70%,transparent_100%)]" />
    </div>
  );
}
