import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive: boolean; onClick?: () => void; className?: string }> = ({ href, children, isActive, onClick, className = '' }) => {
    const activeClasses = 'text-amo-orange font-semibold';
    const inactiveClasses = 'text-gray-600 hover:text-amo-orange';
    return (
        <a href={href} onClick={onClick} className={`font-medium transition-colors ${isActive ? activeClasses : inactiveClasses} ${className}`}>
            {children}
        </a>
    );
};

const SiteNav: React.FC<{ currentPath: string }> = ({ currentPath }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const isActive = (path: string) => {
        if (path === '/') return currentPath === '/';
        if (path.length > 1) {
            return currentPath.startsWith(path);
        }
        return false;
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200/80 shadow-sm' : 'bg-white/50'}`}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <a href="#/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                            <div className="bg-breef-text-primary text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">A</div>
                            <span className="font-bold text-breef-text-primary text-2xl">AMO AI</span>
                        </a>
                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink href="#/services" isActive={isActive('/services')}>Services</NavLink>
                            <NavLink href="#/how-it-works" isActive={isActive('/how-it-works')}>How It Works</NavLink>
                            <NavLink href="#/projects" isActive={isActive('/projects')}>Projects</NavLink>
                        </div>
                        <div className="hidden md:flex items-center">
                            <a href="#/dashboard" className="font-medium text-gray-600 border border-gray-300 rounded-lg px-4 py-2 transition-colors hover:border-gray-400 hover:bg-gray-50 text-sm">
                                Go to Dashboard
                            </a>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -mr-2" aria-label="Open menu">
                                <MenuIcon className="w-6 h-6 text-gray-700" />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={closeMobileMenu}></div>
                <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-lg flex flex-col">
                    <div className="p-4 flex items-center justify-between border-b">
                         <a href="#/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                            <div className="bg-breef-text-primary text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold text-lg">A</div>
                            <span className="font-bold text-breef-text-primary text-xl">AMO AI</span>
                        </a>
                        <button onClick={closeMobileMenu} className="p-2 -mr-2" aria-label="Close menu">
                            <XIcon className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                    <nav className="mt-6 flex-grow p-6 flex flex-col items-start space-y-6">
                        <NavLink href="#/services" isActive={isActive('/services')} onClick={closeMobileMenu} className="text-xl">Services</NavLink>
                        <NavLink href="#/how-it-works" isActive={isActive('/how-it-works')} onClick={closeMobileMenu} className="text-xl">How It Works</NavLink>
                        <NavLink href="#/projects" isActive={isActive('/projects')} onClick={closeMobileMenu} className="text-xl">Projects</NavLink>
                        <div className="flex-grow"></div>
                        <a href="#/dashboard" onClick={closeMobileMenu} className="w-full text-center font-medium text-white bg-amo-orange border border-transparent rounded-lg px-4 py-3 transition-colors hover:bg-opacity-90 text-md">
                            Go to Dashboard
                        </a>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default SiteNav;
