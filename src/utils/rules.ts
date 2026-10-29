/**
 * Core detection rules for RecruitSafe AI.
 * Transparent, explainable heuristics for identifying recruitment scams,
 * impersonation, and fraudulent job offers.
 */

export interface WarningSign {
  id: string;
  category: 'FEE_DEMAND' | 'SUSPICIOUS_COMMUNICATION' | 'UNREALISTIC_TERMS' | 'EQUIPMENT_CHECK' | 'OVER_URGENCY' | 'DATA_RISK';
  title: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  explanation: string;
  matchedEvidence: string;
}

export interface AnalysisResult {
  riskScore: number; // 0 - 100
  riskCategory: 'LOW' | 'MEDIUM' | 'HIGH';
  warningSigns: WarningSign[];
  positiveIndicators: string[];
  uncertainties: string[];
  recommendedChecklist: string[];
  analyzedAt: string;
}

export const RULE_DEFINITIONS = [
  {
    id: 'FEE_ADVANCE',
    category: 'FEE_DEMAND' as const,
    title: 'Upfront Payment or Deposit Requested',
    severity: 'HIGH' as const,
    explanation: 'Legitimate employers never demand application fees, training charges, equipment deposits, or background check fees from candidates.',
    patterns: [
      /\b(?:registration|training|processing|application|interview)\s+fee\b/i,
      /\b(?:security|refundable)\s+deposit\b/i,
      /\bpay\s+(?:for|us)\s+(?:your|the)?\s*(?:laptop|software|license|badge|kit|uniform|training)\b/i,
      /\bsend\s+\$?\d+\s+(?:via|through|using)\s+(?:zelle|venmo|cash\s*app|crypto|bitcoin|usdt|wire|western\s*union|gift\s*card)\b/i,
      /\bpayment\s+required\s+before\b/i,
    ],
  },
  {
    id: 'EQUIPMENT_CHECK_SCAM',
    category: 'EQUIPMENT_CHECK' as const,
    title: 'Check Advance / Fake Vendor Equipment Scam',
    severity: 'HIGH' as const,
    explanation: 'A classic scam where the fraudster sends a fake cashier check or e-check, asks you to deposit it, and instructs you to wire money to their "certified equipment vendor". The fake check will bounce days later, leaving the victim liable for the lost funds.',
    patterns: [
      /\b(?:send|mail|issue)\s+(?:you\s+)?a\s+(?:check|cheque)\s+to\s+(?:purchase|buy)\b/i,
      /\bdeposit\s+the\s+check\b/i,
      /\bour\s+(?:approved|certified|authorized)\s+vendor\b/i,
      /\bwire\s+(?:the\s+)?(?:remaining|excess|surplus)\s+(?:balance|funds|money)\b/i,
    ],
  },
  {
    id: 'FREE_EMAIL_ENTERPRISE',
    category: 'SUSPICIOUS_COMMUNICATION' as const,
    title: 'Enterprise Claim with Free or Unverified Email Domain',
    severity: 'MEDIUM' as const,
    explanation: 'The offer claims to represent a recognized enterprise or corporation, but uses a free public email provider (e.g. @gmail.com, @yahoo.com) rather than an official corporate domain.',
    patterns: [
      /\b(?:google|microsoft|amazon|apple|meta|netflix|deloitte|accenture|ibm|oracle|tesla|walmart)\b.*@(?:gmail|yahoo|hotmail|outlook|protonmail|icloud)\.com\b/i,
      /@(?:gmail|yahoo|hotmail|outlook|protonmail|icloud)\.com\b/i,
    ],
  },
  {
    id: 'CHAT_ONLY_INTERVIEW',
    category: 'SUSPICIOUS_COMMUNICATION' as const,
    title: 'Interview Exclusively Conducted via Text / Chat App',
    severity: 'MEDIUM' as const,
    explanation: 'Legitimate corporate hiring relies on official company video systems, corporate email invites, or in-person meetings. Scammers frequently conduct "interviews" entirely over Telegram, WhatsApp, or Signal to evade corporate fraud detection.',
    patterns: [
      /\b(?:interview|contact\s+me|message\s+me|connect)\s+(?:on|via|through)\s+(?:telegram|whatsapp|signal|hangouts)\b/i,
      /\badd\s+(?:the\s+)?hiring\s+manager\s+on\s+telegram\b/i,
      /\btelegram\s+(?:username|id|handle|app)\b/i,
    ],
  },
  {
    id: 'UNREALISTIC_COMPENSATION',
    category: 'UNREALISTIC_TERMS' as const,
    title: 'Disproportionate Compensation for Minimal Experience',
    severity: 'MEDIUM' as const,
    explanation: 'Extremely high hourly rates or guaranteed daily payouts for low-skill, entry-level, or unvetted tasks are often bait used to lure job seekers.',
    patterns: [
      /\$\s*(?:4[5-9]|[5-9]\d|\d{3,})\s*(?:\/|\s*per\s*)hr\b.*(?:data\s*entry|typing|form\s*filling|re-typing|copy\s*paste)/i,
      /\b(?:data\s*entry|typing|form\s*filling|re-typing|copy\s*paste).*\$\s*(?:4[5-9]|[5-9]\d|\d{3,})\s*(?:\/|\s*per\s*)hr\b/i,
      /\bearn\s+\$?(?:500|1000|2000)\s*(?:daily|per\s*day)\s+(?:for|working)\s+(?:1|2|3)?\s*(?:hour|hours)/i,
      /\b100%\s+guaranteed\s+(?:salary|job|placement|income)\b/i,
    ],
  },
  {
    id: 'NO_INTERVIEW_HIRE',
    category: 'OVER_URGENCY' as const,
    title: 'Immediate Job Offer Without Formal Evaluation',
    severity: 'MEDIUM' as const,
    explanation: 'Receiving an immediate employment offer without a substantive technical interview, behavioral assessment, or background conversation is a common scam pattern.',
    patterns: [
      /\b(?:hired\s+immediately|immediate\s+hire|start\s+immediately)\s+without\s+(?:an?\s+)?interview\b/i,
      /\byou\s+have\s+been\s+(?:selected|hired)\s+for\s+the\s+job\s+without\b/i,
      /\bno\s+interview\s+required\b/i,
      /\boffer\s+expires\s+in\s+(?:[1-6]\s+hours|24\s+hours|today)\b/i,
    ],
  },
  {
    id: 'SENSITIVE_FINANCIAL_INFO',
    category: 'DATA_RISK' as const,
    title: 'Premature Request for Banking / Identity Credentials',
    severity: 'HIGH' as const,
    explanation: 'Asking for online banking credentials, credit card details, or sensitive verification codes before you have even signed an official contract or met the hiring manager is an acute identity theft indicator.',
    patterns: [
      /\b(?:provide|send|submit)\s+(?:your\s+)?(?:online\s+banking|bank\s+login|password|credit\s*card|cvv|pin\s*code)\b/i,
      /\bbank\s+account\s+verification\s+code\b/i,
    ],
  },
];

