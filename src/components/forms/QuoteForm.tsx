"use client";

import React, { useState } from "react";
import { serviceDivisions } from "@/config/companyData";
import { FormService, QuoteFormData } from "@/services/formService";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    phone: "",
    email: "",
    serviceRequired: "",
    propertyProjectType: "",
    projectLocation: "",
    expectedStartDate: "",
    estimatedBudget: "",
    projectDescription: "",
    fileName: "",
    consent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    const validationErrors = FormService.validateQuoteForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await FormService.submitQuoteForm(formData);
      setSubmitResult({ success: result.success, message: result.message });
      if (result.success) {
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          serviceRequired: "",
          propertyProjectType: "",
          projectLocation: "",
          expectedStartDate: "",
          estimatedBudget: "",
          projectDescription: "",
          fileName: "",
          consent: false,
          honeypot: "",
        });
        setErrors({});
      }
    } catch {
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred. Please try submitting again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-xl relative">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-bold px-3 py-1 bg-[#C0E0D7] text-[#101F34] rounded-full uppercase tracking-wider">
          Official Quotation Request
        </span>
      </div>
      <h3 className="text-2xl font-extrabold text-[#101F34] mb-2">
        Request a Scope &amp; Cost Proposal
      </h3>
      <p className="text-gray-600 text-sm mb-6">
        Provide project parameters below and our engineering/consulting team
        will prepare a structured quotation.
      </p>

      {submitResult && (
        <div
          className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm ${
            submitResult.success
              ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {submitResult.success ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          )}
          <span>{submitResult.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-Spam Honeypot Field */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Chief Johnson Eze"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 800 000 0000"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Service Division Required <span className="text-red-500">*</span>
            </label>
            <select
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 ${
                errors.serviceRequired
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20"
              }`}
            >
              <option value="">-- Select Division --</option>
              {serviceDivisions.map((division) => (
                <option key={division.id} value={division.title}>
                  {division.title}
                </option>
              ))}
            </select>
            {errors.serviceRequired && (
              <p className="text-xs text-red-500 mt-1">
                {errors.serviceRequired}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Property / Project Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="propertyProjectType"
              value={formData.propertyProjectType}
              onChange={handleChange}
              placeholder="e.g. Commercial Office / Residential Estate / Cooperative"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                errors.propertyProjectType
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20"
              }`}
            />
            {errors.propertyProjectType && (
              <p className="text-xs text-red-500 mt-1">
                {errors.propertyProjectType}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Project Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="projectLocation"
              value={formData.projectLocation}
              onChange={handleChange}
              placeholder="City, State"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                errors.projectLocation
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20"
              }`}
            />
            {errors.projectLocation && (
              <p className="text-xs text-red-500 mt-1">
                {errors.projectLocation}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Expected Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="expectedStartDate"
              value={formData.expectedStartDate}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 ${
                errors.expectedStartDate
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20"
              }`}
            />
            {errors.expectedStartDate && (
              <p className="text-xs text-red-500 mt-1">
                {errors.expectedStartDate}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Estimated Budget (Optional)
            </label>
            <input
              type="text"
              name="estimatedBudget"
              value={formData.estimatedBudget}
              onChange={handleChange}
              placeholder="e.g. ₦5m - ₦15m"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#8DC5C0] focus:ring-2 focus:ring-[#8DC5C0]/20"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
            Project Description &amp; Scope Details{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="projectDescription"
            rows={4}
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Describe project dimensions, square footage, specific deliverables, or special requirements..."
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
              errors.projectDescription
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20"
            }`}
          />
          {errors.projectDescription && (
            <p className="text-xs text-red-500 mt-1">
              {errors.projectDescription}
            </p>
          )}
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 rounded text-[#8DC5C0] focus:ring-[#8DC5C0] w-4 h-4"
            />
            <span className="text-xs text-gray-600 leading-normal">
              I agree to allow Kammenix Nig. Limited to process this quotation
              request and reach out to provide a cost estimate.{" "}
              <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-red-500 mt-1">{errors.consent}</p>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#8DC5C0] hover:bg-[#6CA5A0] text-[#101F34] font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-[#101F34]" />
                <span>Processing Quotation Request...</span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4" />
                <span>Request Formal Quotation</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
