import React from 'react';
import { WIZARD_STEPS } from '../constants';
import { WizardStepId } from '../types';
import { CheckIcon } from './icons';

interface StepIndicatorProps {
  currentStepId: WizardStepId;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStepId }) => {
  const currentStepIndex = WIZARD_STEPS.findIndex(step => step.id === currentStepId);

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {WIZARD_STEPS.map((step, stepIdx) => (
          <li key={step.name} className={`relative ${stepIdx !== WIZARD_STEPS.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
            {stepIdx < currentStepIndex ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-orange-600" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 hover:bg-orange-900">
                  <CheckIcon className="h-5 w-5 text-white" />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            ) : stepIdx === currentStepIndex ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-orange-600 bg-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-600" aria-hidden="true" />
                </div>
                <span className="absolute -bottom-7 text-center w-full text-xs font-semibold text-orange-600">{step.name}</span>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                   <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true" />
                </div>
                <span className="absolute -bottom-7 text-center w-full text-xs text-gray-500">{step.name}</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default StepIndicator;