import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDown,
  ArrowUp,
  ShieldCheck, 
  Check, 
  Clock, 
  Heart,
  Calendar,
  AlertCircle,
  FileText,
  Sparkles,
  Smile,
  Zap,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { CLINIC_INFO, DENTIST_WORK_URL, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface RootCanalPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const RootCanalPage: React.FC<RootCanalPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const symptomsList = [
    {
      badge: '01',
      text: 'Severe, persistent toothache — often radiating to the jaw, face, or other teeth'
    },
    {
      badge: '02',
      text: 'Prolonged sensitivity to heat or cold that lingers after the source is removed'
    },
    {
      badge: '03',
      text: 'Swollen, tender gums around a specific tooth'
    },
    {
      badge: '04',
      text: 'A pimple or bump on the gum that may ooze — indicating a dental abscess'
    }
  ];

  const benefitsList = [
    {
      title: 'Saves your natural tooth:',
      text: 'The most important benefit. Keeping your natural tooth preserves your bite, prevents neighbouring teeth from shifting, and maintains the jawbone structure — outcomes that tooth extraction simply cannot replicate.'
    },
    {
      title: 'Eliminates pain and infection:',
      text: 'Root canal treatment removes the source of pain entirely — the infected pulp — and clears the infection. Patients typically feel significantly better within days of the procedure.'
    },
    {
      title: 'Prevents the infection from spreading:',
      text: 'An untreated pulp infection will eventually spread to the surrounding bone and adjacent teeth. Root canal treatment contains and resolves the infection before it can progress further.'
    },
    {
      title: 'More cost-effective long-term:',
      text: 'The alternative to a root canal is extraction. While extraction may seem simpler, replacing a missing tooth with an implant, bridge, or denture involves significantly greater cost and complexity. A root canal preserves what you already have.'
    },
    {
      title: "Maintains your smile's appearance:",
      text: 'After root canal treatment and crown placement, the tooth looks and functions completely normally, matching your surrounding teeth in color, luster, and shape.'
    }
  ];

  const stepsList = [
    {
      id: 1,
      title: 'Anaesthesia',
      description: 'Local anaesthesia is administered to completely numb the area. Sedation options are available for patients who experience dental anxiety. Once numb, the procedure is comfortable — most patients feel nothing more than mild pressure.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Dental dam placement',
      description: 'A small rubber dam is placed around the tooth to isolate it from saliva and maintain a clean working environment throughout the procedure.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Access and pulp removal',
      description: 'Your dentist creates a small access opening in the crown of the tooth and carefully removes the infected pulp from the pulp chamber and root canals.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Canal shaping & disinfection',
      description: 'The microscopic root canals are precisely measured with digital apex locators, disinfected with antibacterial solution, and gently shaped with flexible nickel-titanium files.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Sealing & crown restoration',
      description: 'The canals are sealed with biocompatible gutta-percha and sealer, followed by a durable tooth-colored crown to restore full chewing strength and prevent future fractures.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const faqs = [
    {
      q: 'Is root canal treatment painful?',
      a: 'The procedure is performed under local anaesthesia, making it comfortable for the vast majority of patients. Most people report that the treatment itself feels similar to having a filling placed. Sedation options — including nitrous oxide (laughing gas), oral sedation, and IV sedation — are available for patients who feel anxious. The pain associated with root canal is the infection before treatment; the procedure ends it.'
    },
    {
      q: 'How much does root canal treatment cost in Calgary?',
      a: 'In Alberta, root canal fees depend on which tooth is being treated (front teeth have 1 canal, premolars have 1-2, while molars have 3-4 canals) and whether a crown is required. We strictly adhere to the Alberta Dental Fee Guide, offer direct insurance billing, and provide flexible 0% interest financing so unexpected dental care remains affordable.'
    },
    {
      q: 'How long does a root canal take?',
      a: 'A standard root canal procedure generally takes between 60 to 90 minutes. Simple single-canal front teeth can often be completed in a single appointment, while complex multi-rooted molars may require two visits to ensure thorough canal disinfection before permanent restoration.'
    },
    {
      q: "What happens if I don't get a root canal?",
      a: 'An infected tooth nerve will not heal on its own. Left untreated, bacteria spread into the surrounding jawbone, forming painful abscesses, bone erosion, facial swelling, and potentially life-threatening systemic infection. Eventually, the tooth will be lost and require extraction.'
    },
    {
      q: 'How long will the treated tooth last?',
      a: 'With proper home care, regular dental checkups, and a quality custom crown to protect against biting forces, a root-canal-treated tooth can last 10 to 15 years, and often a lifetime.'
    }
  ];

  const recoveryChecklist = [
    'Avoid biting hard or chewing on the treated side for 24 hours after the procedure',
    'Eat soft foods and avoid very hot or very cold items until soreness subsides',
    'Take over-the-counter pain relief (ibuprofen or acetaminophen) as needed',
    'Brush gently around the area with a soft-bristled brush',
    'Attend your follow-up appointment so we can confirm healing is progressing correctly'
  ];

  const scrollToWhatIsRCT = () => {
    const el = document.getElementById('what-is-rct');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050e1f] text-white">
      {/* 1. HERO SECTION (Screenshot 1) */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden">
        {/* Background Clinical Image with Dark Vignette */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80" 
            alt="Root Canal Treatment at Planet Dental Calgary"
            className="w-full h-full object-cover object-center brightness-[0.42] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e1f] via-[#050e1f]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f] via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-12 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.14] tracking-tight mb-4">
              <span className="text-[#38bdf8]">Root Canal Treatment</span>
              <br />
              <span className="text-white">in East Hills, Calgary</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Save your natural tooth, relieve the pain, and get back to your life — root canals are far more straightforward than their reputation suggests.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenBooking('Root Canal Consultation & Assessment')}
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
            onClick={scrollToWhatIsRCT}
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

      {/* 2. WHAT IS A ROOT CANAL TREATMENT? (Screenshot 1) */}
      <section id="what-is-rct" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Cosmos background stars & celestial dots */}
        <div className="absolute top-1/4 left-8 w-2 h-2 rounded-full bg-[#38bdf8]/60 blur-[1px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-[#38bdf8]/40 blur-[1px] pointer-events-none" />
        <div className="absolute bottom-16 right-1/4 w-2.5 h-2.5 rounded-full bg-[#bef264]/70 blur-[1px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with floating accent dots */}
          <div className="lg:col-span-5 relative">
            {/* Floating accent dots around the card */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#d9f99d] shadow-[0_0_15px_rgba(217,249,157,0.8)] z-10 pointer-events-none" />
            <div className="absolute top-1/2 -left-4 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.8)] z-10 pointer-events-none" />
            <div className="absolute -bottom-3 left-1/4 w-3.5 h-3.5 rounded-full bg-[#d9f99d] shadow-[0_0_10px_rgba(217,249,157,0.8)] z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 -right-2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-sky-500/25 shadow-[0_0_35px_rgba(56,189,248,0.2)] bg-[#091e3a]/40">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80" 
                alt="Root Canal Procedure at Planet Dental"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              What is a <span className="text-[#38bdf8]">root canal treatment?</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Root canal treatment (RCT) is a procedure to treat a tooth infection that has reached the pulp — the innermost layer of the tooth containing nerves and blood vessels. When decay, a crack, or trauma allows bacteria to penetrate this deep into the tooth, the pulp becomes inflamed or infected. The result is often significant pain, sensitivity, and swelling.
              </p>

              <p>
                During root canal treatment, the infected pulp is carefully removed, the canals are cleaned and shaped, and the tooth is sealed and typically restored with a crown. The procedure saves the natural tooth — preserving its function and appearance, and eliminating the infection entirely.
              </p>

              <p>
                Root canals have an undeserved reputation for being painful. In reality, the procedure is performed under local anaesthesia and is no more uncomfortable than having a filling placed. What patients actually experience is relief — because it's the infection causing the pain, and the root canal ends it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNS YOU MAY NEED ROOT CANAL TREATMENT (Screenshot 2) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        {/* Background nebula subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Signs you may need <span className="text-[#38bdf8]">root canal treatment</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            The following symptoms may indicate that an infection has reached the tooth pulp and that root canal treatment could be needed
          </p>
        </div>

        {/* 4 Numbered Symptom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {symptomsList.map((symptom, idx) => (
            <div 
              key={idx}
              className="bg-[#091e3a]/60 backdrop-blur-md rounded-2xl p-6 border border-sky-500/20 hover:border-sky-400/50 hover:bg-[#0c2648]/80 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.25)] min-h-[190px]"
            >
              <div>
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-[#0284c7]/30 border border-sky-400/40 text-[#38bdf8] text-xs font-bold mb-5 tracking-wider">
                  {symptom.badge}
                </div>
                <p className="text-gray-200 text-sm sm:text-[15px] font-normal leading-relaxed group-hover:text-white transition-colors">
                  {symptom.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtext warning / guidance */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed italic">
            If you're experiencing any of these symptoms, it's important to seek care promptly. A dental infection will not resolve on its own and can spread to surrounding teeth, the jaw, and in serious cases, beyond the oral cavity.
          </p>
        </div>
      </section>

      {/* 4. BENEFITS OF ROOT CANAL TREATMENT (Screenshot 2) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background stars */}
        <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full bg-[#38bdf8]/50 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-[#bef264]/60 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Vertical Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Benefits of <span className="text-[#38bdf8]">root canal treatment</span>
            </h2>

            <div className="relative pl-7 sm:pl-8 space-y-6 sm:space-y-7 before:absolute before:left-2.5 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:border-l-2 before:border-dotted before:border-sky-400/40">
              {benefitsList.map((benefit, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing timeline dot */}
                  <div className="absolute -left-7 sm:-left-8 top-1.5 w-3 h-3 rounded-full bg-[#38bdf8] border-2 border-[#050e1f] shadow-[0_0_8px_#38bdf8] group-hover:scale-125 transition-transform" />
                  
                  <p className="text-xs sm:text-sm md:text-[15px] text-gray-300 leading-relaxed">
                    <strong className="text-white font-semibold">{benefit.title} </strong>
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image with floating accent dots */}
          <div className="lg:col-span-5 relative">
            {/* Floating accent dots around the card */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#d9f99d] shadow-[0_0_15px_rgba(217,249,157,0.8)] z-10 pointer-events-none" />
            <div className="absolute top-1/2 -left-4 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.8)] z-10 pointer-events-none" />
            <div className="absolute -bottom-3 right-1/4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-sky-500/25 shadow-[0_0_35px_rgba(56,189,248,0.2)] bg-[#091e3a]/40">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80" 
                alt="Patient smiling after gentle dental examination"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT TO EXPECT DURING ROOT CANAL TREATMENT (Screenshot 3) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            What to expect during <span className="text-[#38bdf8]">root canal treatment</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Root canal treatment typically takes one to two appointments, depending on the complexity of the case. Here is a step-by-step overview:
          </p>
        </div>

        {/* Horizontal Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stepsList.map((step) => (
            <div 
              key={step.id}
              className="bg-[#091e3a]/60 backdrop-blur-md rounded-2xl border border-sky-500/20 overflow-hidden hover:border-sky-400/50 hover:bg-[#0c2648]/80 transition-all duration-300 flex flex-col group shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            >
              {/* Card Image */}
              <div className="relative h-44 w-full overflow-hidden bg-[#050e1f]">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091e3a] via-transparent to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. AFTER YOUR ROOT CANAL — WHAT TO EXPECT (Screenshot 3 & 4) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background cosmos dots */}
        <div className="absolute top-1/4 right-20 w-3 h-3 rounded-full bg-[#d9f99d] pointer-events-none" />
        <div className="absolute bottom-1/3 left-12 w-2 h-2 rounded-full bg-[#38bdf8] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image of patient consulting dentist */}
          <div className="lg:col-span-5 relative">
            {/* Floating accent dots */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#d9f99d] shadow-[0_0_15px_rgba(217,249,157,0.8)] z-10 pointer-events-none" />
            <div className="absolute top-1/2 -left-4 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.8)] z-10 pointer-events-none" />
            <div className="absolute -bottom-3 left-1/3 w-3 h-3 rounded-full bg-[#d9f99d] pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-sky-500/25 shadow-[0_0_35px_rgba(56,189,248,0.2)] bg-[#091e3a]/40">
              <img 
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80" 
                alt="Patient consultation after root canal recovery"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Recovery Checklist Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              After your root canal — <span className="text-[#38bdf8]">what to expect</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Mild soreness or sensitivity in the treated area for a few days after the procedure is normal and expected. Here's how to care for your tooth during recovery:
            </p>

            <div className="space-y-3.5">
              {recoveryChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0284c7]/30 border border-sky-400/50 flex items-center justify-center shrink-0 mt-0.5 text-[#38bdf8]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-[15px] text-gray-200 leading-relaxed font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2">
              Most patients return to normal activities the same day or the day after treatment. If you experience increasing rather than decreasing pain, significant swelling, or other concerns, contact us and we'll see you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (Screenshot 4) */}
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

      {/* 8. DON'T LET A TOOTH INFECTION GET WORSE & CLINIC GALLERY (Screenshot 5) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Don't let a <span className="text-[#38bdf8]">tooth infection</span> get worse
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            If you're experiencing tooth pain, swelling, or sensitivity that hasn't resolved, come in and let us take a look. Root canal treatment is one of the most straightforward ways to save a tooth — and to stop the pain. Book your appointment today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => onOpenBooking('Root Canal Treatment Appointment')}
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

        {/* 3 Clinic Gallery Photography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={OFFICE_TOUR_1} 
              alt="Planet Dental Modern Clinic Reception & Lounge"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={OFFICE_TOUR_2} 
              alt="Planet Dental Futuristic Arcade and Treatment Hallway"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={DENTIST_WORK_URL} 
              alt="Planet Dental Advanced Dental Operatory Suite"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
};
