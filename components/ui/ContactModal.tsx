'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Shield, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  initialInterest?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  title = 'Join the Waitlist & Get Early Access',
  initialInterest = 'General / Growth (251-1,000 endpoints)',
}: ContactModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [endpoints, setEndpoints] = useState('50 - 250 endpoints');
  const [interest, setInterest] = useState(initialInterest);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync initial interest when opened
  useEffect(() => {
    if (initialInterest) setInterest(initialInterest);
  }, [initialInterest]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          company,
          endpoints,
          interest,
        }),
      });
    } catch (err) {
      console.error('Submission failed:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFullName('');
        setEmail('');
        setCompany('');
        onClose();
      }, 2500);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.72)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          animation: 'fadeInBackdrop 0.25s ease-out forwards',
        }}
      />

      {/* Modal Card */}
      <div
        className="relative w-full max-w-[540px] max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-[24px] p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(226,232,240,0.8)] box-border z-10"
        style={{
          fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          animation: 'scaleInModal 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#F1F5F9',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748B',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E2E8F0';
            e.currentTarget.style.color = '#0F172A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F1F5F9';
            e.currentTarget.style.color = '#64748B';
          }}
        >
          <X size={18} strokeWidth={2.4} />
        </button>

        {submitted ? (
          /* ================================================================= */
          /* SUCCESS STATE                                                     */
          /* ================================================================= */
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '30px 10px',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#E5EEFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <CheckCircle size={36} color="#1A44F5" strokeWidth={2.4} />
            </div>
            <h3
              style={{
                fontSize: '26px',
                fontWeight: 700,
                color: '#0F172A',
                letterSpacing: '-0.02em',
                margin: '0 0 10px 0',
              }}
            >
              You&apos;re On the List!
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.55,
                color: '#64748B',
                margin: 0,
                maxWidth: '380px',
              }}
            >
              Thank you for requesting early access. Our team will reach out with your private onboarding credentials shortly.
            </p>
          </div>
        ) : (
          /* ================================================================= */
          /* FORM STATE                                                        */
          /* ================================================================= */
          <div>
            {/* Header / Brand Icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: '#1A44F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(26, 68, 245, 0.3)',
                }}
              >
                <Shield size={16} color="#FFFFFF" strokeWidth={2.4} />
              </div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#1A44F5',
                  textTransform: 'uppercase',
                }}
              >
                EARLY ACCESS PRIORITY
              </span>
            </div>

            <h3
              style={{
                fontSize: '26px',
                fontWeight: 800,
                color: '#0F172A',
                letterSpacing: '-0.025em',
                lineHeight: 1.25,
                margin: '0 0 8px 0',
              }}
            >
              {title}
            </h3>

            <p
              style={{
                fontSize: '14.5px',
                color: '#64748B',
                lineHeight: 1.5,
                margin: '0 0 24px 0',
              }}
            >
              Lock in founding-member pricing, full SIEM/FIM/SOAR modules, and 24/7 human analyst escalation.
            </p>

            {/* Input Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Full Name */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#334155',
                    marginBottom: '6px',
                  }}
                >
                  Full Name <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    height: '44px',
                    borderRadius: '10px',
                    border: '1.5px solid #E2E8F0',
                    padding: '0 14px',
                    fontSize: '14.5px',
                    color: '#0F172A',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.15s ease',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#1A44F5')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#E2E8F0')}
                />
              </div>

              {/* Work Email */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#334155',
                    marginBottom: '6px',
                  }}
                >
                  Work Email <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    height: '44px',
                    borderRadius: '10px',
                    border: '1.5px solid #E2E8F0',
                    padding: '0 14px',
                    fontSize: '14.5px',
                    color: '#0F172A',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.15s ease',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#1A44F5')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#E2E8F0')}
                />
              </div>

              {/* Company Name & Endpoints Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#334155',
                      marginBottom: '6px',
                    }}
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{
                      width: '100%',
                      height: '44px',
                      borderRadius: '10px',
                      border: '1.5px solid #E2E8F0',
                      padding: '0 14px',
                      fontSize: '14.5px',
                      color: '#0F172A',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.15s ease',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#1A44F5')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#E2E8F0')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#334155',
                      marginBottom: '6px',
                    }}
                  >
                    Environment Size
                  </label>
                  <select
                    value={endpoints}
                    onChange={(e) => setEndpoints(e.target.value)}
                    style={{
                      width: '100%',
                      height: '44px',
                      borderRadius: '10px',
                      border: '1.5px solid #E2E8F0',
                      padding: '0 12px',
                      fontSize: '14px',
                      color: '#0F172A',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#1A44F5')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#E2E8F0')}
                  >
                    <option value="50 - 250 endpoints">50 - 250 endpoints</option>
                    <option value="251 - 1,000 endpoints">251 - 1,000 endpoints</option>
                    <option value="1,000+ endpoints">1,000+ endpoints</option>
                    <option value="Under 50 endpoints">Under 50 endpoints</option>
                  </select>
                </div>
              </div>

              {/* Tier / Interest Selection */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#334155',
                    marginBottom: '6px',
                  }}
                >
                  Plan of Interest
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  style={{
                    width: '100%',
                    height: '44px',
                    borderRadius: '10px',
                    border: '1.5px solid #E2E8F0',
                    padding: '0 12px',
                    fontSize: '14px',
                    color: '#0F172A',
                    backgroundColor: '#FFFFFF',
                    outline: 'none',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#1A44F5')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#E2E8F0')}
                >
                  <option value="Starter ($10/mo)">Starter Plan ($10/mo - 50-250 endpoints)</option>
                  <option value="Growth ($8/mo)">Growth / Professionals ($8/mo - 251-1,000 endpoints)</option>
                  <option value="Enterprise (Custom)">Enterprise (Custom - 1,000+ endpoints)</option>
                  <option value="Dedicated SOC Team">Dedicated SOC Team Inquiry</option>
                </select>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '9999px',
                  backgroundColor: '#1A44F5',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: loading ? 'wait' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(26, 68, 245, 0.35)',
                  transition: 'all 0.2s ease',
                  marginTop: '10px',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.backgroundColor = '#1538cc';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(26, 68, 245, 0.45)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.backgroundColor = '#1A44F5';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(26, 68, 245, 0.35)';
                  }
                }}
              >
                <span>{loading ? 'Submitting...' : 'Submit & Claim Access'}</span>
                {!loading && <ArrowRight size={17} strokeWidth={2.4} />}
              </button>
            </form>

            {/* Bottom guarantee note */}
            <div
              style={{
                fontSize: '12px',
                color: '#94A3B8',
                textAlign: 'center',
                marginTop: '16px',
              }}
            >
              🔒 100% confidential. No spam, month-to-month terms, cancel anytime.
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleInModal {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
