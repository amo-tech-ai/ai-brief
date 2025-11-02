import { WizardStepInfo } from './types';

export const WIZARD_STEPS: WizardStepInfo[] = [
  { id: 'scope', name: 'Scope' },
  { id: 'category', name: 'Category' },
  { id: 'budget', name: 'Budget' },
  { id: 'review', name: 'Review' },
];

export const CATEGORIES = [
  'AI Web App', 'AI Mobile App', 'Chatbot / Conversational AI', 'Workflow Automation', 
  'Data Analytics & BI', 'Creative Content Generation', 'AI Integration', 'AI Agent / Copilot'
];

export const BUDGET_RANGES = ['$5k - $10k', '$10k - $25k', '$25k - $50k', '$50k+'];
export const TIMELINES = ['1-2 Weeks', '2-4 Weeks', '1-2 Months', '3+ Months'];