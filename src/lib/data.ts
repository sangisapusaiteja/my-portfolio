// ==========================================
// Centralized Portfolio Data
// ==========================================

// --- Personal Info ---
export const personalInfo = {
  name: "Saiteja Sangisapu",
  logo: "ST",
  greeting: "Hi, my name is",
  description:
    "Crafting exceptional digital experiences with modern web technologies. Specialized in building scalable full-stack applications with a focus on performance and user experience.",
  resumeUrl: "/resume.pdf",
  email: "mailto:tejasai38409@gmail.com",
  roles: [
    "Full-Stack Developer",
    "React Developer",
    "UI Engineer",
    "Next.js Developer",
    "TypeScript Enthusiast",
  ],
};

// --- Navigation ---
export const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// --- About Section ---
export const aboutContent = {
  subtitle: "Get To Know Me",
  title: "About Me",
  paragraphs: [
    'I\'m a <span class="text-primary font-semibold">Full-Stack Developer</span> with over <span class="text-secondary font-semibold">2+ year</span> of experience building modern web applications. I specialize in creating scalable, performant solutions that deliver exceptional user experiences.',
    "My journey in software development has equipped me with expertise in both frontend and backend technologies. I'm passionate about writing clean, maintainable code and staying up-to-date with the latest industry trends.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  ],
  stats: [
    { value: "2+", label: "Years Exp" },
    { value: "10+", label: "Projects" },
    { value: "5+", label: "Tech Stack" },
  ],
  highlights: [
    {
      icon: "Layers" as const,
      title: "Multi-tenant Architecture",
      description:
        "Expert in designing and implementing scalable multi-tenant systems",
    },
    {
      icon: "Code2" as const,
      title: "REST API Development",
      description:
        "Building robust and performant RESTful APIs with modern frameworks",
    },
    {
      icon: "Zap" as const,
      title: "Performance Optimization",
      description:
        "Delivering lightning-fast applications through careful optimization",
    },
    {
      icon: "Database" as const,
      title: "Full-Stack Expertise",
      description:
        "End-to-end development from database design to user interface",
    },
  ],
};

// --- Tech Stack ---
export type TechCategory = "Frontend" | "Backend" | "Database" | "Tools";

export interface Tech {
  name: string;
  category: TechCategory;
}

export const technologies: Tech[] = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Nest.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Vercel", category: "Tools" },
];

export const techCategories: TechCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

export const techBadges = ["Responsive Design", "Clean Code", "Agile", "CI/CD"];

// --- Projects ---
export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Art of Living Teachers & Program Organizers Application",
    description:
      "Comprehensive event and participant management platform built for Art of Living International. Developed responsive UI components and integrated robust RESTful backend APIs to ensure seamless data flow, optimized performance, and scalable participant handling.",
    tech: ["React.js", "Tailwind CSS", "Supabase", "PostgreSQL", "REST APIs"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "AOL US Landing Pages",
    description:
      "High-performance, visually accurate landing pages developed for the US market. Focused on responsive UI implementation, UX optimization, and brand consistency while enhancing user engagement and conversion alignment with global design standards.",
    tech: ["Tailwind CSS", "Next.js", "React.js"],
    gradient: "from-pink-500 to-rose-500",
    liveLink: "https://www.artofliving.org/us-en",
  },
  {
    title: "Common Harmony",
    description:
      "Multi-tenant course management system enabling authorized tenants to announce and manage courses across specific regions (e.g., Europe). Implemented geographic grouping logic for enhanced cross-regional visibility and scalable tenant-based architecture.",
    tech: ["React.js", "PostgreSQL", "Nest.js", "Next.js"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Connect Together (Real-time Chat Application)",
    description:
      "Full-stack real-time chat application supporting one-on-one and group conversations. Implemented room creation, secure room entry, real-time messaging via Supabase subscriptions, and profile picture uploads with PostgreSQL-backed data management.",
    tech: ["Next.js", "PostgreSQL", "Supabase", "TypeScript"],
    liveLink: "https://connect-together-st.vercel.app/",
    githubLink: "https://github.com/sangisapusaiteja/connect-together",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "Interview Handbook (Interactive Interview Preparation App)",
    description:
      "Frontend-focused interactive interview preparation platform designed for quick revision of core concepts like DSA with JavaScript, HTML, CSS, and Next.js. Includes concept explanations, step-by-step visualizations, animated demonstrations, in-browser code editor with console output, and structured topic navigation for efficient interview preparation.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveLink: "https://my-interview-handbook.vercel.app/",
    githubLink: "https://github.com/sangisapusaiteja/InterviewHandboo",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Skill Connect",
    description:
      "Comprehensive skill-sharing platform connecting learners with experts across various domains. Implemented user authentication, profile management, course creation, and secure payment processing using Stripe API for seamless transactions.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Supabase"],
    liveLink: "https://skillconnect-2025.vercel.app/",
    githubLink: "https://github.com/sangisapusaiteja/skillconnectapp",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio showcasing UI engineering skills and responsive design expertise. Built with React.js and Tailwind CSS, focusing on modern layouts, smooth interactions, and performance-optimized rendering.",
    tech: ["React.js", "Tailwind CSS"],
    liveLink: "https://saitejasangisapu.vercel.app/",
    githubLink: "https://github.com/sangisapusaiteja/portfolio",
    gradient: "from-orange-500 to-amber-500",
  },
];

