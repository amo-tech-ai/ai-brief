import React, { useState, useEffect, useRef } from 'react';
import SiteFooter from '../components/SiteFooter';
import { 
    ArrowRightIcon,
    CircleStackIcon,
    HeartIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    TrophyIcon,
    UsersIcon,
    ViewColumnsIcon
} from '../components/icons';

const AnimatedClock = () => (
    <div className="w-64 h-64 lg:w-96 lg:h-96 relative flex items-center justify-center">
        <div className="absolute w-full h-full border-2 border-gray-200 rounded-full"></div>
        <div className="absolute w-2/3 h-2/3 border-2 border-gray-100 rounded-full"></div>
        <div 
            className="absolute w-1 h-1 bg-amo-process-orange rounded-full"
            style={{ 
                animation: 'orbit1 8s linear infinite', 
                offsetPath: 'path("M128 20 A 108 108 0 1 1 128 236 A 108 108 0 1 1 128 20")'
            }}>
        </div>
         <div 
            className="absolute w-1.5 h-1.5 bg-amo-process-secondary rounded-full"
            style={{ 
                animation: 'orbit2 12s linear infinite',
                offsetPath: 'path("M128 50 A 78 78 0 1 1 128 206 A 78 78 0 1 1 128 50")'
            }}>
        </div>
        <style>{`
            @keyframes orbit1 { from { motion-offset: 0%; } to { motion-offset: 100%; } }
            @keyframes orbit2 { from { motion-offset: 100%; } to { motion-offset: 0%; } }
        `}</style>
    </div>
);

const HeroSection = () => (
    <section className="bg-amo-process-light text-amo-process-dark pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        8 Weeks. Not 8 Months.
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg text-gray-600">
                        Our AI-driven process delivers production-ready applications with unparalleled speed and precision.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <a href="#/brief-generator" className="inline-block bg-amo-process-orange text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                            Start Your AI Brief
                        </a>
                        <a href="#/projects" className="inline-block bg-white text-amo-process-dark font-semibold px-8 py-4 rounded-lg border border-breef-border hover:bg-gray-100 transition-all">
                            See Live Projects
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <AnimatedClock />
                </div>
            </div>
        </div>
    </section>
);

