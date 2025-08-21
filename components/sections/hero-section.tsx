import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
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
  );
}
