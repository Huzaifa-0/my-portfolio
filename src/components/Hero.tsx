
import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver, useTypewriter } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px',
  }, () => {});

  const title = useTypewriter('Full Stack Engineer', 100, 500);
  const subtitle = useTypewriter('Building elegant, performant applications', 30, 1500);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-10"
    >
      <div className="container flex flex-col items-center text-center z-10">
        <div 
          className={`relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden transition-all duration-1000 ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-full"></div>
          <img 
            src={profileImage} 
            alt="Huzaifa Alfahl - Full Stack Engineer" 
            className="object-cover object-[0_-3.75rem] w-full h-full rounded-full p-2"
          />
          <div className="absolute inset-0 rounded-full shadow-inner"></div>
        </div>

        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight bg-clip-text transition-all duration-1000 ${heroVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <span>Hello, I'm </span>
          <span className="text-primary">Huzaifa Alfahl</span>
        </h1>
        
        <h2 
          className={`text-2xl md:text-3xl font-medium mb-6 text-muted-foreground transition-all duration-1000 ${heroVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '600ms' }}
        >
          {title}
        </h2>
        
        <p 
          className={`max-w-xl text-lg md:text-xl text-muted-foreground/90 mb-10 transition-all duration-1000 ${heroVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '800ms' }}
        >
          {subtitle}
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${heroVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '1000ms' }}
        >
          <Button asChild size="lg" className="px-8">
            <Link to="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className={`fixed md:absolute bottom-10 left-1/2 -translate-x-1/2 bg-transparent p-2 rounded-full animate-bounce transition-all duration-1000 ${heroVisible ? 'opacity-70' : 'opacity-0'} z-10`}
        style={{ transitionDelay: '1200ms' }}
        aria-label="Scroll to About section"
      >
        <ChevronDown size={24} />
      </button>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
