import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDown,
  ArrowUp,
  Check, 
  Clock, 
  Sparkles,
  Smile,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { CLINIC_INFO, DENTIST_WORK_URL, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface FillingsPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

type MaterialTab = 'composite' | 'amalgam' | 'ceramic' | 'ionomer';

export const FillingsPage: React.FC<FillingsPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [activeMaterial, setActiveMaterial] = useState<MaterialTab>('composite');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const materialData: Record<MaterialTab, {
    title: string;
    description: string;
    image: string;
    features: string[];
  }> = {
    composite: {
      title: 'Tooth coloured composite resin (our standard)',
      description: 'Composite resin is our material of choice for most fillings. It is matched to the exact shade of your tooth, bonds directly to the tooth structure, and requires less removal of healthy enamel than metal alternatives. The result is a restoration that is both functional and effectively invisible.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Colour-matched to blend seamlessly with your natural tooth',
        'Bonds to tooth structure, adding strength',
        'Conservative—requires less enamel removal than amalgam',
        'Suitable for front and back teeth'
      ]
    },
    amalgam: {
      title: 'Silver amalgam (traditional metal)',
      description: 'Amalgam has been trusted for generations as a durable and cost-effective restorative material. Made of an alloy including silver, tin, and copper, it offers exceptional resistance to heavy chewing forces on posterior molars.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
      features: [
        'High compressive strength under heavy biting pressure',
        'Proven long-term clinical durability',
        'Cost-effective option for posterior teeth',
        'Noticeable silver-metallic aesthetic'
      ]
    },
    ceramic: {
      title: 'Ceramic & porcelain fillings (inlays & onlays)',
      description: 'Ceramic restorations are custom-crafted from high-strength medical porcelain to replicate natural tooth contours and translucency. They offer outstanding stain resistance and long-lasting structural reinforcement.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Superior aesthetic translucency matching natural enamel',
        'Highly resistant to surface staining from coffee and tea',
        'Exceptional longevity and bond durability',
        'Ideal for larger cavities requiring inlay or onlay support'
      ]
    },
    ionomer: {
      title: 'Glass ionomer cements',
      description: 'Glass ionomer fillings are formed from acrylic and a component of glass that chemically bonds to enamel while continuously releasing beneficial fluoride to protect vulnerable margins.',
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Continuous fluoride release protects against recurrent decay',
        'Gentle and biocompatible with delicate gum tissue',
        'Ideal for gumline and root surface cavities',
        'Excellent option for pediatric and transitional restorations'
      ]
    }
  };

  const benefitsList = [
    {
      title: 'Prevents further decay:',
      text: 'Removing the decayed portion and sealing the tooth stops the cavity from growing and prevents the infection from spreading deeper into the tooth.'
    },
    {
      title: 'Restores tooth structure and strength:',
      text: 'Fillings rebuild the shape and integrity of the tooth, preventing the hollow, weakened structure from cracking or fracturing under normal biting forces.'
    },
    {
      title: 'Relieves sensitivity and discomfort:',
      text: 'Exposed decay or dentinal tubules cause sensitivity to temperature and pressure. Filling the cavity eliminates the exposure and restores comfortable function.'
    },
    {
      title: 'Natural appearance:',
      text: "Our tooth-coloured fillings are colour-matched to your existing teeth—so unless you tell someone, they'll never know you had a cavity."
    },
    {
      title: 'Protects against future cavities in the same area:',
      text: 'Sealed surfaces give bacteria nowhere to accumulate—reducing the risk of recurrence in the same spot.'
    }
  ];

  const stepsList = [
    'Your dentist takes a digital X-ray to assess the extent of the decay and confirm the best treatment approach.',
    'The area is numbed with local anaesthesia—most patients feel nothing more than a brief, mild pressure.',
    'The decayed portion of the tooth is carefully removed using a dental drill.',
    'The tooth is cleaned and prepared for the filling material.',
    'Composite resin is applied in layers and cured instantly using a specialized blue light.',
    'The bite is checked and the filling is shaped and polished to feel completely natural.'
  ];

  const faqs = [
    {
      q: 'What should I avoid after getting a dental filling?',
      a: 'For the first 24 hours, avoid chewing hard or sticky foods on the side where the filling was placed—this gives the material time to fully set and reduces the risk of dislodging it. If your filling is composite resin, it sets immediately with the curing light, so recovery is fast. Some mild sensitivity to temperature is normal for a few days.'
    },
    {
      q: 'What should I tell my dentist before getting a filling?',
      a: 'Inform your dentist of any medical conditions, allergies (especially to anesthetics, latex, or specific dental materials), medications you are currently taking, if you are pregnant, or if you experience dental anxiety so we can ensure optimal comfort and safety.'
    },
    {
      q: 'How long does a dental filling last?',
      a: 'High-quality tooth-coloured composite resin fillings typically last between 7 to 10 years or longer with good oral hygiene, regular cleanings, and avoiding habits like chewing ice or clenching without a nightguard.'
    },
    {
      q: 'I have an old silver filling—should I replace it?',
      a: 'If your silver amalgam filling is structurally sound and there is no decay beneath it, it generally does not need immediate replacement. However, if it shows signs of cracking, recurrent decay, leakage, or you prefer a seamless, natural smile, we can safely replace it with tooth-coloured composite resin.'
    }
  ];

  const scrollToWhatAreFillings = () => {
    const el = document.getElementById('what-are-fillings');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentMaterial = materialData[activeMaterial];

  return (
    <div className="min-h-screen bg-[#050e1f] text-white">
      {/* 1. HERO SECTION (Screenshot 1) */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden">
        {/* Background Dental Image with Dark Vignette */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2000&q=80" 
            alt="Tooth Coloured Dental Fillings at Planet Dental Calgary"
            className="w-full h-full object-cover object-center brightness-[0.42] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e1f] via-[#050e1f]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f] via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-12 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.14] tracking-tight mb-4">
              <span className="text-[#38bdf8]">Tooth Coloured Dental Fillings</span>
              <br />
              <span className="text-white">in East Hills, Calgary</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Repair cavities cleanly and discreetly—with fillings matched to the natural shade of your teeth.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenBooking('Tooth Coloured Dental Fillings Consultation')}
                className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.4)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Take a Tour Scroll Indicator */}
        <div className="w-full flex justify-center pb-8 pt-4">
          <button
            onClick={scrollToWhatAreFillings}
            className="flex flex-col items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="text-xs uppercase tracking-widest text-gray-300 font-medium group-hover:text-[#38bdf8] transition-colors">
              Take a Tour
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1 group-hover:border-[#38bdf8] transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-[#38bdf8] animate-bounce" />
            </div>
          </button>
        </div>
      </section>

      {/* 2. WHAT ARE DENTAL FILLINGS? (Screenshot 1) */}
      <section id="what-are-fillings" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background stars & celestial dots */}
        <div className="absolute top-1/4 left-10 w-2.5 h-2.5 rounded-full bg-[#38bdf8]/60 blur-[1px] pointer-events-none" />
        <div className="absolute bottom-16 right-16 w-3 h-3 rounded-full bg-[#d9f99d]/70 blur-[1px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with floating accent dots */}
          <div className="lg:col-span-5 relative">
            {/* Layered background card */}
            <div className="absolute -inset-2 sm:-inset-3 bg-[#091e3a]/40 rounded-3xl -z-10 transform -rotate-1 border border-sky-500/10" />

            {/* Floating accent dots */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#d9f99d] shadow-[0_0_15px_rgba(217,249,157,0.8)] z-10 pointer-events-none" />
            <div className="absolute top-1/2 -left-4 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.8)] z-10 pointer-events-none" />
            <div className="absolute -bottom-3 left-1/4 w-3.5 h-3.5 rounded-full bg-[#d9f99d] shadow-[0_0_10px_rgba(217,249,157,0.8)] z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 -right-2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-sky-500/25 shadow-[0_0_35px_rgba(56,189,248,0.2)] bg-[#091e3a]/40">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80" 
                alt="Dentist placing tooth-coloured dental filling with curing light"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              What are <span className="text-[#38bdf8]">dental fillings?</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Dental fillings restore teeth that have been damaged by decay—removing the infected or compromised portion of the tooth and sealing the cavity with a durable material that rebuilds its structure and prevents further deterioration.
              </p>

              <p>
                A small cavity caught early is one of the most straightforward problems in dentistry to treat. Left alone, it grows—and what starts as a simple filling can eventually require a root canal, crown, or extraction. The sooner it's addressed, the simpler and more cost-effective the solution.
              </p>

              <p>
                At Planet Dental, we primarily use tooth-coloured composite resin fillings—matched precisely to the shade of your natural teeth, so repairs are virtually invisible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TYPES OF FILLING MATERIALS (Screenshot 2) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        {/* Cosmos background atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Types of <span className="text-[#38bdf8]">filling materials</span>
          </h2>

          {/* Material Tab Pills matching screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            <button
              onClick={() => setActiveMaterial('composite')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeMaterial === 'composite'
                  ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_18px_rgba(56,189,248,0.5)] scale-[1.02]'
                  : 'bg-[#091e3a]/70 hover:bg-[#0c2648] text-gray-300 border border-sky-500/20'
              }`}
            >
              TOOTH-COLOURED COMPOSITE RESIN
            </button>

            <button
              onClick={() => setActiveMaterial('amalgam')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeMaterial === 'amalgam'
                  ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_18px_rgba(56,189,248,0.5)] scale-[1.02]'
                  : 'bg-[#091e3a]/70 hover:bg-[#0c2648] text-gray-300 border border-sky-500/20'
              }`}
            >
              SILVER AMALGAM
            </button>

            <button
              onClick={() => setActiveMaterial('ceramic')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeMaterial === 'ceramic'
                  ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_18px_rgba(56,189,248,0.5)] scale-[1.02]'
                  : 'bg-[#091e3a]/70 hover:bg-[#0c2648] text-gray-300 border border-sky-500/20'
              }`}
            >
              CERAMIC FILLINGS
            </button>

            <button
              onClick={() => setActiveMaterial('ionomer')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeMaterial === 'ionomer'
                  ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_18px_rgba(56,189,248,0.5)] scale-[1.02]'
                  : 'bg-[#091e3a]/70 hover:bg-[#0c2648] text-gray-300 border border-sky-500/20'
              }`}
            >
              GLASS IONOMER
            </button>
          </div>
        </div>

        {/* Large Showcase Card matching Screenshot 2 */}
        <div className="bg-[#091e3a]/60 backdrop-blur-md rounded-3xl border border-sky-500/20 shadow-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 3D Dental Tooth Illustration */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-sky-500/25 bg-[#050e1f]/80 shadow-lg">
              <img 
                src={currentMaterial.image} 
                alt={currentMaterial.title}
                className="w-full h-[300px] sm:h-[360px] object-cover object-center"
              />
            </div>

            {/* Right Column: Title, Description, and Connected Bullet Points */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentMaterial.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {currentMaterial.description}
              </p>

              {/* Connected Dots List */}
              <div className="space-y-4 pt-2">
                {currentMaterial.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 relative">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.8)] mt-1 shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slider Indicator Line */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <div className={`h-1.5 rounded-full transition-all duration-300 ${activeMaterial === 'composite' ? 'w-8 bg-[#38bdf8]' : 'w-2 bg-gray-600'}`} />
          <div className={`h-1.5 rounded-full transition-all duration-300 ${activeMaterial === 'amalgam' ? 'w-8 bg-[#38bdf8]' : 'w-2 bg-gray-600'}`} />
          <div className={`h-1.5 rounded-full transition-all duration-300 ${activeMaterial === 'ceramic' ? 'w-8 bg-[#38bdf8]' : 'w-2 bg-gray-600'}`} />
          <div className={`h-1.5 rounded-full transition-all duration-300 ${activeMaterial === 'ionomer' ? 'w-8 bg-[#38bdf8]' : 'w-2 bg-gray-600'}`} />
        </div>
      </section>

      {/* 4. BENEFITS OF GETTING A FILLING AT PLANET DENTAL (Screenshots 2 & 3) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Celestial Dots */}
        <div className="absolute top-1/3 left-12 w-2 h-2 rounded-full bg-[#38bdf8]/50 pointer-events-none" />
        <div className="absolute bottom-16 right-20 w-3 h-3 rounded-full bg-[#d9f99d]/60 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Timeline List */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                Benefits of getting a <span className="text-[#38bdf8]">filling at Planet Dental</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Treating a cavity early—rather than waiting—makes a significant difference in the complexity and cost of care:
              </p>
            </div>

            <div className="relative pl-6 space-y-6 pt-2 border-l border-sky-500/30">
              {benefitsList.map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                    <strong className="text-white font-bold">{item.title} </strong>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image with floating accent dots */}
          <div className="lg:col-span-5 relative">
            {/* Layered subtle background card */}
            <div className="absolute -inset-2 sm:-inset-3 bg-[#091e3a]/40 rounded-3xl -z-10 transform rotate-1 border border-sky-500/10" />

            {/* Floating accent dots */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#d9f99d] shadow-[0_0_15px_rgba(217,249,157,0.8)] z-10 pointer-events-none" />
            <div className="absolute top-1/2 -left-4 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.8)] z-10 pointer-events-none" />
            <div className="absolute -bottom-3 right-1/4 w-3.5 h-3.5 rounded-full bg-[#d9f99d] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-sky-500/25 shadow-[0_0_35px_rgba(56,189,248,0.2)] bg-[#091e3a]/40">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80" 
                alt="Close up examination of tooth filling restoration"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IS A TOOTH FILLING DONE? (Screenshot 3) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with floating accent dots */}
          <div className="lg:col-span-5 relative">
            {/* Layered subtle background card */}
            <div className="absolute -inset-2 sm:-inset-3 bg-[#091e3a]/40 rounded-3xl -z-10 transform -rotate-1 border border-sky-500/10" />

            {/* Floating accent dots */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#d9f99d] shadow-[0_0_15px_rgba(217,249,157,0.8)] z-10 pointer-events-none" />
            <div className="absolute top-1/2 -left-4 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.8)] z-10 pointer-events-none" />
            <div className="absolute -bottom-3 left-1/4 w-3.5 h-3.5 rounded-full bg-[#d9f99d] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-sky-500/25 shadow-[0_0_35px_rgba(56,189,248,0.2)] bg-[#091e3a]/40">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
                alt="Gentle filling procedure at Planet Dental"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Steps & Procedure Explanation */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                How is a <span className="text-[#38bdf8]">tooth filling</span> done?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Getting a filling at Planet Dental is a straightforward, single-appointment procedure for most patients:
              </p>
            </div>

            <div className="space-y-3.5 pt-1">
              {stepsList.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0284c7]/30 border border-sky-400/50 flex items-center justify-center shrink-0 mt-0.5 text-[#38bdf8]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pt-2 border-t border-sky-500/10">
              The whole process typically takes 30–60 minutes depending on the size and location of the cavity. Most patients return to normal activities immediately afterward.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (Screenshot 4) */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frequently asked <span className="text-[#38bdf8]">questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-[#091e3a]/60 backdrop-blur-md rounded-2xl border border-sky-500/20 overflow-hidden transition-all duration-300 hover:border-sky-400/40"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#38bdf8] text-[#050e1f] flex items-center justify-center shrink-0 transition-transform duration-300 shadow-[0_0_10px_rgba(56,189,248,0.4)]">
                    {isOpen ? (
                      <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed border-t border-sky-500/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. DON'T WAIT FOR A SMALL CAVITY & CLINIC GALLERY (Screenshots 4 & 5) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Don't wait for a small cavity to <span className="text-[#38bdf8]">become a bigger problem</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            A simple filling done early is straightforward, quick, and affordable. If you've been putting off that nagging sensitivity or know you have a cavity, come in—we'll take care of it with minimal fuss and maximum comfort.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => onOpenBooking('Tooth Coloured Dental Filling Appointment')}
              className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.4)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Book an Appointment</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Location Badges matching screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="px-4 py-1.5 rounded-full bg-[#091e3a] border border-sky-400/30 text-xs font-semibold text-gray-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              <span>Planet Dental</span>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#091e3a] border border-sky-400/30 text-xs font-semibold text-gray-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              <span>East Hills, Calgary</span>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#091e3a] border border-sky-400/30 text-xs font-semibold text-gray-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              <span>Open 7 Days a Week</span>
            </div>
          </div>
        </div>

        {/* 3 Clinic Gallery Photography Cards matching Screenshot 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={OFFICE_TOUR_1} 
              alt="Planet Dental Modern Clinic Reception & Waiting Lounge"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={OFFICE_TOUR_2} 
              alt="Planet Dental Futuristic Space Hallway and Arcade Room"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={DENTIST_WORK_URL} 
              alt="Planet Dental High-Tech Dental Operatory Suite"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
};
