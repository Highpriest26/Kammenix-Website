"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { serviceDivisions } from "@/config/companyData";
import {
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    Promise.resolve().then(() => {
      setServicesDropdownOpen(false);
    });
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Banner Bar for Quick Contact */}

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 py-3.5 ${
          isScrolled
            ? "glass-nav shadow-lg"
            : "bg-[#101F34] border-b border-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="light" showTagline={false} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "text-[#8DC5C0] bg-white/5 font-semibold"
                          : "text-gray-200 hover:text-[#8DC5C0] hover:bg-white/5"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen
                            ? "rotate-180 text-[#8DC5C0]"
                            : "text-gray-400"
                        }`}
                      />
                    </Link>

                    {/* Services Multi-column Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-[580px] bg-[#101F34] border border-gray-700/80 rounded-xl shadow-2xl p-5 grid grid-cols-2 gap-3 mt-1 backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="col-span-2 pb-2 mb-1 border-b border-gray-800 flex justify-between items-center">
                          <span className="text-xs font-semibold text-[#8DC5C0] uppercase tracking-wider">
                            Our 8 Business Divisions
                          </span>
                          <Link
                            href="/services"
                            className="text-xs text-gray-300 hover:text-white flex items-center gap-1 group/all"
                          >
                            View All Services
                            <ArrowRight className="w-3 h-3 group-hover/all:translate-x-0.5 transition-transform text-[#8DC5C0]" />
                          </Link>
                        </div>
                        {serviceDivisions.map((division) => (
                          <Link
                            key={division.id}
                            href={`/services/${division.slug}`}
                            className="flex flex-col p-2.5 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-[#8DC5C0]/30 group"
                          >
                            <span className="text-sm font-semibold text-white group-hover:text-[#8DC5C0] transition-colors">
                              {division.title}
                            </span>
                            <span className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                              {division.shortDescription}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-[#8DC5C0] bg-white/5 font-semibold"
                      : "text-gray-200 hover:text-[#8DC5C0] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact?tab=quote"
              className="inline-flex items-center gap-2 bg-[#8DC5C0] hover:bg-[#6CA5A0] text-[#101F34] font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request a Quote</span>
            </Link>
          </div>

        </div>
      </header>
    </>
  );
};
