'use client';

import React, { useState } from 'react';

interface FooterSectionProps {
  id?: string;
  onOpenModal?: (title?: string, interest?: string) => void;
}

export default function FooterSection({ id, onOpenModal }: FooterSectionProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenModal) {
      onOpenModal('Be First in Line — Early Access', 'General / Growth (251-1,000 endpoints)');
    }
  };

  return (
    <footer
      id={id}
      style={{
        width: '100%',
        backgroundColor: '#1E293B',
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: '#FFFFFF',
        overflowX: 'clip',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
      }}
    >
      {/* 1920 Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1920px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* ===================================================================== */}
        {/* CTA AREA: "Be First in Line"                                          */}
        {/* ===================================================================== */}
        <div
          className="w-full py-16 sm:py-24 px-4 sm:px-8 xl:px-12 flex flex-col items-center text-center box-border"
        >
          {/* Main CTA Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight text-white mb-4">
            Be First in Line
          </h2>

          {/* Subtitle description */}
          <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-400 mb-8 sm:mb-9 max-w-[680px] tracking-tight px-2">
            We&apos;re launching soon. Get early access, founding-member pricing, and a direct line to our team.
          </p>

          {/* Email Subscription Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[480px] mb-4"
          >
            {/* Input Pill */}
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-[320px] h-12 rounded-full px-5 text-sm sm:text-[15px] text-white bg-slate-800/80 border border-slate-700/80 outline-none focus:border-[#1A44F5] transition-colors"
            />

            {/* Button Pill: Get Early Access */}
            <button
              type="submit"
              className="w-full sm:w-auto h-12 px-7 rounded-full bg-[#1A44F5] hover:bg-[#1538cc] text-white text-sm sm:text-[15px] font-semibold transition-colors shrink-0 shadow-md cursor-pointer"
            >
              Get Early Access
            </button>
          </form>

          {/* Disclaimer: No spam. Just launch updates. */}
          <span className="text-xs sm:text-sm text-slate-500 tracking-tight">
            No spam. Just launch updates.
          </span>
        </div>

        {/* ===================================================================== */}
        {/* SUBTLE HORIZONTAL DIVIDER RULE                                        */}
        {/* ===================================================================== */}
        <div className="w-full h-[1px] bg-white/10 max-w-[1720px]" />

        {/* ===================================================================== */}
        {/* FOOTER BAR: Logo + Navigation Links + Copyright                       */}
        {/* ===================================================================== */}
        <div
          className="w-full max-w-[1440px] py-8 sm:py-10 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6 box-border text-center md:text-left"
        >
          {/* Brand Logo (Left) */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1A44F5] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(26,68,245,0.35)]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight leading-none inline-flex items-center">
              <span className="text-white">Skie</span>
              <span className="text-[#1A44F5]">Secure</span>
            </span>
          </div>

          {/* Footer Nav Links (Center) */}
          <nav className="flex items-center flex-wrap justify-center gap-6 text-sm text-slate-400 font-medium">
            <a
              href="#platform"
              className="hover:text-white transition-colors"
            >
              Platform
            </a>
            <a
              href="#features"
              className="hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors"
            >
              FAQ
            </a>
            <button
              type="button"
              onClick={() => onOpenModal?.('Contact SkieSecure Security Team', 'General Inquiry')}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-sm text-slate-400 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Copyright notice (Right) */}
          <div className="text-xs sm:text-sm text-slate-500 tracking-tight">
            &copy; 2026 SkieSecure. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
