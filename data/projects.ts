import {
  Dumbbell,
  FileBarChart,
  Leaf,
  Scan,
  Building2,
  Globe,
} from "lucide-react";
import { Project } from "@/types";

export const projects: Project[] = [
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
    name: "oasisgarden",
    description: "iOS app for gardening enthusiasts, built using SwiftUI",
    link: "https://github.com/freddykhant/mygreenspace",
    icon: Leaf,
  },
  {
    name: "portfolio",
    description: "This website right here",
    link: "https://github.com/freddykhant/portfolio",
    icon: Globe,
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
];

export const skills = [
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
