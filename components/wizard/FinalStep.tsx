import React, { useState } from 'react';
import { BriefData } from '../../types';
import Button from '../Button';
import { CheckIcon, CopyIcon, RestartIcon } from '../icons';

interface FinalStepProps {
  briefData: Partial<BriefData>;
  onStartOver: () => void;
}

const FinalStep: React.FC<FinalStepProps> = ({ briefData, onStartOver }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (briefData.generatedBrief) {
      navigator.clipboard.writeText(briefData.generatedBrief).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6">
      <div className="text-center space-y-3 flex flex-col items-center">
        <div className="bg-green-100 rounded-full p-3">
          <CheckIcon className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Your AI Brief is Ready!</h2>
        <p className="text-gray-600 max-w-xl">
          Here is your professionally structured project brief. You can copy it, share it with your team, or use it for your development planning.
        </p>
      </div>

      <div className="w-full bg-gray-50 rounded-lg p-6 border border-gray-200 max-h-96 overflow-y-auto">
        <div 
            className="prose prose-sm max-w-none" 
            dangerouslySetInnerHTML={{ __html: briefData.generatedBrief?.replace(/\n/g, '<br />') || '' }} 
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button onClick={handleCopy} variant="primary">
            {copied ? (
                <>
                    <CheckIcon className="mr-2" /> Copied!
                </>
            ) : (
                <>
                    <CopyIcon className="mr-2 w-5 h-5" /> Copy to Clipboard
                </>
            )}
        </Button>
        <Button onClick={onStartOver} variant="secondary">
          <RestartIcon className="mr-2 w-5 h-5" /> Create New Brief
        </Button>
      </div>
    </div>
  );
};

export default FinalStep;