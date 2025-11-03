
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import ProjectDetailComponent from '@/components/ProjectDetail';
import { projectsData, Project } from '@/data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      if (id) {
        const foundProject = projectsData.find(p => p.id === id);
        setProject(foundProject || null);
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="pt-32">
        <ProjectDetailComponent project={project} />
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

export default ProjectDetail;
