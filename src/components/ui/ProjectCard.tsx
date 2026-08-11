'use client';

import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/config/companyData';
import { MapPin, Eye } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
      <div>
        {/* Project Thumbnail Image */}
        <div className="relative h-52 w-full overflow-hidden bg-gray-900">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 bg-[#101F34]/90 backdrop-blur-md text-[#8DC5C0] text-xs font-semibold px-3 py-1 rounded-full border border-[#8DC5C0]/30">
            {project.category}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#8DC5C0]" />
            <span>{project.location}</span>
          </div>

          <h3 className="text-lg font-bold text-[#101F34] mb-2 group-hover:text-[#4A8782] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <button
          onClick={() => onSelect(project)}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#F0F8F6] hover:bg-[#8DC5C0] text-[#101F34] font-semibold text-xs py-2.5 px-4 rounded-xl transition-all border border-[#8DC5C0]/30 hover:border-[#8DC5C0]"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Project Details</span>
        </button>
      </div>
    </div>
  );
};
