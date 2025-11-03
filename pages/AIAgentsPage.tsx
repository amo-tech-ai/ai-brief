import React from 'react';
import { ArrowRightIcon, ChartBarIcon, CodeIcon, CpuChipIcon, HeartIcon, MegaphoneIcon, UsersIcon } from '../components/icons';
import { agentData } from '../data/agentData';

const HeroSection = () => (
    <section className="relative bg-gray-50 pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-breef-text-primary tracking-tight">
                Deploy Your Autonomous <span className="text-amo-orange">AI Workforce</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-breef-text-secondary">
                Custom AI agents that handle sales, support, and operations, so your team can focus on growth. These aren't just chatbots; they're goal-oriented systems that think, act, and learn.
            </p>
            <div className="mt-10">
                <a href="#/contact" className="inline-block bg-amo-orange text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                    Build Your Custom Agent
                </a>
            </div>
        </div>
    </section>
);

const AgentsGridSection = () => {
    const agents = [
        { id: 'sales', icon: <ChartBarIcon className="w-8 h-8 text-amo-orange"/>, title: "Sales Agents", desc: "Close deals while you sleep. Qualify leads, book meetings, and follow up 24/7.", href: "#/services/ai-agents/sales" },
        { id: 'support', icon: <HeartIcon className="w-8 h-8 text-amo-orange"/>, title: "Support Agents", desc: "Instant, 24/7 customer happiness. Resolve issues, answer questions, and escalate when needed.", href: "#/services/ai-agents/support" },
        { id: 'marketing', icon: <MegaphoneIcon className="w-8 h-8 text-amo-orange"/>, title: "Marketing Agents", desc: "Your automated content and strategy engine. Write posts, analyze trends, and manage campaigns.", href: "#/services/ai-agents/marketing" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">Meet Your New Digital Team</h2>
                    <p className="mt-4 text-lg text-breef-text-secondary">We build and train AI agents tailored to your specific business goals.</p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {agents.map(agent => (
                         <a key={agent.title} href={agent.href} className="block bg-gray-50 p-8 rounded-xl border border-breef-border transition-all duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-1.5 hover:border-amo-orange/30">
                            <div className="mb-5 transition-transform duration-300 ease-in-out group-hover:scale-110">{agent.icon}</div>
                            <h3 className="text-2xl font-bold text-breef-text-primary">{agent.title}</h3>
                            <p className="mt-3 text-breef-text-secondary">{agent.desc}</p>
                            <p className="mt-5 font-semibold text-amo-orange flex items-center">
                                View Details <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"/>
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowItWorksSection = () => (
    <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-breef-text-primary">From Goal to Autonomous Agent</h2>
                <p className="mt-4 text-lg text-breef-text-secondary">Our process for building your AI workforce is collaborative, transparent, and fast.</p>
            </div>
            <div className="mt-20 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200" aria-hidden="true"></div>
                <div className="relative grid md:grid-cols-4 gap-10">
                    <div className="text-center bg-gray-50 px-2">
                        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white rounded-full border-4 border-gray-50 shadow-sm"><UsersIcon className="w-8 h-8 text-amo-orange" /></div>
                        <h3 className="mt-6 font-bold text-breef-text-primary">1. Define the Mission</h3>
                        <p className="mt-1 text-sm text-breef-text-secondary">We map out your agent's goals, tools, and knowledge base.</p>
                    </div>
                     <div className="text-center bg-gray-50 px-2">
                        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white rounded-full border-4 border-gray-50 shadow-sm"><CodeIcon className="w-8 h-8 text-amo-orange" /></div>
                        <h3 className="mt-6 font-bold text-breef-text-primary">2. Develop the Brain</h3>
                        <p className="mt-1 text-sm text-breef-text-secondary">We build the core logic using frameworks like CrewAI and LangChain.</p>
                    </div>
                     <div className="text-center bg-gray-50 px-2">
                        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white rounded-full border-4 border-gray-50 shadow-sm"><CpuChipIcon className="w-8 h-8 text-amo-orange" /></div>
                        <h3 className="mt-6 font-bold text-breef-text-primary">3. Train & Test</h3>
                        <p className="mt-1 text-sm text-breef-text-secondary">We run simulations to ensure your agent performs reliably and accurately.</p>
                    </div>
                     <div className="text-center bg-gray-50 px-2">
                        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white rounded-full border-4 border-gray-50 shadow-sm"><ArrowRightIcon className="w-8 h-8 text-amo-orange" /></div>
                        <h3 className="mt-6 font-bold text-breef-text-primary">4. Deploy & Monitor</h3>
                        <p className="mt-1 text-sm text-breef-text-secondary">We launch your agent and monitor its performance to drive continuous improvement.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const CTASection = () => (
    <section className="bg-amo-process-dark">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to add an AI agent to your team?
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-300">
                Let's discuss how an autonomous agent can solve your biggest challenges.
            </p>
            <a
                href="#/brief-generator"
                className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amo-orange hover:bg-opacity-90 sm:w-auto"
            >
                Start an AI Agent Brief <ArrowRightIcon className="ml-2 w-5 h-5"/>
            </a>
        </div>
    </section>
);


const AIAgentsPage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AgentsGridSection />
            <HowItWorksSection />
            <CTASection />
        </>
    );
};

export default AIAgentsPage;
