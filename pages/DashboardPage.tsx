import React, { useState, useEffect } from 'react';
import { Brief } from '../types';
import { getBriefs } from '../utils/briefs';
import BriefCard from '../components/BriefCard';

const DashboardPage: React.FC = () => {
    const [briefs, setBriefs] = useState<Brief[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setBriefs(getBriefs());
        setLoading(false);
    }, []);

    const EmptyState = () => (
        <div className="text-center py-20 bg-white rounded-lg border border-breef-border">
             <div className="bg-breef-accent/10 text-breef-accent text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                AI
            </div>
            <h2 className="text-2xl font-bold text-breef-text-primary">No briefs yet</h2>
            <p className="mt-2 text-breef-text-secondary">Create your first AI brief to get started.</p>
            <a href="#/brief-generator" className="mt-6 inline-block px-6 py-3 bg-breef-accent text-white rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                Create Your First Brief
            </a>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-breef-text-primary">My AI Briefs</h1>
            </div>

            {loading ? (
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-breef-border shadow-sm animate-pulse">
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                            <div className="h-20 bg-gray-200 rounded"></div>
                        </div>
                    ))}
                 </div>
            ) : briefs.length === 0 ? (
                <EmptyState />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {briefs.map(brief => (
                        <BriefCard key={brief.id} brief={brief} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DashboardPage;