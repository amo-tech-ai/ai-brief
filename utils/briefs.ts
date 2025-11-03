import { Brief, BriefData } from '../types';
import { supabase } from './supabaseClient';

// Helper to map DB record (snake_case) to JS object (camelCase)
const fromDB = (dbBrief: any): Brief => ({
    id: dbBrief.id,
    createdAt: dbBrief.created_at,
    status: dbBrief.status,
    projectName: dbBrief.project_name,
    projectGoal: dbBrief.project_goal,
    projectAudience: dbBrief.project_audience,
    categories: dbBrief.categories || [],
    budget: dbBrief.budget,
    timeline: dbBrief.timeline,
    generatedBrief: dbBrief.generated_brief,
    companyName: dbBrief.company_name,
    websiteUrl: dbBrief.website_url,
    email: dbBrief.email,
    phone: dbBrief.phone,
    projectManager: dbBrief.project_manager,
    teamMembers: dbBrief.team_members,
    milestones: dbBrief.milestones,
    clientId: dbBrief.client_id,
});

// Helper to map JS object (camelCase) to DB record (snake_case)
const toDB = (briefData: Partial<BriefData>): any => {
    const dbRecord: { [key: string]: any } = {};
    for (const key in briefData) {
        if (Object.prototype.hasOwnProperty.call(briefData, key)) {
            const newKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
            dbRecord[newKey] = (briefData as any)[key];
        }
    }
    // Handle specific mapping from clientId to client_id
    if (briefData.clientId) {
        dbRecord.client_id = briefData.clientId;
        delete dbRecord.client_id_; // remove incorrect mapping if any
        delete dbRecord.client_id;
    }
    return dbRecord;
};

export const getBriefs = async (): Promise<Brief[]> => {
    const { data, error } = await supabase.from('briefs').select('*').order('created_at', { ascending: false });
    if (error) {
        console.error("Error reading briefs from Supabase", error);
        return [];
    }
    return data ? data.map(fromDB) : [];
};

export const getBriefsByClientId = async (clientId: string): Promise<Brief[]> => {
    const { data, error } = await supabase
        .from('briefs')
        .select('*')
        .eq('client_id', clientId)
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error("Error reading briefs for client from Supabase", error);
        return [];
    }
    return data ? data.map(fromDB) : [];
}

export const getBriefById = async (id: string): Promise<Brief | undefined> => {
    const { data, error } = await supabase.from('briefs').select('*').eq('id', id).single();
    if (error || !data) {
        console.error("Error getting brief by id", error);
        return undefined;
    }
    return fromDB(data);
}

export const saveBrief = async (briefData: Partial<BriefData>): Promise<Brief> => {
    const dbRecord = toDB({
        ...briefData,
        status: 'Generated',
    });

    const { data, error } = await supabase
        .from('briefs')
        .insert(dbRecord)
        .select()
        .single();
    
    if (error || !data) {
        console.error("Error saving brief to Supabase", error);
        throw new Error("Could not save brief.");
    }

    return fromDB(data);
};

export const updateBrief = async (id: string, updatedData: Partial<BriefData>): Promise<Brief | null> => {
    const dbRecord = toDB(updatedData);

    const { data, error } = await supabase
        .from('briefs')
        .update(dbRecord)
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error("Error updating brief in Supabase", error);
        return null;
    }
    
    return data ? fromDB(data) : null;
};

export const deleteBrief = async (id: string): Promise<void> => {
    const { error } = await supabase.from('briefs').delete().eq('id', id);
    if (error) {
        console.error("Error deleting brief from Supabase", error);
    }
}