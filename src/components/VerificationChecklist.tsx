import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, AlertCircle, ExternalLink } from 'lucide-react';

export const VerificationChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const CHECKLIST = [
    {
      id: 1,
      rule: 'Never pay any fee to apply, interview, or receive equipment.',
      detail: 'Legitimate employers cover application processing, onboarding, and provide computer equipment directly. Any request for payment—via Zelle, wire, cryptocurrency, or gift cards—is fraudulent.',
    },
    {
      id: 2,
      rule: 'Independently browse to the official company domain.',
      detail: 'Never click links inside unverified emails. Manually type the company name into your web browser, check for a valid SSL certificate, and locate their official careers page.',
    },
    {
      id: 3,
      rule: 'Verify that the Job Requisition ID exists on the official careers portal.',
      detail: 'Enterprise job postings have unique Requisition numbers. If the recruiter claims to represent a recognized company, search their public jobs database for that exact title and location.',
    },
    {
      id: 4,
      rule: 'Cross-reference the recruiter on LinkedIn and company directory.',
      detail: 'Check how long the recruiter has been at the company, whether they have mutual professional connections, and verify that their listed corporate email domain matches @company.com.',
    },
    {
      id: 5,
      rule: 'Never deposit a mailed check to purchase supplies from an "authorized vendor".',
      detail: 'This is the infamous fake-check overpayment scam. The check will temporarily show as "funds available" due to federal banking rules, but will bounce 3–7 business days later, leaving you fully responsible.',
    },
  ];

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <section id="checklist" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
            <span>CANDIDATE DEFENSE GUIDE</span>
            <span aria-hidden="true">·</span>
            <span>ACTIONABLE CHECKLIST</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Safe Employer Verification Checklist
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Run through these 5 essential safety checks before signing contracts, sharing personal documents, or accepting an offer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Checklist interactive container */}
          <div className="lg:col-span-8 space-y-4">
            {CHECKLIST.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-4 ${
                    isChecked
                      ? 'bg-emerald-950/20 border-emerald-500/50 text-slate-200'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      toggleCheck(item.id);
                    }
                  }}
                >
                  <div className="pt-0.5">
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                        isChecked
                          ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                          : 'border-slate-600 bg-slate-950'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-sm font-bold tracking-tight mb-1 ${isChecked ? 'text-emerald-300' : 'text-white'}`}>
                      {item.rule}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Checklist Status Card */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white tracking-tight">Checklist Progress</h3>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                <span className="text-slate-400">Completed Checks</span>
                <span className="text-emerald-400 font-mono">{completedCount} of 5</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                <div
                  className="bg-emerald-400 h-full transition-all duration-300 ease-out"
                  style={{ width: `${(completedCount / 5) * 100}%` }}
                />
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-3 leading-relaxed border-t border-slate-800/80 pt-4">
              {completedCount === 5 ? (
                <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-lg text-emerald-300">
                  <span className="font-semibold block mb-0.5">All 5 Checks Complete!</span>
                  <span>You have verified all essential security safeguards. If any warning signs still appear in your offer scan, proceed with extreme caution.</span>
                </div>
              ) : (
                <p>
                  Tick off each safety condition as you verify the offer. Never skip Step 1 or Step 5 under any circumstance.
                </p>
              )}

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                <strong className="text-slate-300 block mb-1">Golden Rule:</strong>
                If someone asks you for money to give you a job, they are taking your money, not giving you a job.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
