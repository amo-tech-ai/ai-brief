
import { Step, StepInfo, WizardStep } from './types';

export const STEPS: StepInfo[] = [
  {
    id: Step.PLAN,
    title: '1. Build Brief',
    description: 'Start your project. Use the wizard to build a custom project brief.',
  },
  {
    id: Step.VIDEO,
    title: '2. Generate',
    description: 'Use AI to generate a high-quality video based on your brief and creative prompt.',
  },
  {
    id: Step.RESULT,
    title: '3. Review',
    description: 'Review the generated plan and video. Manage all assets in one place.',
  },
];

export const BUDGET_OPTIONS = [
    '$5K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K +',
];

export const CATEGORY_OPTIONS = [
    'AI Web App',
    'Automation',
    'AI Agents',
    'Social Media',
    'Organic Social Media',
    'Paid Advertising',
    'Website Design',
    'SEO',
    'Launch Campaign',
    'Graphic Design',
    'Branding',
    'Content Creation',
];


export const LOADING_MESSAGES: string[] = [
  "Warming up the AI director...",
  "Setting up the virtual cameras...",
  "Script is locked, action!",
  "Rendering the first few frames...",
  "Applying special effects and color grading...",
  "This is looking great, almost there...",
  "Adding the final touches...",
  "Finalizing the video masterpiece...",
];

export const WIZARD_ROUTES = [
  { path: "#/brief/new", label: "Welcome", step: WizardStep.WELCOME },
  { path: "#/brief/scope", label: "Scope", step: WizardStep.SCOPE },
  { path: "#/brief/categories", label: "Categories", step: WizardStep.CATEGORY },
  { path: "#/brief/review", label: "Review", step: WizardStep.REVIEW },
  { path: "#/brief/finalize", label: "Finalize", step: WizardStep.FINALIZE },
];
