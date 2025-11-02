import React from 'react';
import Button from '../Button';
import { BriefData } from '../../types';

interface WelcomeStepProps {
  onNext: (data: Partial<BriefData>) => void;
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext }) => {
  return (
    <div className="text-center bg-white p-10 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center space-y-6">
      <div className="bg-orange-100 text-orange-600 text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full">
        AI
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Create Your AI Project Brief</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        Turn your idea into a professional, ready-to-use project brief in minutes. Our AI-powered wizard will guide you through every step.
      </p>
      <Button onClick={() => onNext({})} size="lg">
        Start My AI Brief
      </Button>
    </div>
  );
};

export default WelcomeStep;