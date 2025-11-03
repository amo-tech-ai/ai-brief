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
  companyIntelligence?: CompanyIntelligence;
}

export interface Competitor {
  name: string;
  url?: string;
  description?: string;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  github?: string;
}

export interface CompanyIntelligence {
  companyName: string;
  description: string;
  industry: string;
  competitors: Competitor[];
  socialLinks: SocialLinks;
  website: string;
  marketData?: {
    employees?: number;
    funding?: string;
    revenue?: string;
  };
}

export type WizardStepId = 'welcome' | 'contact' | 'scope' | 'category' | 'budget' | 'management' | 'review' | 'finalize';

export interface WizardStepInfo {
  id: WizardStepId;
  name: string;
}