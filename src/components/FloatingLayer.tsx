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
    low: 5,
    medium: 12,
    high: 20,
  };

  const count = densityMap[density];
  const accentColors = {
    'accent-1': 'rgba(139, 92, 246, 0.15)', // Purple
    'accent-2': 'rgba(6, 182, 212, 0.15)', // Cyan
    'accent-3': 'rgba(245, 158, 11, 0.15)', // Amber
    'accent-4': 'rgba(236, 72, 153, 0.15)', // Pink
  };

  // Create floating blobs and geometric shapes
  const blobs = Array.from({ length: count }).map((_, i) => {
    const accent = accents[i % accents.length];
    const size = 60 + Math.random() * 140;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const rotation = Math.random() * 360;
    const delay = i * 0.15;
    const duration = 4 + Math.random() * 6;
    const shape = Math.random() > 0.7 ? 'circle' : 'blob'; // Mix of circles and blobs

    return {
      id: i,
      size,
      x,
      y,
      rotation,
      color: accentColors[accent as keyof typeof accentColors] || accentColors['accent-1'],
      delay,
      duration,
      shape,
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
            borderRadius: blob.shape === 'circle' ? '50%' : '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: blob.color,
            opacity: 0.4,
            filter: 'blur(50px)',
            mixBlendMode: 'multiply',
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -20 + Math.random() * 20, 0],
                  x: [0, Math.random() * 10 - 5, 0],
                  rotate: [blob.rotation, blob.rotation + (blob.shape === 'circle' ? 15 : 25), blob.rotation],
                  scale: [1, 1.1 + Math.random() * 0.1, 1],
                }
          }
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
      ))}
    </div>
  );
}

