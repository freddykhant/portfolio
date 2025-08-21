import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onProjectClick: (project: Project) => void;
}

export default function ProjectCard({ project, index, onProjectClick }: ProjectCardProps) {
  return (
    <div
      onClick={() => onProjectClick(project)}
      className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 cursor-pointer"
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
          {project.name === "flex-ai" ? (
            <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground/70">
              <span>Click to explore</span>
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          ) : project.link ? (
            <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground/70">
              <span>View project</span>
              <svg
                className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
            </span>
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
  );
}
