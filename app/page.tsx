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
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Mode Toggle */}
        <div className="absolute right-4 top-4">
          <ModeToggle />
        </div>

        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center py-20">
          <div className="mb-8">
            <Image
              src="/pfp.jpg"
              alt="Freddy Khant"
              width={120}
              height={120}
              className="rounded-full mx-auto shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-[-0.02em] leading-[1.1]">
            Hi, my name is{" "}
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Freddy
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-normal leading-relaxed">
            Welcome to my page
          </p>

          <p className="text-base text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            I'm a final-year Software Engineering student who loves tech,
            automation, and building things that make life easier.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/freddykhant"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-all duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/freddykhant240/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:freddyhmk@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-all duration-200 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-[-0.01em]">
              Projects
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Some things I've built along the way
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <h3 className="text-lg font-medium mb-3 tracking-[-0.01em]">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
                >
                  view project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-[-0.01em]">
              Skills
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Technologies I work with
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-secondary/60 backdrop-blur-sm text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-all duration-200 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-secondary/60 backdrop-blur-sm text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-all duration-200 hover:scale-105"
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
