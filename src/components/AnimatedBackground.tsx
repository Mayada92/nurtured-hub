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

    // Diverse transparent colors - varied opacity for visual interest
    const pastelColors = [
      'rgba(139, 92, 246, 0.7)',   // purple
      'rgba(6, 182, 212, 0.65)',   // cyan
      'rgba(236, 72, 153, 0.7)',   // pink
      'rgba(16, 185, 129, 0.65)',  // green
      'rgba(245, 158, 11, 0.7)',   // amber
      'rgba(249, 115, 22, 0.65)',  // orange
      'rgba(168, 85, 247, 0.7)',   // violet
      'rgba(34, 197, 94, 0.65)',   // emerald
      'rgba(14, 165, 233, 0.7)',   // sky blue
      'rgba(251, 146, 60, 0.65)',  // light orange
      'rgba(147, 51, 234, 0.7)',   // deep purple
      'rgba(59, 130, 246, 0.65)',  // blue
      'rgba(255, 165, 0, 0.7)',    // orange
      'rgba(147, 112, 219, 0.65)', // medium purple
      'rgba(0, 128, 128, 0.7)',     // teal
      'rgba(70, 130, 180, 0.65)',  // steel blue
      'rgba(255, 99, 71, 0.7)',    // tomato
      'rgba(100, 149, 237, 0.65)', // cornflower blue
      'rgba(255, 215, 0, 0.7)',    // gold
      'rgba(60, 179, 113, 0.65)',  // medium sea green
      'rgba(218, 112, 214, 0.7)',  // orchid
      'rgba(255, 20, 147, 0.65)',   // deep pink
    ];

    let animationFrameId: number = 0;
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
            ? Math.random() * 30 + 10  // Wider size range: 10-40px for more variety
            : type === 'molecules'
            ? Math.random() * 8 + 4    // 4-12px for molecules
            : Math.random() * 6 + 3,   // 3-9px for particles
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
          opacity: Math.random() * opacity * 0.5 + opacity * 0.5,
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
        // Replace only the opacity value (the number after the last comma before the closing paren)
        // Handle various rgba formats: "rgba(r, g, b, a)" with flexible spacing
        // Pattern matches: comma, optional whitespace, digits/dots, closing paren at end
        const opacityPattern = /,\s*[\d.]+\)$/;
        let centerColor: string;
        let edgeColor: string;
        
        if (opacityPattern.test(baseColor)) {
          // Standard rgba format - replace opacity
          centerColor = baseColor.replace(opacityPattern, `, ${particle.opacity})`);
          edgeColor = baseColor.replace(opacityPattern, `, ${particle.opacity * 0.3})`);
        } else if (baseColor.startsWith('rgba(') && baseColor.endsWith(')')) {
          // rgba without opacity or malformed - check if it already has 4 parameters
          // Extract content between parentheses
          const content = baseColor.slice(5, -1); // Remove 'rgba(' and ')'
          const params = content.split(',').map(p => p.trim());
          
          if (params.length >= 4) {
            // Already has opacity (4th parameter) - remove it and append new one
            const rgbPart = params.slice(0, 3).join(', ');
            centerColor = `rgba(${rgbPart}, ${particle.opacity})`;
            edgeColor = `rgba(${rgbPart}, ${particle.opacity * 0.3})`;
          } else {
            // No opacity - append it
            centerColor = baseColor.replace(/\)$/, `, ${particle.opacity})`);
            edgeColor = baseColor.replace(/\)$/, `, ${particle.opacity * 0.3})`);
          }
        } else {
          // Fallback: use original color (shouldn't happen with our color definitions)
          centerColor = baseColor;
          edgeColor = baseColor;
        }
        
        gradient.addColorStop(0, centerColor);
        gradient.addColorStop(1, edgeColor);
        
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
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
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

