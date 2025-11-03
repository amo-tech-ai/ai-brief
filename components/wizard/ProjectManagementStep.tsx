import React, { useState, FormEvent } from 'react';
import { BriefData } from '../../types';
import Button from '../Button';
import StepIndicator from '../StepIndicator';
import { ArrowLeftIcon } from '../icons';

interface ProjectManagementStepProps {
  onNext: (data: Partial<BriefData>) => void;
  onBack: () => void;
  data: Partial<BriefData>;
}

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & { label: string; isTextArea?: boolean }> = ({ label, id, isTextArea, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        {isTextArea ? (
            <textarea id={id} rows={4} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3" {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}></textarea>
        ) : (
            <input id={id} type="text" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3" {...props as React.InputHTMLAttributes<HTMLInputElement>} />
        )}
    </div>
);

const ProjectManagementStep: React.FC<ProjectManagementStepProps> = ({ onNext, onBack, data }) => {
  const [formData, setFormData] = useState({
    projectManager: data.projectManager || '',
    teamMembers: data.teamMembers || '',
    milestones: data.milestones || '',
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
        <StepIndicator currentStepId="management" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Project Management</h2>
        <p className="text-gray-600 mt-2">Outline the team and timeline for the project. (Optional)</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField id="projectManager" name="projectManager" label="Project Manager" placeholder="e.g., Alex Johnson" value={formData.projectManager} onChange={handleChange} />
        <InputField id="teamMembers" name="teamMembers" label="Team Members" placeholder="e.g., Jane (Design), Mike (Dev), Sarah (QA)" value={formData.teamMembers} onChange={handleChange} />
        <InputField id="milestones" name="milestones" label="Key Milestones" isTextArea placeholder="e.g.,&#10;Week 1: Project Kick-off & Discovery&#10;Week 2-3: UI/UX Design & Prototyping&#10;Week 4-6: Development Sprints" value={formData.milestones} onChange={handleChange} />
        <div className="flex justify-between items-center pt-4">
          <Button type="button" variant="secondary" onClick={onBack}><ArrowLeftIcon className="mr-2"/> Back</Button>
          <Button type="submit">Review Brief</Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectManagementStep;