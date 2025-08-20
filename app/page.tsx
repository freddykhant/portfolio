import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Bot,
  Dumbbell,
  FileBarChart,
  Globe,
  Scan,
  Building2,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const projects = [
  {
    name: "ai-chatbot",
    description: "AI chatbot with RAG + web scraping capabilities",
    link: "https://github.com/freddykhant/ai-chatbot",
    icon: Bot,
  },
  {
    name: "flex-ai",
    description:
      "Your personal trainer and chatbot in one, leveraging an RAG pipeline to retrieve info from academic research to answer your fitness questions",
    link: "https://github.com/freddykhant/flex-ai",
    icon: Dumbbell,
  },
  {
    name: "summary-ai",
    description:
      "Intelligent CSV analyser and summariser, using a RAG pipeline to extract key insights from your data files and provide concise, AI-powered summaries and insights",
    link: "https://github.com/freddykhant/summary-ai",
    icon: FileBarChart,
  },
  {
    name: "engraph",
    description: "AI powered insights on static engineering drawings",
    link: null, // work in progress
    icon: Scan,
  },
  {
    name: "brokertel",
    description: "Helping automate broker to client workflows",
    link: null, // work in progress
    icon: Building2,
  },
  {
    name: "portfolio",
    description: "This website right here",
    link: "https://github.com/freddykhant/portfolio",
    icon: Globe,
  },
];

const skills = [
  "python",
  "java",
  "c",
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "next.js",
  "fastapi",
  "streamlit",
  "supabase",
  "postgresql",
  "langchain",
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
          <div className="mb-12 relative">
            <div className="relative">
              <Image
                src="/pfp.jpg"
                alt="Freddy Khant"
                width={180}
                height={180}
                className="rounded-full mx-auto shadow-2xl ring-4 ring-white/10 dark:ring-black/10"
                priority
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 blur-xl scale-110 -z-10"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-[-0.02em] leading-[1.1]">
            Hi, my name is{" "}
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Freddy
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-normal leading-relaxed">
            Welcome to my page!
          </p>

          <p className="text-base text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            I&apos;m a final-year Software Engineering student who loves tech,
            automation, and building things that make life easier.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/freddykhant"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 hover:bg-card/80 hover:border-border/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/5"
            >
              <Github className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                GitHub
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/freddykhant240/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 hover:bg-card/80 hover:border-border/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/5"
            >
              <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                LinkedIn
              </div>
            </a>
            <a
              href="mailto:freddyhmk@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 hover:bg-card/80 hover:border-border/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/5"
            >
              <Mail className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Email
              </div>
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
              Some things I&apos;ve built along the way
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
              >
                {/* Project Number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Project Icon/Badge */}
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 border border-border/30 flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-foreground/70" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold tracking-[-0.01em] group-hover:text-foreground transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group/link"
                      >
                        <span>View project</span>
                        <svg
                          className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
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
                    ) : (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground/60">
                        <span>Work in progress</span>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Visual Elements */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2 text-xs text-muted-foreground/60 uppercase tracking-wider">
              <div className="w-8 h-px bg-border"></div>
              <span>more projects on github</span>
              <div className="w-8 h-px bg-border"></div>
            </div>
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

          {/* Brand Dump Style Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center h-16 w-full max-w-[140px] px-4 py-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 hover:border-border/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors uppercase tracking-wide">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Visual Elements */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2 text-xs text-muted-foreground/60 uppercase tracking-wider">
                <div className="w-8 h-px bg-border"></div>
                <span>and still learning</span>
                <div className="w-8 h-px bg-border"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
