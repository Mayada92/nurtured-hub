/**
 * Enhanced Section Header with visual elements
 * Scroll-telling style header
 */

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const textAlign = {
    left: 'left',
    center: 'center',
    right: 'right',
  }[align];

  return (
    <div
      ref={ref}
      className={`section-header ${className}`}
      style={{
        textAlign: textAlign as any,
        marginBlockEnd: '4rem',
        position: 'relative',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible && !shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          display: 'inline-block',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--color-accent-1), var(--color-accent-2))',
            borderRadius: '2px',
            marginBlockEnd: '1.5rem',
            opacity: 0.8,
          }}
        />
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible && !shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          color: 'var(--color-ink)',
          marginBlockEnd: subtitle ? '1rem' : '0',
        }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible && !shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: 'var(--color-muted-ink)',
            maxWidth: '600px',
            marginInline: align === 'center' ? 'auto' : '0',
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

