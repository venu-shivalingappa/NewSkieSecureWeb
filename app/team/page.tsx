'use client';

import React from 'react';
import TeamFeature from '@/components/ui/TeamFeature';

export default function SecurityTeamPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#1E293B',
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: '#FFFFFF',
        position: 'relative',
        overflowX: 'clip',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
      }}
    >
      {/* 1920x1201 Full-Width Section Frame */}
      <section
        style={{
          width: '100%',
          maxWidth: '1920px',
          minHeight: '1201px',
          backgroundColor: '#1E293B',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative',
          padding: '80px 80px 100px 80px',
          boxSizing: 'border-box',
        }}
      >
        {/* ========================================================================= */}
        {/* TOP-RIGHT WIREFRAME GRAPHIC                                              */}
        {/* ========================================================================= */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '560px',
            height: '420px',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.7,
          }}
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
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '500px',
            height: '420px',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.6,
          }}
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '60px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Badge / Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FEE6E8',
              borderRadius: '9999px',
              padding: '6px 20px',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.8px',
                color: '#EE343F',
                textTransform: 'uppercase',
              }}
            >
              YOUR SECURITY TEAM
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: '44px',
              fontWeight: 800,
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
            }}
          >
            AI + Human Analysts, <span style={{ color: '#EE343F' }}>Your Way</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '16px',
              color: '#FFFFFF',
              lineHeight: 1.6,
              maxWidth: '860px',
              margin: 0,
              fontWeight: 400,
              opacity: 0.95,
            }}
          >
            We blend AI-powered automation with real SOC analysts — available as a dedicated team, shared coverage,
            or a remote extension of your own staff.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TWO-COLUMN SECTION (FEATURE BLOCKS + DASHBOARD MOCKUP)                    */}
        {/* ========================================================================= */}
        <div
          style={{
            width: '100%',
            maxWidth: '1720px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '48px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* LEFT COLUMN (approx 490px wide) */}
          <div
            style={{
              flex: '0 0 490px',
              maxWidth: '520px',
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box',
            }}
          >
            <TeamFeature
              iconSrc="/images/team/icon-dedicated-team.png"
              iconAlt="Dedicated SOC Team"
              title="Dedicated SOC Team"
              description={<>A named team of analysts assigned exclusively to your environment. They know your infrastructure,
                your risk profile, and your escalation preferences.</>}
              showDivider
            />

            <TeamFeature
              iconSrc="/images/team/icon-soc-coverage.png"
              iconAlt="SOC Coverage"
              title="SOC Coverage"
              description={<>Cost-efficient 24/7 coverage from our pooled analyst team. Ideal for smaller environments that need
                round-the-clock eyes without dedicated headcount.</>}
              showDivider
            />

            <TeamFeature
              iconSrc="/images/team/icon-remote-workforce.png"
              iconAlt="Remote Workforce"
              title="Remote Workforce"
              description={<>Embed our analysts into your team as a remote extension. They operate on your tools, join your
                stand-ups, and work your hours like a hire, without the overhead.</>}
            />

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

          {/* RIGHT COLUMN (approx 1060px wide dashboard) */}
          <div
            style={{
              flex: '1 1 980px',
              maxWidth: '1120px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.45), 0 4px 16px rgba(0, 0, 0, 0.25)',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img
              src="/images/team/dashboard-detections.png"
              alt="SkieSecure Detections Dashboard Mockup"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

