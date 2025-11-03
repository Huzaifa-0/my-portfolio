import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import NavBar from '@/components/NavBar';

const Index = () => {
  useEffect(() => {
    // Scroll to section if hash is present in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise scroll to top when component mounts
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <footer className="py-8 bg-background border-t border-border/30">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Huzaifa Alfahl. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
