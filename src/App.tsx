import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { OfferAnalyzer } from './components/OfferAnalyzer.tsx';
import { WarningSigns } from './components/WarningSigns.tsx';
import { UserRoles } from './components/UserRoles.tsx';
import { VerificationChecklist } from './components/VerificationChecklist.tsx';
import { Roadmap } from './components/Roadmap.tsx';
import { WindowsSetupGuide } from './components/WindowsSetupGuide.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSetupGuideOpen, setIsSetupGuideOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Navigation Top Header */}
      <Header
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onOpenSetupGuide={() => setIsSetupGuideOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onAnalyzeClick={() => handleNavigate('analyzer')}
          onExploreWarningSigns={() => handleNavigate('warning-signs')}
          onOpenSetupGuide={() => setIsSetupGuideOpen(true)}
        />

        {/* Interactive Analyzer */}
        <OfferAnalyzer />

        {/* 6 Critical Scam Warning Signs */}
        <WarningSigns />

        {/* User Roles & Access (Students, Businesses, Admin) */}
        <UserRoles />

        {/* Safe Employer Verification Checklist */}
        <VerificationChecklist />

        {/* 10-Phase Project Roadmap */}
        <Roadmap />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSetupGuide={() => setIsSetupGuideOpen(true)}
      />

      {/* Windows PowerShell & Local Setup Guide Modal */}
      <WindowsSetupGuide
        isOpen={isSetupGuideOpen}
        onClose={() => setIsSetupGuideOpen(false)}
      />
    </div>
  );
}
