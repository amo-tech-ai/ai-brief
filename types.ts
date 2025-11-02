
export enum Step {
  PLAN = 1,
  VIDEO = 2,
  RESULT = 3,
}

export enum WizardStep {
    WELCOME,
    SCOPE,
    CATEGORY,
    REVIEW,
    FINALIZE,
}

export interface BriefData {
    projectType: string;
    goals: string;
    budget: string;
    categories: string[];
}

export type AspectRatio = '16:9' | '9:16';

export interface StepInfo {
  id: Step;
  title: string;
  description: string;
}
