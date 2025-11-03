import React, { useState, useEffect, useMemo } from 'react';
import { Brief } from '../types';
import { getBriefs } from '../utils/briefs';
import BriefCard from '../components/BriefCard';
import { MagnifyingGlassIcon } from '../components/icons';

const AgencyBriefsPage: React.FC = () => {
    // This page shows ALL briefs for the agency.
    const [allBriefs, setAllBriefs] = useState<Brief[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setAllBriefs(getBriefs());
            setLoading(false);
        }, 300);
    }, []);

    const filteredBriefs = useMemo(() => {
        if (!searchTerm) return allBriefs;
        return allBriefs.filter(brief =>
            brief.projectName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [allBriefs, searchTerm]);

    const SkeletonLoader = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                </div>
            ))}
        </div>
    );
    
    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-breef-text-primary">All Briefs</h1>
                <p className="mt-1 text-breef-text-secondary">View and manage all briefs across all clients.</p>
            </header>

            <div className="mb-8">
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"><MagnifyingGlassIcon className="h-5 w-5 text-gray-400" /></div>
                    <input type="text" placeholder="Search briefs by project name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="block w-full rounded-xl border-breef-border py-3 pl-11 pr-4"/>
                </div>
            </div>

            {loading ? <SkeletonLoader /> : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredBriefs.map(brief => (
                        <BriefCard key={brief.id} brief={brief} role="agency" />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AgencyBriefsPage;
