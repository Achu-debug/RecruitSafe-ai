import React from 'react';
import { ShieldCheck, ArrowDown, Terminal, CheckCircle2, AlertOctagon } from 'lucide-react';

interface HeroProps {
  onAnalyzeClick: () => void;
  onExploreWarningSigns: () => void;
  onOpenSetupGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onAnalyzeClick,
  onExploreWarningSigns,
  onOpenSetupGuide,
}) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/80 overflow-hidden bg-radial from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Milestone indicator */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <span className="text-emerald-400 font-semibold">Phase 1 Foundation</span>
            <span aria-hidden="true">·</span>
            <span>Local Python & Streamlit Engine</span>
            <span aria-hidden="true">·</span>
            <span>Rules-Based Heuristics</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 text-balance">
            Verify Before You Trust.
            <span className="block text-slate-400 font-medium text-2xl sm:text-3xl lg:text-4xl mt-2">
              Protecting job seekers and organizations from recruitment fraud.
            </span>
          </h1>

          {/* Mission statement */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
            RecruitSafe AI empowers students, fresh graduates, and everyday applicants to spot fake job offers, check cashing schemes, enterprise impersonation, and upfront fee demands with explainable evidence.
          </p>

          {/* Call to actions */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onAnalyzeClick}
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-sm flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>Launch Interactive Analyzer</span>
            </button>

            <button
              onClick={onExploreWarningSigns}
              className="px-5 py-3.5 text-sm font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <AlertOctagon className="w-4 h-4 text-amber-400" />
              <span>6 Critical Warning Signs</span>
            </button>

            <button
              onClick={onOpenSetupGuide}
              className="px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Windows Setup Guide</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Free Public Scans</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Essential safety checks and warning sign detection remain permanently free for candidates.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent Evidence</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                No black-box guesses. We clearly cite the exact suspicious phrases and explain their risk mechanics.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Privacy by Design</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                No account required for basic scans. We do not harvest resumes or collect sensitive banking data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
