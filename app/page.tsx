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
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Background Gradient Blur - ChatGPT style */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Light & Dark mode gradients - vibrant GPT-5 inspired colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-purple-100/50 to-blue-100/50 dark:from-orange-900/30 dark:via-purple-900/30 dark:to-blue-900/30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-400/50 to-orange-400/50 dark:from-red-500/40 dark:to-orange-500/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/50 to-blue-400/50 dark:from-purple-500/40 dark:to-blue-500/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400/45 to-orange-400/45 dark:from-yellow-500/35 dark:to-orange-500/35 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-blue-400/40 to-purple-400/40 dark:from-blue-500/35 dark:to-purple-500/35 rounded-full blur-3xl animate-pulse delay-3000"></div>
        <div className="absolute top-1/3 left-1/2 w-88 h-88 bg-gradient-to-r from-pink-400/45 to-red-400/45 dark:from-pink-500/35 dark:to-red-500/35 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="absolute right-4 top-4">
            <ModeToggle />
          </div>
          <Image
            src="/pfp.jpg"
            alt="me"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-4 shadow-lg"
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
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/freddykhant240/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:freddyhmk@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <Mail />
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            I&apos;m Freddy, a final-year Software Engineering student who loves
            tech, automation, and building things that make life easier. Whether
            it&apos;s a hobby project, or experimenting with new ideas, I enjoy
            the process of learning and building 💻
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-2">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
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
                className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm font-medium hover:bg-secondary/80 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
