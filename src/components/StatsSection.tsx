/**
 * Stats Section - Scroll-telling statistics display
 * Inspired by TreeHacks design
 */

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
}

export default function StatsSection({ stats, className = '' }: StatsSectionProps) {
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
      { threshold: 0.2 }
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

  return (
    <div
      ref={ref}
      className={`stats-section ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '3rem',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isVisible && !shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 1, y: 0 }
          }
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <motion.div
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1,
              color: 'var(--color-ink)',
              letterSpacing: '-0.02em',
            }}
            animate={
              isVisible && !shouldReduceMotion
                ? { scale: [1, 1.05, 1] }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: index * 0.15 + 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {stat.number}
            {stat.suffix && (
              <span style={{ fontSize: '0.6em', opacity: 0.7 }}>{stat.suffix}</span>
            )}
          </motion.div>
          <div
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--color-muted-ink)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

