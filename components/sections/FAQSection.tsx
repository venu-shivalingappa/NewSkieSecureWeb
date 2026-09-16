'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Who is SkieSecure designed for?',
    answer:
      'SkieSecure is purpose-built for small and mid-sized businesses (50 to 2,000 endpoints) that require enterprise-grade threat detection, FIM, and SIEM coverage without the exorbitant price tag or large dedicated SOC staffing requirements.',
  },
  {
    question: 'How quickly can we get started?',
    answer:
      'Our lightweight agents install in minutes across your macOS, Linux, and Windows endpoints. Most customers are fully operational with active AI correlation and 24/7 analyst coverage in under 10 days.',
  },
  {
    question: 'How does the AI work?',
    answer:
      'Our proprietary AI engine continuously inspects telemetry streams, cross-references against 1,200+ MITRE ATT&CK rules, and executes autonomous triage. It filters out alert fatigue so only high-fidelity incidents require human analyst escalation.',
  },
  {
    question: 'Is our data kept separate from other customers?',
    answer:
      'Yes, absolutely. We enforce strict multi-tenant isolation at both the database and ingestion pipeline layers, complete with end-to-end TLS encryption and granular zero-trust access controls.',
  },
  {
    question: 'What log sources do you support?',
    answer:
      'We support direct endpoint logs, syslog, AWS CloudTrail, Google Cloud Audit Logs, Azure Activity Logs, Microsoft 365, Okta, Cloudflare, GitHub, and custom webhooks or API streams.',
  },
  {
    question: 'What does "open-source stack" mean for me?',
    answer:
      'It means zero vendor lock-in and complete auditable transparency. Your detection logic, schemas, and queries are built on open security standards that you control forever.',
  },
];

export default function FAQSection({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id={id}
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        backgroundImage: 'radial-gradient(rgba(30, 41, 59, 0.15) 1.2px, transparent 1.2px)',
        backgroundSize: '24px 24px',
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: '#1E293B',
        overflowX: 'clip',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '110px 48px 120px 48px',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <div
        className="w-full max-w-[1240px] flex flex-col items-center box-border px-4 sm:px-6"
      >
        {/* ========================================================================= */}
        {/* BADGE: FAQ'S                                                              */}
        {/* ========================================================================= */}
        <div
          className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#FEE6E8] border border-[#F7C7CE] mb-4"
        >
          <span
            className="text-xs font-bold tracking-wider text-[#EE343F] uppercase leading-none"
          >
            FAQ&apos;S
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl xl:text-[44px] font-extrabold text-[#1E293B] mb-3 leading-tight tracking-tight text-center"
        >
          Common Questions
        </h2>

        {/* Subtitle */}
        <p
          className="text-sm sm:text-base text-slate-500 leading-normal max-w-lg mb-8 sm:mb-12 text-center font-normal"
        >
          Everything you need to know about the product and how it works.
        </p>

        {/* ========================================================================= */}
        {/* ACCORDION CONTAINER                                                       */}
        {/* ========================================================================= */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
          }}
        >
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                style={{
                  width: '100%',
                  borderTop: '1px solid #E2E8F0',
                  borderBottom: idx === FAQ_ITEMS.length - 1 ? '1px solid #E2E8F0' : 'none',
                  boxSizing: 'border-box',
                  transition: 'background-color 0.2s ease',
                  backgroundColor: isOpen ? 'rgba(239, 246, 255, 0.45)' : 'transparent',
                }}
              >
                {/* Accordion Row Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 8px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const qEl = e.currentTarget.querySelector('.faq-q') as HTMLElement;
                    if (qEl) qEl.style.color = '#EE343F';
                  }}
                  onMouseLeave={(e) => {
                    const qEl = e.currentTarget.querySelector('.faq-q') as HTMLElement;
                    if (qEl && !isOpen) qEl.style.color = '#1E293B';
                  }}
                >
                  <span
                    className="faq-q"
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: isOpen ? '#EE343F' : '#1E293B',
                      letterSpacing: '-0.015em',
                      lineHeight: 1.4,
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.question}
                  </span>

                  {/* Plus / X Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#EE343F',
                      marginLeft: '16px',
                      flexShrink: 0,
                      transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <Plus size={22} strokeWidth={2.4} />
                  </div>
                </button>

                {/* Animated Expandable Answer */}
                {isOpen && (
                  <div
                    style={{
                      padding: '0 8px 24px 8px',
                      boxSizing: 'border-box',
                      animation: 'fadeInAnswer 0.25s ease-out',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.6,
                        color: '#475569',
                        margin: 0,
                        maxWidth: '960px',
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInAnswer {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
