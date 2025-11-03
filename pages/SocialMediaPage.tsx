import React from 'react';
import SiteFooter from '../components/SiteFooter';
import { 
    ArrowRightIcon, 
    ChartBarIcon, 
    CheckIcon, 
    ClockIcon, 
    CogIcon, 
    GlobeAltIcon, 
    LightBulbIcon, 
    PencilSquareIcon, 
    UsersIcon 
} from '../components/icons';

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

const HeroSection = () => (
    <section className="relative bg-gray-50 pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-breef-text-primary tracking-tight">
                Smarter Social Media — Automated by AI
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-breef-text-secondary">
                Create, schedule, and optimize content automatically with intelligent workflows that learn from engagement data.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a href="#/brief-generator" className="inline-block bg-amo-orange text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                    Start Your AI Brief
                </a>
                <a href="#/projects" className="inline-block bg-white text-breef-text-primary font-semibold px-8 py-4 rounded-lg border border-breef-border hover:bg-gray-100 transition-all">
                    View Case Studies
                </a>
            </div>
        </div>
    </section>
);

const OverviewSection = () => (
    <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="lg:pr-8">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">How AI Automates Your Social Workflow</h2>
                    <p className="mt-4 text-lg text-breef-text-secondary">
                        Our automation engine integrates directly with your brand voice and platforms — turning ideas into content calendars, posts, and performance reports automatically.
                    </p>
                </div>
                <div className="mt-12 lg:mt-0">
                    <div className="space-y-4">
                        {['Prompt / Topic Input', 'AI Content Engine', 'Smart Scheduler', 'Publishing Bot', 'Analytics Feedback Loop'].map((item, index) => (
                            <div key={item} className="flex items-center p-4 bg-gray-50 rounded-lg">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-amo-orange rounded-full flex items-center justify-center font-bold text-sm">{index + 1}</div>
                                <p className="ml-4 text-md font-medium text-breef-text-primary">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const AnimatedAudienceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="6" fill="#F97316" className="transition-all duration-300 group-hover:r-7" />
      <circle cx="32" cy="32" r="10" fill="#F97316" opacity="0.2" className="animate-pulse" />
  
      <circle cx="10" cy="15" r="4" className="fill-current text-gray-400 transition-all duration-300 group-hover:text-amo-orange" />
      <circle cx="54" cy="20" r="4" className="fill-current text-gray-400 transition-all duration-300 group-hover:text-amo-orange" />
      <circle cx="40" cy="55" r="4" className="fill-current text-gray-400 transition-all duration-300 group-hover:text-amo-orange" />
  
      <path d="M27 28L13 18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" className="line-1 text-gray-400 transition-all duration-300 group-hover:text-amo-orange" />
      <path d="M37 30L51 23" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" className="line-2 text-gray-400 transition-all duration-300 group-hover:text-amo-orange" />
      <path d="M35 38L38 52" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" className="line-3 text-gray-400 transition-all duration-300 group-hover:text-amo-orange" />
      
      <style>{`
        .line-1, .line-2, .line-3 {
          stroke-dashoffset: 0;
        }
        .group:hover .line-1 {
          animation: dash 2s linear infinite;
        }
        .group:hover .line-2 {
          animation: dash 2s linear infinite 0.3s;
        }
        .group:hover .line-3 {
          animation: dash 2s linear infinite 0.6s;
        }
        @keyframes dash {
          from {
            stroke-dashoffset: 10;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );

const FeaturesSection = () => {
    const features = [
        { icon: <PencilSquareIcon className="w-8 h-8 text-amo-orange" />, title: 'AI Content Generator', desc: 'Produces post text, hashtags, and visuals tuned to your tone.' },
        { icon: <ClockIcon className="w-8 h-8 text-amo-orange" />, title: 'Smart Scheduler', desc: 'Chooses best times to post using engagement history.' },
        { icon: <GlobeAltIcon className="w-8 h-8 text-amo-orange" />, title: 'Multi-Platform Publishing', desc: 'Connects to Instagram, TikTok, LinkedIn, and more.' },
        { icon: <ChartBarIcon className="w-8 h-8 text-amo-orange" />, title: 'Performance Insights', desc: 'Learns what works — automatically updates strategies.' },
        { icon: <AnimatedAudienceIcon className="w-8 h-8 text-amo-orange" />, title: 'AI Audience Personalization', desc: 'Adjusts tone and visuals per segment.' },
        { icon: <CogIcon className="w-8 h-8 text-amo-orange" />, title: 'Workflow Integrations', desc: 'n8n / Supabase automation; Slack or WhatsApp notifications.' },
    ];
    return (
        <section className="py-20 lg:py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">Data-Driven Creativity</h2>
                    <p className="mt-4 text-lg text-breef-text-secondary">Your brand voice, multiplied by AI.</p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map(feature => (
                        <div key={feature.title} className="bg-white p-8 rounded-xl shadow-sm border border-breef-border group transition-all duration-300 hover:shadow-lg hover:border-amo-orange/30">
                            <div className="mb-4 transition-transform duration-300 group-hover:scale-105">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-breef-text-primary">{feature.title}</h3>
                            <p className="mt-2 text-breef-text-secondary">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProcessSection = () => {
    const steps = ['Plan', 'Generate', 'Approve', 'Publish', 'Analyze'];
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">From Idea to Engagement</h2>
                    <p className="mt-4 text-lg text-breef-text-secondary">Our automated pipeline ensures a seamless flow from strategy to analysis, all powered by AI.</p>
                </div>
                <div className="mt-20">
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200" aria-hidden="true"></div>
                        <div className="relative flex justify-between">
                            {steps.map((step, index) => (
                                <div key={step} className="flex flex-col items-center text-center w-1/5">
                                    <div className="w-10 h-10 bg-amo-orange text-white rounded-full flex items-center justify-center font-bold z-10">{index + 1}</div>
                                    <h3 className="mt-4 font-semibold text-breef-text-primary">{step}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const DashboardMockSVG = () => (
    <svg viewBox="0 0 100 80" className="w-24 h-20 mx-auto text-gray-300">
      <rect x="5" y="5" width="90" height="70" rx="5" stroke="currentColor" strokeWidth="1" fill="#fff" />
      <rect x="15" y="50" width="10" height="20" fill="#F97316" className="bar1" />
      <rect x="30" y="40" width="10" height="30" fill="#F97316" className="bar2" />
      <rect x="45" y="55" width="10" height="15" fill="#F97316" className="bar3" />
      <polyline points="60,60 70,45 80,50 90,30" stroke="#34D399" strokeWidth="2" fill="none" className="line-chart" />
      <style>{`
        @keyframes rise {
          from { transform: scaleY(0.1); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }
        .bar1 { animation: rise 1.5s ease-in-out infinite alternate; animation-delay: 0s; }
        .bar2 { animation: rise 1.5s ease-in-out infinite alternate; animation-delay: 0.3s; }
        .bar3 { animation: rise 1.5s ease-in-out infinite alternate; animation-delay: 0.6s; }
        @keyframes draw {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        .line-chart {
          stroke-dasharray: 100;
          animation: draw 2s ease-in-out infinite alternate;
        }
      `}</style>
    </svg>
);

const PlatformFlowchartSVG = () => (
    <svg viewBox="0 0 100 80" className="w-24 h-20 mx-auto text-gray-300">
      <circle cx="50" cy="40" r="10" fill="#F97316" />
      <circle cx="50" cy="40" r="14" fill="#F97316" opacity="0.3" className="animate-pulse" />
      <circle cx="15" cy="20" r="5" stroke="currentColor" fill="#fff" strokeWidth="1" />
      <circle cx="85" cy="20" r="5" stroke="currentColor" fill="#fff" strokeWidth="1" />
      <circle cx="15" cy="60" r="5" stroke="currentColor" fill="#fff" strokeWidth="1" />
      <circle cx="85" cy="60" r="5" stroke="currentColor" fill="#fff" strokeWidth="1" />
      <path d="M42,35 L20,23" stroke="currentColor" strokeWidth="1" />
      <path d="M58,35 L80,23" stroke="currentColor" strokeWidth="1" />
      <path d="M42,45 L20,57" stroke="currentColor" strokeWidth="1" />
      <path d="M58,45 L80,57" stroke="currentColor" strokeWidth="1" />
      <circle r="2" fill="#34D399">
        <animateMotion path="M42,35 L20,23" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle r="2" fill="#34D399">
        <animateMotion path="M58,45 L80,57" dur="3s" repeatCount="indefinite" begin="1.5s" />
      </circle>
    </svg>
);

const ContinuousLearningLoopSVG = () => (
    <svg viewBox="0 0 100 80" className="w-24 h-20 mx-auto text-gray-400">
      <path id="loop-path" d="M 50, 15 A 30 20 0 1 1 50, 65 A 30 20 0 1 1 50, 15" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3"/>
      <circle r="4" fill="#F97316" className="orbiter">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
          <mpath href="#loop-path"/>
        </animateMotion>
      </circle>
       <circle r="6" fill="#F97316" opacity="0.3" className="orbiter-glow">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
          <mpath href="#loop-path"/>
        </animateMotion>
      </circle>
    </svg>
);

const VisualFlowsSection = () => (
    <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-breef-text-primary">Visual Flow Examples</h2>
                <p className="mt-4 text-lg text-breef-text-secondary">We use friendly, animated UI metaphors to explain abstract AI automation.</p>
            </div>
            <div className="mt-16 grid lg:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-breef-border">
                    <DashboardMockSVG />
                    <h3 className="mt-4 text-xl font-bold">Dashboard Mock</h3>
                    <p className="mt-2 text-breef-text-secondary">Analytics chart tiles with auto-updating graphs to represent the system’s intelligence.</p>
                </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-breef-border">
                    <PlatformFlowchartSVG />
                    <h3 className="mt-4 text-xl font-bold">Platform Flowchart</h3>
                    <p className="mt-2 text-breef-text-secondary">A branching diagram showing content variants for multiple platforms.</p>
                </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-breef-border">
                    <ContinuousLearningLoopSVG />
                    <h3 className="mt-4 text-xl font-bold">Continuous Learning Loop</h3>
                    <p className="mt-2 text-breef-text-secondary">A circular diagram showing the AI workflow: Create → Test → Learn → Refine.</p>
                </div>
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => {
    const testimonials = [
        { quote: "AMO AI's automation saved us 10+ hours a week. Our engagement has never been higher.", name: "Marketing Manager", company: "Startup Inc." },
        { quote: "The AI content generator is a game-changer. It perfectly captures our brand voice.", name: "Founder", company: "Creative Co." },
    ];
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-breef-text-primary">Trusted by Modern Creators & Brands</h2>
                </div>
                <div className="mt-16 grid lg:grid-cols-2 gap-8">
                    {testimonials.map(t => (
                        <figure key={t.name} className="bg-gray-50 p-8 rounded-xl border border-breef-border">
                            <blockquote className="text-lg text-breef-text-primary">“{t.quote}”</blockquote>
                            <figcaption className="mt-6 flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                                <div>
                                    <div className="font-semibold text-breef-text-primary">{t.name}</div>
                                    <div className="text-breef-text-secondary">{t.company}</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection = () => (
    <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-breef-text-primary sm:text-4xl">
                Let AI Run Your Social Media — While You Focus on Strategy
            </h2>
            <p className="mt-4 text-lg leading-6 text-breef-text-secondary">
                Generate campaigns, automate posting, and track performance — all from one intelligent platform.
            </p>
            <a href="#/brief-generator" className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amo-orange hover:bg-opacity-90 sm:w-auto">
                Start Your AI Brief <ArrowRightIcon className="ml-2 w-5 h-5"/>
            </a>
        </div>
    </section>
);

const SocialMediaPage: React.FC = () => {
    return (
        <div className="bg-white text-breef-text-primary">
            <Nav />
            <main>
                <HeroSection />
                <OverviewSection />
                <FeaturesSection />
                <ProcessSection />
                <VisualFlowsSection />
                <TestimonialsSection />
                <CTASection />
            </main>
            <SiteFooter />
        </div>
    );
};

export default SocialMediaPage;