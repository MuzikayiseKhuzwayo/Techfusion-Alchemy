// scripts/test-roi-calculator.ts
import assert from 'node:assert/strict';
import { calculateAutomationRoi } from '../src/lib/roi-calculator';

function assertAllFinite(res: ReturnType<typeof calculateAutomationRoi>, label: string) {
  for (const [k, v] of Object.entries(res)) {
    if (typeof v === 'number') {
      assert.equal(Number.isFinite(v), true, `[${label}] Field ${k} was not finite: ${v}`);
      assert.equal(Number.isNaN(v), false, `[${label}] Field ${k} was NaN`);
      assert.equal(v >= 0, true, `[${label}] Field ${k} was negative: ${v}`);
    }
  }
}

// 1. Standard High-Ticket B2B Baseline
const normal = calculateAutomationRoi({
  monthlyLeads: 140,
  avgDealValueUsd: 4200,
  currentCloseRatePct: 7.5,
  currentResponseMinutes: 240,
  weeklyManualHours: 18,
  hourlyLoadedCostUsd: 45,
  monthlyWebhookVolume: 4500,
  currentSilentFailurePct: 4.3,
  pilotInvestmentUsd: 2500,
});
assertAllFinite(normal, 'normal-baseline');
assert.equal(normal.speedToLeadLiftMultiplier, 2.35);
assert.equal(normal.projectedCloseRatePct, 17.63);
assert.equal(normal.totalAnnualBenefitUsd > 500_000, true);

// 2. Unusual Edge Case: All Zeroes
const allZero = calculateAutomationRoi({
  monthlyLeads: 0,
  avgDealValueUsd: 0,
  currentCloseRatePct: 0,
  currentResponseMinutes: 0,
  weeklyManualHours: 0,
  hourlyLoadedCostUsd: 0,
  monthlyWebhookVolume: 0,
  currentSilentFailurePct: 0,
  pilotInvestmentUsd: 0,
});
assertAllFinite(allZero, 'all-zero');
assert.equal(allZero.totalAnnualBenefitUsd, 0);
assert.equal(allZero.pilotPaybackDays, 365);

// 3. Unusual Edge Case: Negative numbers, NaN, and Infinity
const negativeAndInvalid = calculateAutomationRoi({
  monthlyLeads: -500,
  avgDealValueUsd: Number.NaN,
  currentCloseRatePct: -20,
  currentResponseMinutes: Number.NEGATIVE_INFINITY,
  weeklyManualHours: -40,
  hourlyLoadedCostUsd: Number.POSITIVE_INFINITY,
  monthlyWebhookVolume: -1000,
  currentSilentFailurePct: 999,
  pilotInvestmentUsd: -3000,
});
assertAllFinite(negativeAndInvalid, 'negative-and-invalid');
assert.equal(negativeAndInvalid.sanitizedInput.currentSilentFailurePct, 100);
assert.equal(negativeAndInvalid.sanitizedInput.pilotInvestmentUsd, 100);

// 4. Unusual Edge Case: 100% Close Rate (must not exceed 100%)
const maxCloseRate = calculateAutomationRoi({
  monthlyLeads: 100,
  avgDealValueUsd: 5000,
  currentCloseRatePct: 100,
  currentResponseMinutes: 500,
  weeklyManualHours: 10,
  hourlyLoadedCostUsd: 50,
  monthlyWebhookVolume: 1000,
  currentSilentFailurePct: 2,
  pilotInvestmentUsd: 2500,
});
assertAllFinite(maxCloseRate, 'max-close-rate');
assert.equal(maxCloseRate.projectedCloseRatePct, 100);
assert.equal(maxCloseRate.monthlyRevenueRecoveredUsd, 0);

console.log('✓ All normal and edge-case ROI calculator unit tests passed (Tactic 41 verified).');
