import React, { useState, useEffect, useRef } from 'react';
import { CodeIcon } from './icons';

/*
  MOTION DIAGRAM (Node + Timing Map)
  - Scene Durations:
    - Step 1 (Scope): 3500ms
    - Step 2 (Pitch): 3500ms
    - Step 3 (Launch): 4000ms
  - Total Cycle: 11000ms

  - Scene 1: Scope Builder (0ms -> 3500ms)
    - [0ms] wizard-container: transform: translateX(0%)
    - [0ms] step-1-title: color: orange
    - [400ms] frame-1: fade in & slide up
    - [1200ms] pointer: moves to 'Automation'
    - [1600ms] automation-button: highlights
    - [2200ms] pointer: moves to 'Continue'
    - [2600ms] continue-button: highlights
    - [3000ms] wizard-container: starts slide to translateX(-100%) [600ms easeInOutCubic]

  - Scene 2: Proposal Builder (3500ms -> 7000ms)
    - [3500ms] step-1-title: color: gray, step-2-title: color: orange
    - [3900ms] frame-2: is visible
    - [4000ms] proposal-cards: stagger fade-in-up
    - [5500ms] pointer: moves to 'Review Proposal'
    - [5900ms] review-button: highlights
    - [6500ms] wizard-container: starts slide to translateX(-200%) [600ms easeInOutCubic]

  - Scene 3: Dashboard (7000ms -> 11000ms)
    - [7000ms] step-2-title: color: gray, step-3-title: color: orange
    - [7400ms] frame-3: is visible
    - [7800ms] progress-bars: animate width sequentially
    - [9500ms] pointer: hovers 'Start Project'
    - [11000ms] Cycle resets. wizard-container: transform: translateX(0%) instantly.
*/

const AnimatedWizard: React.FC = () => {
    const [activeStep, setActiveStep] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const step1Timer = setTimeout(() => setActiveStep(2), 3500);
                    const step2Timer = setTimeout(() => setActiveStep(3), 7000);
                    const cycleTimer = setInterval(() => {
                        setActiveStep(1);
                        setTimeout(() => setActiveStep(2), 3500);
                        setTimeout(() => setActiveStep(3), 7000);
                    }, 11000);

                    return () => {
                        clearTimeout(step1Timer);
                        clearTimeout(step2Timer);
                        clearInterval(cycleTimer);
                    };
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const steps = [
        { num: 1, title: 'Scope', description: 'Define your project goals and budget.' },
        { num: 2, title: 'Pitch', description: 'Get a custom AI-generated proposal.' },
        { num: 3, title: 'Launch', description: 'Start your project on our 8-week framework.' },
    ];

    return (
        <div ref={containerRef} className="flex gap-8">
            {/* Step Indicators */}
            <div className="w-1/3 pt-4">
                <div className="space-y-6">
                    {steps.map(step => (
                        <div key={step.num} className="transition-opacity duration-500" style={{ opacity: activeStep === step.num ? 1 : 0.4 }}>
                            <p className={`font-bold text-lg ${activeStep === step.num ? 'text-amo-process-orange' : 'text-gray-800'}`}>
                                {step.num}. {step.title}
                            </p>
                            <p className="text-sm text-gray-500">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animated Wizard Window */}
            <div className="w-2/3 h-80 bg-white rounded-2xl shadow-2xl p-2 border border-gray-200 overflow-hidden">
                <div className="w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(activeStep - 1) * 100}%)` }}>
                    <WizardFrameOne active={activeStep === 1} />
                    <WizardFrameTwo active={activeStep === 2} />
                    <WizardFrameThree active={activeStep === 3} />
                </div>
            </div>
        </div>
    );
};

const WizardFrameOne: React.FC<{ active: boolean }> = ({ active }) => (
    <div className="w-full h-full flex-shrink-0 p-4 bg-gray-50 rounded-xl relative">
        <p className="font-bold text-gray-800">Scope Builder</p>
        <div className="mt-4 space-y-3">
            <p className="text-sm font-medium">What type of project?</p>
            <div className="flex gap-2">
                <div className={`px-3 py-1 text-sm border-2 rounded-md ${active ? 'border-amo-process-orange bg-orange-50' : 'border-gray-300'}`}>Automation</div>
                <div className="px-3 py-1 text-sm border border-gray-300 rounded-md">Chatbot</div>
            </div>
             <p className="text-sm font-medium pt-2">What is your budget?</p>
             <div className="w-full h-2 bg-gray-200 rounded-full"><div className="w-1/2 h-full bg-amo-process-orange rounded-full"></div></div>
        </div>
        <div className="absolute bottom-4 right-4 px-4 py-2 bg-amo-process-orange text-white text-sm font-semibold rounded-lg">Continue →</div>
    </div>
);

const WizardFrameTwo: React.FC<{ active: boolean }> = ({ active }) => (
    <div className="w-full h-full flex-shrink-0 p-4 bg-gray-50 rounded-xl">
        <p className="font-bold text-gray-800">AMO AI Proposal</p>
        <div className="mt-4 p-3 bg-white rounded-lg shadow-sm border">
            <p className="font-semibold text-sm">Recommended Tech Stack</p>
            <div className="flex gap-2 mt-2">
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">LangChain</span>
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">Supabase</span>
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">CrewAI</span>
            </div>
        </div>
        <div className="mt-2 p-3 bg-white rounded-lg shadow-sm border">
            <p className="font-semibold text-sm">Estimated Timeline</p>
            <p className="text-lg font-bold text-amo-process-orange">8 Weeks</p>
        </div>
         <div className="absolute bottom-4 right-4 px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg">Review Proposal</div>
    </div>
);

const WizardFrameThree: React.FC<{ active: boolean }> = ({ active }) => (
    <div className="w-full h-full flex-shrink-0 p-4 bg-gray-50 rounded-xl">
        <p className="font-bold text-gray-800">Project Dashboard</p>
        <div className="mt-4 space-y-3">
             <div>
                <p className="text-sm font-medium">Design Sprint</p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className={`h-full bg-amo-process-orange rounded-full transition-all duration-1000 ease-out ${active ? 'w-full' : 'w-0'}`}></div>
                </div>
            </div>
             <div>
                <p className="text-sm font-medium">Rapid Build</p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className={`h-full bg-amo-process-orange rounded-full transition-all duration-1000 ease-out delay-500 ${active ? 'w-2/3' : 'w-0'}`}></div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-4 right-4 px-4 py-2 bg-amo-process-orange text-white text-sm font-semibold rounded-lg">Start Project</div>
    </div>
);

export default AnimatedWizard;
