import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { serviceDivisions, companyConfig } from '@/config/companyData';
import { QuoteForm } from '@/components/forms/QuoteForm';
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface ServiceDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return serviceDivisions.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const service = serviceDivisions.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | ${companyConfig.legalName}`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const service = serviceDivisions.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = serviceDivisions.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="space-y-0">
      {/* Service Detail Hero */}
      <section className="bg-[#101F34] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#8DC5C0]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <Link href="/services" className="hover:text-[#8DC5C0]">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[#8DC5C0] font-semibold">{service.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              {service.title}
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {service.concept}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-12">
              {/* Featured Division Image Banner */}
              {service.imageUrl && (
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 border-l-4 border-l-[#8DC5C0]">
                  <Image
                    src={service.imageUrl}
                    alt={`${service.title} - Kammenix Nigeria Limited`}
                    width={800}
                    height={450}
                    className="object-cover w-full h-[320px] sm:h-[400px]"
                  />
                </div>
              )}

              {/* Regulatory Disclaimer if applicable */}
              {service.disclaimer && (
                <div className="bg-amber-50 border-2 border-amber-300 p-5 rounded-2xl text-amber-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Important Compliance Notice</span>
                  </div>
                  <p className="text-xs leading-relaxed font-medium">{service.disclaimer}</p>
                </div>
              )}

              {/* Services Offered */}
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#101F34]">
                  Services Offered
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.services.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#F0F8F6] rounded-xl border border-[#8DC5C0]/30 flex items-start gap-3 text-xs sm:text-sm font-semibold text-[#101F34]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#8DC5C0] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#101F34]">
                  Key Benefits to Clients
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((ben, idx) => (
                    <div key={idx} className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm space-y-1">
                      <div className="flex items-center gap-2 text-[#8DC5C0] font-bold text-xs">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Benefit 0{idx + 1}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-medium">{ben}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 10-Step Customer Enquiry Process */}
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#101F34]">
                  10-Step Service Engagement Process
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.enquiryProcess.map((stepText, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#101F34] text-[#8DC5C0] font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <p className="text-xs text-gray-700 font-medium mt-1 leading-snug">{stepText}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Quote Form & Direct Contact Sticky Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="sticky top-24 space-y-8">
                {/* Inline Quote Form */}
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Recommendation */}
      <section className="py-16 bg-[#F8F6F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold text-[#101F34] mb-8">
            Explore Complementary Divisions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div key={rel.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <h4 className="text-lg font-bold text-[#101F34]">{rel.title}</h4>
                <p className="text-xs text-gray-600 line-clamp-2">{rel.shortDescription}</p>
                <Link
                  href={`/services/${rel.slug}`}
                  className="text-xs font-bold text-[#B92E68] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Division</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
