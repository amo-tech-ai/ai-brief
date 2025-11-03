import React, { useState, useEffect, useRef } from 'react';
import SiteFooter from '../components/SiteFooter';
import { ArrowRightIcon, ArrowUpRightIcon } from '../components/icons';

const Nav = () => (
    <header className="absolute top-0 left-0 right-0 z-20">
       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
           <div className="flex justify-between items-center">
               <a href="#/" className="flex items-center space-x-2">
                   <div className="bg-white/20 text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">A</div>
                   <span className="font-bold text-white text-2xl">AMO AI</span>
               </a>
                <div className="hidden md:flex items-center space-x-8">
                   <a href="#/services" className="text-gray-300 hover:text-white font-medium">Services</a>
                   <a href="#/process" className="text-gray-300 hover:text-white font-medium">Process</a>
                   <a href="#/projects" className="text-white font-semibold">Projects</a>
               </div>
               <div>
                   <a href="#/dashboard" className="text-gray-300 hover:text-white font-medium">Dashboard</a>
               </div>
           </div>
       </nav>
   </header>
);

const CountUp: React.FC<{ end: number; suffix?: string; prefix?: string; decimals?: number }> = ({ end, suffix = '', prefix = '', decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let startTimestamp: number | null = null;
                const duration = 1500;
                const step = (timestamp: number) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    const currentNum = progress * end;
                    setCount(parseFloat(currentNum.toFixed(decimals)));
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        setCount(end);
                    }
                };
                window.requestAnimationFrame(step);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);
        return () => { if(ref.current) observer.unobserve(ref.current) };
    }, [end, decimals]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const HeroSection = () => (
    <section className="relative bg-amo-process-dark text-white pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">We Move At Your Speed</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Our AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-amo-process-orange to-amo-process-secondary">Success Stories</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
                Discover how we've transformed businesses with AI applications delivered in 8 weeks. Real projects. Real results. Real impact.
            </p>
            <div className="mt-10">
                <a href="#/brief-generator" className="inline-block bg-gradient-to-r from-amo-process-orange to-amo-process-secondary text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    Start Your Project
                </a>
            </div>
        </div>
    </section>
);

