
import React from 'react';
import Card from './Card';
import Button from './Button';

interface ResultDisplayProps {
  imageUrl: string;
  onRestart: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ imageUrl, onRestart }) => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'profile-slide.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card title="Your Slide is Ready">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Review & Download</h3>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Generated Profile Slide"
              className="w-full rounded-lg shadow-md bg-gray-200"
            />
          ) : (
              <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Loading image...</p>
              </div>
          )}
        </div>
        
        <p className="text-center text-gray-500 px-4">
          Here is your AI-generated profile slide. You can download it or start over to create a new one.
        </p>

        <div className="flex justify-center items-center gap-4 pt-4">
          <Button onClick={onRestart} variant="secondary">
            Start Over
          </Button>
          <Button onClick={handleDownload} disabled={!imageUrl}>
            Download Slide
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ResultDisplay;
