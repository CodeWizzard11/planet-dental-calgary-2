import React, { useState, useRef, useEffect } from 'react';
import { TEAM_MEMBERS } from '../data/dentalData';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface TeamSectionProps {
  onOpenBookingWithDoctor: (doctorName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBookingWithDoctor }) => {
  const [hoveredDoctorKey, setHoveredDoctorKey] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Dragging state
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Triple the items for seamless infinite feeling in both directions
  const infiniteTeamMembers = [
    ...TEAM_MEMBERS.map(d => ({ ...d, uniqueKey: `set1-${d.id}` })),
    ...TEAM_MEMBERS.map(d => ({ ...d, uniqueKey: `set2-${d.id}` })),
    ...TEAM_MEMBERS.map(d => ({ ...d, uniqueKey: `set3-${d.id}` })),
    ...TEAM_MEMBERS.map(d => ({ ...d, uniqueKey: `set4-${d.id}` })),
  ];

  // Initialize scroll position in the middle for infinite dragging in both left and right directions
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const singleSetWidth = container.scrollWidth / 4;
      container.scrollLeft = singleSetWidth;
    }
  }, []);

  // Handle infinite wrap-around on scroll
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const singleSetWidth = container.scrollWidth / 4;
    // If scrolled too far right
    if (container.scrollLeft >= singleSetWidth * 2.5) {
      container.scrollLeft -= singleSetWidth;
    } 
    // If scrolled too far left
    else if (container.scrollLeft <= singleSetWidth * 0.5) {
      container.scrollLeft += singleSetWidth;
    }
  };

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsMouseDown(true);
    setHasDragged(false);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity multiplier
    if (Math.abs(x - startX) > 5) {
      setHasDragged(true);
    }
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  // Step scroll buttons
  const scrollStep = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 320;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="team" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto overflow-hidden">
      {/* Background Cosmic Starfield & Nebula */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-sky-600/10 rounded-full blur-[130px]" />
        <div className="absolute top-12 left-12 w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse opacity-80" />
        <div className="absolute top-20 right-24 w-2 h-2 bg-white rounded-full opacity-60" />
      </div>

      {/* Top Header Row matching screenshot */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mb-10 sm:mb-14">
        {/* Left Column: Pill & Big Heading */}
        <div className="space-y-4 max-w-xl text-left">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white text-[#050e1f] text-xs font-extrabold py-2 px-5 rounded-full uppercase tracking-wider shadow-md inline-block"
          >
            OUR TEAM
          </motion.div>

          <motion.h2 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.18] tracking-tight"
          >
            Experienced Clinicians who’ll be <span className="text-[#38bdf8]">The Center of Your Dental Care</span>
          </motion.h2>
        </div>

        {/* Right Column: Paragraph Text + Carousel Arrow Controls */}
        <motion.div 
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl text-left space-y-4"
        >
          <div className="space-y-3">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              Our dentists combine clinical expertise with a calm, patient-first approach. They stay current with evolving techniques while never losing sight of what matters most—listening, explaining, and building trust.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              At Planet Dental, you’re not rushed through appointments or treated like a chart number. You’re part of our practice community.
            </p>
          </div>

          {/* Drag navigation controls & badge */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-xs text-sky-300/80 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Drag or swipe cards freely</span>
            </div>

            {/* Left & Right arrow controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollStep('left')}
                className="w-9 h-9 rounded-full bg-[#081f3d] border border-sky-800/70 text-white hover:bg-sky-500 hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
                aria-label="Previous dentist"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollStep('right')}
                className="w-9 h-9 rounded-full bg-[#081f3d] border border-sky-800/70 text-white hover:bg-sky-500 hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
                aria-label="Next dentist"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Infinite Draggable Carousel Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex gap-5 sm:gap-6 overflow-x-auto pb-8 pt-2 select-none hide-scrollbar scroll-smooth ${
          isMouseDown ? 'cursor-grabbing active:cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {infiniteTeamMembers.map((doctor) => {
          const isHovered = hoveredDoctorKey === doctor.uniqueKey;

          return (
            <div
              key={doctor.uniqueKey}
              onMouseEnter={() => !isMouseDown && setHoveredDoctorKey(doctor.uniqueKey)}
              onMouseLeave={() => setHoveredDoctorKey(null)}
              onClick={() => {
                if (!hasDragged) {
                  onOpenBookingWithDoctor(doctor.name);
                }
              }}
              className="shrink-0 w-[260px] sm:w-[280px] md:w-[295px] h-[380px] sm:h-[420px] rounded-[28px] overflow-hidden relative border border-sky-900/50 bg-[#07172f] shadow-2xl group cursor-pointer transition-all duration-300 hover:border-sky-400/80 hover:shadow-[0_15px_35px_rgba(56,189,248,0.2)]"
            >
              {/* Clinician Photo */}
              <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-[#081e3d] via-[#06152e] to-[#040e21]">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  draggable={false}
                  className={`w-full h-full object-cover object-top transition-all duration-500 pointer-events-none ${
                    isHovered ? 'scale-105 filter brightness-75 blur-[1px]' : 'scale-100 filter brightness-100'
                  }`}
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Cyan Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021833] via-[#021833]/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#018ec7]/30 via-transparent to-transparent opacity-90 pointer-events-none" />
              </div>

              {/* Normal Default View (Bottom Name + DENTIST Badge) */}
              <div 
                className={`absolute bottom-0 inset-x-0 p-5 sm:p-6 text-left z-10 space-y-3 transition-opacity duration-300 ${
                  isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                  {doctor.name}
                </h3>

                {/* DENTIST White Pill Tag */}
                <div className="inline-block bg-white text-[#050e1f] text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {doctor.title}
                </div>
              </div>

              {/* Hover Details View matching Screenshot */}
              <div 
                className={`absolute inset-0 p-6 sm:p-7 flex flex-col justify-center text-left z-20 transition-all duration-300 bg-gradient-to-b from-[#03132bb8] via-[#03132bcc] to-[#020e22ee] backdrop-blur-[2px] ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                {/* Doctor Name at Mid-Top */}
                <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight leading-snug drop-shadow-md mb-2.5">
                  {doctor.name}
                </h3>

                {/* DENTIST Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-white text-[#050e1f] text-[10px] sm:text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {doctor.title}
                  </span>
                </div>

                {/* Bio text matching screenshot */}
                <p className="text-xs sm:text-[13px] text-gray-200 leading-relaxed font-normal line-clamp-6">
                  {doctor.bio}
                </p>

                {/* Quick Hint / Action */}
                <div className="mt-4 pt-3 border-t border-sky-500/20 flex items-center justify-between text-[11px] text-[#38bdf8] font-semibold">
                  <span>Book Consultation</span>
                  <span>↗</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};
