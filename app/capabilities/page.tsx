'use client';

import React from 'react';
import {
  Database,
  FileText,
  Zap,
  Users,
  Cpu,
  Activity,
  Folder,
  Shield,
} from 'lucide-react';

interface CapabilityCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    icon: <Database size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'SIEM',
    description:
      'Centralized log ingestion, normalization, and correlation across every source. Search, investigate, and hunt — all in one place.',
  },
  {
    icon: <FileText size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'File Integrity Monitoring',
    description:
      'Real-time FIM across all endpoints. Detect unauthorized changes to critical files, configs, and registries instantly.',
  },
  {
    icon: <Zap size={20} color="#EE343F" strokeWidth={2.2} fill="#EE343F" fillOpacity={0.15} />,
    title: 'SOAR',
    description:
      'Automated playbooks orchestrate response across your stack. Contain, isolate, and remediate threats in minutes, not hours.',
  },
  {
    icon: <Users size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'Human-in-the-Loop Response',
    description:
      'Dedicated, shared, or embedded analysts guide you through every incident. Hands-on remediation — not just an alert and a wiki link.',
  },
  {
    icon: <Cpu size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'AI Threat Detection',
    description:
      'ML models + 1,200+ detection rules covering MITRE ATT&CK. Behavioral analytics catch what signatures miss.',
  },
  {
    icon: <Activity size={20} color="#EE343F" strokeWidth={2.2} />,
    title: '24/7 Monitoring',
    description:
      'AI triage around the clock, human analysts on every escalation. Continuous coverage without hiring a night shift.',
  },
  {
    icon: <Folder size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'Case Management',
    description:
      'Full incident lifecycle — evidence collection, timelines, analyst notes, and audit trails. Built for compliance.',
  },
  {
    icon: <Shield size={20} color="#EE343F" strokeWidth={2.2} />,
    title: 'Compliance Reporting',
    description:
      'Auto-generated reports for SOC 2, ISO 27001, ISO 42001, HIPAA, and PCI. Board-ready dashboards tracking risk, posture, and progress.',
  },
];

export default function CapabilitiesPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#FFFFFF',
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: '#1E293B',
        overflowX: 'clip',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        boxSizing: 'border-box',
      }}
    >
      {/* Container max-width matching the design composition */}
      <section
        style={{
          width: '100%',
          maxWidth: '1240px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* ========================================================================= */}
        {/* HEADER AREA (CENTERED)                                                    */}
        {/* ========================================================================= */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '48px',
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
              marginBottom: '16px',
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
              CAPABILITIES
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: '40px',
              fontWeight: 800,
              color: '#1E293B',
              margin: '0 0 12px 0',
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
            }}
          >
            Everything You Need to <span style={{ color: '#EE343F' }}>Stay Secure</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p
            style={{
              fontSize: '16px',
              color: '#64748B',
              lineHeight: 1.5,
              margin: 0,
              fontWeight: 400,
            }}
          >
            SIEM, FIM, SOAR, and expert analysts — all included, all managed.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 8 CARDS GRID (2 COLUMNS x 4 ROWS)                                         */}
        {/* ========================================================================= */}
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '16px',
            boxSizing: 'border-box',
          }}
        >
          {CAPABILITIES.map((card, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#F3F4F6',
                borderRadius: '16px',
                padding: '24px 28px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: '20px',
                boxSizing: 'border-box',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Circular Icon Container */}
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#FEE6E8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                {card.icon}
              </div>

              {/* Text Block */}
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#1E293B',
                    margin: '0 0 6px 0',
                    lineHeight: 1.3,
                    letterSpacing: '-0.2px',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: '#64748B',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

