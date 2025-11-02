
import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';

interface ResultDisplayProps {
  plan: string;
  videoUrl: string;
  onRestart: () => void;
  onRegenerate: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ plan, videoUrl, onRestart, onRegenerate }) => {
  const [isPreviewing, setIsPreviewing] = useState(true);

  if (isPreviewing) {
    return (
      <Card title="Preview">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Review Your Video</h3>
            {videoUrl ? (
              <video
                src={videoUrl}
                controls
                className="w-full rounded-lg shadow-md bg-black"
                autoPlay
                muted
                loop
              >
                Your browser does not support the video tag.
              </video>
            ) : (
                <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Loading video...</p>
                </div>
            )}
          </div>
          
          <p className="text-center text-gray-500 px-4">
            Watch the generated video. If you're happy with it, accept to finalize. Otherwise, you can go back and regenerate it.
          </p>

          <div className="flex justify-center items-center gap-4 pt-4">
            <Button 
              onClick={onRegenerate} 
              className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-300"
            >
              Regenerate
            </Button>
            <Button onClick={() => setIsPreviewing(false)}>
              Accept & Finalize
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card title="Results">
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Animation Plan</h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-gray-700 whitespace-pre-wrap text-sm leading-relaxed overflow-x-auto max-h-96">
            {plan}
          </pre>
        </div>

        {videoUrl && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Generated Video</h3>
            <video
              src={videoUrl}
              controls
              className="w-full rounded-lg shadow-md"
              autoPlay
              muted
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        
        <div className="text-center pt-4">
          <Button onClick={onRestart}>Start Over</Button>
        </div>
      </div>
    </Card>
  );
};

export default ResultDisplay;
