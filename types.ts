export interface BriefData {
  projectName: string;
  projectGoal: string;
  projectAudience: string;
  categories: string[];
  budget: string;
  timeline: string;
  generatedBrief?: string;
  companyName?: string;
  websiteUrl?: string;
  email?: string;
  phone?: string;
}

export type WizardStepId = 'welcome' | 'contact' | 'scope' | 'category' | 'budget' | 'review' | 'finalize';

export interface WizardStepInfo {
  id: WizardStepId;
  name: string;
}
