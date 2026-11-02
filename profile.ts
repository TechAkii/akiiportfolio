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
};

export const projects: Project[] = [
  {
    slug: "edith",
    name: "EDITH",
    category: "PERSONAL AI / AUTOMATION",
    description: "A personal assistant concept exploring local language models, voice interaction, productivity, and desktop automation.",
    overview: "EDITH explores how a personal AI assistant can connect conversational interfaces with practical desktop workflows.",
    status: "IN DEVELOPMENT",
    stack: ["Python", "FastAPI", "Ollama", "JavaScript", "Speech APIs", "SQLite"],
    github: "https://github.com/TechAkii/E.D.I.T.H-My-Personal-Assistant",
    theme: "cyan"
  },
  {
    slug: "flowops",
    name: "FLOWOPS",
    category: "BUSINESS OPERATIONS",
    description: "A business operations platform concept focused on connected workflows and structured operational data.",
    overview: "FlowOps is a software project direction for organizing operational work into a coherent platform.",
    status: "IN PROGRESS",
    stack: ["PostgreSQL", "Software Architecture"],
    theme: "violet"
  },
  {
    slug: "lab-equipment-booking",
    name: "LAB EQUIPMENT BOOKING",
    category: "FULL-STACK WEB APPLICATION",
    description: "A lab equipment catalogue and booking workflow built around discoverability and reliable equipment information.",
    overview: "A catalogue-first interface for laboratory equipment, with a path toward authenticated booking workflows and persistent inventory data.",
    status: "DEVELOPMENT",
    stack: ["Python", "Flask", "Jinja2", "SQLite", "HTML", "CSS"],
    theme: "blue"
  },
  {
    slug: "kaufa-university",
    name: "KAUFA UNIVERSITY",
    category: "EDUCATION / WEB PLATFORM",
    description: "A university-related web experience exploring accessible presentation of academic information and learning resources.",
    overview: "A learning-platform project focused on responsive page layouts and clear navigation.",
    status: "PROJECT ENTRY",
    stack: ["Web Development", "UI Design"],
    github: "https://github.com/TechAkii/KAUFA-University",
    theme: "amber"
  },
  {
    slug: "airbook",
    name: "AIRBOOK",
    category: "AIRLINE BOOKING CONCEPT",
    description: "An airline booking frontend concept focused on route discovery and a clean travel-planning interface.",
    overview: "An airline-related frontend project. This case study does not assume a production booking backend or payment integration.",
    status: "FRONTEND PROJECT",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/TechAkii/Airline",
    theme: "blue"
  }
];
