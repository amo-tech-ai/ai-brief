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
import AIAgentsPage from './pages/AIAgentsPage';
import AIAgentDetailPage from './pages/AIAgentDetailPage';
import HowItWorksPage from './pages/HowItWorksPage';

// Define routes with regex for dynamic path matching
const routes = [
  { path: /^\/dashboard\/brief\/(.+)\/edit$/, component: (params: string[]) => <EditBriefPage briefId={params[0]} /> },
  { path: /^\/dashboard\/brief\/(.+)$/, component: (params: string[]) => <BriefDetailPage briefId={params[0]} /> },
  { path: /^\/dashboard$/, component: () => <DashboardPage /> },
  { path: /^\/brief-generator$/, component: () => <BriefWizard /> },
  { path: /^\/services\/social-media$/, component: () => <SocialMediaPage /> },
  { path: /^\/services\/whatsapp$/, component: () => <WhatsappPage /> },
  { path: /^\/services\/ai-agents\/(.+)$/, component: (params: string[]) => <AIAgentDetailPage agentType={params[0]} /> },
  { path: /^\/services\/ai-agents$/, component: () => <AIAgentsPage /> },
  { path: /^\/services\/(.+)$/, component: (params: string[]) => <ServiceDetailPage serviceId={params[0]} /> },
  { path: /^\/services$/, component: () => <ServicesPage /> },
  { path: /^\/projects$/, component: () => <ProjectsPage /> },
  { path: /^\/process$/, component: () => <ProcessPage /> },
  { path: /^\/how-it-works$/, component: () => <HowItWorksPage /> },
  { path: /^\/about$/, component: () => <AboutPage /> },
  { path: /^\/contact$/, component: () => <ContactPage /> },
  { path: /^\/$/, component: () => <HomePage /> },
];

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
    for (const routeDef of routes) {
      const match = path.match(routeDef.path);
      if (match) {
        // The first element of match is the full string, subsequent are capture groups
        const params = match.slice(1);
        return routeDef.component(params);
      }
    }
    // Fallback to home page if no specific match is found for invalid URLs
    return <HomePage />;
  };
  
  const isAppRoute = /^\/(dashboard|brief-generator)/.test(path);

  return (
    <div className={`min-h-screen w-full ${isAppRoute ? 'bg-breef-bg' : 'bg-white'}`}>
      {isAppRoute ? <TopNav currentPath={path} /> : null}
      <main key={path} className={`${isAppRoute ? 'p-4 sm:p-6 md:p-8' : ''} animate-fade-in`}>
        {renderPage()}
      </main>
      {!isAppRoute && <SiteFooter />}
    </div>
  );
};

export default App;
