import React, { useState } from 'react';
import { BriefData } from '../../types';
import Button from '../Button';
import StepIndicator from '../StepIndicator';
import { CATEGORIES } from '../../constants';
import { ArrowLeftIcon, CheckIcon } from '../icons';

interface CategoryStepProps {
  onNext: (data: Partial<BriefData>) => void;
  onBack: () => void;
  data: Partial<BriefData>;
}

const CategoryStep: React.FC<CategoryStepProps> = ({ onNext, onBack, data }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(data.categories || []);

  const handleToggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = () => {
    onNext({ categories: selectedCategories });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-8">
      <div className="flex justify-center mb-8">
        <StepIndicator currentStepId="category" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Select Project Categories</h2>
        <p className="text-gray-600 mt-2">Choose the services or technologies that best fit your project. Select one or more.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CATEGORIES.map(category => {
          const isSelected = selectedCategories.includes(category);
          return (
            <button
              key={category}
              type="button"
              onClick={() => handleToggleCategory(category)}
              className={`p-4 rounded-lg border-2 text-center font-semibold transition-all duration-200 relative ${
                isSelected 
                  ? 'bg-orange-50 border-orange-500 text-orange-600' 
                  : 'bg-white border-gray-300 text-gray-700 hover:border-orange-400'
              }`}
            >
              {isSelected && (
                <span className="absolute top-2 right-2 bg-orange-500 rounded-full p-0.5">
                  <CheckIcon className="w-4 h-4 text-white" />
                </span>
              )}
              {category}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between items-center pt-4">
        <Button type="button" variant="secondary" onClick={onBack}><ArrowLeftIcon className="mr-2"/> Back</Button>
        <Button onClick={handleSubmit} disabled={selectedCategories.length === 0}>Next Step</Button>
      </div>
    </div>
  );
};

export default CategoryStep;