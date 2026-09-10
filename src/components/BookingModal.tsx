import React, { useState, useEffect } from 'react';
import { X, Calendar, ChevronDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AppointmentBooking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmBooking: (booking: AppointmentBooking) => void;
  preselectedServiceId?: string;
  preselectedDoctorName?: string;
  initialNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onConfirmBooking,
  preselectedServiceId = 'Service',
  preselectedDoctorName = 'Dr. Sumit',
  initialNotes
}) => {
  if (!isOpen) return null;

  // Format today's date or user's requested date formatted
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: todayStr,
    service: preselectedServiceId !== 'restorative' && preselectedServiceId ? preselectedServiceId : 'Service',
    message: initialNotes || ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedServiceId && preselectedServiceId !== 'restorative') {
      setFormData(prev => ({ ...prev, service: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (initialNotes) {
      setFormData(prev => ({ ...prev, message: initialNotes }));
    }
  }, [initialNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and contact phone number.');
      return;
    }

    const booking: AppointmentBooking = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferredDate: formData.date,
      serviceId: formData.service === 'Service' ? 'General Consultation / Cleaning' : formData.service,
      doctorPreference: preselectedDoctorName,
      notes: formData.message
    };

    onConfirmBooking(booking);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#030914]/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Container matching screenshot */}
      <div className="bg-gradient-to-b from-[#081f3d] via-[#061833] to-[#040e21] border border-sky-800/40 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 max-w-4xl w-full relative shadow-[0_25px_60px_rgba(0,0,0,0.85)] my-auto">
        
        {/* Square Close Button in Top-Right with Border matching screenshot */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 w-8 h-8 rounded-[6px] border border-sky-400/80 bg-[#092a54] text-white flex items-center justify-center hover:bg-sky-500 hover:border-white transition-all cursor-pointer shadow-md z-10"
          aria-label="Close appointment modal"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4 animate-scaleUp">
            <CheckCircle2 className="w-16 h-16 text-[#38bdf8] mx-auto animate-bounce" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Appointment Request Sent!</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>! Our Planet Dental Calgary team will contact you shortly at <strong className="text-[#38bdf8]">{formData.phone}</strong> to confirm your appointment details.
            </p>
          </div>
        ) : (
          <div>
            {/* Header: Book An Appointment matching screenshot */}
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight">
                Book An <span className="text-[#38bdf8]">Appointment</span>
              </h3>
            </div>

            {/* Form Fields matching screenshot */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Row 1: Name, Email, Phone Number (3 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                <div>
                  <input 
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] placeholder-gray-500 shadow-inner"
                  />
                </div>

                <div>
                  <input 
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] placeholder-gray-500 shadow-inner"
                  />
                </div>

                <div>
                  <input 
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] placeholder-gray-500 shadow-inner"
                  />
                </div>
              </div>

              {/* Row 2: Date Picker + Service Dropdown (2 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Date Input with Calendar Icon matching screenshot */}
                <div className="relative">
                  <input 
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] shadow-inner cursor-pointer"
                  />
                  <Calendar className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Service Select with Chevron Down matching screenshot */}
                <div className="relative">
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] shadow-inner appearance-none cursor-pointer pr-10"
                  >
                    <option value="Service">Service</option>
                    <option value="Orthodontics (Braces/Clear Aligners)">Orthodontics (Braces/Clear Aligners)</option>
                    <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                    <option value="Preventive Dentistry">Preventive Dentistry</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Emergency Dental Care">Emergency Dental Care</option>
                    <option value="Fillings">Fillings</option>
                    <option value="Dental Full Check Up">Dental Full Check Up</option>
                    <option value="Hygiene/ Cleaning">Hygiene/ Cleaning</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Custom Night Guards">Custom Night Guards</option>
                    <option value="Sedation Dentistry">Sedation Dentistry</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Wisdom Tooth Removal">Wisdom Tooth Removal</option>
                    <option value="TMJ & Jaw Pain Relief">TMJ & Jaw Pain Relief</option>
                    <option value="Botox for TMJ / Clenching">Botox for TMJ / Clenching</option>
                    <option value="Custom TMJ Night Guards / Splints">Custom TMJ Night Guards / Splints</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Row 3: Type Your Message Textarea matching screenshot */}
              <div>
                <textarea 
                  rows={4}
                  placeholder="Type Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] placeholder-gray-500 shadow-inner"
                />
              </div>

              {/* Row 4: Submit Button Centered matching screenshot */}
              <div className="flex justify-center pt-2">
                <button 
                  type="submit"
                  className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all cursor-pointer text-xs sm:text-sm group"
                >
                  <span>Submit</span>
                  <div className="w-5 h-5 rounded-full bg-[#050e1f] text-white flex items-center justify-center text-xs group-hover:bg-black transition-colors">
                    <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
