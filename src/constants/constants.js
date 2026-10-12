import {
  mobile,
  backend,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  express,
  java,
  python,
  c,
  cplusplus,
  sql,
  postgresql,
  numpy,
  pandas,
  opencv,
  githubIcon,
  vscode,
  intellij,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "internships",
    title: "Internships",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "AI/ML Developer",
    icon: backend,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [
  // Row 1 - languages
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  // Row 2 - backend & databases
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "SQL",
    icon: sql,
  },
  // Row 3 - libraries & tools
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: githubIcon,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "IntelliJ IDEA",
    icon: intellij,
  },
];

const projects = [
  {
    name: "AgriChain",
    description:
      "A farm analytics and agri-marketplace platform that turns satellite imagery and crop data into actionable decisions for farmers.",
    features: [
      "Crop health monitoring with NDVI vegetation indices computed from Google Earth Engine satellite passes.",
      "Interactive geospatial farm view built with Leaflet to draw and track individual field boundaries.",
      "Leaf disease detection from uploaded scans using an OpenCV and CNN based image pipeline.",
      "Spoilage prediction for cold-storage batches to estimate remaining shelf life.",
      "Market price forecasting for crops using an ML regression model.",
      "JWT authenticated REST API with a PostgreSQL data layer and a dedicated Python analytics service.",
    ],
    tags: ["Python", "Machine Learning", "PostgreSQL", "React.js", "Google Earth Engine", "Leaflet"],
    visual: "agriculture",
    source_code_link: "https://github.com/Kshitij537/AgriChain",
  },
  {
    name: "NyaySathi",
    description:
      "An AI powered legal complaint management system that triages, classifies and drafts responses for incoming cases using a multi-agent workflow.",
    features: [
      "Multi-agent LangGraph pipeline that handles intake and validation, legal classification, priority scoring, document drafting and staff assignment.",
      "Automatic classification of complaints into categories such as civil, labour, consumer, cyber, property and family law.",
      "Priority scoring that surfaces urgent cases and tracks statutory compliance deadlines.",
      "Automated drafting of legal notices and case documents from the parsed complaint.",
      "Live dashboard with open complaint volume, auto-resolution rate and average response time.",
    ],
    tags: ["Python", "LangGraph", "React.js", "Node.js"],
    visual: "legal",
    source_code_link: "https://github.com/Kshitij537/NyaySathi",
  },
  {
    name: "Garudadrishti",
    description:
      "A social media monitoring console that scrapes public posts at scale, classifies them with AI and raises real-time alerts on harmful content.",
    features: [
      "Automated scrapers that continuously collect posts across monitored platforms with health tracking per scraper.",
      "AI content classification into neutral, positive, negative and flagged/harmful buckets.",
      "Sentiment and mention volume analytics aggregated over rolling 24 hour windows.",
      "Keyword spike detection that triggers alerts and escalates content to a human review queue.",
      "Exportable reports and role based access for review teams.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "Machine Learning"],
    visual: "monitoring",
    source_code_link: "https://github.com/Kshitij537/Garudadrishti",
  },
];

const internships = [
  {
    title: "Apprentice Program - GenAI | LLM Gateway Project",
    company: "Persistent Systems",
    location: "Nagpur, Maharashtra",
    date: "Jul 2026 - Present",
    highlights: [
      "Contributing to a multi-model LLM Gateway that routes user queries to suitable open-source LLMs through a unified interface.",
      "Developing the web application with React.js, Vite, Tailwind CSS, Python and REST APIs, with local LLM inference through Ollama.",
      "Working on session management, rate limiting, backend architecture, API integration and Supabase/PostgreSQL data integration.",
      "Integrated Supabase Authentication/OAuth and contributed to LLM research and model evaluation, with Qwen 3.5:4B currently integrated.",
      "Contributed to end-to-end chat workflows and 9 model-router tests validating model selection and routing functionality.",
    ],
  },
  {
    title: "AI/ML & Full Stack Developer Intern",
    company: "Cybrainyx - Garudadrishti, AI-Based Social Media Monitoring System",
    location: "Nagpur, Maharashtra",
    date: "Aug 2025 - Feb 2026",
    highlights: [
      "Developed AI-powered features across machine learning, data processing, backend services and application development for an intelligent social media monitoring platform.",
      "Optimized 3 machine learning modules and developed 10+ REST API endpoints using Node.js and Express.js for authentication, reporting, scraping and workflow automation.",
      "Built 8+ React.js dashboard interfaces and collaborated with a 5-member cross-functional team on testing, debugging, deployment and feature development.",
    ],
  },
];

const achievements = [
  {
    title: "Top 15 - Swalambh Hackathon",
    description:
      "Secured Top 15 in the Swalambh Hackathon at St. Vincent Pallotti College of Engineering.",
  },
  {
    title: "Top 10 - ClaudeSolvathon",
    description: "Secured Top 10 in the ClaudeSolvathon at IIIT Nagpur.",
  },
  {
    title: "Garudadrishti AI Platform Presentation",
    description:
      "Presented the Garudadrishti AI platform before Hon. Chief Minister Devendra Fadnavis.",
  },
];

const education = [
  {
    degree: "B.Tech. in Computer Engineering",
    institution: "St. Vincent Pallotti College of Engineering & Technology",
    location: "Nagpur, India",
    date: "2023 - 2027",
  },
  {
    degree: "HSC (Class 12)",
    institution: "Dr MK Umathe College",
    date: "2023",
  },
  {
    degree: "SSC (Class 10)",
    institution: "Somalwar Nikalas High School",
    date: "2021",
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export {
  services,
  technologies,
  internships,
  achievements,
  education,
  //  experiences,
  //  testimonials,
  projects,
};
