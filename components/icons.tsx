import React from 'react';

export const DotsIcon: React.FC = () => (
    <div className="flex space-x-1.5 p-1">
      <div className="w-3 h-3 rounded-full bg-red-400"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
);

export const HamburgerMenuIcon: React.FC = () => (
    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
);

export const ArrowRightIcon: React.FC = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CheckCircleIcon: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12C21.99 14.12 21.3 16.16 20.05 17.85C18.8 19.54 17.03 20.78 15.01 21.39C12.99 22.01 10.85 21.95 8.87 21.23C6.89 20.51 5.19 19.16 4.04 17.4C2.89 15.63 2.38 13.56 2.59 11.5C2.8 9.44 3.73 7.54 5.22 6.08C6.71 4.62 8.68 3.67 10.8 3.39C12.92 3.1 15.08 3.5 16.95 4.5L18.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const FileIcon: React.FC<{ type: string }> = ({ type }) => {
    const color = type === 'PDF' ? 'text-red-500' : 'text-gray-500';
    return (
        <div className="flex flex-col items-center space-y-2 text-center">
            <div className={`w-16 h-20 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200 ${color}`}>
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8.414a1 1 0 00-.293-.707l-4.414-4.414A1 1 0 0011.586 2H4zm6 2v4a1 1 0 001 1h4L10 4z"/></svg>
            </div>
            <span className="text-xs font-medium text-gray-600">{type}</span>
        </div>
    );
};

export const FolderIcon: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex flex-col items-center space-y-2 text-center">
        <div className="w-16 h-20 flex items-center justify-center">
            <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
        </div>
        <span className="text-xs font-medium text-gray-600">{name}</span>
    </div>
);

export const PresentationIcon: React.FC<{ name: string }> = ({ name }) => (
     <div className="flex flex-col items-center space-y-2 text-center">
        <div className="w-16 h-20 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200 text-orange-500">
             <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 0H4v2h12V5zm0 4H4v6h12V9z"/><path d="M6 11h8v2H6v-2z"/></svg>
        </div>
        <span className="text-xs font-medium text-gray-600">{name}</span>
    </div>
);