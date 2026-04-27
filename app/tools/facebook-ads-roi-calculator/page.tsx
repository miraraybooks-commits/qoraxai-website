"use client";

import { useState, useEffect } from "react";

const CURRENCIES = [
  { label: "USD ($)", symbol: "$" },
  { label: "BDT (৳)", symbol: "৳" },
  { label: "INR (₹)", symbol: "₹" },
  { label: "EUR (€)", symbol: "€" },
  { label: "GBP (£)", symbol: "£" },
];

function formatNum(symbol: string, n: number): string {
  if (n >= 1_000_000) return symbol + (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return symbol + (n / 1_000).toFixed(1) + "k";
  return symbol + Math.round(n).toLocaleString();
}

// ─── Replace with your actual WhatsApp number ───────────────────────────────
const WHATSAPP_NUMBER = "+8801718723202";
const WHATSAPP_MESSAGE =
  "Hi%2C%20I%20used%20the%20ROI%20Calculator%20on%20QoraxAI%20and%20want%20a%20free%20ad%20audit.";
// ────────────────────────────────────────────────────────────────────────────

export default function FacebookAdsROICalculator() {
  const [budget, setBudget] = useState(500);
  const [cpc, setCpc] = useState(0.8);
  const [lpRate, setLpRate] = useState(3);
  const [saleRate, setSaleRate] = useState(10);
  const [saleVal, setSaleVal] = useState(200);
  const [margin, setMargin] = useState(40);
  const [currencySymbol, setCurrencySymbol] = useState("$");

  // ── Derived values ──────────────────────────────────────────────────────
  const clicks = Math.round(budget / Math.max(cpc, 0.01));
  const leads = Math.round(clicks * (lpRate / 100));
  const customers = Math.round(leads * (saleRate / 100));
  const revenue = customers * saleVal;
  const grossProfit = revenue * (margin / 100);
  const netProfit = grossProfit - budget;
  const roi = budget > 0 ? (netProfit / budget) * 100 : 0;
  const cpl = leads > 0 ? budget / leads : 0;
  const cpcCust = customers > 0 ? budget / customers : 0;

  const maxBar = Math.max(budget, revenue, grossProfit, 1);
  const spendPct = Math.round((budget / maxBar) * 100);
  const revPct = Math.round((revenue / maxBar) * 100);
  const profitPct = Math.max(0, Math.round((netProfit / maxBar) * 100));

  // ── Verdict ─────────────────────────────────────────────────────────────
  let verdictColor = "text-yellow-400";
  let verdictTitle = "Breaking even — room to improve";
  let verdictBody = `Your campaign covers its costs but profit is thin at ${Math.round(roi)}% ROI. Small improvements to your landing page conversion rate or ad targeting could make a big difference.`;
  if (roi >= 100) {
    verdictColor = "text-green-400";
    verdictTitle = "Strong ROI — your campaign is profitable";
    verdictBody = `At ${Math.round(roi)}% ROI, every ${currencySymbol}1 spent is returning ${currencySymbol}${(1 + roi / 100).toFixed(2)} in net profit. Focus on scaling budget while keeping your CPC and conversion rates stable.`;
  } else if (roi < 0) {
    verdictColor = "text-red-400";
    verdictTitle = "Negative ROI — your ads are losing money";
    verdictBody = `At ${Math.round(roi)}% ROI, you're spending more than you're earning back. This usually points to high CPC (poor targeting), a weak landing page, or a low-converting offer. Don't scale until this is fixed.`;
  }

  return (
    <section className="min-h-screen bg-[#0a0e1a] text-white px-4 py-16 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-2">
            Free Tool · QoraxAI
          </p>
          <h1 className="text-3xl font-bold text-white mb-2">
            Facebook Ads ROI Calculator
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Enter your campaign numbers below and instantly see your estimated
            leads, revenue, and return on ad spend.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 mb-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-5">
            Your Campaign Inputs
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Field label="Monthly Ad Budget">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  {currencySymbol}
                </span>
                <input
                  type="number"
                  value={budget}
                  min={1}
                  step={50}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full bg-[#1e293b] border border-white/10 rounded-lg pl-7 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </Field>

            <Field label="Avg. Cost Per Click">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  {currencySymbol}
                </span>
                <input
                  type="number"
                  value={cpc}
                  min={0.01}
                  step={0.05}
                  onChange={(e) => setCpc(Number(e.target.value))}
                  className="w-full bg-[#1e293b] border border-white/10 rounded-lg pl-7 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </Field>

            <Field label="Landing Page Conv. Rate (%)">
              <input
                type="number"
                value={lpRate}
                min={0.1}
                step={0.5}
                onChange={(e) => setLpRate(Number(e.target.value))}
                className="w-full bg-[#1e293b] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
            </Field>

            <Field label="Lead-to-Sale Conv. Rate (%)">
              <input
                type="number"
                value={saleRate}
                min={0.1}
                step={1}
                onChange={(e) => setSaleRate(Number(e.target.value))}
                className="w-full bg-[#1e293b] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
            </Field>

            <Field label="Average Sale Value">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  {currencySymbol}
                </span>
                <input
                  type="number"
                  value={saleVal}
                  min={1}
                  step={10}
                  onChange={(e) => setSaleVal(Number(e.target.value))}
                  className="w-full bg-[#1e293b] border border-white/10 rounded-lg pl-7 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </Field>

            <Field label="Currency">
              <select
                value={currencySymbol}
                onChange={(e) => setCurrencySymbol(e.target.value)}
                className="w-full bg-[#1e293b] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              >
                {CURRENCIES.map((c) => (
                  <option key={c.symbol} value={c.symbol}>
                    {c.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          {/* Margin Slider */}
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm text-slate-400">
                Profit Margin per Sale
              </label>
              <span className="text-sm font-semibold text-blue-400">
                {margin}%
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={95}
              step={1}
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between text-xs text-slate-600 mt-1">
              <span>5%</span>
              <span>95%</span>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 mb-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-5">
            Your Estimated Results
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <MetricCard label="Total Clicks" value={clicks.toLocaleString()} />
            <MetricCard label="Leads Generated" value={leads.toLocaleString()} />
            <MetricCard label="Customers Won" value={customers.toLocaleString()} />
            <MetricCard
              label="Total Revenue"
              value={formatNum(currencySymbol, revenue)}
            />
            <MetricCard
              label="Cost Per Lead"
              value={leads > 0 ? currencySymbol + cpl.toFixed(2) : "—"}
            />
            <MetricCard
              label="Cost Per Customer"
              value={
                customers > 0
                  ? currencySymbol + Math.round(cpcCust).toLocaleString()
                  : "—"
              }
            />
            <MetricCard
              label="Net Profit"
              value={formatNum(currencySymbol, netProfit)}
            />
            <MetricCard
              label="ROI"
              value={Math.round(roi) + "%"}
              highlight
            />
          </div>

          {/* Bars */}
          <div className="space-y-3">
            <BarRow
              label="Ad Spend"
              pct={spendPct}
              value={formatNum(currencySymbol, budget)}
              color="bg-blue-500"
            />
            <BarRow
              label="Revenue"
              pct={revPct}
              value={formatNum(currencySymbol, revenue)}
              color="bg-teal-500"
            />
            <BarRow
              label="Net Profit"
              pct={profitPct}
              value={formatNum(currencySymbol, netProfit)}
              color="bg-green-500"
            />
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 mb-6">
          <p className={`text-sm font-semibold mb-1 ${verdictColor}`}>
            {verdictTitle}
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">{verdictBody}</p>
        </div>

        {/* CTA */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-white mb-1">
              Want better results from your Facebook Ads?
            </p>
            <p className="text-xs text-slate-400">
              Get a free audit from Qorax AI — we&apos;ll show you exactly where
              your budget is leaking.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-green-600 hover:bg-green-500 transition text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
          >
            💬 WhatsApp Me
          </a>
        </div>

      </div>
    </section>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs text-slate-400">{label}</label>
      {children}
    </div>
  );
}

function MetricCard({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-3 ${highlight
        ? "bg-blue-600/20 border border-blue-500/30"
        : "bg-[#1e293b] border border-white/5"
        }`}
    >
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <p
        className={`text-lg font-semibold ${highlight ? "text-blue-400" : "text-white"
          }`}
      >
        {value}
      </p>
    </div>
  );
}

function BarRow({
  label,
  pct,
  value,
  color,
}: {
  label: string;
  pct: number;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-slate-500 w-20 shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-medium text-white w-16 text-right shrink-0">
        {value}
      </span>
    </div>
  );
}
