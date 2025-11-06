import React from 'react';
import AnimatedText from './AnimatedText';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    company: "DA STUDIO",
    location: "Dubai",
    period: "February 2023 — Present",
    achievements: [
      "Integrated Meilisearch for advanced search, reducing query times significantly",
      "Implemented custom Mapbox maps with dynamic clusters for enhanced UX",
      "Optimized performance with Redis caching and SQL tuning",
      "Migrated SOAP to REST APIs, improved Sphinx performance by 60%",
      "Boosted SEO scores by 20% through performance optimization"
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "IT FAQ",
    location: "Dubai",
    period: "August 2022 — February 2023",
    achievements: [
      "Refactored jQuery architecture, improving form load times",
      "Built event-driven web app with Laravel Pusher and FCM notifications"
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "HET",
    location: "Istanbul",
    period: "March 2021 — April 2022",
    achievements: [
      "Developed custom dashboards with Laravel Nova",
      "Enhanced UI with jQuery for better user engagement",
      "Automated email and push notifications with queued jobs",
      "Optimized SQL queries, cutting load times by 35%"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <AnimatedText delay={0.1} className="mb-4">
          <h2 className="section-title text-center">Professional Experience</h2>
        </AnimatedText>
        
        <AnimatedText delay={0.2} className="mb-6">
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </AnimatedText>
        
        <AnimatedText delay={0.3} className="mb-12">
          <p className="section-subtitle text-center mx-auto">
            My journey in software development and the impact I've made
          </p>
        </AnimatedText>

        <div className="relative max-w-6xl mx-auto">
          {/* Center timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2"></div>
          
          {experienceData.map((experience, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <AnimatedText key={index} delay={0.4 + index * 0.1}>
                <div className={`relative flex items-center mb-12 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-secondary/30 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-secondary/40 relative">
                      {/* Arrow pointing to timeline */}
                      <div className={`hidden md:block absolute top-8 w-0 h-0 border-t-8 border-b-8 border-transparent ${
                        isLeft 
                          ? 'right-[-16px] border-l-8 border-l-secondary/30' 
                          : 'left-[-16px] border-r-8 border-r-secondary/30'
                      }`}></div>
                      
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                          <Briefcase className="w-4 h-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex gap-2 text-muted-foreground text-sm">
                            <span className="text-primary mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot - centered */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10"></div>
                </div>
              </AnimatedText>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
