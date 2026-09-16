'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import SecuritySection from '@/components/sections/SecuritySection';
import PlatformSection from '@/components/sections/PlatformSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import TeamSection from '@/components/sections/TeamSection';
import WhySkieSecureSection from '@/components/sections/WhySkieSecureSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FooterSection from '@/components/sections/FooterSection';
import ContactModal from '@/components/ui/ContactModal';
import { Button } from '@/components/ui/Button';

export default function LandingPage() {
  // Contact / Waitlist Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Join the Waitlist & Get Early Access');
  const [modalInterest, setModalInterest] = useState('Growth ($8/mo)');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openContactModal = (title?: string, interest?: string) => {
    if (title) setModalTitle(title);
    if (interest) setModalInterest(interest);
    setIsModalOpen(true);
  };

  // Parallax mouse position state (normalized -1 to 1)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Handle mouse movement across the hero section
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Smooth lerp loop for 60fps buttery parallax animation
  useEffect(() => {
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (mousePos.x - currentX) * 0.08;
      currentY += (mousePos.y - currentY) * 0.08;
      setSmoothPos({ x: currentX, y: currentY });
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [mousePos]);

  return (
    <main
      className="bg-white font-sans flex flex-col items-center justify-start"
      style={{
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'clip',
      }}
    >
      {/* Top Navbar */}
      <header
        className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-[72px] sm:h-[76px] flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none"
          >
            <div className="w-8 h-8 sm:w-[38px] sm:h-[38px] rounded-[10px] bg-[#EE343F] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(238,52,63,0.28)]">
              <svg
                className="w-4 h-4 sm:w-[19px] sm:h-[19px]"
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
            <span className="text-xl sm:text-[22px] font-bold tracking-tight leading-none inline-flex items-center">
              <span className="text-[#1E1E1E]">Skie</span>
              <span className="text-[#EE343F]">Secure</span>
            </span>
          </div>

          {/* Desktop Nav Items & Early Access CTA */}
          <div className="hidden lg:flex items-center gap-9">
            <nav className="flex items-center gap-8">
              <a
                href="#platform"
                className="text-slate-600 hover:text-[#EE343F] text-[15px] font-medium transition-colors"
              >
                Platform
              </a>
              <a
                href="#features"
                className="text-slate-600 hover:text-[#EE343F] text-[15px] font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-slate-600 hover:text-[#EE343F] text-[15px] font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-slate-600 hover:text-[#EE343F] text-[15px] font-medium transition-colors"
              >
                FAQ
              </a>
            </nav>

            <Button
              type="button"
              onClick={() => openContactModal('Get Early Access — Priority Access', 'Growth ($8/mo)')}
              className="py-2.5 px-5.5 rounded-full text-sm font-semibold shadow-[0_2px_10px_rgba(238,52,63,0.3)] hover:shadow-[0_4px_14px_rgba(238,52,63,0.4)] whitespace-nowrap transition-all"
            >
              Get Early Access
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <Button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openContactModal('Get Early Access — Priority Access', 'Growth ($8/mo)');
              }}
              className="py-2 px-3.5 sm:px-4 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shadow-sm transition-colors"
            >
              Get Early Access
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-6 py-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4">
              <a
                href="#platform"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-[#EE343F] text-base font-semibold py-1.5 transition-colors"
              >
                Platform
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-[#EE343F] text-base font-semibold py-1.5 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-[#EE343F] text-base font-semibold py-1.5 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-[#EE343F] text-base font-semibold py-1.5 transition-colors"
              >
                FAQ
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* 
        HeroSection (Figma Frame 144-4446)
        Desktop: width 1920px; height 1063px; position relative.
        Mobile / Tablet: Fluid width, clean auto height, adaptive text & cards without horizontal overflow.
      */}
      <section
        id="hero"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative select-none w-full max-w-[1920px] min-h-0 xl:h-[1063px] pt-10 pb-14 xl:py-0 px-4 sm:px-6 xl:px-0 flex flex-col items-center justify-start overflow-x-clip"
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          perspective: '1200px',
        }}
      >
        {/* Background Constellation Web & Soft Radial / Linear Gradient with Parallax */}
        <div
          className="absolute inset-0 pointer-events-none z-0 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: 'url(/geometric-mesh-bg.png)',
            backgroundSize: '1920px 806px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            transform: `translate3d(${smoothPos.x * -6}px, ${smoothPos.y * -4}px, 0px)`,
          }}
        >
          {/* Vector 1 Linear Gradient Overlay from Figma */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(177.95deg, rgba(255, 255, 255, 0.05) -6.97%, rgba(26, 68, 245, 0.06) 98.14%)',
            }}
          />
        </div>

        {/* 
          Container: Auto layout
          Desktop: absolute, top: 74px, width: 1670px
          Mobile: relative, top: 0, w-full, px-4
        */}
        <div
          className="w-full max-w-[1670px] z-10 flex flex-col items-center text-center relative xl:absolute xl:top-[74px] xl:left-1/2 xl:-translate-x-1/2 transition-transform duration-200 ease-out"
          style={{
            transform: undefined,
          }}
        >
          {/* Heading 1: Enterprise Security, / Built for SMBs */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold tracking-tight text-[#1E1E1E] m-0 p-0 leading-[1.1] sm:leading-tight lg:leading-[60px]">
            Enterprise Security,
            <span className="block text-[#EE343F] tracking-tight">
              Built for SMBs
            </span>
          </h1>

          {/* Paragraph (width: 930px, margin-top: 20px) */}
          <p className="w-full max-w-[930px] text-base sm:text-lg text-slate-800 mt-5 mb-0 text-center leading-relaxed sm:leading-7 px-2">
            Agentic AI-powered threat detection, real-time monitoring, and expert incident response - built on open-source, cloud-native infrastructure. Enterprise-grade protection without the enterprise price tag.
          </p>

          {/* CTA Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mt-6 w-full sm:w-auto px-4 sm:px-0">
            {/* Join the Waitlist */}
            <Button
              type="button"
              onClick={() => openContactModal('Join the Waitlist & Get Early Access', 'Growth ($8/mo)')}
              className="w-full sm:w-[257px] h-12 rounded-full font-semibold text-base flex items-center justify-center gap-2 cursor-pointer shadow-[0px_0px_40px_rgba(238,52,63,0.18),0px_0px_80px_rgba(238,52,63,0.06)] transition-all"
            >
              <span>Join the Waitlist</span>
              <ArrowRight style={{ width: '18px', height: '18px' }} strokeWidth={2.2} />
            </Button>

            {/* How It Works */}
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                const target = document.getElementById('platform');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-[259px] h-12 rounded-full font-medium text-base flex items-center justify-center cursor-pointer transition-all"
            >
              How It Works
            </Button>
          </div>
        </div>

        {/* 
          DASHED CONNECTING LINES SVG (Figma Vector 4, 5, 6, 7)
          Shown only on desktop (xl:block) to prevent awkward clipping on mobile
        */}
        {/* 
          DASHED CONNECTING LINES SVG (Figma Vector 4, 5, 6, 7)
          Shown on desktop screens (>=1280px / xl:block)
        */}
        <svg
          className="hidden xl:block absolute left-1/2 -translate-x-1/2 w-[1920px] h-[1063px] pointer-events-none z-30"
          viewBox="0 0 1920 1063"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="arrowhead-blue"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 1 2 L 8 5 L 1 8 Z" fill="#EE343F" />
            </marker>
          </defs>

          {/* Vector 4: AI-Native & Agentic */}
          <path
            d="M 607 570 C 545 565, 481 530, 481 489"
            stroke="#EE343F"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-blue)"
          />

          {/* Vector 5: Cloud-Native */}
          <path
            d="M 607 740 C 570 755, 519 720, 519 675"
            stroke="#EE343F"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-blue)"
          />

          {/* Vector 7: Open Source */}
          <path
            d="M 1313 570 C 1365 565, 1413 530, 1413 498"
            stroke="#EE343F"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-blue)"
          />

          {/* Vector 6: Built for SMBs */}
          <path
            d="M 1313 725 C 1375 735, 1436 675, 1436 625"
            stroke="#EE343F"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
            markerEnd="url(#arrowhead-blue)"
          />
        </svg>

        {/* 
          FLOATING BADGES:
          On Desktop (>=1280px / xl): Absolute floating positions framing the card with dashed connecting lines.
          On Mobile/Tablet (<1280px): Clean 2x2 grid badges positioned naturally above the card.
        */}
        <div className="xl:hidden w-full max-w-[706px] grid grid-cols-2 gap-3 mt-8 z-30">
          <div className="bg-white py-2.5 px-3.5 rounded-xl shadow-md border border-slate-100 flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
            </svg>
            <span className="text-xs font-medium text-slate-800 whitespace-nowrap">AI-Native</span>
          </div>

          <div className="bg-white py-2.5 px-3.5 rounded-xl shadow-md border border-slate-100 flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
            <span className="text-xs font-medium text-slate-800 whitespace-nowrap">Cloud-Native</span>
          </div>

          <div className="bg-white py-2.5 px-3.5 rounded-xl shadow-md border border-slate-100 flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
            <span className="text-xs font-medium text-slate-800 whitespace-nowrap">Open-Source</span>
          </div>

          <div className="bg-white py-2.5 px-3.5 rounded-xl shadow-md border border-slate-100 flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EE343F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <rect x="6" y="2" width="12" height="20" rx="2" />
              <line x1="10" y1="7" x2="14" y2="7" />
              <line x1="10" y1="12" x2="14" y2="12" />
              <line x1="10" y1="17" x2="14" y2="17" />
              <path d="M2 22h20" />
            </svg>
            <span className="text-xs font-medium text-slate-800 whitespace-nowrap">Built for SMBs</span>
          </div>
        </div>

        {/* Desktop Absolute Badges (Figma Frame 3, 4, 6, 5) */}
        {/* Frame 3: AI-Native & Agentic */}
        <div
          className="hidden xl:block absolute z-30"
          style={{
            left: 'calc(50% - 570px)',
            top: '447px',
            width: '183px',
            height: '38px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#FFFFFF',
              padding: '8px 14px',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              whiteSpace: 'nowrap',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EE343F"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
            </svg>
            <span
              style={{
                fontSize: '12px',
                lineHeight: '20px',
                fontWeight: 400,
                color: '#1E293B',
                letterSpacing: '-0.15px',
              }}
            >
              AI-Native &amp; Agentic
            </span>
          </div>
        </div>

        {/* Frame 4: Cloud-Native */}
        <div
          className="hidden xl:block absolute z-30"
          style={{
            left: 'calc(50% - 508px)',
            top: '633px',
            width: '134px',
            height: '38px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#FFFFFF',
              padding: '8px 14px',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              whiteSpace: 'nowrap',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EE343F"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
            <span
              style={{
                fontSize: '12px',
                lineHeight: '20px',
                fontWeight: 400,
                color: '#1E293B',
                letterSpacing: '-0.15px',
              }}
            >
              Cloud-Native
            </span>
          </div>
        </div>

        {/* Frame 6: Open Source */}
        <div
          className="hidden xl:block absolute z-30"
          style={{
            left: 'calc(50% + 385px)',
            top: '456px',
            width: '136px',
            height: '38px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#FFFFFF',
              padding: '8px 14px',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              whiteSpace: 'nowrap',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EE343F"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
            <span
              style={{
                fontSize: '12px',
                lineHeight: '20px',
                fontWeight: 400,
                color: '#1E293B',
                letterSpacing: '-0.15px',
              }}
            >
              Open-Source
            </span>
          </div>
        </div>

        {/* Frame 5: Built for SMBs */}
        <div
          className="hidden xl:block absolute z-30"
          style={{
            left: 'calc(50% + 407px)',
            top: '584px',
            width: '139px',
            height: '37px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#FFFFFF',
              padding: '8px 14px',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              whiteSpace: 'nowrap',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EE343F"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <rect x="6" y="2" width="12" height="20" rx="2" />
              <line x1="10" y1="7" x2="14" y2="7" />
              <line x1="10" y1="12" x2="14" y2="12" />
              <line x1="10" y1="17" x2="14" y2="17" />
              <path d="M2 22h20" />
            </svg>
            <span
              style={{
                fontSize: '12px',
                lineHeight: '20px',
                fontWeight: 400,
                color: '#1E293B',
                letterSpacing: '-0.15px',
              }}
            >
              Built for SMBs
            </span>
          </div>
        </div>

        {/* 
          VECTOR 3: SOC Dashboard Card
          Desktop (xl:): Centered with left-1/2 -translate-x-1/2, top: 445px, width: 706px, height: 429px.
          Mobile / Tablet: Fluid max-w-[706px] w-full mt-6 aspect-[706/429] relative z-20.
        */}
        <div
          className="relative xl:absolute z-20 w-full max-w-[706px] mt-6 xl:mt-0 xl:left-1/2 xl:-translate-x-1/2 xl:top-[445px] xl:w-[706px] xl:h-[429px] rounded-2xl sm:rounded-[20px] shadow-[0px_12px_32px_rgba(30,90,235,0.22)] overflow-hidden bg-white"
          style={{
            aspectRatio: '706/429',
          }}
        >
          <img
            src="/detections-card-clean.png"
            alt="SkieSecure Detections Dashboard"
            className="w-full h-full object-cover object-top pointer-events-none select-none block"
          />
          {/* Interactive Specular Lighting Sheen */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${50 + smoothPos.x * 35}% ${50 + smoothPos.y * 35}%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 65%)`,
            }}
          />
        </div>

        {/* 
          VECTOR 2: Curved Horizon Band (Z-INDEX 25: IN FRONT OF CARD)
          Single continuous, unbroken curve line on desktop
        */}
        <div
          className="hidden xl:block absolute left-0 w-full pointer-events-none z-25 overflow-hidden"
          style={{
            top: '726px',
            height: '377px',
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1920 377"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* White bottom fill below the curve */}
            <path
              d="M 0 0 C 580 162, 1340 162, 1920 0 L 1920 377 L 0 377 Z"
              fill="#FFFFFF"
            />
            {/* Vector 2: 10px solid #C6D1FF with drop shadow */}
            <path
              d="M 0 0 C 580 162, 1340 162, 1920 0"
              stroke="#C6D1FF"
              strokeWidth="10"
              strokeLinecap="round"
              style={{
                filter: 'drop-shadow(0px 18px 28px rgba(26, 68, 245, 0.15))',
              }}
            />
          </svg>
        </div>

        {/* 
          HERO-FOOTER: 3 Stat Columns
          Desktop: absolute left-1/2, top: 916px, width: 868px, 3 cols
          Mobile: relative mt-10 w-full max-w-[868px] grid grid-cols-1 sm:grid-cols-3 gap-6
        */}
        <div className="relative xl:absolute z-30 w-full max-w-[868px] mt-10 xl:mt-0 xl:left-1/2 xl:-translate-x-1/2 xl:top-[916px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-center text-center">
            {/* Stat 1: < 10 days */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-0">
              <h3 className="text-2xl sm:text-[30px] font-bold text-[#EE343F] tracking-wide mb-1 leading-tight">
                &lt; 10 days
              </h3>
              <p className="text-sm sm:text-base lg:text-[18px] text-slate-800 m-0 leading-snug">
                Average time<br className="hidden sm:inline" /> to full deployment
              </p>
            </div>

            {/* Stat 2: 93% */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-0">
              <h3 className="text-2xl sm:text-[30px] font-bold text-[#EE343F] tracking-wide mb-1 leading-tight">
                93%
              </h3>
              <p className="text-sm sm:text-base lg:text-[18px] text-slate-800 m-0 leading-snug">
                Alert noise reduction<br className="hidden sm:inline" /> with AI triage
              </p>
            </div>

            {/* Stat 3: $0 */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-0">
              <h3 className="text-2xl sm:text-[30px] font-bold text-[#EE343F] tracking-wide mb-1 leading-tight">
                $0
              </h3>
              <p className="text-sm sm:text-base lg:text-[18px] text-slate-800 m-0 leading-snug">
                Hidden fees -<br className="hidden sm:inline" /> pricing is pricing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Security Section: Problem vs Solution Carousel */}
      <SecuritySection id="security" />

      {/* 3. The Platform: 4 Pillars Row (AI-Native, Cloud-Native, Open-Source, SMBs) */}
      <PlatformSection id="platform" />

      {/* 4. Architecture & Deployment: Diagram + 3 Deployment Cards */}
      <ArchitectureSection id="architecture" />

      {/* 5. Capabilities: 2x4 Feature Grid */}
      <CapabilitiesSection id="features" />

      {/* 6. Your Security Team: 3 Service Models + Mockup */}
      <TeamSection id="team" />

      {/* 7. Why SkieSecure: Security Operations Without the Overhead + Stats Grid */}
      <WhySkieSecureSection id="why-skisecure" />

      {/* 8. Pricing: One Plan. Everything Included. Starting at $10/endpoint. */}
      <PricingSection id="pricing" onOpenModal={openContactModal} />

      {/* 9. Common Questions: FAQ Accordion */}
      <FAQSection id="faq" />

      {/* 10. CTA & Footer: Be First in Line + Footer Bar */}
      <FooterSection id="contact" onOpenModal={openContactModal} />

      {/* Interactive Contact / Early Access Modal Popup */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        initialInterest={modalInterest}
      />
    </main>
  );
}
