import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface ImageStageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  parallax?: boolean;
  className?: string;
}

export default function ImageStage({
  src,
  alt,
  width = 1200,
  height = 600,
  parallax = true,
  className = '',
}: ImageStageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    if (!parallax || shouldReduceMotion || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const handleScroll = () => {
              const rect = entry.boundingClientRect;
              const scrollProgress =
                (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
              const translateY = (scrollProgress - 0.5) * 50;
              setTransform(translateY);
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();

            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [parallax, shouldReduceMotion]);

  return (
    <div
      ref={ref}
      className={`image-stage ${className}`}
      style={{
        transform: parallax && !shouldReduceMotion ? `translateY(${transform}px)` : 'none',
        transition: shouldReduceMotion ? 'none' : 'transform 0.1s ease-out',
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: `${width}px`,
          objectFit: 'contain',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          display: 'block',
        }}
      />
    </div>
  );
}



