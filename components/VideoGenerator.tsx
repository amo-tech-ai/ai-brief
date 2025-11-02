
import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import Button from './Button';
import { generateVideo, generateVideoPromptFromPlan } from '../services/geminiService';
import { AspectRatio } from '../types';
import { LoadingSpinner } from './icons';

interface VideoGeneratorProps {
  infographicPlan: string;
  onVideoGenerated: (url: string) => void;
}

const VideoGenerator: React.FC<VideoGeneratorProps> = ({ infographicPlan, onVideoGenerated }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9');
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(true);
  
  const [hasApiKey, setHasApiKey] = useState(false);
  const [isCheckingKey, setIsCheckingKey] = useState(true);

  const checkApiKey = useCallback(async () => {
    setIsCheckingKey(true);
    try {
      const keyExists = await window.aistudio.hasSelectedApiKey();
      setHasApiKey(keyExists);
    } catch (e) {
      console.error("aistudio is not available.", e);
      setHasApiKey(false); // Assume no key if aistudio is not there
    } finally {
      setIsCheckingKey(false);
    }
  }, []);

  useEffect(() => {
    checkApiKey();
  }, [checkApiKey]);
  
  useEffect(() => {
    const createPrompt = async () => {
      if (infographicPlan) {
        setIsGeneratingPrompt(true);
        setError(null);
        try {
          const generatedPrompt = await generateVideoPromptFromPlan(infographicPlan);
          setPrompt(generatedPrompt);
        } catch (e) {
          console.error("Failed to auto-generate video prompt", e);
          setError("Could not auto-generate a video prompt. Please write one manually.");
          setPrompt(''); 
        } finally {
          setIsGeneratingPrompt(false);
        }
      } else {
        setIsGeneratingPrompt(false); 
      }
    };
    if(hasApiKey) {
        createPrompt();
    }
  }, [infographicPlan, hasApiKey]);

  const handleSelectKey = async () => {
    try {
        await window.aistudio.openSelectKey();
        // Optimistically set to true to avoid race condition
        setHasApiKey(true);
    } catch (e) {
        console.error("Could not open API key selection.", e);
        setError("Failed to open the API key selection dialog.");
    }
  };

  const handleGenerate = async () => {
    if (!prompt) {
      setError('Please enter a prompt for the video.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const videoUrl = await generateVideo(prompt, aspectRatio, setLoadingMessage);
      onVideoGenerated(videoUrl);
    } catch (err: any) {
      let errorMessage = 'Failed to generate video. Please try again.';
      if (err.message && err.message.includes('Requested entity was not found')) {
          errorMessage = "Your API Key is invalid. Please select a valid key.";
          setHasApiKey(false); // Reset key state to re-trigger the selection UI
      }
      setError(errorMessage);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const renderContent = () => {
    if (isCheckingKey) {
        return <p className="text-center text-gray-500">Checking API Key...</p>
    }
    
    if(!hasApiKey) {
        return (
            <div className="text-center p-4 border border-orange-200 rounded-lg bg-orange-50">
                <h3 className="text-xl font-semibold text-orange-800 mb-2">API Key Required</h3>
                <p className="text-orange-700 mb-4">
                    Video generation with Veo requires a Google AI Studio API key. Please select a key to continue.
                    Project billing must be enabled. For more info, see the <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-orange-900">billing documentation</a>.
                </p>
                <Button onClick={handleSelectKey}>Select API Key</Button>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="text-center space-y-4">
                <div className="flex justify-center">
                    <LoadingSpinner className="h-12 w-12 text-orange-500" />
                </div>
                <p className="text-gray-600 font-medium animate-pulse">{loadingMessage}</p>
            </div>
        );
    }
    
    if (isGeneratingPrompt) {
        return (
            <div className="text-center space-y-4">
                <div className="flex justify-center">
                    <LoadingSpinner className="h-12 w-12 text-orange-500" />
                </div>
                <p className="text-gray-600 font-medium">Generating a suggested prompt based on your brief...</p>
            </div>
        );
    }

    return (
      <div className="space-y-6">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">Video Prompt</label>
          <textarea
            id="prompt"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A robot holding a red skateboard."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Aspect Ratio</label>
          <div className="flex space-x-2">
            {(['16:9', '9:16'] as AspectRatio[]).map(ratio => (
              <button
                key={ratio}
                onClick={() => setAspectRatio(ratio)}
                className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-colors ${aspectRatio === ratio ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
              >
                {ratio} {ratio === '16:9' ? '(Landscape)' : '(Portrait)'}
              </button>
            ))}
          </div>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="text-center pt-4">
          <Button onClick={handleGenerate} disabled={isLoading || isGeneratingPrompt || !prompt}>
            Generate Video
          </Button>
        </div>
      </div>
    );
  };
  
  return (
    <Card title="AI Video Generation">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Video Generator</h3>
      {renderContent()}
    </Card>
  );
};

export default VideoGenerator;
