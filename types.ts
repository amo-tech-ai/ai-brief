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
  projectManager?: string;
  teamMembers?: string;
  milestones?: string;
  // fix: Add optional clientId to associate briefs with clients.
  clientId?: string;
  // fix: Add optional status to allow setting it on creation/update and resolve type error in briefs utility.
  status?: 'Generated' | 'Draft';
}

export interface Brief extends BriefData {
  id: string;
  createdAt: string;
  status: 'Generated' | 'Draft';
}

export type WizardStepId = 'welcome' | 'contact' | 'scope' | 'category' | 'budget' | 'management' | 'review' | 'finalize';

export interface WizardStepInfo {
  id: WizardStepId;
  name: string;
}