import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-[-0.01em]">
          Experience
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Professional journey and internships
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Company Icon & Timeline */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 border border-border/30 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-foreground/70" />
                </div>
                {index < experiences.length - 1 && (
                  <div className="hidden md:block w-px h-24 bg-border/30 ml-6"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-semibold tracking-[-0.01em]">
                    {experience.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-base font-medium text-foreground/80">
                  <MapPin className="w-4 h-4" />
                  <span
                    className={`bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent`}
                  >
                    {experience.company}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-foreground/70 leading-relaxed">
                  {experience.description.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 flex-shrink-0"></div>
                      <p>{item}</p>
                    </div>
                  ))}
                  {experience.isActive && (
                    <div className="flex items-center gap-2 pt-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">
                        Work in Progress
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Visual Elements */}
      <div className="mt-12 flex justify-center">
        <div className="flex items-center gap-2 text-xs text-muted-foreground/60 uppercase tracking-wider">
          <div className="w-8 h-px bg-border"></div>
          <span>building experience</span>
          <div className="w-8 h-px bg-border"></div>
        </div>
      </div>
    </section>
  );
}
