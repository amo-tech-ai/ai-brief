import React, { useState } from 'react';
import { MainStage, View, ScopeData } from './types';
import { MAIN_STAGES } from './constants';
import HowItWorks from './components/HowItWorks';
import ScopeBuilder from './components/ScopeBuilder';
import ProjectProposal from './components/ProjectProposal';
import ProjectDashboard from './components/ProjectDashboard';

const App: React.FC = () => {
  const [mainStage, setMainStage] = useState<MainStage>(MainStage.SCOPE);
  const [currentView, setCurrentView] = useState<View>(View.SCOPE_BUILDER);
  const [scopeData, setScopeData] = useState<Partial<ScopeData>>({});

  const handleScopeComplete = (data: ScopeData) => {
    setScopeData(data);
    setCurrentView(View.PROJECT_PROPOSAL);
    setMainStage(MainStage.PITCHES);
  };

  const handleProposalNext = () => {
    setCurrentView(View.PROJECT_DASHBOARD);
    setMainStage(MainStage.AGENCY);
  };

  const handleRestart = () => {
    setScopeData({});
    setCurrentView(View.SCOPE_BUILDER);
    setMainStage(MainStage.SCOPE);
  };
  
  const renderView = () => {
    switch(currentView) {
      case View.SCOPE_BUILDER:
        return <ScopeBuilder onComplete={handleScopeComplete} />;
      case View.PROJECT_PROPOSAL:
        return <ProjectProposal scopeData={scopeData as ScopeData} onNext={handleProposalNext} />;
      case View.PROJECT_DASHBOARD:
        return <ProjectDashboard scopeData={scopeData as ScopeData} onRestart={handleRestart} />;
      default:
        return <ScopeBuilder onComplete={handleScopeComplete} />;
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-7xl mx-auto p-8">
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <HowItWorks currentStage={mainStage} stages={MAIN_STAGES} />
          <div className="w-full">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;