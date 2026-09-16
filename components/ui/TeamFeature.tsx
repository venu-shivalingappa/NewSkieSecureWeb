import * as React from 'react';

export interface TeamFeatureProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: React.ReactNode;
  showDivider?: boolean;
}

export default function TeamFeature({
  iconSrc,
  iconAlt,
  title,
  description,
  showDivider = false,
}: TeamFeatureProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <img
          src={iconSrc}
          alt={iconAlt}
          style={{ width: '46px', height: '46px', objectFit: 'contain', flexShrink: 0 }}
        />
        <div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: '0 0 8px 0',
              lineHeight: 1.25,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: '#FFFFFF',
              lineHeight: 1.55,
              margin: 0,
              opacity: 0.95,
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {showDivider && (
        <div
          style={{
            height: '2px',
            width: '100%',
            background:
              'linear-gradient(90deg, rgba(26, 68, 245, 0) 0%, #EE343F 50%, rgba(26, 68, 245, 0) 100%)',
            margin: '36px 0',
          }}
        />
      )}
    </div>
  );
}
