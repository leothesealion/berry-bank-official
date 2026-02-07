'use client';

import { ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  disabled = false,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || disabled) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * 0.3;
    const distanceY = (e.clientY - centerY) * 0.3;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary: 'bg-berry text-mist hover:bg-berry-600 hover:shadow-berry/30',
    secondary: 'bg-growth text-mist hover:bg-growth-600 hover:shadow-growth/30',
    outline: 'border-2 border-mist text-mist hover:bg-mist hover:text-void bg-transparent',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseStyles = cn(
    'relative rounded-full font-semibold transition-all duration-300',
    'hover:shadow-lg cursor-pointer inline-flex items-center justify-center',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      ref={buttonRef as any}
      href={href}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 bg-white/20"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </MotionComponent>
  );
}
