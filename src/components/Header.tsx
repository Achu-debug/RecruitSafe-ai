import React from 'react';
import { ShieldCheck, Terminal, AlertTriangle, BookOpen } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenSetupGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection, onOpenSetupGuide }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <div 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onNavigate('hero')}
          aria-label="RecruitSafe AI home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors shrink-0">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base sm:text-lg text-white tracking-tight whitespace-nowrap">RecruitSafe AI</span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 tracking-wider hidden xs:inline">PHASE 1</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 truncate">Verify Before You Trust</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300" aria-label="Main navigation">
          <button
            onClick={() => onNavigate('analyzer')}
            className={`transition-colors hover:text-white ${activeSection === 'analyzer' ? 'text-emerald-400' : ''}`}
          >
            Offer Analyzer
          </button>
          <button
            onClick={() => onNavigate('warning-signs')}
            className={`transition-colors hover:text-white ${activeSection === 'warning-signs' ? 'text-emerald-400' : ''}`}
          >
            Warning Signs
          </button>
          <button
            onClick={() => onNavigate('roles')}
            className={`transition-colors hover:text-white ${activeSection === 'roles' ? 'text-emerald-400' : ''}`}
          >
            User Access
          </button>
          <button
            onClick={() => onNavigate('checklist')}
            className={`transition-colors hover:text-white ${activeSection === 'checklist' ? 'text-emerald-400' : ''}`}
          >
            Safety Checklist
          </button>
          <button
            onClick={() => onNavigate('roadmap')}
            className={`transition-colors hover:text-white ${activeSection === 'roadmap' ? 'text-emerald-400' : ''}`}
          >
            Roadmap
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSetupGuide}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            title="Open Windows PowerShell & Streamlit Setup Guide"
            aria-label="Windows setup guide"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Windows Setup</span>
          </button>

          <button
            onClick={() => onNavigate('analyzer')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm"
          >
            <span>Scan Offer Free</span>
          </button>
        </div>
      </div>
    </header>
  );
};
