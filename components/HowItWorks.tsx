import React from 'react';
import { MainStage, StageInfo } from '../types';

interface HowItWorksProps {
  currentStage: MainStage;
  stages: StageInfo[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({ currentStage, stages }) => {
  return (
    <div className="space-y-12">
      <div>
        <p className="text-orange-500 font-semibold tracking-widest text-sm mb-4">HOW IT WORKS</p>
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
          The <span className="font-serif-italic">smarter</span> agency
          <br />
          search
        </h1>
      </div>
      <div className="space-y-10">
        {stages.map((stage) => {
          const isActive = currentStage === stage.id;
          const isCompleted = currentStage > stage.id;
          
          return (
            <div key={stage.id}>
              <h2 className={`text-4xl font-light transition-colors duration-300 ${isActive || isCompleted ? 'text-gray-800' : 'text-gray-300'}`}>
                {stage.title}
              </h2>
              {isActive && (
                <p className="text-gray-500 mt-2 max-w-sm text-lg">
                  {stage.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;