export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Akshit Tyagi",
  role: "Software Developer",
  summary: "Dedicated Software Developer with 2 years of experience as Fullstack Developer. Specializes in JavaScript, React, Node and Node.js. Passionate about problem-solving and innovation, and enjoys building efficient, scalable applications while continuously enhancing his technical expertise in modern development frameworks.",
  email: "tyagiakshit90@gmail.com",
  phone: "9761591617",
  location: "Modinagar, Ghaziabad",
  linkedin: "https://www.linkedin.com/in/akshit-tyagi-a07144279/",
  github: "#", // Placeholder as not in resume
};

export const SKILLS = [
  { 
    category: "Frontend", 
    items: [
      { name: "JavaScript", icon: "Code2" },
      { name: "React", icon: "Atom" },
      { name: "Vue.js", icon: "Layers" },
      { name: "HTML5", icon: "FileCode" },
      { name: "CSS3", icon: "Palette" },
      { name: "Tailwind CSS", icon: "Wind" }
    ] 
  },
  { 
    category: "Backend", 
    items: [
      { name: "Node.js", icon: "Server" },
      { name: "Express.js", icon: "Cpu" },
      { name: "Java", icon: "Coffee" },
      { name: "PHP Laravel", icon: "FileJson" },
      { name: "RESTful APIs", icon: "Webhook" }
    ] 
  },
  { 
    category: "Database", 
    items: [
      { name: "MongoDB", icon: "Database" },
      { name: "PostgreSQL", icon: "DatabaseBackup" },
      { name: "MySQL", icon: "HardDrive" }
    ] 
  },
  { 
    category: "Tools & Others", 
    items: [
      { name: "MEVN Stack", icon: "Blocks" },
      { name: "Salesforce", icon: "Cloud" },
      { name: "Postman", icon: "Send" },
      { name: "CI/CD", icon: "Infinity" },
      { name: "AWS", icon: "CloudLightning" },
      { name: "Git", icon: "Terminal" }
    ] 
  },
];

export const EXPERIENCE = [
  {
    role: "Junior Software Developer",
    company: "Huuike",
    period: "Jul 2024 - Present",
    responsibilities: [
      "Building scalable, user-friendly full-stack applications using MEVN/MERN stack.",
      "Developing robust RESTful APIs on Node.js and managing server-side logic.",
      "Managing and optimizing databases on MongoDB and PostgreSQL.",
      "Ensuring seamless integration between frontend and backend components.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Auto-Torino",
    role: "Fullstack Developer",
    period: "Jan 2025 - Mar 2025",
    description: "A digital platform providing car purchase vouchers, enhancing customer experience with special deals and streamlined processes.",
    tech: ["Vue.js", "Node.js", "MongoDB", "Express.js"],
    responsibilities: [
      "Developing and managing backend APIs.",
      "Ensuring seamless frontend integration using Vue.js.",
      "Optimizing performance and maintaining robust systems.",
    ],
  },
  {
    title: "Jerry",
    role: "Fullstack Developer",
    period: "Oct 2024 - Jan 2025",
    description: "An event management and community platform allowing users to buy tickets and join registered communities.",
    tech: ["Vue.js 3", "Node.js", "Payment APIs"],
    responsibilities: [
      "Managing Backend APIs and payment gateway integration.",
      "Developing interactive UI with Vue 3.",
    ],
  },
  {
    title: "MoneySurfer",
    role: "Backend Developer",
    period: "Sep 2024 - Present",
    description: "Educational platform offering expert-led courses and webinars focused on stock market investing and trading.",
    tech: ["Express.js", "Node.js", "REST APIs"],
    responsibilities: [
      "Building and maintaining secure, high-performance APIs.",
      "Developing the core backend architecture.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech/B.E)",
    institution: "RD Engineering College",
    period: "Sep 2020 - Jun 2024",
    score: "SGPA: 8.5",
  },
  {
    degree: "Intermediate",
    institution: "Heritage Academy",
    period: "Mar 2019 - Mar 2020",
    score: "90%",
  },
  {
    degree: "High School",
    institution: "Heritage Academy",
    period: "Mar 2017 - Mar 2018",
    score: "87%",
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    date: "2024-03-13",
    description: "Certified foundational cloud skills covering AWS services, security, architecture, and deployment.",
  },
];
