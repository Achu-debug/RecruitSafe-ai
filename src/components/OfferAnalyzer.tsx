import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Search, 
  RefreshCw, 
  Copy, 
  Check, 
  HelpCircle,
  FileText,
  ExternalLink
} from 'lucide-react';
import { evaluateRecruitmentOffer, AnalysisResult } from '../utils/rules.ts';

const SAMPLE_SCENARIOS = [
  {
    label: 'Scenario A: Advance Fee Scam',
    type: 'HIGH RISK',
    title: 'Remote Data Entry with Refundable Deposit',
    text: `Subject: Job Offer - Remote Data Entry Associate at Apex Solutions

Dear Applicant,

Congratulations! After reviewing your resume, you have been selected for our Remote Data Entry position at $55/hr. This is a full-time position working 30 hours per week from home.

To confirm your appointment and receive your company-issued Apple MacBook, a refundable registration and training fee of $150 must be paid prior to onboarding. Please send $150 via Zelle to apex-hr-finance@outlook.com before 5:00 PM today to guarantee your placement.

Sincerely,
Sarah Jenkins
HR Director`,
  },
  {
    label: 'Scenario B: Fake Check Scheme',
    type: 'HIGH RISK',
    title: 'Equipment Purchase via Check Overpayment',
    text: `Welcome to our logistics team! We are pleased to formally hire you as our Virtual Administrative Assistant.

We will send you a check for $4,200 to purchase equipment from our certified vendor. Once received, please deposit the check into your bank account immediately, and wire the remaining balance to our vendor to ship your home workstation.`,
  },
  {
    label: 'Scenario C: Telegram Impersonation',
    type: 'MEDIUM RISK',
    title: 'Google Impersonation via Instant Messaging',
    text: `Hello, I am recruiting on behalf of Google Cloud Careers. We noticed your profile and have an urgent opening for Junior Cloud Analyst. 

Please connect immediately with our hiring manager on Telegram at @GoogleHiring2026 for a 20-minute chat interview. No phone interview required.`,
  },
  {
    label: 'Scenario D: Legitimate Offer',
    type: 'LOW RISK',
    title: 'Legitimate Software Engineer Offer',
    text: `Dear Alex,

On behalf of Acme Technologies, we are excited to offer you the position of Software Engineer I. 

Please review the full offer letter, compensation breakdown, and comprehensive health benefits package on our secure employee portal at https://careers.acmetechnologies.com/offers/req-8921. 

Our recruitment team will schedule a 30-minute onboarding call next week to address any questions.`,
  },
];

