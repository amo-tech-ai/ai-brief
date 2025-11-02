import React, { useState } from 'react';
import { BriefData } from '../../types';
import Button from '../Button';
import StepIndicator from '../StepIndicator';
import { generateProjectBrief } from '../../services/geminiService';
import { ArrowLeftIcon, LoadingSpinner } from '../icons';

interface ReviewStepProps {
  onNext: (data: Partial<BriefData>) => void;
  onBack: () => void;
  data: Partial<BriefData>;
}

const ReviewItem: React.FC<{ label: string, value: string | string[] | undefined }> = ({ label, value }) => {
    if (!value || value.length === 0) return null;
    const displayValue = Array.isArray(value) ? value.join(', ') : value;
    return (
        <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{label}</h4>
            <p className="text-gray-800 mt-1">{displayValue}</p>
        </div>
    );
}

const ReviewStep: React.FC<ReviewStepProps> = ({ onNext, onBack, data }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const generatedBrief = await generateProjectBrief(data);
            if (!generatedBrief) {
                throw new Error("The AI failed to generate a brief. Please try again.");
            }
            onNext({ generatedBrief });
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-8">
      <div className="flex justify-center mb-8">
        <StepIndicator currentStepId="review" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Review Your Details</h2>
        <p className="text-gray-600 mt-2">Confirm your inputs, then let our AI create your professional brief.</p>
      </div>
      
      <div className="space-y-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <ReviewItem label="Project Name" value={data.projectName} />
        <ReviewItem label="Core Goal" value={data.projectGoal} />
        <ReviewItem label="Target Audience" value={data.projectAudience} />
        <ReviewItem label="Categories" value={data.categories} />
        <ReviewItem label="Budget" value={data.budget} />
        <ReviewItem label="Timeline" value={data.timeline} />
      </div>

      {error && <p className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">{error}</p>}

      <div className="flex justify-between items-center pt-4">
        <Button type="button" variant="secondary" onClick={onBack} disabled={isLoading}>
          <ArrowLeftIcon className="mr-2"/> Back
        </Button>
        <Button onClick={handleGenerate} disabled={isLoading}>
            {isLoading ? (
                <>
                    <LoadingSpinner />
                    <span className="ml-2">Generating...</span>
                </>
            ) : 'Generate AI Brief'}
        </Button>
      </div>
    </div>
  );
};

export default ReviewStep;