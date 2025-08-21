import { X, Coffee, BookOpen, Dumbbell } from "lucide-react";

interface SecretModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecretModal({ isOpen, onClose }: SecretModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-auto bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 zoom-in-95 duration-500">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-lg hover:bg-muted/50 transition-all duration-200 hover:scale-110 hover:rotate-90"
        >
          <X className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 border border-border/30 flex items-center justify-center animate-pulse">
                <Coffee className="w-8 h-8 text-foreground/70" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 tracking-[-0.01em]">
              About Me
            </h2>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
              Nice job on finding me! 👀
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-4 text-center">
            <p className="text-base text-foreground/80 leading-relaxed">
              For your efforts I&apos;ll let you get to know me a bit more.
              Outside of being a tech geek I&apos;m also hugely passionate about
              fitness, nutrition and training. Nothing makes me happier than
              being able to work out.
            </p>

            <p className="text-base text-foreground/80 leading-relaxed">
              I am also passionate about bartending. I currently work as a bar
              manager at{" "}
              <span className="font-semibold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                butterfly73
              </span>{" "}
              and lead an amazing team. I learned my roots for
              bartending/mixology at{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                alibi
              </span>
              , this was the place that added depths to my skills.
            </p>

            {/* P.S. Section */}
            <div className="pt-4 border-t border-border/30">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                <span className="font-medium">P.S.</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                I&apos;m thinking of expanding this little section and making it
                a journal 👀
              </p>
            </div>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="text-center p-4 rounded-xl bg-muted/30 border border-border/20">
              <Dumbbell className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Passion
              </div>
              <div className="text-sm font-semibold">Fitness & Training</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/30 border border-border/20">
              <Coffee className="w-6 h-6 mx-auto mb-2 text-orange-500" />
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Role
              </div>
              <div className="text-sm font-semibold">Bar Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
