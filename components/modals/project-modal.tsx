import Image from "next/image";
import { X, Dumbbell, Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, project, onClose }: ProjectModalProps) {
  if (!isOpen || !project || project.name !== "flex-ai") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-6xl mx-auto bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 zoom-in-95 duration-500 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-lg hover:bg-muted/50 transition-all duration-200 hover:scale-110 hover:rotate-90 z-10"
        >
          <X className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
        </button>

        {/* Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 border border-border/30 flex items-center justify-center animate-pulse">
                <Dumbbell className="w-8 h-8 text-foreground/70" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-[-0.01em]">
              Flex AI
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              An interactive AI personal trainer for hypertrophy, resistance training, and nutrition
            </p>
          </div>

          {/* Image Showcase */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center">App Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="group relative">
                  <div className="aspect-video bg-muted/20 rounded-xl border border-border/30 overflow-hidden">
                    <Image
                      src={`/projects/flex-ai${num}.png`}
                      alt={`Flex AI Screenshot ${num}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      Screenshot {num}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div className="prose prose-sm max-w-none text-foreground/80">
              <p className="text-base leading-relaxed">
                Flex AI is a Streamlit app that answers training and nutrition questions using a retrieval-augmented generation (RAG) pipeline. It combines LangGraph/LangChain with Ollama and a local ChromaDB vector store seeded from PDF files to provide evidence-backed, context-aware responses.
              </p>
            </div>

            {/* Technical Stack */}
            <div className="bg-muted/20 rounded-xl p-6 border border-border/30">
              <h4 className="text-lg font-semibold mb-4">Technical Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["Streamlit", "LangGraph", "LangChain", "Ollama", "ChromaDB", "RAG Pipeline", "Python"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-card/50 border border-border/30 rounded-lg text-sm font-medium text-foreground/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* How it Works */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">How It Works</h4>
              <div className="space-y-3 text-sm text-foreground/70 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <p>Users input training or nutrition questions through the Streamlit interface</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <p>The RAG pipeline searches through the ChromaDB vector store containing fitness research PDFs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <p>Ollama generates evidence-backed responses using the retrieved context</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                  <p>Users receive personalized, research-backed fitness and nutrition advice</p>
                </div>
              </div>
            </div>

            {/* Quick Start */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-border/30">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span>🚀</span>
                Quick Start
              </h4>
              <p className="text-sm text-foreground/70 mb-3">
                Try it locally with a simple command:
              </p>
              <code className="block bg-black/20 dark:bg-black/40 text-blue-400 dark:text-blue-300 px-4 py-2 rounded-lg text-sm font-mono">
                streamlit run app.py
              </code>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://github.com/freddykhant/flex-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-card/60 border border-border/40 text-foreground/70 rounded-xl font-medium hover:bg-card hover:text-foreground transition-all duration-200"
            >
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
