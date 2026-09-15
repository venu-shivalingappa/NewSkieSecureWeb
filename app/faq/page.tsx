'use client';

import React from 'react';
import FAQSection from '@/components/sections/FAQSection';

export default function FAQPage() {
  return (
    <main style={{ minHeight: '100vh', width: '100%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <FAQSection />
    </main>
  );
}
