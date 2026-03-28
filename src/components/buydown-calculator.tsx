"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

// ── Core math ──────────────────────────────────────────────
function calcMonthlyPayment(annualRate: number, years: number, principal: number): number {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r <= 0) return principal / n;
  return (principal * r) / (1 - Math.pow(1 + r, -n));
}

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatCurrencyExact(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ── Buydown type definitions ───────────────────────────────
interface BuydownYear {
  year: string;
  rateReduction: number; // percentage points reduced
}

interface BuydownType {
  label: string;
  id: string;
  years: BuydownYear[];
  description: string;
}

const buydownTypes: BuydownType[] = [
  {
    label: "1-0",
    id: "1-0",
    years: [{ year: "Year 1", rateReduction: 1 }],
    description: "1% rate reduction in year one, then full rate.",
  },
  {
    label: "1-1",
    id: "1-1",
    years: [
      { year: "Year 1", rateReduction: 1 },
      { year: "Year 2", rateReduction: 1 },
    ],
    description: "1% rate reduction for the first two years.",
  },
  {
    label: "2-1",
    id: "2-1",
    years: [
      { year: "Year 1", rateReduction: 2 },
      { year: "Year 2", rateReduction: 1 },
    ],
    description: "2% reduction year one, 1% year two, then full rate.",
  },
  {
    label: "3-2-1",
    id: "3-2-1",
    years: [
      { year: "Year 1", rateReduction: 3 },
      { year: "Year 2", rateReduction: 2 },
      { year: "Year 3", rateReduction: 1 },
    ],
    description: "3% year one, 2% year two, 1% year three, then full rate.",
  },
];

// ── Component ──────────────────────────────────────────────
export default function BuydownCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>("500000");
  const [noteRate, setNoteRate] = useState<string>("7.000");
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [activeTab, setActiveTab] = useState<string>("3-2-1");

  const principal = parseFloat(loanAmount) || 0;
  const rate = parseFloat(noteRate) || 0;
  const basePayment = principal > 0 && rate > 0 ? calcMonthlyPayment(rate, loanTerm, principal) : 0;

  const activeBuydown = buydownTypes.find((b) => b.id === activeTab)!;

  // Calculate rows for the active buydown type
  const rows = activeBuydown.years.map((yr) => {
    const reducedRate = rate - yr.rateReduction;
    const reducedPayment = reducedRate > 0 ? calcMonthlyPayment(reducedRate, loanTerm, principal) : 0;
    const monthlySavings = basePayment - reducedPayment;
    const annualSavings = monthlySavings * 12;
    return {
      year: yr.year,
      rate: reducedRate,
      basePayment,
      reducedPayment,
      monthlySavings,
      annualSavings,
    };
  });

  // Add "remaining years" row showing note rate
  const remainingStart = activeBuydown.years.length + 1;
  rows.push({
    year: `Year ${remainingStart}+`,
    rate,
    basePayment,
    reducedPayment: basePayment,
    monthlySavings: 0,
    annualSavings: 0,
  });

  const totalBuydownCost = rows.reduce((sum, r) => sum + r.annualSavings, 0);
  const maxMonthlySavings = Math.max(...rows.map((r) => r.monthlySavings));

  const inputClass =
    "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-colors";

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <Calculator className="w-7 h-7 text-amber-400" />
          <p className="text-amber-400 text-lg font-semibold">Buydown Calculator</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
          See How Much You Could Save
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A temporary rate buydown lowers your interest rate for the first 1–3 years of your loan.
          Enter your loan details to see the savings.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-[320px_1fr] gap-8">
        {/* Left: Inputs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 h-fit"
        >
          <h3 className="text-white font-semibold mb-4">Loan Details</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Loan Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={loanAmount}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, "");
                    setLoanAmount(raw);
                  }}
                  className={inputClass + " pl-8"}
                  placeholder="500,000"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Note Rate (%)</label>
              <input
                type="number"
                value={noteRate}
                onChange={(e) => setNoteRate(e.target.value)}
                step="0.125"
                min="0"
                max="20"
                className={inputClass}
                placeholder="7.000"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Loan Term</label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                className={inputClass + " appearance-none cursor-pointer"}
              >
                <option value={30} className="bg-slate-900">30 years</option>
                <option value={25} className="bg-slate-900">25 years</option>
                <option value={20} className="bg-slate-900">20 years</option>
                <option value={15} className="bg-slate-900">15 years</option>
              </select>
            </div>

            {/* Summary card */}
            {principal > 0 && rate > 0 && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-sm text-gray-400 mb-1">Monthly P&I at Note Rate</div>
                <div className="text-2xl font-bold text-white">{formatCurrencyExact(basePayment)}</div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right: Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Tabs */}
          <div className="flex gap-1 mb-6 bg-white/5 rounded-xl p-1">
            {buydownTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === type.id
                    ? "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-4">{activeBuydown.description}</p>

          {/* Results table */}
          {principal > 0 && rate > 0 ? (
            <>
              {/* Desktop table */}
              <div className="hidden md:block bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-gray-400 font-medium px-4 py-3">Period</th>
                      <th className="text-right text-gray-400 font-medium px-4 py-3">Rate</th>
                      <th className="text-right text-gray-400 font-medium px-4 py-3">Monthly P&I</th>
                      <th className="text-right text-gray-400 font-medium px-4 py-3">Monthly Savings</th>
                      <th className="text-right text-gray-400 font-medium px-4 py-3">Annual Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => {
                      const isReduced = row.monthlySavings > 0;
                      return (
                        <tr
                          key={row.year}
                          className={`border-b border-white/5 ${i === rows.length - 1 ? "opacity-50" : ""}`}
                        >
                          <td className="px-4 py-3 text-white font-medium">{row.year}</td>
                          <td className={`px-4 py-3 text-right ${isReduced ? "text-emerald-400 font-semibold" : "text-gray-300"}`}>
                            {row.rate.toFixed(3)}%
                          </td>
                          <td className={`px-4 py-3 text-right ${isReduced ? "text-emerald-400 font-semibold" : "text-gray-300"}`}>
                            {formatCurrencyExact(row.reducedPayment)}
                          </td>
                          <td className="px-4 py-3 text-right text-white">
                            {isReduced ? formatCurrency(row.monthlySavings) : "—"}
                          </td>
                          <td className="px-4 py-3 text-right text-white">
                            {isReduced ? formatCurrency(row.annualSavings) : "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-3">
                {rows.map((row, i) => {
                  const isReduced = row.monthlySavings > 0;
                  return (
                    <div
                      key={row.year}
                      className={`bg-white/5 border border-white/10 rounded-xl p-4 ${i === rows.length - 1 ? "opacity-50" : ""}`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">{row.year}</span>
                        <span className={`font-semibold ${isReduced ? "text-emerald-400" : "text-gray-400"}`}>
                          {row.rate.toFixed(3)}%
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <div className="text-gray-500 text-xs">Monthly P&I</div>
                          <div className={isReduced ? "text-emerald-400 font-medium" : "text-gray-300"}>
                            {formatCurrencyExact(row.reducedPayment)}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-500 text-xs">Monthly Savings</div>
                          <div className="text-white font-medium">
                            {isReduced ? formatCurrency(row.monthlySavings) : "—"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total cost callout */}
              <div className="mt-6 bg-amber-500/10 border border-amber-400/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="text-sm text-amber-300/70 mb-1">Total Buydown Cost</div>
                  <div className="text-3xl font-bold text-amber-300">
                    {formatCurrency(totalBuydownCost)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-amber-300/70 mb-1">Max Monthly Savings</div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {formatCurrencyExact(maxMonthlySavings)}<span className="text-base font-normal text-gray-400">/mo</span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                For illustrative purposes only. Calculations are based on principal and interest only and do not include
                taxes, insurance, or other fees. All loan programs are subject to borrower meeting appropriate underwriting
                conditions. Not a commitment to lend. LendWise Mortgage Corporation NMLS #2702455. Equal Housing Lender.
              </p>
            </>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
              <Calculator className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Enter your loan details to see buydown savings.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
