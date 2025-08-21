import { LucideIcon } from "lucide-react";

export interface Project {
  name: string;
  description: string;
  link: string | null;
  icon: LucideIcon;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  isActive?: boolean;
  gradient: string;
}
