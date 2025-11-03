import React, { useState, useEffect, useMemo } from 'react';
import { Brief } from '../types';
import { getBriefs } from '../utils/briefs';
import BriefCard from '../components/BriefCard';
import { MagnifyingGlassIcon } from '../components/icons';

const DashboardPage: React.FC = () => {
    const [allBriefs, setAllBriefs] = useState<Brief[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setAllBriefs(getBriefs());
            setLoading(false);
        }, 300);
    }, []);

    const filteredBriefs = useMemo(() => {
        if (!searchTerm) {
            return allBriefs;
        }
        return allBriefs.filter(brief =>
            brief.projectName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [allBriefs, searchTerm]);

    const EmptyState: React.FC<{ isSearch?: boolean }> = ({ isSearch = false }) => (
        <div className="text-center py-20 bg-white rounded-lg border border-breef-border mt-8">
             <div className="bg-breef-accent/10 text-breef-accent text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                {isSearch ? <MagnifyingGlassIcon className="w-8 h-8"/> : 'AI'}
            </div>
            <h2 className="text-2xl font-bold text-breef-text-primary">
                {isSearch ? 'No briefs found' : 'No briefs yet'}
            </h2>
            <p className="mt-2 text-breef-text-secondary">
                {isSearch ? 'Try adjusting your search term.' : 'Create your first AI brief to get started.'}
            </p>
            {!isSearch && (
                 <a href="#/brief-generator" className="mt-6 inline-block px-6 py-3 bg-breef-accent text-white rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                    Create Your First Brief
                </a>
            )}
        </div>
    );
    
    const SkeletonLoader = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                    <div className="mt-6 pt-4 border-t border-breef-border/80 flex justify-between items-center">
                        <div className="h-5 bg-gray-200 rounded-full w-16"></div>
                        <div className="h-5 bg-gray-200 rounded-full w-20"></div>
                        <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-breef-text-primary">My AI Briefs</h1>
                <p className="mt-1 text-breef-text-secondary">View and manage all your generated project briefs.</p>
            </header>

            {/* Search and Filter Bar */}
            <div className="mb-8">
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search briefs by project name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full rounded-xl border-breef-border py-3 pl-11 pr-4 text-breef-text-primary shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amo-orange sm:text-sm"
                    />
                </div>
            </div>

            {loading ? (
                 <SkeletonLoader />
            ) : filteredBriefs.length === 0 ? (
                <EmptyState isSearch={!!searchTerm} />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredBriefs.map(brief => (
                        <BriefCard key={brief.id} brief={brief} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
