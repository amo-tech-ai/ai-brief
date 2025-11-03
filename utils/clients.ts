import { supabase } from './supabaseClient';

export interface Client {
    id: string;
    name: string;
    briefCount: number;
    lastActivity: string;
    avatarColor: string;
    createdAt: string;
}

const timeSince = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + "y ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + "m ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + "d ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + "h ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + "min ago";
    return Math.floor(seconds) + "s ago";
};

// This is inefficient (N+1 queries). In a production app, this should be
// a database view or an RPC function in Supabase.
export const getClients = async (): Promise<Client[]> => {
    const { data: clientsData, error: clientsError } = await supabase
        .from('clients')
        .select('*')
        .order('name');

    if (clientsError) {
        console.error("Error fetching clients:", clientsError);
        return [];
    }
    if (!clientsData) return [];

    const { data: briefsData, error: briefsError } = await supabase
        .from('briefs')
        .select('client_id, created_at');

    if (briefsError) {
        console.error("Error fetching briefs for client calculation:", briefsError);
        // Continue with what we have
    }

    const briefsByClient = (briefsData || []).reduce((acc, brief) => {
        if (brief.client_id) {
            if (!acc[brief.client_id]) acc[brief.client_id] = [];
            acc[brief.client_id].push(brief);
        }
        return acc;
    }, {} as Record<string, { created_at: string }[]>);

    return clientsData.map(client => {
        const clientBriefs = briefsByClient[client.id] || [];
        const lastBrief = clientBriefs.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];

        return {
            id: client.id,
            name: client.name,
            avatarColor: client.avatar_color,
            createdAt: client.created_at,
            briefCount: clientBriefs.length,
            lastActivity: lastBrief ? timeSince(new Date(lastBrief.created_at)) : 'No activity',
        };
    });
};

export const getClientById = async (id: string): Promise<Client | undefined> => {
    const { data: clientData, error: clientError } = await supabase
        .from('clients')
        .select('*')
        .eq('id', id)
        .single();
        
    if (clientError || !clientData) {
        console.error("Error fetching client:", clientError);
        return undefined;
    }
    
    const { data: briefsData, error: briefsError } = await supabase
        .from('briefs')
        .select('created_at')
        .eq('client_id', id)
        .order('created_at', { ascending: false });

    if (briefsError) {
        console.error("Error fetching briefs for client:", briefsError);
    }
    
    const briefCount = briefsData?.length || 0;
    const lastActivity = briefsData && briefsData.length > 0 ? timeSince(new Date(briefsData[0].created_at)) : 'No activity';

    return {
        id: clientData.id,
        name: clientData.name,
        avatarColor: clientData.avatar_color,
        createdAt: clientData.created_at,
        briefCount,
        lastActivity,
    };
};