import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive: boolean }> = ({ href, children, isActive }) => {
    const activeClasses = 'text-amo-orange font-semibold';
    const inactiveClasses = 'text-gray-600 hover:text-amo-orange';
    return (
        <a href={href} className={`font-medium transition-colors ${isActive ? activeClasses : inactiveClasses}`}>
            {children}
        </a>
    );
};

const SiteNav: React.FC<{ currentPath: string }> = ({ currentPath }) => {
    const isActive = (path: string) => {
        if (path === '/') return currentPath === '/';
        // Match parent routes like /services for /services/ai-web-dev
        if (path.length > 1) {
            return currentPath.startsWith(path);
        }
        return false;
    };

    return (
        <header className="absolute top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-lg border-b border-gray-200/80">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <a href="#/" className="flex items-center space-x-2">
                        <div className="bg-breef-text-primary text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
                            A
                        </div>
                        <span className="font-bold text-breef-text-primary text-2xl">AMO AI</span>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="#/services" isActive={isActive('/services')}>Services</NavLink>
                        <NavLink href="#/how-it-works" isActive={isActive('/how-it-works')}>How It Works</NavLink>
                        <NavLink href="#/projects" isActive={isActive('/projects')}>Projects</NavLink>
                    </div>
                    <div>
                        <a href="#/dashboard" className="text-gray-600 hover:text-amo-orange font-medium">
                            Dashboard
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default SiteNav;
