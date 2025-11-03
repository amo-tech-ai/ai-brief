import React, { useState, useMemo, useEffect } from 'react';
import { Client, getClients } from '../utils/clients';
import ClientCard from '../components/ClientCard';
import { MagnifyingGlassIcon, UsersIcon } from '../components/icons';

const ClientListPage: React.FC = () => {
    const [allClients, setAllClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchClients = async () => {
            setLoading(true);
            const clients = await getClients();
            setAllClients(clients);
            setLoading(false);
        };
        fetchClients();
    }, []);

    const filteredClients = useMemo(() => {
        if (!searchTerm) {
            return allClients;
        }
        return allClients.filter(client =>
            client.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [allClients, searchTerm]);

    const EmptyState: React.FC = () => (
        <div className="text-center py-20 bg-white rounded-lg border border-breef-border mt-8">
             <div className="bg-breef-accent/10 text-breef-accent text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <UsersIcon className="w-8 h-8"/>
            </div>
            <h2 className="text-2xl font-bold text-breef-text-primary">
                No clients yet
            </h2>
            <p className="mt-2 text-breef-text-secondary">
                Add your first client to get started.
            </p>
            <button className="mt-6 inline-block px-6 py-3 bg-breef-accent text-white rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                + Add Client
            </button>
        </div>
    );

    const ClientCardSkeleton: React.FC = () => (
        <div className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm flex flex-col text-center items-center animate-pulse">
            <div className="w-20 h-20 rounded-full bg-gray-200 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            <div className="mt-6 w-full pt-4 border-t border-breef-border/80">
                <div className="h-5 bg-gray-200 rounded w-24 mx-auto"></div>
            </div>
        </div>
    );

    return (
        <div>
            <header className="mb-8 flex justify-between items-center">
                 <div>
                    <h1 className="text-3xl font-bold text-breef-text-primary">Clients</h1>
                    <p className="mt-1 text-breef-text-secondary">View and manage all your clients.</p>
                </div>
                 <button className="hidden sm:inline-block px-4 py-2 bg-amo-orange text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    + Add Client
                </button>
            </header>

            {/* Search Bar */}
            <div className="mb-8">
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search clients by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full rounded-xl border-breef-border py-3 pl-11 pr-4 text-breef-text-primary shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amo-orange sm:text-sm"
                    />
                </div>
            </div>
            
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => <ClientCardSkeleton key={i} />)}
                </div>
            ) : filteredClients.length === 0 ? (
                <EmptyState />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredClients.map(client => (
                        <ClientCard key={client.id} client={client} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ClientListPage;