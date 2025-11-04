import React from 'react';
import {
    ArrowRightIcon,
    ChatBubbleLeftRightIcon,
    CodeIcon,
    CpuChipIcon,
    DevicePhoneMobileIcon,
    MagnifyingGlassIcon,
    MegaphoneIcon,
    PencilSquareIcon,
    RocketLaunchIcon
} from '../components/icons';

const ServicesPage: React.FC = () => {
    const HeroSection = () => (
        <section className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-28">
            <div className="absolute inset-0 bg-gray-50/50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-breef-text-primary tracking-tight">
                    Intelligent AI Services — Built for Modern Teams
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-breef-text-secondary">
                    From concept to production, we build scalable AI solutions that transform how your business works, grows, and innovates.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <a href="#/brief-generator" className="inline-block bg-amo-orange text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                        Start Your AI Brief
                    </a>
                    <a href="#/projects" className="inline-block bg-white text-breef-text-primary font-semibold px-8 py-4 rounded-lg border border-breef-border hover:bg-gray-100 transition-all">
                        See Case Studies
                    </a>
                </div>
            </div>
        </section>
    );

    const ServicesGrid = () => {
        const services = [
            { 
                icon: <CodeIcon className="w-8 h-8 text-amo-orange"/>, 
                title: "AI Web Design & Development", 
                desc: "From prompt to pixel — build production-ready websites with AI-assisted design, copy, and code.",
                href: "#/services/ai-web-dev"
            },
            { 
                icon: <DevicePhoneMobileIcon className="w-8 h-8 text-amo-orange"/>, 
                title: "AI App Development", 
                desc: "Adaptive apps that learn, automate, and analyze in real time — for web, mobile, and desktop.",
                href: "#/services/ai-app-dev"
            },
            { 
                icon: <MegaphoneIcon className="w-8 h-8 text-amo-orange"/>, 
                title: "Social Media Automation", 
                desc: "Generate on-brand content, schedule campaigns, and measure performance automatically.",
                href: "#/services/social-media" 
            },
            { 
                icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-amo-orange"/>, 
                title: "WhatsApp AI Assistant", 
                desc: "Engage customers 24/7 through personalized AI messaging on WhatsApp and social channels.",
                href: "#/services/whatsapp"
            },
            { 
                icon: <CpuChipIcon className="w-8 h-8 text-amo-orange"/>, 
                title: "Custom AI Agents", 
                desc: "Deploy an autonomous AI workforce for sales, support, and complex operational tasks.",
                href: "#/services/ai-agents"
            },
        ];

        return (
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {services.map(s => (
                             <a key={s.title} href={s.href} className="block bg-white p-8 rounded-xl shadow-sm border border-breef-border transition-all duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.03] hover:border-amo-orange/30 hover:bg-orange-50/20 hover:ring-4 hover:ring-amo-orange/5">
                                <div className="mb-5 transition-transform duration-300 ease-in-out group-hover:scale-110">{s.icon}</div>
                                <h3 className="text-2xl font-bold text-breef-text-primary">{s.title}</h3>
                                <p className="mt-3 text-breef-text-secondary">{s.desc}</p>
                                <p className="mt-5 font-semibold text-amo-orange flex items-center">
                                    Learn More <ArrowRightIcon className="ml-2 w-4 h-4 transition-all duration-300 ease-in-out opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"/>
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const ProcessSection = () => {
        const steps = [
            { icon: <MagnifyingGlassIcon className="w-8 h-8 text-amo-orange"/>, name: 'Discover', desc: 'Define goals and data sources.' },
            { icon: <PencilSquareIcon className="w-8 h-8 text-amo-orange"/>, name: 'Design', desc: 'UX flows and AI logic.' },
            { icon: <CodeIcon className="w-8 h-8 text-amo-orange"/>, name: 'Develop', desc: 'Integrate LangChain, Supabase, etc.' },
            { icon: <RocketLaunchIcon className="w-8 h-8 text-amo-orange"/>, name: 'Deploy', desc: 'Launch with OpenAI + Vercel.' }
        ];

        return (
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-breef-text-primary">How We Work</h2>
                        <p className="mt-4 text-lg text-breef-text-secondary">Our agile, collaborative process ensures we build the right solution, efficiently and effectively.</p>
                    </div>
                    <div className="mt-20 relative">
                         <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200" aria-hidden="true"></div>
                         <div className="relative grid md:grid-cols-4 gap-10">
                            {steps.map((step) => (
                                <div key={step.name} className="relative bg-white px-4 text-center">
                                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gray-100 rounded-full border-4 border-white shadow-sm">{step.icon}</div>
                                    <h3 className="mt-6 text-xl font-bold text-breef-text-primary">{step.name}</h3>
                                    <p className="mt-2 text-breef-text-secondary">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    
    const TechStackRibbon = () => (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Powered by the industry’s most trusted AI stack</p>
                    <div className="mt-6 flex justify-center items-center flex-wrap gap-x-8 gap-y-4 text-gray-400 font-medium">
                        <span>LangChain</span>
                        <span>&bull;</span>
                        <span>Supabase</span>
                        <span>&bull;</span>
                        <span>CopilotKit</span>
                        <span>&bull;</span>
                        <span>Crew AI</span>
                        <span>&bull;</span>
                         <span>Claude</span>
                        <span>&bull;</span>
                        <span>OpenAI</span>
                         <span>&bull;</span>
                        <span>Vercel</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const CTASection = () => (
        <section className="bg-white">
            <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-breef-text-primary sm:text-4xl">
                    Ready to Start Your AI Project?
                </h2>
                <p className="mt-4 text-lg leading-6 text-breef-text-secondary">
                    Use our AI Brief Generator to get a scoped plan in minutes.
                </p>
                <a
                    href="#/brief-generator"
                    className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amo-orange hover:bg-opacity-90 sm:w-auto"
                >
                    Start Your AI Brief <ArrowRightIcon className="ml-2 w-5 h-5"/>
                </a>
            </div>
        </section>
    );

    return (
        <div className="bg-white">
            <HeroSection />
            <ServicesGrid />
            <ProcessSection />
            <TechStackRibbon />
            <CTASection />
        </div>
    );
};

export default ServicesPage;