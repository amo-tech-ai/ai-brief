import React from 'react';

const SVGIcon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {children}
  </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <SVGIcon className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </SVGIcon>
);

export const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </SVGIcon>
);

export const CopyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </SVGIcon>
);

export const RestartIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0120 12M20 20l-1.5-1.5A9 9 0 004 12" />
  </SVGIcon>
);

export const LoadingSpinner: React.FC<{ className?: string }> = ({ className = "h-5 w-5 text-white" }) => (
    <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);