'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-[#101F34] hover:text-[#4A8782] transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-base">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#8DC5C0] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#B92E68]' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