const TimelineSection = () => {
    const steps = [
        { icon: <ViewColumnsIcon className="w-8 h-8 text-amo-process-orange"/>, name: '1-2 Weeks: Design Sprint', desc: 'Collaborate to define goals and map out your vision with wireframes and prototypes.' },
        { icon: <CircleStackIcon className="w-8 h-8 text-amo-process-orange"/>, name: '3-5 Weeks: Rapid Build', desc: 'Develop your MVP with agile, AI-assisted coding and database integration.' },
        { icon: <ShieldCheckIcon className="w-8 h-8 text-amo-process-orange"/>, name: '6-7 Weeks: Test & Integrate', desc: 'Ensure performance, security, and user experience through rigorous QA.' },
        { icon: <RocketLaunchIcon className="w-8 h-8 text-amo-process-orange"/>, name: '8 Weeks: Launch & Scale', desc: 'Deploy your application and plan for future growth and iterations.' }
    ];
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">Our 8-Week Process</h2>
                    <p className="mt-4 text-lg text-breef-text-secondary">A transparent, structured timeline that gets you to market faster.</p>
                </div>
                <div className="mt-20 relative">
                     <div className="absolute top-10 left-0 hidden md:block w-full h-0.5 bg-gray-200" aria-hidden="true"></div>
                     <div className="relative grid md:grid-cols-4 gap-10">
                        {steps.map((step) => (
                            <div key={step.name} className="relative bg-white px-4 text-center">
                                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-amo-process-light text-amo-process-orange rounded-full border-4 border-white shadow-sm relative z-10">{step.icon}</div>
                                <h3 className="mt-6 text-lg font-bold text-breef-text-primary">{step.name}</h3>
                                <p className="mt-2 text-breef-text-secondary text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ComparisonSection = () => (
    <section className="py-20 lg:py-28 bg-amo-process-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-breef-text-primary">8 Weeks vs. 6+ Months</h2>
                <p className="mt-4 text-lg text-breef-text-secondary">How our AI-accelerated approach compares to traditional agencies.</p>
            </div>
            <div className="mt-16 max-w-4xl mx-auto">
                <div className="grid grid-cols-3 gap-4 font-semibold text-center text-breef-text-secondary">
                    <div>Traditional Agency</div>
                    <div></div>
                    <div className="text-amo-process-orange">AMO AI</div>
                </div>
                 <div className="mt-4 space-y-4">
                    {['Design', 'Build', 'Launch', 'Cost'].map(stage => (
                        <div key={stage} className="grid grid-cols-3 gap-4 items-center">
                            <div className="bg-gray-200/50 p-3 rounded-lg text-right">{stage === 'Cost' ? '$$$$' : '4-8 Weeks'}</div>
                            <div className="text-center font-bold text-breef-text-primary">{stage}</div>
                            <div className="bg-orange-100 p-3 rounded-lg text-left text-amo-process-orange">{stage === 'Cost' ? '$$' : '1-2 Weeks'}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const CountUp: React.FC<{ end: number; suffix?: string; }> = ({ end, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const duration = 1500;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const startTime = performance.now();
                    const animate = (currentTime: number) => {
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);
                        setCount(Math.floor(progress * end));
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };
                    requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const MetricsSection = () => {
    const metrics = [
        { icon: <HeartIcon className="w-8 h-8 text-amo-process-orange"/>, number: 98, suffix: '%', label: 'Client Satisfaction' },
        { icon: <RocketLaunchIcon className="w-8 h-8 text-amo-process-orange"/>, number: 2, suffix: 'x', label: 'Faster Time to Market' },
        { icon: <ShieldCheckIcon className="w-8 h-8 text-amo-process-orange"/>, number: 0.7, suffix: '%', label: 'Average Bug Rate' },
        { icon: <TrophyIcon className="w-8 h-8 text-amo-process-orange"/>, number: 15, suffix: '%', label: 'Avg. Performance Uplift' },
        { icon: <UsersIcon className="w-8 h-8 text-amo-process-orange"/>, number: 24, suffix: '/7', label: 'Dedicated Support' },
        { icon: <CircleStackIcon className="w-8 h-8 text-amo-process-orange"/>, number: 100, suffix: '%', label: 'Scalable Architecture' },
    ];
    return(
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">Our Track Record</h2>
                    <p className="mt-4 text-lg text-breef-text-secondary">We deliver results you can measure.</p>
                </div>
                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
                    {metrics.map(metric => (
                        <div key={metric.label} className="bg-amo-process-light/50 p-8 rounded-xl text-center">
                            {metric.icon}
                            <div className="mt-4 text-4xl lg:text-5xl font-extrabold text-amo-process-orange">
                                <CountUp end={metric.number} suffix={metric.suffix} />
                            </div>
                            <p className="mt-2 text-breef-text-secondary font-medium">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

const CalculatorSection = () => (
    <section className="py-20 lg:py-28 bg-amo-process-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-breef-text-primary">Estimate Your Project Timeline</h2>
                <p className="mt-4 text-lg text-breef-text-secondary">Select a project scope to see our estimated delivery schedule.</p>
            </div>
            <div className="mt-16 grid lg:grid-cols-3 gap-8">
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-breef-border text-center group hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold">MVP</h3>
                    <p className="mt-4 text-4xl font-extrabold text-amo-process-orange">4–6 Weeks</p>
                    <p className="mt-2 text-breef-text-secondary">Core feature, basic UI/UX, one platform.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-amo-process-orange text-center group hover:scale-105 hover:shadow-2xl transition-all duration-300 relative">
                    <p className="absolute top-0 -translate-y-1/2 bg-amo-process-orange text-white px-3 py-1 text-sm font-semibold rounded-full">Most Popular</p>
                    <h3 className="text-xl font-bold">Standard</h3>
                    <p className="mt-4 text-4xl font-extrabold text-amo-process-orange">6–8 Weeks</p>
                    <p className="mt-2 text-breef-text-secondary">Multiple features, advanced UI, admin dashboard.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-breef-border text-center group hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold">Complex</h3>
                    <p className="mt-4 text-4xl font-extrabold text-amo-process-orange">8–12 Weeks</p>
                    <p className="mt-2 text-breef-text-secondary">Custom models, full-scale platform, enterprise-grade.</p>
                </div>
            </div>
        </div>
    </section>
);

const FinalCTASection = () => (
    <section className="bg-gradient-to-r from-amo-process-dark to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
                Ready to launch in 8 weeks?
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-300">
                Let's turn your concept into a reality. Start by creating a project brief with our AI assistant.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                    href="#/brief-generator"
                    className="mt-8 sm:mt-0 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amo-process-orange hover:bg-opacity-90 sm:w-auto"
                >
                    Start My Project <ArrowRightIcon className="ml-2 w-5 h-5"/>
                </a>
                 <a
                    href="#/contact"
                    className="mt-8 sm:mt-0 w-full inline-flex items-center justify-center px-6 py-4 border border-gray-600 rounded-md shadow-sm text-base font-medium text-white bg-transparent hover:bg-white/10 sm:w-auto"
                >
                    Book Consultation
                </a>
            </div>
        </div>
    </section>
);

const ProcessPage: React.FC = () => {
  return (
    <div className="bg-white">
        <main>
            <HeroSection />
            <TimelineSection />
            <ComparisonSection />
            <MetricsSection />
            <CalculatorSection />
            <FinalCTASection />
        </main>
        <SiteFooter />
    </div>
  );
};

export default ProcessPage;