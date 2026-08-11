import React from "react";
import Link from "next/link";
import { serviceDivisions, companyConfig } from "@/config/companyData";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ArrowRight, MessageSquare } from "lucide-react";

export const metadata = {
  title: `Our Services | ${companyConfig.legalName}`,
  description:
    "Explore the 8 professional business divisions of Kammenix Nig. Limited: Project Management, Facility Management, Cleaning, Financial Consulting, Credit/Loans & Cooperative Services, Estate Development, Contracting, and Consultancy.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-[#101F34] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold text-[#8DC5C0] bg-white/10 px-4 py-1.5 rounded-full uppercase tracking-wider inline-block border border-[#8DC5C0]/30">
            Multi-Sector Divisions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Our Business Services &amp; Divisions
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Kammenix Nig. Limited provides comprehensive, professionally managed
            services structured to solve complex operational, spatial,
            financial, and development challenges.
          </p>
        </div>
      </section>

      {/* Grid of All 8 Divisions */}
      <section className="py-20 bg-[#F8F6F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceDivisions.map((division) => (
              <ServiceCard key={division.id} service={division} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#101F34] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-extrabold">
            Need Custom Multidisciplinary Services?
          </h2>
          <p className="text-gray-300 text-sm">
            We can combine project management, facility maintenance, and
            financial advisory into a single custom package.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/contact?tab=quote"
              className="inline-flex items-center gap-2 bg-[#8DC5C0] hover:bg-[#6CA5A0] text-[#101F34] font-bold text-sm px-6 py-3 rounded-xl shadow"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(
                companyConfig.whatsappMessage,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