const FeaturedStoriesSection = () => {
    const projects = [
        {
            category: 'E-commerce',
            name: 'FashionOS',
            title: 'AI-Powered Fashion Marketplace',
            challenge: 'A fashion startup needed a full e-commerce platform with AI-driven product recommendations and inventory management in 8 weeks.',
            solution: 'We deployed a complete marketplace with AI recommendations, payment processing, and CRM integration using Supabase, Stripe, and custom ML models.',
            metrics: [
                { value: 97, label: 'User Satisfaction', suffix: '%' },
                { value: 65, label: 'Monthly Users', prefix: '+', suffix: 'K' },
                { value: 300, label: 'Conversion Increase', suffix: '%' }
            ],
            tech: ['React', 'Supabase', 'Stripe', 'OpenAI'],
            testimonial: {
                quote: "AMO AI transformed our vision into reality. The AI recommendations increased our average order value by 40%.",
                author: "Sarah Chen, Founder"
            }
        },
        {
            category: 'SaaS',
            name: 'AutoMax AI',
            title: '$4.2M Monthly Revenue With Automation',
            challenge: 'Manual car lead processing was costing $50K/month and losing potential customers to competitors due to slow response times.',
            solution: 'Developed a multi-agent AI system to qualify leads, schedule test drives, and automate follow-ups via WhatsApp and email.',
            metrics: [
                { value: 4.2, label: 'Monthly Revenue', prefix: '$', suffix: 'M', decimals: 1 },
                { value: 90, label: 'Automation Rate', suffix: '%' },
                { value: -85, label: 'Processing Time', suffix: '%' }
            ],
            tech: ['FastAPI', 'CrewAI', 'WhatsApp API', 'HubSpot'],
            testimonial: {
                quote: "This AI assistant freed up our sales team to focus on closing deals. ROI was 7x in the first quarter.",
                author: "Michael Rodriguez, CEO"
            }
        },
        {
            category: 'Tourism',
            name: 'I Love Medellín',
            title: 'Website Translation Platform',
            challenge: 'A tourism company needed to manage 1,000+ hotel listings with real-time translation to 8 languages.',
            solution: 'Created an AI-powered booking platform with automated multi-language support and dynamic pricing engine.',
            metrics: [
                { value: 98, label: 'International Bookings', prefix: '+', suffix: '%' },
                { value: 8, label: 'Languages' },
                { value: 97.5, label: 'Translation Accuracy', suffix: '%', decimals: 1 }
            ],
            tech: ['Next.js', 'Supabase', 'Google AI', 'Stripe'],
            testimonial: {
                quote: "The platform expanded our market reach by 400%. AI translation quality rivals human translators.",
                author: "Carlos Martinez, Director"
            }
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">Featured Success Stories</h2>
                    <p className="mt-4 text-lg text-breef-text-secondary">Real AI applications we've delivered to brand-new or local businesses in just 8 weeks</p>
                </div>
                <div className="mt-16 space-y-24">
                    {projects.map((project, index) => (
                        <div key={project.name} className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                                <span className="inline-block bg-orange-100 text-amo-process-orange px-3 py-1 rounded-full text-sm font-semibold">{project.category}</span>
                                <h3 className="text-4xl font-bold text-breef-text-primary">{project.name}</h3>
                                <p className="text-xl font-semibold text-amo-process-orange">{project.title}</p>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold text-breef-text-primary">The Challenge</h4>
                                        <p className="text-breef-text-secondary">{project.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-breef-text-primary">Our Solution</h4>
                                        <p className="text-breef-text-secondary">{project.solution}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-center bg-gray-50 p-4 rounded-xl">
                                    {project.metrics.map(metric => (
                                        <div key={metric.label}>
                                            <p className="text-2xl font-bold text-amo-process-orange">
                                                <CountUp end={metric.value} suffix={metric.suffix} prefix={metric.prefix} decimals={metric.decimals} />
                                            </p>
                                            <p className="text-sm text-breef-text-secondary">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-2">Tech Stack:</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => <span key={t} className="bg-gray-200 text-gray-700 px-3 py-1 text-sm font-medium rounded-full">{t}</span>)}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                <div className="aspect-square bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl flex items-center justify-center">
                                    <ArrowUpRightIcon className="w-16 h-16 text-gray-400" />
                                </div>
                                <blockquote className="mt-6 text-xl text-breef-text-primary italic">
                                    "{project.testimonial.quote}"
                                </blockquote>
                                <p className="mt-4 font-semibold text-breef-text-secondary">— {project.testimonial.author}</p>
                                <button className="mt-6 w-full text-center py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition">
                                    Read Full Case Study
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const TechStackSection = () => {
    const tech = {
        'Frontend & Development': ['Vite', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        'AI & Orchestration': ['CrewAI', 'LangChain', 'Anthropic', 'OpenAI', 'CopilotKit'],
        'AI Intelligence & Assist': ['Cursor', 'Perplexity', 'ChatGPT', 'Claude'],
        'Data & Infrastructure': ['Supabase', 'PostgreSQL', 'Firebase', 'Stripe']
    };
    const metrics = [
        { value: 20, label: 'Technical Platforms Mastered', suffix: '+' },
        { value: 98.8, label: 'Avg AI Accuracy', suffix: '%' },
        { value: 24, label: 'Support & Uptime', suffix: '/7' }
    ];

    return (
        <section className="py-20 lg:py-28 bg-amo-process-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold">We Build With The Best</h2>
                    <p className="mt-4 text-lg text-gray-400">Over 20 cutting-edge AI tools and proven technical platforms to bring your vision to life.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(tech).map(([category, tools]) => (
                        <div key={category} className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="font-bold text-white">{category}</h3>
                            <ul className="mt-4 space-y-2 text-gray-400">
                                {tools.map(tool => <li key={tool}>{tool}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                    {metrics.map(metric => (
                        <div key={metric.label}>
                            <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amo-process-orange to-amo-process-secondary">
                                <CountUp end={metric.value} suffix={metric.suffix} decimals={metric.label.includes('Accuracy') ? 1 : 0} />
                            </p>
                            <p className="mt-2 text-gray-400">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalCTASection = () => (
    <section className="bg-gradient-to-r from-amo-process-orange to-amo-process-secondary text-white">
        <div className="max-w-4xl mx-auto text-center py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
             <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">ARE WE A FIT FOR EACH OTHER?</span>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
                Ready to Be Our Next Success Story?
            </h2>
            <p className="mt-4 text-lg leading-6 text-orange-100">
                Transform your business with AI applications delivered in just 8 weeks. Join the companies already achieving 3× ROI with our proven process.
            </p>
            <div className="mt-10">
                <a
                    href="#/brief-generator"
                    className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-lg shadow-md text-base font-medium text-amo-process-orange bg-white hover:bg-orange-50 sm:w-auto"
                >
                    Start Your Project Journey
                </a>
            </div>
        </div>
    </section>
);


const ProjectsPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Nav />
            <main>
                <HeroSection />
                <FeaturedStoriesSection />
                <TechStackSection />
                <FinalCTASection />
            </main>
            <SiteFooter />
        </div>
    );
};

export default ProjectsPage;