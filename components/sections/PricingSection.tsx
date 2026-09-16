'use client';

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface PricingFeature {
  text: string;
}

const PRICING_FEATURES: PricingFeature[] = [
  { text: 'SIEM — full log ingestion, correlation & search' },
  { text: 'FIM — file integrity monitoring across all endpoints' },
  { text: 'SOAR — automated playbooks & orchestrated response' },
  { text: 'AI-powered threat detection (1,200+ rules)' },
  { text: 'Human-in-the-loop remediation & hand-holding' },
  { text: '24/7 monitoring by real security analysts' },
  { text: 'Case management with full audit trails' },
  { text: 'Compliance reporting (SOC 2, ISO 27001, ISO 42001, HIPAA, PCI)' },
  { text: 'Slack, email & webhook alerting' },
  { text: 'Executive security posture dashboards' },
  { text: 'Dedicated account manager' },
  { text: 'Onboarding & ongoing tuning included' },
];

interface PricingSectionProps {
  id?: string;
  onOpenModal?: (title?: string, interest?: string) => void;
}

export default function PricingSection({ id, onOpenModal }: PricingSectionProps) {
  return (
    <section
      id={id}
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: '#1E293B',
        overflowX: 'clip',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 48px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="w-full max-w-[1440px] flex flex-col items-start box-border"
      >
        {/* ========================================================================= */}
        {/* SECTION HEADER: Pill Badge & Dual-Line Bold Heading                       */}
        {/* ========================================================================= */}
        <div className="mb-8 sm:mb-12 flex flex-col items-start">
          {/* Pill Badge: PRICING */}
          <Badge className="rounded-full border border-[var(--color-primary-border)] px-3.5 py-1.5 mb-4">
            <span className="text-xs font-bold tracking-wider text-[var(--color-primary)] uppercase leading-none">
              PRICING
            </span>
          </Badge>

          {/* Heading: One Plan. Everything Included. Starting at $10/endpoint. */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight lg:leading-[1.15] tracking-tight m-0">
            <span className="text-slate-900 block">One Plan. Everything Included.</span>
            <span className="text-[#EE343F] block mt-1.5 sm:mt-2">Starting at $10/endpoint.</span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* MAIN SPLIT LAYOUT: 3 Cards on Left + Comprehensive Feature List on Right */}
        {/* ========================================================================= */}
        <div
          className="w-full flex flex-col xl:flex-row items-start justify-between gap-10 xl:gap-16 box-border"
        >
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT SIDE: 3 Tier Cards + Bottom Fine Print                             */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className="w-full xl:flex-[1_1_54%] xl:max-w-[730px] flex flex-col items-center"
          >
            {/* 3 Tier Cards Row */}
            <div
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch box-border"
            >
              {/* ----------------------------------------------------------------- */}
              {/* CARD 1: STARTER ($10/mo)                                          */}
              {/* ----------------------------------------------------------------- */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  boxSizing: 'border-box',
                  minHeight: '340px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
                }}
              >
                <div>
                  {/* Category Label */}
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#64748B',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    STARTER
                  </div>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '44px',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        color: '#0F172A',
                        lineHeight: 1,
                      }}
                    >
                      $10
                    </span>
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#64748B',
                        marginLeft: '4px',
                      }}
                    >
                      /mo
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.45,
                      color: '#475569',
                      margin: 0,
                    }}
                  >
                    Perfect for trying things out <em>(50 - 250 endpoints)</em>
                  </p>
                </div>

                {/* Button: Get Early Access */}
                <button
                  type="button"
                  onClick={() => onOpenModal?.('Get Early Access — Starter Plan', 'Starter ($10/mo)')}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    borderRadius: '9999px',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    color: '#1E293B',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    marginTop: '28px',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#EE343F';
                    e.currentTarget.style.color = '#EE343F';
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.color = '#1E293B';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                  }}
                >
                  Get Early Access
                </button>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* CARD 2: GROWTH / Professionals ($8/mo) - Highlighted with Blue Border */}
              {/* ----------------------------------------------------------------- */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '2px solid #EE343F',
                  padding: '24px 24px 32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 28px rgba(26, 68, 245, 0.12)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  boxSizing: 'border-box',
                  minHeight: '340px',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(26, 68, 245, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(26, 68, 245, 0.12)';
                }}
              >
                <div>
                  {/* Top Badge: Professionals */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      backgroundColor: '#FEE6E8',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#EE343F',
                        lineHeight: 1,
                      }}
                    >
                      Professionals
                    </span>
                  </div>

                  {/* Category Label: GROWTH */}
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#EE343F',
                      textTransform: 'uppercase',
                      marginBottom: '14px',
                    }}
                  >
                    GROWTH
                  </div>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '44px',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        color: '#0F172A',
                        lineHeight: 1,
                      }}
                    >
                      $8
                    </span>
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#64748B',
                        marginLeft: '4px',
                      }}
                    >
                      /mo
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.45,
                      color: '#475569',
                      margin: 0,
                    }}
                  >
                    For small businesses scaling up <em>(251 - 1,000 endpoints)</em>
                  </p>
                </div>

                {/* Primary Button: Join the Waitlist -> */}
                <button
                  type="button"
                  onClick={() => onOpenModal?.('Join the Waitlist — Growth Plan', 'Growth ($8/mo)')}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    borderRadius: '9999px',
                    backgroundColor: '#EE343F',
                    border: 'none',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(238, 52, 63, 0.3)',
                    transition: 'all 0.2s ease',
                    marginTop: '28px',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D52A35';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(238, 52, 63, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#EE343F';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(238, 52, 63, 0.3)';
                  }}
                >
                  <span>Join the Waitlist</span>
                  <ArrowRight size={16} strokeWidth={2.4} />
                </button>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* CARD 3: ENTERPRISE (Custom)                                       */}
              {/* ----------------------------------------------------------------- */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  boxSizing: 'border-box',
                  minHeight: '340px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
                }}
              >
                <div>
                  {/* Category Label */}
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#64748B',
                      textTransform: 'capitalize',
                      marginBottom: '16px',
                    }}
                  >
                    Enterprise
                  </div>

                  {/* Custom Headline */}
                  <div style={{ marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '38px',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        color: '#0F172A',
                        lineHeight: 1,
                      }}
                    >
                      Custom
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.45,
                      color: '#475569',
                      margin: 0,
                    }}
                  >
                    For established businesses (1000+ endpoints)
                  </p>
                </div>

                {/* Button: Get Early Access */}
                <button
                  type="button"
                  onClick={() => onOpenModal?.('Enterprise Inquiries — Custom Plan', 'Enterprise (Custom)')}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    borderRadius: '9999px',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    color: '#1E293B',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    marginTop: '28px',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#EE343F';
                    e.currentTarget.style.color = '#EE343F';
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.color = '#1E293B';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                  }}
                >
                  Get Early Access
                </button>
              </div>
            </div>

            {/* Bottom Fine Print: *Minimum 50 endpoints. Volume discounts as you grow... */}
            <div
              style={{
                marginTop: '36px',
                textAlign: 'center',
                color: '#334155',
                fontSize: '14.5px',
                lineHeight: 1.55,
                fontWeight: 500,
              }}
            >
              *Minimum 50 endpoints. Volume discounts as you grow.<br />
              No contracts. Month-to-month.<br />
              Cancel anytime.
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT SIDE: Comprehensive Feature List & Value Highlights              */}
          {/* ----------------------------------------------------------------------- */}
          <div
            className="w-full xl:flex-[1_1_42%] xl:max-w-[560px] flex flex-col items-start"
          >
            {/* Header paragraph */}
            <p
              style={{
                fontSize: '16.5px',
                fontWeight: 400,
                lineHeight: 1.55,
                color: '#1E293B',
                margin: '0 0 28px 0',
                letterSpacing: '-0.01em',
              }}
            >
              All-in-one, volume-based pricing. SIEM, FIM, SOAR, human analysts
              everything your security program needs in a single per-endpoint rate. No modules to unlock.
            </p>

            {/* 12 Checklist Items */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '100%',
              }}
            >
              {PRICING_FEATURES.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  {/* Round blue checkmark icon with circle */}
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: '1.8px solid #EE343F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={12} color="#EE343F" strokeWidth={2.8} />
                  </div>

                  {/* Feature Text */}
                  <span
                    style={{
                      fontSize: '15px',
                      fontWeight: 400,
                      lineHeight: 1.45,
                      color: '#1E293B',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
