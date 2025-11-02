export enum MainStage {
  SCOPE = 1,
  PITCHES = 2,
  AGENCY = 3,
}

export enum ScopeStep {
  AGENCY_TYPE,
  BUDGET,
}

export enum View {
  SCOPE_BUILDER,
  PROJECT_PROPOSAL,
  PROJECT_DASHBOARD,
}

export interface StageInfo {
  id: MainStage;
  title: string;
  description: string;
}

export interface ScopeData {
  agencyType: string;
  budget: string;
}