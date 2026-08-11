import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyConfig } from "@/config/companyData";
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: `About Us | ${companyConfig.legalName}`,
  description:
    "Learn about Kammenix Nig. Limited, our leadership team, mission, vision, core values, and multi-sector operational governance across Nigeria.",
};

export default function AboutPage() {
  const executiveLeadership = [
    {
      name: "Hon. Chika Ambrose Okafor",
      role: "Managing Director / Chief Executive Officer",
      description:
        "A seasoned project management expert with extensive years of corporate leadership. Directs company vision, multi-sector project execution, client advisory relations, and institutional growth across Nigeria.",
    },
    {
      name: "Udoh Laurentine Ifeoma",
      role: "Director of General Operations",
      description:
        "Brings a wealth of business management and operational expertise with over 20 years of hands-on experience driving service delivery, compliance standards, and multi-divisional performance.",
    },
    {
      name: "Chimezie Brendan Otuojor",
      role: "General Manager",
      description:
        "Oversees daily multi-sector company operations, cross-divisional workflow coordination, contractor SLAs, resource allocation, and overall project execution efficiency.",
    },
    {
      name: "Kelechi Ndukwe Esther",
      role: "Human Resources Manager",
      description:
        "Manages talent acquisition, staff welfare, corporate administration, personnel development, and organizational workflow across all business divisions.",
    },
    {
      name: "Barr. Mathias O. Agboni",
      role: "Company Secretary & Legal Advisor",
      description:
        "Directs legal compliance, statutory CAC filings, contract documentation, regulatory advisory, and risk management across all corporate transactions and agreements.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Header */}
      <section className="bg-[#101F34] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            About Kammenix Nig. Limited
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Built on Excellence, Professionalism, and Trust — Delivering
            dependable multi-sector solutions for individuals, corporate
            organizations, and property developers.
          </p>
        </div>
      </section>

      {/* Main Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101F34]">
                A Multi-Service Enterprise Driven By Quality &amp; Trust
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {companyConfig.introduction}
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                {companyConfig.philosophy}
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 border-l-4 border-l-[#8DC5C0]">
                <Image
                  src="/images/about/office-conference-room.jpg"
                  alt="Kammenix Nig. Limited Corporate Governance & Conference Room"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[480px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#F8F6F6] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/80 border-l-4 border-l-[#8DC5C0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              <div className="w-14 h-14 rounded-xl bg-[#8DC5C0]/20 text-[#101F34] flex items-center justify-center mb-6 group-hover:bg-[#101F34] group-hover:text-[#8DC5C0] transition-colors">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#101F34] mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                “{companyConfig.mission}”
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/80 border-l-4 border-l-[#B92E68] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              <div className="w-14 h-14 rounded-xl bg-[#B92E68]/20 text-[#B92E68] flex items-center justify-center mb-6 group-hover:bg-[#B92E68] group-hover:text-white transition-colors">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#101F34] mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                “{companyConfig.vision}”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#101F34] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Core Values
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Every project, contract, and advisory engagement is guided by
              these six pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyConfig.coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-6 rounded-2xl border border-gray-800 border-l-4 border-l-[#8DC5C0] hover:border-[#8DC5C0]/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-[#8DC5C0]/20 text-[#8DC5C0] flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Kammenix Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101F34]">
              What Makes Kammenix Different
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#F0F8F6] border border-[#8DC5C0]/30 border-l-4 border-l-[#8DC5C0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-3">
              <Award className="w-8 h-8 text-[#101F34]" />
              <h3 className="text-lg font-bold text-[#101F34]">
                Unified Multi-Service Capability
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Rather than hiring separate contractors for cleaning, estate
                maintenance, project management, and financial advisory, clients
                enjoy a single accountable corporate partner.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F0F8F6] border border-[#8DC5C0]/30 border-l-4 border-l-[#B92E68] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#B92E68]" />
              <h3 className="text-lg font-bold text-[#101F34]">
                Disciplined Governance
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every project is backstopped by strict quality control
                procedures, milestone sign-offs, and transparent reporting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F0F8F6] border border-[#8DC5C0]/30 border-l-4 border-l-[#8DC5C0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-3">
              <Users className="w-8 h-8 text-[#8DC5C0]" />
              <h3 className="text-lg font-bold text-[#101F34]">
                Client-Centric Tailoring
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We design customizable service packages tailored precisely to
                individual property owners, corporate bodies, or cooperatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Management Governance Section */}
      <section className="py-20 bg-[#F8F6F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101F34]">
              Management &amp; Operational Governance
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our executive leadership team drives strategic performance,
              quality assurance, compliance, and multi-sector project execution
              across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveLeadership.map((member, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-gray-200/80 border-l-4 border-l-[#8DC5C0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#101F34]">
                      {member.name}
                    </h3>
                    <span className="text-xs text-[#B92E68] font-bold block mt-1">
                      {member.role}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#101F34] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-extrabold">
            Ready to Work with Kammenix?
          </h2>
          <p className="text-gray-300 text-sm">
            Contact our team to discuss your project requirements or request a
            proposal.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?tab=quote"
              className="inline-flex items-center gap-2 bg-[#8DC5C0] hover:bg-[#6CA5A0] text-[#101F34] font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
