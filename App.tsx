import React, { useState, useEffect } from 'react';
import BriefWizard from './components/BriefWizard';
import DashboardPage from './pages/DashboardPage';
import BriefDetailPage from './pages/BriefDetailPage';
import EditBriefPage from './pages/EditBriefPage';
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';
import SiteFooter from './components/SiteFooter';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SocialMediaPage from './pages/SocialMediaPage';
import WhatsappPage from './pages/WhatsappPage';

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
  
  const path = route.replace(/^#/, '');

  const renderPage = () => {
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
    
    if (path === '/services/social-media') {
        return <SocialMediaPage />;
    }

    if (path === '/services/whatsapp') {
        return <WhatsappPage />;
    }

    if (path.startsWith('/services/')) {
        const serviceId = path.split('/')[2];
        return <ServiceDetailPage serviceId={serviceId} />;
    }
    
    if (path === '/services') {
        return <ServicesPage />;
    }

    if (path === '/projects') {
        return <ProjectsPage />;
    }

    if (path === '/process') {
        return <ProcessPage />;
    }
    
    if (path === '/about') {
        return <AboutPage />;
    }

    if (path === '/contact') {
        return <ContactPage />;
    }
    
    // Default to home page
    return <HomePage />;
  };
  
  const isAppRoute = route.includes('dashboard') || route.includes('brief-generator');

  return (
    <div className={`min-h-screen w-full ${isAppRoute ? 'bg-breef-bg' : 'bg-white'}`}>
      {isAppRoute ? <TopNav /> : null}
      <main key={path} className={`${isAppRoute ? 'p-4 sm:p-6 md:p-8' : ''} animate-fade-in`}>
        {renderPage()}
      </main>
      {!isAppRoute && <SiteFooter />}
    </div>
  );
};

export default App;