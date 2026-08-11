"use client";

import React, { useState } from "react";
import { projectItems, ProjectItem } from "@/config/companyData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const categories = [
    "All",
    "Estate Development",
    "Project Development",
    "Facility Management",
    "Professional Cleaning Services",
    "General Contract Execution",
    "Supply Services",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectItems
      : projectItems.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-[#101F34] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Project Portfolio &amp; Capabilities
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Explore our project execution models across estate development,
            facility operations, commercial cleaning, and construction
            management.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20 bg-[#F8F6F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#101F34] text-[#8DC5C0] shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
