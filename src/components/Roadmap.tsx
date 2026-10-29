import React from 'react';
import { CheckCircle2, Clock, ArrowRight, Shield } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const PHASES = [
    {
      number: '01',
      title: 'Foundation & Windows Setup',
      status: 'ACTIVE NOW',
      statusClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'Streamlit landing page, Windows virtualenv setup, constants configuration, and architectural baseline.',
    },
    {
      number: '02',
      title: 'Rules-Based Analyzer',
      status: 'UPCOMING',
      statusClass: 'bg-slate-800 text-slate-400 border-slate-700',
      description: 'Python regex and explainable heuristic engine, warning sign definitions, and deterministic unit tests.',
    },
    {
      number: '03',
      title: 'Initial Machine Learning Baseline',
      status: 'UPCOMING',
      statusClass: 'bg-slate-800 text-slate-400 border-slate-700',
      description: 'scikit-learn text classifier, synthetic and vetted training data, precision/recall metrics, and limitation notes.',
    },
    {
      number: '04',
      title: 'Official xAI / Grok Integration',
      status: 'UPCOMING',
      statusClass: 'bg-slate-800 text-slate-400 border-slate-700',
      description: 'Server-side Grok API client, structured evidence synthesis, rate limiting, and local fallback reliability.',
    },
    {
      number: '05',
      title: 'User Accounts & Saved History',
      status: 'UPCOMING',
      statusClass: 'bg-slate-800 text-slate-400 border-slate-700',
      description: 'Secure authentication, consent-driven saved scans, applicant report submission, and data deletion controls.',
    },
    {
      number: '06',
      title: 'Platform Administrator Console',
      status: 'UPCOMING',
      statusClass: 'bg-slate-800 text-slate-400 border-slate-700',
      description: 'Private admin login, business application review, false positive correction workflow, and audit logging.',
    },
    {
      number: '07',
      title: 'Business Accounts & 3-Month Trial',
      status: 'UPCOMING',
      statusClass: 'bg-slate-800 text-slate-400 border-slate-700',
      description: 'Manual enterprise verification, automated 3-month trial tracking, and brand impersonation alerts.',
    },
    {
      number: '08',
      title: 'Security Auditing & Pilot Testing',
      status: 'UPCOMING',
      statusClass: 'bg-slate-800 text-slate-400 border-slate-700',
      description: 'Server-side authorization tests, SSRF protection for link previews, and student community feedback loops.',
    },
    {
      number: '09',
      title: 'Monetization & Cost Accounting',
      status: 'UPCOMING',
      statusClass: 'bg-slate-800 text-slate-400 border-slate-700',
      description: 'AI token cost budgeting, verified payment processing, and business subscription billing with explicit consent.',
    },
    {
      number: '10',
      title: 'Production Deployment & Scale',
      status: 'UPCOMING',
      statusClass: 'bg-slate-800 text-slate-400 border-slate-700',
      description: 'PostgreSQL database migration, Docker containerization, HTTPS hardening, and operational monitoring.',
    },
  ];

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
            <span>ENGINEERING DISCIPLINE</span>
            <span aria-hidden="true">·</span>
            <span>10-PHASE DEVELOPMENT PLAN</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Structured Development Roadmap
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We build RecruitSafe AI systematically in verified milestones—starting with simple, explainable foundations before introducing machine learning and external AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PHASES.map((phase) => {
            const isActive = phase.status === 'ACTIVE NOW';
            return (
              <div
                key={phase.number}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                  isActive
                    ? 'bg-slate-950 border-emerald-500/60 shadow-lg shadow-emerald-950/20'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-sm font-bold text-slate-400">
                      Phase {phase.number}
                    </span>
                    <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded border ${phase.statusClass}`}>
                      {phase.status}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white tracking-tight mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {phase.description}
                  </p>
                </div>

                {isActive && (
                  <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Current Focus</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
