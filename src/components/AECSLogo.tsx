"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AECSLogoProps {
  className?: string;
  /** If true, renders a light/inverted version for dark backgrounds */
  inverted?: boolean;
  /** Disable animations (for reduced motion preferences) */
  static?: boolean;
}

export default function AECSLogo({ 
  className = '', 
  inverted = false,
  static: isStatic = false 
}: AECSLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  
  // Colors with enhanced contrast
  const textColor = inverted ? '#FFFFFF' : '#7B1C2E';
  const subColor = inverted ? 'rgba(255,255,255,0.8)' : '#1A2B4A';
  const capColor = inverted ? '#FFFFFF' : '#7B1C2E';
  const bookColor = inverted ? 'rgba(255,255,255,0.95)' : '#1A2B4A';
  const accentColor = '#C8960C';
  const highlightColor = inverted ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.2)';
  
  // Initial animation on mount
  useEffect(() => {
    if (isStatic) return;
    
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1400);
    
    return () => clearTimeout(timer);
  }, [isStatic]);
  
  // Detect reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setHasAnimated(true); // Skip animations
    }
  }, []);

  return (
    <div
      ref={logoRef}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none transition-transform duration-300 ${
        !isStatic && 'animate-logo-reveal'
      } ${className}`}
      aria-label="AECS Academy"
      onMouseEnter={() => !isStatic && setIsHovered(true)}
      onMouseLeave={() => !isStatic && setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      {/* ═══ SVG ICON ═══ */}
      <svg
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-11 w-11 flex-shrink-0"
        aria-hidden="true"
        style={{
          filter: isHovered 
            ? 'drop-shadow(0 4px 12px rgba(200, 150, 12, 0.3))' 
            : 'drop-shadow(0 2px 6px rgba(123, 28, 46, 0.15))',
          transition: 'filter 0.3s ease',
        }}
      >
        {/* Background glow on hover */}
        {isHovered && !isStatic && (
          <circle
            cx="36"
            cy="36"
            r="32"
            fill="url(#logoGlowGradient)"
            opacity="0.15"
            style={{
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
        )}
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="logoGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={capColor} stopOpacity="0.4" />
          </linearGradient>
          
          <linearGradient id="capGradient" x1="36" y1="8" x2="36" y2="36">
            <stop offset="0%" stopColor={capColor} />
            <stop offset="100%" stopColor={capColor} stopOpacity="0.85" />
          </linearGradient>
          
          <linearGradient id="bookGradient" x1="36" y1="46" x2="36" y2="64">
            <stop offset="0%" stopColor={bookColor} stopOpacity="0.95" />
            <stop offset="100%" stopColor={bookColor} stopOpacity="0.75" />
          </linearGradient>
        </defs>
        
        {/* ── GRADUATION CAP (drops in) ── */}
        <g 
          className={!isStatic && !hasAnimated ? 'logo-cap' : ''}
          style={{
            transformOrigin: '36px 22px',
            transform: isHovered ? 'rotate(5deg)' : 'rotate(0deg)',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Cap board (mortarboard top) */}
          <polygon
            points="36,8 68,22 36,36 4,22"
            fill="url(#capGradient)"
          />
          
          {/* Shine highlight */}
          <polygon
            points="36,8 68,22 58,26 36,14"
            fill={highlightColor}
          />
          
          {/* 3D depth lines */}
          <line 
            x1="36" y1="8" x2="36" y2="36" 
            stroke={capColor} 
            strokeWidth="0.5" 
            opacity="0.3"
          />
          <line 
            x1="4" y1="22" x2="36" y2="36" 
            stroke={capColor} 
            strokeWidth="0.5" 
            opacity="0.2"
          />
          
          {/* Tassel string with swing animation */}
          <line
            x1="68"
            y1="22"
            x2="68"
            y2="38"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              transformOrigin: '68px 22px',
              transform: isHovered 
                ? 'rotate(8deg)' 
                : 'rotate(0deg)',
              transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          />
          
          {/* Tassel ball with glow */}
          <circle 
            cx="68" 
            cy="40" 
            r="3.5" 
            fill={accentColor}
            style={{
              filter: isHovered 
                ? `drop-shadow(0 0 6px ${accentColor})` 
                : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
          
          {/* Cap sides hanging down */}
          <path
            d="M22 29 L22 44 C22 52 50 52 50 44 L50 29"
            fill={capColor}
            opacity="0.75"
          />
          
          {/* Inner shadow detail */}
          <path
            d="M24 31 L24 43 C24 49 48 49 48 43 L48 31"
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="0.5"
          />
        </g>
        
        {/* ── OPEN BOOK (opens outward) ── */}
        <g 
          className={!isStatic && !hasAnimated ? 'logo-book' : ''}
          style={{
            transformOrigin: '36px 55px',
          }}
        >
          {/* Left page */}
          <path
            d="M8 54 C8 54 8 64 36 64 L36 46 C14 46 8 54 8 54 Z"
            fill="url(#bookGradient)"
            style={{
              transformOrigin: '36px 55px',
              transform: isHovered ? 'rotateY(-8deg)' : 'rotateY(0deg)',
              transition: 'transform 0.5s ease',
            }}
          />
          
          {/* Right page */}
          <path
            d="M64 54 C64 54 64 64 36 64 L36 46 C58 46 64 54 64 54 Z"
            fill={bookColor}
            opacity="0.7"
            style={{
              transformOrigin: '36px 55px',
              transform: isHovered ? 'rotateY(8deg)' : 'rotateY(0deg)',
              transition: 'transform 0.5s ease',
            }}
          />
          
          {/* Spine with gradient */}
          <line
            x1="36"
            y1="46"
            x2="36"
            y2="64"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Text lines on left page */}
          <g opacity="0.5">
            <line 
              x1="16" y1="53" x2="30" y2="51" 
              stroke={inverted ? 'rgba(255,255,255,0.6)' : 'rgba(123,28,46,0.4)'} 
              strokeWidth="1.2" 
              strokeLinecap="round" 
            />
            <line 
              x1="15" y1="56" x2="29" y2="54" 
              stroke={inverted ? 'rgba(255,255,255,0.5)' : 'rgba(123,28,46,0.35)'} 
              strokeWidth="1.2" 
              strokeLinecap="round" 
            />
            <line 
              x1="16" y1="59" x2="28" y2="57" 
              stroke={inverted ? 'rgba(255,255,255,0.4)' : 'rgba(123,28,46,0.3)'} 
              strokeWidth="1" 
              strokeLinecap="round" 
            />
          </g>
          
          {/* Text lines on right page */}
          <g opacity="0.4">
            <line 
              x1="42" y1="51" x2="56" y2="53" 
              stroke={inverted ? 'rgba(255,255,255,0.5)' : 'rgba(26,43,74,0.35)'} 
              strokeWidth="1.2" 
              strokeLinecap="round" 
            />
            <line 
              x1="43" y1="54" x2="57" y2="56" 
              stroke={inverted ? 'rgba(255,255,255,0.4)' : 'rgba(26,43,74,0.3)'} 
              strokeWidth="1.2" 
              strokeLinecap="round" 
            />
            <line 
              x1="44" y1="57" x2="56" y2="59" 
              stroke={inverted ? 'rgba(255,255,255,0.35)' : 'rgba(26,43,74,0.25)'} 
              strokeWidth="1" 
              strokeLinecap="round" 
            />
          </g>
          
          {/* Page corner fold detail */}
          <path
            d="M60 46 L60 50 L56 50 Z"
            fill="rgba(0,0,0,0.05)"
          />
        </g>
        
        {/* Sparkle effects on hover */}
        {isHovered && !isStatic && (
          <>
            <circle 
              cx="12" 
              cy="16" 
              r="1.5" 
              fill={accentColor}
              opacity="0.8"
              style={{
                animation: 'sparkle 1.5s ease-in-out infinite',
              }}
            />
            <circle 
              cx="60" 
              cy="12" 
              r="1.5" 
              fill={accentColor}
              opacity="0.6"
              style={{
                animation: 'sparkle 1.8s ease-in-out infinite 0.3s',
              }}
            />
          </>
        )}
      </svg>
      
      {/* ═══ TEXT BLOCK ═══ */}
      <div className="flex flex-col leading-none gap-0.5">
        {/* Main text */}
        <span
          className={`font-headline font-bold tracking-tight ${
            !isStatic && !hasAnimated ? 'logo-text' : ''
          }`}
          style={{
            fontSize: '1.5rem',
            lineHeight: 1,
            color: textColor,
            textShadow: isHovered 
              ? `0 0 12px ${accentColor}40` 
              : 'none',
            transition: 'text-shadow 0.3s ease',
            letterSpacing: '0.02em',
          }}
        >
          AECS
        </span>
        
        {/* Subtitle */}
        <span
          className={`font-accent font-semibold uppercase ${
            !isStatic && !hasAnimated ? 'logo-sub' : ''
          }`}
          style={{
            fontSize: '0.54rem',
            letterSpacing: '0.24em',
            color: subColor,
            lineHeight: 1,
            opacity: isHovered ? 1 : 0.85,
            transition: 'opacity 0.3s ease',
          }}
        >
          Academy
        </span>
      </div>
      
      {/* Hidden accessibility text */}
      <span className="sr-only">
        AECS Academy - Academy for Excellence in Cambridge Studies
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   INLINE KEYFRAME STYLES (for sparkle animation)
   ═══════════════════════════════════════════════════════════════════════ */
const style = typeof document !== 'undefined' ? document.createElement('style') : null;
if (style && typeof document !== 'undefined') {
  style.textContent = `
    @keyframes sparkle {
      0%, 100% { 
        opacity: 0; 
        transform: scale(0); 
      }
      50% { 
        opacity: 1; 
        transform: scale(1); 
      }
    }
  `;
  if (typeof document !== 'undefined' && !document.getElementById('logo-sparkle-styles')) {
    style.id = 'logo-sparkle-styles';
    document.head.appendChild(style);
  }
}