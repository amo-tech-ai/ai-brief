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

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7M3 12h18" />
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

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </SVGIcon>
);

export const PencilIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" />
  </SVGIcon>
);

export const CodeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </SVGIcon>
);

export const DevicePhoneMobileIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </SVGIcon>
);

export const MegaphoneIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </SVGIcon>
);

export const ChatBubbleLeftRightIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.537a5.56 5.56 0 01-1.622-1.072L3 11.168v-4.286c0-1.136.847-2.1 1.98-2.193l3.722-.537a5.56 5.56 0 011.622 1.072l3.722 3.722c.884.284 1.5 1.128 1.5 2.097z" />
    </SVGIcon>
);

export const MagnifyingGlassIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </SVGIcon>
);

export const PencilSquareIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </SVGIcon>
);

export const RocketLaunchIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 01-2.56 5.84m-2.56-5.84a6 6 0 017.38-5.84m-7.38 5.84v4.82m-2.56-5.84a6 6 0 015.84-2.56m-5.84 2.56L4.63 4.63m1.41-1.41L14.37 15.6m-2.56-5.84L4.63 4.63m9.74 1.41L15.6 14.37M4.63 4.63L3.22 3.22m1.41 1.41l11.15 11.15" />
  </SVGIcon>
);

export const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </SVGIcon>
);

export const ChartBarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </SVGIcon>
);

export const UsersIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </SVGIcon>
);

export const GlobeAltIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
    </SVGIcon>
);

export const CogIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m-3.75 0a11.25 11.25 0 1122.5 0 11.25 11.25 0 01-22.5 0z" />
    </SVGIcon>
);

export const LightBulbIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375a6.375 6.375 0 006.375-6.375V9.375c0-3.44-2.5-6.375-6-6.375S6 5.935 6 9.375v2.625A6.375 6.375 0 0012 18.375zM12 18.375V21m-3.75-6.375h7.5" />
  </SVGIcon>
);

export const ViewColumnsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.5-15h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 013.5 4.5z" />
    </SVGIcon>
);

export const CircleStackIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </SVGIcon>
);

export const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </SVGIcon>
);

export const TrophyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9 9 0 119 0zM16.5 18.75a9 9 0 00-9 0m9 0h.008v.008h-.008v-.008zm-9 0H6.375v.008h.117v-.008zM12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </SVGIcon>
);

export const HeartIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className} >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </SVGIcon>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </SVGIcon>
);

export const ShoppingCartIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.087-.835l1.838-5.513c.245-.737-.253-1.508-.998-1.508H4.884M7.5 14.25L5.106 5.165A2.25 2.25 0 002.865 3H2.25m4.5 12h10.5M14.25 18a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </SVGIcon>
);

export const BuildingOfficeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6M9 15.75h6M5.25 21v-3.375c0-.621.504-1.125 1.125-1.125h11.25c.621 0 1.125.504 1.125 1.125V21" />
    </SVGIcon>
);

export const WrenchScrewdriverIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <SVGIcon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5-7.5-7.5 7.5-7.5zM11.25 12l-7.5-7.5m15 15l-7.5-7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-10.5a2.25 2.25 0 01-2.25-2.25V6.75a2.25 2.25 0 012.25-2.25h10.5a2.25 2.25 0 012.25 2.25z" />
    </SVGIcon>
);

export const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </SVGIcon>
);

export const CpuChipIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <SVGIcon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75H19.5M8.25 3.75h.008v.008H8.25V3.75zm0 3H12m0 0h8.25m-8.25 0V15m0-3.75L6.75 6v1.5m.75 3.75-1.5-1.5m3-3.75-1.5 1.5m0 0 .008.008H12m0 0v.008h.008V12m0 0h-3.375m0 0h3.375m0 0V9.375m0 0h3.375M12 15v2.25m0 0h-1.5m1.5 0h1.5m-1.5 0V15m0 0h-3.375m0 0h3.375m0 0V12m0 0h3.375m0 0h-3.375m3.375 0V9.375m0 0h-3.375M15 3.75h.008v.008H15V3.75zm-3.75 0h.008v.008H11.25V3.75zm-3.75 0h.008v.008H7.5V3.75zm-3.75 0h.008v.008H3.75V3.75zM19.5 3.75h.008v.008H19.5V3.75zm-3.75 0h.008v.008H15.75V3.75zm-3.75 0h.008v.008H12V3.75zm-3.75 0h.008v.008H8.25V3.75zm-3.75 0h.008v.008H4.5V3.75zM19.5 15h.008v.008H19.5V15zm-3.75 0h.008v.008H15.75V15zm-3.75 0h.008v.008H12V15zm-3.75 0h.008v.008H8.25V15zm-3.75 0h.008v.008H4.5V15zM19.5 12h.008v.008H19.5V12zm-3.75 0h.008v.008H15.75V12zm-3.75 0h.008v.008H12V12zm-3.75 0h.008v.008H8.25V12zm-3.75 0h.008v.008H4.5V12zM19.5 9.375h.008v.008H19.5V9.375zm-3.75 0h.008v.008H15.75V9.375zm-3.75 0h.008v.008H12V9.375zm-3.75 0h.008v.008H8.25V9.375zm-3.75 0h.008v.008H4.5V9.375zM19.5 6h.008v.008H19.5V6zm-3.75 0h.008v.008H15.75V6zm-3.75 0h.008v.008H12V6zm-3.75 0h.008v.008H8.25V6zm-3.75 0h.008v.008H4.5V6zM3.75 21v-6.75A2.25 2.25 0 0 1 6 12h12a2.25 2.25 0 0 1 2.25 2.25V21" />
  </SVGIcon>
);