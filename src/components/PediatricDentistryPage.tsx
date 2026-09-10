import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  Search, 
  Calendar, 
  Clock, 
  Heart,
  Baby,
  Activity
} from 'lucide-react';
import { CLINIC_INFO, DENTIST_WORK_URL, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface PediatricDentistryPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const PediatricDentistryPage: React.FC<PediatricDentistryPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const servicesList = [
    {
      badge: '02',
      title: 'Professional cleanings',
      description: "Even children who brush well benefit from professional cleanings to remove the tartar and plaque that a toothbrush can't fully reach — particularly in the back molars and along the gum line."
    },
    {
      badge: '03',
      title: 'Fluoride treatments',
      description: 'Fluoride strengthens developing tooth enamel, making it more resistant to the acids produced by bacteria. A fluoride treatment takes just minutes and provides meaningful protection against cavities.'
    },
    {
      badge: '04',
      title: 'Dental sealants',
      description: 'Sealants are thin, clear coatings applied to the chewing surfaces of back teeth — the most cavity-prone areas in children’s mouths. They create a smooth, protective barrier that prevents food and bacteria from settling into the grooves. Quick to apply and highly effective.'
    },
    {
      badge: '02',
      title: 'Professional cleanings',
      description: "Even children who brush well benefit from professional cleanings to remove the tartar and plaque that a toothbrush can't fully reach — particularly in the back molars and along the gum line."
    }
  ];

  const preventiveTreatments = [
    {
      id: 'sealants',
      title: 'Dental sealants',
      description: 'The deep grooves in the chewing surfaces of back teeth are the most common site for cavities in children. Sealants fill these grooves with a clear, hardened material that prevents bacteria and food from collecting there. The application is quick, painless, and requires no drilling — and the protection lasts for years.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fluoride',
      title: 'Fluoride treatments',
      description: 'Applied as a varnish or gel at the end of a cleaning appointment, fluoride remineralizes weakened enamel and significantly reduces cavity risk. The treatment takes under two minutes and is safe for children from their first teeth onward.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'maintainers',
      title: 'Space maintainers',
      description: 'Baby teeth serve as natural placeholders for adult teeth. If a baby tooth is lost prematurely — due to decay, injury, or early extraction — a space maintainer preserves the gap until the permanent tooth is ready to erupt. Without one, neighbouring teeth tend to drift into the space, complicating future eruption and potentially creating the need for orthodontic treatment.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mouthguards',
      title: 'Custom mouthguards',
      description: 'For children involved in contact sports or activities with a risk of facial impact, a custom-fitted mouthguard is one of the best protective investments you can make. Unlike store-bought options, a custom guard is comfortable enough that children will actually wear it — which is what makes it effective.',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const benefitsList = [
    {
      icon: ShieldCheck,
      title: 'Reduces the risk of tooth decay',
      description: 'Regular professional cleanings, fluoride treatments, and sealants work together to significantly reduce the likelihood of cavities — sparing children from the pain and intervention that untreated decay requires.'
    },
    {
      icon: Sparkles,
      title: 'Supports healthy enamel development',
      description: 'Enamel is the hardest tissue in the human body — but it can be eroded by acid and bacteria. Professional preventive care protects and strengthens enamel during the critical development years.'
    },
    {
      icon: Search,
      title: 'Catches problems early',
      description: "Regular exams allow us to identify developmental issues, early decay, and structural concerns while they're still simple and affordable to address."
    },
    {
      icon: Smile,
      title: 'Builds lifelong habits',
      description: 'Children who visit the dentist regularly, understand why oral hygiene matters, and have positive dental experiences are far more likely to carry those habits into adulthood.'
    }
  ];

  const faqs = [
    {
      q: 'At what age should my child first see a dentist?',
      a: 'We recommend your child’s first visit by age one, or within six months of their first tooth appearing. Starting early helps establish a positive association with dental care, allows us to monitor development from the beginning, and means any issues are identified long before they become significant.'
    },
    {
      q: 'What should I expect at my child’s first dental visit?',
      a: 'A first visit is gentle, unhurried, and fun. We introduce your child to the dental chair, "count" their teeth with a small mirror, check jaw and gum health, and answer all questions parents have about teething, brushing, and nutrition.'
    },
    {
      q: 'How often should my child visit the dentist?',
      a: 'Every six months is standard for most children. Regular visits keep plaque and tartar in check, ensure fluoride and sealants remain intact, and allow us to monitor jaw growth and tooth eruption.'
    },
    {
      q: 'Are dental X-rays safe for children?',
      a: 'Yes. We use ultra-low-dose digital dental X-rays that emit up to 80% less radiation than conventional film. We only take X-rays when clinically necessary to check developing adult teeth and hidden decay between tight contacts.'
    },
    {
      q: 'What can I do at home to support my child’s oral health?',
      a: 'Help or supervise brushing twice daily with a soft-bristled toothbrush and age-appropriate fluoride toothpaste, begin flossing as soon as teeth touch, limit sugary drinks and sticky snacks, and make oral hygiene a fun family routine.'
    }
  ];

  const scrollToPhilosophy = () => {
    const el = document.getElementById('pediatric-philosophy');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050e1f] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-between overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80" 
            alt="Pediatric Dental Care at Planet Dental"
            className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e1f] via-[#050e1f]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f] via-transparent to-black/30" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-12 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.15] tracking-tight mb-4">
              <span className="text-[#38bdf8]">Pediatric Dentistry</span>{' '}
              <span className="text-white">in</span>
              <br />
              <span className="text-white">East Hills, Calgary</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Braces and clear aligners for teens and adults — precise, personalized, and planned around your life.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenBooking('Pediatric Dentistry Consultation')}
                className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.4)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
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
            onClick={scrollToPhilosophy}
            className="flex flex-col items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide">Take a Tour</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1 group-hover:border-[#38bdf8] transition-colors">
              <div className="w-1.5 h-2.5 bg-white/80 rounded-full animate-bounce group-hover:bg-[#38bdf8]" />
            </div>
          </button>
        </div>
      </section>

      {/* 2. CHILDREN'S DENTISTRY AT PLANET DENTAL (Screenshot 1) */}
      <section id="pediatric-philosophy" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Girl in Dental Chair with playful background accents */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Playful Floating Dots matching screenshot */}
            <div className="absolute -top-3 -left-3 w-5 h-5 rounded-full bg-amber-400 opacity-80" />
            <div className="absolute top-1/4 -right-4 w-4 h-4 rounded-full bg-[#38bdf8] opacity-90" />
            <div className="absolute -bottom-4 left-1/3 w-6 h-6 rounded-full bg-emerald-400 opacity-80" />
            <div className="absolute top-1/2 -left-5 w-3 h-3 rounded-full bg-purple-400 opacity-70" />

            <div className="relative rounded-[28px] overflow-hidden border border-sky-500/20 bg-[#08152e] shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1595454223600-91fbdd77e231?auto=format&fit=crop&w=900&q=80" 
                alt="Happy young patient smiling in dental chair"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08152e]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text Information */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              <span className="text-[#38bdf8]">Children’s dentistry</span>{' '}
              <span className="text-white">at Planet Dental</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                A child’s first dental experiences set the tone for a lifetime of oral health. Our goal at Planet Dental is to make every visit positive, calm, and genuinely comfortable — so children grow up associating the dentist with care and confidence, not anxiety.
              </p>
              <p>
                We provide comprehensive dental care for children from infancy through adolescence, with a team that understands how to communicate with young patients, manage their comfort, and make appointments feel approachable — even for children who are nervous or hesitant.
              </p>
              <p>
                Beyond treating what’s there, we focus on what’s ahead — guiding development, catching issues early, and giving parents and caregivers clear, practical guidance on supporting good oral health at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES WE PROVIDE FOR CHILDREN (Screenshot 2) */}
      <section className="py-16 sm:py-20 bg-[#071328]/60 border-y border-sky-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
              Services we provide for <span className="text-[#38bdf8]">children</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Our pediatric dentistry offering covers the full spectrum of children’s oral health needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => (
              <div 
                key={index}
                className="rounded-2xl bg-[#091a38] border border-sky-500/20 p-6 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-200 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#0e2752] border border-sky-500/30 flex items-center justify-center text-xs font-bold text-[#38bdf8] mb-5">
                    {service.badge}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREVENTIVE DENTAL TREATMENTS FOR CHILDREN (Screenshot 2 bottom & Screenshot 3) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Preventive dental <span className="text-[#38bdf8]">treatments for children</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Prevention is far more effective — and far less stressful — than treatment. These are the key preventive tools we use:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {preventiveTreatments.map((treatment) => (
            <div 
              key={treatment.id}
              className="rounded-3xl bg-[#091a38] border border-sky-500/20 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.4)] flex flex-col hover:border-sky-400/40 transition-all duration-300"
            >
              <div className="h-60 sm:h-72 w-full overflow-hidden relative">
                <img 
                  src={treatment.image} 
                  alt={treatment.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a38] via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BENEFITS OF PREVENTIVE DENTAL CARE FOR CHILDREN (Screenshot 4) */}
      <section className="py-16 sm:py-20 bg-[#071328]/60 border-y border-sky-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
              Benefits of <span className="text-[#38bdf8]">preventive dental care</span> for children
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Here are a few factors worth considering before choosing clear aligners
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsList.map((benefit, index) => {
              const IconComp = benefit.icon;
              return (
                <div 
                  key={index}
                  className="rounded-2xl bg-[#091a38] border border-sky-500/20 p-6 flex flex-col hover:border-sky-400/40 transition-all duration-200 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0e2752] border border-sky-500/30 flex items-center justify-center text-[#38bdf8] mb-5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FIRST VISIT CARD (Screenshot 4 bottom) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-br from-[#091d40] to-[#061226] border border-sky-500/20 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Text Left Column */}
            <div className="p-8 sm:p-12 lg:p-14 lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                When should I bring my child to the dentist for the first time?
              </h2>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  We recommend scheduling your child’s first dental visit within six months of their first tooth appearing — or by their first birthday, whichever comes first. Early visits serve several purposes: they allow us to assess oral development, identify any early concerns, apply protective fluoride treatment if appropriate, and help your child become comfortable with the dental environment from an early age.
                </p>
                <p>
                  Early familiarity with dental visits is one of the most effective ways to prevent dental anxiety later in life.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('Child First Dental Visit')}
                  className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] font-bold text-sm sm:text-base px-6 py-3 rounded-xl inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.35)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Book First Dental Visit</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Image Right Column */}
            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full min-h-[320px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80" 
                alt="Child smiling at the dentist"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#091d40] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (Screenshot 5) */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Frequently asked <span className="text-[#38bdf8]">questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#091a38] border-sky-500/50 shadow-[0_8px_30px_rgba(56,189,248,0.15)]' 
                    : 'bg-[#071328] border-sky-500/20 hover:border-sky-500/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-200 shrink-0 ${
                    isOpen ? 'border-[#38bdf8] text-[#38bdf8] rotate-180' : 'border-gray-600 text-gray-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-sky-500/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. GIVE YOUR CHILD THE BEST POSSIBLE START (Screenshot 6) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          Give your <span className="text-[#38bdf8]">child</span> the best possible start
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          A healthy smile in childhood is a foundation for lifelong oral health. Whether your child is due for their first visit or their tenth, our team is here to make every appointment a positive one. Book today.
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => onOpenBooking('Pediatric Dentistry Appointment')}
            className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(56,189,248,0.4)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <span>Book an Appointment</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* 3 Location Pills matching other pages */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
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

        {/* 3 Clinic Gallery Photography Cards (Screenshot 6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/20 bg-[#08152e] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            <img 
              src={DENTIST_WORK_URL} 
              alt="Planet Dental Modern Operatory Clinic"
              className="w-full h-80 sm:h-96 md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/20 bg-[#08152e] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            <img 
              src={OFFICE_TOUR_2} 
              alt="Planet Dental Futuristic Arcade and Corridor"
              className="w-full h-80 sm:h-96 md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/20 bg-[#08152e] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            <img 
              src={OFFICE_TOUR_1} 
              alt="Planet Dental Modern Lounge and Reception"
              className="w-full h-80 sm:h-96 md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
};
