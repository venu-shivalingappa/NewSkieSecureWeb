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

export default function PlatformPage() {
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
      {/* 1920x914 Platform Section Frame */}
      <section
        style={{
          width: '100%',
          maxWidth: '1920px',
          minHeight: '914px',
          padding: '80px 40px',
          boxSizing: 'border-box',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          backgroundImage: 'radial-gradient(rgba(30, 41, 59, 0.12) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      >
        {/* Header Content Block (~1104px max-width, centered) */}
        <div
          style={{
            width: '100%',
            maxWidth: '1104px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '72px',
          }}
        >
          {/* Badge / Pill: "The Platform" */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E5EEFF',
              border: '1px solid rgba(51, 102, 255, 0.2)',
              borderRadius: '10px',
              padding: '6px 16px',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                color: '#1A44F5',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '24px',
                letterSpacing: '-0.2px',
              }}
            >
              The Platform
            </span>
          </div>

          {/* Headline: AI-Native & Agentic · Cloud-Native · Open-Source */}
          <h1
            style={{
              fontSize: 'clamp(28px, 2.5vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#1E293B',
              letterSpacing: '-0.5px',
              margin: 0,
            }}
          >
            <span>AI-Native &amp; Agentic · Cloud-Native · </span>
            <span style={{ color: '#1A44F5' }}>Open-Source</span>
          </h1>

          {/* Subheading Paragraph */}
          <p
            style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '28px',
              color: '#1E293B',
              letterSpacing: '-0.2px',
              maxWidth: '920px',
              marginTop: '16px',
              marginBottom: 0,
            }}
          >
            We combined AI-driven detection with a fully cloud-native, open-source foundation — giving you the power of
            a Fortune 500 SOC at a fraction of the cost and complexity.
          </p>
        </div>

        {/* Cards Row (4 cards, 24px gap, ~1760px wide container) */}
        <div
          style={{
            width: '100%',
            maxWidth: '1760px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {PLATFORM_CARDS.map((card, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 380px',
                maxWidth: '421px',
                minHeight: '444px',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '16px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(26, 68, 245, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)';
              }}
            >
              {/* Card Image (389x194px, 4px border-radius) */}
              <div
                style={{
                  width: '100%',
                  height: '194px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '20px',
                  backgroundColor: '#F8FAFC',
                }}
              >
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Title (Inter Semi Bold 24px, #181818) */}
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  color: '#181818',
                  letterSpacing: '-0.3px',
                  margin: '0 0 12px 0',
                  textAlign: 'left',
                }}
              >
                {card.title}
              </h3>

              {/* Description (Inter Regular 18px, #1E293B) */}
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '26px',
                  color: '#1E293B',
                  letterSpacing: '-0.2px',
                  margin: 0,
                  textAlign: 'left',
                  flex: 1,
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
