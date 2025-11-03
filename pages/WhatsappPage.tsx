import React, { useState, useEffect, useRef } from 'react';
import { 
    ArrowRightIcon,
    BuildingOfficeIcon,
    ChartBarIcon,
    ChatBubbleLeftRightIcon,
    CheckIcon,
    ChevronDownIcon,
    CircleStackIcon,
    CogIcon,
    MegaphoneIcon,
    PhoneIcon,
    RocketLaunchIcon,
    ShoppingCartIcon,
    UsersIcon,
    WrenchScrewdriverIcon
} from '../components/icons';

const HeroSection = () => (
    <section className="relative bg-gray-50 pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-breef-text-primary tracking-tight">
                    Automate, Sell & Support — <span className="text-amo-whatsapp-green">All on WhatsApp</span>
                </h1>
                <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-breef-text-secondary">
                    We help businesses turn WhatsApp into a 24/7 sales and customer service channel — powered by automation, AI agents, and real data. No delays. No missed messages. Just seamless conversations that convert into revenue.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <a href="#/contact" className="inline-flex items-center justify-center bg-amo-whatsapp-green text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        Book a Free Automation Audit
                    </a>
                </div>
            </div>
            <div className="mt-12 lg:mt-0 flex justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-amo-whatsapp-green/10 rounded-full flex items-center justify-center">
                            <ChatBubbleLeftRightIcon className="w-6 h-6 text-amo-whatsapp-green" />
                        </div>
                        <div>
                            <p className="font-bold text-breef-text-primary">AMO AI Assistant</p>
                            <p className="text-sm text-green-500 flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>Always Active</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-3 flex flex-col items-start">
                        <div className="bg-gray-100 p-3 rounded-lg self-start animate-fade-in-up" style={{ animationDelay: '200ms' }}>Hi! How can I help you today? 👋</div>
                        <div className="bg-gray-100 p-3 rounded-lg self-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>Check my order status</div>
                        <div className="bg-green-100 text-green-800 p-3 rounded-lg self-end animate-fade-in-up" style={{ animationDelay: '600ms' }}>Your order #4821 is out for delivery! 📦</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const CountUp: React.FC<{ end: number; suffix?: string; prefix?: string; decimals?: number }> = ({ end, suffix = '', prefix = '', decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const duration = 1500;

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let startTimestamp: number | null = null;
                const step = (timestamp: number) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    const currentNum = progress * end;
                    setCount(parseFloat(currentNum.toFixed(decimals)));
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, decimals]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
};


