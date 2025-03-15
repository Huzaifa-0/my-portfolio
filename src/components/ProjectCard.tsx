
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/data/projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px',
  });
  
  // Calculate staggered animation delay based on index
  const delay = 0.1 + (index * 0.1);
  
  return (
    <div 
      ref={ref}
      className={cn(
        'transition-all duration-700 transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      <Link to={`/project/${project.id}`}>
        <Card 
          className={cn(
            'h-full overflow-hidden transition-all duration-500 hover:shadow-xl border border-border/50',
            isHovered ? 'transform scale-[1.02]' : ''
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className={cn(
                'object-cover h-full w-full transition-all duration-700 ease-out-expo',
                isHovered ? 'scale-110' : 'scale-100'
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>
          
          <CardHeader className="pt-4 pb-2">
            <CardTitle className="text-xl font-semibold line-clamp-1">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2">{project.excerpt}</CardDescription>
          </CardHeader>
          
          <CardContent className="pb-2">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="text-xs bg-secondary px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </CardContent>
          
          <CardFooter>
            <div 
              className={cn(
                'inline-flex items-center text-sm font-medium text-primary transition-all duration-300',
                'relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px]',
                'after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300',
                isHovered ? 'after:scale-x-100' : ''
              )}
            >
              View Details
              <ExternalLink className="ml-1 h-3 w-3" />
            </div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default ProjectCard;
