'use client';

import React from 'react';
import {
  Laptop,
  Server,
  Cloud,
  Activity,
  Terminal,
  ShieldCheck,
  Cpu,
  FileText,
  ExternalLink,
  Zap,
  Users,
  Bell,
  Shield,
} from 'lucide-react';

export default function ArchitectureSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="w-full bg-white flex flex-col items-center justify-center py-14 sm:py-20 xl:py-24 px-4 sm:px-6 xl:px-12 box-border min-h-0 xl:min-h-screen"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: '#1E293B',
        overflowX: 'clip',
        backgroundImage: 'radial-gradient(rgba(30, 41, 59, 0.12) 1.2px, transparent 1.2px)',
        backgroundSize: '28px 28px',
      }}
    >
      <style>{`
        @keyframes flowDash {
          0% {
            stroke-dashoffset: 24;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .anim-flow-line {
          animation: flowDash 1.2s linear infinite;
        }
        @keyframes pulseActive {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.85);
          }
        }
        .anim-pulse-dot {
          animation: pulseActive 2s ease-in-out infinite;
        }
      `}</style>

      <div
        style={{
          width: '100%',
          maxWidth: '1720px',
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
        }}
      >
        {/* ========================================================================= */}
        {/* TOP SECTION: HEADING GRAPHIC + 3-ZONE ARCHITECTURE PANEL                 */}
        {/* ========================================================================= */}
        <div
          className="w-full flex flex-col 2xl:flex-row items-center justify-between gap-8 2xl:gap-10"
        >
          {/* Left Heading Illustration Block */}
          <div
            className="w-full 2xl:w-[280px] 2xl:flex-[0_0_280px] flex flex-col items-center justify-center box-border"
          >
            <img
              src="/images/architecture/deployment-architecture-heading.png"
              alt="Deployment Architecture"
              className="w-full max-w-[240px] sm:max-w-[280px] h-auto object-contain block"
            />
          </div>

          {/* Right Architecture Diagram White Panel (3 Zones) */}
          <div
            className="w-full 2xl:flex-[1_1_0%] bg-white rounded-2xl sm:rounded-[24px] border border-slate-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.05),0_2px_6px_rgba(0,0,0,0.02)] p-4 sm:p-6 lg:p-7 box-border overflow-x-auto"
            style={{
              minHeight: 'auto',
            }}
          >
            <div
              className="min-w-[840px] w-full flex flex-row items-stretch justify-between gap-3 sm:gap-4 lg:gap-5"
            >
            {/* ------------------------------------------------------------- */}
            {/* ZONE 1: SENDER ZONE ("YOUR ENVIRONMENT")                      */}
            {/* ------------------------------------------------------------- */}
            <div
              className="flex-[0_0_250px] lg:flex-[0_0_270px] flex flex-col"
            >
              <div style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.8px',
                    color: '#64748B',
                    textTransform: 'uppercase',
                  }}
                >
                  SENDER ZONE
                </span>
                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#1E293B',
                    margin: '4px 0 0 0',
                    letterSpacing: '-0.3px',
                  }}
                >
                  YOUR ENVIRONMENT
                </h2>
              </div>

              {/* 5 Source Cards Stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* 1. Workstations */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: '#FEE6E8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Laptop size={20} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B', lineHeight: 1.2 }}>
                        Workstations
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                        SkieSecure Lightweight Agent
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      className="anim-pulse-dot"
                      style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10B981' }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#10B981' }}>Active</span>
                  </div>
                </div>

                {/* 2. Servers */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: '#FEE6E8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Server size={20} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B', lineHeight: 1.2 }}>
                        Servers
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                        Dedicated Syslog Daemon
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      className="anim-pulse-dot"
                      style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10B981' }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#10B981' }}>Active</span>
                  </div>
                </div>

                {/* 3. Cloud / SaaS */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: '#FEE6E8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Cloud size={20} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B', lineHeight: 1.2 }}>
                        Cloud / SaaS
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Okta, M365, AWS APIs</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      className="anim-pulse-dot"
                      style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10B981' }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#10B981' }}>Active</span>
                  </div>
                </div>

                {/* 4. Network */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: '#FEE6E8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Activity size={20} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B', lineHeight: 1.2 }}>
                        Network
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                        Syslog &amp; Flow Collectors
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      className="anim-pulse-dot"
                      style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10B981' }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#10B981' }}>Active</span>
                  </div>
                </div>

                {/* 5. Custom Sources */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: '#FEE6E8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Terminal size={20} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B', lineHeight: 1.2 }}>
                        Custom Sources
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Unified Ingestion API</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      className="anim-pulse-dot"
                      style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10B981' }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#10B981' }}>Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* ZONE 2: CENTER CHANNEL (TLS ENCRYPTED CONNECTION)             */}
            {/* ------------------------------------------------------------- */}
            <div
              className="flex-[0_0_90px] lg:flex-[0_0_100px] xl:flex-[0_0_115px] flex flex-col items-center justify-center px-1 sm:px-2 box-border"
            >
              {/* Circular Shield-Check Badge */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#FEE6E8',
                  border: '1.5px solid #EE343F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(26, 68, 245, 0.15)',
                  marginBottom: '10px',
                }}
              >
                <ShieldCheck size={22} color="#EE343F" strokeWidth={2.2} />
              </div>

              {/* TLS Label */}
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  color: '#EE343F',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  textTransform: 'uppercase',
                }}
              >
                TLS ENCRYPTED
                <br />
                CONNECTION
              </span>

              {/* Animated Transit Flow Line */}
              <div className="w-full max-w-[100px] h-5 my-2 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 20" fill="none">
                  <path
                    className="anim-flow-line"
                    d="M 4 10 H 88"
                    stroke="#EE343F"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 84 5 L 92 10 L 84 15"
                    stroke="#EE343F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Subtitle */}
              <span
                style={{
                  fontSize: '10px',
                  color: '#64748B',
                  fontWeight: 500,
                  textAlign: 'center',
                  lineHeight: 1.2,
                }}
              >
                AES-256 Transport Security
              </span>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* ZONE 3: RIGHT ZONE (SKIESECURE CLOUD ENGINE)                  */}
            {/* ------------------------------------------------------------- */}
            <div
              className="flex-[1_1_0%] min-w-0 flex flex-col"
            >
              <div style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.8px',
                    color: '#EE343F',
                    textTransform: 'uppercase',
                  }}
                >
                  SKIESECURE ANALYTICS
                </span>
                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#0F172A',
                    margin: '4px 0 0 0',
                    letterSpacing: '-0.3px',
                  }}
                >
                  SKIESECURE CLOUD ENGINE
                </h2>
              </div>

              {/* 2 Columns: Pipeline Flow (Left) + Supporting Modules (Right) */}
              <div
                className="w-full flex flex-row gap-3 lg:gap-4 xl:gap-5 items-stretch"
              >
                {/* PIPELINE FLOW (3 STAGES) */}
                <div
                  className="flex-[1.1_1_0%] min-w-0 flex flex-col justify-between"
                >
                  {/* Stage 1 */}
                  <div className="bg-[#F3F4F6] rounded-2xl p-3.5 sm:p-4 box-border">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          letterSpacing: '0.8px',
                          color: '#EE343F',
                          textTransform: 'uppercase',
                        }}
                      >
                        STAGE 1
                      </span>
                      <Cpu size={18} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: '#1E293B',
                        marginBottom: '6px',
                        letterSpacing: '-0.2px',
                      }}
                    >
                      Ingestion &amp; Normalization
                    </div>
                    <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                      API gateways consume and translate incoming telemetry into structured JSON events.
                    </p>
                  </div>

                  {/* Flow Arrow 1 -> 2 */}
                  <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
                    <svg width="14" height="28" viewBox="0 0 14 28" fill="none">
                      <path d="M 7 2 V 22" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" />
                      <path
                        d="M 3.5 18.5 L 7 22.5 L 10.5 18.5"
                        stroke="#EE343F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Stage 2 */}
                  <div className="bg-[#F3F4F6] rounded-2xl p-3.5 sm:p-4 box-border">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          letterSpacing: '0.8px',
                          color: '#EE343F',
                          textTransform: 'uppercase',
                        }}
                      >
                        STAGE 2
                      </span>
                      <Cpu size={18} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: '#1E293B',
                        marginBottom: '6px',
                        letterSpacing: '-0.2px',
                      }}
                    >
                      SIEM + AI Detection
                    </div>
                    <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                      Core ML models identify indicators of compromise and flag anomalous behavior in real-time.
                    </p>
                  </div>

                  {/* Flow Arrow 2 -> 3 */}
                  <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
                    <svg width="14" height="28" viewBox="0 0 14 28" fill="none">
                      <path d="M 7 2 V 22" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" />
                      <path
                        d="M 3.5 18.5 L 7 22.5 L 10.5 18.5"
                        stroke="#EE343F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Stage 3 */}
                  <div className="bg-[#F3F4F6] rounded-2xl p-3.5 sm:p-4 box-border">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '10px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          letterSpacing: '0.8px',
                          color: '#EE343F',
                          textTransform: 'uppercase',
                        }}
                      >
                        STAGE 3
                      </span>
                      <Cpu size={18} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#1E293B',
                        marginBottom: '8px',
                        letterSpacing: '-0.2px',
                      }}
                    >
                      SOAR Automated Playbooks
                    </div>
                    <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                      Configured response playbooks isolate endpoints, revoke credentials, and dispatch alerts.
                    </p>
                  </div>
                </div>

                {/* SUPPORTING MODULES (RIGHT) */}
                <div
                  className="flex-[0.95_1_0%] min-w-0 flex flex-col gap-2"
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.6px',
                      color: '#64748B',
                      textTransform: 'uppercase',
                      marginBottom: '2px',
                    }}
                  >
                    SUPPORTING MODULES
                  </span>

                  {/* 1. FIM Engine */}
                  <div
                    style={{
                      backgroundColor: '#F3F4F6',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>
                      <FileText size={18} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B', lineHeight: 1.25 }}>
                        FIM Engine
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
                        File Integrity Monitoring
                      </div>
                    </div>
                  </div>

                  {/* 2. Cloud Connectors */}
                  <div
                    style={{
                      backgroundColor: '#F3F4F6',
                      borderRadius: '14px',
                      padding: '14px 18px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>
                      <ExternalLink size={18} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B', lineHeight: 1.25 }}>
                        Cloud Connectors
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
                        API integration plane
                      </div>
                    </div>
                  </div>

                  {/* 3. Threat Fusion */}
                  <div
                    style={{
                      backgroundColor: '#F3F4F6',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>
                      <Zap size={18} color="#EE343F" strokeWidth={2.2} fill="#EE343F" fillOpacity={0.15} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B', lineHeight: 1.25 }}>
                        Threat Fusion
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
                        Intel Feed Normalization
                      </div>
                    </div>
                  </div>

                  {/* 4. SOC Analysts */}
                  <div
                    style={{
                      backgroundColor: '#F3F4F6',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>
                      <Users size={18} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B', lineHeight: 1.25 }}>
                        SOC Analysts
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
                        Human-in-the-Loop review
                      </div>
                    </div>
                  </div>

                  {/* 5. AI Agents */}
                  <div
                    style={{
                      backgroundColor: '#F3F4F6',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>
                      <Cpu size={18} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B', lineHeight: 1.25 }}>
                        AI Agents
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
                        Autonomous triage system
                      </div>
                    </div>
                  </div>

                  {/* 6. Alert Dispatch */}
                  <div
                    style={{
                      backgroundColor: '#F3F4F6',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>
                      <Bell size={18} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B', lineHeight: 1.25 }}>
                        Alert Dispatch
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
                        PagerDuty, Slack &amp; Webhooks
                      </div>
                    </div>
                  </div>

                  {/* 7. Audit Reports */}
                  <div
                    style={{
                      backgroundColor: '#F3F4F6',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>
                      <Shield size={18} color="#EE343F" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B', lineHeight: 1.25 }}>
                        Audit Reports
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
                        Compliance reporting
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM SECTION: 3 DEPLOYMENT CARDS (570px EACH)                           */}
        {/* ========================================================================= */}
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch justify-between"
        >
          {/* Card 1: Lightweight Agent (Light Blue #FEE6E8) */}
          <div
            className="w-full bg-[#FEE6E8] rounded-[24px] p-7 sm:p-9 flex flex-col justify-between shadow-[0_8px_24px_rgba(26,68,245,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(26,68,245,0.08)] box-border"
          >
            <div>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#1E293B',
                  margin: '0 0 14px 0',
                  letterSpacing: '-0.3px',
                }}
              >
                Lightweight Agent
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '23px',
                  color: '#475569',
                  margin: 0,
                  letterSpacing: '-0.15px',
                }}
              >
                Ultra-low overhead eBPF-powered agent for Linux, Windows, and macOS. Deploys in minutes via curl or
                package manager. Real-time telemetry with &lt;1% CPU usage.
              </p>
            </div>

            {/* Illustration of Friendly Futuristic AI Security Robot */}
            <div
              style={{
                width: '100%',
                height: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <img
                src="/images/architecture/lightweight-agent.png"
                alt="Lightweight Agent Robot"
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 12px 24px rgba(26, 68, 245, 0.12))',
                }}
              />
            </div>
          </div>

          {/* Card 2: Cloud Connectors (Warm Peach #FFF4E2) */}
          <div
            className="w-full bg-[#FFF4E2] rounded-[24px] p-7 sm:p-9 flex flex-col justify-between shadow-[0_8px_24px_rgba(245,158,11,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(245,158,11,0.08)] box-border"
          >
            <div>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#1E293B',
                  margin: '0 0 14px 0',
                  letterSpacing: '-0.3px',
                }}
              >
                Cloud Connectors
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '23px',
                  color: '#475569',
                  margin: 0,
                  letterSpacing: '-0.15px',
                }}
              >
                Native integrations with AWS, Azure, GCP, Microsoft 365, Google Workspace, Okta, and more. API-based
                collection - no agents needed for cloud and SaaS sources.
              </p>
            </div>

            {/* Illustration of Connected Cloud & Integrations */}
            <div
              style={{
                width: '100%',
                height: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <img
                src="/images/architecture/cloud-connectors.png"
                alt="Cloud Connectors Integration"
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 12px 24px rgba(245, 158, 11, 0.12))',
                }}
              />
            </div>
          </div>

          {/* Card 3: Threat Fusion (Soft Purple #F7EFFF) */}
          <div
            className="w-full bg-[#F7EFFF] rounded-[24px] p-7 sm:p-9 flex flex-col justify-between shadow-[0_8px_24px_rgba(168,85,247,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(168,85,247,0.08)] box-border"
          >
            <div>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#1E293B',
                  margin: '0 0 14px 0',
                  letterSpacing: '-0.3px',
                }}
              >
                Threat Fusion
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '23px',
                  color: '#475569',
                  margin: 0,
                  letterSpacing: '-0.15px',
                }}
              >
                Telemetry is enriched with threat intelligence feeds, reputation data, and contextual signals before
                detection — giving AI and analysts the full picture, not raw logs.
              </p>
            </div>

            {/* Illustration of Glowing Cyber Threat Fusion Orb */}
            <div
              style={{
                width: '100%',
                height: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <img
                src="/images/architecture/threat-fusion.png"
                alt="Threat Fusion Orb"
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 12px 24px rgba(168, 85, 247, 0.15))',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
