import { type Variants } from 'framer-motion';

const isClient = typeof window !== 'undefined';
const isTouchOrMobile = isClient && (window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024));

// Ultra-Lightweight Down-to-Up Entrance
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: isTouchOrMobile ? 12 : 25 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: isTouchOrMobile ? 0.25 : 0.35, 
      delay: isTouchOrMobile ? 0 : Math.min(custom * 0.04, 0.2), 
      ease: 'easeOut'
    }
  })
};

// Ultra-Lightweight Upper-to-Down Intro
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: isTouchOrMobile ? -12 : -25 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: isTouchOrMobile ? 0.25 : 0.35, 
      delay: isTouchOrMobile ? 0 : Math.min(custom * 0.04, 0.2), 
      ease: 'easeOut'
    }
  })
};

// Ultra-Lightweight Side Slide from Left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: isTouchOrMobile ? -15 : -35 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { 
      duration: isTouchOrMobile ? 0.25 : 0.4, 
      delay: isTouchOrMobile ? 0 : Math.min(custom * 0.04, 0.2), 
      ease: 'easeOut'
    }
  })
};

// Ultra-Lightweight Side Slide from Right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: isTouchOrMobile ? 15 : 35 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { 
      duration: isTouchOrMobile ? 0.25 : 0.4, 
      delay: isTouchOrMobile ? 0 : Math.min(custom * 0.04, 0.2), 
      ease: 'easeOut'
    }
  })
};

// Ultra-Lightweight Scale Pop-In
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { 
      duration: isTouchOrMobile ? 0.25 : 0.35, 
      delay: isTouchOrMobile ? 0 : Math.min(custom * 0.04, 0.2), 
      ease: 'easeOut'
    }
  })
};

// Staggered Container Orchestration
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isTouchOrMobile ? 0.03 : 0.06,
      delayChildren: 0.02
    }
  }
};

// Viewport configuration for single-pass instant render
export const defaultViewport = {
  once: true,
  amount: 0.05
};


