'use client';

import { useEffect, useRef, useCallback } from 'react';

interface PixelBackgroundProps {
  className?: string;
  pixelSize?: number;
  color?: string;
  trailLength?: number;
}

export function ReactivePixelBackground({
  className = '',
  pixelSize = 20,
  color = '#9E1916',
  trailLength = 15,
}: PixelBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pixelsRef = useRef<{ x: number; y: number; opacity: number; targetOpacity: number }[]>([]);
  const animationRef = useRef<number>();

  const initPixels = useCallback((width: number, height: number) => {
    const cols = Math.ceil(width / pixelSize);
    const rows = Math.ceil(height / pixelSize);
    pixelsRef.current = [];
    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        pixelsRef.current.push({
          x: x * pixelSize,
          y: y * pixelSize,
          opacity: 0,
          targetOpacity: 0,
        });
      }
    }
  }, [pixelSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPixels(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      pixelsRef.current.forEach((pixel) => {
        const dx = mouseX - (pixel.x + pixelSize / 2);
        const dy = mouseY - (pixel.y + pixelSize / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = pixelSize * trailLength;

        if (distance < maxDistance) {
          pixel.targetOpacity = 1 - distance / maxDistance;
        } else {
          pixel.targetOpacity = 0;
        }

        // Smooth transition
        pixel.opacity += (pixel.targetOpacity - pixel.opacity) * 0.1;

        if (pixel.opacity > 0.01) {
          ctx.fillStyle = color;
          ctx.globalAlpha = pixel.opacity * 0.6;
          ctx.fillRect(pixel.x, pixel.y, pixelSize - 1, pixelSize - 1);
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [pixelSize, color, trailLength, initPixels]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
