export interface BriefData {
  projectName: string;
  projectGoal: string;
  projectAudience: string;
  categories: string[];
  budget: string;
  timeline: string;
  generatedBrief?: string;
}

export type WizardStepId = 'welcome' | 'scope' | 'category' | 'budget' | 'review' | 'finalize';

export interface WizardStepInfo {
  id: WizardStepId;
  name: string;
}