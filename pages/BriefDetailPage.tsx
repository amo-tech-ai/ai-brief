import React, { useState, useEffect } from 'react';
import { Brief } from '../types';
import { getBriefById, updateBrief } from '../utils/briefs';
import { ArrowLeftIcon, ChevronDownIcon, PencilIcon, RestartIcon, LoadingSpinner } from '../components/icons';
import Button from '../components/Button';
import { generateProjectBrief } from '../services/geminiService';

interface BriefDetailPageProps {
    briefId: string;
}

const BriefDetailPage: React.FC<BriefDetailPageProps> = ({ briefId }) => {
    const [brief, setBrief] = useState<Brief | null>(null);
    const [loading, setLoading] = useState(true);
    const [isRegenerating, setIsRegenerating] = useState(false);
    const [regenerationError, setRegenerationError] = useState<string | null>(null);

    // Determine role from URL to construct correct back/edit links
    const roleFromPath = window.location.hash.includes('/agency/') ? 'agency' : 'client';
    const backUrl = `#/dashboard/${roleFromPath}/briefs`;
    const editUrl = `#/dashboard/${roleFromPath}/brief/${briefId}/edit`;

    useEffect(() => {
        const fetchBrief = async () => {
            setLoading(true);
            const foundBrief = await getBriefById(briefId);
            setBrief(foundBrief || null);
            setLoading(false);
        };
        fetchBrief();
    }, [briefId]);
    
    const handleRegenerate = async () => {
        if (!brief) return;
        setIsRegenerating(true);
        setRegenerationError(null);
        try {
            const newContent = await generateProjectBrief(brief);
            if (!newContent) throw new Error("The AI failed to generate new content.");
            const savedBrief = await updateBrief(brief.id, { generatedBrief: newContent });
            if (savedBrief) setBrief(savedBrief);
            else throw new Error("Failed to save the regenerated brief.");
        } catch (err: any) {
            setRegenerationError(err.message || "An unknown error occurred.");
        } finally {
            setIsRegenerating(false);
        }
    };

    const renderMarkdown = (text: string) => ({ __html: text.replace(/\n/g, '<br />') });

    if (loading) return <div>Loading...</div>;
    if (!brief) return <div>Brief not found. <a href="#/dashboard">Return to Dashboard</a></div>;
    
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-between items-center">
                <a href={backUrl} className="flex items-center text-sm text-breef-text-secondary hover:text-breef-text-primary">
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Back to Briefs
                </a>
                <a href={editUrl} className="inline-flex items-center px-4 py-2 border border-breef-border text-sm font-medium rounded-md">
                    <PencilIcon className="w-4 h-4 mr-2" />
                    Edit
                </a>
            </div>

            <header className="mb-6">
                <h1 className="text-4xl font-extrabold text-breef-text-primary">{brief.projectName}</h1>
                <p className="mt-2 text-breef-text-secondary">
                    Created on {new Date(brief.createdAt).toLocaleDateString()}
                </p>
            </header>

            <article className="bg-white p-6 sm:p-8 rounded-lg border border-breef-border prose max-w-none"
                dangerouslySetInnerHTML={renderMarkdown(brief.generatedBrief || 'No content.')}
            />

            <div className="mt-10 pt-6 border-t border-breef-border flex flex-col items-center">
                <Button variant="secondary" onClick={handleRegenerate} disabled={isRegenerating}>
                    {isRegenerating ? <LoadingSpinner /> : <RestartIcon />}
                    <span className="ml-2">{isRegenerating ? 'Regenerating...' : 'Regenerate Brief'}</span>
                </Button>
                {regenerationError && <p className="text-red-600 text-sm mt-4">{regenerationError}</p>}
            </div>
        </div>
    );
};

export default BriefDetailPage;