// --- Experience ---
export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "TECHVED Consulting India Pvt. Ltd.",
    role: "Software Developer",
    duration: "Jan 2025 – Present | Bengaluru, India",
    achievements: [
      "Architected and maintained scalable web applications using React.js, TypeScript, Tailwind CSS, PostgreSQL, and Supabase",
      "Designed and optimized RESTful APIs to enable seamless front-end and back-end integration",
      "Improved application performance by optimizing complex SQL queries and reducing page load times",
      "Collaborated with cross-functional teams in Agile/Scrum environments to deliver high-quality features on schedule",
      "Contributed to clean architecture practices and reusable component development for long-term scalability",
    ],
  },
  {
    company: "Sumeru Software Solutions Pvt. Ltd.",
    role: "Full-Stack Developer",
    duration: "Jan 2024 – Dec 2024 | Bengaluru, India",
    achievements: [
      "Enhanced application functionality by implementing complex data flow management and secure authentication mechanisms",
      "Developed and maintained robust RESTful APIs ensuring reliable and efficient data exchange",
      "Implemented role-based access control and optimized backend logic for improved system stability",
      "Worked closely with stakeholders to translate business requirements into scalable technical solutions",
    ],
  },
];

// --- Contact / Social Links ---
export interface SocialLink {
  name: string;
  icon: "Mail" | "Linkedin" | "Github";
  link: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    icon: "Mail",
    link: "mailto:tejasai38409@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    link: "https://www.linkedin.com/in/saitejasangisapu/",
    color: "from-blue-600 to-blue-400",
  },
  {
    name: "GitHub",
    icon: "Github",
    link: "https://github.com/sangisapusaiteja",
    color: "from-gray-700 to-gray-500",
  },
];

export const contactContent = {
  subtitle: "Let's Connect",
  title: "Get In Touch",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities",
  ctaTitle: "Ready to start a project?",
  ctaDescription: "Drop me a message and let's make something amazing together",
  ctaText: "Send me a message",
  footerText:
    'Built with <span class="text-red-500">♥</span>',
};

// --- Portfolio Version History ---
export interface PortfolioVersion {
  version: string;
  year: string;
  description: string;
  url: string;
  technologies: string[];
  thumbnail?: string;
}

export const portfolioVersions: PortfolioVersion[] = [
  {
    version: "v2.0",
    year: "2026",
    description:
      "Current version - Modern glassmorphism design with smooth animations",
    url: "https://saitejasangisapu2003.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    version: "v1.0",
    year: "2025",
    description: "Previous portfolio with minimalist design",
    url: "https://saitejasangisapu.vercel.app/",
    technologies: ["React.js", "CSS", "JavaScript"],
  },
];
