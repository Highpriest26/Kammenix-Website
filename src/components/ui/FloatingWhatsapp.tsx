'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyConfig } from '@/config/companyData';

export const FloatingWhatsapp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(
    companyConfig.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 lg:bottom-6 z-50 flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      aria-label="Chat with Kammenix Nig. Limited on WhatsApp"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-200 rounded-full" />
      </div>
      <span className="hidden sm:inline-block font-medium text-sm tracking-wide">
        Chat on WhatsApp
      </span>
    </a>
  );
};
