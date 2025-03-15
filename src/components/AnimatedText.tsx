
import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/lib/animations';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

const AnimatedText = ({
  children,
  className = '',
  delay = 0,
  once = true,
  threshold = 0.1,
  rootMargin = '0px 0px -10% 0px',
}: AnimatedTextProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
  });
  
  const style = {
    transition: `transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0,
  };

  return (
    <div 
      ref={ref} 
      className={className} 
      style={once && isVisible ? {} : style}
    >
      {children}
    </div>
  );
};

export default AnimatedText;
