
export enum Step {
  DETAILS = 1,
  GENERATE = 2,
  RESULT = 3,
}

export interface ProfileData {
    name: string;
    company: string;
    website: string;
    email: string;
    phone: string;
}

export interface StepInfo {
  id: Step;
  title: string;
  description: string;
}
