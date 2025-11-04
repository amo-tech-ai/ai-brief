import React, { useState, useEffect, useMemo } from 'react';
import { Brief } from '../types';
import { getBriefs } from '../utils/briefs';
import { ArrowRightIcon, ChartBarIcon, UsersIcon, ClockIcon, CurrencyDollarIcon, FolderIcon } from '../components/icons';
import { getClients, Client } from '../utils/clients';

const KPICard: React.FC<{ title: string; value: string | number; icon: React.ReactNode; }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm flex items-start justify-between">
        <div>
            <p className="text-sm font-medium text-breef-text-secondary">{title}</p>
            <p className={`text-4xl font-bold mt-1 text-breef-text-primary`}>{value}</p>
        </div>
        <div className="bg-orange-50 text-amo-orange p-3 rounded-lg">
            {icon}
        </div>
    </div>
);

const KPICardSkeleton: React.FC = () => (
    <div className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm animate-pulse">
        <div className="flex items-start justify-between">
            <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-32"></div>
            </div>
            <div className="bg-gray-200 p-3 rounded-lg w-12 h-12"></div>
        </div>
    </div>
);

const RecentBriefsSkeleton: React.FC = () => (
    <div className="bg-white rounded-2xl border border-breef-border shadow-sm overflow-hidden animate-pulse">
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left"><div className="h-4 bg-gray-200 rounded w-20"></div></th>
                        <th className="px-6 py-3 text-left"><div className="h-4 bg-gray-200 rounded w-24"></div></th>
                        <th className="px-6 py-3 text-left"><div className="h-4 bg-gray-200 rounded w-16"></div></th>
                        <th className="px-6 py-3 text-left"><div className="h-4 bg-gray-200 rounded w-12"></div></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-breef-border">
                    {[...Array(5)].map((_, i) => (
                        <tr key={i}>
                            <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-40"></div></td>
                            <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-32"></div></td>
                            <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                            <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-10"></div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const TopClientsSkeleton: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    <div>
                        <div className="h-5 bg-gray-200 rounded w-28 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-breef-border flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="w-5 h-5 bg-gray-200 rounded"></div>
                </div>
            </div>
        ))}
    </div>
);

const AgencyDashboardPage: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [allBriefs, setAllBriefs] = useState<Brief[]>([]);
    const [allClients, setAllClients] = useState<Client[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const [briefsData, clientsData] = await Promise.all([getBriefs(), getClients()]);
            setAllBriefs(briefsData);
            setAllClients(clientsData);
            setLoading(false);
        };
        fetchData();
    }, []);

    const kpis = useMemo(() => [
        { title: "Revenue This Month", value: '$25,650', icon: <CurrencyDollarIcon className="w-6 h-6"/> },
        { title: "Total Clients", value: allClients.length, icon: <UsersIcon className="w-6 h-6"/> },
        { title: "Avg. Project Duration", value: '6 Weeks', icon: <ClockIcon className="w-6 h-6"/> },
        { title: "Avg. Project Value", value: '$8,550', icon: <ChartBarIcon className="w-6 h-6"/> },
        { title: "Active Projects", value: '12', icon: <FolderIcon className="w-6 h-6"/> },
    ], [allClients.length]);

    const recentBriefs = allBriefs.slice(0, 5);
    const topClients = allClients.slice(0, 3);

    const getClientNameById = (clientId: string) => {
        return allClients.find(c => c.id === clientId)?.name || 'Unknown Client';
    }
    
    return (
        <div>
            <header className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-breef-text-primary">Agency Dashboard</h1>
                    <p className="mt-1 text-breef-text-secondary">An overview of your agency's activity.</p>
                </div>
                 <a href="#/new-brief" className="hidden sm:inline-block px-4 py-2 bg-amo-orange text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    + New Brief
                </a>
            </header>
            
            {loading ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                        {[...Array(5)].map((_, i) => <KPICardSkeleton key={i} />)}
                    </div>
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-4">
                            <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
                            <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
                        </div>
                        <RecentBriefsSkeleton />
                    </div>
                    <div>
                        <div className="h-8 bg-gray-200 rounded w-40 mb-4 animate-pulse"></div>
                        <TopClientsSkeleton />
                    </div>
                </>
            ) : (
                <>
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                        {kpis.map(kpi => (
                            <KPICard key={kpi.title} title={kpi.title} value={kpi.value} icon={kpi.icon} />
                        ))}
                    </div>

                    {/* Recent Briefs */}
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-breef-text-primary">Recent Briefs</h2>
                            <a href="#/dashboard/agency/briefs" className="text-sm font-semibold text-amo-orange hover:underline">View All</a>
                        </div>
                        <div className="bg-white rounded-2xl border border-breef-border shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left font-semibold text-breef-text-secondary">Brief Name</th>
                                            <th className="px-6 py-3 text-left font-semibold text-breef-text-secondary">Client</th>
                                            <th className="px-6 py-3 text-left font-semibold text-breef-text-secondary">Date</th>
                                            <th className="px-6 py-3 text-left font-semibold text-breef-text-secondary">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-breef-border">
                                        {recentBriefs.map(brief => (
                                            <tr key={brief.id} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-breef-text-primary">{brief.projectName}</td>
                                                <td className="px-6 py-4 text-breef-text-secondary">{getClientNameById(brief.clientId || '')}</td>
                                                <td className="px-6 py-4 text-breef-text-secondary">{new Date(brief.createdAt).toLocaleDateString()}</td>
                                                <td className="px-6 py-4">
                                                    <a href={`#/dashboard/agency/brief/${brief.id}`} className="font-semibold text-amo-orange hover:underline">View</a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Top Clients */}
                    <div>
                        <h2 className="text-2xl font-bold text-breef-text-primary mb-4">Top Clients</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {topClients.map(client => (
                                <a href={`#/dashboard/agency/clients/${client.id}`} key={client.id} className="block bg-white p-6 rounded-2xl border border-breef-border shadow-sm hover:shadow-lg hover:border-amo-orange/50 transition-all duration-300 group">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg ${client.avatarColor}`}>
                                            {client.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-breef-text-primary group-hover:text-amo-orange">{client.name}</h3>
                                            <p className="text-sm text-breef-text-secondary">{client.briefCount} Briefs</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-breef-border flex justify-between items-center text-sm text-breef-text-secondary">
                                        <span>Last activity: {client.lastActivity}</span>
                                        <ArrowRightIcon className="w-5 h-5 group-hover:text-amo-orange transition-colors" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AgencyDashboardPage;