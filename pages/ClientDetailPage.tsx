import React, { useState, useMemo, useEffect } from 'react';
import { getClientById, Client } from '../utils/clients';
import { getBriefs } from '../utils/briefs';
import { Brief } from '../types';
import BriefCard from '../components/BriefCard';
import { ArrowLeftIcon, MagnifyingGlassIcon, DocumentTextIcon } from '../components/icons';

interface ClientDetailPageProps {
    clientId: string;
}

const ClientDetailPage: React.FC<ClientDetailPageProps> = ({ clientId }) => {
    const [client, setClient] = useState<Client | null>(null);
    const [clientBriefs, setClientBriefs] = useState<Brief[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundClient = getClientById(clientId);
        if (foundClient) {
            setClient(foundClient);
            const allBriefs = getBriefs();
            // In a real app, briefs would have a `clientId` saved with them.
            // We are using a mock association in getBriefs() for this demo.
            const briefsForClient = allBriefs.filter(b => b.clientId === clientId);
            setClientBriefs(briefsForClient);
        }
        setLoading(false);
    }, [clientId]);

    const filteredBriefs = useMemo(() => {
        if (!searchTerm) {
            return clientBriefs;
        }
        return clientBriefs.filter(brief =>
            brief.projectName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [clientBriefs, searchTerm]);
    
    if (loading) {
        // A simple loader, could be replaced with a skeleton component
        return <div>Loading client details...</div>;
    }

    if (!client) {
        return (
            <div className="text-center p-10">
                <h2 className="text-2xl font-bold">Client not found</h2>
                <a href="#/dashboard/agency/clients" className="mt-4 text-breef-accent hover:underline">Return to Client List</a>
            </div>
        );
    }

    const EmptyBriefsState: React.FC = () => (
        <div className="text-center py-20 bg-white rounded-lg border border-breef-border mt-8">
            <div className="bg-breef-accent/10 text-breef-accent text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <DocumentTextIcon className="w-8 h-8"/>
            </div>
            <h2 className="text-2xl font-bold text-breef-text-primary">
                No briefs for this client yet
            </h2>
            <p className="mt-2 text-breef-text-secondary">
                Create the first brief for {client.name} to get started.
            </p>
            <a href="#/new-brief" className="mt-6 inline-block px-6 py-3 bg-breef-accent text-white rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                + Create Brief
            </a>
        </div>
    );

    return (
        <div>
            <header className="mb-8 flex justify-between items-center">
                 <a href="#/dashboard/agency/clients" className="flex items-center text-sm text-breef-text-secondary hover:text-breef-text-primary transition-colors">
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Back to Clients
                </a>
                 <a href="#/new-brief" className="hidden sm:inline-block px-4 py-2 bg-amo-orange text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    + New Brief for {client.name}
                </a>
            </header>

            {/* Client Info Card */}
            <div className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm mb-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-3xl ${client.avatarColor}`}>
                            {client.name.charAt(0)}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-breef-text-primary">{client.name}</h1>
                            <p className="text-sm text-breef-text-secondary mt-1">{client.briefCount} Briefs • Last activity: {client.lastActivity}</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-2">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder={`Search briefs for ${client.name}...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full rounded-xl border-breef-border py-3 pl-11 pr-4 text-breef-text-primary shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amo-orange sm:text-sm"
                    />
                </div>
            </div>

            {filteredBriefs.length === 0 ? (
                <EmptyBriefsState />
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

export default ClientDetailPage;
