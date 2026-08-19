import { type Variants } from 'framer-motion';

// Heavy Down-to-Up Entrance with spring elasticity
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 55, scale: 0.96 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      delay: custom * 0.1, 
      ease: 'easeOut'
    }
  })
};

// Heavy Upper-to-Down Intro
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -55, scale: 0.96 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      delay: custom * 0.1, 
      ease: 'easeOut'
    }
  })
};

// Heavy Side-Show Slide from Left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -80, scale: 0.94 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.85, 
      delay: custom * 0.1, 
      ease: 'easeOut'
    }
  })
};

// Heavy Side-Show Slide from Right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 80, scale: 0.94 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.85, 
      delay: custom * 0.1, 
      ease: 'easeOut'
    }
  })
};

// Heavy Bouncy Pop-In
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.7, 
      delay: custom * 0.1, 
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
      staggerChildren: 0.14,
      delayChildren: 0.1
    }
  }
};

// Viewport configuration for dynamic scroll re-triggering
export const defaultViewport = {
  once: false,
  amount: 0.12
};
