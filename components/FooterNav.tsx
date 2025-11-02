
import React, { useState, useEffect } from 'react';
import { WIZARD_ROUTES } from '../constants';

const FooterNav: React.FC = () => {
  const [activePath, setActivePath] = useState(location.hash || '#/brief/new');

  useEffect(() => {
    const handleHashChange = () => {
      setActivePath(location.hash || '#/brief/new');
    };
    
    handleHashChange(); // Set initial state correctly
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <footer className="sticky bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            {WIZARD_ROUTES.map(({ path, label }) => {
              const isActive = activePath === path;
              return (
                <a
                  key={path}
                  href={path}
                  className={`text-xs sm:text-sm font-medium transition-colors duration-200 px-3 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                    isActive
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </a>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 hidden sm:block">&copy; {new Date().getFullYear()} breef.ai</p>
        </div>
      </nav>
    </footer>
  );
};

export default FooterNav;
