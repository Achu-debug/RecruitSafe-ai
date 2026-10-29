import React from 'react';
import { ShieldCheck, Lock, Github, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenSetupGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSetupGuide }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>RecruitSafe AI</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md mb-4">
              Verify Before You Trust. Helping students, ordinary job seekers, fresh graduates, and businesses identify suspicious recruitment offers, understand warning signs, and make safer career decisions.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="text-emerald-400 font-semibold">Phase 1 Foundation</span>
              <span>·</span>
              <span>Built for Security & Explainability</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Platform</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('analyzer')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Interactive Offer Analyzer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('warning-signs')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  6 Critical Warning Signs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('roles')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  User Access (Student & Business)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('checklist')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Safe Verification Checklist
                </button>
              </li>
            </ul>
          </div>

          {/* Engineering Resources */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Developer & Setup</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenSetupGuide}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Windows Setup Walkthrough
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('roadmap')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  10-Phase Roadmap
                </button>
              </li>
              <li>
                <span className="text-slate-400">Streamlit & Python 3.10+</span>
              </li>
              <li>
                <span className="text-slate-400">Privacy & Data Safeguards</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-8 text-[11px] leading-relaxed text-slate-400">
          <strong className="text-slate-300 block mb-1">Important Legal & Safety Disclaimer:</strong>
          RecruitSafe AI provides automated risk indicators, heuristic pattern extraction, and educational guidance to assist candidates in evaluating recruitment communications. Risk assessments and scores do not constitute definitive legal proof of fraud, official corporate verification, or criminal allegations. Always verify job postings independently through official corporate career portals (e.g. company.com/careers) before sharing sensitive personal data or signing agreements.
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} RecruitSafe AI. All rights reserved. Essential safety checks remain free.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Verify Before You Trust</span>
            <span>·</span>
            <span>Zero Data Harvesting</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
