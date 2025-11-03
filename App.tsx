import React, { useState, useEffect } from 'react';
import BriefWizard from './components/BriefWizard';
import DashboardPage from './pages/DashboardPage';
import BriefDetailPage from './pages/BriefDetailPage';
import EditBriefPage from './pages/EditBriefPage';
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';
import SiteFooter from './components/SiteFooter';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const renderPage = () => {
    const path = route.replace(/^#/, '');
    
    if (path.startsWith('/dashboard/brief/') && path.endsWith('/edit')) {
      const id = path.split('/')[3];
      return <EditBriefPage briefId={id} />;
    }
    
    if (path.startsWith('/dashboard/brief/')) {
      const id = path.split('/').pop();
      return <BriefDetailPage briefId={id!} />;
    }
    
    if (path === '/dashboard') {
      return <DashboardPage />;
    }
    
    if (path === '/brief-generator') {
        return <BriefWizard />;
    }
    
    // Default to home page
    return <HomePage />;
  };
  
  const isAppRoute = route.includes('dashboard') || route.includes('brief-generator');

  return (
    <div className={`min-h-screen w-full ${isAppRoute ? 'bg-breef-bg' : 'bg-white'}`}>
      {isAppRoute ? <TopNav /> : null}
      <main className={`${isAppRoute ? 'p-4 sm:p-6 md:p-8' : ''}`}>
        {renderPage()}
      </main>
      {!isAppRoute && <SiteFooter />}
    </div>
  );
};

export default App;