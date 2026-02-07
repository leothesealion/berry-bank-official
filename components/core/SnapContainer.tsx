'use client';

import { ReactNode, useRef, useEffect } from 'react';
import { useUIStore } from '@/lib/store';
import { cn } from '@/lib/utils';

interface SnapContainerProps {
  children: ReactNode;
  className?: string;
}

export function SnapContainer({ children, className }: SnapContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCurrentSection } = useUIStore();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.getAttribute('id');
            if (sectionId) {
              setCurrentSection(sectionId);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    const sections = container.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setCurrentSection]);

  return (
    <main
      ref={containerRef}
      className={cn(
        'h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide',
        className
      )}
    >
      {children}
    </main>
  );
}

interface SnapSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  background?: 'berry' | 'void' | 'white' | 'growth';
}

export function SnapSection({
  children,
  id,
  className,
  background = 'void',
}: SnapSectionProps) {
  const bgColors = {
    berry: 'bg-berry',
    void: 'bg-void',
    white: 'bg-mist text-void',
    growth: 'bg-growth',
  };

  return (
    <section
      id={id}
      data-section
      className={cn(
        'h-screen w-full snap-start relative',
        'flex items-center justify-center',
        bgColors[background],
        className
      )}
    >
      {children}
    </section>
  );
}
