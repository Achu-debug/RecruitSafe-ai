import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateRecruitmentOffer, RULE_DEFINITIONS } from './rules.ts';

test('RULE_DEFINITIONS should contain required scam patterns', () => {
  assert.ok(RULE_DEFINITIONS.length >= 6, 'Should define at least 6 core detection rules');
  const feeRule = RULE_DEFINITIONS.find((r) => r.id === 'FEE_ADVANCE');
  assert.ok(feeRule, 'Should have FEE_ADVANCE rule');
  assert.equal(feeRule?.severity, 'HIGH');
});

test('detects high-risk fee demand in recruitment text', () => {
  const scamMessage = `
    Dear applicant, Congratulations! You have been shortlisted for our remote data entry position.
    Before we can process your appointment letter, a refundable training fee of $150 is required.
    Please send $150 via Zelle to hr-desk@outlook.com.
  `;

  const result = evaluateRecruitmentOffer(scamMessage);
  assert.equal(result.riskCategory, 'HIGH');
  assert.ok(result.riskScore >= 60, `Risk score should be high, got ${result.riskScore}`);
  assert.ok(result.warningSigns.some((w) => w.id === 'FEE_ADVANCE'));
});

test('detects fake check and equipment vendor scam', () => {
  const checkScam = `
    We will send you a check to purchase equipment from our certified vendor.
    Once received, please deposit the check and wire the remaining balance to the vendor.
  `;

  const result = evaluateRecruitmentOffer(checkScam);
  assert.equal(result.riskCategory, 'HIGH');
  assert.ok(result.warningSigns.some((w) => w.id === 'EQUIPMENT_CHECK_SCAM'));
});

test('detects Telegram interview redirect', () => {
  const telegramOffer = `
    Hi, our hiring manager reviewed your profile. Please add the hiring manager on telegram @recruiter_john for an immediate interview.
  `;

  const result = evaluateRecruitmentOffer(telegramOffer);
  assert.ok(result.warningSigns.some((w) => w.id === 'CHAT_ONLY_INTERVIEW'));
  assert.ok(result.riskCategory === 'MEDIUM' || result.riskCategory === 'HIGH');
});

test('evaluates clean legitimate offer as LOW risk', () => {
  const legitOffer = `
    Thank you for interviewing with Acme Software. We are pleased to extend an offer for the Software Engineer role.
    Please review your offer details on our official portal at https://careers.acme.com/offers/48291.
    Our HR onboarding team will walk you through health benefits and 401(k) next week.
  `;

  const result = evaluateRecruitmentOffer(legitOffer);
  assert.equal(result.riskCategory, 'LOW');
  assert.equal(result.warningSigns.length, 0);
  assert.ok(result.positiveIndicators.length > 0);
});
