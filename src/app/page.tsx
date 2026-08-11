"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  serviceDivisions,
  projectItems,
  companyConfig,
  ProjectItem,
} from "@/config/companyData";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  return (
    <div className="space-y-0">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative bg-[#101F34] text-white pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Background Geometric Angular Accents */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-10 pointer-events-none">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full text-[#8DC5C0]"
            fill="currentColor"
          >
            <polygon points="250,50 450,150 450,350 250,450 50,350 50,150" />
          </svg>
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B92E68]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-[#8DC5C0]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Column Text */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Professional Solutions for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8DC5C0] via-[#C0E0D7] to-[#F7BD50]">
                  Businesses, Properties
                </span>{" "}
                and Communities
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-normal">
                Kammenix provides reliable project management, facility
                services, estate development, financial consulting, general
                contracting and specialised business solutions.
              </p>

              {/* Call to Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#8DC5C0] hover:bg-[#6CA5A0] text-[#101F34] font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact?tab=quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-gray-600 font-bold text-base px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300"
                >
                  <span>Request a Quote</span>
                </Link>
              </div>
            </div>

            {/* Hero Right Visual Grid Composition - Large Infographic */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-2xl w-full">
                {/* Main Hero Infographic Card */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#8DC5C0]/50 shadow-2xl bg-white p-1.5 sm:p-2 group transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/images/hero/kammenix-divisions-infographic.jpg"
                    alt="Kammenix Nig. Limited 8 Business Divisions Overview"
                    width={1000}
                    height={750}
                    priority
                    className="object-contain w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTRODUCTION SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 border-l-4 border-l-[#8DC5C0]">
                <Image
                  src="/images/about/office-conference-room.jpg"
                  alt="Kammenix Nig. Limited Corporate Office & Conference Room"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[450px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8DC5C0]/20 rounded-full blur-2xl pointer-events-none" />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B92E68] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Company Overview</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101F34] leading-tight">
                One Company. Multiple Professional Solutions.
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Kammenix is a multi-service company committed to delivering
                practical, dependable and professionally managed solutions to
                individuals, businesses and organisations. Our approach combines
                industry knowledge, careful planning and a strong commitment to
                quality.
              </p>

              <div className="pt-2">
                <div className="p-5 rounded-xl bg-[#F0F8F6] border border-[#8DC5C0]/30 flex items-start gap-4 w-full">
                  <CheckCircle2 className="w-6 h-6 text-[#8DC5C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-[#101F34]">
                      Integrated Approach
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Cross-divisional synergy for complex property and business
                      projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#101F34] hover:bg-[#1A2F4C] text-[#8DC5C0] font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-all"
                >
                  <span>Learn More About Us</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BUSINESS DIVISIONS / CORE CAPABILITIES SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#F8F6F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101F34]">
              Solutions Designed Around Your Needs
            </h2>
            <p className="text-gray-600 text-base">
              Explore our specialized divisions delivering professional
              excellence across property management, facility operations,
              financial advisory, and general contracting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceDivisions.map((division) => (
              <ServiceCard key={division.id} service={division} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURED PROJECTS SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101F34]">
                Featured Execution Models
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#101F34] hover:text-[#B92E68] transition-colors"
            >
              <span>Explore All Projects Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#8DC5C0]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectItems.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CALL-TO-ACTION SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#68a2f3] via-[#1B2E4B] to-[#0A1424] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Let’s Discuss Your Next Project
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us what you need and our team will help you identify the most
            suitable solution across property, facility, financial or consulting
            services.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?tab=quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8DC5C0] hover:bg-[#6CA5A0] text-[#101F34] font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(
                companyConfig.whatsappMessage,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
