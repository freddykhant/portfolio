"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import BackgroundGradients from "@/components/background-gradients";
import SecretButton from "@/components/secret-button";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-section";
import SkillsSection from "@/components/sections/skills-section";
import SecretModal from "@/components/modals/secret-modal";
import ProjectModal from "@/components/modals/project-modal";
import { Project } from "@/types";

export default function Home() {
  const [showSecretModal, setShowSecretModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    if (project.name === "flex-ai" || project.name === "summary-ai") {
      setSelectedProject(project);
      setShowProjectModal(true);
    } else if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Background Gradient Blur - ChatGPT style */}
      <BackgroundGradients />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Mode Toggle */}
        <div className="absolute right-4 top-4">
          <ModeToggle />
        </div>

        {/* Secret Button - Hidden in plain sight */}
        <SecretButton onClick={() => setShowSecretModal(true)} />

        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectsSection onProjectClick={handleProjectClick} />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Skills Section */}
        <SkillsSection />
      </div>

      {/* Modals */}
      <SecretModal
        isOpen={showSecretModal}
        onClose={() => setShowSecretModal(false)}
      />

      <ProjectModal
        isOpen={showProjectModal}
        project={selectedProject}
        onClose={() => setShowProjectModal(false)}
      />
    </div>
  );
}
