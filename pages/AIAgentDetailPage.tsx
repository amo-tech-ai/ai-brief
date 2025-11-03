import React from 'react';
import SiteFooter from '../components/SiteFooter';
import { ArrowRightIcon, CheckIcon, CpuChipIcon } from '../components/icons';
import { agentData } from '../data/agentData';

const Nav = () => (
    <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
                <a href="#/" className="flex items-center space-x-2">
                    <div className="bg-breef-text-primary text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">A</div>
                    <span className="font-bold text-breef-text-primary text-2xl">AMO AI</span>
                </a>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#/services" className="text-amo-orange font-semibold">Services</a>
                    <a href="#/process" className="text-gray-600 hover:text-amo-orange font-medium">Process</a>
                    <a href="#/projects" className="text-gray-600 hover:text-amo-orange font-medium">Projects</a>
                </div>
                <div>
                    <a href="#/dashboard" className="text-gray-600 hover:text-amo-orange font-medium">Dashboard</a>
                </div>
            </div>
        </nav>
    </header>
);

const CTASection: React.FC<{ agentTitle?: string }> = ({ agentTitle = "AI Agent" }) => (
    <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-breef-text-primary sm:text-4xl">
                Ready to Build Your {agentTitle}?
            </h2>
            <p className="mt-4 text-lg leading-6 text-breef-text-secondary">
                Let's turn your requirements into a reality. Start by creating a project brief with our AI assistant.
            </p>
            <a href="#/brief-generator" className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amo-orange hover:bg-opacity-90 sm:w-auto">
                Start Your AI Brief <ArrowRightIcon className="ml-2 w-5 h-5"/>
            </a>
        </div>
    </section>
);

interface AIAgentDetailPageProps {
    agentType: string | undefined;
}

const AIAgentDetailPage: React.FC<AIAgentDetailPageProps> = ({ agentType }) => {
  const agent = agentType ? agentData[agentType] : null;

  if (!agent) {
    return (
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-breef-text-primary tracking-tight sm:text-5xl">
              AI Agent Not Found
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-breef-text-secondary">
              The agent type you're looking for doesn't exist. Please check the URL or return to our services page.
            </p>
            <div className="mt-10">
              <a href="#/services/ai-agents" className="inline-block bg-amo-orange text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                Back to AI Agents
              </a>
            </div>
          </div>
        </div>
      );
  }

  return (
    <div className="bg-white">
      <Nav />
      <main>
        {/* Hero Section */}
        <div className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-block animate-scale-in">{agent.icon}</div>
                     <a href="#/services/ai-agents" className="block text-sm font-semibold text-amo-orange hover:underline mt-4">AI AGENT</a>
                    <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-breef-text-primary tracking-tight animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                        {agent.title}
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-breef-text-secondary animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        {agent.subtitle}
                    </p>
                </div>
            </div>
        </div>

        {/* Content Section */}
        <div className="py-20 lg:py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                    <div>
                        <h2 className="text-3xl font-extrabold text-breef-text-primary">Key Capabilities</h2>
                        <p className="mt-4 text-lg text-breef-text-secondary">
                            {agent.description}
                        </p>
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                           {agent.roi.map((item: { metric: string, label: string}) => (
                               <div key={item.label}>
                                   <p className="text-4xl font-extrabold text-amo-orange">{item.metric}</p>
                                   <p className="mt-1 text-sm font-semibold text-breef-text-secondary">{item.label}</p>
                               </div>
                           ))}
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 space-y-4">
                        {agent.features.map((feature: string) => (
                             <div key={feature} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-breef-border">
                                <div className="flex-shrink-0">
                                    <CheckIcon className="w-6 h-6 text-amo-orange" />
                                </div>
                                <p className="ml-4 text-md font-medium text-breef-text-primary">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">Perfect For...</h2>
                    <p className="mt-4 text-lg text-breef-text-secondary">
                        Our {agent.title} is designed to deliver value across multiple industries and scenarios.
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agent.useCases.map((useCase: { name: string, description: string }) => (
                        <div key={useCase.name} className="bg-gray-50/80 p-8 rounded-2xl border border-breef-border">
                            <h3 className="text-xl font-bold text-breef-text-primary">{useCase.name}</h3>
                            <p className="mt-2 text-breef-text-secondary">{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-amo-process-dark py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center max-w-3xl mx-auto">
                    <CpuChipIcon className="w-12 h-12 mx-auto text-amo-orange" />
                    <h2 className="mt-4 text-3xl font-extrabold">Powered by an Enterprise-Grade Stack</h2>
                    <p className="mt-4 text-lg text-gray-400">
                       We build your agents on a foundation of best-in-class AI frameworks and scalable infrastructure to ensure reliability and performance.
                    </p>
                    <div className="mt-8 flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-gray-300 font-medium">
                        <span>CrewAI</span>
                        <span>&bull;</span>
                        <span>LangChain</span>
                        <span>&bull;</span>
                        <span>Supabase</span>
                         <span>&bull;</span>
                        <span>Gemini API</span>
                        <span>&bull;</span>
                        <span>Vercel</span>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <CTASection agentTitle={agent.title} />
      <SiteFooter />
    </div>
  );
};

export default AIAgentDetailPage;
