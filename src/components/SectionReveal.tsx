import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { uiConfig } from '../config/ui';

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function SectionReveal({
  children,
  delay = 0,
  once = uiConfig.reveal.once,
  threshold = uiConfig.reveal.threshold,
  direction = 'up',
  className = '',
}: SectionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    threshold,
    margin: uiConfig.reveal.rootMargin,
  });
  const shouldReduceMotion = useReducedMotion();

  const directionMap = {
    up: { y: 16, x: 0 },
    down: { y: -16, x: 0 },
    left: { y: 0, x: 16 },
    right: { y: 0, x: -16 },
  };

  const initial = directionMap[direction];
  const duration = uiConfig.motion.defaultDuration;

  if (shouldReduceMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initial }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...initial }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing from theme
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

