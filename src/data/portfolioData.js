// ============================================================
// portfolioData.js — Centralized configuration for the portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Ganasree",
  firstName: "Ganasree",
  brandName: "Ganasree",
  title: "Software Developer",
  location: "India",
  phone: "+91 99999999",
  emails: {
    primary: "your-email@example.com",
    secondary: "your-email@example.com",
  },
  summary:
    "Motivated software developer with hands-on experience building scalable web applications using React, Node.js, and modern backend technologies. Strong foundation in API development, system design, and problem solving.",
  resumeUrl: "/Ganasree_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/YOUR-USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR-PROFILE",
  instagram: "https://www.instagram.com/YOUR-HANDLE",
};

export const heroContent = {
  greeting: "Hi, I'm Ganasree",
  titleHighlight: "Software Developer",
  subtitle:
    "I build modern, scalable web applications with React, Node.js, APIs, and cloud-ready architecture.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:your-email@example.com?subject=Hiring Inquiry – Portfolio&body=Hello Ganasree,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Ganasree_Resume_2026.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Ganasree</span>, a software developer focused on building responsive, reliable, and scalable web experiences with strong attention to product quality and clean architecture.`,
  techStack: ["React", "Node.js", "Java", "Spring Boot"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into robust web applications",
  description:
    "I combine product thinking, clean architecture, and hands-on engineering to build dependable digital experiences.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding requirements, constraints, and user needs to shape the solution clearly.",
    },
    {
      number: "02",
      title: "Design",
      text: "I build intuitive interfaces and scalable system structure with maintainability in mind.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I implement full-stack features using modern frameworks, APIs, and database services.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I focus on performance, reliability, and clean deployment practices for real-world use.",
    },
  ],
  endText: "Ready to build!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "Java", level: 88 },
        { name: "Python", level: 84 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 86 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 92 },
        { name: "React Native", level: 78 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "REST API Development", level: 92 },
        { name: "Spring Boot", level: 82 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 84 },
        { name: "MySQL", level: 82 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Docker", level: 84 },
        { name: "Git", level: 90 },
        { name: "Redis", level: 80 },
        { name: "JWT", level: 85 },
        { name: "Swagger", level: 82 },
        { name: "Postman", level: 88 },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Data Structures & Algorithms", level: 88 },
        { name: "OOP", level: 90 },
        { name: "System Design", level: 84 },
        { name: "API Design", level: 86 },
        { name: "Multi-Tenant Architecture", level: 82 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: "Creative Engineering",
  heading: "Building polished products with strong product sense",
  description: "I enjoy turning complex ideas into clean, user-friendly interfaces and reliable backend systems.",
  categories: [
    {
      title: "Modern UIs",
      description: "Clean, responsive interfaces crafted for strong user experience and visual clarity.",
      stats: "React & Tailwind",
      icon: "🎨",
    },
    {
      title: "Scalable APIs",
      description: "Reliable backend systems with authentication, business rules, and clean service boundaries.",
      stats: "Node.js / Spring Boot",
      icon: "⚙️",
    },
    {
      title: "Automation & Data",
      description: "Practical workflows and structured data solutions that improve efficiency and reliability.",
      stats: "MongoDB / PostgreSQL",
      icon: "🧠",
    },
    {
      title: "Full-Stack Delivery",
      description: "End-to-end development from interface to deployment, with strong attention to detail.",
      stats: "Production Focus",
      icon: "⚡",
    },
  ],
};

export const leadershipList = [
  {
    title: "Google Cloud Career Launchpad – Data Analytics Track",
    description: "Completed a structured career learning program focused on analytics, cloud fundamentals, and applied technical growth.",
    role: "Learner & Program Participant",
    badge: "Growth",
  },
  {
    title: "Technical Hub Pvt Ltd",
    description: "Completed a full-stack training program and built responsive web applications while strengthening practical development skills.",
    role: "Full Stack Trainee",
    badge: "Training",
  },
  {
    title: "Academic and Event Coordination",
    description: "Developed strong collaboration, communication, and leadership skills through college events and team-based initiatives.",
    role: "Coordinator & Collaborator",
    badge: "Leadership",
  },
];

export const internshipsList = [
  {
    organization: "Technical Hub Pvt Ltd",
    role: "Full Stack Development Trainee",
    duration: "May 2025 – June 2025",
    skills: ["Full Stack Development", "Responsive Web Apps", "Practical Engineering"],
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
];

export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding team efforts and coordinating work with clarity and responsibility." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident communication and presentation skills developed through collaborative and event-based experiences." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working effectively with peers and building shared momentum across projects." },
  { name: "Communication", icon: "💬", desc: "Clear technical and professional communication with a strong sense of detail." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down technical challenges into practical, efficient solutions." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to learn new tools, frameworks, and development workflows." },
  { name: "Creativity", icon: "🎨", desc: "Balancing user experience, design, and engineering with thoughtful execution." },
  { name: "Time Management", icon: "⏰", desc: "Managing learning, projects, and responsibilities with consistency and focus." },
];

export const projects = [
  {
    id: "policyguard",
    number: "01",
    badge: "🚀 Featured Project",
    title: "PolicyGuard AI",
    description:
      "Built an AI-powered platform for analyzing privacy policies and legal contracts across web, desktop, and mobile applications. The system supports risk detection, privacy alerts, and AI-based risk scoring for smarter compliance review.",
    techTags: ["React", "React Native", "Electron.js", "Node.js", "Express.js", "MongoDB Atlas", "OpenAI API", "NLP", "Tailwind CSS", "Docker"],
    links: {
      github: "https://github.com/",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "saas-platform",
    number: "02",
    badge: null,
    title: "Multi-Tenant SaaS Platform",
    description:
      "Developed a multi-tenant SaaS platform for managing teams, projects, and tasks with secure data isolation, RBAC, and structured collaboration workflows.",
    techTags: ["Node.js", "Express.js", "PostgreSQL", "React", "Docker", "JWT"],
    links: {
      github: "https://github.com/",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "payment-gateway",
    number: "03",
    badge: null,
    title: "Payment Gateway with Hosted Checkout",
    description:
      "Built a payment gateway solution supporting merchant order creation and customer payments via UPI and cards with secure REST-based integrations.",
    techTags: ["Node.js", "Spring Boot", "PostgreSQL", "React", "Docker", "REST APIs"],
    links: {
      github: "https://github.com/",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "CLA: Programming Essentials in C/C++",
      issuer: "Cisco / C++ fundamentals",
      icon: "💻",
    },
    {
      name: "HTML & CSS",
      issuer: "Certiport IT Pearson",
      icon: "🌐",
    },
    {
      name: "Python & Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      icon: "🐍",
    },
    {
      name: "Java Foundations",
      issuer: "Oracle Certified Foundations Associate",
      icon: "☕",
    },
    {
      name: "JavaScript Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      icon: "⚡",
    },
    {
      name: "MongoDB Certified Associate Developer",
      issuer: "MongoDB",
      icon: "🗄️",
    },
  ],
  viewAllUrl: "mailto:your-email@example.com?subject=Certificate%20Request",
};

export const education = {
  degree: "B.Tech in Data Science",
  institution: "Aditya College of Engineering and Technology, Surampalem",
  cgpa: "9.13",
  graduation: "2027",
  twelfth: "Intermediate (MPC) – 90.60%",
  tenth: "Senior Secondary – Completed",
};

export const footerContent = {
  taglines: [
    "Full-Stack Development",
    "React · Node.js · Java",
    "Scalable Web Applications",
  ],
  credential: "B.Tech Data Science · CGPA 9.13",
  copyright: `© ${new Date().getFullYear()} Ganasree | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
