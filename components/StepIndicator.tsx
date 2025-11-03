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
        {WIZARD_STEPS.map((step, stepIdx) => {
          const isCompleted = stepIdx < currentStepIndex;
          const isActive = stepIdx === currentStepIndex;

          return (
            <li key={step.name} className={`relative ${stepIdx !== WIZARD_STEPS.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
              {/* Connector line, connecting from this step to the next */}
              {stepIdx < WIZARD_STEPS.length - 1 && (
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="h-0.5 w-full bg-gray-200">
                        <div 
                            className="h-full bg-orange-600 origin-left transition-transform duration-700"
                            style={{ 
                                transform: isCompleted ? 'scaleX(1)' : 'scaleX(0)',
                                transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)'
                            }}
                        />
                    </div>
                </div>
              )}
              
              <div className="relative flex h-8 w-8 items-center justify-center">
                <div
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-in-out
                    ${isCompleted ? 'bg-orange-600' : ''}
                    ${isActive ? 'bg-white border-2 border-orange-600 animate-pulse-border' : ''}
                    ${!isCompleted && !isActive ? 'bg-white border-2 border-gray-300' : ''}
                  `}
                >
                  {isCompleted ? (
                    <CheckIcon className="h-5 w-5 text-white animate-check-in" />
                  ) : (
                    <span
                      className={`h-2.5 w-2.5 rounded-full transition-colors duration-300
                        ${isActive ? 'bg-orange-600' : 'bg-gray-300'}
                      `}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <span className={`absolute -bottom-7 text-center w-full text-xs font-semibold whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-orange-600' : 'text-gray-500'}`}>
                    {step.name}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default StepIndicator;