import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { uiConfig } from '../config/ui';

interface FloatingLayerProps {
  density?: 'low' | 'medium' | 'high';
  zIndex?: number;
  accents?: string[];
  enabled?: boolean;
}

export default function FloatingLayer({
  density = uiConfig.floatingLayer.density,
  zIndex = uiConfig.floatingLayer.zIndex,
  accents = ['accent-1', 'accent-2', 'accent-3'],
  enabled = uiConfig.floatingLayer.enabled,
}: FloatingLayerProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!enabled || !mounted) return null;

  const densityMap = {
    low: 3,
    medium: 6,
    high: 10,
  };

  const count = densityMap[density];
  const accentColors = {
    'accent-1': '#b9d1c0',
    'accent-2': '#bfd7ea',
    'accent-3': '#eac7c7',
    'accent-4': '#e8e2cf',
  };

  const blobs = Array.from({ length: count }).map((_, i) => {
    const accent = accents[i % accents.length];
    const size = 80 + Math.random() * 120;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const rotation = Math.random() * 360;
    const delay = i * 0.2;
    const duration = 3 + Math.random() * 4;

    return {
      id: i,
      size,
      x,
      y,
      rotation,
      color: accentColors[accent as keyof typeof accentColors] || accentColors['accent-1'],
      delay,
      duration,
    };
  });

  return (
    <div
      className="floating-layer"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="floating-blob"
          style={{
            position: 'absolute',
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            borderRadius: '50%',
            background: blob.color,
            opacity: 0.3,
            filter: 'blur(40px)',
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -15, 0],
                  rotate: [blob.rotation, blob.rotation + 8, blob.rotation],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1], // Smooth ease-in-out
          }}
        />
      ))}
    </div>
  );
}

