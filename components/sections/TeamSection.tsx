'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function TeamSection({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="w-full bg-[#1E293B] relative overflow-x-clip flex flex-col items-center justify-start p-0 m-0 box-border"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: '#FFFFFF',
      }}
    >
      {/* Full-Width Section Frame */}
      <section
        className="w-full max-w-[1920px] min-h-0 xl:min-h-[1201px] bg-[#1E293B] flex flex-col items-center justify-start relative py-12 sm:py-16 xl:py-24 px-4 sm:px-8 xl:px-20 box-border overflow-hidden"
      >
        {/* ========================================================================= */}
        {/* TOP-RIGHT WIREFRAME GRAPHIC                                              */}
        {/* ========================================================================= */}
        <div
          className="hidden xl:block absolute top-0 right-0 w-[560px] h-[420px] pointer-events-none z-[1] opacity-70"
        >
          <svg width="100%" height="100%" viewBox="0 0 560 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="80" y1="20" x2="340" y2="100" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="340" y1="100" x2="520" y2="40" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="340" y1="100" x2="440" y2="240" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="440" y1="240" x2="560" y2="300" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="220" y1="220" x2="440" y2="240" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="80" y1="20" x2="220" y2="220" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="340" y1="100" x2="220" y2="220" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="440" y1="240" x2="320" y2="380" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="220" y1="220" x2="320" y2="380" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="520" y1="40" x2="560" y2="160" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="560" y1="160" x2="440" y2="240" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
          </svg>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM-LEFT WIREFRAME GRAPHIC                                             */}
        {/* ========================================================================= */}
        <div
          className="hidden xl:block absolute bottom-0 left-0 w-[500px] h-[420px] pointer-events-none z-[1] opacity-60"
        >
          <svg width="100%" height="100%" viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="240" x2="120" y2="320" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="120" y1="320" x2="40" y2="420" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="120" y1="320" x2="240" y2="360" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="40" y1="420" x2="240" y2="360" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="0" y1="340" x2="120" y2="320" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="0" y1="240" x2="60" y2="160" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="60" y1="160" x2="180" y2="220" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="120" y1="320" x2="180" y2="220" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="180" y1="220" x2="300" y2="280" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="240" y1="360" x2="300" y2="280" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="240" y1="360" x2="380" y2="400" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />
          </svg>
        </div>

        {/* ========================================================================= */}
        {/* HEADER AREA (CENTERED)                                                    */}
        {/* ========================================================================= */}
        <SectionHeading
          className="flex flex-col items-center text-center mb-10 sm:mb-14 relative z-[2]"
          badge={(
            <Badge className="rounded-full px-5 py-1.5 mb-4 sm:mb-5">
              <span className="text-[13px] font-bold tracking-wider text-[var(--color-primary)] uppercase">
                YOUR SECURITY TEAM
              </span>
            </Badge>
          )}
          headingLevel="h1"
          title={<>AI + Human Analysts, <span className="text-[#EE343F]">Your Way</span></>}
          titleClassName="text-2xl sm:text-3xl lg:text-[44px] font-extrabold text-white mb-3 sm:mb-4 leading-tight tracking-tight"
          description="We blend AI-powered automation with real SOC analysts — available as a dedicated team, shared coverage, or a remote extension of your own staff."
          descriptionClassName="text-sm sm:text-base text-white leading-relaxed max-w-[860px] m-0 font-normal opacity-95 px-2"
        />

        {/* ========================================================================= */}
        {/* TWO-COLUMN SECTION (FEATURE BLOCKS + DASHBOARD MOCKUP)                    */}
        {/* ========================================================================= */}
        <div
          className="w-full max-w-[1720px] flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-12 relative z-[2]"
        >
          {/* LEFT COLUMN (approx 490px wide on desktop, 100% on mobile) */}
          <div
            className="w-full xl:flex-[0_0_490px] xl:max-w-[520px] flex flex-col box-border order-1 xl:order-1"
          >
            {/* 1. Dedicated SOC Team */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <img
                  src="/images/team/icon-dedicated-team.png"
                  alt="Dedicated SOC Team"
                  style={{ width: '46px', height: '46px', objectFit: 'contain', flexShrink: 0 }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: '0 0 8px 0',
                      lineHeight: 1.25,
                    }}
                  >
                    Dedicated SOC Team
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#FFFFFF',
                      lineHeight: 1.55,
                      margin: 0,
                      opacity: 0.95,
                    }}
                  >
                    A named team of analysts assigned exclusively to your environment. They know your infrastructure,
                    your risk profile, and your escalation preferences.
                  </p>
                </div>
              </div>

              {/* Divider 1 */}
              <div
                style={{
                  height: '2px',
                  width: '100%',
                  background:
                    'linear-gradient(90deg, rgba(26, 68, 245, 0) 0%, #EE343F 50%, rgba(26, 68, 245, 0) 100%)',
                  margin: '36px 0',
                }}
              />
            </div>

            {/* 2. SOC Coverage */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <img
                  src="/images/team/icon-soc-coverage.png"
                  alt="SOC Coverage"
                  style={{ width: '46px', height: '46px', objectFit: 'contain', flexShrink: 0 }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: '0 0 8px 0',
                      lineHeight: 1.25,
                    }}
                  >
                    SOC Coverage
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#FFFFFF',
                      lineHeight: 1.55,
                      margin: 0,
                      opacity: 0.95,
                    }}
                  >
                    Cost-efficient 24/7 coverage from our pooled analyst team. Ideal for smaller environments that need
                    round-the-clock eyes without dedicated headcount.
                  </p>
                </div>
              </div>

              {/* Divider 2 */}
              <div
                style={{
                  height: '2px',
                  width: '100%',
                  background:
                    'linear-gradient(90deg, rgba(26, 68, 245, 0) 0%, #EE343F 50%, rgba(26, 68, 245, 0) 100%)',
                  margin: '36px 0',
                }}
              />
            </div>

            {/* 3. Remote Workforce */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <img
                  src="/images/team/icon-remote-workforce.png"
                  alt="Remote Workforce"
                  style={{ width: '46px', height: '46px', objectFit: 'contain', flexShrink: 0 }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: '0 0 8px 0',
                      lineHeight: 1.25,
                    }}
                  >
                    Remote Workforce
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#FFFFFF',
                      lineHeight: 1.55,
                      margin: 0,
                      opacity: 0.95,
                    }}
                  >
                    Embed our analysts into your team as a remote extension. They operate on your tools, join your
                    stand-ups, and work your hours like a hire, without the overhead.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <p
              style={{
                fontSize: '13px',
                color: '#FFFFFF',
                lineHeight: 1.6,
                marginTop: '40px',
                marginBottom: 0,
                opacity: 0.85,
              }}
            >
              Every model includes AI-first triage and correlation. Analysts step in for investigation, escalation,
              and hands-on remediation — so you&apos;re never left alone with an alert and a runbook.
            </p>
          </div>

          {/* RIGHT COLUMN (approx 1060px wide dashboard on desktop, 100% on mobile) */}
          <div
            className="w-full xl:flex-[1_1_980px] xl:max-w-[1120px] rounded-2xl sm:rounded-[24px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.45),0_4px_16px_rgba(0,0,0,0.25)] bg-white border border-white/10 flex flex-col order-2 xl:order-2"
          >
            <img
              src="/images/team/dashboard-detections.png"
              alt="SkieSecure Detections Dashboard Mockup"
              className="w-full h-auto block object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

