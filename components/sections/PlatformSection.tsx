'use client';

import React from 'react';
import Image from 'next/image';

interface PlatformCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const PLATFORM_CARDS: PlatformCardProps[] = [
  {
    imageSrc: '/images/platform/ai-native.png',
    imageAlt: 'AI-Native & Agentic Security Operations Dashboard',
    title: 'AI-Native & Agentic',
    description:
      'ML models and autonomous AI agents handle detection, triage, enrichment, and response orchestration — escalating to humans only when judgment is needed.',
  },
  {
    imageSrc: '/images/platform/cloud-native.png',
    imageAlt: 'Cloud-Native Containerized Infrastructure and Datacenters',
    title: 'Cloud-Native',
    description:
      'Elastic, containerized infrastructure scales with your needs. No hardware, no capacity planning. Deployed across availability zones for maximum resilience.',
  },
  {
    imageSrc: '/images/platform/open-source.png',
    imageAlt: 'Open-Source Modular Core Technologies in 3D Glass Cube',
    title: 'Open-Source',
    description:
      'Built on proven open-source technologies — no vendor lock-in, no opaque black boxes. Transparent, auditable, and evolving with the community.',
  },
  {
    imageSrc: '/images/platform/built-for-smbs.png',
    imageAlt: 'Modern Workspace Built for SMBs Security Monitoring',
    title: 'Built for SMBs',
    description:
      'Purpose-built for 50–2,000 endpoint environments. No bloated enterprise tooling — lean, fast, and priced for businesses that need protection without the overhead.',
  },
];

export default function PlatformSection({ id }: { id?: string }) {
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
      <div
        className="w-full max-w-[1920px] min-h-auto xl:min-h-[914px] py-14 sm:py-20 px-4 sm:px-8 xl:px-10 box-border relative flex flex-col items-center justify-center bg-white bg-[radial-gradient(rgba(30,41,59,0.12)_1.2px,transparent_1.2px)] [background-size:24px_24px]"
      >
        {/* Header Content Block (~1104px max-width, centered) */}
        <div
          className="w-full max-w-[1104px] flex flex-col items-center text-center mb-10 sm:mb-16"
        >
          {/* Badge / Pill: "The Platform" */}
          <div
            className="inline-flex items-center justify-center bg-[#FEE6E8] border border-[#EE343F]/20 rounded-[10px] px-4 py-1.5 mb-5 sm:mb-6"
          >
            <span className="text-[#EE343F] text-base sm:text-lg font-medium leading-6 tracking-tight">
              The Platform
            </span>
          </div>

          {/* Headline: AI-Native & Agentic · Cloud-Native · Open-Source */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#1E293B] tracking-tight m-0">
            <span>AI-Native &amp; Agentic · Cloud-Native · </span>
            <span className="text-[#EE343F]">Open-Source</span>
          </h1>

          {/* Subheading Paragraph */}
          <p className="text-base sm:text-lg font-normal leading-relaxed sm:leading-7 text-slate-800 tracking-tight max-w-[920px] mt-4 mb-0 px-2">
            We combined AI-driven detection with a fully cloud-native, open-source foundation — giving you the power of
            a Fortune 500 SOC at a fraction of the cost and complexity.
          </p>
        </div>

        {/* Cards Row (4 cards, responsive grid: 1 col on mobile, 2 col on tablet, 4 on xl) */}
        <div className="w-full max-w-[1760px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch justify-center">
          {PLATFORM_CARDS.map((card, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-2xl p-4 sm:p-5 box-border flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] border border-slate-200/80 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,68,245,0.08),0_2px_6px_rgba(0,0,0,0.04)]"
            >
              {/* Card Image (389x194px, 4px border-radius) */}
              <div className="w-full h-44 sm:h-48 rounded overflow-hidden relative mb-5 bg-slate-50 shrink-0">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Title (Inter Semi Bold 24px, #181818) */}
              <h3 className="text-xl sm:text-2xl font-semibold leading-snug text-[#181818] tracking-tight mb-3 text-left">
                {card.title}
              </h3>

              {/* Description (Inter Regular 18px, #1E293B) */}
              <p className="text-sm sm:text-base xl:text-[18px] font-normal leading-relaxed sm:leading-[26px] text-slate-800 tracking-tight m-0 text-left flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
