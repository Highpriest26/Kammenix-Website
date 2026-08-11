"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { companyConfig } from "@/config/companyData";
import { ContactForm } from "@/components/forms/ContactForm";
import { QuoteForm } from "@/components/forms/QuoteForm";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"contact" | "quote">("contact");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "quote") {
      Promise.resolve().then(() => {
        setActiveTab("quote");
      });
    }
  }, [searchParams]);

  return (
    <div className="space-y-0">
      {/* Hero Header */}
      <section className="bg-[#101F34] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Get in Touch With Kammenix
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Have a question about our business divisions or need an official
            quotation? Reach out to our Abuja headquarters office via telephone,
            email, WhatsApp, or through the forms below.
          </p>
        </div>
      </section>

      {/* Contact Cards & Form Section */}
      <section className="py-20 bg-[#F8F6F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Contact Info Cards with Left Border Accents */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 border-l-4 border-l-[#8DC5C0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F0F8F6] text-[#8DC5C0] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Office Location
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#101F34] mt-1 block leading-snug">
                  {companyConfig.address}
                </span>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 border-l-4 border-l-[#B92E68] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F0F8F6] text-[#8DC5C0] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1 min-w-0 flex-1">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Office &amp; Mobile Lines
                </span>
                <a
                  href={`tel:${companyConfig.phone}`}
                  className="text-xs font-bold text-[#101F34] hover:text-[#8DC5C0] block truncate"
                >
                  Office: {companyConfig.displayPhone}
                </a>
                {companyConfig.mobileNumbers?.map((mob, idx) => (
                  <a
                    key={idx}
                    href={`tel:${mob.replace(/\s+/g, "")}`}
                    className="text-xs font-semibold text-gray-600 hover:text-[#8DC5C0] block truncate"
                  >
                    Mobile: {mob}
                  </a>
                ))}
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 border-l-4 border-l-[#8DC5C0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F0F8F6] text-[#8DC5C0] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Email Address
                </span>
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="text-xs font-bold text-[#101F34] hover:text-[#8DC5C0] mt-1 block break-all leading-snug"
                >
                  {companyConfig.email}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 border-l-4 border-l-[#B92E68] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  WhatsApp Direct
                </span>
                <a
                  href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(companyConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-emerald-600 hover:underline mt-1 block"
                >
                  Start Chat
                </a>
              </div>
            </div>
          </div>

          {/* Form Container with Tab Toggle */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all ${
                  activeTab === "contact"
                    ? "bg-[#101F34] text-[#8DC5C0] shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Send General Message
              </button>
              <button
                onClick={() => setActiveTab("quote")}
                className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all ${
                  activeTab === "quote"
                    ? "bg-[#101F34] text-[#8DC5C0] shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Request a Proposal / Quote
              </button>
            </div>

            {activeTab === "contact" ? <ContactForm /> : <QuoteForm />}
          </div>
        </div>
      </section>

      {/* Headquarters Location & Hours Card */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 p-6 rounded-2xl bg-[#F0F8F6] border border-[#8DC5C0]/30 border-l-4 border-l-[#8DC5C0] shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#101F34]">
              Visit Our Abuja Headquarters
            </h3>
            <p className="text-sm font-semibold text-[#8DC5C0]">
              {companyConfig.address}
            </p>
            <p className="text-xs text-gray-600">
              {companyConfig.workingHours}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">Loading contact options...</div>
      }
    >
      <ContactPageContent />
    </Suspense>
  );
}