const WhyMattersSection = () => {
    const kpis = [
        { value: 98, suffix: '%', label: 'Open Rate', desc: 'vs 20% for email - your messages actually get seen' },
        { value: 70, suffix: '%', label: 'Response Rate', desc: 'Customers engage instantly with automated conversations' },
        { value: 5, prefix: '5-10', suffix: 'x', label: 'ROI Potential', desc: 'From automated sales, support, and customer retention' }
    ];
    return (
        <section className="bg-amo-process-dark text-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold">Why WhatsApp Automation Matters</h2>
                    <p className="mt-4 text-lg text-gray-400">Your customers are already on WhatsApp — over 2 billion people use it daily. AMO AI connects your brand to them with AI-powered chat flows, CRM integrations, and automated campaigns that scale your communication and sales.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {kpis.map(kpi => (
                        <div key={kpi.label} className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                            <p className="text-5xl lg:text-6xl font-extrabold text-amo-whatsapp-green">
                                <CountUp end={kpi.value} suffix={kpi.suffix} prefix={kpi.prefix === '5-10' ? '5-10' : ''} />
                            </p>
                            <h3 className="mt-4 text-xl font-bold">{kpi.label}</h3>
                            <p className="mt-2 text-gray-400">{kpi.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CoreServicesSection = () => {
    const services = [
        { icon: <WrenchScrewdriverIcon className="w-8 h-8 text-amo-whatsapp-green" />, title: 'WhatsApp Automation Setup', subhead: 'Conversations that run themselves.', bullets: ['Auto-replies', 'Lead capture', 'Payment & order updates'] },
        { icon: <UsersIcon className="w-8 h-8 text-amo-whatsapp-green" />, title: 'AI Chat Agents & Copilots', subhead: 'Your 24/7 sales and support team.', bullets: ['Conversational memory', 'Smart human handoff', 'Personalized tone'] },
        { icon: <CircleStackIcon className="w-8 h-8 text-amo-whatsapp-green" />, title: 'CRM & Pipeline Integration', subhead: 'Every chat becomes a lead.', bullets: ['Lead syncing', 'Follow-up automations', 'Deal tracking'] },
        { icon: <MegaphoneIcon className="w-8 h-8 text-amo-whatsapp-green" />, title: 'WhatsApp Marketing Campaigns', subhead: 'Broadcast messages that get read.', bullets: ['Broadcast scheduling', 'Segmentation', 'Catalog cards'] },
        { icon: <ShoppingCartIcon className="w-8 h-8 text-amo-whatsapp-green" />, title: 'E-commerce & Payment Flows', subhead: 'From chat to checkout in seconds.', bullets: ['Shopify/Stripe integration', 'Abandoned cart recovery', 'Order updates'] },
        { icon: <BuildingOfficeIcon className="w-8 h-8 text-amo-whatsapp-green" />, title: 'Industry Solutions', subhead: 'Tailored automation for every sector.', bullets: ['Booking/reservation bots', 'Menu/catalog sharing', 'Feedback & surveys'] }
    ];
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">Our Core Services</h2>
                </div>
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(s => (
                        <div key={s.title} className="bg-gray-50/80 p-8 rounded-2xl border border-breef-border">
                            {s.icon}
                            <h3 className="mt-5 text-xl font-bold text-breef-text-primary">{s.title}</h3>
                            <p className="mt-1 text-amo-whatsapp-green font-semibold">{s.subhead}</p>
                            <ul className="mt-4 space-y-2">
                                {s.bullets.map(b => <li key={b} className="flex items-start"><CheckIcon className="w-5 h-5 text-amo-whatsapp-green mr-2 mt-0.5 flex-shrink-0" /> <span className="text-breef-text-secondary">{b}</span></li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const UseCasesSection = () => {
    const cases = [
        { icon: <UsersIcon className="w-8 h-8 text-white"/>, title: 'Lead Generation Flow', flow: 'Ad → WhatsApp chat → AI qualifies lead → CRM sync → Auto follow-up → Payment link → Confirmation' },
        { icon: <ShoppingCartIcon className="w-8 h-8 text-white"/>, title: 'E-commerce Flow', flow: 'Customer chats → Browse product catalog → Adds to cart → Pays in-chat → Receives updates' },
        { icon: <PhoneIcon className="w-8 h-8 text-white"/>, title: 'Service Booking Flow', flow: 'Client messages → AI confirms slot → Invoice sent → Booking recorded → CRM updated' },
    ];
    return (
        <section className="py-20 lg:py-28 bg-amo-process-dark text-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold">Real-World Use Cases</h2>
                </div>
                <div className="mt-16 grid lg:grid-cols-3 gap-8">
                    {cases.map(c => (
                        <div key={c.title} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                             <div className="w-16 h-16 bg-amo-whatsapp-green rounded-xl flex items-center justify-center">{c.icon}</div>
                            <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
                            <p className="mt-3 text-gray-400 leading-relaxed">{c.flow.replace(/→/g, '→ ')}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ResultsSection = () => {
    const results = [
        { label: 'Response time', before: '2 hours', after: '< 2 minutes' },
        { label: 'Missed leads', before: '40%', after: '< 5%' },
        { label: 'Conversion rate', before: '12%', after: '38%' },
        { label: 'Customer satisfaction', before: '7 / 10', after: '9.4 / 10' }
    ];
    return (
        <section className="py-20 lg:py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">Results That Speak</h2>
                    <p className="mt-4 text-lg text-breef-text-secondary">Average improvement from AMO AI's WhatsApp automation clients.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {results.map(r => (
                        <div key={r.label} className="bg-white p-6 rounded-2xl border border-breef-border shadow-sm">
                            <p className="font-semibold text-breef-text-primary">{r.label}</p>
                            <div className="mt-3 flex items-center justify-between gap-4 text-2xl font-bold">
                                <span className="text-breef-text-secondary line-through">{r.before}</span>
                                <ArrowRightIcon className="w-6 h-6 text-gray-300 flex-shrink-0" />
                                <span className="text-amo-whatsapp-green">{r.after}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProcessSection = () => {
    const steps = [
        { title: 'Discovery Call', subtitle: 'Understand Your Goals' },
        { title: 'Workflow Blueprint', subtitle: 'Design Your Automation Flow' },
        { title: 'Development & Integration', subtitle: 'Build and Connect Everything' },
        { title: 'AI Training & Testing', subtitle: 'Train Your Chat Agents' },
        { title: 'Launch & Optimize', subtitle: 'Go Live & Measure Results' }
    ];
    return (
        <section className="py-20 lg:py-28 bg-amo-process-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold">The AMO AI WhatsApp Process</h2>
                </div>
                <div className="mt-16 grid md:grid-cols-5 gap-8">
                    {steps.map((step, i) => (
                        <div key={step.title} className="bg-white/5 p-6 rounded-xl border border-white/10 text-center md:text-left">
                            <div className="w-10 h-10 flex items-center justify-center bg-amo-whatsapp-green text-amo-process-dark font-bold rounded-full mb-4">{i + 1}</div>
                            <h3 className="font-bold">{step.title}</h3>
                            <p className="text-sm text-amo-whatsapp-green">{step.subtitle}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                     <a href="#/brief-generator" className="inline-block bg-amo-whatsapp-green text-amo-process-dark font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                        Start Your WhatsApp Project
                    </a>
                    <p className="text-gray-400 mt-2 text-sm">Launch in as little as 2 weeks</p>
                </div>
            </div>
        </section>
    );
};

const TechSection = () => {
    const techs = ['Supabase', 'n8n', 'CopilotKit', 'CrewAI', 'LangChain', 'Stripe', 'WhatsApp Business API', 'Cloudinary', 'Webflow'];
    return(
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">Built on Proven Technology</p>
                <div className="mt-6 flex justify-center items-center flex-wrap gap-x-6 gap-y-2">
                    {techs.map(t => <span key={t} className="font-medium text-gray-500">{t}</span>)}
                </div>
            </div>
        </section>
    );
};

const FaqItem: React.FC<{ q: string, a: string, isOpen: boolean, onClick: () => void }> = ({ q, a, isOpen, onClick }) => (
    <div className="border-b border-breef-border">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5">
            <span className="font-semibold text-breef-text-primary">{q}</span>
            <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
                 <p className="pb-5 text-breef-text-secondary">{a}</p>
            </div>
        </div>
    </div>
);

const FaqSection = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const faqs = [
        { q: "Do you use the official WhatsApp Business API?", a: "Yes, we only use the official WhatsApp Business API to ensure reliability, scalability, and access to all official features for your business." },
        { q: "Can I integrate WhatsApp with my CRM or database?", a: "Absolutely. We specialize in integrating your WhatsApp AI Assistant with your existing systems like Salesforce, HubSpot, or a custom Supabase backend for seamless data flow." },
        { q: "Is this AI or just a bot?", a: "This is true AI. Our agents go beyond simple keyword responses. They understand context, maintain conversation history, and use advanced models to handle complex queries, just like a human agent." },
        { q: "How long does setup take?", a: "A basic setup can be launched in as little as 2 weeks. More complex integrations may take longer, but our 8-week process ensures a fast track to a production-ready solution." }
    ];
    return(
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">Frequently Asked Questions</h2>
                </div>
                <div className="mt-12">
                    {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />)}
                </div>
            </div>
        </section>
    );
};


const FinalCTASection = () => (
    <section className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto text-center py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
                Let’s automate your business on WhatsApp — start today.
            </h2>
            <p className="mt-4 text-lg leading-6 text-green-100">
                Whether you want faster sales responses, automated booking, or AI-driven campaigns, our team will design and deploy your custom WhatsApp system — from strategy to launch.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a href="#/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-green-700 bg-white hover:bg-green-50">
                   <PhoneIcon className="w-5 h-5 mr-2"/> Book a Demo Call
                </a>
                <a href="#/brief-generator" className="inline-flex items-center justify-center px-6 py-3 border border-white/50 rounded-lg shadow-sm text-base font-medium text-white bg-white/10 hover:bg-white/20">
                    Start a Project
                </a>
            </div>
        </div>
    </section>
);


const WhatsappPage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <WhyMattersSection />
            <CoreServicesSection />
            <UseCasesSection />
            <ResultsSection />
            <ProcessSection />
            <TechSection />
            <FaqSection />
            <FinalCTASection />
        </>
    );
};

export default WhatsappPage;