/**
 * Evaluates candidate recruitment text against explainable detection rules.
 */
export function evaluateRecruitmentOffer(rawText: string): AnalysisResult {
  const text = rawText || '';
  const warningSigns: WarningSign[] = [];
  let calculatedScore = 5; // Base minimal score for any unverified message

  // Check each rule
  for (const rule of RULE_DEFINITIONS) {
    let matched = false;
    let snippet = '';

    for (const pattern of rule.patterns) {
      const match = text.match(pattern);
      if (match) {
        matched = true;
        snippet = match[0];
        break;
      }
    }

    if (matched) {
      warningSigns.push({
        id: rule.id,
        category: rule.category,
        title: rule.title,
        severity: rule.severity,
        explanation: rule.explanation,
        matchedEvidence: `Matched indicator: "${snippet}"`,
      });

      if (rule.severity === 'HIGH') {
        calculatedScore += 35;
      } else if (rule.severity === 'MEDIUM') {
        calculatedScore += 20;
      } else {
        calculatedScore += 10;
      }
    }
  }

  // Cap score between 0 and 100
  const finalScore = Math.min(Math.max(calculatedScore, 0), 100);

  // Determine risk category
  let riskCategory: 'LOW' | 'MEDIUM' | 'HIGH' = 'LOW';
  if (finalScore >= 60 || warningSigns.some((w) => w.severity === 'HIGH')) {
    riskCategory = 'HIGH';
  } else if (finalScore >= 25 || warningSigns.length > 0) {
    riskCategory = 'MEDIUM';
  } else {
    riskCategory = 'LOW';
  }

  // Positive indicators when low risk
  const positiveIndicators: string[] = [];
  if (warningSigns.length === 0 && text.trim().length > 40) {
    positiveIndicators.push('No advance payment or equipment fee demands detected.');
    positiveIndicators.push('No suspicious instant-messaging redirect patterns found.');
    positiveIndicators.push('Compensation and hiring timeline appear within standard bounds.');
  }

  // Missing uncertainties
  const uncertainties: string[] = [];
  if (!text.toLowerCase().includes('@')) {
    uncertainties.push('Sender email address was not provided in the text; domain verification could not be verified.');
  }
  if (!text.match(/https?:\/\//i)) {
    uncertainties.push('No official company career link or verification URL was present to cross-check.');
  }
  if (text.trim().length < 60) {
    uncertainties.push('The provided text sample is brief. Additional context may reveal other factors.');
  }

  // Recommended verification checklist
  const recommendedChecklist: string[] = [
    'Search the company website independently via a browser (never click links in the message).',
    'Verify that the specific job requisition ID exists on the official career portal.',
    'Check the sender email domain: legitimate HR emails originate from @company.com, not public webmail.',
    'Remember: Legitimate employers NEVER ask you to deposit a check to buy supplies from their vendor.',
    'Never pay any upfront registration, training, or application fee.',
  ];

  return {
    riskScore: finalScore,
    riskCategory,
    warningSigns,
    positiveIndicators,
    uncertainties,
    recommendedChecklist,
    analyzedAt: new Date().toISOString(),
  };
}
