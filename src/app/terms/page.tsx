import React from 'react';
import { companyConfig } from '@/config/companyData';

export const metadata = {
  title: `Terms & Conditions | ${companyConfig.legalName}`,
  description: 'Terms of service and operational conditions of Kammenix Nig. Limited.',
};

export default function TermsPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101F34]">
            Terms and Conditions
          </h1>
          <p className="text-xs text-gray-500 mt-2">
            Last Updated: July 2026 | {companyConfig.legalName}
          </p>
        </div>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#101F34]">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website operated by {companyConfig.legalName} (“Kammenix”), you agree to comply with and be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#101F34]">2. Scope of Business Divisions &amp; Quotations</h2>
            <p>
              Information provided on this website regarding project management, facility management, cleaning, estate development, financial advisory, cooperative services, and contracting is for informational and consultation purposes. Formal service engagements, timelines, and costs are governed by executed legal contracts and Service Level Agreements (SLAs).
            </p>
          </section>

          <section className="space-y-2 text-amber-950 bg-amber-50 p-4 rounded-xl border border-amber-200">
            <h2 className="text-base font-bold text-amber-900">3. Regulatory Notice on Credit, Loans &amp; Cooperative Advisory</h2>
            <p className="text-xs leading-relaxed">
              All credit, loan, and cooperative services referenced across Kammenix channels are strictly subject to eligibility evaluation, documentation verification, compliance terms, and internal approval. Nothing on this website constitutes a guaranteed financial instrument or regulatory loan approval.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#101F34]">4. Intellectual Property</h2>
            <p>
              All content, graphics, geometric logos, trademarks, and text published on this website are the property of {companyConfig.legalName} unless otherwise noted. Unauthorized reproduction or redistribution is prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#101F34]">5. Contact &amp; Governance</h2>
            <p>
              For inquiries regarding service contracts or legal notices, contact {companyConfig.legalName} via {companyConfig.email} or call {companyConfig.displayPhone}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
