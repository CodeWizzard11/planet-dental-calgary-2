import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQSectionProps {
  onOpenBooking?: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Do you follow the Alberta Dental Association Fee Guide?',
    answer: 'Yes, Planet Dental in East Hills Calgary strictly follows the current Alberta Dental Association (ADA) Fee Guide. This ensures transparent, predictable, and fair pricing without hidden markups or unexpected out-of-pocket costs.',
    category: 'Billing & Insurance'
  },
  {
    question: 'Do you offer direct billing to private dental insurance?',
    answer: 'Yes! We direct bill (assignment of benefits) to all major Canadian dental insurance companies including Sun Life, Canada Life, Alberta Blue Cross, Manulife, Desjardins, Green Shield, and more. You simply pay any remaining co-pay or deductible.',
    category: 'Billing & Insurance'
  },
  {
    question: 'What financing options and payment plans do you provide?',
    answer: 'We believe dental care should always be accessible. We offer 0% interest monthly financing options and customizable payment plans for orthodontic treatment (braces & clear aligners), dental implants, and smile makeovers.',
    category: 'Financing'
  },
  {
    question: 'How do dental implants work, and am I a candidate?',
    answer: 'Dental implants are titanium or ceramic posts surgically positioned into the jawbone beneath your gums to securely mount replacement crowns or bridges. During your complimentary 3D implant consultation, our dentists take digital CBCT scans to assess bone volume and craft a personalized treatment plan.',
    category: 'Treatments'
  },
  {
    question: 'What orthodontic options do you offer for kids, teens, and adults?',
    answer: 'We provide full orthodontic care including traditional metal braces, discreet ceramic tooth-colored braces, and Invisalign® clear aligners. We also offer early interceptive orthodontics (Phase 1) for developing jaws in young children.',
    category: 'Orthodontics'
  },
  {
    question: 'Do you accept same-day dental emergency walk-ins?',
    answer: 'Yes, we reserve dedicated daily appointments for acute dental emergencies including severe toothaches, chipped or knocked-out teeth, facial swelling, broken fillings, and oral injuries. Call our East Hills office right away or walk in for prompt relief.',
    category: 'Emergency'
  },
  {
    question: 'What are your clinic hours and parking availability?',
    answer: 'We offer extended weekday evenings and weekend appointments to easily fit into family and work schedules. Our clinic is conveniently situated in the East Hills Shopping Centre with abundant free parking directly outside our doors.',
    category: 'General'
  }
];

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-5xl mx-auto scroll-mt-20">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Patient Help Center</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Frequently Asked <span className="text-[#38bdf8]">Questions</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400">
          Find clear, transparent answers about our East Hills dental clinic, fee guides, insurance coverage, and treatments.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-[#0a1835] border-sky-400/40 shadow-lg shadow-sky-950/40' 
                  : 'bg-[#07132a]/80 border-gray-800/80 hover:border-gray-700/90'
              }`}
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full text-left px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-white text-base sm:text-lg leading-snug">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                  isOpen ? 'bg-sky-400/20 text-[#38bdf8]' : 'bg-gray-800/80 text-gray-400'
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky-400' : ''}`} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-gray-300 border-t border-sky-950/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0a1b38] to-[#08152e] border border-sky-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Still have a question?</h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Our friendly front desk team is always here to assist with insurance estimates or appointment bookings.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="tel:4037681234"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-700 text-gray-200 hover:text-white hover:bg-white/5 text-xs sm:text-sm font-semibold transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-sky-400" />
            <span>(403) 768-1234</span>
          </a>
          {onOpenBooking && (
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#38bdf8] text-[#050e1f] font-bold text-xs sm:text-sm hover:bg-sky-300 transition-colors shadow-lg shadow-sky-400/20 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
