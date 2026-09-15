'use client';

import React from 'react';
import PricingSection from '@/components/sections/PricingSection';

export default function PricingPage() {
  return (
    <main style={{ minHeight: '100vh', width: '100%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <PricingSection />
    </main>
  );
}
