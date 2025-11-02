import React from 'react';
import Button from './Button';
import { DownloadIcon, RestartIcon } from './icons';

interface ResultDisplayProps {
  imageData: string;
  onStartOver: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ imageData, onStartOver }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageData;
    link.download = 'profile-slide.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden w-full p-8 space-y-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center text-gray-800">Your Slide is Ready!</h2>
      <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
        <img
          src={imageData}
          alt="Generated profile slide"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex space-x-4">
        <Button onClick={handleDownload} variant="secondary" title="Download Image">
          <DownloadIcon />
        </Button>
        <Button onClick={onStartOver} variant="secondary" title="Start Over">
          <RestartIcon />
        </Button>
      </div>
    </div>
  );
};

export default ResultDisplay;