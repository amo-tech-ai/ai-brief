import React from 'react';
import { ArrowRightIcon, ChartBarIcon, DocumentDuplicateIcon, UsersIcon } from '../components/icons';

const KPICard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm flex items-start justify-between">
        <div>
            <p className="text-sm font-medium text-breef-text-secondary">{title}</p>
            <p className="text-4xl font-bold text-breef-text-primary mt-1">{value}</p>
        </div>
        <div className="bg-orange-50 text-amo-orange p-3 rounded-lg">{icon}</div>
    </div>
);

const ClientDashboardPage: React.FC = () => {
    // Mock data for the client dashboard
    const kpiData = {
        activeProjects: 3,
        openInvoices: 2,
        pendingTickets: 1,
    };

    const recentBriefs = [
        { id: 'brief_1672531200000', name: 'New Mobile App UX' },
        { id: 'brief_1672531200001', name: 'Q3 Marketing Campaign' },
    ];

    const currentProjects = [
        { id: 'p1', name: 'Mobile App Redesign', progress: 75 },
        { id: 'p2', name: 'Website SEO Overhaul', progress: 40 },
    ];

    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-breef-text-primary">Client Dashboard</h1>
                <p className="mt-1 text-breef-text-secondary">Welcome back! Here's an overview of your projects.</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <KPICard title="Active Projects" value={kpiData.activeProjects} icon={<ChartBarIcon className="w-6 h-6"/>} />
                <KPICard title="Open Invoices" value={kpiData.openInvoices} icon={<DocumentDuplicateIcon className="w-6 h-6"/>} />
                <KPICard title="Support Tickets" value={kpiData.pendingTickets} icon={<UsersIcon className="w-6 h-6"/>} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Current Projects */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-breef-text-primary">Current Projects</h2>
                        <a href="#/dashboard/client/projects" className="text-sm font-semibold text-amo-orange hover:underline">View All</a>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm space-y-4">
                        {currentProjects.map(project => (
                             <div key={project.id}>
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="font-semibold">{project.name}</h3>
                                    <span className="text-sm font-medium text-breef-text-secondary">{project.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-amo-orange h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Briefs */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-breef-text-primary">Recent Briefs</h2>
                        <a href="#/dashboard/client/briefs" className="text-sm font-semibold text-amo-orange hover:underline">View All</a>
                    </div>
                     <div className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm space-y-3">
                        {recentBriefs.map(brief => (
                            <a key={brief.id} href={`#/dashboard/client/brief/${brief.id}`} className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="font-medium text-breef-text-primary">{brief.name}</span>
                                <ArrowRightIcon className="w-5 h-5 text-gray-400" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
             <div className="mt-12 text-center">
                 <a href="#/new-brief" className="inline-block px-8 py-3 bg-amo-orange text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    Start a New Brief
                </a>
             </div>
        </div>
    );
};

export default ClientDashboardPage;
