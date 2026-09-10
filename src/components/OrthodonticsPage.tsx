import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  Clock, 
  Smile, 
  ShieldCheck, 
  FileText,
  DollarSign,
  Users,
  Calendar,
  Phone,
  Layers,
  Sparkle
} from 'lucide-react';
import { CLINIC_INFO, DENTIST_WORK_URL, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface OrthodonticsPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const OrthodonticsPage: React.FC<OrthodonticsPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [activeOptionTab, setActiveOptionTab] = useState<'metal' | 'aligners' | 'ceramic' | 'lingual' | 'lightforce'>('metal');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const orthoOptions = {
    metal: {
      title: 'Metal braces',
      badge: 'Most Reliable & Cost-Effective',
      description: 'Traditional metal braces remain one of the most reliable and cost-effective orthodontic systems available. Using high-grade stainless steel brackets and archwires, they apply consistent, controlled forces to gradually move teeth into their ideal positions. While often associated with younger patients, many adults continue to choose metal braces for their predictability and proven track record — especially for more complex alignment cases.',
      imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
      highlights: [
        'High-grade stainless steel durability',
        'Effective for even the most severe alignment & bite cases',
        'Customizable elastic band colors for kids & teens',
        'Most economical orthodontic option with 0% financing'
      ]
    },
    aligners: {
      title: 'Clear aligners (Invisalign®)',
      badge: 'Virtually Invisible & Removable',
      description: 'Custom-made, transparent medical-grade plastic trays that gently guide your teeth into proper alignment without wires or brackets. Virtually invisible, removable for eating, drinking, brushing, and flossing, clear aligners offer maximum discretion and convenience for active teens and working professionals.',
      imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
      highlights: [
        'Nearly invisible aesthetic profile',
        'Removable for meals, sports, and thorough oral hygiene',
        'Fewer emergency appointments with no broken wires',
        'Digital 3D preview of your entire smile transformation before starting'
      ]
    },
    ceramic: {
      title: 'Ceramic braces',
      badge: 'Subtle & Enamel-Matched',
      description: 'Aesthetic tooth-colored or translucent ceramic brackets that blend in naturally with your enamel. Ceramic braces provide the same formidable alignment power and mechanical control as traditional metal braces, but with a subtler, low-profile appearance preferred by adults and image-conscious teens.',
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
      highlights: [
        'Tooth-colored brackets blend seamlessly with enamel',
        'Stain-resistant modern ceramic material',
        'Full corrective power of fixed orthodontic systems',
        'Ideal balance between aesthetics and complex tooth movement'
      ]
    },
    lingual: {
      title: 'Lingual braces (Hidden braces)',
      badge: '100% Concealed on Back of Teeth',
      description: 'Custom-crafted brackets attached to the back (lingual) surfaces of your teeth, making them completely hidden from view when you smile, talk, or laugh. Ideal for patients who want the robust corrective power of fixed orthodontics without visible exterior hardware.',
      imageUrl: DENTIST_WORK_URL,
      highlights: [
        'Completely hidden behind teeth — 100% invisible from the front',
        'Custom-contoured to the precise shape of your inner teeth',
        'Constant 24/7 orthodontic force without compliance worries',
        'Favored by performers, professionals, and adults seeking complete discretion'
      ]
    },
    lightforce: {
      title: 'LightForce™ 3D-printed braces',
      badge: 'Next-Gen 3D Custom Ceramic',
      description: "The world's first fully personalized, 3D-printed ceramic bracket system. LightForce uses advanced digital scanning to create custom brackets contoured to the exact anatomy of each individual tooth, resulting in faster treatment times, fewer office visits, and unmatched precision.",
      imageUrl: OFFICE_TOUR_1,
      highlights: [
        '100% custom 3D-printed to your individual tooth morphology',
        'Up to 30–40% fewer office visits and adjustments needed',
        'Translucent ceramic design for sleek aesthetics',
        'Reduced treatment duration with computer-modeled tooth movement'
      ]
    }
  };

  const orthoFaqs = [
    {
      q: 'How long does orthodontic treatment take?',
      a: 'Treatment duration varies depending on the complexity of your case and the type of treatment. Most clear aligner cases take between 6 and 18 months. Traditional braces typically take 18 months to 2 years for more complex cases. Your dentist will give you a realistic timeline at your consultation after reviewing your X-rays and records.'
    },
    {
      q: 'How do I care for clear aligners?',
      a: 'Clean your aligners daily with lukewarm water and a soft toothbrush (never hot water, which can warp the plastic). Remove aligners before eating or drinking anything other than cold water, and brush your teeth before placing them back in to prevent plaque from being trapped against your enamel.'
    },
    {
      q: 'How much does orthodontic treatment cost in Calgary?',
      a: 'Orthodontic treatment in Alberta typically ranges from $3,500 to $8,500 depending on the severity of misalignment and whether braces or clear aligners are used. At Planet Dental, our all-inclusive pricing includes initial consultation, 3D digital scans, all visits, retainers, and even post-treatment whitening with 0% interest monthly financing and direct insurance billing.'
    },
    {
      q: 'Will braces or aligners affect my speech?',
      a: 'You may notice a minor lisp for the first few days as your tongue adapts to the brackets or aligner trays. This typically resolves completely within 48 to 72 hours as your mouth acclimates.'
    },
    {
      q: 'Is it too late to get orthodontic treatment as an adult?',
      a: 'Not at all! Healthy teeth can be moved at any age. In fact, over 30% of our orthodontic patients at Planet Dental are adults seeking discreet options like Invisalign® and ceramic braces.'
    }
  ];

  return (
    <div className="w-full bg-[#050e1f] text-white min-h-screen selection:bg-sky-400 selection:text-slate-900 pb-20">
      
      {/* 1. HERO SECTION matching Screenshot 1 */}
      <section className="relative px-2 sm:px-4 pt-2 pb-6 max-w-7xl mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-gray-800/80 bg-[#050e1f] shadow-2xl min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 pb-16 sm:pb-20">
          
          {/* Background image & deep gradient overlay matching Screenshot 1 */}
          <div className="absolute inset-0 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1800&q=80" 
              alt="Orthodontics and Braces in East Hills Calgary" 
              className="w-full h-full object-cover opacity-30 filter contrast-125"
            />
            {/* Deep cosmos gradient & vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050e1f] via-[#050e1f]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f] via-[#050e1f]/50 to-[#050e1f]/80" />
            
            {/* Ambient Cyan and Blue Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Top Hero Content */}
          <div className="relative z-10 max-w-2xl mt-8 sm:mt-12">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.12]">
              <span className="text-[#38bdf8]">Orthodontics</span> in <br />
              East Hills, Calgary
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 sm:mt-6 font-normal leading-relaxed max-w-xl">
              Braces and clear aligners for teens and adults — precise, personalized, and planned around your life.
            </p>

            {/* CTA Button matching screenshot */}
            <div className="mt-7 sm:mt-9">
              <button
                onClick={() => onOpenBooking('Orthodontics & Braces Free Consultation')}
                className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] font-bold px-6 sm:px-8 py-3.5 rounded-2xl text-sm sm:text-base transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] flex items-center gap-2.5 group cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <span>Book a Free Ortho Consultation</span>
                <div className="w-5 h-5 rounded-full bg-[#050e1f] text-[#38bdf8] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </button>
            </div>
          </div>

          {/* Bottom "Take a Tour" Scroll indicator pill matching screenshot */}
          <div className="relative z-10 flex flex-col items-center justify-center pt-8 pointer-events-auto">
            <button 
              onClick={() => {
                const el = document.getElementById('what-is-orthodontics');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <span className="text-[11px] font-semibold text-gray-300/80 tracking-wider">Take a Tour</span>
              <div className="w-9 h-14 rounded-full border-2 border-lime-300/80 bg-lime-300/10 flex items-center justify-center shadow-[0_0_15px_rgba(212,252,121,0.3)] group-hover:border-lime-200 transition-colors">
                <div className="w-1.5 h-3 rounded-full bg-[#050e1f] animate-bounce" />
              </div>
            </button>
          </div>

        </div>
      </section>

      {/* 2. "WHAT IS ORTHODONTICS?" SECTION matching Screenshot 1 */}
      <section 
        id="what-is-orthodontics"
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-12 overflow-hidden"
      >
        {/* Background ambient stars */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/3 left-10 w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse opacity-80" />
          <div className="absolute top-12 right-20 w-2 h-2 bg-white rounded-full opacity-60" />
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-sky-200 rounded-full opacity-70" />
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-sky-300 rounded-full opacity-70" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Framed Girl with Braces Photo + Planetary Orbs */}
          <div className="lg:col-span-6 relative">
            
            {/* Layered dark backing card behind */}
            <div className="absolute -top-6 -left-4 right-4 h-full bg-[#081733]/60 rounded-[36px] -z-10 border border-sky-950/80 transform -rotate-1 hidden sm:block" />
            <div className="absolute -bottom-6 -right-4 left-4 h-full bg-[#061126]/60 rounded-[36px] -z-10 border border-sky-950/80 transform rotate-1 hidden sm:block" />

            {/* Floating Planetary Accent Dots around image matching screenshot */}
            {/* Top-Right Big Lime Planet Orb */}
            <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#d4fc79] shadow-[0_0_25px_#d4fc79] border-2 border-white/60 z-20 animate-pulse" />
            
            {/* Mid-Left Cyan Orb */}
            <div className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#38bdf8] shadow-[0_0_20px_#38bdf8] border-2 border-white/50 z-20" />
            
            {/* Bottom-Left Small Lime Dot */}
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#d4fc79] shadow-[0_0_15px_#d4fc79] border border-white/60 z-20" />

            {/* Small Cyan Dot Mid-Right */}
            <div className="absolute top-1/3 -right-2 sm:-right-4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] z-20" />

            {/* Small Bottom-Center Lime Dot */}
            <div className="absolute -bottom-4 left-1/3 w-3 h-3 rounded-full bg-[#d4fc79] shadow-[0_0_8px_#d4fc79] z-20" />

            {/* Main Rounded Portrait Card */}
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-900/60 bg-[#08152e] shadow-2xl group">
              <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80" 
                  alt="Happy young patient smiling with orthodontic braces" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-sky-950/20" />
              </div>
            </div>
          </div>

          {/* Right Column: Copy matching screenshot */}
          <div className="lg:col-span-6 relative flex flex-col items-start text-left space-y-6">
            
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.18] tracking-tight">
              What is <span className="text-[#38bdf8]">orthodontics?</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-xl">
              <p>
                Orthodontics is the branch of dentistry focused on diagnosing, preventing, and correcting misaligned teeth and jaw irregularities. Beyond improving the appearance of your smile, orthodontic treatment enhances how your teeth function — making them easier to clean, reducing uneven wear, and helping to address bite problems that can cause jaw pain or headaches over time.
              </p>
              <p>
                At Planet Dental, we take a personalized approach to every orthodontic case. We use advanced digital technology and modern techniques to design treatment plans tailored to each patient's anatomy, goals, and timeline — whether you're 12 or 42.
              </p>
            </div>

            {/* Quick Action Pill */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('Orthodontics Initial Assessment')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#081b3b] border border-sky-500/40 text-sky-300 text-xs sm:text-sm font-semibold hover:bg-sky-500 hover:text-[#050e1f] transition-all duration-300 cursor-pointer shadow-md"
              >
                <span>Explore Treatment Options</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. "WHEN IS ORTHODONTIC TREATMENT RECOMMENDED?" SECTION matching Screenshot 2 */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-white leading-tight">
            When is orthodontic <span className="text-[#38bdf8]">treatment recommended?</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-3 font-normal">
            Orthodontics may be recommended for children, teens, or adults experiencing any of the following
          </p>
        </div>

        {/* 4 Cards matching screenshot layout & order: 03, 04, 01, 02 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Card 1: 03 - Overbite, underbite, or crossbite */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[280px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="inline-flex items-center justify-center px-3.5 py-1 rounded-xl bg-sky-500/20 border border-sky-400/40 text-white font-bold text-sm tracking-wider mb-6 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                03
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                Overbite, underbite, or crossbite
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                Bite misalignments where upper and lower teeth do not meet harmoniously, resulting in premature enamel wear, chewing fatigue, and joint strain.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

          {/* Card 2: 04 - Jaw pain, clicking, or discomfort when chewing */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[280px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="inline-flex items-center justify-center px-3.5 py-1 rounded-xl bg-sky-500/20 border border-sky-400/40 text-white font-bold text-sm tracking-wider mb-6 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                04
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                Jaw pain, clicking, or discomfort when chewing
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                Unbalanced bite forces can place chronic strain on the temporomandibular joint (TMJ), leading to popping sensations, headaches, and facial muscular tension.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

          {/* Card 3: 01 - Crowded, crooked, or overlapping teeth */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[280px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="inline-flex items-center justify-center px-3.5 py-1 rounded-xl bg-sky-500/20 border border-sky-400/40 text-white font-bold text-sm tracking-wider mb-6 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                01
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                Crowded, crooked, or overlapping teeth
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                Teeth that twist, overlap, or sit outside the dental arch create tight traps where plaque accumulates, significantly elevating the risk of cavities and gum disease.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

          {/* Card 4: 02 - Gaps or spaces between teeth */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[280px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="inline-flex items-center justify-center px-3.5 py-1 rounded-xl bg-sky-500/20 border border-sky-400/40 text-white font-bold text-sm tracking-wider mb-6 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                02
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                Gaps or spaces between teeth
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                Diastemas (spaces) caused by undersized teeth, missing teeth, or jaw discrepancies that leave gums exposed to food impact and disrupt smile harmony.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

        </div>

        {/* Centered text banner below cards matching screenshot 2 */}
        <div className="max-w-4xl mx-auto text-center mt-12 sm:mt-16 px-4">
          <p className="text-xs sm:text-sm md:text-[15px] text-gray-300/90 leading-relaxed font-normal">
            Modern orthodontic solutions are more discreet, efficient, and comfortable than ever — making treatment a realistic option at any stage of life.
          </p>
        </div>
      </section>

      {/* 4. "ORTHODONTIC OPTIONS WE OFFER" INTERACTIVE TABS SECTION matching Screenshot 2 */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-white leading-tight">
            Orthodontic <span className="text-[#38bdf8]">options we offer</span>
          </h2>
        </div>

        {/* Interactive Filter Pill Tabs matching Screenshot 2 */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-10 sm:mb-14">
          <button
            onClick={() => setActiveOptionTab('metal')}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
              activeOptionTab === 'metal'
                ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105'
                : 'bg-[#081a38] text-gray-300 border border-sky-900/60 hover:border-sky-500/50 hover:text-white'
            }`}
          >
            Metal Braces
          </button>

          <button
            onClick={() => setActiveOptionTab('aligners')}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
              activeOptionTab === 'aligners'
                ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105'
                : 'bg-[#081a38] text-gray-300 border border-sky-900/60 hover:border-sky-500/50 hover:text-white'
            }`}
          >
            Clear Aligners
          </button>

          <button
            onClick={() => setActiveOptionTab('ceramic')}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
              activeOptionTab === 'ceramic'
                ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105'
                : 'bg-[#081a38] text-gray-300 border border-sky-900/60 hover:border-sky-500/50 hover:text-white'
            }`}
          >
            Ceramic Braces
          </button>

          <button
            onClick={() => setActiveOptionTab('lingual')}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
              activeOptionTab === 'lingual'
                ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105'
                : 'bg-[#081a38] text-gray-300 border border-sky-900/60 hover:border-sky-500/50 hover:text-white'
            }`}
          >
            Lingual Braces (Hidden Braces)
          </button>

          <button
            onClick={() => setActiveOptionTab('lightforce')}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
              activeOptionTab === 'lightforce'
                ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105'
                : 'bg-[#081a38] text-gray-300 border border-sky-900/60 hover:border-sky-500/50 hover:text-white'
            }`}
          >
            LightForce™
          </button>
        </div>

        {/* Selected Tab Content Container matching Screenshot 2 */}
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/20 bg-gradient-to-b from-[#081b38]/90 via-[#06142c] to-[#040e20] p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Clinical Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[24px] overflow-hidden border border-sky-500/30 shadow-xl bg-[#040b17] group">
                <img 
                  src={orthoOptions[activeOptionTab].imageUrl} 
                  alt={orthoOptions[activeOptionTab].title}
                  className="w-full h-72 sm:h-96 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-[#050e1f]/90 backdrop-blur-md border border-sky-400/40 text-sky-300 font-bold text-xs">
                  {orthoOptions[activeOptionTab].badge}
                </div>
              </div>
            </div>

            {/* Right Column: Title & Detailed Description */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  {orthoOptions[activeOptionTab].title}
                </h3>
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 mt-3" />
              </div>

              <p className="text-xs sm:text-sm md:text-[15px] text-gray-300 leading-relaxed font-normal">
                {orthoOptions[activeOptionTab].description}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs sm:text-sm font-bold text-sky-300 uppercase tracking-wider">Key Advantages:</h4>
                <div className="space-y-2.5">
                  {orthoOptions[activeOptionTab].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  onClick={() => onOpenBooking(`Consultation for ${orthoOptions[activeOptionTab].title}`)}
                  className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <span>Book a Consultation for {orthoOptions[activeOptionTab].title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. "PHASE 1 TREATMENT — EARLY INTERCEPTIVE ORTHODONTICS" SECTION matching Screenshot 3 */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, intro, checklist, sub-paragraph */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.18] tracking-tight">
              Phase 1 treatment — <span className="text-[#38bdf8]">early interceptive orthodontics</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-[15px] text-gray-300 leading-relaxed font-normal">
              For some children, early orthodontic intervention can prevent more significant problems from developing as the jaw and teeth continue to grow. Phase 1 treatment is typically recommended between ages 6 and 10, when the jaw is still developing and more responsive to guidance.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-200">Early treatment may help to:</h4>
              <div className="space-y-3">
                {[
                  'Correct bite issues while the jaw is still growing',
                  'Create space for incoming adult teeth, reducing the need for extractions later',
                  'Address habits such as thumb-sucking that affect dental development',
                  'Improve breathing and airway function',
                  'Shorten or simplify future Phase 2 orthodontic treatment'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200 font-medium">
                    <div className="w-4 h-4 rounded-full bg-sky-500/20 text-[#38bdf8] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pt-2">
              Not every child needs early orthodontics — but an early assessment at Planet Dental can identify whether your child may benefit from intervention now or whether monitoring is the appropriate approach.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('Phase 1 Pediatric Ortho Assessment')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0b1d3d] border border-sky-500/30 text-sky-300 text-xs sm:text-sm font-bold hover:bg-[#38bdf8] hover:text-[#050e1f] transition-all duration-200 shadow-md cursor-pointer"
              >
                <span>Schedule a Pediatric Assessment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Framed Image of Dentist & Child + Planetary Neon Orbs */}
          <div className="lg:col-span-6 relative">
            
            {/* Layered dark backing card behind */}
            <div className="absolute -top-6 -left-4 right-4 h-full bg-[#081733]/60 rounded-[36px] -z-10 border border-sky-950/80 transform -rotate-1 hidden sm:block" />
            <div className="absolute -bottom-6 -right-4 left-4 h-full bg-[#061126]/60 rounded-[36px] -z-10 border border-sky-950/80 transform rotate-1 hidden sm:block" />

            {/* Floating Planetary Accent Dots around image */}
            <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#d4fc79] shadow-[0_0_25px_#d4fc79] border-2 border-white/60 z-20 animate-pulse" />
            <div className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#38bdf8] shadow-[0_0_20px_#38bdf8] border-2 border-white/50 z-20" />
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#d4fc79] shadow-[0_0_15px_#d4fc79] border border-white/60 z-20" />
            <div className="absolute top-2/3 -right-2 sm:-right-4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] z-20" />

            {/* Main Image Frame */}
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-900/60 bg-[#08152e] shadow-2xl group">
              <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80" 
                  alt="Early interceptive orthodontic pediatric dental consultation" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-sky-950/20" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. "IS CLEAR ALIGNER TREATMENT RIGHT FOR YOU?" SECTION matching Screenshot 3 */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-white leading-tight">
            Is clear aligner treatment <span className="text-[#38bdf8]">right for you?</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-3 font-normal">
            Here are a few factors worth considering before choosing clear aligners
          </p>
        </div>

        {/* 4 Cards matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Card 1: Complexity of your case */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[300px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-sky-600/20 border border-sky-400/40 flex items-center justify-center text-[#38bdf8] mb-6 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                Complexity of your case
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                Clear aligners are highly effective for mild to moderate crowding, spacing, and certain bite issues. More complex cases — significant rotations, severe bite discrepancies, or cases requiring tooth extraction — may be better suited to fixed braces.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

          {/* Card 2: Lifestyle and compliance */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[300px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-sky-600/20 border border-sky-400/40 flex items-center justify-center text-[#38bdf8] mb-6 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                Lifestyle and compliance
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                Clear aligners require consistent wear — typically 20–22 hours per day. The results you get depend directly on how consistently you wear them. If you have concerns about compliance (particularly for teenagers), discuss this with your dentist.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

          {/* Card 3: Budget */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[300px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-sky-600/20 border border-sky-400/40 flex items-center justify-center text-[#38bdf8] mb-6 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                Budget
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                Clear aligner treatment can be slightly more expensive than traditional braces depending on the complexity of the case. We offer flexible payment plans with no interest and no hidden fees to keep treatment comfortable for every budget.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

          {/* Card 4: For teenagers */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[300px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-sky-600/20 border border-sky-400/40 flex items-center justify-center text-[#38bdf8] mb-6 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                For teenagers
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                Clear aligners are available with discrete wear-time compliance indicators and replacement aligner programs designed specifically for teens, making them an excellent alternative to braces for self-motivated patients.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

        </div>
      </section>

      {/* 7. "BENEFITS OF ORTHODONTIC TREATMENT" (4 CARDS) matching Screenshot 4 */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Benefit 1: A more confident smile */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[260px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-sky-600/20 border border-sky-400/40 flex items-center justify-center text-[#38bdf8] mb-6 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                A more confident smile
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                A well-aligned smile has a meaningful impact on how people feel about their appearance — and how they present themselves socially and professionally.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

          {/* Benefit 2: Easier oral hygiene */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[260px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-sky-600/20 border border-sky-400/40 flex items-center justify-center text-[#38bdf8] mb-6 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                Easier oral hygiene
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                Straight teeth are significantly easier to brush and floss effectively. Crooked or crowded teeth create hiding places for plaque that are difficult to reach, increasing the risk of cavities and gum disease.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

          {/* Benefit 3: Better bite function */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[260px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-sky-600/20 border border-sky-400/40 flex items-center justify-center text-[#38bdf8] mb-6 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                Better bite function
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                Correcting alignment and bite issues reduces uneven wear on tooth surfaces, relieves pressure on the jaw joints, and makes chewing more comfortable and efficient.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

          {/* Benefit 4: Long-term oral health */}
          <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#081a38]/80 via-[#07162e]/90 to-[#040e20] p-6 sm:p-7 flex flex-col justify-between min-h-[260px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hover:border-sky-400/40 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400/30 to-sky-600/20 border border-sky-400/40 flex items-center justify-center text-[#38bdf8] mb-6 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                Long-term oral health
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300/90 leading-relaxed font-normal">
                The benefits of orthodontic treatment extend well beyond the duration of treatment itself — contributing to healthier teeth and gums for decades.
              </p>
            </div>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mt-6" />
          </div>

        </div>
      </section>

      {/* 8. "FREQUENTLY ASKED QUESTIONS" SECTION matching Screenshot 4 */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-white leading-tight">
            Frequently asked <span className="text-[#38bdf8]">questions</span>
          </h2>
        </div>

        {/* Accordion FAQ list matching Screenshot 4 */}
        <div className="space-y-4">
          {orthoFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-sky-500/20 bg-gradient-to-r from-[#081a38]/90 via-[#07162e]/90 to-[#050e1f] overflow-hidden shadow-lg transition-all duration-200 hover:border-sky-400/40"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0 text-[#38bdf8] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#38bdf8] text-[#050e1f]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300/90 leading-relaxed border-t border-sky-900/40 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. "YOUR CLEAREST PATH TO A STRAIGHTER SMILE." CTA & GALLERY matching Screenshot 5 */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-white leading-tight">
            Your clearest path to a <span className="text-[#38bdf8]">straighter smile.</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-[15px] text-gray-300 mt-3 font-normal leading-relaxed">
            Whether you're exploring options for yourself or your child, our team will help you understand what's possible and what makes sense for your situation — no pressure, just clarity. Book your free orthodontic consultation today.
          </p>
        </div>

        {/* 3 CTA Buttons matching Screenshot 5 */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <button
            onClick={() => onOpenBooking('Free Orthodontics Consultation')}
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
              }, 100);
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

        {/* 3-Column Clinic Photography Cards matching Screenshot 5 */}
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
