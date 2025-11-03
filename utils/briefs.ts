import { Brief, BriefData } from '../types';

const BRIEFS_STORAGE_KEY = 'ai_briefs';

export const getBriefs = (): Brief[] => {
  try {
    const briefsJson = localStorage.getItem(BRIEFS_STORAGE_KEY);
    const briefs: Brief[] = briefsJson ? JSON.parse(briefsJson) : [];

    // MOCK DATA ASSOCIATION FOR DEMO
    // In a real app, clientId would be saved with the brief. Here we simulate it
    // to ensure the client detail page has data to display.
    briefs.forEach((brief, index) => {
        if (!brief.clientId) { // Only assign if it doesn't have one
            if (index % 4 === 0) brief.clientId = 'client_1';
            else if (index % 4 === 1) brief.clientId = 'client_2';
            else if (index % 4 === 2) brief.clientId = 'client_3';
            else brief.clientId = 'client_4';
        }
    });

    return briefs;
  } catch (error) {
    console.error("Error reading briefs from localStorage", error);
    return [];
  }
};

export const getBriefById = (id: string): Brief | undefined => {
    return getBriefs().find(brief => brief.id === id);
}

export const saveBrief = (briefData: Partial<BriefData>): Brief => {
  const briefs = getBriefs();
  const newBrief: Brief = {
    projectName: briefData.projectName || 'Untitled Brief',
    projectGoal: briefData.projectGoal || '',
    projectAudience: briefData.projectAudience || '',
    categories: briefData.categories || [],
    budget: briefData.budget || '',
    timeline: briefData.timeline || '',
    generatedBrief: briefData.generatedBrief || '',
    companyName: briefData.companyName || '',
    websiteUrl: briefData.websiteUrl || '',
    email: briefData.email || '',
    phone: briefData.phone || '',
    projectManager: briefData.projectManager || '',
    teamMembers: briefData.teamMembers || '',
    milestones: briefData.milestones || '',
    clientId: briefData.clientId,
    id: `brief_${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'Generated',
  };
  briefs.unshift(newBrief); // Add to the beginning
  try {
    localStorage.setItem(BRIEFS_STORAGE_KEY, JSON.stringify(briefs));
  } catch (error) {
    console.error("Error saving brief to localStorage", error);
  }
  return newBrief;
};

export const updateBrief = (id: string, updatedData: Partial<BriefData>): Brief | null => {
    const briefs = getBriefs();
    const briefIndex = briefs.findIndex(b => b.id === id);

    if (briefIndex === -1) {
        console.error("Brief not found for updating");
        return null;
    }

    const updatedBrief = { ...briefs[briefIndex], ...updatedData };
    briefs[briefIndex] = updatedBrief;

    try {
        localStorage.setItem(BRIEFS_STORAGE_KEY, JSON.stringify(briefs));
        return updatedBrief;
    } catch (error) {
        console.error("Error updating brief in localStorage", error);
        return null;
    }
};

export const deleteBrief = (id: string): void => {
    let briefs = getBriefs();
    briefs = briefs.filter(b => b.id !== id);
    try {
        localStorage.setItem(BRIEFS_STORAGE_KEY, JSON.stringify(briefs));
    } catch (error) {
        console.error("Error deleting brief from localStorage", error);
    }
}
