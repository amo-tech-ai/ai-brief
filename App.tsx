import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './hooks/useAuth';

// Layouts
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import AgencyLayout from './layouts/AgencyLayout';
import ClientLayout from './layouts/ClientLayout';

// Site Pages
import HomePage from './pages/HomePage';
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

// App Pages
import BriefWizard from './components/BriefWizard';
import DashboardDispatcher from './pages/DashboardDispatcher';
import ForbiddenPage from './pages/ForbiddenPage';

// Agency Pages
import AgencyDashboardPage from './pages/AgencyDashboardPage';
import ClientListPage from './pages/ClientListPage';
import ClientDetailPage from './pages/ClientDetailPage';
import AgencyBriefsPage from './pages/AgencyBriefsPage';

// Client Pages
import ClientDashboardPage from './pages/ClientDashboardPage';
import ClientBriefsPage from './pages/ClientBriefsPage';
import ClientProjectsPage from './pages/ClientProjectsPage';
import ClientBillingPage from './pages/ClientBillingPage';
import ClientSupportPage from './pages/ClientSupportPage';

// Common App Pages
import BriefDetailPage from './pages/BriefDetailPage';
import EditBriefPage from './pages/EditBriefPage';
import { LoadingSpinner } from './components/icons';

// Route definitions
const routes: { path: RegExp, component: (params: string[]) => React.ReactNode, layout: string, roles?: ('agency' | 'client')[] }[] = [
    // Site routes
    { path: /^\/$/, component: () => <HomePage />, layout: 'site' },
    { path: /^\/services\/social-media$/, component: () => <SocialMediaPage />, layout: 'site' },
    { path: /^\/services\/whatsapp$/, component: () => <WhatsappPage />, layout: 'site' },
    { path: /^\/services\/ai-agents\/(.+)$/, component: (params: string[]) => <AIAgentDetailPage agentType={params[0]} />, layout: 'site' },
    { path: /^\/services\/ai-agents$/, component: () => <AIAgentsPage />, layout: 'site' },
    { path: /^\/services\/(.+)$/, component: (params: string[]) => <ServiceDetailPage serviceId={params[0]} />, layout: 'site' },
    { path: /^\/services$/, component: () => <ServicesPage />, layout: 'site' },
    { path: /^\/projects$/, component: () => <ProjectsPage />, layout: 'site' },
    { path: /^\/process$/, component: () => <ProcessPage />, layout: 'site' },
    { path: /^\/how-it-works$/, component: () => <HowItWorksPage />, layout: 'site' },
    { path: /^\/about$/, component: () => <AboutPage />, layout: 'site' },
    { path: /^\/contact$/, component: () => <ContactPage />, layout: 'site' },
    
    // App routes (no specific layout, full page)
    { path: /^\/new-brief$/, component: () => <BriefWizard />, layout: 'app-full' },
    
    // Dashboard dispatcher
    { path: /^\/dashboard$/, component: () => <DashboardDispatcher />, layout: 'app-full' },

    // Agency routes
    { path: /^\/dashboard\/agency\/clients\/(.+)$/, component: (params: string[]) => <ClientDetailPage clientId={params[0]} />, layout: 'agency', roles: ['agency'] },
    { path: /^\/dashboard\/agency\/clients$/, component: () => <ClientListPage />, layout: 'agency', roles: ['agency'] },
    { path: /^\/dashboard\/agency\/briefs$/, component: () => <AgencyBriefsPage />, layout: 'agency', roles: ['agency'] },
    { path: /^\/dashboard\/agency$/, component: () => <AgencyDashboardPage />, layout: 'agency', roles: ['agency'] },

    // Client routes
    { path: /^\/dashboard\/client\/projects$/, component: () => <ClientProjectsPage />, layout: 'client', roles: ['client']},
    { path: /^\/dashboard\/client\/briefs$/, component: () => <ClientBriefsPage />, layout: 'client', roles: ['client']},
    { path: /^\/dashboard\/client\/billing$/, component: () => <ClientBillingPage />, layout: 'client', roles: ['client']},
    { path: /^\/dashboard\/client\/support$/, component: () => <ClientSupportPage />, layout: 'client', roles: ['client']},
    { path: /^\/dashboard\/client$/, component: () => <ClientDashboardPage />, layout: 'client', roles: ['client']},
  
    // Shared dashboard routes (layout determined by role)
    { path: /^\/dashboard\/(agency|client)\/brief\/(.+)\/edit$/, component: (params: string[]) => <EditBriefPage briefId={params[1]} />, layout: 'dashboard', roles: ['agency', 'client']},
    { path: /^\/dashboard\/(agency|client)\/brief\/(.+)$/, component: (params: string[]) => <BriefDetailPage briefId={params[1]} />, layout: 'dashboard', roles: ['agency', 'client']},
];

const SiteLayout: React.FC<{ children: React.ReactNode, currentPath: string }> = ({ children, currentPath }) => (
    <div className="bg-white">
        <SiteNav currentPath={currentPath} />
        <main key={currentPath} className="animate-fade-in pt-20">
            {children}
        </main>
        <SiteFooter />
    </div>
);

const AppContent: React.FC = () => {
    const [route, setRoute] = useState(window.location.hash || '#/');
    const { role, loading } = useAuth();

    useEffect(() => {
        const handleHashChange = () => {
            setRoute(window.location.hash || '#/');
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const path = route.replace(/^#/, '');

    const renderPage = () => {
        if (loading) {
            return (
                <div className="flex items-center justify-center h-screen">
                    <LoadingSpinner className="h-10 w-10 text-amo-orange" />
                </div>
            );
        }

        for (const routeDef of routes) {
            const match = path.match(routeDef.path);
            if (match) {
                // Check role access
                if (routeDef.roles && !routeDef.roles.includes(role)) {
                    return <ForbiddenPage />;
                }

                const params = match.slice(1);
                const pageComponent = routeDef.component(params);
                let layout = routeDef.layout;

                // For shared routes, determine layout based on role
                if (layout === 'dashboard') {
                    layout = role;
                }

                switch (layout) {
                    case 'agency':
                        return <AgencyLayout currentPath={path}>{pageComponent}</AgencyLayout>;
                    case 'client':
                        return <ClientLayout currentPath={path}>{pageComponent}</ClientLayout>;
                    case 'site':
                        return <SiteLayout currentPath={path}>{pageComponent}</SiteLayout>;
                    case 'app-full':
                    default:
                        return <div className="p-4 sm:p-6 md:p-8 animate-fade-in">{pageComponent}</div>;
                }
            }
        }
        // Fallback for unmatched routes
        return (
            <SiteLayout currentPath={path}>
                <HomePage />
            </SiteLayout>
        );
    };
    
    return <div className="min-h-screen w-full">{renderPage()}</div>;
};

const App: React.FC = () => (
    <AuthProvider>
        <AppContent />
    </AuthProvider>
);

export default App;