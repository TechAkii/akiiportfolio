export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  overview: string;
  status: string;
  stack: string[];
  github?: string;
  theme: string;
  number: string;
  visual?: string;
  title?: string;
  technologies?: string[];
  accent?: string;
};

export const projects: Project[] = [
  {
    slug: "edith-ai-assistant",
    number: "01",
    name: "EDITH — Personal AI Assistant",
    category: "AI ENGINEERING",
    description:
      "A personal AI assistant with voice interaction and intelligent automation.",
    overview:
      "Built with FastAPI and Ollama, EDITH explores local language models, spoken responses, persistent reminders, and Windows automation.",
    status: "In Development",
    stack: ["Python", "FastAPI", "Ollama", "JavaScript", "SQLite"],
    github:
      "https://github.com/TechAkii/E.D.I.T.H-My-Personal-Assistant",
    theme: "cyan",
  },
  {
    slug: "flowops",
    number: "02",
    name: "FlowOps",
    category: "BUSINESS SOFTWARE",
    description:
      "A platform concept for organizing business operations and workflows.",
    overview:
      "A business operations project focused on structured workflows and database-backed application development.",
    status: "In Development",
    stack: ["PostgreSQL", "Database Design", "Web Development"],
    theme: "purple",
  },
 
{
  slug: "lab-equipment-booking",
  number: "03",
  name: "Lab Equipment Booking System",
  category: "TEAM PROJECT",
  description:
    "A collaborative web application for managing laboratory equipment and booking requests. My responsibilities focused on booking validation, automated testing, approval workflows, integration, and continuous integration.",
  overview:
    "Served as Coordinator and QA Lead, with assigned responsibilities for M4 Booking Validation & Tests and M5 Approval, Integration & CI. My work focused on validating booking rules, improving software quality through testing, coordinating integration, and supporting reliable CI workflows. Collaborated with Xrej and the project team.",
  status: "Team Project",
  stack: [
    "Python",
    "Flask",
    "Jinja2",
    "HTML",
    "CSS",
    "SQLite",
    "Pytest",
    "GitHub Actions"
  ],
  github: "https://github.com/TechAkii",
  theme: "blue",
},
 

{
  slug: "xerj-corpus-hub",
  number: "04",
  name: "XERJ Corpus Hub Contribution",
  category: "OPEN-SOURCE RECOGNITION",
  description:
    "My work was selected for the XERJ Corpus Hub, an open reference-memory resource that helps AI coding agents retrieve worked examples before generating code.",
  overview:
    "Recognized as a Corpus Hub contributor since October 19, 2026. My profile reports one selected commit, covering eight files and 611 lines. The contribution demonstrates practical software development work that was selected for inclusion in an AI coding-agent reference corpus.",
  status: "Selected Contribution",
  stack: [
    "Open Source",
    "Git",
    "GitHub",
    "AI Coding Agents",
    "Reference Memory"
  ],
  github: "https://github.com/TechAkii",
  theme: "purple",
},

  
{
  slug: "ak-e-commerce-clothing",
  number: "05",
  name: "AK E-Commerce Clothing",
  category: "E-COMMERCE · AI CORPUS CONTRIBUTION",
  description:
    "An e-commerce clothing platform exploring virtual try-on experiences, with work selected for the XERJ Corpus Hub.",
  overview:
    "This project explores online clothing shopping and virtual fitting experiences. Work associated with my development portfolio was selected for the XERJ Corpus Hub, an open reference-memory resource for AI coding agents. My contributor profile reports one selected commit, eight files, 611 lines, three GitHub repository stars, and two Hub stars.",
  status: "XERJ Corpus Hub Contributor",
  stack: [
    "E-Commerce",
    "Virtual Try-On",
    "Web Development",
    "Git",
    "GitHub",
    "AI Coding Agents"
  ],
  github:
    "https://github.com/TechAkii/AK-E-Commerce-Clothing",
  theme: "pink",
},

  {
    slug: "galapathara-rajamaha-viharaya",
    number: "06",
    name: "Galapathara Rajamaha Viharaya",
    category: "CULTURAL HERITAGE",
    description:
      "A website project for a village temple.",
    overview:
      "Designed to present temple information, cultural heritage, religious activities, and community events.",
    status: "Website Project",
    stack: ["Web Development", "UI Design"],
    github: "https://github.com/TechAkii/Galapatha-Rajamaha-Wiharaya",
    theme: "gold",
  },
  {
    slug: "netflix-clone",
    number: "07",
    name: "Netflix Clone",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A Netflix-inspired streaming interface with a modern dark theme.",
    overview:
      "A frontend project featuring a streaming-style layout, movie browsing, a hero banner, and interactive navigation.",
    status: "GitHub Repository",
    stack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/TechAkii/Netflix-Clone",
    theme: "red",
  },
  {
    slug: "kaufa-university",
    number: "08",
    name: "KAUFA University / LMS ",
    category: "EDUCATION TECHNOLOGY",
    description:
      "A university website and learning management project.",
    overview:
      "An education-focused digital project designed around university information and online learning.",
    status: "GitHub Repository",
    stack: ["Web Development", "UI Design", "Education Technology"],
    github: "https://github.com/TechAkii/KAUFA-University",
    theme: "blue",
  },
  {
    slug: "airbook-airline",
    number: "09",
    name: "AirBook — Airline Project",
    category: "TRAVEL / WEB DEVELOPMENT",
    description:
      "An airline-themed website project exploring digital travel services.",
    overview:
      "A web development project focused on an airline-style interface and booking experience.",
    status: "GitHub Repository",
    stack: ["Web Development", "JavaScript", "UI Design"],
    github: "https://github.com/TechAkii/Airline",
    theme: "cyan",
  },
];