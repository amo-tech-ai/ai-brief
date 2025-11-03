import React from 'react';
import { Brief } from '../types';
import { getBriefs } from '../utils/briefs';
import { ArrowRightIcon, ChartBarIcon, UsersIcon, ClockIcon } from '../components/icons';
import { getClients, Client } from '../utils/clients';

const KPICard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm flex items-start justify-between">
        <div>
            <p className="text-sm font-medium text-breef-text-secondary">{title}</p>
            <p className="text-4xl font-bold text-breef-text-primary mt-1">{value}</p>
        </div>
        <div className="bg-orange-50 text-amo-orange p-3 rounded-lg">
            {icon}
        </div>
    </div>
);

const AgencyDashboardPage: React.FC = () => {
    // In a real app, this data would come from a backend. For now, we derive it.
    const allBriefs = getBriefs();
    const allClients = getClients();

    const kpiData = {
        totalBriefs: allBriefs.length,
        activeClients: allClients.length,
        thisMonthBriefs: allBriefs.filter(b => new Date(b.createdAt).getMonth() === new Date().getMonth()).length,
        teamMembers: 4, // Mock data
    };

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
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <KPICard title="Total Briefs" value={kpiData.totalBriefs} icon={<ChartBarIcon className="w-6 h-6"/>} />
                <KPICard title="Active Clients" value={kpiData.activeClients} icon={<UsersIcon className="w-6 h-6"/>} />
                <KPICard title="This Month" value={kpiData.thisMonthBriefs} icon={<ClockIcon className="w-6 h-6"/>} />
                <KPICard title="Team Members" value={kpiData.teamMembers} icon={<UsersIcon className="w-6 h-6"/>} />
            </div>

            {/* Recent Briefs */}
            <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-breef-text-primary">Recent Briefs</h2>
                    <a href="#/dashboard" className="text-sm font-semibold text-amo-orange hover:underline">View All</a>
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
                                            <a href={`#/dashboard/brief/${brief.id}`} className="font-semibold text-amo-orange hover:underline">View</a>
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
        </div>
    );
};

export default AgencyDashboardPage;