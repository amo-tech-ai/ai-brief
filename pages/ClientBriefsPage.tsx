import React, { useState, useEffect, useMemo } from 'react';
import { Brief } from '../types';
import { getBriefs } from '../utils/briefs';
import BriefCard from '../components/BriefCard';
import { MagnifyingGlassIcon } from '../components/icons';

const ClientBriefsPage: React.FC = () => {
    // This page should only show briefs for the LOGGED IN client.
    // We will mock this by assigning a client ID. In a real app, this would be from the auth context.
    const MOCK_CLIENT_ID = 'client_1';
    const [clientBriefs, setClientBriefs] = useState<Brief[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setTimeout(() => {
            const allBriefs = getBriefs();
            const briefsForClient = allBriefs.filter(b => b.clientId === MOCK_CLIENT_ID);
            setClientBriefs(briefsForClient);
            setLoading(false);
        }, 300);
    }, []);

    const filteredBriefs = useMemo(() => {
        if (!searchTerm) return clientBriefs;
        return clientBriefs.filter(brief =>
            brief.projectName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [clientBriefs, searchTerm]);
    
    const SkeletonLoader = () => (
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-breef-text-primary">My Briefs</h1>
                <p className="mt-1 text-breef-text-secondary">View and manage all your project briefs.</p>
            </header>

            <div className="mb-8"><div className="relative"><div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"><MagnifyingGlassIcon className="h-5 w-5 text-gray-400" /></div><input type="text" placeholder="Search your briefs..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="block w-full rounded-xl border-breef-border py-3 pl-11 pr-4"/></div></div>

            {loading ? <SkeletonLoader /> : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredBriefs.map(brief => (
                        <BriefCard key={brief.id} brief={brief} role="client"/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ClientBriefsPage;
