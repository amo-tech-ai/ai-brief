
import React, { useState } from 'react';
import { Step, ProfileData } from './types';
import { STEPS } from './constants';
import StepIndicator from './components/StepIndicator';
import BriefWizard from './components/BriefWizard';
import VideoGenerator from './components/VideoGenerator';
import ResultDisplay from './components/ResultDisplay';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>(Step.DETAILS);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleProfileSubmit = (data: ProfileData) => {
    setProfileData(data);
    setCurrentStep(Step.GENERATE);
  };

  const handleImageGenerated = (url: string) => {
    setImageUrl(url);
    setCurrentStep(Step.RESULT);
  };
  
  const restart = () => {
    setProfileData(null);
    setImageUrl('');
    setCurrentStep(Step.DETAILS);
  };

  const renderCurrentStepComponent = () => {
    switch (currentStep) {
      case Step.DETAILS:
        return <BriefWizard onProfileSubmit={handleProfileSubmit} />;
      case Step.GENERATE:
        return <VideoGenerator profileData={profileData!} onImageGenerated={handleImageGenerated} onBack={() => setCurrentStep(Step.DETAILS)} />;
      case Step.RESULT:
        return <ResultDisplay imageUrl={imageUrl} onRestart={restart} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FAFAFA]">
      <div className="flex-grow flex items-center justify-center p-4 lg:p-8">
        <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <StepIndicator currentStep={currentStep} steps={STEPS} />
          <div className="w-full">
            {renderCurrentStepComponent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
