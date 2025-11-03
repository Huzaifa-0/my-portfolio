
export interface Project {
  id: string;
  title: string;
  link: string | null;
  excerpt: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  role: string;
  tasks: string[];
  achievements: string[];
  contributions: string[];
}

import projectsJson from './projects.json';

export const projectsData: Project[] = projectsJson as Project[];

