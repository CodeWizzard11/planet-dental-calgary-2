import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowUpRight, Menu, X, Phone, MapPin, BookUser, ShieldCheck, Sparkles, Smile, Zap, Clock } from 'lucide-react';
import { LOGO_URL, CLINIC_INFO } from '../data/dentalData';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(true);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  const treatmentsRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (treatmentsRef.current && !treatmentsRef.current.contains(event.target as Node)) {
        setTreatmentsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (tab: ActiveTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    setTreatmentsOpen(false);
  };

  const TREATMENT_OPTIONS = [
    { name: 'Orthodontics (Braces/Clear Aligners)', tab: 'orthodontics' as const },
    { name: 'Pediatric Dentistry', tab: 'pediatric-dentistry' as const },
    { name: 'Preventive Dentistry', tab: 'preventive-dentistry' as const },
    { name: 'Root Canal Treatment', tab: 'root-canal' as const },
    { name: 'Emergency Dental Care', tab: 'emergency' as const },
    { name: 'Fillings', tab: 'fillings' as const },
    { name: 'Dental Full Check Up', tab: 'services' as const },
    { name: 'Hygiene/ Cleaning', tab: 'services' as const },
    { name: 'Dental Implants', tab: 'services' as const },
    { name: 'Custom Night Guards', tab: 'services' as const },
    { name: 'Sedation Dentistry', tab: 'services' as const },
    { name: 'Teeth Whitening', tab: 'services' as const },
    { name: 'Wisdom Tooth Removal', tab: 'wisdom-teeth' as const },
  ];

  return (
    <header className="bg-[#050e1f] text-white w-full border-b border-gray-800/80 shadow-lg relative z-40">
      {/* Top Mobile Quick Actions Bar (Call Now | Book | Direction) - hidden on tablet and desktop */}
      <div className="md:hidden bg-[#040b18] border-b border-white/15 px-4 py-2 flex items-center justify-center">
        <div className="flex items-center justify-center gap-9 sm:gap-14 text-white">
          {/* Call Now */}
          <a 
            href={`tel:${CLINIC_INFO.phoneClean}`} 
            className="flex flex-col items-center justify-center gap-1 group text-center cursor-pointer hover:opacity-90 transition-opacity"
          >
            <Phone className="w-[18px] h-[18px] text-[#38bdf8] fill-[#38bdf8]/10" />
            <span className="text-[11px] sm:text-xs font-normal text-white leading-none">Call Now</span>
          </a>

          {/* Book */}
          <button 
            onClick={onOpenBooking} 
            className="flex flex-col items-center justify-center gap-1 group text-center cursor-pointer hover:opacity-90 transition-opacity"
          >
            <BookUser className="w-[18px] h-[18px] text-[#38bdf8]" />
            <span className="text-[11px] sm:text-xs font-normal text-white leading-none">Book</span>
          </button>

          {/* Direction */}
          <a 
            href={CLINIC_INFO.mapsLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center gap-1 group text-center cursor-pointer hover:opacity-90 transition-opacity"
          >
            <MapPin className="w-[18px] h-[18px] text-[#38bdf8] fill-[#38bdf8]" />
            <span className="text-[11px] sm:text-xs font-normal text-white leading-none">Direction</span>
          </a>
        </div>
      </div>

      {/* Top Main Row: Logo and Right Action Pill Buttons / Hamburger */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group text-left transition-transform duration-200 hover:opacity-95"
          >
            {/* Custom stylized crisp logo */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Glowing planetary tooth icon matching design */}
                  <defs>
                    <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="50%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  {/* Tooth base */}
                  <path 
                    d="M50 12 C32 12 20 25 20 45 C20 62 30 70 35 88 C38 96 46 96 48 87 C49 80 51 80 52 87 C54 96 62 96 65 88 C70 70 80 62 80 45 C80 25 68 12 50 12 Z" 
                    fill="url(#toothGrad)" 
                  />
                  {/* Orbit Ring */}
                  <ellipse 
                    cx="50" 
                    cy="48" 
                    rx="44" 
                    ry="15" 
                    stroke="url(#ringGrad)" 
                    strokeWidth="4" 
                    transform="rotate(-20 50 48)" 
                    strokeLinecap="round" 
                  />
                  {/* Gloss highlight */}
                  <path 
                    d="M32 30 C35 22 45 18 55 18" 
                    stroke="#ffffff" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    opacity="0.8" 
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                  Planet
                </span>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#38bdf8] leading-none">
                  Dental
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Right Pill Actions matching screenshot */}
          <div className="hidden md:flex items-center gap-3">
            {/* Call us Today Pill Button */}
            <a 
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="flex items-center gap-2.5 bg-[#0b172a] hover:bg-[#12223b] text-white border border-gray-700/80 hover:border-gray-500/80 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <span>Call us Today</span>
              <div className="w-6 h-6 rounded-full bg-white text-[#050e1f] flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </a>

            {/* Request an Appointment Pill Button */}
            <button 
              onClick={onOpenBooking}
              className="flex items-center gap-2.5 bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.35)] cursor-pointer"
            >
              <span>Request an Appointment</span>
              <div className="w-6 h-6 rounded-full bg-[#050e1f] text-white flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Button with White Outline Box matching screenshot */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="border-2 border-white/90 rounded-md p-1.5 sm:p-2 text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Second Row: Centered Navigation Links matching user screenshot */}
        <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 pt-3 pb-1 border-t border-gray-800/40 text-[14.5px]">
          {/* Home */}
          <button
            onClick={() => handleNav('home')}
            className={`font-normal transition-colors cursor-pointer ${
              activeTab === 'home' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'
            }`}
          >
            Home
          </button>

          {/* About Us */}
          <button
            onClick={() => handleNav('about-us')}
            className={`font-normal transition-colors cursor-pointer ${
              activeTab === 'about-us' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'
            }`}
          >
            About Us
          </button>

          {/* Treatments Dropdown */}
          <div className="relative" ref={treatmentsRef}>
            <button
              onClick={() => setTreatmentsOpen(!treatmentsOpen)}
              className="flex items-center gap-1 font-normal text-gray-300 hover:text-white transition-colors cursor-pointer py-1"
            >
              <span>Treatments</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${treatmentsOpen ? 'rotate-180 text-sky-400' : ''}`} />
            </button>

            {treatmentsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-[#38bdf8] text-[#050e1f] rounded-2xl shadow-2xl p-2 z-50 animate-fadeIn max-h-[500px] overflow-y-auto">
                {TREATMENT_OPTIONS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setTreatmentsOpen(false);
                      handleNav(item.tab);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-white font-medium hover:bg-black/10 rounded-lg transition-colors leading-tight cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Orthodontics */}
          <button
            onClick={() => handleNav('orthodontics')}
            className={`font-normal transition-colors cursor-pointer relative py-1 ${
              activeTab === 'orthodontics' ? 'text-[#38bdf8] font-medium' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span>Orthodontics</span>
            {activeTab === 'orthodontics' && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#38bdf8] rounded-full shadow-[0_0_8px_#38bdf8]" />
            )}
          </button>

          {/* Implants */}
          <button
            onClick={() => handleNav('implants')}
            className={`font-normal transition-colors cursor-pointer ${
              activeTab === 'implants' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'
            }`}
          >
            Implants
          </button>

          {/* Fees & Financing */}
          <button
            onClick={() => handleNav('fees-financing')}
            className={`font-normal transition-colors cursor-pointer ${
              activeTab === 'fees-financing' || activeTab === 'pricing' || activeTab === 'financing'
                ? 'text-white font-medium'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Fees & Financing
          </button>

          {/* FAQ */}
          <button
            onClick={() => handleNav('faq')}
            className={`font-normal transition-colors cursor-pointer ${
              activeTab === 'faq' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'
            }`}
          >
            FAQ
          </button>

          {/* Contact Us */}
          <button
            onClick={() => handleNav('contact')}
            className={`font-normal transition-colors cursor-pointer ${
              activeTab === 'contact' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'
            }`}
          >
            Contact Us
          </button>
        </nav>
      </div>

      {/* Full-Screen Mobile Drawer matching Screenshot */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#020b18] overflow-y-auto animate-fadeIn flex flex-col">
          {/* Top Bar inside Mobile Menu matching screenshot */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-[#030e20] border-b border-sky-950/80">
            {/* Logo */}
            <button 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 text-left"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                  <ellipse cx="50" cy="50" rx="46" ry="46" fill="url(#toothGradMobile)" />
                  <path d="M35 30 C30 45, 32 65, 40 74 C44 78, 48 75, 50 65 C52 58, 54 58, 56 65 C58 75, 62 78, 66 74 C74 65, 76 45, 71 30 C66 18, 40 18, 35 30 Z" fill="#ffffff" />
                  <defs>
                    <linearGradient id="toothGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">Planet</span>
                <span className="text-lg font-bold tracking-tight text-[#38bdf8] leading-none">Dental</span>
              </div>
            </button>

            {/* Square Close Button with White Border */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 border border-white/90 rounded-[4px] text-white flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Navigation Links list matching screenshot */}
          <div className="flex flex-col flex-1 pb-12">
            {/* 1. Home */}
            <button
              onClick={() => handleNav('home')}
              className="w-full text-left px-5 py-3.5 bg-[#030e20] text-[#38bdf8] hover:text-white font-normal text-[15px] transition-colors border-b border-sky-950/40"
            >
              Home
            </button>

            {/* 2. About Us */}
            <button
              onClick={() => handleNav('about-us')}
              className="w-full text-left px-5 py-3.5 bg-[#030e20] text-gray-200 hover:text-white font-normal text-[15px] transition-colors border-b border-sky-950/40"
            >
              About Us
            </button>

            {/* 3. Treatments Header + Dropdown */}
            <button
              onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
              className="w-full text-left px-5 py-3.5 bg-[#030e20] text-[#38bdf8] hover:text-white font-normal text-[15px] flex items-center justify-between transition-colors border-b border-sky-950/40 cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <span>Treatments</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileTreatmentsOpen ? 'rotate-0' : '-rotate-90'}`} />
              </div>
            </button>

            {/* Expanded Treatments List with Solid Sky Blue Background */}
            {mobileTreatmentsOpen && (
              <div className="bg-[#2eaee8] text-white flex flex-col py-1.5">
                {TREATMENT_OPTIONS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNav(item.tab)}
                    className="w-full text-left px-6 py-2.5 text-white hover:bg-black/10 transition-colors text-[15px] font-normal leading-normal cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}

            {/* 4. Orthodontics */}
            <button
              onClick={() => handleNav('orthodontics')}
              className="w-full text-left px-5 py-3.5 bg-[#030e20] text-gray-200 hover:text-white font-normal text-[15px] transition-colors border-b border-sky-950/40"
            >
              Orthodontics
            </button>

            {/* 5. Implants */}
            <button
              onClick={() => handleNav('implants')}
              className="w-full text-left px-5 py-3.5 bg-[#030e20] text-gray-200 hover:text-white font-normal text-[15px] transition-colors border-b border-sky-950/40"
            >
              Implants
            </button>

            {/* 6. Fees & Financing */}
            <button
              onClick={() => handleNav('fees-financing')}
              className="w-full text-left px-5 py-3.5 bg-[#030e20] text-gray-200 hover:text-white font-normal text-[15px] transition-colors border-b border-sky-950/40"
            >
              Fees & Financing
            </button>

            {/* 7. FAQ */}
            <button
              onClick={() => handleNav('faq')}
              className="w-full text-left px-5 py-3.5 bg-[#030e20] text-gray-200 hover:text-white font-normal text-[15px] transition-colors border-b border-sky-950/40"
            >
              FAQ
            </button>

            {/* 8. Contact Us */}
            <button
              onClick={() => handleNav('contact')}
              className="w-full text-left px-5 py-3.5 bg-[#2faee8] text-white font-normal text-[15px] hover:bg-[#289cd2] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
