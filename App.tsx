
import React, { useState } from 'react';
import { Step } from './types';
import { STEPS } from './constants';
import StepIndicator from './components/StepIndicator';
import BriefWizard from './components/BriefWizard';
import VideoGenerator from './components/VideoGenerator';
import ResultDisplay from './components/ResultDisplay';
import FooterNav from './components/FooterNav';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>(Step.PLAN);
  const [infographicPlan, setInfographicPlan] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string>('');

  const handlePlanGenerated = (plan: string) => {
    setInfographicPlan(plan);
    setCurrentStep(Step.VIDEO);
  };

  const handleVideoGenerated = (url: string) => {
    setVideoUrl(url);
    setCurrentStep(Step.RESULT);
  };
  
  const restart = () => {
    setInfographicPlan('');
    setVideoUrl('');
    window.location.hash = '#/brief/new'; // Reset hash for wizard
    setCurrentStep(Step.PLAN);
  };

  const handleRegenerate = () => {
    setVideoUrl('');
    setCurrentStep(Step.VIDEO);
  };

  const renderCurrentStepComponent = () => {
    switch (currentStep) {
      case Step.PLAN:
        return <BriefWizard onPlanGenerated={handlePlanGenerated} />;
      case Step.VIDEO:
        return <VideoGenerator infographicPlan={infographicPlan} onVideoGenerated={handleVideoGenerated} />;
      case Step.RESULT:
        return <ResultDisplay plan={infographicPlan} videoUrl={videoUrl} onRestart={restart} onRegenerate={handleRegenerate} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FAFAFA]">
      <div className="flex-grow flex items-center justify-center p-4 lg:p-8 pb-24">
        <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <StepIndicator currentStep={currentStep} steps={STEPS} />
          <div className="w-full">
            {renderCurrentStepComponent()}
          </div>
        </main>
      </div>
      {currentStep === Step.PLAN && <FooterNav />}
    </div>
  );
};

export default App;
