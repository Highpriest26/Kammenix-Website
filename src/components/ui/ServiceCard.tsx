'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceDivision } from '@/config/companyData';
import {
  Kanban,
  Building2,
  Sparkles,
  TrendingUp,
  Coins,
  Home,
  HardHat,
  Briefcase,
  Package,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Kanban,
  Building2,
  Sparkles,
  TrendingUp,
  Coins,
  Home,
  HardHat,
  Briefcase,
  Package,
};

interface ServiceCardProps {
  service: ServiceDivision;
  compact?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || Briefcase;

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-200/80 border-l-4 border-l-[#8DC5C0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden">
      {/* Top Accent Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#101F34] via-[#8DC5C0] to-[#B92E68] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Division Photo Thumbnail if available */}
        {service.imageUrl && (
          <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 border border-gray-100">
            <Image
              src={service.imageUrl}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Header Icon + Title */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="w-11 h-11 rounded-xl bg-[#F0F8F6] border border-[#8DC5C0]/40 flex items-center justify-center text-[#101F34] group-hover:bg-[#101F34] group-hover:text-[#8DC5C0] transition-colors duration-300 shrink-0">
            <IconComponent className="w-5 h-5 stroke-[1.75]" />
          </div>
        </div>

        <h3 className="text-lg font-extrabold text-[#101F34] mb-2 group-hover:text-[#4A8782] transition-colors line-clamp-1">
          {service.title}
        </h3>

        <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
          {service.shortDescription}
        </p>

        {service.disclaimer && (
          <div className="mb-3 text-[10px] text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200/60 leading-tight">
            ⚠️ {service.disclaimer}
          </div>
        )}
      </div>

      <div className="pt-2 border-t border-gray-100">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#101F34] group-hover:text-[#B92E68] transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#8DC5C0]" />
        </Link>
      </div>
    </div>
  );
};
