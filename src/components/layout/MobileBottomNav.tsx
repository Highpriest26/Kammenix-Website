"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Info,
  Briefcase,
  FolderCheck,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import { companyConfig } from "@/config/companyData";

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "About",
      href: "/about",
      icon: Info,
    },
    {
      name: "Services",
      href: "/services",
      icon: Briefcase,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: FolderCheck,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: PhoneCall,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#101F34]/95 backdrop-blur-xl border-t border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] px-2 py-2">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 relative group ${
                isActive
                  ? "text-[#8DC5C0] font-bold scale-105"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {/* Active Indicator Top Pill */}
              {isActive && (
                <span className="absolute -top-2 w-8 h-1 bg-[#8DC5C0] rounded-full shadow-[0_0_8px_#8DC5C0]" />
              )}

              <div
                className={`p-1.5 rounded-xl transition-colors ${
                  isActive ? "bg-[#8DC5C0]/15" : "group-hover:bg-white/5"
                }`}
              >
                <Icon className="w-5 h-5 stroke-[2]" />
              </div>

              <span className="text-[10px] mt-0.5 tracking-wider font-semibold">
                {item.name}
              </span>
            </Link>
          );
        })}

        {/* WhatsApp Quick Action Button */}
        <a
          href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(
            companyConfig.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-emerald-400 hover:text-emerald-300 transition-all duration-200 group"
          aria-label="WhatsApp Chat"
        >
          <div className="p-1.5 rounded-xl bg-emerald-500/15 group-hover:bg-emerald-500/25 transition-colors">
            <MessageSquare className="w-5 h-5 stroke-[2]" />
          </div>
          <span className="text-[10px] mt-0.5 tracking-wider font-semibold">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};
