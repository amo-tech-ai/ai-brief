import React from 'react';
import { Brief } from '../types';
import { ClockIcon } from './icons';

interface BriefCardProps {
    brief: Brief;
    role: 'agency' | 'client';
}

const BriefCard: React.FC<BriefCardProps> = ({ brief, role }) => {
    const formattedDate = new Date(brief.createdAt).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
    });

    const getBriefPreview = (markdown?: string): string => {
        if (!markdown) return 'No content generated yet.';
        return markdown.split('\n').find(line => line.trim().length > 10)?.replace(/#+\s|\*\*/g, '') || 'Could not generate a preview.';
    };

    return (
        <a href={`#/dashboard/${role}/brief/${brief.id}`} className="block bg-white p-6 rounded-2xl border border-breef-border shadow-sm hover:shadow-lg hover:border-amo-orange/50 transition-all duration-300 group flex flex-col h-full">
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-breef-text-primary group-hover:text-amo-orange transition-colors truncate">{brief.projectName}</h3>
                <div className="flex items-center text-sm text-breef-text-secondary mt-1.5">
                    <ClockIcon className="w-4 h-4 mr-1.5 text-gray-400"/>
                    <span>{formattedDate}</span>
                </div>
                <p className="mt-4 text-sm text-breef-text-secondary leading-relaxed line-clamp-2">
                    {getBriefPreview(brief.generatedBrief)}
                </p>
            </div>

            <div className="mt-6 pt-4 border-t border-breef-border/80 flex justify-between items-center">
                 <div className="flex flex-wrap gap-2">
                    {brief.categories.slice(0, 2).map(cat => (
                        <span key={cat} className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-breef-text-secondary rounded-full">{cat}</span>
                    ))}
                </div>
                 <button className="text-gray-400 hover:text-gray-600">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                 </button>
            </div>
        </a>
    );
};

export default BriefCard;
