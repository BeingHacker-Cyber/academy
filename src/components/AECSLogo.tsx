"use client";
import React from 'react';

interface AECSLogoProps {
  className?: string;
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function AECSLogo({ className = '', inverted = false, size = 'md' }: AECSLogoProps) {
  const heights = { sm: 32, md: 42, lg: 56 };
  const h = heights[size];

  const maroon  = inverted ? '#FFFFFF'             : '#7B1C2E';
  const navy    = inverted ? 'rgba(255,255,255,0.7)': '#0F1E38';
  const gold    = '#C8960C';

  return (
    <div
      className={`inline-flex items-center gap-3 select-none cursor-default ${className}`}
      style={{ height: h }}
      aria-label="AECS Academy"
    >
      {/* ── SVG MARK ── */}
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: h, width: h }}
        aria-hidden="true"
      >
        {/* Open Book — bottom layer */}
        <g className="logo-book">
          {/* Left page */}
          <path
            d="M8 58 C8 58 10 70 40 70 L40 48 C18 48 8 58 8 58Z"
            fill={maroon} opacity="0.9"
          />
          {/* Right page */}
          <path
            d="M72 58 C72 58 70 70 40 70 L40 48 C62 48 72 58 72 58Z"
            fill={maroon} opacity="0.55"
          />
          {/* Spine */}
          <line x1="40" y1="48" x2="40" y2="70" stroke={gold} strokeWidth="1.5" />
          {/* Page lines left */}
          <line x1="16" y1="58" x2="34" y2="56" stroke="rgba(255,255,255,0.35)" strokeWidth="1.1" strokeLinecap="round"/>
          <line x1="15" y1="62" x2="33" y2="60" stroke="rgba(255,255,255,0.25)" strokeWidth="1"   strokeLinecap="round"/>
          {/* Page lines right */}
          <line x1="46" y1="56" x2="64" y2="58" stroke="rgba(255,255,255,0.2)" strokeWidth="1"   strokeLinecap="round"/>
          <line x1="47" y1="60" x2="65" y2="62" stroke="rgba(255,255,255,0.15)" strokeWidth="1"  strokeLinecap="round"/>
        </g>

        {/* Graduation Cap — top layer */}
        <g className="logo-cap">
          {/* Board */}
          <polygon points="40,10 72,26 40,42 8,26" fill={maroon} />
          {/* Highlight sheen */}
          <polygon points="40,10 72,26 60,30 40,16" fill="rgba(255,255,255,0.12)" />
          {/* Left wing hanging */}
          <path d="M20,32 L20,48 C20,56 40,58 40,58 L40,44" fill={maroon} opacity="0.75" />
          {/* Right wing */}
          <path d="M60,32 L60,48 C60,56 40,58 40,58 L40,44" fill={maroon} opacity="0.45" />
          {/* Tassel cord */}
          <line x1="72" y1="26" x2="72" y2="44" stroke={gold} strokeWidth="2.2" strokeLinecap="round"/>
          {/* Tassel knob */}
          <circle cx="72" cy="47" r="3.5" fill={gold} />
          {/* Tassel fringe */}
          <line x1="70" y1="47" x2="68" y2="54" stroke={gold} strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
          <line x1="72" y1="47" x2="72" y2="55" stroke={gold} strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
          <line x1="74" y1="47" x2="76" y2="54" stroke={gold} strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
        </g>
      </svg>

      {/* ── TEXT BLOCK ── */}
      <div className="flex flex-col leading-none" style={{ gap: 3 }}>
        <span
          className="logo-name font-display font-bold"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: h * 0.52,
            color: maroon,
            lineHeight: 1,
            letterSpacing: '-0.01em',
          }}
        >
          AECS
        </span>
        <span
          className="logo-sub font-label font-semibold uppercase"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: h * 0.175,
            letterSpacing: '0.22em',
            color: navy,
            lineHeight: 1,
          }}
        >
          Academy
        </span>
      </div>
    </div>
  );
}