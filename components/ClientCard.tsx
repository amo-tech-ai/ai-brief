import React from 'react';
import { Client } from '../utils/clients';
import { ArrowRightIcon } from './icons';

interface ClientCardProps {
    client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
    return (
        <a 
            href={`#/dashboard/agency/clients/${client.id}`}
            className="block bg-white p-6 rounded-2xl border border-breef-border shadow-sm hover:shadow-lg hover:border-amo-orange/50 transition-all duration-300 group flex flex-col text-center items-center"
        >
            <div className={`w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-3xl mb-4 ${client.avatarColor}`}>
                {client.name.charAt(0)}
            </div>
            <h3 className="text-xl font-bold text-breef-text-primary group-hover:text-amo-orange transition-colors">{client.name}</h3>
            <p className="text-sm text-breef-text-secondary mt-1">{client.briefCount} Briefs</p>
            <p className="text-xs text-gray-400 mt-2">Last activity: {client.lastActivity}</p>
            
            <div className="mt-6 w-full pt-4 border-t border-breef-border/80 flex justify-center items-center">
                <span className="font-semibold text-sm text-amo-orange flex items-center">
                    View Client
                    <ArrowRightIcon className="ml-1.5 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"/>
                </span>
            </div>
        </a>
    );
};

export default ClientCard;