export const OfferAnalyzer: React.FC = () => {
  const [inputText, setInputText] = useState(SAMPLE_SCENARIOS[0].text);
  const [result, setResult] = useState<AnalysisResult>(() => evaluateRecruitmentOffer(SAMPLE_SCENARIOS[0].text));
  const [copied, setCopied] = useState(false);

  const handleSelectScenario = (scenarioText: string) => {
    setInputText(scenarioText);
    setResult(evaluateRecruitmentOffer(scenarioText));
  };

  const handleAnalyze = () => {
    setResult(evaluateRecruitmentOffer(inputText));
  };

  const handleClear = () => {
    setInputText('');
    setResult(evaluateRecruitmentOffer(''));
  };

  const handleCopyReport = () => {
    if (!result) return;
    const reportText = `RecruitSafe AI Report
Risk Category: ${result.riskCategory} (Score: ${result.riskScore}/100)
Warning Signs Detected: ${result.warningSigns.length}
${result.warningSigns.map((w) => `• [${w.severity}] ${w.title}: ${w.explanation} (${w.matchedEvidence})`).join('\n')}
Verification Checklist:
${result.recommendedChecklist.map((c) => `[ ] ${c}`).join('\n')}
Disclaimer: Informational risk analysis only. Verify independently.`;

    navigator.clipboard.writeText(reportText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="analyzer" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
            <span>CORE TOOL</span>
            <span aria-hidden="true">·</span>
            <span>PHASE 1 ENGINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Interactive Recruitment Offer Analyzer
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Test any recruitment message, email, or direct message against our explainable rules engine.
            Observe how warning signs are extracted and how risk scores are calculated.
          </p>
        </div>

        {/* Preset Selectors */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-slate-400 mb-2.5">
            Test with a real-world scenario preset:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {SAMPLE_SCENARIOS.map((scenario) => {
              const isSelected = inputText === scenario.text;
              return (
                <button
                  key={scenario.label}
                  type="button"
                  onClick={() => handleSelectScenario(scenario.text)}
                  className={`text-left p-3 rounded-lg border transition-all text-xs ${
                    isSelected
                      ? 'bg-slate-800 border-emerald-500/80 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-semibold text-slate-200">{scenario.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        scenario.type === 'HIGH RISK'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : scenario.type === 'MEDIUM RISK'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}
                    >
                      {scenario.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">{scenario.title}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Analyzer Grid: Input on Left, Findings on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Input Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-slate-950 rounded-xl border border-slate-800 p-5 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="offer-text-area" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Recruitment Message or Email Text</span>
                </label>
                <span className="text-[11px] text-slate-400">
                  {inputText.length} characters
                </span>
              </div>

              <textarea
                id="offer-text-area"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  setResult(evaluateRecruitmentOffer(e.target.value));
                }}
                placeholder="Paste the suspicious email, text message, Telegram chat, or job description here..."
                rows={11}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3.5 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 font-mono transition-colors resize-y leading-relaxed"
              />

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-3 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Clear Input</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleAnalyze}
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Search className="w-3.5 h-3.5 text-slate-950" />
                    <span>Re-evaluate Offer</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Findings & Risk Score Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-slate-950 rounded-xl border border-slate-800 p-5 flex-1 flex flex-col justify-between">
              <div>
                {/* Risk Category Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {result.riskCategory === 'HIGH' && (
                        <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                          <ShieldAlert className="w-5 h-5" />
                        </div>
                      )}
                      {result.riskCategory === 'MEDIUM' && (
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                      )}
                      {result.riskCategory === 'LOW' && (
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                      )}

                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {result.riskCategory === 'HIGH' && 'High Risk Indicators Detected'}
                          {result.riskCategory === 'MEDIUM' && 'Caution: Moderate Risk Indicators'}
                          {result.riskCategory === 'LOW' && 'Low Risk Observed'}
                        </h3>
                        <p className="text-xs text-slate-400">
                          {result.riskCategory === 'HIGH' && 'Strong signatures of advance fee fraud, fake check, or identity risk.'}
                          {result.riskCategory === 'MEDIUM' && 'Several suspicious communication or terms patterns require verification.'}
                          {result.riskCategory === 'LOW' && 'No blatant scam signatures detected in this text sample.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Numerical Risk Gauge */}
                  <div className="text-right">
                    <div className="text-2xl font-black font-mono tracking-tight text-white">
                      {result.riskScore}
                      <span className="text-xs font-normal text-slate-500">/100</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">Risk Index</span>
                  </div>
                </div>

                {/* Warning Signs List */}
                <div className="mt-4 space-y-3">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Evidence-Based Findings ({result.warningSigns.length})
                  </h4>

                  {result.warningSigns.length === 0 ? (
                    <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                      <div className="flex items-center gap-2 font-medium text-emerald-400 mb-1">
                        <Check className="w-4 h-4" />
                        <span>No Blatant Red Flags Extracted</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        The text does not trigger known advance payment or equipment check patterns. Still verify independently before sharing sensitive documents.
                      </p>
                    </div>
                  ) : (
                    result.warningSigns.map((warning) => (
                      <div
                        key={warning.id}
                        className={`p-3 rounded-lg border text-xs ${
                          warning.severity === 'HIGH'
                            ? 'bg-rose-950/20 border-rose-900/40 text-rose-200'
                            : 'bg-amber-950/20 border-amber-900/40 text-amber-200'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-white">{warning.title}</span>
                          <span
                            className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                              warning.severity === 'HIGH'
                                ? 'bg-rose-500/20 text-rose-400'
                                : 'bg-amber-500/20 text-amber-400'
                            }`}
                          >
                            {warning.severity}
                          </span>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-2">{warning.explanation}</p>
                        <div className="bg-slate-900/80 px-2 py-1 rounded text-[11px] font-mono text-slate-300 border border-slate-800">
                          {warning.matchedEvidence}
                        </div>
                      </div>
                    ))
                  )}

                  {/* Uncertainties */}
                  {result.uncertainties.length > 0 && (
                    <div className="pt-2">
                      <div className="text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                        <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                        <span>Missing Information & Uncertainties:</span>
                      </div>
                      <ul className="text-[11px] text-slate-400 space-y-1 pl-4 list-disc">
                        {result.uncertainties.map((u, i) => (
                          <li key={i}>{u}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Report Actions & Disclaimer */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3 text-xs">
                <span className="text-[11px] text-slate-400 italic">
                  *Risk scores do not constitute definitive legal proof of fraud.
                </span>

                <button
                  type="button"
                  onClick={handleCopyReport}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-md transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Report' : 'Copy Report'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
