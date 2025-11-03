export interface Client {
    id: string;
    name: string;
    briefCount: number;
    lastActivity: string;
    avatarColor: string; // e.g., 'bg-blue-500'
}

// Mock data - in a real app, this would come from a database.
const mockClients: Client[] = [
    { id: 'client_1', name: 'Acme Inc.', briefCount: 12, lastActivity: '2d ago', avatarColor: 'bg-blue-500' },
    { id: 'client_2', name: 'Tech Solutions', briefCount: 8, lastActivity: '5d ago', avatarColor: 'bg-indigo-500' },
    { id: 'client_3', name: 'Retail Goods', briefCount: 6, lastActivity: '1w ago', avatarColor: 'bg-pink-500' },
    { id: 'client_4', name: 'Brand Co.', briefCount: 4, lastActivity: '2w ago', avatarColor: 'bg-green-500' },
    { id: 'client_5', name: 'ClientWorks', briefCount: 3, lastActivity: '3w ago', avatarColor: 'bg-purple-500' },
    { id: 'client_6', name: 'Innovate LLC', briefCount: 1, lastActivity: '1m ago', avatarColor: 'bg-teal-500' },
];

export const getClients = (): Client[] => {
    // In a real app, you might fetch this from localStorage or an API.
    return mockClients;
};

export const getClientById = (id: string): Client | undefined => {
    return mockClients.find(client => client.id === id);
}
