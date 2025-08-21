import { skills } from "@/data/projects";

export default function SkillsSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-[-0.01em]">
          Skills
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Technologies I've worked with
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
  );
}
