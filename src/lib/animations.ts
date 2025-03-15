
import { useEffect, useRef, useState } from 'react';

// Observer hook for animations triggered on scroll
export function useIntersectionObserver(options = {}, callback?: Function) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      
      if (entry.isIntersecting && callback) {
        callback();
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
      ...options,
    });
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, callback]);
  
  return { ref, isVisible };
}

// Staggered animation hook for multiple elements
export function useStaggeredAnimation(itemsCount: number, delay = 0.1) {
  return Array.from({ length: itemsCount }).map((_, i) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: i * delay,
      },
    },
  }));
}

// Typing animation utility
export function useTypewriter(text: string, speed = 50, delay = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (delay > 0 && !startTyping) {
      timeout = setTimeout(() => setStartTyping(true), delay);
      return () => clearTimeout(timeout);
    }
    
    if (!startTyping) return;
    
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
    }
    
    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, delay, startTyping]);

  return displayedText;
}

// Parallax effect hook
export function useParallax(speed = 0.1) {
  const ref = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current as HTMLElement | null;
      if (!element) return;
      
      const scrollTop = window.pageYOffset;
      const elementOffset = element.offsetTop;
      const distance = scrollTop - elementOffset;
      const translate = distance * speed;
      
      element.style.transform = `translateY(${translate}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return ref;
}
