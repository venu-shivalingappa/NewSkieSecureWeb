'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface SlideData {
  id: number;
  problem: {
    icon: (color: string) => React.ReactNode;
    line1: string;
    line2?: string;
  };
  solution: {
    icon: (color: string) => React.ReactNode;
    line1: string;
    line2?: string;
    line3?: string;
  };
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      ),
      line1: "Drowning in alerts you can't",
      line2: 'investigate',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'AI triages thousands of',
      line2: 'events down to the handful',
      line3: 'that need human eyes.',
    },
  },
  {
    id: 2,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      line1: 'Security tools built for',
      line2: 'Fortune 500 budgets',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'All-in-one pricing from $10/endpoint/mo.',
      line2: 'No modules, no per-GB fees,',
      line3: 'no surprise overages.',
    },
  },
  {
    id: 3,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      ),
      line1: 'Compliance audits keep you',
      line2: 'up at night',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'Continuous monitoring + auto-generated reports',
      line2: 'for SOC 2, ISO 27001, ISO 42001,',
      line3: 'HIPAA, PCI.',
    },
  },
  {
    id: 4,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      line1: "No visibility into what's",
      line2: 'actually happening',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'Real-time dashboards showing every',
      line2: 'event, alert, and action —',
      line3: 'in plain language.',
    },
  },
  {
    id: 5,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="17" y1="8" x2="23" y2="14" />
          <line x1="23" y1="8" x2="17" y2="14" />
        </svg>
      ),
      line1: "Can't hire or retain",
      line2: 'security talent',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'Our analysts become your team —',
      line2: '24/7 coverage without',
      line3: '6-figure salaries.',
    },
  },
  {
    id: 6,
    problem: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      line1: 'Weeks long onboarding for',
      line2: 'new security tools',
    },
    solution: {
      icon: (color) => (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      line1: 'Agents deploy in minutes.',
      line2: 'Most customers are fully live',
      line3: 'in under 10 days.',
    },
  },
];

