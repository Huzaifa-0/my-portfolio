
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Experience', path: '/#experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/#contact' },
  ];
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo',
      isScrolled ? 'py-3 bg-white/80 dark:bg-background/80 backdrop-blur-md shadow-sm' : 'py-5'
    )}>
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold transition-all duration-300 ease-out-expo hover:opacity-80"
        >
          <span className="sr-only">Portfolio</span>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span>Portfolio</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-all hover:text-primary relative',
                'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:origin-center',
                'after:scale-x-0 after:bg-primary after:transition-transform after:duration-300',
                'hover:after:scale-x-100',
                (location.pathname === item.path || 
                (item.path === '/#contact' && location.hash === '#contact') ||
                (item.path === '/#experience' && location.hash === '#experience')) ? 
                'text-primary after:scale-x-100' : ''
              )}
            >
              {item.label}
            </Link>
          ))}
          <a 
            href="/resume/Huzaifa_Alfahl_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        'md:hidden fixed inset-0 bg-background z-40 transition-all duration-300 ease-out-expo',
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}>
        <div className="container flex flex-col items-center justify-center h-full space-y-8">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-xl font-medium transition-all hover:text-primary',
                (location.pathname === item.path || 
                (item.path === '/#contact' && location.hash === '#contact') ||
                (item.path === '/#experience' && location.hash === '#experience')) ? 
                'text-primary' : ''
              )}
            >
              {item.label}
            </Link>
          ))}
          <a 
            href="/resume/Huzaifa_Alfahl_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
