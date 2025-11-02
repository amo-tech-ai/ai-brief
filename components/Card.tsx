
import React from 'react';
import { DotsIcon } from './icons';

interface CardProps {
  children: React.ReactNode;
  title: string;
  headerContent?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, title, headerContent }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full transform transition-all duration-500 hover:shadow-2xl">
      <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <DotsIcon />
            {headerContent}
        </div>
        <p className="text-gray-400 font-medium text-sm tracking-wider">{title}</p>
      </div>
      <div className="p-8">
        {children}
      </div>
    </div>
  );
};

export default Card;
