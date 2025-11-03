import React, { useState, useMemo, useEffect } from 'react';
import { getClientById, Client } from '../utils/clients';
import { getBriefsByClientId } from '../utils/briefs';
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
        const fetchData = async () => {
            setLoading(true);
            const foundClient = await getClientById(clientId);
            if (foundClient) {
                setClient(foundClient);
                const briefsForClient = await getBriefsByClientId(clientId);
                setClientBriefs(briefsForClient);
            }
            setLoading(false);
        };
        fetchData();
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
                </div>
            </div>

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
                        className="block w-full rounded-xl border-breef-border py-3 pl-11 pr-4 text-breef-text-primary shadow-sm"
                    />
                </div>
            </div>

            {filteredBriefs.length === 0 ? (
                 <div className="text-center py-20 bg-white rounded-lg border border-breef-border mt-8">
                    <DocumentTextIcon className="w-12 h-12 mx-auto text-gray-400"/>
                    <h2 className="mt-4 text-2xl font-bold">No briefs yet</h2>
                    <p className="mt-2 text-breef-text-secondary">Create the first brief for {client.name}.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredBriefs.map(brief => (
                        <BriefCard key={brief.id} brief={brief} role="agency" />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ClientDetailPage;