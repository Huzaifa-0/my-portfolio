
export interface Project {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  role: string;
  tasks: string[];
  achievements: string[];
  contributions: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    excerpt: "Full-stack e-commerce solution with payment integration and real-time inventory management.",
    description: "A comprehensive e-commerce platform built with Laravel and Vue.js, featuring secure payment processing, real-time inventory management, and a responsive design. The platform includes an admin panel for product management, order processing, and analytics.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS", "Stripe API", "Redis"],
    role: "Lead Developer",
    tasks: [
      "Designed and implemented database schema",
      "Built RESTful API for front-end communication",
      "Integrated payment gateway and security features",
      "Developed admin dashboard with analytics",
    ],
    achievements: [
      "Reduced page load time by 40% through optimization",
      "Implemented caching strategy resulting in 30% faster checkout process",
      "Achieved 99.9% uptime through robust deployment strategy",
    ],
    contributions: [
      "Created custom middleware for role-based access control",
      "Developed reusable Vue components used across the platform",
      "Implemented real-time notification system using WebSockets",
    ],
  },
  {
    id: "2",
    title: "Healthcare Management System",
    excerpt: "Patient management system with appointment scheduling and medical records management.",
    description: "A comprehensive healthcare management solution designed for hospitals and clinics, enabling efficient patient care, appointment scheduling, and medical records management. The system includes features for doctors, staff, administrators, and patients with secure role-based access.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    technologies: ["Laravel", "Livewire", "MySQL", "Alpine.js", "Tailwind CSS", "AWS"],
    role: "Backend Developer",
    tasks: [
      "Designed and implemented secure medical records storage",
      "Created appointment scheduling system with conflict resolution",
      "Built reporting and analytics dashboard for administrators",
      "Implemented HIPAA-compliant data encryption and access controls",
    ],
    achievements: [
      "Reduced appointment scheduling time by 70%",
      "Decreased paperwork by implementing digital forms and signatures",
      "Improved patient data retrieval speed by 60% through optimized queries",
    ],
    contributions: [
      "Developed custom prescription management module",
      "Created automated appointment reminder system",
      "Implemented secure document sharing between healthcare providers",
    ],
  },
  {
    id: "3",
    title: "Real Estate Platform",
    excerpt: "Property listing and management platform with advanced search functionality.",
    description: "A feature-rich real estate platform that connects property owners with potential buyers and renters. The platform includes advanced search capabilities, virtual tours, property management for agents, and an analytics dashboard for market insights.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["Express.js", "MongoDB", "React", "Node.js", "Google Maps API", "AWS S3"],
    role: "Full-Stack Developer",
    tasks: [
      "Designed and implemented property search algorithm",
      "Created interactive map-based property browsing",
      "Built agent dashboard for property management",
      "Integrated virtual tour functionality",
    ],
    achievements: [
      "Implemented geolocation search reducing property finding time by 50%",
      "Optimized image loading resulting in 35% faster page rendering",
      "Increased user engagement through personalized property recommendations",
    ],
    contributions: [
      "Developed mobile-responsive design enhancing user experience on all devices",
      "Created custom filters for advanced property search",
      "Implemented real-time messaging between agents and clients",
    ],
  },
  {
    id: "4",
    title: "Financial Analytics Dashboard",
    excerpt: "Real-time financial data visualization and analytics platform for investment decisions.",
    description: "A sophisticated financial analytics dashboard that provides real-time market data, portfolio tracking, and investment insights. The platform integrates with multiple financial data sources to offer comprehensive market analysis and personalized investment recommendations.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["Nest.js", "PostgreSQL", "Vue.js", "D3.js", "Redis", "Docker"],
    role: "Backend Developer",
    tasks: [
      "Integrated multiple financial data APIs",
      "Built real-time data processing pipeline",
      "Implemented portfolio tracking and performance metrics",
      "Created alert system for price movements",
    ],
    achievements: [
      "Processed and visualized market data with less than 100ms latency",
      "Implemented caching strategy reducing API calls by 65%",
      "Created scalable architecture handling 10x user growth without performance degradation",
    ],
    contributions: [
      "Developed custom technical indicators for market analysis",
      "Created algorithm for automated portfolio rebalancing",
      "Implemented multi-factor authentication for enhanced security",
    ],
  },
  {
    id: "5",
    title: "Learning Management System",
    excerpt: "Comprehensive educational platform with course management and student progress tracking.",
    description: "An interactive learning management system designed for educational institutions, featuring course creation, assignment management, progress tracking, and interactive learning materials. The platform supports various content types including video, quizzes, and collaborative projects.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["Laravel", "Filament", "MySQL", "Livewire", "AWS", "Redis"],
    role: "Technical Lead",
    tasks: [
      "Designed overall system architecture",
      "Implemented course creation and management features",
      "Built student progress tracking and analytics",
      "Created interactive assessment tools",
    ],
    achievements: [
      "Reduced course creation time by 60% through intuitive interface",
      "Improved student engagement through gamification elements",
      "Implemented learning analytics providing insights for educators",
    ],
    contributions: [
      "Developed custom video streaming solution with adaptive quality",
      "Created interactive quiz system with immediate feedback",
      "Implemented collaborative document editing for group projects",
    ],
  },
  {
    id: "6",
    title: "Supply Chain Management System",
    excerpt: "End-to-end supply chain tracking and management platform with predictive analytics.",
    description: "A comprehensive supply chain management system that provides end-to-end visibility and control over the entire supply chain. The platform includes inventory management, supplier relationships, logistics tracking, and predictive analytics for demand forecasting.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["Express.js", "MongoDB", "React", "Redis", "Docker", "Kubernetes"],
    role: "Backend Architect",
    tasks: [
      "Designed microservices architecture for scalability",
      "Implemented real-time tracking and notification system",
      "Built predictive analytics for inventory management",
      "Created supplier management and evaluation system",
    ],
    achievements: [
      "Reduced stockouts by 45% through predictive inventory management",
      "Decreased shipping costs by 30% through optimized logistics",
      "Improved supplier performance by implementing KPI tracking",
    ],
    contributions: [
      "Developed algorithm for optimal reorder point calculation",
      "Created dashboard for supply chain visibility and analytics",
      "Implemented blockchain-based tracking for high-value items",
    ],
  },
];
