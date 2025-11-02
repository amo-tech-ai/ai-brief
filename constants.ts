import { Step, StepInfo } from './types';

export const STEPS: StepInfo[] = [
  {
    id: Step.DETAILS,
    title: '1. Enter Details',
    description: 'Provide your contact information to be included on the slide.',
  },
  {
    id: Step.GENERATE,
    title: '2. Generate Slide',
    description: 'Our AI will design a professional profile slide based on your details.',
  },
  {
    id: Step.RESULT,
    title: '3. Review & Download',
    description: 'Review the generated slide and download your new professional asset.',
  },
];

export const LOADING_MESSAGES: string[] = [
  "Warming up the design AI...",
  "Sketching out a few concepts...",
  "Choosing the perfect font...",
  "Applying the color palette...",
  "Arranging the layout...",
  "Adding the finishing touches...",
  "Preparing your slide for download...",
];

// Fix: Added WIZARD_ROUTES to resolve compilation error in components/FooterNav.tsx
export const WIZARD_ROUTES = [
  { path: '#/brief/new', label: 'New Brief' },
];
