import React from 'react';

interface CardProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, header, footer }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full transform transition-all duration-500 hover:shadow-2xl">
      <div className="px-6 py-3 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center min-h-[60px]">
        {header}
      </div>
      <div className="p-8">
        {children}
      </div>
      {footer && (
        <div className="px-8 pb-8 flex items-center">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;