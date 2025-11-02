import { StageInfo, MainStage } from './types';

export const MAIN_STAGES: StageInfo[] = [
  {
    id: MainStage.SCOPE,
    title: '1. Scope',
    description: 'Start your project. Use AI or work with an expert to build a custom scope to share with agencies.',
  },
  {
    id: MainStage.PITCHES,
    title: '2. Pitches',
    description: 'Get custom pitches from vetted agencies, hand-picked for your scope, brand and goals.',
  },
  {
    id: MainStage.AGENCY,
    title: '3. Agency',
    description: 'Once you select the perfect agency, manage all contracts and payments in one place.',
  },
];

export const AGENCY_TYPES: string[] = [
    'Organic Social Media', 'Paid Advertising', 'Website Design', 'SEO',
    'Launch Campaign', 'Graphic Design', 'Branding', 'Content Creation',
    'Digital Marketing', 'Public Relations', 'Email Marketing', 'Copywriting',
    'Video Production', 'Influencer Marketing'
];

export const BUDGET_RANGES: string[] = [
    '$5K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K+'
];