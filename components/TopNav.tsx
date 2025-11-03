import React from 'react';

const TopNav: React.FC = () => {
    return (
        <header className="bg-breef-bg/80 backdrop-blur-lg sticky top-0 z-10 border-b border-breef-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        <a href="#/" className="flex items-center space-x-2">
                             <div className="bg-breef-text-primary text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold text-lg">
                                B
                            </div>
                            <span className="font-bold text-breef-text-primary text-xl hidden sm:inline">Breef</span>
                        </a>
                        <nav className="hidden md:flex items-center space-x-6 pl-4">
                           <a href="#/dashboard" className="text-sm font-medium text-breef-text-secondary hover:text-breef-text-primary transition-colors">My Briefs</a>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#/brief-generator" className="px-4 py-2 bg-breef-accent text-white rounded-md font-semibold hover:bg-opacity-90 transition-colors text-sm">
                           + New Brief
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopNav;