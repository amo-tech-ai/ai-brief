import React, { useState, useEffect } from 'react';
import { DocumentTextIcon, ChatBubbleIcon, CheckCircleIcon, LightBulbIcon, RocketLaunchIcon } from './icons';

// --- Mockup Sub-Components ---

const PlaceholderLine: React.FC<{ width: string }> = ({ width }) => (
    <div className={`h-1.5 bg-gray-200 rounded-full ${width}`}></div>
);

const ScopeBuilderMockup: React.FC = () => (
    <div className="w-full h-full bg-white rounded-2xl border border-gray-200 shadow-md p-6 relative animate-scale-in">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                <LightBulbIcon className="w-6 h-6 text-gray-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Scope Builder</h2>
        </div>
        <div className="mt-8 space-y-6">
            <div>
                <p className="text-sm font-medium text-gray-600">What type of agency are you looking for?</p>
                <div className="mt-2 grid grid-cols-3 gap-2 text-xs sm:text-sm">
                    <div className="px-2 py-2 border border-gray-300 rounded-md text-center bg-gray-50">Organic Social</div>
                    <div className="px-2 py-2 border-2 border-amo-orange rounded-md text-center bg-orange-50 text-amo-orange font-semibold">Paid Advertising</div>
                    <div className="px-2 py-2 border border-gray-300 rounded-md text-center bg-gray-50">Website Design</div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-6 right-6 w-12 h-12 bg-amo-orange rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">&rarr;</span>
        </div>
    </div>
);

const ProposalMockup: React.FC = () => (
    <div className="w-full h-full bg-white rounded-2xl border border-gray-200 shadow-md p-6 relative animate-scale-in">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                <DocumentTextIcon className="w-6 h-6 text-gray-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Project Proposal</h2>
        </div>
        <div className="mt-8 space-y-6">
            <div>
                <p className="text-sm font-medium text-gray-600">Project Goals</p>
                <div className="mt-2 space-y-2">
                    <PlaceholderLine width="w-11/12" />
                    <PlaceholderLine width="w-10/12" />
                </div>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-600">Our Approach</p>
                 <div className="mt-2 space-y-2">
                    <PlaceholderLine width="w-full" />
                    <PlaceholderLine width="w-full" />
                    <PlaceholderLine width="w-8/12" />
                </div>
            </div>
             <div>
                <p className="text-sm font-medium text-gray-600 flex items-center gap-1.5">Budget <CheckCircleIcon className="w-4 h-4 text-green-500" /></p>
            </div>
        </div>
        <div className="absolute top-24 right-6 text-right">
             <p className="text-sm font-medium text-gray-600">Your Team</p>
             <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300"></div>
             </div>
        </div>
        <div className="absolute bottom-6 right-6 w-12 h-12 bg-amo-orange rounded-full flex items-center justify-center shadow-lg">
            <ChatBubbleIcon className="w-6 h-6 text-white" />
        </div>
    </div>
);

const DashboardMockup: React.FC = () => (
    <div className="w-full h-full bg-white rounded-2xl border border-gray-200 shadow-md p-6 relative animate-scale-in">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                <RocketLaunchIcon className="w-6 h-6 text-gray-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Project Dashboard</h2>
        </div>
        <div className="mt-8 space-y-4">
            <div>
                <p className="text-sm font-medium text-gray-600">Design Sprint</p>
                <div className="w-full h-2 bg-gray-100 rounded-full mt-1">
                    <div className="w-full h-full bg-amo-orange rounded-full"></div>
                </div>
            </div>
             <div>
                <p className="text-sm font-medium text-gray-600">Development</p>
                <div className="w-full h-2 bg-gray-100 rounded-full mt-1">
                    <div className="w-2/3 h-full bg-amo-orange rounded-full"></div>
                </div>
            </div>
        </div>
         <div className="absolute bottom-6 right-6 w-12 h-12 bg-amo-orange rounded-full flex items-center justify-center shadow-lg">
            <CheckCircleIcon className="w-8 h-8 text-white" />
        </div>
    </div>
);

// --- Main Component ---

const steps = [
    { num: 1, title: 'Scope', description: 'Start your project. Use AI or work with an expert to build a custom scope to share with agencies.' },
    { num: 2, title: 'Pitches', description: 'Get custom pitches from vetted agencies, hand-picked for your scope, brand and goals.' },
    { num: 3, title: 'Agency', description: 'Select the right agency and start your project with confidence.' }
];

const ScopingProcessVisual: React.FC = () => {
    const [activeStep, setActiveStep] = useState(1);
    
    useEffect(() => {
        const cycle = () => {
            setActiveStep(current => (current % 3) + 1);
        };
        const intervalId = setInterval(cycle, 4000);
        return () => clearInterval(intervalId);
    }, []);

    const renderMockup = () => {
        switch (activeStep) {
            case 1: return <ScopeBuilderMockup />;
            case 2: return <ProposalMockup />;
            case 3: return <DashboardMockup />;
            default: return <ScopeBuilderMockup />;
        }
    };
    
    return (
        <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-xl border border-gray-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Column */}
                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-amo-orange">HOW IT WORKS</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-4 leading-tight">
                        Find the <em className="italic font-serif not-italic">right</em> agency
                    </h1>
                    <div className="mt-12 space-y-8">
                        {steps.map(step => (
                            <div key={step.num} className={`transition-all duration-300 ${activeStep === step.num ? 'opacity-100' : 'opacity-40 lg:opacity-30'}`}>
                                <h2 className={`text-4xl font-bold flex items-center gap-4 transition-colors duration-300 ${activeStep === step.num ? 'text-gray-800' : 'text-gray-400'}`}>
                                    <span>{step.num}.</span>
                                    <span>{step.title}</span>
                                </h2>
                                {activeStep === step.num && (
                                    <p className="mt-2 pl-[3.25rem] text-gray-600 animate-fade-in">
                                        {step.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="relative h-96 min-h-[24rem]">
                    {renderMockup()}
                </div>
            </div>
        </div>
    );
};

export default ScopingProcessVisual;