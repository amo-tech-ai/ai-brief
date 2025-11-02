
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import { generateProfileSlideImage } from '../services/geminiService';
import { ProfileData } from '../types';
import { LoadingSpinner } from './icons';
import { LOADING_MESSAGES } from '../constants';

interface VideoGeneratorProps {
  profileData: ProfileData;
  onImageGenerated: (url: string) => void;
  onBack: () => void;
}

const VideoGenerator: React.FC<VideoGeneratorProps> = ({ profileData, onImageGenerated, onBack }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState(LOADING_MESSAGES[0]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let messageIndex = 0;
    const interval = setInterval(() => {
        messageIndex = (messageIndex + 1) % LOADING_MESSAGES.length;
        setLoadingMessage(LOADING_MESSAGES[messageIndex]);
    }, 2000);

    const generateImage = async () => {
      try {
        const imageUrl = await generateProfileSlideImage(profileData);
        onImageGenerated(imageUrl);
      } catch (err) {
        console.error(err);
        setError('Failed to generate your profile slide. Please try again.');
      } finally {
        setIsLoading(false);
        clearInterval(interval);
      }
    };

    generateImage();

    return () => clearInterval(interval);
  }, [profileData, onImageGenerated]);
  
  const renderContent = () => {
    if (error) {
        return (
            <div className="text-center space-y-4">
                <p className="text-red-500">{error}</p>
                <Button onClick={onBack} variant="secondary">
                    Back to Form
                </Button>
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

    return null; // Should have navigated away
  };

  return (
    <Card title="Generating Slide...">
      <div className="p-8 min-h-[300px] flex items-center justify-center">
        {renderContent()}
      </div>
    </Card>
  );
};

export default VideoGenerator;