export default function SecurityPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isFirstMount = useRef(true);

  // Rotate orbital circles and dots on every slide transition
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    setRotationAngle((prev) => prev + 60);
  }, [activeSlide]);

  // Auto-advance carousel every 7s to allow slow choreographed sequence
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeSlide]);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const currentSlide = SLIDES[activeSlide];

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
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        @keyframes slowSlideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-56px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes drawStrikeClean {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        /* 1. Red text slides in slowly (1.1s) */
        .anim-red-text {
          animation: slowSlideInFromLeft 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 2. Red strikethrough line draws across exact text width (1.0s, starting after red text settles) */
        .anim-strike-line-1 {
          animation: drawStrikeClean 1.0s cubic-bezier(0.22, 1, 0.36, 1) 1.05s forwards;
        }

        .anim-strike-line-2 {
          animation: drawStrikeClean 1.0s cubic-bezier(0.22, 1, 0.36, 1) 1.25s forwards;
        }

        /* 3. Blue text slides in slowly (1.2s, starting after red strikethrough completes) */
        .anim-blue-text {
          opacity: 0;
          animation: slowSlideInFromLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2.25s forwards;
        }
      `}</style>

      <div
        style={{
          width: '100%',
          maxWidth: '1720px',
          minHeight: '913px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        {/* LEFT COLUMN: STATIC HERO WITH SHIELD */}
        <div
          style={{
            flex: '1 1 650px',
            maxWidth: '714px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            boxSizing: 'border-box',
          }}
        >
          {/* Concentric Circles & Split-Shield Hero Illustration */}
          <div
            style={{
              position: 'relative',
              width: '540px',
              height: '540px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* SVG Canvas for Concentric Orbital Circles, Accent Dots, and Split Shield */}
            <svg
              width="540"
              height="540"
              viewBox="0 0 540 540"
              fill="none"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
              }}
            >
              {/* Rotating Orbital Circles & 3 Dots */}
              <g
                style={{
                  transformOrigin: '270px 270px',
                  transform: `rotate(${rotationAngle}deg)`,
                  transition: 'transform 3.0s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Outer Circular Outline (diameter 470px) */}
                <circle
                  cx="270"
                  cy="270"
                  r="235"
                  stroke="#F7A8AE"
                  strokeWidth="1.4"
                  strokeOpacity="0.75"
                />

                {/* Inner Circular Outline (diameter 370px) */}
                <circle
                  cx="270"
                  cy="270"
                  r="185"
                  stroke="#F7B1B7"
                  strokeWidth="1.4"
                  strokeOpacity="0.85"
                />

                {/* Dot 1: Top (12 o'clock on inner circle) */}
                <circle
                  cx="270"
                  cy="85"
                  r="6.5"
                  fill="#EE343F"
                />

                {/* Dot 2: Right (3 o'clock on outer circle) */}
                <circle
                  cx="505"
                  cy="270"
                  r="5.5"
                  fill="#F7A1A7"
                />

                {/* Dot 3: Bottom-Left (~8 o'clock on outer circle) */}
                <circle
                  cx="78"
                  cy="405"
                  r="6.5"
                  fill="#EE343F"
                />
              </g>

              {/* Top Arch of Shield (Stops above text) */}
              <path
                d="M 152 268 L 152 160 L 270 105 L 388 160 L 388 268"
                stroke="#EE343F"
                strokeWidth="10.5"
                strokeLinecap="butt"
                strokeLinejoin="round"
              />

              {/* Bottom Bowl of Shield (Cups under text) */}
              <path
                d="M 165 352 C 178 418 270 458 270 458 C 270 458 362 418 375 352"
                stroke="#EE343F"
                strokeWidth="10.5"
                strokeLinecap="butt"
                strokeLinejoin="round"
              />
            </svg>

            {/* Content Centered in the Shield Opening */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
                paddingTop: '6px',
              }}
            >
              {/* "SOUND FAMILIAR?" Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '5px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.22)',
                  marginBottom: '22px',
                }}
              >
                <span
                  style={{
                    color: '#B61E2B',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                  }}
                >
                  SOUND FAMILIAR?
                </span>
              </div>

              {/* Headline Spanning across the Shield Gap */}
              <h2
                style={{
                  fontSize: '40px',
                  fontWeight: 800,
                  lineHeight: '46px',
                  color: '#1E1E1E',
                  letterSpacing: '-0.8px',
                  margin: 0,
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                Security Shouldn’t Be
                <br />
                <span style={{ color: '#B61E2B' }}>Rocket Science</span>
              </h2>
            </div>
          </div>

          {/* Subtext Paragraph Below Graphic */}
          <p
            style={{
              fontSize: '21px',
              fontWeight: 500,
              lineHeight: '28px',
              color: '#1E293B',
              letterSpacing: '-0.4px',
              maxWidth: '560px',
              margin: '28px 0 24px 0',
              textAlign: 'center',
            }}
          >
            Growing businesses face impossible trade-offs. We built SkieSecure to eliminate them.
          </p>

          {/* Outlined Pill CTA Button */}
          <button
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 28px',
              borderRadius: '9999px',
              backgroundColor: '#FFFFFF',
              color: '#1E293B',
              fontSize: '15px',
              fontWeight: 600,
              border: '1.5px solid #1E293B',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1E293B';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#1E293B';
            }}
          >
            <span>Ready to stop firefighting?</span>
            <ArrowRight size={17} />
          </button>
        </div>

        {/* RIGHT COLUMN: SEQUENCED ANIMATED CAROUSEL WITH DOT GRID BACKGROUND */}
        <div
          style={{
            flex: '1 1 800px',
            maxWidth: '960px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            padding: '40px 20px',
            boxSizing: 'border-box',
            backgroundImage: 'radial-gradient(#CBD5E1 1.2px, transparent 1.2px)',
            backgroundSize: '28px 28px',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Stack Container */}
          <div
            style={{
              width: '100%',
              maxWidth: '900px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              boxSizing: 'border-box',
            }}
          >
            {/* TOP CARD: PROBLEM CARD (RED #FFE3E3) */}
            <div
              style={{
                backgroundColor: '#FFE3E3',
                borderRadius: '30px',
                padding: '40px 48px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '40px',
                boxSizing: 'border-box',
                minHeight: '170px',
                boxShadow: '0 6px 24px rgba(240, 13, 13, 0.04)',
              }}
            >
              {/* Left Icon (Red Outline) */}
              <div
                style={{
                  width: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {currentSlide.problem.icon('#B61E2B')}
              </div>

              {/* Right Text Area: Animated sequentially */}
              <div
                key={`problem-${activeSlide}`}
                className="anim-red-text"
                style={{
                  flex: 1,
                  position: 'relative',
                  overflow: 'visible',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    position: 'relative',
                  }}
                >
                  {/* Line 1 with Strike 1 */}
                  <div
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                    }}
                  >
                    <h3
                      style={{
                        color: '#B61E2B',
                        fontSize: 'clamp(28px, 2.7vw, 42px)',
                        fontWeight: 500,
                        lineHeight: 1.25,
                        letterSpacing: '-0.02em',
                        margin: 0,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {currentSlide.problem.line1}
                    </h3>

                    {/* Strikethrough Line 1 */}
                    <div
                      className="anim-strike-line-1"
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '52%',
                        height: '3.5px',
                        backgroundColor: '#B61E2B',
                        borderRadius: '2px',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>

                  {/* Line 2 with Strike 2 (Exceeding the text!) */}
                  {currentSlide.problem.line2 && (
                    <div
                      style={{
                        position: 'relative',
                        display: 'inline-block',
                        marginTop: '4px',
                      }}
                    >
                      <h3
                        style={{
                          color: '#B61E2B',
                          fontSize: 'clamp(28px, 2.7vw, 42px)',
                          fontWeight: 500,
                          lineHeight: 1.25,
                          letterSpacing: '-0.02em',
                          margin: 0,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {currentSlide.problem.line2}
                      </h3>

                      {/* Strikethrough Line 2 that exceeds text to the right */}
                      <div
                        className="anim-strike-line-2"
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '52%',
                          height: '3.5px',
                          backgroundColor: '#B61E2B',
                          borderRadius: '2px',
                          pointerEvents: 'none',
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* BOTTOM CARD: SOLUTION CARD (BLUE #FEE6E8) */}
            <div
              style={{
                backgroundColor: '#FEE6E8',
                borderRadius: '30px',
                padding: '40px 48px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '40px',
                boxSizing: 'border-box',
                minHeight: '200px',
                boxShadow: '0 6px 24px rgba(238, 52, 63, 0.06)',
              }}
            >
              {/* Left Icon (Blue Outline) */}
              <div
                style={{
                  width: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {currentSlide.solution.icon('#EE343F')}
              </div>

              {/* Right Text Area: Animated after red strikethrough */}
              <div
                key={`solution-${activeSlide}`}
                className="anim-blue-text"
                style={{
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    color: '#EE343F',
                    fontSize: 'clamp(28px, 2.7vw, 42px)',
                    fontWeight: 500,
                    lineHeight: 1.26,
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  <div>{currentSlide.solution.line1}</div>
                  {currentSlide.solution.line2 && <div>{currentSlide.solution.line2}</div>}
                  {currentSlide.solution.line3 && <div>{currentSlide.solution.line3}</div>}
                </h3>
              </div>
            </div>
          </div>

          {/* Centered 6-Dot Navigation Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '44px',
            }}
          >
            {SLIDES.map((_, idx) => {
              const isActive = idx === activeSlide;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: isActive ? '14px' : '10px',
                    height: isActive ? '14px' : '10px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#EE343F' : '#6B7280',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transform: isActive ? 'scale(1.18)' : 'scale(1)',
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
