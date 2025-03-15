
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedText from './AnimatedText';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/projectsData';

const Projects = () => {
  const initialProjectCount = 6;
  const [visibleProjects, setVisibleProjects] = useState(initialProjectCount);
  
  const showMoreProjects = () => {
    setVisibleProjects(Math.min(visibleProjects + 3, projectsData.length));
  };
  
  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container">
        <AnimatedText delay={0.1} className="mb-4">
          <h2 className="section-title text-center">Featured Projects</h2>
        </AnimatedText>
        
        <AnimatedText delay={0.2} className="mb-6">
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </AnimatedText>
        
        <AnimatedText delay={0.3} className="mb-12">
          <p className="section-subtitle text-center mx-auto">
            A selection of my recent work and personal projects
          </p>
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          {visibleProjects < projectsData.length ? (
            <Button onClick={showMoreProjects} variant="secondary" size="lg" className="px-8">
              View More
            </Button>
          ) : (
            <Button asChild variant="secondary" size="lg" className="px-8">
              <Link to="/projects">View All Projects</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
