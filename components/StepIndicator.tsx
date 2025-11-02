
import React from 'react';
import { Step, StepInfo } from '../types';

interface StepIndicatorProps {
  currentStep: Step;
  steps: StepInfo[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps }) => {
  return (
    <div className="space-y-12">
      <div>
        <p className="text-orange-500 font-semibold tracking-widest text-sm mb-4">AMO AI</p>
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
          Profile Slide
          <br />
          <i className="font-serif italic font-medium">Generator</i>
        </h1>
      </div>
      <div className="space-y-10">
        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          
          return (
            <div key={step.id}>
              <h2 className={`text-4xl font-light transition-colors duration-300 ${isActive ? 'text-gray-800' : 'text-gray-300'}`}>
                {step.title}
              </h2>
              {(isActive || isCompleted) && (
                <p className="text-gray-500 mt-2 max-w-sm text-lg">
                  {step.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
