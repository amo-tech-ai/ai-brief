import React, { useState, useEffect, FormEvent } from 'react';
import { Brief, BriefData } from '../types';
import { getBriefById, updateBrief } from '../utils/briefs';
import Button from '../components/Button';
import { ArrowLeftIcon, CheckIcon } from '../components/icons';
import { CATEGORIES, BUDGET_RANGES, TIMELINES } from '../constants';

const EditBriefPage: React.FC<{ briefId: string }> = ({ briefId }) => {
    const [brief, setBrief] = useState<Partial<BriefData> | null>(null);
    const [loading, setLoading] = useState(true);

    const roleFromPath = window.location.hash.includes('/agency/') ? 'agency' : 'client';
    const detailUrl = `#/dashboard/${roleFromPath}/brief/${briefId}`;

    useEffect(() => {
        const fetchBrief = async () => {
            setLoading(true);
            const foundBrief = await getBriefById(briefId);
            setBrief(foundBrief || null);
            setLoading(false);
        };
        fetchBrief();
    }, [briefId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBrief(prev => prev ? { ...prev, [name]: value } : null);
    };
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (brief) {
            await updateBrief(briefId, brief);
            window.location.hash = detailUrl;
        }
    };
    
    if (loading || !brief) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
             <div className="mb-8">
                <a href={detailUrl} className="flex items-center text-sm text-breef-text-secondary">
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Cancel Edit
                </a>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border space-y-8">
                <header>
                    <h1 className="text-3xl font-bold">Edit Brief: {brief.projectName}</h1>
                </header>
                
                {/* Simplified form for brevity */}
                <div>
                    <label htmlFor="projectName">Project Name</label>
                    <input id="projectName" name="projectName" value={brief.projectName || ''} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm p-3" />
                </div>
                <div>
                    <label htmlFor="projectGoal">Project Goal</label>
                    <textarea id="projectGoal" name="projectGoal" value={brief.projectGoal || ''} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm p-3" />
                </div>

                <footer className="flex justify-end pt-6 border-t">
                    <Button type="submit">Save Changes</Button>
                </footer>
            </form>
        </div>
    );
};

export default EditBriefPage;