import React from 'react';
import { ArrowRightIcon, ChatBubbleLeftRightIcon, CodeIcon, DevicePhoneMobileIcon, MegaphoneIcon } from '../components/icons';

const HomePage: React.FC = () => {

    const Nav = () => (
         <header className="absolute top-0 left-0 right-0 z-20">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex justify-between items-center">
                    <a href="#/" className="flex items-center space-x-2">
                        <div className="bg-breef-text-primary text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
                            A
                        </div>
                        <span className="font-bold text-breef-text-primary text-2xl">AMO AI</span>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#/services" className="text-gray-600 hover:text-amo-orange font-medium">Services</a>
                        <a href="#process" className="text-gray-600 hover:text-amo-orange font-medium">Process</a>
                        <a href="#pricing" className="text-gray-600 hover:text-amo-orange font-medium">Pricing</a>
                    </div>
                    <div>
                        <a href="#/dashboard" className="text-gray-600 hover:text-amo-orange font-medium">
                            Dashboard
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );

    const HeroSection = () => (
        <section className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-28">
            <div className="absolute inset-0 bg-gray-50/50"></div>
             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-breef-text-primary tracking-tight">
                    Turn Ideas into <span className="text-amo-orange">AI-Powered</span> Applications.
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-breef-text-secondary">
                    Smarter automation. Measurable growth. Real results.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <a href="#/brief-generator" className="inline-block bg-amo-orange text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                        Start Your AI Brief
                    </a>
                    <a href="#/projects" className="inline-block bg-white text-breef-text-primary font-semibold px-8 py-4 rounded-lg border border-breef-border hover:bg-gray-100 transition-all">
                        See Live Projects
                    </a>
                </div>
            </div>
        </section>
    );

    const ServicesSection = () => {
        const services = [
            { icon: <CodeIcon className="w-8 h-8 text-amo-orange"/>, title: "AI Web Dev", desc: "Custom AI-powered websites and web applications." },
            { icon: <DevicePhoneMobileIcon className="w-8 h-8 text-amo-orange"/>, title: "AI App Dev", desc: "Intelligent, AI-driven mobile applications." },
            { icon: <MegaphoneIcon className="w-8 h-8 text-amo-orange"/>, title: "Social Media Automation", desc: "AI solutions for smart social media marketing." },
            { icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-amo-orange"/>, title: "WhatsApp AI Assistant", desc: "Build intelligent WhatsApp business chatbots." },
        ];

        return (
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-breef-text-primary">Our Core Services</h2>
                        <p className="mt-4 text-lg text-breef-text-secondary">We build intelligent solutions for modern business challenges.</p>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map(s => (
                            <div key={s.title} className="bg-white p-8 rounded-xl shadow-sm border border-breef-border hover:shadow-lg transition-shadow group">
                                <div className="mb-4">{s.icon}</div>
                                <h3 className="text-xl font-bold text-breef-text-primary">{s.title}</h3>
                                <p className="mt-2 text-breef-text-secondary">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

     const ProcessSection = () => {
        const steps = [
            { name: 'Design Sprint', desc: 'Collaborate to define goals and map out your vision.' },
            { name: 'Rapid Build', desc: 'Develop your MVP with agile, AI-assisted coding.' },
            { name: 'Testing & QA', desc: 'Ensure performance, security, and user experience.' },
            { name: 'Launch & Scale', desc: 'Deploy your application and plan for future growth.' }
        ];

        return (
            <section id="process" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-breef-text-primary">From Brief to Launch in 8 Weeks.</h2>
                        <p className="mt-4 text-lg text-breef-text-secondary">Our streamlined process ensures quality and speed.</p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-4 gap-10">
                        {steps.map((step, index) => (
                            <div key={step.name} className="text-center">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 text-amo-orange rounded-full text-2xl font-bold">{index + 1}</div>
                                <h3 className="mt-6 text-xl font-bold text-breef-text-primary">{step.name}</h3>
                                <p className="mt-2 text-breef-text-secondary">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };
    
    const PricingSection = () => (
         <section id="pricing" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">Investment Levels</h2>
                    <p className="mt-4 text-lg text-breef-text-secondary">Clear pricing for projects of any scale.</p>
                </div>
                <div className="mt-16 grid lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-breef-border">
                        <h3 className="text-xl font-bold">MVP</h3>
                        <p className="mt-4 text-4xl font-extrabold">$10k+</p>
                        <ul className="mt-6 space-y-2 text-breef-text-secondary"><li>Core AI Feature</li><li>1 Platform (Web/Mobile)</li><li>Basic UI/UX</li></ul>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-amo-orange relative">
                        <p className="absolute top-0 -translate-y-1/2 bg-amo-orange text-white px-3 py-1 text-sm font-semibold rounded-full">Most Popular</p>
                        <h3 className="text-xl font-bold">Production Ready</h3>
                        <p className="mt-4 text-4xl font-extrabold">$25k+</p>
                        <ul className="mt-6 space-y-2 text-breef-text-secondary"><li>Multiple AI Features</li><li>Advanced UI/UX</li><li>Admin Dashboard</li></ul>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-breef-border">
                        <h3 className="text-xl font-bold">Enterprise</h3>
                        <p className="mt-4 text-4xl font-extrabold">$50k+</p>
                        <ul className="mt-6 space-y-2 text-breef-text-secondary"><li>Custom AI Models</li><li>Full-Scale Platform</li><li>Dedicated Support</li></ul>
                    </div>
                </div>
            </div>
        </section>
    );

    const CTASection = () => (
        <section className="bg-white">
            <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-breef-text-primary sm:text-4xl">
                    Ready to Build Your AI Vision?
                </h2>
                <p className="mt-4 text-lg leading-6 text-breef-text-secondary">
                    Let's turn your concept into a reality. Start by creating a project brief with our AI assistant.
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
            <Nav />
            <HeroSection />
            <ServicesSection />
            <ProcessSection />
            <PricingSection />
            <CTASection />
        </div>
    );
};

export default HomePage;