import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const projects = [
  {
    name: "ai-chatbot",
    description: "AI chatbot with RAG + web scraping capabilities 🤖",
    link: "https://github.com/freddykhant/ai-chatbot",
  },
  {
    name: "flex-ai",
    description:
      "flex-ai is your personal trainer and chatbot in one, leveraging an RAG pipeline to retrieve info from academic research to answer your fitness questions💪",
    link: "https://github.com/freddykhant/flex-ai",
  },
  {
    name: "summary-ai",
    description:
      "summary-ai is your intelligent csv analyser and summariser, using a RAG pipeline to extract key insights from your data files and provide concise, ai-powered summaries and insights 📊🧠",
    link: "https://github.com/freddykhant/summary-ai",
  },
  {
    name: "buildshare",
    description:
      "a social media for tech setups, built as part of buildspace's s4 nights & weekends program",
    link: "https://github.com/freddykhant/buildshare_app",
  },
  {
    name: "portfolio",
    description: "this website right here 😁",
    link: "https://github.com/freddykhant/portfolio",
  },
];

const skills = [
  "python",
  "java",
  "c",
  "c#",
  "html",
  "css",
  "javascript",
  "react",
  "streamlit",
  "langchain",
  "langgraph",
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="absolute right-0 top-0">
          <ModeToggle />
        </div>
        <Image
          src="/pfp.jpg"
          alt="me"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">Freddy Khant</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Software Engineering Student
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/freddykhant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/freddykhant240/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:freddyhmk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Mail />
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground">
          I'm Freddy, a final-year Software Engineering student who loves tech,
          automation, and building things that make life easier. Whether it’s a
          hobby project, AI, or experimenting with new ideas, I enjoy the
          process of learning and creating. 💻
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">{project.name}</h3>
              <p className="text-muted-foreground mb-2">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                view project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
