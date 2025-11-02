
import React, { useState, useMemo, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import { generateInfographicPlan } from '../services/geminiService';
import { LoadingSpinner } from './icons';
import { BriefData, WizardStep } from '../types';
import { BUDGET_OPTIONS, CATEGORY_OPTIONS, WIZARD_ROUTES } from '../constants';

interface BriefWizardProps {
  onPlanGenerated: (plan: string) => void;
}

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
    const progress = total > 0 ? (current / total) * 100 : 0;
    return (
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-8">
            <div className="bg-orange-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

const BriefWizard: React.FC<BriefWizardProps> = ({ onPlanGenerated }) => {
  const [briefData, setBriefData] = useState<BriefData>({
    projectType: '',
    goals: '',
    budget: '',
    categories: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [currentPath, setCurrentPath] = useState(location.hash || '#/brief/new');
  const [transitionState, setTransitionState] = useState('in');

  const pathToStepMap = useMemo(() => 
      WIZARD_ROUTES.reduce((acc, route) => {
          acc[route.path] = route.step;
          return acc;
      }, {} as { [key: string]: WizardStep }), 
  []);

  useEffect(() => {
      const handleHashChange = () => {
          setTransitionState('out');
          setTimeout(() => {
              setCurrentPath(location.hash || '#/brief/new');
              setTransitionState('in');
          }, 300);
      };
      
      const validPaths = WIZARD_ROUTES.map(r => r.path);
      const initialHash = location.hash;
      if (!initialHash || !validPaths.includes(initialHash)) {
          window.location.replace('#/brief/new');
          setCurrentPath('#/brief/new');
      }

      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
  }, [pathToStepMap]);
  
  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const plan = await generateInfographicPlan(briefData);
      onPlanGenerated(plan);
    } catch (err) {
      setError('Failed to generate plan. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    const animationClass = transitionState === 'in' ? 'animate-fade-in' : 'animate-fade-out';
    const wizardStep = pathToStepMap[currentPath];
    
    const progressRoutes = WIZARD_ROUTES.filter(r => r.step !== WizardStep.WELCOME);
    const currentProgressIndex = progressRoutes.findIndex(r => r.path === currentPath);
    
    const renderHeader = (title: string, subtitle: string) => (
      <>
        <h3 className="text-2xl font-semibold text-gray-800 text-center">{title}</h3>
        <p className="text-gray-500 text-center mb-8">{subtitle}</p>
        <ProgressBar current={currentProgressIndex + 1} total={progressRoutes.length} />
      </>
    );

    switch(wizardStep) {
        case WizardStep.WELCOME:
            return (
                <div className={`text-center space-y-6 ${animationClass}`}>
                    <h3 className="text-3xl font-bold text-gray-800">Let’s Build Your AI Brief</h3>
                    <p className="text-lg text-gray-600 max-w-md mx-auto">Answer a few questions to create a detailed brief for your AI project.</p>
                    <a href="#/brief/scope"><Button>Start</Button></a>
                </div>
            );
        
        case WizardStep.SCOPE:
            return (
                <div className={`space-y-6 ${animationClass}`}>
                    {renderHeader('Scope Setup', 'Define the core details of your project.')}
                    <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                        <input id="projectType" type="text" value={briefData.projectType} onChange={e => setBriefData({...briefData, projectType: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="e.g., AI-Powered Content Platform" />
                    </div>
                     <div>
                        <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">Project Goals</label>
                        <textarea id="goals" rows={3} value={briefData.goals} onChange={e => setBriefData({...briefData, goals: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="What are you trying to achieve?"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Set your budget</label>
                        <div className="grid grid-cols-2 gap-3">
                            {BUDGET_OPTIONS.map(opt => (
                                <button key={opt} onClick={() => setBriefData({...briefData, budget: opt})} className={`p-3 rounded-lg text-sm font-medium border-2 transition-colors text-center ${briefData.budget === opt ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}>{opt}</button>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-end pt-4">
                        <a href="#/brief/categories">
                          <Button disabled={!briefData.projectType || !briefData.goals || !briefData.budget}>Next</Button>
                        </a>
                    </div>
                </div>
            );

        case WizardStep.CATEGORY:
            const toggleCategory = (cat: string) => {
                const newCategories = briefData.categories.includes(cat)
                    ? briefData.categories.filter(c => c !== cat)
                    : [...briefData.categories, cat];
                setBriefData({...briefData, categories: newCategories});
            };
            return (
                 <div className={`space-y-6 ${animationClass}`}>
                    {renderHeader('Category Selection', 'What type of agency are you looking for?')}
                    <div className="flex flex-wrap gap-3">
                        {CATEGORY_OPTIONS.map(opt => (
                            <button key={opt} onClick={() => toggleCategory(opt)} className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${briefData.categories.includes(opt) ? 'bg-orange-500 text-white border-transparent' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'}`}>{opt}</button>
                        ))}
                    </div>
                     <div className="flex justify-between items-center pt-4">
                        <a href="#/brief/scope"><Button variant="secondary">Back</Button></a>
                        <a href="#/brief/review"><Button disabled={briefData.categories.length === 0}>Next</Button></a>
                    </div>
                </div>
            );
        
        case WizardStep.REVIEW:
            return (
                 <div className={`space-y-6 ${animationClass}`}>
                    {renderHeader('Review Summary', 'Confirm your brief details below.')}
                    <div className="space-y-4 bg-gray-50 p-4 rounded-lg border">
                        <div className="flex justify-between items-start">
                            <div><strong>Project Type:</strong><p className="text-gray-600">{briefData.projectType}</p></div>
                            <a href="#/brief/scope" className="text-orange-500 text-sm font-semibold hover:underline flex-shrink-0 ml-4">Edit</a>
                        </div>
                        <div><strong>Goals:</strong><p className="text-gray-600 whitespace-pre-wrap">{briefData.goals}</p></div>
                        <div><strong>Budget:</strong><p className="text-gray-600">{briefData.budget}</p></div>
                        <div className="flex justify-between items-start">
                             <div><strong>Categories:</strong><p className="text-gray-600">{briefData.categories.join(', ')}</p></div>
                             <a href="#/brief/categories" className="text-orange-500 text-sm font-semibold hover:underline flex-shrink-0 ml-4">Edit</a>
                        </div>
                    </div>
                     <div className="flex justify-between items-center pt-4">
                        <a href="#/brief/categories"><Button variant="secondary">Back</Button></a>
                        <a href="#/brief/finalize"><Button>Confirm & Continue</Button></a>
                    </div>
                </div>
            )

        case WizardStep.FINALIZE:
             return (
                <div className={`text-center space-y-6 ${animationClass}`}>
                    {renderHeader('Finalize & Generate', 'Your brief is ready!')}
                    <h3 className="text-3xl font-bold text-gray-800">Your AI Brief is Ready</h3>
                    <p className="text-lg text-gray-600 max-w-md mx-auto">Now, let's use this brief to generate a custom animation plan for your project.</p>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="flex justify-center items-center gap-4">
                         <a href="#/brief/review"><Button variant="secondary" disabled={isLoading}>Back</Button></a>
                        <Button onClick={handleGenerate} disabled={isLoading}>
                            {isLoading ? (
                                <div className="flex items-center space-x-2">
                                    <LoadingSpinner />
                                    <span>Generating...</span>
                                </div>
                            ) : 'Generate My Plan'}
                        </Button>
                    </div>
                </div>
            );
    }
  }

  return (
    <Card title="breef.">
      <style>{`
        @keyframes fade-in { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        @keyframes fade-out { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-10px); } }
        .animate-fade-out { animation: fade-out 0.3s ease-in forwards; }
      `}</style>
      {renderContent()}
    </Card>
  );
};

export default BriefWizard;
