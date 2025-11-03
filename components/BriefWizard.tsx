import React, { useState, useCallback } from 'react';
import { BriefData, WizardStepId } from '../types';
import WelcomeStep from './wizard/WelcomeStep';
import ContactStep from './wizard/ContactStep';
import ScopeStep from './wizard/ScopeStep';
import CategoryStep from './wizard/CategoryStep';
import BudgetStep from './wizard/BudgetStep';
import ProjectManagementStep from './wizard/ProjectManagementStep';
import ReviewStep from './wizard/ReviewStep';
import FinalStep from './wizard/FinalStep';

const BriefWizard: React.FC = () => {
  const [step, setStep] = useState<WizardStepId>('welcome');
  const [briefData, setBriefData] = useState<Partial<BriefData>>({});

  const handleNext = useCallback((data: Partial<BriefData>) => {
    setBriefData(prev => ({ ...prev, ...data }));
    switch (step) {
      case 'welcome':
        setStep('contact');
        break;
      case 'contact':
        setStep('scope');
        break;
      case 'scope':
        setStep('category');
        break;
      case 'category':
        setStep('budget');
        break;
      case 'budget':
        setStep('management');
        break;
      case 'management':
        setStep('review');
        break;
      case 'review':
        setStep('finalize');
        break;
    }
  }, [step]);

  const handleBack = useCallback(() => {
    switch (step) {
      case 'contact':
        setStep('welcome');
        break;
      case 'scope':
        setStep('contact');
        break;
      case 'category':
        setStep('scope');
        break;
      case 'budget':
        setStep('category');
        break;
      case 'management':
        setStep('budget');
        break;
      case 'review':
        setStep('management');
        break;
    }
  }, [step]);

  const handleStartOver = useCallback(() => {
    setBriefData({});
    setStep('welcome');
  }, []);

  const renderStep = () => {
    switch (step) {
      case 'welcome':
        return <WelcomeStep onNext={handleNext} />;
      case 'contact':
        return <ContactStep onNext={handleNext} onBack={handleBack} data={briefData} />;
      case 'scope':
        return <ScopeStep onNext={handleNext} onBack={handleBack} data={briefData} />;
      case 'category':
        return <CategoryStep onNext={handleNext} onBack={handleBack} data={briefData} />;
      case 'budget':
        return <BudgetStep onNext={handleNext} onBack={handleBack} data={briefData} />;
      case 'management':
        return <ProjectManagementStep onNext={handleNext} onBack={handleBack} data={briefData} />;
      case 'review':
        return <ReviewStep onNext={handleNext} onBack={handleBack} data={briefData} />;
      case 'finalize':
        return <FinalStep briefData={briefData} onStartOver={handleStartOver} />;
      default:
        return <WelcomeStep onNext={handleNext} />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto transition-all duration-300">
      {renderStep()}
    </div>
  );
};

export default BriefWizard;