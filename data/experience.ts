import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Deloitte",
    role: "Student Software Engineer",
    period: "Mar 2025 - Nov 2025",
    gradient: "from-green-600 to-blue-600",
    isActive: false,
    description: [
      "Selected for Deloitte's 2025 Capstone Project",
      "Worked in a team of 5, utilising the agile framework and Atlassian suite (Jira, Confluence) for project management",
      "Built and shipped Engraph - a product that utilises AI and Computer Vision to allow intuitive analysis and interaction of Piping & Instrumentation Diagrams",
    ],
  },
  {
    company: "Redi Software",
    role: "Software Developer Intern",
    period: "Nov 2024 - Mar 2025",
    gradient: "from-blue-600 to-purple-600",
    isActive: false,
    description: [
      "Collaborated in agile sprints with daily stand-ups and code reviews in fast-paced development environment",
      "Developed scalable Azure microservices using C# for enterprise-level backend architecture",
      "Researched and integrated open-source LLMs for AI-powered feature prototyping across internal projects",
      "Developed NLP applications with critical problem-solving for real-world client solutions",
    ],
  },
];
