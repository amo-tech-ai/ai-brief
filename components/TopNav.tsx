import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive: boolean }> = ({ href, children, isActive }) => {
    const activeClasses = 'text-amo-orange font-semibold bg-orange-50';
    const inactiveClasses = 'text-breef-text-secondary hover:text-breef-text-primary hover:bg-gray-100';
    return (
        <a href={href} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? activeClasses : inactiveClasses}`}>
            {children}
        </a>
    );
};

const TopNav: React.FC<{ currentPath: string }> = ({ currentPath }) => {
    return (
        <header className="bg-breef-bg/80 backdrop-blur-lg sticky top-0 z-10 border-b border-breef-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        <a href="#/" className="flex items-center space-x-2 flex-shrink-0">
                             <div className="bg-breef-text-primary text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold text-lg">
                                A
                            </div>
                            <span className="font-bold text-breef-text-primary text-xl hidden sm:inline">AMO AI</span>
                        </a>
                        <nav className="hidden md:flex items-center space-x-1 pl-4">
                           <NavLink href="#/dashboard" isActive={currentPath.startsWith('/dashboard')}>
                               My Briefs
                           </NavLink>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#/brief-generator" className="inline-flex items-center px-4 py-2 bg-amo-orange text-white rounded-md font-semibold hover:bg-opacity-90 transition-colors text-sm shadow-sm">
                           + New Brief
                        </a>
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold text-gray-600 border border-gray-300" title="User Account">
                            A
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopNav;
