import React, { useState, useRef } from 'react';
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
  Phone,
  FileText,
  Sparkles,
  Smile,
  Zap,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { CLINIC_INFO, DENTIST_WORK_URL, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface EmergencyDentalPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const EmergencyDentalPage: React.FC<EmergencyDentalPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const commonEmergencies = [
    {
      id: 'soft-tissue',
      title: 'Soft tissue injury',
      description: "Cuts or lacerations to the cheeks, tongue, or lips can bleed significantly due to the rich blood supply in the oral cavity. Apply gentle pressure with a clean cloth or gauze while you make your way in. We'll examine the extent of the injury and determine whether sutures or other treatment is needed.",
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'abscess',
      title: 'Dental abscess or swelling',
      description: "Unexplained swelling in the mouth, jaw, or face particularly when accompanied by pain, fever, or difficulty swallowing—should be treated as an urgent dental emergency. An abscess is an active infection that will not resolve on its own and can spread if left untreated. We'll assess and drain the infection, prescribe antibiotics if needed, and outline the next steps in treatment",
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'toothache',
      title: 'Severe toothache',
      description: "A toothache that has escalated to severe or persistent pain is often a signal of an underlying infection, an abscess, a fracture, or significant decay that has reached the nerve. We'll take X-rays, identify the source, and discuss your treatment options which may include a filling, root canal treatment, or extraction, depending on the extent of the problem.",
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'broken-tooth',
      title: 'Broken, cracked, or chipped tooth',
      description: "Accidents, sports injuries, or biting down on hard foods can fracture teeth. Prompt care protects exposed nerves and prevents bacteria from invading the pulp. We restore broken teeth using aesthetic bonding, precision crowns, or veneers.",
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'knocked-out',
      title: 'Knocked-out tooth (Avulsion)',
      description: "A knocked-out tooth is a critical emergency. If re-implanted within 30 to 60 minutes, the tooth has the highest chance of surviving. Pick it up by the crown, keep it moist in cold milk, and come directly to our clinic.",
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const preventionChecklist = [
    'Maintain regular dental check-ups so problems are caught before they become urgent',
    'Brush twice daily with fluoride toothpaste and floss daily',
    'Wear a custom mouthguard during contact sports',
    'Avoid using your teeth as tools or biting hard objects like ice or packaging',
    'Address tooth sensitivity or minor discomfort early—don\'t wait for it to escalate'
  ];

  const faqs = [
    {
      q: 'What counts as a dental emergency?',
      a: "Severe or sudden toothache, a knocked-out or fractured tooth, dental abscesses or unexplained swelling, gum bleeding that won't stop, a lost crown or filling causing pain or sensitivity, and broken dentures can all be dental emergencies. If you're in pain or uncertain, call us—we'll help you assess the situation and determine the right course of action."
    },
    {
      q: 'How much does emergency dental treatment cost in Calgary?',
      a: 'Emergency dental fees in Alberta follow the standard Alberta Dental Fee Guide. Most dental insurance plans cover emergency exams, pain relief diagnostics, and digital X-rays. We provide direct insurance billing to minimize out-of-pocket stress, plus 0% interest flexible payment plans so cost never prevents timely care.'
    },
    {
      q: 'How can I manage the pain until I get to the dentist?',
      a: 'To manage pain before reaching our clinic: apply a cold compress to the outside of your cheek in 15-minute intervals to reduce swelling, take over-the-counter pain relievers such as ibuprofen or acetaminophen as directed, gently rinse your mouth with warm salt water, and avoid extremely hot, cold, or hard foods.'
    },
    {
      q: 'What should I do if a tooth is completely knocked out?',
      a: 'Pick up the tooth by the crown (the white chewing surface), NEVER touch the root. If it is dirty, rinse it very gently in milk or saline without scrubbing. Try to gently slip the tooth back into its socket if possible. If not, store it in a container of cold milk or saliva and get to Planet Dental immediately—treatment within 30 to 60 minutes gives the highest chance of saving the tooth.'
    },
    {
      q: 'Do you accept walk-ins for dental emergencies?',
      a: 'Yes, walk-ins are welcomed and we reserve emergency slots every day, 7 days a week. Calling ahead helps our clinical team prepare the operatory for your arrival so you can receive immediate attention and relief.'
    }
  ];

  const scrollToWhatIsEmergency = () => {
    const el = document.getElementById('what-is-emergency');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050e1f] text-white">
      {/* 1. HERO SECTION (Screenshot 1) */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=2000&q=80" 
            alt="Emergency Dental Care in East Hills, Calgary"
            className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e1f] via-[#050e1f]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f] via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-12 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.14] tracking-tight mb-4">
              <span className="text-[#38bdf8]">Emergency Dental Care</span>
              <br />
              <span className="text-white">in East Hills, Calgary</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Fast relief. Open 7 days a week.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenBooking('Emergency Dental Care Consultation')}
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
            onClick={scrollToWhatIsEmergency}
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

      {/* 2. WHAT IS A DENTAL EMERGENCY? (Screenshot 1) */}
      <section id="what-is-emergency" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Cosmos background stars & celestial dots */}
        <div className="absolute top-1/4 left-8 w-2 h-2 rounded-full bg-[#38bdf8]/60 blur-[1px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-[#38bdf8]/40 blur-[1px] pointer-events-none" />
        <div className="absolute bottom-16 right-1/4 w-2.5 h-2.5 rounded-full bg-[#bef264]/70 blur-[1px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with floating accent dots */}
          <div className="lg:col-span-5 relative">
            {/* Layered subtle background card */}
            <div className="absolute -inset-2 sm:-inset-3 bg-[#091e3a]/40 rounded-3xl -z-10 transform -rotate-1 border border-sky-500/10" />

            {/* Floating accent dots around the card */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#d9f99d] shadow-[0_0_15px_rgba(217,249,157,0.8)] z-10 pointer-events-none" />
            <div className="absolute top-1/2 -left-4 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.8)] z-10 pointer-events-none" />
            <div className="absolute -bottom-3 left-1/4 w-3.5 h-3.5 rounded-full bg-[#d9f99d] shadow-[0_0_10px_rgba(217,249,157,0.8)] z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 -right-2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-sky-500/25 shadow-[0_0_35px_rgba(56,189,248,0.2)] bg-[#091e3a]/40">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
                alt="Emergency dental treatment at Planet Dental"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              What is a <span className="text-[#38bdf8]">dental emergency?</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                A dental emergency is any situation involving sudden pain, trauma, swelling, or damage to your teeth or mouth that requires prompt attention. The sooner a dental emergency is treated, the better the outcome—and the less likely a manageable problem becomes a serious one.
              </p>

              <p>
                At Planet Dental, we reserve time in our schedule every day for same-day emergency patients. You won't be left waiting days for an appointment when you're in pain. Our team is experienced, calm, and equipped to handle whatever brings you in.
              </p>

              <p>
                Open 7 days a week—if you're dealing with a dental emergency in East Hills or anywhere in Calgary, we're here for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMON DENTAL EMERGENCIES AND HOW WE TREAT THEM (Screenshot 2) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        {/* Subtle nebula glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Common <span className="text-[#38bdf8]">dental emergencies</span> and how we treat them
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollCarousel('left')}
              aria-label="Previous emergencies"
              className="w-10 h-10 rounded-full border border-sky-500/30 bg-[#091e3a]/60 hover:bg-[#0c2648] hover:border-sky-400 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              aria-label="Next emergencies"
              className="w-10 h-10 rounded-full border border-sky-500/30 bg-[#091e3a]/60 hover:bg-[#0c2648] hover:border-sky-400 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Horizontal Cards Carousel matching screenshot */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {commonEmergencies.map((item) => (
            <div 
              key={item.id}
              className="w-[310px] sm:w-[360px] md:w-[380px] shrink-0 snap-start bg-[#091e3a]/60 backdrop-blur-md rounded-2xl border border-sky-500/20 overflow-hidden hover:border-sky-400/50 hover:bg-[#0c2648]/80 transition-all duration-300 flex flex-col group shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-[#050e1f]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091e3a] via-transparent to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#38bdf8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW TO PREVENT DENTAL EMERGENCIES (Screenshot 2) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background cosmic dots */}
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#38bdf8]/50 pointer-events-none" />
        <div className="absolute bottom-12 right-12 w-2 h-2 rounded-full bg-[#bef264]/60 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Prevention Guidelines & Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              How to prevent <span className="text-[#38bdf8]">dental emergencies</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              While some emergencies are unavoidable, many can be reduced in likelihood with a few consistent habits:
            </p>

            <div className="space-y-3.5 pt-2">
              {preventionChecklist.map((item, idx) => (
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
          </div>

          {/* Right Column: Image with floating accent dots */}
          <div className="lg:col-span-5 relative">
            {/* Layered subtle background card */}
            <div className="absolute -inset-2 sm:-inset-3 bg-[#091e3a]/40 rounded-3xl -z-10 transform rotate-1 border border-sky-500/10" />

            {/* Floating accent dots around the card */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#d9f99d] shadow-[0_0_15px_rgba(217,249,157,0.8)] z-10 pointer-events-none" />
            <div className="absolute top-1/2 -left-4 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.8)] z-10 pointer-events-none" />
            <div className="absolute -bottom-3 right-1/4 w-3.5 h-3.5 rounded-full bg-[#d9f99d] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-sky-500/25 shadow-[0_0_35px_rgba(56,189,248,0.2)] bg-[#091e3a]/40">
              <img 
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80" 
                alt="Preventing dental emergencies with regular hygiene care"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS (Screenshot 3) */}
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

      {/* 6. DENTAL PAIN SHOULDN'T WAIT & CLINIC GALLERY (Screenshot 4) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Dental <span className="text-[#38bdf8]">pain</span> shouldn't wait
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            We keep same-day appointments available every day for patients who need urgent care. If you're in pain, call us now or book online—our team is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => onOpenBooking('Emergency Dental Same-Day Appointment')}
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
              src={DENTIST_WORK_URL} 
              alt="Planet Dental Advanced Dental Operatory Suite"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
          </div>

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
              alt="Planet Dental Futuristic Arcade and Treatment Hallway"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
};
