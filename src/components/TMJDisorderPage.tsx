import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Calendar, 
  ChevronRight, 
  ChevronDown,
  ArrowUp,
  ArrowDown,
  Activity, 
  AlertCircle, 
  Zap, 
  Clock, 
  Award, 
  HelpCircle, 
  Check, 
  X, 
  ArrowUpRight,
  Headphones,
  FileCheck,
  Stethoscope,
  Smile
} from 'lucide-react';
import { CLINIC_INFO, DENTIST_WORK_URL, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';
import { InfiniteCausesCarousel } from './InfiniteCausesCarousel';
import { InfiniteTreatmentsCarousel } from './InfiniteTreatmentsCarousel';

interface TMJDisorderPageProps {
  onOpenBooking: (prefillNotes?: string) => void;
  onNavigateHome: () => void;
}

export const TMJDisorderPage: React.FC<TMJDisorderPageProps> = ({ onOpenBooking, onNavigateHome }) => {
  // Symptom checker state
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const symptomsList = [
    { id: 'clicking', label: 'Clicking, popping, or grating sounds when opening mouth or chewing', severity: 2 },
    { id: 'headaches', label: 'Frequent morning temple headaches, brow ache, or migraine-like tension', severity: 3 },
    { id: 'clenching', label: 'Habitual teeth clenching or grinding (bruxism) during sleep or stress', severity: 2 },
    { id: 'locking', label: 'Jaw stiffness, limited opening, or jaw getting temporarily stuck/locked', severity: 4 },
    { id: 'ear_pain', label: 'Ear pain, ringing (tinnitus), or fullness without an ear infection', severity: 2 },
    { id: 'neck_stiffness', label: 'Sore neck, stiff upper shoulders, or radiating facial muscle pain', severity: 2 },
    { id: 'bite_change', label: 'Feeling that your upper and lower teeth no longer meet correctly', severity: 3 },
    { id: 'chewing_fatigue', label: 'Jaw tire or ache when eating tough foods like bagels or meats', severity: 2 },
  ];

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter(item => item !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  const totalScore = selectedSymptoms.reduce((sum, id) => {
    const item = symptomsList.find(s => s.id === id);
    return sum + (item ? item.severity : 0);
  }, 0);

  const getSeverityLevel = () => {
    if (selectedSymptoms.length === 0) return { label: 'Select your symptoms above', color: 'text-gray-400', bg: 'bg-gray-800', bar: 0 };
    if (totalScore <= 3) return { label: 'Mild TMJ Strain & Muscular Tension', color: 'text-amber-400', bg: 'bg-amber-500/20 border-amber-500/40', bar: 30 };
    if (totalScore <= 7) return { label: 'Moderate TMD Joint & Muscle Dysfunction', color: 'text-orange-400', bg: 'bg-orange-500/20 border-orange-500/40', bar: 65 };
    return { label: 'Acute TMJ Disc Displacement & Chronic Strain', color: 'text-rose-400', bg: 'bg-rose-500/20 border-rose-500/40', bar: 95 };
  };

  const severity = getSeverityLevel();

  const handleBookingWithSymptoms = () => {
    const symptomLabels = selectedSymptoms
      .map(id => symptomsList.find(s => s.id === id)?.label)
      .filter(Boolean)
      .join('; ');
    const note = symptomLabels ? `TMJ Assessment Score: ${totalScore}/20. Reported symptoms: ${symptomLabels}` : 'TMJ & Jaw Pain Consultation';
    onOpenBooking(note);
  };

  const faqs = [
    {
      q: 'Can TMJ disorders resolve on their own?',
      a: 'Mild TMJ symptoms sometimes improve on their own — particularly when they are triggered by a temporary increase in stress or a brief period of jaw overuse. However, persistent or recurring symptoms are unlikely to fully resolve without some form of treatment. Early assessment and intervention prevents the condition from progressing and becoming more difficult to manage.'
    },
    {
      q: 'Is a night guard effective for TMJ?',
      a: 'A custom-fitted oral splint or night guard can be highly effective. It prevents teeth from grinding, reduces muscular strain on the jaw joints, and cushions the TMJ to alleviate pain and morning jaw stiffness.'
    },
    {
      q: 'How long does TMJ treatment take?',
      a: 'Treatment timelines vary based on individual diagnosis and severity. Many patients experience relief within a few weeks of conservative therapies or orthotics, while comprehensive structural rehabilitation may take several months.'
    },
    {
      q: 'Is TMJ covered by dental insurance?',
      a: 'Many dental insurance policies provide coverage for TMJ diagnostic consultations, 3D CBCT scans, and custom oral appliances. We submit direct billing to insurers to make your treatment as seamless as possible.'
    }
  ];

  return (
    <div className="w-full text-white bg-[#050e1f] min-h-screen relative">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <button onClick={onNavigateHome} className="hover:text-sky-400 transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="hover:text-sky-400 cursor-default">Specialized Treatments</span>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-sky-400 font-semibold">TMJ & TMD Jaw Pain Center</span>
        </div>
      </div>

      {/* Front Hero Section matching screenshot */}
      <section className="relative max-w-7xl mx-auto px-2 sm:px-4 pt-2 pb-6">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-gray-800/80 bg-[#050e1f] shadow-2xl min-h-[540px] sm:min-h-[600px] lg:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 pb-16 sm:pb-20">
          
          {/* Background Image: Man holding painful jaw & facial tension + Atmospheric Cosmos Gradient */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Photographic backdrop of man touching jaw in pain */}
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80" 
              alt="TMJ jaw pain relief" 
              className="absolute right-0 top-0 w-full sm:w-[75%] lg:w-[65%] h-full object-cover object-right-top opacity-55 mix-blend-luminosity filter contrast-125"
            />

            {/* Dark deep navy gradient masks for perfect contrast & readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050e1f] via-[#050e1f]/90 sm:via-[#050e1f]/85 to-transparent w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f] via-[#050e1f]/40 to-transparent" />
            <div className="absolute inset-0 bg-radial from-transparent via-[#050e1f]/30 to-[#050e1f]" />

            {/* Soft cyan & sky blue atmospheric glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-12 right-1/3 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
          </div>

          {/* Main Content Area */}
          <div className="relative z-10 my-auto pt-6 sm:pt-10 max-w-2xl space-y-6 sm:space-y-7">
            {/* Main Headline matching screenshot */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.12] tracking-tight">
                <span className="text-[#38bdf8] block">TMJ Disorder Treatment</span>
                <span className="text-white block mt-1 sm:mt-2">in East Hills, Calgary</span>
              </h1>
            </div>

            {/* Subheading matching screenshot */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl font-normal leading-relaxed">
              Jaw pain, clicking, and stiffness are signals worth taking seriously — and in most cases, very treatable.
            </p>

            {/* CTA Button matching screenshot with Arrow in dark circle */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking('TMJ Consultation')}
                className="bg-[#7dd3fc] hover:bg-[#38bdf8] text-[#050e1f] font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-200 shadow-[0_0_30px_rgba(125,211,252,0.45)] inline-flex items-center gap-3 cursor-pointer group"
              >
                <span>Book a Consultation</span>
                <div className="w-6 h-6 rounded-full bg-[#050e1f] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="sm:hidden inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-full text-xs font-semibold backdrop-blur-md border border-white/15"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Bottom Center: Take a Tour & Planet Mouse Scroll Orb */}
          <div className="relative z-10 flex flex-col items-center justify-center mt-8 sm:mt-12">
            <button
              onClick={() => {
                const el = document.getElementById('what-is-tmj');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors tracking-wide font-medium">
                Take a Tour
              </span>

              {/* Planet / Mouse Wheel Orb with Orbit Rings */}
              <div className="relative flex items-center justify-center">
                {/* Outer Planetary Orbit Ellipse */}
                <svg className="absolute w-28 sm:w-32 h-10 pointer-events-none" viewBox="0 0 120 40">
                  <ellipse 
                    cx="60" 
                    cy="20" 
                    rx="52" 
                    ry="12" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.25)" 
                    strokeWidth="1" 
                    strokeDasharray="2 2"
                    className="group-hover:stroke-[#38bdf8] transition-colors"
                  />
                  {/* Orbiting Moon dot */}
                  <circle cx="20" cy="18" r="1.8" fill="#38bdf8" />
                  <circle cx="102" cy="22" r="1.5" fill="#ffffff" />
                </svg>

                {/* Glowing Mouse Orb */}
                <div className="w-9 h-12 rounded-full bg-gradient-to-b from-[#86efac] via-[#38bdf8] to-[#0284c7] p-0.5 shadow-[0_0_20px_rgba(56,189,248,0.5)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.8)] transition-all flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#050e1f]/40 backdrop-blur-xs flex flex-col items-center pt-2">
                    <span className="w-1 h-2 rounded-full bg-slate-900 animate-bounce" />
                  </div>
                </div>
              </div>
            </button>
          </div>

        </div>
      </section>

      {/* What is a TMJ Disorder Section matching screenshot */}
      <section id="what-is-tmj" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 overflow-hidden">
        {/* Floating background cosmos celestial orbs / planetary dots */}
        <div className="absolute left-6 top-1/4 w-3.5 h-3.5 rounded-full bg-[#38bdf8]/80 blur-[1px] pointer-events-none animate-pulse" />
        <div className="absolute left-1/4 top-12 w-6 h-6 rounded-full bg-[#d9f99d] blur-[2px] pointer-events-none" />
        <div className="absolute left-[38%] top-1/2 w-4 h-4 rounded-full bg-[#38bdf8] pointer-events-none" />
        <div className="absolute left-10 bottom-8 w-5 h-5 rounded-full bg-[#bef264] pointer-events-none" />
        <div className="absolute left-[36%] bottom-16 w-3 h-3 rounded-full bg-[#bef264] pointer-events-none" />

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Clinic Consultation Image Card */}
          <div className="md:col-span-5 relative">
            {/* Ambient Backing Glow & Card Shell */}
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-gray-800/80 bg-gradient-to-b from-[#0a1835] to-[#040b18] p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              <div className="relative rounded-[22px] sm:rounded-[24px] overflow-hidden aspect-[4/4.2] sm:aspect-[4/4.5] md:aspect-[4/4.8] lg:aspect-[4/4.5] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80" 
                  alt="Planet Dental TMJ Consultation" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Brand Overlay Logo on Wall */}
                <div className="absolute top-4 left-4 bg-[#050e1f]/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 flex items-center gap-2 shadow-lg">
                  <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#0284c7] flex items-center justify-center text-white text-xs font-black">
                    🦷
                  </div>
                  <div className="text-left leading-none">
                    <span className="text-[11px] font-extrabold text-white tracking-tight">planet</span>
                    <span className="block text-[9px] font-bold text-[#38bdf8] tracking-wider uppercase">dental</span>
                  </div>
                </div>

                {/* Gentle Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content & Explanation */}
          <div className="md:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 md:pl-2 lg:pl-4 relative">
            {/* Title matching screenshot */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18]">
              What is a <span className="text-[#38bdf8]">TMJ disorder?</span>
            </h2>

            {/* Paragraphs exactly transcribed from design */}
            <div className="space-y-3.5 sm:space-y-4 md:space-y-4 lg:space-y-5 text-xs sm:text-sm md:text-[13.5px] lg:text-[16px] text-gray-300 font-normal leading-[1.6] lg:leading-[1.65]">
              <p>
                The temporomandibular joint (TMJ) connects your lower jaw (mandible) to your skull on each side of your face, just in front of your ears. This joint — one of the most complex in the human body — is responsible for every movement your jaw makes: opening and closing, chewing, speaking, and yawning.
              </p>

              <p>
                A TMJ disorder (also called TMD) is a condition in which the joint, the surrounding muscles, or both are not functioning as they should. The result can range from mild discomfort and occasional clicking to persistent jaw pain, chronic headaches, and restricted jaw movement that affects daily life.
              </p>

              <p>
                TMJ disorders are more common than most people realize, and they are far more treatable than they often seem. At Planet Dental, we take a measured, systematic approach to assessment and care — starting with the least invasive options and working methodically toward the solution that best fits your situation.
              </p>
            </div>

            {/* Mobile Booking Button (only on small phone screens) */}
            <div className="pt-2 md:hidden">
              <button
                onClick={() => onOpenBooking('TMJ Consultation')}
                className="bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#050e1f] px-6 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(56,189,248,0.35)] inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book TMJ Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Symptoms of a TMJ disorder Section matching screenshot */}
      <section id="tmj-symptoms" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 overflow-hidden">
        {/* Floating background cosmos celestial orbs / planetary dots */}
        <div className="absolute left-[60%] top-8 w-2.5 h-2.5 rounded-full bg-[#38bdf8]/70 pointer-events-none" />
        <div className="absolute right-12 top-10 w-7 h-7 rounded-full bg-[#d9f99d] blur-[2px] pointer-events-none" />
        <div className="absolute left-3 top-1/2 w-4 h-4 rounded-full bg-[#38bdf8] pointer-events-none" />
        <div className="absolute right-6 top-1/2 w-2 h-2 rounded-full bg-[#38bdf8]/80 pointer-events-none" />
        <div className="absolute right-10 bottom-24 w-3.5 h-3.5 rounded-full bg-[#38bdf8] pointer-events-none" />
        <div className="absolute right-20 bottom-10 w-3 h-3 rounded-full bg-[#bef264] pointer-events-none" />
        <div className="absolute left-1/2 bottom-6 w-3.5 h-3.5 rounded-full bg-[#bef264] pointer-events-none" />

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Symptoms Checklist Narrative */}
          <div className="md:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Title matching screenshot */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18]">
              Symptoms of a <span className="text-[#38bdf8]">TMJ disorder</span>
            </h2>

            {/* Intro paragraph */}
            <p className="text-xs sm:text-sm md:text-[14px] lg:text-[16px] text-gray-300 font-normal leading-relaxed">
              TMJ disorders can present in a wide variety of ways. Common symptoms include:
            </p>

            {/* List of 9 specific symptoms matching screenshot */}
            <ul className="space-y-2.5 sm:space-y-3 pt-1">
              {[
                "Jaw pain or soreness — particularly in the morning or after eating",
                "Clicking, popping, or grating sounds when opening or closing the mouth",
                "Jaw locking — difficulty opening or closing the mouth fully",
                "Chronic headaches or migraines, particularly around the temples",
                "Earache or a feeling of pressure or fullness in the ears without an ear infection",
                "Facial muscle soreness or tension",
                "Neck, shoulder, or upper back pain that may be related to jaw tension",
                "Difficulty or discomfort when chewing",
                "Teeth that feel tender or worn down"
              ].map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-[13.5px] lg:text-[15px] text-gray-200 leading-relaxed group">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[#38bdf8]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>

            {/* Outro text */}
            <p className="text-xs sm:text-sm md:text-[14px] lg:text-[16px] text-gray-300 font-normal pt-1.5 leading-relaxed">
              If several of these symptoms sound familiar, a TMJ assessment at Planet Dental is a worthwhile next step.
            </p>

            {/* Booking CTA button on mobile */}
            <div className="pt-2 md:hidden">
              <button
                onClick={() => onOpenBooking('TMJ Symptoms Assessment')}
                className="bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#050e1f] px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(56,189,248,0.35)] inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book TMJ Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Woman Patient Touching Jaw In Discomfort */}
          <div className="md:col-span-5 relative">
            {/* Ambient Backing Glow & Card Shell */}
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-gray-800/80 bg-gradient-to-b from-[#0a1835] to-[#040b18] p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              <div className="relative rounded-[22px] sm:rounded-[24px] overflow-hidden aspect-[4/4.8] sm:aspect-[4/4.5] md:aspect-[4/4.8] lg:aspect-[4/4.5] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1594824813588-44445839ce6b?auto=format&fit=crop&w=1000&q=80" 
                  alt="Patient experiencing TMJ and jaw pain" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Soft ambient lighting top & bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/70 via-transparent to-[#050e1f]/20 pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#38bdf8]/15 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* What Causes TMJ Disorders Section matching screenshot */}
      <section id="tmj-causes" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 overflow-hidden">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            What causes <span className="text-[#38bdf8]">TMJ disorders?</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-[16px] text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
            TMJ disorders often have multiple contributing factors, which is part of what makes them complex to diagnose. Common causes and contributing factors include:
          </p>
        </div>

        {/* Infinite Draggable Causes Carousel Side-by-Side */}
        <InfiniteCausesCarousel />
      </section>

      {/* Transitional Assessment Callout matching screenshot */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center py-6 sm:py-8">
        <p className="text-sm sm:text-base md:text-[17px] text-gray-300 font-normal leading-relaxed">
          In many cases, no single definitive cause can be identified — which is why comprehensive assessment is important.
        </p>
      </div>

      {/* What happens at a TMJ consultation? Section matching screenshot */}
      <section id="tmj-consultation" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 overflow-hidden">
        {/* Floating background cosmos celestial orbs / planetary dots */}
        <div className="absolute left-6 top-1/4 w-3.5 h-3.5 rounded-full bg-[#38bdf8]/80 blur-[1px] pointer-events-none animate-pulse" />
        <div className="absolute left-1/3 top-8 w-6 h-6 rounded-full bg-[#d9f99d] blur-[2px] pointer-events-none" />
        <div className="absolute left-10 bottom-8 w-4 h-4 rounded-full bg-[#bef264] pointer-events-none" />
        <div className="absolute right-12 bottom-12 w-3.5 h-3.5 rounded-full bg-[#bef264] pointer-events-none" />
        <div className="absolute left-[40%] bottom-1/3 w-3 h-3 rounded-full bg-[#38bdf8] pointer-events-none" />

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Doctor Clinical Examination of Patient Jaw */}
          <div className="md:col-span-5 relative">
            {/* Ambient Backing Glow & Card Shell */}
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-gray-800/80 bg-gradient-to-b from-[#0a1835] to-[#040b18] p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              <div className="relative rounded-[22px] sm:rounded-[24px] overflow-hidden aspect-[4/4.8] sm:aspect-[4/4.5] md:aspect-[4/4.8] lg:aspect-[4/4.5] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
                  alt="Doctor conducting TMJ jaw examination with dental digital radiography" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Soft ambient lighting top & bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/70 via-transparent to-[#050e1f]/20 pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#38bdf8]/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Expectations Narrative */}
          <div className="md:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 md:pl-2 lg:pl-4 relative">
            {/* Heading matching screenshot */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18]">
              What happens <span className="text-[#38bdf8]">at a TMJ consultation?</span>
            </h2>

            {/* Intro Lead */}
            <p className="text-xs sm:text-sm md:text-[14px] lg:text-[16px] text-gray-300 font-normal leading-relaxed">
              Your TMJ consultation at Planet Dental is a thorough, unhurried assessment.
            </p>

            {/* Subheading */}
            <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-white tracking-tight pt-1">
              Here's what to expect:
            </h3>

            {/* 5 Consultation Steps Checklist matching screenshot */}
            <ul className="space-y-3 sm:space-y-3.5 pt-1">
              {[
                "A detailed discussion of your symptoms — when they occur, how long they've been present, what makes them better or worse, and how they affect your daily life",
                "A clinical examination of your jaw joints — listening for sounds, palpating for tenderness, and assessing your full range of motion",
                "An examination of your bite, teeth, and surrounding musculature for signs of grinding, wear, or muscle tension",
                "Digital X-rays to assess the bony structures of the jaw joint; CT or MRI imaging may be recommended in more complex cases to evaluate the disc and soft tissue structures",
                "A clear explanation of our findings and a discussion of the treatment options that are appropriate for your specific situation"
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-[13.5px] lg:text-[14.5px] text-gray-200 leading-relaxed group">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[#38bdf8]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* TMJ Treatment Options Infinite Draggable Carousel matching screenshot */}
      <InfiniteTreatmentsCarousel />

      {/* Tips for Managing TMJ Symptoms at Home Section matching screenshot */}
      <section id="tmj-home-tips" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Cosmos floating planetary dots matching screenshot */}
        <div className="absolute left-6 top-1/4 w-3.5 h-3.5 rounded-full bg-[#38bdf8]/80 pointer-events-none" />
        <div className="absolute right-[45%] top-10 w-4 h-4 rounded-full bg-[#38bdf8]/90 pointer-events-none" />
        <div className="absolute right-1/4 top-1/3 w-3 h-3 rounded-full bg-[#38bdf8]/80 pointer-events-none" />
        <div className="absolute right-12 top-1/2 w-3.5 h-3.5 rounded-full bg-[#38bdf8]/70 pointer-events-none" />

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-14 items-center">
          {/* Left Column: Home Care Tips Checklist */}
          <div className="md:col-span-6 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18]">
              Tips for managing <span className="text-[#38bdf8]">TMJ symptoms</span> <br className="hidden sm:block" />
              <span className="text-[#38bdf8]">at home</span>
            </h2>

            <ul className="space-y-4 sm:space-y-5">
              {[
                "Eat softer foods and cut into small pieces during flare-ups",
                "Apply a warm compress to the jaw for 10–15 minutes to ease muscle tension",
                "Be conscious of daytime clenching — try to keep your teeth slightly apart when your mouth is at rest",
                "Avoid resting your chin on your hand or sleeping face-down",
                "Practise slow, conscious jaw relaxation exercises"
              ].map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-3.5 text-xs sm:text-sm md:text-[14px] lg:text-[15.5px] text-gray-200 leading-relaxed font-normal">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-1 text-[#38bdf8]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Reclined Patient Visual with Cosmos Aura */}
          <div className="md:col-span-6 relative flex justify-center lg:justify-end">
            {/* Ambient Nebula & Planets around card */}
            <div className="absolute -left-6 top-1/3 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] pointer-events-none z-20" />
            <div className="absolute right-6 -top-4 w-6 h-6 rounded-full bg-[#d9f99d] shadow-[0_0_15px_#d9f99d] pointer-events-none z-20" />
            <div className="absolute right-0 top-1/2 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] pointer-events-none z-20" />
            <div className="absolute -left-3 bottom-12 w-4 h-4 rounded-full bg-[#bef264] shadow-[0_0_12px_#bef264] pointer-events-none z-20" />
            <div className="absolute right-1/4 -bottom-3 w-3 h-3 rounded-full bg-[#d9f99d] pointer-events-none z-20" />

            {/* Glowing Card Shell matching screenshot */}
            <div className="relative w-full max-w-[460px] rounded-[32px] sm:rounded-[36px] overflow-hidden border border-sky-500/20 bg-gradient-to-b from-[#0a1835] via-[#051124] to-[#040b18] p-2.5 sm:p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.7)] group">
              <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden aspect-[4/3.7] w-full bg-[#030914]">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80" 
                  alt="Young patient resting peacefully and receiving gentle jaw relaxation care in dental chair" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Soft top atmospheric cyan sky glow */}
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#38bdf8]/40 via-[#38bdf8]/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e1e]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section matching screenshot */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Title matching screenshot */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18]">
            Frequently asked <span className="text-[#38bdf8]">questions</span>
          </h2>
        </div>

        {/* Deep Cosmos Starlit Shell */}
        <div className="relative rounded-[28px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden border border-sky-500/20 bg-gradient-to-b from-[#071936] via-[#051329] to-[#030914] p-5 sm:p-10 md:p-14 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          {/* Deep cosmos stars background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white/70 blur-[0.5px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-sky-300/80 blur-[0.5px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-200/70 pointer-events-none" />
          <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 rounded-full bg-sky-400/60 blur-[1px] pointer-events-none" />
          <div className="absolute top-12 right-12 w-1.5 h-1.5 rounded-full bg-white/80 pointer-events-none" />

          {/* Accordion Cards Container */}
          <div className="relative z-10 max-w-4xl mx-auto space-y-3.5 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-b from-[#0c2445]/80 via-[#0a1f3c]/90 to-[#07172e]/90 border border-sky-400/25 rounded-[20px] sm:rounded-[24px] overflow-hidden backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 md:p-6 text-left flex items-start justify-between gap-4 group cursor-pointer"
                  >
                    <div className="space-y-2.5 sm:space-y-3 flex-1 pr-2">
                      <span className="block font-medium sm:font-semibold text-sm sm:text-base md:text-[16.5px] text-white tracking-tight leading-snug group-hover:text-sky-200 transition-colors">
                        {faq.q}
                      </span>
                      
                      {isOpen && (
                        <p className="text-xs sm:text-[13.5px] md:text-[14.5px] text-gray-200/90 leading-relaxed font-normal animate-fadeIn">
                          {faq.a}
                        </p>
                      )}
                    </div>

                    {/* Circular Cyan Arrow Button matching screenshot */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#38bdf8] text-[#050e1f] flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(56,189,248,0.45)] group-hover:scale-105 transition-transform mt-0.5">
                      {isOpen ? (
                        <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                      ) : (
                        <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jaw Pain Starting Point & Relief Section matching screenshot */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header & Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight leading-tight">
            <span className="text-[#38bdf8]">Jaw pain has a starting point</span>
            <span className="text-white"> — and so does relief.</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A TMJ assessment at Planet Dental is the first step toward understanding what's happening and finding an approach that works. Book a consultation and let's work through this together.
          </p>
        </div>

        {/* 3 Cyan Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-8">
          <button
            onClick={() => onOpenBooking('TMJ Assessment Consultation')}
            className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.35)] hover:scale-[1.02] cursor-pointer"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={() => {
              onNavigateHome();
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
            className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.35)] hover:scale-[1.02] cursor-pointer"
          >
            <span>Plan Your Visit</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.35)] hover:scale-[1.02] cursor-pointer"
          >
            <span>Speak with Our Team</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* 3 Pills: Planet Dental, East Hills Calgary, Open 7 Days a Week */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-5 sm:mt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c2240] border border-sky-500/30 text-gray-200 text-xs sm:text-[13px] font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
            <span>Planet Dental</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c2240] border border-sky-500/30 text-gray-200 text-xs sm:text-[13px] font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
            <span>East Hills, Calgary</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c2240] border border-sky-500/30 text-gray-200 text-xs sm:text-[13px] font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
            <span>Open 7 Days a Week</span>
          </div>
        </div>

        {/* 3-Column Clinic Photography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mt-12 sm:mt-16">
          {/* Card 1: Operatory Room */}
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/20 bg-[#08152e] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            <img
              src={DENTIST_WORK_URL}
              alt="Planet Dental Modern Operatory Clinic"
              className="w-full h-80 sm:h-96 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Card 2: Main Reception Lounge & Curved Wall */}
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/20 bg-[#08152e] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            <img
              src={OFFICE_TOUR_2}
              alt="Planet Dental Modern Reception and Patient Lounge"
              className="w-full h-80 sm:h-96 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Card 3: Futuristic Sci-Fi Arcade Corridor */}
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/20 bg-[#08152e] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            <img
              src={OFFICE_TOUR_1}
              alt="Planet Dental Futuristic Hallway and Arcade"
              className="w-full h-80 sm:h-96 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
};
