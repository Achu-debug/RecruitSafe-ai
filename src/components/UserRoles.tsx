import React, { useState } from 'react';
import { 
  GraduationCap, 
  Building2, 
  ShieldAlert, 
  CheckCircle2, 
  Lock, 
  Calendar, 
  FileSearch,
  Sparkles 
} from 'lucide-react';

export const UserRoles: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'business' | 'admin'>('students');

  return (
    <section id="roles" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
            <span>ACCESS GOVERNANCE</span>
            <span aria-hidden="true">·</span>
            <span>THREE USER CATEGORIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Tailored Access for Students, Businesses & Platform Admins
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            RecruitSafe AI unites candidates, legitimate employers, and platform administrators in a shared trust ecosystem.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-slate-800 mb-8 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setActiveTab('students')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === 'students'
                ? 'border-emerald-400 text-emerald-400 bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Students & Public</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('business')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === 'business'
                ? 'border-emerald-400 text-emerald-400 bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Business Accounts & Trial</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('admin')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === 'admin'
                ? 'border-emerald-400 text-emerald-400 bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Platform Administrator</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 sm:p-8">
          {activeTab === 'students' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
                  <span>FREE CANDIDATE ACCESS</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Protecting Students, Fresh Graduates & Everyday Job Seekers
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Job hunts are stressful enough without fearing financial fraud or identity theft. 
                  RecruitSafe AI guarantees that essential safety warnings and offer scans remain 100% free.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Instant Text & Offer Message Analysis</h4>
                      <p className="text-xs text-slate-400">Paste SMS, LinkedIn messages, or emails for rapid heuristic verification.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Explainable Risk Reports & Scoring</h4>
                      <p className="text-xs text-slate-400">Understand the exact reason why an offer is flagged (e.g. advance fee, check scam, Telegram redirect).</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Actionable Safety Guidance</h4>
                      <p className="text-xs text-slate-400">Step-by-step instructions on verifying corporate credentials without paying a dime.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Optional Consent-Based History</h4>
                      <p className="text-xs text-slate-400">Optional user accounts to save scan reports; businesses can never view private candidate searches.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-lg p-5">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                  Candidate Safeguards
                </span>
                <div className="space-y-3 text-xs text-slate-400">
                  <div className="p-3 rounded bg-slate-950 border border-slate-800/80">
                    <span className="font-semibold text-white block mb-0.5">No Paywall on Core Safety</span>
                    <span>Safety warnings must never be restricted to paying customers.</span>
                  </div>
                  <div className="p-3 rounded bg-slate-950 border border-slate-800/80">
                    <span className="font-semibold text-white block mb-0.5">Privacy First</span>
                    <span>No need to submit your resume or phone number to run basic checks.</span>
                  </div>
                  <div className="p-3 rounded bg-slate-950 border border-slate-800/80">
                    <span className="font-semibold text-white block mb-0.5">Community Reporting</span>
                    <span>Ability to anonymously report suspicious recruiters to safeguard fellow students.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'business' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
                  <span>ENTERPRISE & RECRUITMENT DEFENSE</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Business Verification & Impersonation Defense
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Scammers routinely hijack corporate brand names to deceive applicants. 
                  RecruitSafe AI gives legitimate enterprises an active defense console with a 3-month free trial.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Manual Admin Review Required</h4>
                      <p className="text-xs text-slate-400">No automated onboarding. Platform administrators manually verify domain ownership and corporate standing.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">3-Month Free Trial Upon Activation</h4>
                      <p className="text-xs text-slate-400">Full platform access with transparent start and end dates. Zero unconsented charges.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Brand Impersonation Case Management</h4>
                      <p className="text-xs text-slate-400">Receive alerts when scammers falsely use your company name, and review evidence reports.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Candidate Privacy Segregation</h4>
                      <p className="text-xs text-slate-400">Businesses never have access to private applicant scan histories or personal notes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Trial & Application Workflow
                  </span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-400">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-300">1. Apply via Business Portal</span>
                    <span className="text-[10px] text-slate-400">Corporate Email</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-300">2. Administrator Review</span>
                    <span className="text-[10px] text-amber-400">Manual Check</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-300">3. 3-Month Trial Activation</span>
                    <span className="text-[10px] text-emerald-400">Free Full Access</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-300">4. Renewal Consent</span>
                    <span className="text-[10px] text-slate-400">No Auto-Debit</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'admin' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
                  <span>SECURE SYSTEM CONTROLS</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Platform Administrator Console & Governance
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Dedicated, segregated console for the platform owner to oversee system health, review business applications, and maintain detection accuracy.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Private Admin Provisioning</h4>
                      <p className="text-xs text-slate-400">No public registration allowed for admin accounts. Server-enforced permissions on every call.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Business Application Approval & Trial Dates</h4>
                      <p className="text-xs text-slate-400">Approve, reject, or request more information from applying organizations with explicit trial date setting.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">False Positive / Negative Correction</h4>
                      <p className="text-xs text-slate-400">Review disputed scans and mark reports as Pending, Reviewed, Confirmed, Inconclusive, or Disputed.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Security Audit Logging & Cost Tracking</h4>
                      <p className="text-xs text-slate-400">Track privileged events, scan rate limits, and estimated AI API consumption costs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-lg p-5">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                  Admin Governance Safeguards
                </span>
                <div className="space-y-3 text-xs text-slate-400">
                  <div className="p-3 rounded bg-slate-950 border border-slate-800/80">
                    <span className="font-semibold text-rose-400 block mb-0.5">Zero Hardcoded Credentials</span>
                    <span>Admin passwords and secrets are strictly loaded via secure server-side env vars.</span>
                  </div>
                  <div className="p-3 rounded bg-slate-950 border border-slate-800/80">
                    <span className="font-semibold text-white block mb-0.5">Immutable Audit Trail</span>
                    <span>All administrative approvals, trial extensions, and status updates are logged.</span>
                  </div>
                  <div className="p-3 rounded bg-slate-950 border border-slate-800/80">
                    <span className="font-semibold text-white block mb-0.5">Rate & Abuse Throttles</span>
                    <span>Configurable quotas protect downstream services from volumetric scanning attacks.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
