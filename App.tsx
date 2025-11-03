import React, { useState, useEffect } from 'react';
import BriefWizard from './components/BriefWizard';
import DashboardPage from './pages/DashboardPage';
import BriefDetailPage from './pages/BriefDetailPage';
import EditBriefPage from './pages/EditBriefPage';
import Sidebar from './components/Sidebar';
import SiteNav from './components/SiteNav';
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
import AgencyDashboardPage from './pages/AgencyDashboardPage';
import ClientListPage from './pages/ClientListPage';
import ClientDetailPage from './pages/ClientDetailPage';

import { MenuIcon } from './components/icons';

// Define routes with regex for dynamic path matching
const routes = [
  { path: /^\/dashboard\/agency\/clients\/(.+)$/, component: (params: string[]) => <ClientDetailPage clientId={params[0]} /> },
  { path: /^\/dashboard\/agency\/clients$/, component: () => <ClientListPage /> },
  { path: /^\/dashboard\/agency$/, component: () => <AgencyDashboardPage /> },
  { path: /^\/dashboard\/brief\/(.+)\/edit$/, component: (params: string[]) => <EditBriefPage briefId={params[0]} /> },
  { path: /^\/dashboard\/brief\/(.+)$/, component: (params: string[]) => <BriefDetailPage briefId={params[0]} /> },
  { path: /^\/dashboard$/, component: () => <DashboardPage /> },
  { path: /^\/new-brief$/, component: () => <BriefWizard /> },
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
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      setSidebarOpen(false); // Close sidebar on navigation
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
  
  const isAppRoute = /^\/(dashboard|new-brief)/.test(path);

  const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex h-screen bg-breef-bg">
      <Sidebar currentPath={path} isOpen={isSidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden lg:pl-72">
        <header className="lg:hidden bg-white/80 backdrop-blur-md border-b border-breef-border p-4 flex items-center h-16 shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-500">
            <MenuIcon className="h-6 w-6" />
          </button>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="p-4 sm:p-6 md:p-8 animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );

  const SiteLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-white">
      <SiteNav currentPath={path} />
      <main key={path} className="animate-fade-in">
        {children}
      </main>
      <SiteFooter />
    </div>
  );

  return (
    <div className="min-h-screen w-full">
      {isAppRoute ? (
        <AppLayout>{renderPage()}</AppLayout>
      ) : (
        <SiteLayout>{renderPage()}</SiteLayout>
      )}
    </div>
  );
};

export default App;