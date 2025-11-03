import React from 'react';
import { ChartBarIcon, DocumentDuplicateIcon, UsersIcon } from './icons';

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive: boolean; icon: React.ReactNode; }> = ({ href, children, isActive, icon }) => {
    const activeClasses = 'bg-orange-50 text-amo-orange';
    const inactiveClasses = 'text-gray-600 hover:text-breef-text-primary hover:bg-gray-50';
    return (
        <a href={href} className={`group flex items-center px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${isActive ? activeClasses : inactiveClasses}`}>
            <span className={`mr-3 h-6 w-6 transition-colors ${isActive ? 'text-amo-orange' : 'text-gray-400 group-hover:text-gray-500'}`}>
                {icon}
            </span>
            {children}
        </a>
    );
};

interface SidebarProps {
  currentPath: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const SidebarContent: React.FC<{ currentPath: string }> = ({ currentPath }) => (
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
                            <NavLink 
                                href="#/dashboard/agency" 
                                isActive={currentPath === '/dashboard/agency'}
                                icon={<ChartBarIcon />}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                         <li>
                            <NavLink 
                                href="#/dashboard/agency/clients" 
                                isActive={currentPath.startsWith('/dashboard/agency/clients')}
                                icon={<UsersIcon />}
                            >
                                Clients
                            </NavLink>
                        </li>
                        <li>
                             <NavLink 
                                href="#/dashboard" 
                                isActive={currentPath === '/dashboard'}
                                icon={<DocumentDuplicateIcon />}
                            >
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


const Sidebar: React.FC<SidebarProps> = ({ currentPath, isOpen, setOpen }) => {
    return (
        <>
            {/* Mobile sidebar */}
            <div className={`relative z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-900/80 transition-opacity" onClick={() => setOpen(false)}></div>
                <div className="fixed inset-0 flex">
                    <div className="relative mr-16 flex w-full max-w-xs flex-1">
                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setOpen(false)}>
                                <span className="sr-only">Close sidebar</span>
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <SidebarContent currentPath={currentPath} />
                    </div>
                </div>
            </div>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-72 lg:flex-col">
                <SidebarContent currentPath={currentPath} />
            </div>
        </>
    );
};

export default Sidebar;