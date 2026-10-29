import React from 'react';
import { 
  CreditCard, 
  MailWarning, 
  Send, 
  DollarSign, 
  Clock, 
  FileCheck2, 
  ShieldAlert 
} from 'lucide-react';

export const WarningSigns: React.FC = () => {
  const WARNING_SIGNS = [
    {
      icon: <CreditCard className="w-5 h-5 text-rose-400" />,
      title: '1. Upfront Fees & Equipment Demands',
      badge: 'High Risk',
      badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      description: 'Any demand to pay for application processing, security deposits, mandatory training, or software licensing. Legitimate employers never charge candidates money to begin employment.',
      realExample: '“To confirm your remote placement and ship your laptop, pay a $120 refundable onboarding fee via Zelle or Crypto.”',
    },
    {
      icon: <MailWarning className="w-5 h-5 text-rose-400" />,
      title: '2. Check Overpayment & "Vendor" Schemes',
      badge: 'High Risk',
      badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      description: 'The scammer sends a counterfeit check, instructs you to deposit it into your personal bank account, and tells you to wire funds to an "approved office supplier". When the check bounces, you are held liable by your bank.',
      realExample: '“We are mailing you a cashier check for $3,800. Deposit it and wire the balance to our designated equipment provider.”',
    },
    {
      icon: <Send className="w-5 h-5 text-amber-400" />,
      title: '3. Chat-Only Anonymous Interviews',
      badge: 'Medium Risk',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      description: 'Conducting entire hiring processes exclusively via text messaging apps like Telegram, WhatsApp, or Signal. Scammers use these platforms because phone numbers and accounts can be discarded without trace.',
      realExample: '“Connect with HR Director Michael on Telegram @recruitment_apex for your text-only interview session.”',
    },
    {
      icon: <MailWarning className="w-5 h-5 text-amber-400" />,
      title: '4. Public Webmail Masquerading as Enterprise',
      badge: 'Medium Risk',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      description: 'Recruiters claiming to represent major corporations (e.g. Google, Apple, Microsoft, Amazon) but emailing from free consumer addresses such as @gmail.com, @yahoo.com, or @outlook.com.',
      realExample: '“From: Google HR Recruitment Team <google.hiring.desk2026@gmail.com>”',
    },
    {
      icon: <DollarSign className="w-5 h-5 text-amber-400" />,
      title: '5. Excessive Salary for Entry-Level Work',
      badge: 'Medium Risk',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      description: 'Promises of $50–$100/hr for basic data entry, typing, or captcha transcription without requiring any relevant experience, portfolio, or formal skill verification.',
      realExample: '“Earn $60/hour typing audio transcripts from home with flexible 2-hour daily shifts. 100% guaranteed.”',
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      title: '6. High-Pressure Deadlines & Instant Hires',
      badge: 'Medium Risk',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      description: 'Being declared "hired" without an interview or formal application, followed by aggressive demands to sign documents and submit financial data within 2 to 4 hours.',
      realExample: '“You are chosen for the role! This offer is valid only for the next 3 hours before giving your spot to someone else.”',
    },
  ];

  return (
    <section id="warning-signs" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
            <span>THREAT INTELLIGENCE</span>
            <span aria-hidden="true">·</span>
            <span>CYBERSECURITY PATTERNS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            The 6 Critical Recruitment Warning Signs
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Recruitment scams rely on psychological urgency, financial friction, and false authority.
            Learn the anatomy of these tactics so you can spot them instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WARNING_SIGNS.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.description}</p>
              </div>

              <div className="bg-slate-950 rounded-lg p-3 border border-slate-800/80 text-[11px]">
                <span className="text-slate-400 font-semibold block mb-1">Common Phrasing:</span>
                <p className="text-slate-300 italic font-mono leading-relaxed">{item.realExample}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
