import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  Search, 
  Clock, 
  Heart,
  CheckCircle2,
  Calendar,
  AlertCircle,
  FileText
} from 'lucide-react';
import { CLINIC_INFO, DENTIST_WORK_URL, OFFICE_TOUR_1, OFFICE_TOUR_2, DOCTOR_SUMIT_URL } from '../data/dentalData';

interface PreventiveDentistryPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const PreventiveDentistryPage: React.FC<PreventiveDentistryPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTeamTab, setActiveTeamTab] = useState<'dentist' | 'hygienist'>('dentist');

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const servicesList = [
    {
      badge: '01',
      title: 'Comprehensive Dental Exams',
      description: 'Thorough visual, diagnostic, and digital evaluations of your teeth, bite, jaw joints, and oral tissues to spot any developing issues before symptoms arise.'
    },
    {
      badge: '02',
      title: 'Professional Hygiene & Cleanings',
      description: 'Gentle ultrasonic scaling and therapeutic polishing to safely eliminate calcified tartar (calculus) and bacterial biofilm that toothbrushes cannot reach.'
    },
    {
      badge: '03',
      title: 'Fluoride Enamel Treatments',
      description: 'Concentrated medical-grade fluoride application that remineralizes microscopic enamel lesions and builds robust resistance against dietary acid attacks.'
    },
    {
      badge: '04',
      title: 'Protective Dental Sealants',
      description: 'Thin, clear polymer barriers applied into the microscopic grooves of back molars, completely sealing vulnerable biting surfaces from food trap decay.'
    },
    {
      badge: '05',
      title: 'Periodontal & Gum Screenings',
      description: 'Precise millimeter measurements of gum pocket depths to catch gingivitis early, preventing irreversible bone loss and periodontal damage.'
    },
    {
      badge: '06',
      title: 'Oral Cancer Screenings',
      description: 'Fast, non-invasive examinations of the soft palate, tongue margins, throat, and lymph nodes to identify any cellular abnormalities as early as possible.'
    },
    {
      badge: '07',
      title: 'Custom Night & Sports Guards',
      description: 'Lab-fabricated ergonomic mouthguards that protect enamel from nocturnal clenching (bruxism) and shield teeth during athletic sports.'
    },
    {
      badge: '08',
      title: 'Personalized Home Care Guidance',
      description: 'One-on-one coaching on optimal brushing angles, water flosser methods, and dental products customized specifically to your unique oral chemistry.'
    }
  ];

  const preventiveTreatments = [
    {
      id: 'hygiene-cleaning',
      title: 'Hygiene Cleanings & Tartar Removal',
      description: 'Even diligent brushers develop tartar in tricky spots like behind lower front teeth and along the gumline. Our registered hygienists use gentle ultrasonic tools and fine hand instruments to lift away hardened deposits without scraping or discomfort.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'sealants',
      title: 'Protective Dental Sealants',
      description: 'Molars have intricate anatomical fissures where bacteria easily thrive. Dental sealants flow into these grooves and harden with a curing light, creating a glass-smooth shield that keeps out sugar and bacteria for years.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fluoride',
      title: 'Fluoride Varnish & Remineralization',
      description: 'A rapid, pleasant treatment applied directly onto enamel surfaces at the conclusion of your cleaning. It actively attracts calcium and phosphate minerals from your saliva, hardening tooth structure and soothing root sensitivity.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'digital-xrays',
      title: 'Low-Radiation Digital X-Rays',
      description: 'Cavities often start silently between touching teeth or beneath existing fillings. Our ultra-low-radiation digital sensors produce instant, high-definition radiographs using up to 80% less radiation than traditional dental film.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const benefitsList = [
    {
      icon: ShieldCheck,
      title: 'Prevents Painful & Expensive Dental Emergencies',
      description: 'Catching a small enamel pit or minor gum irritation early prevents the necessity of root canals, crowns, or surgical tooth extractions later on.'
    },
    {
      icon: Sparkles,
      title: 'Preserves Your Natural Tooth Structure',
      description: 'Nothing looks or functions better than your natural teeth. Consistent preventive hygiene ensures your enamel stays dense, strong, and intact for a lifetime.'
    },
    {
      icon: Search,
      title: 'Early Detection of Hidden Conditions',
      description: 'Routine checkups identify subtle signs of teeth grinding, acid erosion, gum disease, and oral tissue irregularities before you experience any pain.'
    },
    {
      icon: Smile,
      title: 'Fresher Breath & Confident Everyday Smiles',
      description: 'Removing calcified plaque eliminates the persistent anaerobic bacteria responsible for halitosis and surface staining, leaving your mouth clean and refreshed.'
    }
  ];

  const dentistsTeam = [
    {
      name: 'Dr. Brayden',
      role: 'General & Comprehensive Dentist',
      badge: 'DENTIST',
      bio: 'Known for his calm and patient-focused approach, Dr. Brayden emphasizes gentle diagnostics and proactive tooth preservation for patients of all ages.',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Dr. Sumit',
      role: 'Lead Dentist',
      badge: 'DENTIST',
      bio: 'With extensive clinical training in preventive aesthetics and digital imaging, Dr. Sumit designs customized wellness plans tailored to each individual bite.',
      image: DOCTOR_SUMIT_URL
    },
    {
      name: 'Dr. Tejas Patel',
      role: 'General & Restorative Dentist',
      badge: 'DENTIST',
      bio: 'Dr. Tejas prioritizes patient education and early intervention, ensuring every patient understands their oral health roadmap and preventive options.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Dr. Siddharth Parikh',
      role: 'Restorative & Family Dentist',
      badge: 'DENTIST',
      bio: 'Bringing over a decade of compassionate experience, Dr. Parikh helps patients build long-term habits to maintain optimal gum and tooth health.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Dr. Jeanne Trinh',
      role: 'Family & Aesthetic Dentist',
      badge: 'DENTIST',
      bio: 'Dr. Jeanne is devoted to anxiety-free preventive appointments, making routine dental checkups comfortable and educational for adults and kids alike.',
      image: 'https://images.unsplash.com/photo-1594824813515-59b48c41460a?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const hygienistsTeam = [
    {
      name: 'Sarah, RDH',
      role: 'Registered Dental Hygienist',
      badge: 'HYGIENIST',
      bio: 'Specializing in gentle ultrasonic cleanings, periodontal therapy, and desensitizing protocols for patients with sensitive teeth.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Jessica, RDH',
      role: 'Registered Dental Hygienist',
      badge: 'HYGIENIST',
      bio: 'Passionate about patient comfort, stain removal, and providing customized flossing and oral irrigation advice.',
      image: 'https://images.unsplash.com/photo-1594824813515-59b48c41460a?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Amanda, RDH',
      role: 'Registered Dental Hygienist',
      badge: 'HYGIENIST',
      bio: 'Dedicated to thorough calculus removal, fluoride remineralization, and creating a calming, relaxed atmosphere in the hygiene suite.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Chloe, RDH',
      role: 'Registered Dental Hygienist',
      badge: 'HYGIENIST',
      bio: 'Focuses on early periodontal pocket management, enamel sealants, and preventative care routines for active families.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const faqs = [
    {
      q: 'How often should I visit the dentist for a cleaning and checkup?',
      a: 'For most healthy children and adults, we recommend a professional cleaning and examination every six months. Patients with a history of periodontal disease, heavy tartar accumulation, diabetes, or orthodontic braces often benefit from visits every 3 to 4 months.'
    },
    {
      q: 'What is the difference between dental plaque and tartar?',
      a: 'Plaque is a soft, sticky film of bacteria that accumulates on teeth daily and can be brushed and flossed away. Tartar (calculus) occurs when plaque is not completely removed and mineralizes with saliva. Tartar hardens like rock and can only be safely removed by a dental professional using specialized instruments.'
    },
    {
      q: 'Why are dental X-rays needed if my teeth feel fine and do not hurt?',
      a: 'Tooth decay, cysts, and bone loss rarely cause discomfort in their early stages. By the time a tooth aches, decay has often penetrated deep into the nerve chamber. Digital X-rays allow our dentists to detect microscopic decay between teeth and examine the bone supporting your teeth long before pain begins.'
    },
    {
      q: 'Are dental sealants only for kids or can adults benefit too?',
      a: 'While dental sealants are most frequently placed on children’s newly erupted permanent molars, adults with deep chewing fissures or elevated cavity risk can also receive sealants to protect vulnerable enamel surfaces.'
    },
    {
      q: 'Why do my gums bleed when I floss or brush?',
      a: 'Bleeding gums are a key symptom of gingivitis, the earliest stage of gum disease caused by bacterial irritation. Rather than stopping flossing, gentle daily flossing paired with a professional hygiene cleaning will remove the irritating bacteria and restore your gums to healthy, pink tissue.'
    },
    {
      q: 'Does dental insurance cover preventive cleanings and checkups?',
      a: 'Yes, the vast majority of dental insurance plans cover 80% to 100% of preventive services, including exams, cleanings, fluoride treatments, and bitewing X-rays. At Planet Dental, we offer direct billing (assignment of benefits) to make the process effortless.'
    }
  ];

  const scrollToPhilosophy = () => {
    const el = document.getElementById('preventive-philosophy');
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
            alt="Preventive Dental Care at Planet Dental"
            className="w-full h-full object-cover object-center brightness-[0.42] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e1f] via-[#050e1f]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f] via-transparent to-black/40" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-12 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.15] tracking-tight mb-4">
              <span className="text-[#38bdf8]">Preventive Dentistry</span>{' '}
              <span className="text-white">in</span>
              <br />
              <span className="text-white">East Hills, Calgary</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Proactive examinations, gentle hygiene cleanings, and personalized oral care designed to protect your teeth, stop problems before they start, and keep your smile radiant.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenBooking('Preventive Dentistry Consultation & Cleaning')}
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

      {/* 2. PREVENTIVE DENTAL CARE AT PLANET DENTAL */}
      <section id="preventive-philosophy" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Patient in Modern Dental Clinic */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Playful Floating Dots */}
            <div className="absolute -top-3 -left-3 w-5 h-5 rounded-full bg-amber-400 opacity-80" />
            <div className="absolute top-1/4 -right-4 w-4 h-4 rounded-full bg-[#38bdf8] opacity-90" />
            <div className="absolute -bottom-4 left-1/3 w-6 h-6 rounded-full bg-emerald-400 opacity-80" />
            <div className="absolute top-1/2 -left-5 w-3 h-3 rounded-full bg-purple-400 opacity-70" />

            <div className="relative rounded-[28px] overflow-hidden border border-sky-500/20 bg-[#08152e] shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80" 
                alt="Preventive checkup and hygiene at Planet Dental"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08152e]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text Information */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              <span className="text-[#38bdf8]">Preventive dental care</span>{' '}
              <span className="text-white">at Planet Dental</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                The most effective dental treatment is the one you never need. At Planet Dental Calgary, preventive care forms the bedrock of our practice. Our clinical philosophy focuses on safeguarding your teeth and gums before minor, asymptomatic concerns transform into complex, uncomfortable conditions.
              </p>
              <p>
                Routine cleanings, thorough checkups, and early screenings are your primary defense against tooth decay, enamel erosion, and periodontal disease. Our gentle dental professionals utilize ultra-modern ultrasonic scaling technology and low-radiation digital imaging to keep your appointments swift, painless, and remarkably thorough.
              </p>
              <p>
                Whether you are due for your routine bi-annual hygiene appointment or seeking to establish a lasting oral health plan for your entire family, we provide transparent assessments, zero-pressure guidance, and compassionate care open 7 days a week.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenBooking('Routine Preventive Checkup & Cleaning')}
                className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] font-bold text-sm px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.35)] transition-all cursor-pointer"
              >
                <span>Schedule a Checkup & Cleaning</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT PREVENTIVE DENTISTRY INCLUDES */}
      <section className="py-16 sm:py-20 bg-[#071328]/60 border-y border-sky-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
              Services included in <span className="text-[#38bdf8]">preventive care</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Comprehensive clinical protocols designed to preserve your teeth, optimize gum vitality, and guarantee lasting oral wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => (
              <div 
                key={index}
                className="rounded-2xl bg-[#091a38] border border-sky-500/20 p-6 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-200 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center font-bold text-sm text-[#38bdf8] mb-4">
                    {service.badge}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ESSENTIAL PREVENTIVE TREATMENTS */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Essential <span className="text-[#38bdf8]">preventive treatments</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Modern dental care goes beyond brushing and flossing at home — discover our clinical defenses against common dental conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {preventiveTreatments.map((treatment) => (
            <div 
              key={treatment.id}
              className="rounded-3xl bg-[#081733] border border-sky-500/20 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex flex-col hover:border-sky-400/40 transition-all duration-200"
            >
              <div className="h-56 sm:h-64 w-full relative overflow-hidden">
                <img 
                  src={treatment.image} 
                  alt={treatment.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081733] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {treatment.description}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking(`Preventive Care: ${treatment.title}`)}
                    className="text-[#38bdf8] hover:text-sky-300 font-semibold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Learn more & book</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BENEFITS OF PREVENTIVE CARE */}
      <section className="py-16 sm:py-20 bg-[#071328]/60 border-y border-sky-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
              Why preventive care <span className="text-[#38bdf8]">matters</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Consistent proactive care delivers tangible physical, financial, and emotional wellness benefits
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsList.map((benefit, index) => {
              const IconComp = benefit.icon;
              return (
                <div 
                  key={index}
                  className="rounded-2xl bg-[#091a38] border border-sky-500/20 p-6 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-200 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-[#38bdf8] mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. WHO IS ON YOUR PREVENTIVE CARE TEAM? (Interactive Tab Switcher) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who is on your <span className="text-[#38bdf8]">preventive care team?</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            High-quality preventive dentistry is a true partnership between your general dentist and your registered dental hygienist.
          </p>

          {/* Pill Toggle Buttons */}
          <div className="inline-flex p-1.5 rounded-full bg-[#08152e] border border-sky-500/30 mt-6 shadow-inner">
            <button
              onClick={() => setActiveTeamTab('dentist')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeTeamTab === 'dentist'
                  ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              General Dentist
            </button>
            <button
              onClick={() => setActiveTeamTab('hygienist')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeTeamTab === 'hygienist'
                  ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Dental Hygienist
            </button>
          </div>
        </div>

        {/* Role Explanation Card */}
        <div className="max-w-4xl mx-auto mb-10 p-5 sm:p-6 rounded-2xl bg-[#091d3d]/70 border border-sky-500/30 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0 text-[#38bdf8]">
            <Heart className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
            {activeTeamTab === 'dentist' ? (
              <span>
                <strong className="text-white font-semibold">Your primary dental care provider:</strong> Responsible for clinical diagnosis, assessing digital X-rays, checking bite mechanics, examining oral soft tissues for pathology, and formulating your comprehensive long-term treatment plan.
              </span>
            ) : (
              <span>
                <strong className="text-white font-semibold">Your preventive oral health specialist:</strong> Dedicated to thorough ultrasonic scaling and polishing, measuring periodontal pocket depths, applying protective fluoride and sealants, and providing customized home-care techniques.
              </span>
            )}
          </p>
        </div>

        {/* Dynamic Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeTeamTab === 'dentist' ? dentistsTeam.slice(0, 4) : hygienistsTeam).map((member, index) => (
            <div 
              key={index}
              className="rounded-2xl bg-[#091a38] border border-sky-500/20 overflow-hidden hover:border-sky-400/40 transition-all duration-200 group flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-slate-800">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-sky-500/30 text-[#38bdf8] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {member.badge}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a38] via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#38bdf8] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-sky-500/10 flex justify-between items-center">
                  <button
                    onClick={() => onOpenBooking(`Appointment with ${member.name}`)}
                    className="text-xs font-semibold text-gray-300 hover:text-[#38bdf8] transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Visit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HOW OFTEN SHOULD YOU VISIT? */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-br from-[#091d40] to-[#06142c] border border-sky-500/30 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="p-8 sm:p-12 lg:p-14 lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-[#38bdf8] text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Visit Frequency Guide</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                How often should you schedule preventive dental visits?
              </h2>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  For the majority of patients with healthy gums, the Canadian Dental Association standard is a professional cleaning and examination every <strong className="text-white">six months</strong>. This timing prevents soft plaque from accumulating into stubborn calculus deposits that trigger inflammation.
                </p>
                <p>
                  Certain health factors may warrant a customized recall schedule of every <strong className="text-[#38bdf8]">3 to 4 months</strong>:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>History of periodontal disease</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Orthodontic braces or aligners</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Diabetes or systemic conditions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Tendency for rapid tartar formation</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking('Preventive Recall Consultation')}
                  className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] font-bold text-sm sm:text-base px-6 py-3 rounded-xl inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.35)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Book Your Next Cleaning</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full min-h-[320px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80" 
                alt="Patient smiling after dental cleaning"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#091d40] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Frequently asked <span className="text-[#38bdf8]">questions</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Clear answers about routine cleanings, preventive treatments, and insurance coverage
          </p>
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

      {/* 9. CALL TO ACTION & CLINIC PHOTOGRAPHY */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          Protect your smile with <span className="text-[#38bdf8]">preventive care</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Proactive dental examinations and gentle hygiene cleanings save you time, discomfort, and expense down the road. Keep your smile healthy and vibrant with our experienced team open 7 days a week.
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => onOpenBooking('Preventive Dentistry Appointment')}
            className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(56,189,248,0.4)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <span>Book an Appointment</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* 3 Location Pills */}
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

        {/* 3 Clinic Gallery Photography Cards */}
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
