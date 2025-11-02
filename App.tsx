import React, { useState } from 'react';
import { ProfileFormData } from './types';
import ProfileForm from './components/ProfileForm';
import ResultDisplay from './components/ResultDisplay';
import { generateProfileSlide } from './services/geminiService';

const App: React.FC = () => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (formData: ProfileFormData) => {
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageData = await generateProfileSlide(formData);
      if (imageData) {
        setGeneratedImage(imageData);
      } else {
        throw new Error('Image generation failed. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartOver = () => {
    setGeneratedImage(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              AI-Powered Profile Slide Generator
            </h1>
            <p className="text-gray-600 text-lg">
              Instantly create a professional, polished profile slide for your presentations. Just fill in your details, and let our AI handle the design.
            </p>
          </div>
          <div className="w-full">
            {generatedImage ? (
              <ResultDisplay 
                imageData={generatedImage} 
                onStartOver={handleStartOver} 
              />
            ) : (
              <ProfileForm
                onGenerate={handleGenerate}
                isLoading={isLoading}
                error={error}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;