"use client";

import React from 'react';

export default function AECSLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 animate-logo-reveal ${className}`}>
      <div className="relative">
        <svg 
          viewBox="0 0 100 100" 
          className="h-10 w-10 text-primary" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="4"
        >
          {/* Graduation Cap */}
          <path 
            d="M10 40 L50 20 L90 40 L50 60 Z" 
            fill="currentColor" 
            className="animate-[bounce_2s_infinite]"
          />
          <path d="M30 50 V70 C30 80 70 80 70 70 V50" strokeLinecap="round" />
          <path d="M90 40 V60" strokeLinecap="round" strokeWidth="2" />
          
          {/* Book Icon Base */}
          <path 
            d="M30 85 H70 A5 5 0 0 0 75 80 V45 A5 5 0 0 0 70 40 H30 A5 5 0 0 0 25 45 V80 A5 5 0 0 0 30 85 Z" 
            fill="white" 
            stroke="currentColor" 
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-headline font-bold text-primary tracking-tight">AECS</span>
        <span className="text-[10px] font-accent uppercase tracking-widest text-secondary font-semibold">Academy</span>
      </div>
    </div>
  );
}
