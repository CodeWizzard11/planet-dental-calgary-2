/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ActiveTab, AppointmentBooking } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoCards } from './components/InfoCards';
import { Philosophy } from './components/Philosophy';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { TechnologySection } from './components/TechnologySection';
import { SmilesTransformedSection } from './components/SmilesTransformedSection';
import { PricingSection } from './components/PricingSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfficeLocationSection } from './components/OfficeLocationSection';
import { StickyScheduleTab } from './components/StickyScheduleTab';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { BookingModal } from './components/BookingModal';
import { EmergencyModal } from './components/EmergencyModal';
import { TMJDisorderPage } from './components/TMJDisorderPage';
import { WisdomTeethPage } from './components/WisdomTeethPage';
import { OrthodonticsPage } from './components/OrthodonticsPage';
import { PediatricDentistryPage } from './components/PediatricDentistryPage';
import { PreventiveDentistryPage } from './components/PreventiveDentistryPage';
import { RootCanalPage } from './components/RootCanalPage';
import { EmergencyDentalPage } from './components/EmergencyDentalPage';
import { FillingsPage } from './components/FillingsPage';
import { FAQSection } from './components/FAQSection';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('restorative');
  const [preselectedDoctor, setPreselectedDoctor] = useState('Dr. Sumit');
  const [bookingNotes, setBookingNotes] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSelectTab = (tab: ActiveTab) => {
    if (tab === 'tmj') {
      setActiveTab('tmj');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'wisdom-teeth') {
      setActiveTab('wisdom-teeth');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'orthodontics') {
      setActiveTab('orthodontics');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'pediatric-dentistry' || tab === 'pediatric') {
      setActiveTab('pediatric-dentistry');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'preventive-dentistry' || tab === 'preventive') {
      setActiveTab('preventive-dentistry');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'root-canal' || tab === 'root-canal-treatment') {
      setActiveTab('root-canal');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'emergency' || tab === 'emergency-dental-care') {
      setActiveTab('emergency');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'fillings' || tab === 'dental-fillings') {
      setActiveTab('fillings');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // When navigating to any other section from TMJ or another tab
    setActiveTab('home');

    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetSectionMap: Record<string, string> = {
      'about-us': 'our-philosophy',
      'implants': 'services',
      'fees-financing': 'pricing',
      'financing': 'pricing',
      'pricing': 'pricing',
      'treatments': 'services',
      'services': 'services',
      'faq': 'faq',
      'transformations': 'transformations',
      'testimonials': 'testimonials',
      'team': 'team',
      'contact': 'contact-form'
    };

    const targetId = targetSectionMap[tab] || tab;
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  const handleOpenBookingWithService = (serviceId: string, customNotes?: string) => {
    setPreselectedService(serviceId);
    setBookingNotes(customNotes);
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithPlan = (planTitle: string) => {
    setPreselectedService(planTitle);
    setBookingNotes(undefined);
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithDoctor = (doctorName: string) => {
    setPreselectedDoctor(doctorName);
    setBookingNotes(undefined);
    setIsBookingModalOpen(true);
  };

  const handleSuccessBooking = (booking: AppointmentBooking) => {
    setToastMessage(`Appointment booked for ${booking.name}! Our team will contact you shortly.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#050e1f] text-white flex flex-col font-sans relative pb-16 md:pb-0 selection:bg-sky-400 selection:text-slate-900">
      {/* Top Header Navigation matching screenshot */}
      <Header 
        activeTab={activeTab} 
        onSelectTab={handleSelectTab} 
        onOpenBooking={() => setIsBookingModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {activeTab === 'tmj' ? (
          <TMJDisorderPage 
            onOpenBooking={(note) => handleOpenBookingWithService('TMJ & Jaw Pain Relief', note)}
            onNavigateHome={() => handleSelectTab('home')}
          />
        ) : activeTab === 'wisdom-teeth' ? (
          <WisdomTeethPage 
            onOpenBooking={(note) => handleOpenBookingWithService('Wisdom Tooth Removal', note)}
            onNavigateHome={() => handleSelectTab('home')}
          />
        ) : activeTab === 'orthodontics' ? (
          <OrthodonticsPage 
            onOpenBooking={(note) => handleOpenBookingWithService('Orthodontics (Braces/Clear Aligners)', note)}
            onNavigateHome={() => handleSelectTab('home')}
          />
        ) : activeTab === 'pediatric-dentistry' || activeTab === 'pediatric' ? (
          <PediatricDentistryPage 
            onOpenBooking={(note) => handleOpenBookingWithService('Pediatric Dentistry', note)}
            onNavigateHome={() => handleSelectTab('home')}
          />
        ) : activeTab === 'preventive-dentistry' || activeTab === 'preventive' ? (
          <PreventiveDentistryPage 
            onOpenBooking={(note) => handleOpenBookingWithService('Preventive Dentistry', note)}
            onNavigateHome={() => handleSelectTab('home')}
          />
        ) : activeTab === 'root-canal' || activeTab === 'root-canal-treatment' ? (
          <RootCanalPage 
            onOpenBooking={(note) => handleOpenBookingWithService('Root Canal Treatment', note)}
            onNavigateHome={() => handleSelectTab('home')}
          />
        ) : activeTab === 'emergency' || activeTab === 'emergency-dental-care' ? (
          <EmergencyDentalPage 
            onOpenBooking={(note) => handleOpenBookingWithService('Emergency Dental Care', note)}
            onNavigateHome={() => handleSelectTab('home')}
          />
        ) : activeTab === 'fillings' || activeTab === 'dental-fillings' ? (
          <FillingsPage 
            onOpenBooking={(note) => handleOpenBookingWithService('Tooth Coloured Dental Fillings', note)}
            onNavigateHome={() => handleSelectTab('home')}
          />
        ) : (
          <>
            {/* Front Panel Hero Section matching screenshot */}
            <Hero 
              onOpenBooking={() => setIsBookingModalOpen(true)} 
              onTakeTour={() => {
                const el = document.getElementById('our-philosophy');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 4 Feature Cards Strip matching screenshot */}
            <InfoCards 
              onOpenBooking={() => setIsBookingModalOpen(true)}
              onSelectEmergencyTab={() => setIsEmergencyModalOpen(true)}
              onSelectInsurance={() => {
                const el = document.getElementById('pricing');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Philosophy Section */}
            <Philosophy 
              onMeetTeam={() => handleSelectTab('team')} 
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />

            {/* Why Choose Planet Dental */}
            <WhyChooseUs />

            {/* Services / Treatments Section */}
            <ServicesSection 
              onSelectServiceForBooking={handleOpenBookingWithService} 
              onNavigateTab={handleSelectTab}
            />

            {/* Technology Section matching screenshot sequence */}
            <TechnologySection 
              onOpenBooking={() => setIsBookingModalOpen(true)} 
            />

            {/* Thousand of Smiles Transformed / Before & After Section */}
            <SmilesTransformedSection 
              onOpenBooking={() => setIsBookingModalOpen(true)} 
            />

            {/* Pricing Plans matching screenshot */}
            <PricingSection 
              onSelectPlanForBooking={handleOpenBookingWithPlan} 
            />

            {/* Clinicians Team Section */}
            <TeamSection 
              onOpenBookingWithDoctor={handleOpenBookingWithDoctor} 
            />

            {/* Testimonials / Patient Reviews Section */}
            <TestimonialsSection />

            {/* Frequently Asked Questions Section */}
            <FAQSection 
              onOpenBooking={() => setIsBookingModalOpen(true)} 
            />

            {/* Office Location & Appointment Form */}
            <OfficeLocationSection 
              onSuccessBooking={handleSuccessBooking} 
              prefilledService={preselectedService}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
      />

      {/* Bottom Sticky Mobile Navigation Bar */}
      <BottomNav 
        activeTab={activeTab} 
        onSelectTab={handleSelectTab} 
      />

      {/* Sticky On-Scroll Schedule Appointment Magenta Tab */}
      <StickyScheduleTab 
        onOpenBooking={() => setIsBookingModalOpen(true)} 
      />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onConfirmBooking={handleSuccessBooking}
        preselectedServiceId={preselectedService}
        preselectedDoctorName={preselectedDoctor}
        initialNotes={bookingNotes}
      />

      {/* Emergency Modal */}
      <EmergencyModal 
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onNavigateEmergencyPage={() => handleSelectTab('emergency')}
      />

      {/* Success Notification Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#38bdf8] text-[#061530] font-bold px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white animate-bounce max-w-sm">
          <CheckCircle2 className="w-6 h-6 shrink-0" />
          <span className="text-xs sm:text-sm">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
