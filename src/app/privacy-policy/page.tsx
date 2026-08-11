import React from 'react';
import { companyConfig } from '@/config/companyData';

export const metadata = {
  title: `Privacy Policy | ${companyConfig.legalName}`,
  description: 'Privacy policy and data protection terms of Kammenix Nig. Limited.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101F34]">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 mt-2">
            Last Updated: July 2026 | {companyConfig.legalName}
          </p>
        </div>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#101F34]">1. Introduction</h2>
            <p>
              {companyConfig.legalName} (“Kammenix”, “we”, “us”, or “our”) respects your privacy and is committed to protecting the personal information you share with us through our website. This Privacy Policy outlines how we collect, use, process, and safeguard your details when you interact with our forms, services, and online channels.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#101F34]">2. Information We Collect</h2>
            <p>We may collect personal details that you voluntarily provide when submitting contact or quotation requests, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name and Company Name</li>
              <li>Email Address and Telephone Number</li>
              <li>Project Location and Preferred Contact Method</li>
              <li>Project Description, Property Specifications, and Attached Files</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#101F34]">3. How We Use Your Information</h2>
            <p>The information collected is strictly utilized to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your service enquiries and project quotation requests</li>
              <li>Provide professional consultation, site inspection coordination, and operational support</li>
              <li>Comply with applicable legal, regulatory, and corporate record-keeping requirements in Nigeria</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#101F34]">4. Data Protection &amp; Confidentiality</h2>
            <p>
              We implement industry-standard organizational and technical measures to protect your personal data against unauthorized access, loss, or misuse. We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#101F34]">5. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy or your personal data, please contact our administrative desk at:
            </p>
            <div className="p-4 bg-[#F8F6F6] rounded-xl border border-gray-200 text-xs space-y-1 font-semibold text-[#101F34]">
              <p>Email: {companyConfig.email}</p>
              <p>Phone: {companyConfig.displayPhone}</p>
              <p>Address: {companyConfig.address}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
