'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface MetricCardProps {
  value: string;
  label: string;
}

const METRIC_CARDS: MetricCardProps[] = [
  {
    value: '<4 min',
    label: 'Mean Time to Detect',
  },
  {
    value: '1,200+',
    label: 'Detection Rules',
  },
  {
    value: '99.9%',
    label: 'Platform Uptime',
  },
  {
    value: '24/7',
    label: 'AI + Human Coverage',
  },
];

const BULLETS: string[] = [
  'No six-figure SIEM licenses — SIEM, FIM, SOAR all included from $10/endpoint',
  'Operational in days, not months of professional services',
  'AI handles the toil — your analysts handle the decisions',
  'Open-source foundation — no vendor lock-in, full transparency',
  'Compliance-ready for SOC 2, ISO 27001, ISO 42001, HIPAA, PCI',
];

export default function WhySkieSecureSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      style={{
        width: '100%',
        backgroundColor: '#1A44F5',
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'clip',
        position: 'relative',
      }}
    >
      {/* 1920 Container */}
      <div
        className="w-full max-w-[1920px] min-h-auto xl:min-h-[654px] py-16 sm:py-20 xl:py-[84px] px-4 sm:px-8 xl:px-24 box-border flex items-center justify-center"
      >
        {/* Content Wrapper max-width ~1480px */}
        <div
          className="w-full max-w-[1480px] flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-16 box-border"
        >
          {/* ============================================================= */}
          {/* LEFT COLUMN: Badge, Headline, Paragraph, 5 Checkmark Bullets  */}
          {/* ============================================================= */}
          <div
            className="w-full xl:flex-[1_1_54%] xl:max-w-[680px] flex flex-col items-start"
          >
            {/* Pill Badge: WHY SKIESECURE */}
            <div
              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#E5EEFF] border border-[#DBEAFE] mb-5"
            >
              <span className="text-xs font-bold tracking-wider text-[#1A44F5] uppercase leading-none">
                WHY SKIESECURE
              </span>
            </div>

            {/* Headline: Security Operations / Without the Overhead */}
            <h2 className="text-3xl sm:text-4xl xl:text-[44px] font-extrabold leading-tight sm:leading-[1.15] tracking-tight text-white mb-5">
              Security Operations<br className="hidden sm:inline" /> Without the Overhead
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm sm:text-base font-normal leading-relaxed text-white mb-7 max-w-[620px] tracking-tight">
              Most security platforms are designed for enterprises with 50-person SOC teams and seven-figure budgets.
              SkieSecure was built from the ground up for small and mid-sized businesses — AI-native, lean, and priced honestly.
            </p>

            {/* 5 Bullet Points */}
            <div className="flex flex-col gap-3.5 w-full">
              {BULLETS.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3"
                >
                  {/* Round checkmark icon with circle */}
                  <div
                    className="w-5 h-5 rounded-full border-[1.5px] border-[#DBEAFE] flex items-center justify-center shrink-0"
                  >
                    <Check size={12} color="#FFFFFF" strokeWidth={2.8} />
                  </div>

                  {/* Bullet Text */}
                  <span className="text-sm sm:text-[14.5px] font-normal leading-snug text-[#DBEAFE] tracking-tight">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ============================================================= */}
          {/* VERTICAL DIVIDER LINE (hidden on mobile/tablet)               */}
          {/* ============================================================= */}
          <div
            className="hidden xl:block w-[1px] h-[460px] bg-white/20 shrink-0"
          />

          {/* ============================================================= */}
          {/* RIGHT COLUMN: 2x2 Grid of Stat Metric Cards                   */}
          {/* ============================================================= */}
          <div
            className="w-full xl:flex-[1_1_46%] xl:max-w-[640px] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 box-border"
          >
            {METRIC_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl py-8 sm:py-10 px-6 flex flex-col items-center justify-center text-center shadow-[0_10px_28px_rgba(10,37,140,0.18),0_2px_6px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(10,37,140,0.24)] cursor-default min-h-[140px] sm:min-h-[175px] box-border"
              >
                {/* Metric Big Value */}
                <div className="text-3xl sm:text-4xl xl:text-[44px] font-bold leading-tight tracking-tight text-[#1E293B] mb-2 sm:mb-2.5">
                  {card.value}
                </div>

                {/* Metric Label */}
                <div className="text-sm sm:text-[15px] font-medium leading-snug text-slate-500 tracking-tight">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
