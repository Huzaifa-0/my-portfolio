
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import ProjectCard from '@/components/ProjectCard';
import AnimatedText from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projectsData';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const loadMoreProjects = () => {
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      setVisibleProjects(prevCount => prevCount + 3);
      setIsLoading(false);
    }, 800);
  };
  
  return (
    <main className="min-h-screen">
      <NavBar />
      
      <div className="pt-32 pb-20">
        <div className="container">
          <AnimatedText delay={0.1} className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center">Projects</h1>
          </AnimatedText>
          
          <AnimatedText delay={0.2} className="mb-6">
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </AnimatedText>
          
          <AnimatedText delay={0.3} className="mb-16">
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
              Explore my portfolio of projects showcasing my skills and expertise in software development
            </p>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index % 3} />
            ))}
          </div>
          
          {visibleProjects < projectsData.length && (
            <div className="flex justify-center mt-12">
              <Button 
                onClick={loadMoreProjects} 
                disabled={isLoading}
                className="px-8"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </span>
                ) : (
                  'Load More'
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
      
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

export default Projects;
