import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Calendar, 
  Phone, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles, 
  ChevronDown, 
  Clock, 
  Heart, 
  Smile, 
  ShieldCheck, 
  FileCheck,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { CLINIC_INFO, DENTIST_WORK_URL, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface WisdomTeethPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const WisdomTeethPage: React.FC<WisdomTeethPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const impactionTypes = [
    {
      title: 'Soft Tissue Impaction',
      badge: 'Level 1',
      description: 'The tooth crown has penetrated bone, but the gum covers part or all of the tooth. Creates a flap where bacteria and food get trapped, causing painful pericoronitis infections.',
      tag: 'Common in Early 20s'
    },
    {
      title: 'Partial Bony Impaction',
      badge: 'Level 2',
      description: 'The wisdom tooth has partially surfaced, but a portion remains embedded within the jawbone. High risk of decay to both the wisdom tooth and adjacent molar.',
      tag: 'Moderate Complexity'
    },
    {
      title: 'Complete Bony Impaction',
      badge: 'Level 3',
      description: 'The tooth is completely encased within the jawbone. If left untreated, pressure can resorb the roots of nearby teeth or develop benign cysts.',
      tag: 'Requires 3D Mapping'
    },
    {
      title: 'Horizontal Impaction',
      badge: 'Level 4',
      description: 'The third molar is angled 90 degrees sideways, pushing directly into the root structure of the neighboring second molar, threatening bite alignment.',
      tag: 'Surgical Precision'
    }
  ];

  const sedationOptions = [
    {
      title: 'Nitrous Oxide (Laughing Gas)',
      subtitle: 'Mild, Conscious Relaxation',
      description: 'Inhaled through a comfortable nosepiece. Induces a light, peaceful sensation and wears off within minutes so you can drive yourself home.',
      bestFor: 'Mild anxiety & single simple extractions'
    },
    {
      title: 'Oral Conscious Sedation',
      subtitle: 'Calm Twilight State',
      description: 'A prescribed sedative pill taken 45 minutes prior to the procedure. You remain conscious and responsive, but deeply drowsy and indifferent to the dental work.',
      bestFor: 'Moderate dental fear & multiple teeth'
    },
    {
      title: 'IV Moderate Sedation',
      subtitle: 'Sleep-Like State (Twilight Sleep)',
      description: 'Medication delivered directly into the bloodstream for immediate, deep relaxation. Most patients have zero memory of the surgery upon waking up.',
      bestFor: 'Impacted wisdom teeth & high anxiety'
    },
    {
      title: 'Computerized Local Numbing',
      subtitle: 'Targeted Profound Numbing',
      description: 'Gentle, buffered local anesthetic that completely numbs the surgical site without stinging, ensuring you feel absolutely zero pain during treatment.',
      bestFor: 'Included with every extraction'
    }
  ];

  const wisdomFaqs = [
    {
      q: 'Does wisdom teeth extraction hurt?',
      a: 'No. With modern local anesthesia and optional sedation (nitrous oxide or oral/IV sedation), you will not feel any pain during the procedure. Afterwards, any mild swelling or ache is manageable with prescribed or over-the-counter pain relief and our post-op care pack.'
    },
    {
      q: 'How long is the recovery period after wisdom teeth surgery?',
      a: 'Most patients return to school, work, and normal non-strenuous routines within 2 to 4 days. Soft tissue healing takes about 1 to 2 weeks. We provide detailed home care instructions, soft food guidelines, and direct phone follow-up to support your healing.'
    },
    {
      q: 'What is the best age to have wisdom teeth removed?',
      a: 'Between the ages of 16 and 25 is ideal. At this stage, the tooth roots are only two-thirds developed and the surrounding jawbone is softer, resulting in a much simpler procedure, fewer complications, and faster recovery.'
    },
    {
      q: 'Will my dental insurance cover wisdom teeth removal?',
      a: 'Yes, most Canadian dental plans cover 70% to 100% of wisdom tooth extractions and associated 3D diagnostics. We offer direct billing to Sun Life, Canada Life, Blue Cross, Manulife, Green Shield, and student health plans, and submit pre-determinations beforehand.'
    },
    {
      q: 'What can I eat after my extraction?',
      a: 'Stick to soft, cool foods for the first 48–72 hours: smoothies (no straws!), yogurt, applesauce, lukewarm broth, pudding, and mashed potatoes. Avoid hot foods, spicy foods, crunchy chips, and using straws, which can dislodge the blood clot.'
    }
  ];

  return (
    <div className="bg-[#050e1f] text-white min-h-screen">
      {/* 1. HERO SECTION matching screenshot */}
      <section className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24 border-b border-gray-800/60">
        {/* Background glow layers */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/20 bg-gradient-to-r from-[#050e1f] via-[#071733] to-[#0a1f44] p-6 sm:p-10 md:p-14 lg:p-16 min-h-[460px] md:min-h-[520px] flex flex-col justify-between shadow-2xl">
            
            {/* Background cinematic image overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=80"
                alt="Gentle wisdom teeth extraction"
                className="w-full h-full object-cover object-center md:object-right opacity-35 md:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050e1f] via-[#050e1f]/90 md:via-[#050e1f]/75 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f] via-transparent to-transparent" />
            </div>

            {/* Left Content Banner */}
            <div className="relative z-10 max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>Comfort-First Oral Surgery</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.15]">
                <span className="text-[#38bdf8]">Wisdom Teeth Removal</span>{' '}
                <span className="text-white">in East Hills, Calgary</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed max-w-lg">
                Straightforward, expert extractions — with sedation options for a comfortable experience from start to finish.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('Wisdom Teeth Consultation')}
                  className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 flex items-center gap-2.5 shadow-[0_4px_20px_rgba(56,189,248,0.35)] hover:scale-[1.02] cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Bottom "Take a Tour" Indicator */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-8 md:pt-4 text-center">
              <span className="text-xs text-gray-400 font-medium tracking-wide mb-2">Take a Tour</span>
              <button 
                onClick={() => {
                  const el = document.getElementById('what-are-wisdom-teeth');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-8 h-12 rounded-full border-2 border-[#38bdf8]/60 bg-[#050e1f]/80 flex items-start justify-center p-1.5 shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:border-[#38bdf8] transition-colors cursor-pointer"
                aria-label="Scroll to What are Wisdom Teeth"
              >
                <div className="w-2 h-2.5 rounded-full bg-[#38bdf8] animate-bounce" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "WHAT ARE WISDOM TEETH?" SECTION matching screenshot */}
      <section id="what-are-wisdom-teeth" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with Decorative Floating Orbital Dots */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Decorative Glow & Orbital Dots */}
            <div className="absolute -top-3 -left-3 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] z-20 animate-pulse" />
            <div className="absolute top-1/4 -right-4 w-3.5 h-3.5 rounded-full bg-lime-400 shadow-[0_0_10px_#a3e635] z-20" />
            <div className="absolute -bottom-4 left-1/4 w-3 h-3 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] z-20" />
            <div className="absolute bottom-1/3 -left-5 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] z-20" />

            {/* Framed Image */}
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/30 bg-[#08152e] shadow-[0_20px_60px_rgba(0,0,0,0.7)] p-2">
              <div className="rounded-[22px] sm:rounded-[30px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80"
                  alt="Planet Dental Clinician explaining 3D panoramic wisdom teeth X-ray scan"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy matching screenshot */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              <span className="text-white">What are </span>
              <span className="text-[#38bdf8]">wisdom teeth?</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              <p>
                Wisdom teeth are your third molars — the final set of permanent teeth to emerge, typically appearing between the ages of 17 and 25. Located at the very back corners of your upper and lower jaw, they are the last teeth to arrive and often the first to cause problems.
              </p>
              
              <p>
                Not everyone develops all four wisdom teeth — some people have fewer, and some have none at all. For those who do, the outcome depends largely on whether there is sufficient space in the jaw for them to erupt correctly. When there isn't, the wisdom tooth becomes impacted — unable to fully emerge — and the complications that follow can range from localized pain and infection to damage of the adjacent teeth and surrounding bone.
              </p>

              <p>
                At Planet Dental, we monitor wisdom tooth development from adolescence and recommend removal when the clinical evidence supports it — early enough to minimize complexity, but never before it's warranted.
              </p>
            </div>

            {/* 3 Quick highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
              <div className="bg-[#08152e] border border-sky-500/20 rounded-2xl p-3.5 text-center">
                <div className="text-xl font-bold text-[#38bdf8]">Ages 17–25</div>
                <div className="text-xs text-gray-400 mt-0.5">Typical Emergence</div>
              </div>
              <div className="bg-[#08152e] border border-sky-500/20 rounded-2xl p-3.5 text-center">
                <div className="text-xl font-bold text-white">3D CBCT</div>
                <div className="text-xs text-gray-400 mt-0.5">Precise Nerve Mapping</div>
              </div>
              <div className="bg-[#08152e] border border-sky-500/20 rounded-2xl p-3.5 text-center">
                <div className="text-xl font-bold text-emerald-400">0% Pain</div>
                <div className="text-xs text-gray-400 mt-0.5">Sedation Options</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. TYPES OF IMPACTION & CLINICAL CLASSIFICATION */}
      <section className="bg-[#040b18] border-y border-gray-800/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Understanding Impaction</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              The 4 Common Types of Wisdom Tooth Impaction
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Our 3D imaging evaluates the exact root trajectory and bone depth to choose the most gentle removal strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactionTypes.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#08152e] border border-sky-500/20 rounded-3xl p-6 flex flex-col justify-between hover:border-sky-400/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-lg bg-sky-500/20 text-[#38bdf8] text-xs font-bold">
                      {item.badge}
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#38bdf8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-sky-400 font-semibold">
                  <span>Examined on 3D X-Ray</span>
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SEDATION & COMFORT-FIRST PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>Anxiety-Free Dentistry</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Painless, Stress-Free Oral Surgery with Custom Sedation
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Dental anxiety shouldn't keep you in pain. At Planet Dental, we tailor sedation to your comfort level — from soothing laughing gas to twilight IV sedation that lets you sleep peacefully through your entire appointment.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Continuous cardiac, oxygen, and blood pressure monitoring.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Warm blankets, noise-canceling headphones & streaming entertainment.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dedicated recovery nurse to monitor you until you're ready to head home.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('Wisdom Teeth Sedation Consultation')}
                className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#050e1f] px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.35)] cursor-pointer"
              >
                <span>Discuss Sedation Options</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sedationOptions.map((opt, idx) => (
              <div 
                key={idx}
                className="bg-[#08152e] border border-sky-500/20 rounded-2xl p-5 space-y-2 hover:border-sky-400/40 transition-all"
              >
                <div className="text-xs font-bold text-[#38bdf8] uppercase tracking-wider">{opt.subtitle}</div>
                <h3 className="text-base font-bold text-white">{opt.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{opt.description}</p>
                <div className="pt-2 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span>Best for:</span>
                  <span className="text-gray-300 font-normal">{opt.bestFor}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. STEP-BY-STEP PROCEDURE & RECOVERY PROTOCOL */}
      <section className="bg-[#040b18] border-y border-gray-800/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Your Surgical Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              What to Expect: From First Scan to Full Recovery
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              We guide you every step of the way with transparent communication and 24/7 post-operative support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#08152e] border border-sky-500/20 rounded-3xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-[#38bdf8] font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-white">1. Consultation & 3D Mapping</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We take ultra-low dose 3D CBCT scans to visualize your inferior alveolar nerve and roots. We discuss anesthesia preferences, provide exact cost breakdowns, and answer all questions.
              </p>
              <div className="text-xs text-[#38bdf8] font-semibold pt-1">
                ✓ No surprises or unexpected fees
              </div>
            </div>

            <div className="bg-[#08152e] border border-sky-500/20 rounded-3xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-white">2. Gentle Surgery (30–60 mins)</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Sedation is initiated. Dr. Brayden and our surgical team perform minimally invasive extractions using piezosurgical instruments to preserve surrounding bone and gums.
              </p>
              <div className="text-xs text-indigo-400 font-semibold pt-1">
                ✓ Zero pain & quiet relaxing environment
              </div>
            </div>

            <div className="bg-[#08152e] border border-sky-500/20 rounded-3xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-white">3. Smooth Recovery & Aftercare</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                You head home with our recovery package (ice packs, sterile gauze, organic soothing rinses, and pain management prescriptions). Our team calls you the next day to ensure you're healing smoothly.
              </p>
              <div className="text-xs text-emerald-400 font-semibold pt-1">
                ✓ 24/7 emergency contact number
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. TRANSPARENT PRICING & DIRECT INSURANCE BILLING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-[#06142e] via-[#081a38] to-[#040c1c] border border-sky-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold uppercase tracking-wider">
                <FileCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Alberta Dental Fee Guide & Direct Billing</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Affordable Wisdom Teeth Removal with Direct Insurance Submissions
              </h2>
              
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We believe surgical care should be stress-free financially. We adhere to fair Alberta Dental Fee Guide standards and submit claims directly on your behalf, so you only pay your co-pay portion on the day of treatment.
              </p>
              
              <div className="space-y-2.5 text-xs sm:text-sm text-gray-300 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Direct Billing:</strong> Sun Life, Canada Life, Alberta Blue Cross, Manulife, Desjardins & University Student Plans.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>0% Interest Financing:</strong> Monthly payment plans starting at $89/month via PayBright and Dentalcard.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Complimentary Pre-Determinations:</strong> We submit estimates to your insurance ahead of time to confirm exact coverage.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/40 border border-gray-700/60 rounded-2xl p-4.5 space-y-1.5">
                  <div className="text-xs text-[#38bdf8] font-bold uppercase tracking-wider">Simple Extraction</div>
                  <div className="text-2xl font-extrabold text-white">$195 – $295 <span className="text-xs font-normal text-gray-400">/ tooth</span></div>
                  <p className="text-[11px] text-gray-400">Fully erupted tooth with standard anatomy. Covered 80-100% by most plans.</p>
                </div>

                <div className="bg-black/40 border border-gray-700/60 rounded-2xl p-4.5 space-y-1.5">
                  <div className="text-xs text-[#38bdf8] font-bold uppercase tracking-wider">Impacted Extraction</div>
                  <div className="text-2xl font-extrabold text-white">$325 – $550 <span className="text-xs font-normal text-gray-400">/ tooth</span></div>
                  <p className="text-[11px] text-gray-400">Soft tissue or bony impaction with precision surgical sectioning.</p>
                </div>

                <div className="bg-black/40 border border-gray-700/60 rounded-2xl p-4.5 space-y-1.5">
                  <div className="text-xs text-[#38bdf8] font-bold uppercase tracking-wider">Nitrous Laughing Gas</div>
                  <div className="text-2xl font-extrabold text-white">$65 – $95</div>
                  <p className="text-[11px] text-gray-400">Gentle relaxation for anxiety-free extraction with rapid recovery.</p>
                </div>

                <div className="bg-black/40 border border-gray-700/60 rounded-2xl p-4.5 space-y-1.5">
                  <div className="text-xs text-[#38bdf8] font-bold uppercase tracking-wider">3D CBCT Panoramic Scan</div>
                  <div className="text-2xl font-extrabold text-white">$120 – $180</div>
                  <p className="text-[11px] text-gray-400">Comprehensive nerve mapping & bone depth evaluation.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-2">
            Everything you need to know about wisdom teeth extraction at Planet Dental.
          </p>
        </div>

        <div className="space-y-3.5">
          {wisdomFaqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-[#08152e] border border-sky-500/20 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white text-sm sm:text-base">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#38bdf8] shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>

              {openFaq === idx && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-gray-800/60 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. JAW PAIN & SURGERY STARTING POINT & CLINIC GALLERY */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-800/60">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight leading-tight">
            <span className="text-[#38bdf8]">Wisdom teeth pain has a starting point</span>
            <span className="text-white"> — and so does relief.</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A surgical assessment at Planet Dental is the first step toward preventing crowded smiles, painful infections, and impaction complications. Book a consultation and let's work through this together.
          </p>
        </div>

        {/* 3 Action Buttons matching screenshot design */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-8">
          <button
            onClick={() => onOpenBooking('Wisdom Teeth Assessment')}
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

        {/* 3 Location Pills */}
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

        {/* 3 Clinic Gallery Photography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mt-12 sm:mt-16">
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/20 bg-[#08152e] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            <img
              src={DENTIST_WORK_URL}
              alt="Planet Dental Modern Operatory Clinic"
              className="w-full h-80 sm:h-96 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/20 bg-[#08152e] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            <img
              src={OFFICE_TOUR_2}
              alt="Planet Dental Modern Reception and Patient Lounge"
              className="w-full h-80 sm:h-96 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-transparent pointer-events-none" />
          </div>

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
