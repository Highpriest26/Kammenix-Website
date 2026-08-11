import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { companyConfig, serviceDivisions } from "@/config/companyData";
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1424] text-gray-300 pt-16 pb-8 border-t border-gray-800 relative overflow-hidden">
      {/* Background Subtle Geometric Accent */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#8DC5C0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-[#B92E68]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" showTagline={true} />
            <p className="text-sm text-gray-400 leading-relaxed max-w-md pt-2">
              Kammenix Nig. Limited is a multi-service corporate organization
              committed to delivering reliable project management, facility
              operations, cleaning, estate development, financial advisory, and
              general contracting across Nigeria.
            </p>
            {/* Social media links commented out as not yet available */}
            {/*
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={companyConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-gray-700/60 flex items-center justify-center text-gray-300 hover:text-[#8DC5C0] hover:border-[#8DC5C0] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
              </a>
              <a
                href={companyConfig.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-gray-700/60 flex items-center justify-center text-gray-300 hover:text-[#8DC5C0] hover:border-[#8DC5C0] transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href={companyConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-gray-700/60 flex items-center justify-center text-gray-300 hover:text-[#8DC5C0] hover:border-[#8DC5C0] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.25.19 2.25.19v2.47h-1.27c-1.23 0-1.61.77-1.61 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
              </a>
              <a
                href={companyConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-gray-700/60 flex items-center justify-center text-gray-300 hover:text-[#8DC5C0] hover:border-[#8DC5C0] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            */}
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#8DC5C0] pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#8DC5C0] transition-colors inline-flex items-center gap-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#8DC5C0] transition-colors inline-flex items-center gap-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#8DC5C0] transition-colors inline-flex items-center gap-1"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#8DC5C0] transition-colors inline-flex items-center gap-1"
                >
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#8DC5C0] transition-colors inline-flex items-center gap-1"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?tab=quote"
                  className="text-[#8DC5C0] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Divisions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#8DC5C0] pl-3">
              Business Divisions
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceDivisions.map((division) => (
                <li key={division.id}>
                  <Link
                    href={`/services/${division.slug}`}
                    className="text-gray-400 hover:text-[#8DC5C0] transition-colors block py-0.5"
                  >
                    {division.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#8DC5C0] pl-3">
              Contact & Office
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8DC5C0] shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  {companyConfig.address}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#8DC5C0] shrink-0 mt-1" />
                <div className="space-y-0.5 text-xs">
                  <a
                    href={`tel:${companyConfig.phone}`}
                    className="block hover:text-[#8DC5C0]"
                  >
                    Office: {companyConfig.displayPhone}
                  </a>
                  {companyConfig.mobileNumbers?.map((mob, idx) => (
                    <a
                      key={idx}
                      href={`tel:${mob.replace(/\s+/g, "")}`}
                      className="block text-gray-400 hover:text-[#8DC5C0]"
                    >
                      Mobile: {mob}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8DC5C0] shrink-0" />
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="text-xs hover:text-[#8DC5C0] break-all"
                >
                  {companyConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(companyConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 font-medium hover:underline flex items-center gap-1"
                >
                  WhatsApp
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar with Mobile Bottom Nav Padding */}
        <div className="pt-8 pb-20 lg:pb-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {currentYear}{" "}
            <span className="text-white font-medium">
              {companyConfig.legalName}
            </span>
            . All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-center">
            <Link
              href="/privacy-policy"
              className="hover:text-[#8DC5C0] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#8DC5C0] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span className="font-medium text-gray-300">
              Designed by{" "}
              <a
                href="https://boffinstechnology.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8DC5C0] hover:underline font-bold"
              >
                Boffins Technology LTD
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
