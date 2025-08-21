import { Eye } from "lucide-react";

interface SecretButtonProps {
  onClick: () => void;
}

export default function SecretButton({ onClick }: SecretButtonProps) {
  return (
    <div className="absolute left-4 top-4">
      <button
        onClick={onClick}
        className="group relative p-3 rounded-full bg-card/30 backdrop-blur-sm border border-border/20 hover:bg-card/60 hover:border-border/40 transition-all duration-500 hover:scale-110 opacity-30 hover:opacity-100"
        title="👀"
      >
        <Eye className="w-4 h-4 text-foreground/50 group-hover:text-foreground transition-colors" />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          👀
        </div>
      </button>
    </div>
  );
}
