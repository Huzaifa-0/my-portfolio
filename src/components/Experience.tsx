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
      "Enhanced search efficiency by integrating Meilisearch for complex filtering and search capabilities, reducing query response times and improving user navigation.",
      "Boosted user engagement by implementing custom Mapbox maps with dynamic clusters and popups, increasing user interactions.",
      "Optimized performance through Redis caching and SQL query tuning, decreasing page load times and improving user retention.",
      "Led project deployments using Laravel Forge, automating backups with bash scripts and integrating third-party services like Scaleway TEM, improving email deliverability.",
      "Increased search accuracy and reduced latency by migrating APIs from SOAP to REST and improving Sphinx search engine performance by 60%.",
      "Boosted SEO scores by reducing CLS, eliminating blocking JS scripts, and minimizing unused CSS, leading to a 20% improvement in page load speed and ranking."
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "IT FAQ",
    location: "Dubai",
    period: "August 2022 — February 2023",
    achievements: [
      "Improved form performance by refactoring and optimizing jQuery files, implementing a custom architecture that reduced load times with multi-module forms.",
      "Enhanced system responsiveness through a re-architected event-driven web app, integrating Laravel Pusher for real-time notifications and FCM for mobile push alerts, increasing notification reliability."
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "HET",
    location: "Istanbul",
    period: "March 2021 — April 2022",
    achievements: [
      "Increased data accessibility by developing custom dashboards with Laravel Nova, improving decision-making for internal teams.",
      "Enhanced interactive features with jQuery UI, resulting in increase in user engagement with dynamic site elements.",
      "Optimized user experience by managing user preferences in a sessions, improving user satisfaction.",
      "Automated notifications with queued jobs and cron-based alerts, increasing user re-engagement through timely email and push notifications.",
      "Boosted performance by optimizing SQL queries and memory retrieval cutting load times by 35%."
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

        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <AnimatedText key={index} delay={0.4 + index * 0.1}>
              <div className="relative pl-8 md:pl-12 pb-12 last:pb-0">
                {/* Timeline line */}
                <div className="absolute left-[11px] md:left-[19px] top-0 bottom-0 w-[2px] bg-primary/20 last:hidden"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-2 top-1 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg"></div>
                
                {/* Content card */}
                <div className="bg-secondary/30 backdrop-blur-sm rounded-lg p-6 ml-4 md:ml-6 hover:shadow-lg transition-all duration-300 hover:bg-secondary/40">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                      <div className="flex items-center gap-1 md:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1 md:justify-end">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
