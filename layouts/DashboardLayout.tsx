import React from 'react';
import { MenuIcon, XIcon } from '../components/icons';
import Breadcrumbs from '../components/Breadcrumbs';

interface DashboardLayoutProps {
    children: React.ReactNode;
    sidebarContent: React.ReactNode;
    currentPath: string;
    isSidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, sidebarContent, currentPath, isSidebarOpen, setSidebarOpen }) => {
    return (
        <div className="flex h-screen bg-breef-bg">
            {/* Mobile sidebar */}
            <div className={`relative z-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-900/80 transition-opacity" onClick={() => setSidebarOpen(false)}></div>
                <div className="fixed inset-0 flex">
                    <div className="relative mr-16 flex w-full max-w-xs flex-1">
                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                <span className="sr-only">Close sidebar</span>
                                <XIcon className="h-6 w-6 text-white" />
                            </button>
                        </div>
                        {sidebarContent}
                    </div>
                </div>
            </div>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-72 lg:flex-col">
                {sidebarContent}
            </div>

            <div className="flex-1 flex flex-col overflow-hidden lg:pl-72">
                <header className="lg:hidden bg-white/80 backdrop-blur-md border-b border-breef-border p-4 flex items-center h-16 shrink-0">
                    <button onClick={() => setSidebarOpen(true)} className="text-gray-500">
                        <MenuIcon className="h-6 w-6" />
                    </button>
                    <div className="ml-4">
                        <Breadcrumbs path={currentPath} />
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <div className="p-4 sm:p-6 md:p-8 animate-fade-in">
                        <div className="hidden lg:block mb-6">
                           <Breadcrumbs path={currentPath} />
                        </div>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
