'use client';

import React from 'react';
import Image from 'next/image';
import { ProjectItem, companyConfig } from '@/config/companyData';
import { X, MapPin, Layers, CheckCircle2, MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200 relative max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="relative h-64 w-full bg-gray-900 shrink-0">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101F34] via-transparent to-black/40" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#8DC5C0] text-[#101F34] uppercase tracking-wider inline-block mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl font-extrabold text-white">{project.title}</h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">

          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl text-xs">
            <div>
              <span className="text-gray-500 block mb-1">Project Location</span>
              <div className="flex items-center gap-1 font-semibold text-[#101F34]">
                <MapPin className="w-4 h-4 text-[#8DC5C0]" />
                <span>{project.location}</span>
              </div>
            </div>
            <div>
              <span className="text-gray-500 block mb-1">Project Status</span>
              <div className="flex items-center gap-1 font-semibold text-[#101F34]">
                <Layers className="w-4 h-4 text-[#B92E68]" />
                <span>{project.status}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#101F34] mb-2 uppercase tracking-wider">
              Project Description
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#101F34] mb-2 uppercase tracking-wider">
              Scope of Deliverables
            </h4>
            <div className="flex items-center gap-2 text-xs text-gray-700 bg-[#F0F8F6] p-3 rounded-lg border border-[#8DC5C0]/30">
              <CheckCircle2 className="w-4 h-4 text-[#8DC5C0] shrink-0" />
              <span>{project.scope}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900"
          >
            Close Window
          </button>
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(
                `Hello Kammenix, I am interested in a project similar to "${project.title}".`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire on WhatsApp</span>
            </a>
            <Link
              href="/contact?tab=quote"
              onClick={onClose}
              className="bg-[#101F34] hover:bg-[#1A2F4C] text-[#8DC5C0] text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              Request Similar Project Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
