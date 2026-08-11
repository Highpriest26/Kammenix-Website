'use client';

import React, { useState } from 'react';
import { serviceDivisions } from '@/config/companyData';
import { FormService, ContactFormData } from '@/services/formService';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: '',
    preferredContactMethod: 'Email',
    projectLocation: '',
    message: '',
    consent: false,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    const validationErrors = FormService.validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await FormService.submitContactForm(formData);
      setSubmitResult({ success: result.success, message: result.message });
      if (result.success) {
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          serviceRequired: '',
          preferredContactMethod: 'Email',
          projectLocation: '',
          message: '',
          consent: false,
          honeypot: '',
        });
        setErrors({});
      }
    } catch {
      setSubmitResult({
        success: false,
        message: 'An unexpected error occurred. Please try again or reach out directly via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-xl relative">
      <h3 className="text-2xl font-extrabold text-[#101F34] mb-2">Send Us a Direct Message</h3>
      <p className="text-gray-600 text-sm mb-6">
        Fill out the form below and our team will get back to you within 24 hours.
      </p>

      {submitResult && (
        <div
          className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm ${
            submitResult.success
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
              : 'bg-red-50 border border-red-200 text-red-800'
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Adebayo Okonkwo"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? 'border-red-400 focus:ring-red-200'
                  : 'border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20'
              }`}
            />
            {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Company Name (Optional)
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Apex Holdings Ltd"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#8DC5C0] focus:ring-2 focus:ring-[#8DC5C0]/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-400 focus:ring-red-200'
                  : 'border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20'
              }`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
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
                  ? 'border-red-400 focus:ring-red-200'
                  : 'border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20'
              }`}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 ${
                errors.serviceRequired
                  ? 'border-red-400 focus:ring-red-200'
                  : 'border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20'
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
              <p className="text-xs text-red-500 mt-1">{errors.serviceRequired}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
              Preferred Contact Method
            </label>
            <select
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:border-[#8DC5C0] focus:ring-2 focus:ring-[#8DC5C0]/20"
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone Call</option>
              <option value="WhatsApp">WhatsApp Chat</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
            Project / Property Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="projectLocation"
            value={formData.projectLocation}
            onChange={handleChange}
            placeholder="e.g. Victoria Island, Lagos / Abuja FCT"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
              errors.projectLocation
                ? 'border-red-400 focus:ring-red-200'
                : 'border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20'
            }`}
          />
          {errors.projectLocation && (
            <p className="text-xs text-red-500 mt-1">{errors.projectLocation}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#101F34] mb-1 uppercase tracking-wider">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your requirements, timeline, or question in detail..."
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
              errors.message
                ? 'border-red-400 focus:ring-red-200'
                : 'border-gray-300 focus:border-[#8DC5C0] focus:ring-[#8DC5C0]/20'
            }`}
          />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
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
              I consent to Kammenix Nig. Limited collecting my contact details to respond to this enquiry. <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent}</p>}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#101F34] hover:bg-[#1A2F4C] text-[#8DC5C0] font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-[#8DC5C0]" />
                <span>Transmitting Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#8DC5C0]" />
                <span>Submit Message</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
