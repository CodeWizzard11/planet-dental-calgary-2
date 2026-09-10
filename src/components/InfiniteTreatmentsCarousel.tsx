import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Calendar } from 'lucide-react';

interface TreatmentOption {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
}

const TREATMENTS_DATA: TreatmentOption[] = [
  {
    id: 'arthrocentesis',
    title: 'Arthrocentesis',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Arthrocentesis joint irrigation procedure illustration',
    description:
      'A minor in-office procedure in which small needles are used to irrigate the joint space — flushing out inflammatory byproducts and reducing intra-articular pressure. Effective for certain cases of acute joint locking or inflammation.',
  },
  {
    id: 'splints-nightguards',
    title: 'Occlusal splints and night guards',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Woman holding custom occlusal night guard appliance',
    description:
      'A custom-fitted oral appliance — worn over the upper or lower teeth — is one of the most effective and widely used treatments for TMJ disorders. It reduces the load on the joint during sleep, prevents the damage caused by grinding, and encourages the jaw muscles to relax into a more neutral, comfortable position. Many patients experience significant symptom relief within weeks of consistent use.',
  },
  {
    id: 'physical-therapy',
    title: 'Physical therapy and jaw exercises',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Physical therapist guiding jaw and neck exercises for TMJ rehabilitation',
    description:
      'Targeted stretching and strengthening exercises for the jaw muscles can reduce tension, restore range of motion, and improve joint function over time. Your dentist can guide you through the appropriate exercises or refer you to a physiotherapist who specializes in jaw and craniofacial conditions.',
  },
  {
    id: 'botox-therapy',
    title: 'Therapeutic Botox® for masseter tension',
    image: 'https://images.unsplash.com/photo-1512290900672-1f02e20ffc06?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Targeted masseter muscle relaxation therapy',
    description:
      'Botox injected into hyperactive masseter and temporalis muscles reduces involuntary clenching power by up to 60-80% without affecting normal speech, chewing, or facial expression, providing dramatic relief from tension headaches.',
  },
  {
    id: 'cold-laser',
    title: 'Cold laser (PBMT) photobiomodulation',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Cold laser therapy for TMJ cellular recovery',
    description:
      'Advanced 810nm infrared laser wavelengths penetrate deep into the temporomandibular joint capsule, stimulating mitochondrial ATP synthesis, quelling local inflammation, and accelerating articular disc tissue repair.',
  },
];

interface InfiniteTreatmentsCarouselProps {
  onOpenBooking?: (prefillNotes?: string) => void;
}

export const InfiniteTreatmentsCarousel: React.FC<InfiniteTreatmentsCarouselProps> = () => {
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const isAutoPlayingRef = useRef(true);

  // Repeat items 6 times to provide true seamless infinite dragging
  const REPEAT_COUNT = 6;
  const cards = Array.from({ length: REPEAT_COUNT }, () => TREATMENTS_DATA).flat();

  // Card dimensions: Card width 410px + gap 28px = 438px per card
  const CARD_WIDTH = 410;
  const CARD_GAP = 28;
  const SINGLE_SET_WIDTH = TREATMENTS_DATA.length * (CARD_WIDTH + CARD_GAP);

  // Normalize offset within the seamless loop
  const normalizeOffset = useCallback((rawOffset: number) => {
    let normalized = rawOffset % SINGLE_SET_WIDTH;
    if (normalized > 0) {
      normalized -= SINGLE_SET_WIDTH;
    }
    return normalized;
  }, [SINGLE_SET_WIDTH]);

  // Handle Drag Start
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    isAutoPlayingRef.current = false;
    dragStartX.current = clientX;
    dragStartOffset.current = offset;
    lastXRef.current = clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
  };

  // Handle Drag Move
  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - dragStartX.current;
    const now = performance.now();
    const dt = Math.max(now - lastTimeRef.current, 1);
    const dx = clientX - lastXRef.current;

    velocityRef.current = (dx / dt) * 16;
    lastXRef.current = clientX;
    lastTimeRef.current = now;

    const newOffset = dragStartOffset.current + delta;
    setOffset(normalizeOffset(newOffset));
  };

  // Handle Drag End with momentum inertia
  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    let currentVel = velocityRef.current;
    let currentOff = offset;

    const stepInertia = () => {
      if (Math.abs(currentVel) > 0.25) {
        currentVel *= 0.94; // Friction damping
        currentOff += currentVel;
        setOffset(normalizeOffset(currentOff));
        animFrameRef.current = requestAnimationFrame(stepInertia);
      } else {
        isAutoPlayingRef.current = true;
      }
    };

    animFrameRef.current = requestAnimationFrame(stepInertia);
  };

  // Gentle continuous autoplay when user isn't actively dragging
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isDragging && isAutoPlayingRef.current) {
        // Slow gentle idle drift (0.4px per frame)
        setOffset((prev) => normalizeOffset(prev - (0.4 * (delta / 16.66))));
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isDragging, normalizeOffset]);

  return (
    <section id="tmj-treatment-options" className="relative w-full py-12 sm:py-16 lg:py-24 overflow-hidden select-none">
      {/* Background Starry Nebula Backdrop */}
      <div className="absolute inset-0 bg-[#050e1f] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pointer-events-none"
      />

      {/* Section Header */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18] mb-4">
          <span className="text-[#38bdf8]">TMJ treatment</span> options
        </h2>
        <p className="text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
          Treatment is always approached conservatively first. The great majority of TMJ disorders respond well to non-surgical management:
        </p>
      </div>

      {/* Infinite Draggable Stage */}
      <div
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        className={`relative w-full overflow-visible py-4 cursor-grab active:cursor-grabbing transition-opacity ${
          isDragging ? 'cursor-grabbing' : ''
        }`}
      >
        <div
          className="flex items-stretch gap-6 sm:gap-7 will-change-transform transition-none px-4"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {cards.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[310px] sm:w-[360px] md:w-[410px] shrink-0 relative flex flex-col justify-between rounded-[28px] sm:rounded-[30px] border border-gray-800/80 bg-gradient-to-b from-[#07162b]/95 via-[#040e1e]/95 to-[#0b2447]/90 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-sky-500/40 transition-all duration-300 group min-h-[520px] pointer-events-auto"
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Card Top Image matching screenshot */}
                <div className="relative rounded-[20px] sm:rounded-[22px] overflow-hidden aspect-[16/10] w-full bg-[#030914] border border-sky-500/10">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e1e]/40 to-transparent pointer-events-none" />
                </div>

                {/* Treatment Title */}
                <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight leading-snug pt-1">
                  {item.title}
                </h3>

                {/* Treatment Description */}
                <p className="text-xs sm:text-[13.5px] lg:text-[14.5px] text-gray-300 leading-[1.65] font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Glow Effect matching screenshot */}
              <div className="mt-6 h-2 w-full rounded-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Visual Edge Shadows */}
      <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#050e1f] to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#050e1f] to-transparent pointer-events-none z-20" />
    </section>
  );
};
