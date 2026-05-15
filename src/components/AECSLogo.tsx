"use client";
import React from 'react';

interface AECSLogoProps {
  className?: string;
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function AECSLogo({
  className = '',
  inverted = false,
  size = 'md',
}: AECSLogoProps) {
  const heights = { sm: 36, md: 48, lg: 64 };
  const h = heights[size];

  const iconColor = inverted ? '#FFFFFF' : '#111111';
  const textColor = inverted ? '#FFFFFF' : '#7B1C2E';

  return (
    <div
      className={`inline-flex items-center select-none cursor-default ${className}`}
      style={{ height: h, gap: h * 0.16 }}
      aria-label="AECS Academy"
    >
      {/*
        Exact replica of uploaded logo:
        - Solid black graduation mortarboard (flat diamond cap + dome)
        - Open book below (two page-arc shapes + spine line)
        - Tassel from right tip of cap board
        - "AECS" text in maroon bold serif to the right
      */}
      <svg
        viewBox="0 0 60 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: h, width: h * (60 / 56) }}
        aria-hidden="true"
      >
        {/* OPEN BOOK — bottom of icon */}
        <path d="M30 38 Q16 33 3 35 L3 44 Q16 42 30 46 Z" fill={iconColor} />
        <path d="M30 38 Q44 33 57 35 L57 44 Q44 42 30 46 Z" fill={iconColor} />
        <path d="M3 44 Q16 46 30 50 Q44 46 57 44 L57 46 Q44 49 30 53 Q16 49 3 46 Z" fill={iconColor} />
        <line x1="30" y1="37" x2="30" y2="52" stroke={inverted ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.35)'} strokeWidth="1.5" />

        {/* GRADUATION CAP — mortarboard flat top */}
        <polygon points="30,3 57,15 30,27 3,15" fill={iconColor} />
        {/* Cap dome/hood */}
        <path d="M16,17 L16,30 Q16,37 30,37 Q44,37 44,30 L44,17" fill={iconColor} />
        {/* Subtle top-face sheen */}
        <polygon points="30,3 57,15 47,19 30,8" fill={inverted ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.07)'} />

        {/* TASSEL */}
        <line x1="57" y1="15" x2="57" y2="27" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="57" cy="29.5" r="3" fill={iconColor} />
        <line x1="54.5" y1="29.5" x2="52" y2="37" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="57" y1="29.5" x2="57" y2="38" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="59.5" y1="29.5" x2="61" y2="37" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* AECS text — bold maroon serif, matching logo typography */}
      <span
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: h * 0.6,
          color: textColor,
          lineHeight: 1,
          fontWeight: 700,
          letterSpacing: '0.02em',
        }}
      >
        AECS
      </span>
    </div>
  );
}