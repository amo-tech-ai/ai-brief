import React from 'react';
import SiteFooter from '../components/SiteFooter';
import AnimatedWizard from '../components/AnimatedWizard';
import { ChartBarIcon, RocketLaunchIcon } from '../components/icons';

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
                   <a href="#/how-it-works" className="text-amo-orange font-semibold">How It Works</a>
                   <a href="#/projects" className="text-gray-600 hover:text-amo-orange font-medium">Projects</a>
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
    <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-center lg:text-left">
                     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-breef-text-primary tracking-tight">
                        The smarter way to scope your AI project.
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-breef-text-secondary">
                        From a simple idea to a full project plan, our AI-powered wizard builds your brief, generates a technical proposal, and sets up your project dashboard in minutes — not weeks.
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <AnimatedWizard />
                </div>
            </div>
        </div>
    </section>
);


const ResultsCtaSection = () => (
    <section className="bg-gradient-to-br from-amo-process-dark to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">From idea to launch — faster than ever.</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Our process is designed for speed and clarity. By automating the initial scoping and proposal phase, we get to the build phase faster, delivering your AI application within our proven 8-week framework.
                    </p>
                    <div className="mt-8">
                         <a
                            href="#/brief-generator"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amo-process-orange hover:bg-opacity-90"
                        >
                            Start My AI Project
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                        <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amo-process-orange to-amo-process-secondary">90%</p>
                        <p className="mt-1 text-gray-400">Less Time Scoping</p>
                    </div>
                     <div>
                        <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amo-process-orange to-amo-process-secondary">2x</p>
                        <p className="mt-1 text-gray-400">Faster to Launch</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const HowItWorksPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Nav />
            <main>
                <HeroSection />
                <ResultsCtaSection />
            </main>
            <SiteFooter />
        </div>
    );
};

export default HowItWorksPage;
