
import React from 'react';
import { Project } from '@/data/projectsData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedText from './AnimatedText';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="pb-20">
      <div className="container max-w-5xl mx-auto">
        <AnimatedText delay={0.1} className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/projects')}
            className="group mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Button>
        </AnimatedText>
        
        <AnimatedText delay={0.2}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        </AnimatedText>
        
        <AnimatedText delay={0.3} className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xl text-muted-foreground">{project.excerpt}</p>
            {project.link && (
              <Button asChild size="lg" className="sm:w-auto">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </AnimatedText>
        
        <AnimatedText delay={0.4} className="mb-10">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedText>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <AnimatedText delay={0.5} className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-lg leading-relaxed">{project.description}</p>
            </AnimatedText>
            
            <AnimatedText delay={0.6} className="mb-6">
              <h2 className="text-2xl font-semibold mt-8 mb-4">Role</h2>
              <p className="text-lg">{project.role}</p>
            </AnimatedText>
          </div>
          
          <div className="space-y-8">
            <AnimatedText delay={0.7}>
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
        
        <div className="space-y-8">
          <AnimatedText delay={0.8}>
            <div className="bg-secondary/30 p-8 rounded-lg border border-border/40">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Tasks</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-base leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={0.9}>
            <div className="bg-secondary/30 p-8 rounded-lg border border-border/40">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Achievements</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-base leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={1.0}>
            <div className="bg-secondary/30 p-8 rounded-lg border border-border/40">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contributions</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.contributions.map((contribution, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-base leading-relaxed">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedText>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
