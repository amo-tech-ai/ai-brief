import React from 'react';
import { Brief } from '../types';

interface BriefCardProps {
    brief: Brief;
}

const BriefCard: React.FC<BriefCardProps> = ({ brief }) => {
    const formattedDate = new Date(brief.createdAt).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
    });

    return (
        <a href={`#/dashboard/brief/${brief.id}`} className="block bg-white p-6 rounded-xl border border-breef-border shadow-sm hover:shadow-md hover:border-breef-accent/50 transition-all duration-300 group">
            <div className="flex flex-col h-full">
                <div className="flex-grow">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-breef-text-primary group-hover:text-breef-accent transition-colors">{brief.projectName}</h3>
                    </div>
                    <p className="mt-1 text-sm text-breef-text-secondary">{brief.status} &middot; {formattedDate}</p>
                    
                    {brief.categories && brief.categories.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {brief.categories.slice(0, 3).map(cat => (
                                <span key={cat} className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-breef-text-secondary rounded-full">{cat}</span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-6 pt-4 border-t border-breef-border flex justify-between text-sm text-breef-text-secondary font-medium">
                    <span>{brief.budget || 'N/A'}</span>
                    <span>{brief.timeline || 'N/A'}</span>
                </div>
            </div>
        </a>
    );
};

export default BriefCard;
