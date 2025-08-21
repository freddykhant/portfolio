import { projects } from "@/data/projects";
import { Project } from "@/types";
import ProjectCard from "./project-card";

interface ProjectsSectionProps {
  onProjectClick: (project: Project) => void;
}

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  return (
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
          <ProjectCard
            key={index}
            project={project}
            index={index}
            onProjectClick={onProjectClick}
          />
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
  );
}
