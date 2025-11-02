import React, { useState } from 'react';
import { ScopeStep, ScopeData } from '../types';
import Card from './Card';
import Button from './Button';
import { AGENCY_TYPES, BUDGET_RANGES } from '../constants';
import { DotsIcon } from './icons';

interface ScopeBuilderProps {
  onComplete: (data: ScopeData) => void;
}

const ScopeBuilderHeader: React.FC = () => (
    <div className="flex items-center space-x-2">
        <DotsIcon />
        <h2 className="font-semibold text-gray-700">breef.</h2>
    </div>
);

const ScopeBuilderFooter: React.FC<{step: number, totalSteps: number}> = ({step, totalSteps}) => (
    <div className="flex space-x-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className={`w-2 h-2 rounded-full ${index < step ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
        ))}
    </div>
);

const AgencyTypeStep: React.FC<{ onNext: (data: Partial<ScopeData>) => void }> = ({ onNext }) => {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    return (
        <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Scope Builder</h3>
            <p className="text-gray-500 mb-6">What type of agency are you looking for?</p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {AGENCY_TYPES.map(type => (
                    <Button
                        key={type}
                        variant={selectedType === type ? 'tag-active' : 'tag'}
                        onClick={() => setSelectedType(type)}
                    >
                        {type}
                    </Button>
                ))}
            </div>
            <Button onClick={() => onNext({ agencyType: selectedType! })} disabled={!selectedType}>
                Confirm
            </Button>
        </div>
    );
};

const BudgetStep: React.FC<{ onNext: (data: Partial<ScopeData>) => void }> = ({ onNext }) => {
    const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

    return (
        <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Scope Builder</h3>
            <p className="text-gray-500 mb-6">Set your budget.</p>
            <div className="flex flex-col items-center space-y-3 mb-8 max-w-xs mx-auto">
                {BUDGET_RANGES.map(range => (
                     <button
                        key={range}
                        onClick={() => setSelectedBudget(range)}
                        className={`w-full text-center py-3 px-4 rounded-lg border-2 transition-all duration-200 ${
                            selectedBudget === range 
                            ? 'bg-orange-500 border-orange-500 text-white font-semibold shadow-lg' 
                            : 'bg-white border-gray-200 text-gray-700 hover:border-orange-400 hover:bg-orange-50'
                        }`}
                    >
                        {range}
                    </button>
                ))}
            </div>
            <Button onClick={() => onNext({ budget: selectedBudget! })} disabled={!selectedBudget}>
                Finish
            </Button>
        </div>
    );
};

const ScopeBuilder: React.FC<ScopeBuilderProps> = ({ onComplete }) => {
  const [step, setStep] = useState<ScopeStep>(ScopeStep.AGENCY_TYPE);
  const [scopeData, setScopeData] = useState<Partial<ScopeData>>({});
  
  const handleNext = (data: Partial<ScopeData>) => {
    const newScopeData = { ...scopeData, ...data };
    setScopeData(newScopeData);

    if (step === ScopeStep.AGENCY_TYPE) {
      setStep(ScopeStep.BUDGET);
    } else if (step === ScopeStep.BUDGET) {
      onComplete(newScopeData as ScopeData);
    }
  };

  const renderStep = () => {
    switch (step) {
      case ScopeStep.AGENCY_TYPE:
        return <AgencyTypeStep onNext={handleNext} />;
      case ScopeStep.BUDGET:
        return <BudgetStep onNext={handleNext} />;
      default:
        return null;
    }
  };

  const currentStepNumber = step === ScopeStep.AGENCY_TYPE ? 1 : 2;

  return (
    <Card 
        header={<ScopeBuilderHeader />}
        footer={<ScopeBuilderFooter step={currentStepNumber} totalSteps={2} />}
    >
      {renderStep()}
    </Card>
  );
};

export default ScopeBuilder;