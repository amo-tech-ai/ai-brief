import React, { useState, useEffect } from 'react';
import { Brief, BriefData } from '../../types';
import Button from '../Button';
import { ArrowRightIcon, CheckIcon, RestartIcon } from '../icons';
import { saveBrief } from '../../utils/briefs';

interface FinalStepProps {
  briefData: Partial<BriefData>;
  onStartOver: () => void;
}

const FinalStep: React.FC<FinalStepProps> = ({ briefData, onStartOver }) => {
  const [savedBrief, setSavedBrief] = useState<Brief | null>(null);
  const [isSaving, setIsSaving] = useState(true);

  useEffect(() => {
    const saveAndSetBrief = async () => {
        if (briefData.projectName && briefData.generatedBrief) {
            try {
                const newBrief = await saveBrief(briefData);
                setSavedBrief(newBrief);
            } catch (error) {
                console.error("Failed to save brief:", error);
                // Optionally show an error to the user
            } finally {
                setIsSaving(false);
            }
        } else {
            setIsSaving(false);
        }
    };

    saveAndSetBrief();
  }, [briefData]);

  const renderMarkdownPreview = (text: string) => {
    let html = text
        .replace(/^#+ (.*$)/gim, '<strong>$1</strong>')
        .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br />');
    return { __html: html };
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-breef-border space-y-6">
      <div className="text-center space-y-3 flex flex-col items-center">
        <div className="bg-green-100 rounded-full p-3">
          <CheckIcon className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Your AI Brief is Ready!</h2>
        <p className="text-gray-600 max-w-xl">
          We've saved your new brief to your dashboard. You can view it, share it, or start another.
        </p>
      </div>

      <div className="w-full bg-gray-50 rounded-lg p-6 border border-gray-200 max-h-80 overflow-y-auto">
        <div 
            className="prose prose-sm max-w-none" 
            dangerouslySetInnerHTML={renderMarkdownPreview(briefData.generatedBrief || '')} 
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        {isSaving ? (
            <div className="h-12 w-48 bg-gray-200 rounded-md animate-pulse"></div>
        ) : savedBrief && (
             <a href={`#/dashboard/agency/brief/${savedBrief.id}`} className="inline-flex items-center justify-center px-6 py-3 bg-breef-accent text-white hover:bg-opacity-90 focus:ring-breef-accent shadow-sm text-base font-semibold rounded-md transition-all">
                View My Brief <ArrowRightIcon className="ml-2 w-5 h-5"/>
            </a>
        )}
        <a href="#/new-brief" onClick={onStartOver} className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-orange-500 shadow-sm text-base font-semibold rounded-md transition-all">
          <RestartIcon className="mr-2 w-5 h-5" /> Create New Brief
        </a>
      </div>
    </div>
  );
};

export default FinalStep;