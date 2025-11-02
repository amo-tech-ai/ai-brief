import React, { useState, FormEvent } from 'react';
import { BriefData } from '../../types';
import Button from '../Button';
import StepIndicator from '../StepIndicator';
import { ArrowLeftIcon } from '../icons';

interface ScopeStepProps {
  onNext: (data: Partial<BriefData>) => void;
  onBack: () => void;
  data: Partial<BriefData>;
}

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & { label: string; isTextArea?: boolean }> = ({ label, id, isTextArea, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        {isTextArea ? (
            <textarea id={id} rows={3} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3" {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}></textarea>
        ) : (
            <input id={id} type="text" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3" {...props as React.InputHTMLAttributes<HTMLInputElement>} />
        )}
    </div>
);

const ScopeStep: React.FC<ScopeStepProps> = ({ onNext, onBack, data }) => {
  const [formData, setFormData] = useState({
    projectName: data.projectName || '',
    projectGoal: data.projectGoal || '',
    projectAudience: data.projectAudience || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-8">
      <div className="flex justify-center mb-8">
        <StepIndicator currentStepId="scope" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Define Your Project Scope</h2>
        <p className="text-gray-600 mt-2">Let's start with the basics. What is your project about?</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField id="projectName" name="projectName" label="Project Name" placeholder="e.g., AI Pitch Deck Generator" value={formData.projectName} onChange={handleChange} required />
        <InputField id="projectGoal" name="projectGoal" label="What is the main goal?" isTextArea placeholder="e.g., To help startup founders create compelling pitch decks automatically." value={formData.projectGoal} onChange={handleChange} required />
        <InputField id="projectAudience" name="projectAudience" label="Who is the target audience?" placeholder="e.g., Early-stage startup founders and entrepreneurs" value={formData.projectAudience} onChange={handleChange} required />
        <div className="flex justify-between items-center pt-4">
          <Button type="button" variant="secondary" onClick={onBack}><ArrowLeftIcon className="mr-2"/> Back</Button>
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </div>
  );
};

export default ScopeStep;