import React, { useState } from 'react';
import { BriefData } from '../../types';
import Button from '../Button';
import StepIndicator from '../StepIndicator';
import { BUDGET_RANGES, TIMELINES } from '../../constants';
import { ArrowLeftIcon } from '../icons';

interface BudgetStepProps {
  onNext: (data: Partial<BriefData>) => void;
  onBack: () => void;
  data: Partial<BriefData>;
}

const OptionSelector: React.FC<{ title: string, options: string[], selected: string, onSelect: (option: string) => void }> = ({ title, options, selected, onSelect }) => (
    <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {options.map(option => (
                <button
                    key={option}
                    type="button"
                    onClick={() => onSelect(option)}
                    className={`px-4 py-2 rounded-md font-medium border-2 transition-colors duration-200 ${
                        selected === option
                        ? 'bg-orange-50 border-orange-500 text-orange-600'
                        : 'bg-white border-gray-300 text-gray-700 hover:border-orange-400'
                    }`}
                >
                    {option}
                </button>
            ))}
        </div>
    </div>
);


const BudgetStep: React.FC<BudgetStepProps> = ({ onNext, onBack, data }) => {
  const [budget, setBudget] = useState(data.budget || '');
  const [timeline, setTimeline] = useState(data.timeline || '');

  const handleSubmit = () => {
    onNext({ budget, timeline });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-8">
      <div className="flex justify-center mb-8">
        <StepIndicator currentStepId="budget" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Set Budget & Timeline</h2>
        <p className="text-gray-600 mt-2">Give us an idea of your project's scale. (Optional)</p>
      </div>
      <div className="space-y-8">
        <OptionSelector title="What is your estimated budget?" options={BUDGET_RANGES} selected={budget} onSelect={setBudget} />
        <OptionSelector title="What is your desired timeline?" options={TIMELINES} selected={timeline} onSelect={setTimeline} />
      </div>
      <div className="flex justify-between items-center pt-4">
        <Button type="button" variant="secondary" onClick={onBack}><ArrowLeftIcon className="mr-2"/> Back</Button>
        <Button onClick={handleSubmit}>Review Brief</Button>
      </div>
    </div>
  );
};

export default BudgetStep;