import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface CauseItem {
  id: string;
  badge: string;
  title: string;
  description: string;
}

const CAUSES_DATA: CauseItem[] = [
  {
    id: 'arthritis',
    badge: '03',
    title: 'Arthritis',
    description:
      'Both osteoarthritis and rheumatoid arthritis can affect the temporomandibular joint, causing progressive degeneration and inflammation of the joint structures.',
  },
  {
    id: 'trauma',
    badge: '04',
    title: 'Jaw injury or trauma',
    description:
      'A blow to the jaw, prolonged dental procedures requiring the mouth to be held open, or whiplash can all initiate or worsen TMJ symptoms.',
  },
  {
    id: 'bruxism',
    badge: '01',
    title: 'Bruxism (teeth grinding or clenching)',
    description:
      'One of the most common contributors. The sustained muscular tension and joint loading from nighttime grinding places significant stress on the TMJ and surrounding muscles over time.',
  },
  {
    id: 'disc-problems',
    badge: '02',
    title: 'Joint disc problems',
    description:
      'The TMJ contains a small cartilage disc that cushions the joint and allows smooth movement. If this disc becomes worn, displaced, or misaligned, it can cause clicking, locking, and pain.',
  },
];

export const InfiniteCausesCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const isAutoPlayingRef = useRef(true);

  // Repeat cards 6 times to create an infinite seamless track
  const REPEAT_COUNT = 6;
  const cards = Array.from({ length: REPEAT_COUNT }, () => CAUSES_DATA).flat();

  // Card dimensions: Card width 330px + gap 24px = 354px per card
  const CARD_WIDTH = 330;
  const CARD_GAP = 24;
  const SINGLE_SET_WIDTH = CAUSES_DATA.length * (CARD_WIDTH + CARD_GAP);

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

    velocityRef.current = (dx / dt) * 16; // Pixels per frame
    lastXRef.current = clientX;
    lastTimeRef.current = now;

    const newOffset = dragStartOffset.current + delta;
    setOffset(normalizeOffset(newOffset));
  };

  // Handle Drag End with smooth inertia
  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Apply inertia physics
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

  // Gentle continuous autoplay when user isn't actively interacting
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isDragging && isAutoPlayingRef.current) {
        // Slow gentle idle drift (0.4px per frame)
        setOffset((prev) => normalizeOffset(prev - (0.45 * (delta / 16.66))));
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isDragging, normalizeOffset]);

  return (
    <div className="relative w-full overflow-hidden select-none py-2">
      {/* Infinite Draggable Stage */}
      <div
        ref={containerRef}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        className={`w-full overflow-visible py-4 cursor-grab active:cursor-grabbing transition-opacity ${
          isDragging ? 'cursor-grabbing' : ''
        }`}
      >
        <div
          className="flex items-stretch gap-6 will-change-transform transition-none"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {cards.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[280px] sm:w-[310px] md:w-[330px] shrink-0 relative flex flex-col justify-between rounded-[28px] border border-gray-800/80 bg-gradient-to-b from-[#071529]/95 via-[#040e1e]/95 to-[#0b2240]/85 p-6 sm:p-7 shadow-[0_20px_45px_rgba(0,0,0,0.6)] hover:border-sky-500/40 transition-all duration-300 group min-h-[440px] pointer-events-auto"
            >
              <div className="space-y-6">
                {/* Number Badge with glowing base gradient matching screenshot */}
                <div className="w-[68px] h-[60px] rounded-2xl bg-gradient-to-b from-[#0a1b33] via-[#0d274c] to-[#1a5591] border border-sky-400/30 shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_20px_rgba(56,189,248,0.25)] flex items-center justify-center text-white font-bold text-2xl tracking-wide group-hover:scale-105 transition-transform relative overflow-hidden">
                  <span className="relative z-10">{item.badge}</span>
                  {/* Subtle bottom diffuse glow within badge */}
                  <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-sky-400/40 to-transparent pointer-events-none" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-semibold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[14px] lg:text-[14.5px] text-gray-300/90 leading-[1.65] font-normal">
                  {item.description}
                </p>
              </div>

              {/* Downside Glowing Effect matching screenshot (No button, pure atmospheric effect) */}
              <div className="mt-8 h-20 w-full rounded-2xl bg-gradient-to-b from-[#123866]/50 via-[#0d284b]/60 to-[#071830]/80 border border-sky-500/20 shadow-[inset_0_1px_15px_rgba(56,189,248,0.2),0_4px_20px_rgba(0,0,0,0.3)] pointer-events-none relative overflow-hidden">
                {/* Inner soft ambient top glow light bar */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-sky-500/5 to-sky-400/10 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual edge fade gradients for infinite depth */}
      <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#050e1f] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#050e1f] to-transparent pointer-events-none z-10" />
    </div>
  );
};
