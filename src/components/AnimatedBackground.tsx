import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  type?: 'bubbles' | 'molecules' | 'particles';
  density?: number;
  speed?: number;
  opacity?: number;
}

export default function AnimatedBackground({
  type = 'bubbles',
  density = 40,
  speed = 0.3,
  opacity = 0.15,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Pastel colors from theme - more vibrant for visibility
    const pastelColors = [
      'rgba(139, 92, 246, 0.6)',   // purple - accent-1
      'rgba(6, 182, 212, 0.6)',     // cyan - accent-2
      'rgba(236, 72, 153, 0.6)',    // pink - accent-4
      'rgba(16, 185, 129, 0.5)',    // green - accent-5
      'rgba(245, 158, 11, 0.5)',    // amber - accent-3
    ];

    let animationFrameId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: type === 'bubbles' 
            ? Math.random() * 8 + 4 
            : type === 'molecules'
            ? Math.random() * 6 + 3
            : Math.random() * 4 + 2,
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
          opacity: Math.random() * opacity + opacity * 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with gradient for more visibility
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        const baseColor = particle.color;
        gradient.addColorStop(0, baseColor.replace(/[\d.]+\)$/, `${particle.opacity})`));
        gradient.addColorStop(1, baseColor.replace(/[\d.]+\)$/, `${particle.opacity * 0.3})`));
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections for molecules type
        if (type === 'molecules') {
          for (let j = index + 1; j < particles.length; j++) {
            const other = particles[j];
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              const lineOpacity = (1 - distance / 120) * 0.1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(139, 92, 246, ${lineOpacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const handleResize = () => {
      resize();
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [type, density, speed, opacity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        pointerEvents: 'none',
        opacity: 1,
      }}
    />
  );
}

