import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { ChartBarIcon, DocumentDuplicateIcon, UsersIcon } from '../components/icons';

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive: boolean; icon: React.ReactNode; }> = ({ href, children, isActive, icon }) => {
    const activeClasses = 'bg-orange-50 text-amo-orange';
    const inactiveClasses = 'text-gray-600 hover:text-breef-text-primary hover:bg-gray-50';
    return (
        <a href={href} className={`group flex items-center px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${isActive ? activeClasses : inactiveClasses}`}>
            <span className={`mr-3 h-6 w-6 transition-colors ${isActive ? 'text-amo-orange' : 'text-gray-400 group-hover:text-gray-500'}`}>{icon}</span>
            {children}
        </a>
    );
};

const AgencySidebarContent: React.FC<{ currentPath: string }> = ({ currentPath }) => (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-breef-border bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
            <a href="#/" className="flex items-center space-x-2">
                <div className="bg-breef-text-primary text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold text-lg">A</div>
                <span className="font-bold text-breef-text-primary text-xl">AMO AI</span>
            </a>
        </div>
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-1">
                        <li>
                            <NavLink href="#/dashboard/agency" isActive={currentPath === '/dashboard/agency'} icon={<ChartBarIcon />}>
                                Overview
                            </NavLink>
                        </li>
                         <li>
                            <NavLink href="#/dashboard/agency/clients" isActive={currentPath.startsWith('/dashboard/agency/clients')} icon={<UsersIcon />}>
                                Clients
                            </NavLink>
                        </li>
                        <li>
                             <NavLink href="#/dashboard/agency/briefs" isActive={currentPath.startsWith('/dashboard/agency/briefs')} icon={<DocumentDuplicateIcon />}>
                                All Briefs
                            </NavLink>
                        </li>
                    </ul>
                </li>
                 <li className="mt-auto">
                    <div className="border-t border-breef-border -mx-6 pt-4">
                         <a href="#/new-brief" className="group mx-6 flex items-center justify-center px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors bg-amo-orange text-white hover:bg-opacity-90">
                            + New Brief
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
);


const AgencyLayout: React.FC<{ children: React.ReactNode, currentPath: string }> = ({ children, currentPath }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return (
        <DashboardLayout
            sidebarContent={<AgencySidebarContent currentPath={currentPath} />}
            currentPath={currentPath}
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
        >
            {children}
        </DashboardLayout>
    );
}

export default AgencyLayout;
