import * as THREE from 'three';

/**
 * Three.js r183+ deprecated THREE.Clock in favor of THREE.Timer.
 * However, @react-three/fiber v9 internally instantiates THREE.Clock() in its root store.
 * This utility cleanly suppresses this specific deprecation warning using Three.js's
 * official setConsoleFunction API and a global console.warn filter.
 */
if (typeof THREE.setConsoleFunction === 'function') {
  THREE.setConsoleFunction((type, message, ...params) => {
    if (type === 'warn' && typeof message === 'string' && message.includes('Clock: This module has been deprecated')) {
      return;
    }
    const logFn = console[type] || console.warn;
    logFn(message, ...params);
  });
}

if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  console.warn = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('THREE.Clock: This module has been deprecated')) {
      return;
    }
    originalWarn.apply(console, args);
  };
}
