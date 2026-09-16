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

export default function SecuritySection({ id }: { id?: string }) {
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

  // Auto-advance carousel every 5s for a faster, more responsive motion
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

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

        /* 1. Red text slides in faster (0.7s) */
        .anim-red-text {
          animation: slowSlideInFromLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 2. Red strikethrough line draws faster across exact text width (0.6s, starting shortly after slide-in) */
        .anim-strike-line-1 {
          animation: drawStrikeClean 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards;
        }

        .anim-strike-line-2 {
          animation: drawStrikeClean 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.85s forwards;
        }

        /* 3. Blue text slides in faster (0.8s, starting after red strikethrough completes) */
        .anim-blue-text {
          opacity: 0;
          animation: slowSlideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.5s forwards;
        }
      `}</style>

      <div
        className="w-full max-w-[1720px] min-h-auto xl:min-h-[913px] flex flex-col xl:flex-row items-center justify-center py-12 xl:py-10 px-4 sm:px-6 xl:px-5 box-border relative gap-12 xl:gap-8"
      >
        {/* LEFT COLUMN: STATIC HERO WITH SHIELD */}
        <div
          className="w-full xl:flex-[1_1_650px] max-w-[714px] flex flex-col items-center justify-center text-center p-2 sm:p-5 box-border"
        >
          {/* Concentric Circles & Split-Shield Hero Illustration */}
          <div
            className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] xl:w-[540px] xl:h-[540px] flex items-center justify-center shrink-0"
          >
            {/* SVG Canvas for Concentric Orbital Circles, Accent Dots, and Split Shield */}
            <svg
              viewBox="0 0 540 540"
              fill="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {/* Rotating Orbital Circles & 3 Dots Group */}
              <g
                style={{
                  transformOrigin: '270px 270px',
                  transform: `rotate(${rotationAngle}deg)`,
                  transition: 'transform 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Outer Circular Outline */}
                <circle
                  cx="270"
                  cy="270"
                  r="250"
                  stroke="#F7A8AE"
                  strokeWidth="1.2"
                  strokeOpacity="0.85"
                />

                {/* Inner Circular Outline */}
                <circle
                  cx="270"
                  cy="270"
                  r="192"
                  stroke="#F7B1B7"
                  strokeWidth="1.2"
                  strokeOpacity="0.85"
                />

                {/* Dot 1: Top (12 o'clock on outer circle) */}
                <circle
                  cx="270"
                  cy="20"
                  r="6"
                  fill="#EE343F"
                />

                {/* Dot 2: Right (~3:15 on outer circle) */}
                <circle
                  cx="508"
                  cy="208"
                  r="5.5"
                  fill="#F7A8AE"
                />

                {/* Dot 3: Bottom-Left (~8:15 on outer circle) */}
                <circle
                  cx="46"
                  cy="324"
                  r="6"
                  fill="#EE343F"
                />
              </g>

              {/* Top Arch of Shield (Closer to text without touching or overlapping) */}
              <path
                d="M 148 232 L 148 136 L 270 82 L 392 136 L 392 232"
                stroke="#EE343F"
                strokeWidth="9"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              />

              {/* Bottom Bowl of Shield (Starts below 'Rocket Science' with clean breathing room) */}
              <path
                d="M 162 348 C 176 414 270 454 270 454 C 270 454 364 414 378 348"
                stroke="#EE343F"
                strokeWidth="9"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              />
            </svg>

            {/* Content Centered in the Shield Opening */}
            <div
              className="relative z-[2] flex flex-col items-center justify-center text-center w-full px-2 pointer-events-none select-none"
            >
              {/* "SOUND FAMILIAR?" Badge */}
              <div
                className="inline-flex items-center px-4 py-1.5 rounded-[12px] bg-[#FFF1F2] border border-[#FECDD3] mb-3.5"
              >
                <span className="text-[#F43F5E] text-[11px] font-bold tracking-[0.06em] uppercase">
                  SOUND FAMILIAR?
                </span>
              </div>

              {/* Headline Spanning across the Shield Gap */}
              <h2 className="text-[26px] sm:text-[34px] xl:text-[38px] font-extrabold leading-[1.18] text-[#1E1E1E] tracking-[-0.03em] m-0 text-center whitespace-nowrap">
                Security Shouldn&apos;t Be
                <br />
                <span className="text-[#FF0000] font-black tracking-[-0.02em]">Rocket Science</span>
              </h2>
            </div>
          </div>

          {/* Subtext Paragraph Below Graphic */}
          <p className="text-base sm:text-lg xl:text-[20px] font-normal leading-relaxed sm:leading-7 text-slate-800 tracking-tight max-w-[540px] mt-8 mb-6 text-center px-2">
            Growing businesses face impossible trade-offs. We built SkieSecure to eliminate them.
          </p>

          {/* Outlined Pill CTA Button */}
          <button
            type="button"
            onClick={() => {
              const target = document.getElementById('pricing');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2.5 py-3 px-6 sm:px-7 rounded-full bg-white text-slate-800 text-sm sm:text-[15px] font-semibold border-1.5 border-slate-800 cursor-pointer hover:bg-slate-900 hover:text-white transition-all shadow-sm"
          >
            <span>Ready to stop firefighting?</span>
            <ArrowRight size={17} />
          </button>
        </div>

        {/* RIGHT COLUMN: SEQUENCED ANIMATED CAROUSEL WITH DOT GRID BACKGROUND */}
        <div
          className="w-full xl:flex-[1_1_800px] max-w-[960px] flex flex-col items-center relative py-6 sm:py-10 px-3 sm:px-6 box-border bg-[radial-gradient(#CBD5E1_1.2px,transparent_1.2px)] [background-size:28px_28px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Stack Container */}
          <div className="w-full max-w-[900px] flex flex-col gap-5 sm:gap-8 box-border">
            {/* TOP CARD: PROBLEM CARD (RED #FFE3E3) */}
            <div
              className="bg-[#FFE3E3] rounded-2xl sm:rounded-[30px] p-5 sm:p-8 xl:p-11 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 box-border min-h-[140px] sm:min-h-[170px] shadow-[0_6px_24px_rgba(240,13,13,0.04)]"
            >
              {/* Left Icon (Red Outline) */}
              <div className="w-12 sm:w-16 flex items-center justify-center shrink-0">
                {currentSlide.problem.icon('#B61E2B')}
              </div>

              {/* Right Text Area: Animated sequentially */}
              <div
                key={`problem-${activeSlide}`}
                className="anim-red-text flex-1 relative overflow-visible w-full"
              >
                <div className="flex flex-col items-start relative">
                  {/* Line 1 with Strike 1 */}
                  <div className="relative inline-block max-w-full">
                    <h3 className="text-[#B61E2B] text-xl sm:text-2xl lg:text-[34px] xl:text-[40px] font-medium leading-snug sm:leading-tight tracking-tight m-0">
                      {currentSlide.problem.line1}
                    </h3>

                    {/* Strikethrough Line 1 */}
                    <div
                      className="anim-strike-line-1 absolute left-0 top-[52%] h-[3px] sm:h-[3.5px] bg-[#B61E2B] rounded-sm pointer-events-none"
                    />
                  </div>

                  {/* Line 2 with Strike 2 */}
                  {currentSlide.problem.line2 && (
                    <div className="relative inline-block mt-1 sm:mt-1.5 max-w-full">
                      <h3 className="text-[#B61E2B] text-xl sm:text-2xl lg:text-[34px] xl:text-[40px] font-medium leading-snug sm:leading-tight tracking-tight m-0">
                        {currentSlide.problem.line2}
                      </h3>

                      {/* Strikethrough Line 2 */}
                      <div
                        className="anim-strike-line-2 absolute left-0 top-[52%] h-[3px] sm:h-[3.5px] bg-[#B61E2B] rounded-sm pointer-events-none"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* BOTTOM CARD: SOLUTION CARD (BLUE #D8E6FD) */}
            <div
              className="bg-[#D8E6FD] rounded-2xl sm:rounded-[30px] p-5 sm:p-8 xl:p-11 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 box-border min-h-[160px] sm:min-h-[200px] shadow-[0_6px_24px_rgba(26,68,245,0.04)]"
            >
              {/* Left Icon (Blue Outline) */}
              <div className="w-12 sm:w-16 flex items-center justify-center shrink-0">
                {currentSlide.solution.icon('#EE343F')}
              </div>

              {/* Right Text Area: Animated after red strikethrough */}
              <div
                key={`solution-${activeSlide}`}
                className="anim-blue-text flex-1"
              >
                <h3 className="text-[#EE343F] text-xl sm:text-2xl lg:text-[32px] xl:text-[38px] font-medium leading-snug sm:leading-tight tracking-tight m-0">
                  <div>{currentSlide.solution.line1}</div>
                  {currentSlide.solution.line2 && <div>{currentSlide.solution.line2}</div>}
                  {currentSlide.solution.line3 && <div>{currentSlide.solution.line3}</div>}
                </h3>
              </div>
            </div>
          </div>

          {/* Centered 6-Dot Navigation Indicator */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-11">
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
    </section>
  );
}
