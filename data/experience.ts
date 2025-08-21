import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Deloitte",
    role: "Student Software Engineer",
    period: "Mar 2025 - Current",
    gradient: "from-green-600 to-blue-600",
    isActive: true,
    description: [
      "Selected for Deloitte's 2025 Capstone Project",
      "Collaborating in a team of 5 to develop innovative tools exploring AI, LLMs, Computer Vision, and emerging technologies",
      "Utilizing agile frameworks and Atlassian suite (Jira, Confluence) for project management",
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
