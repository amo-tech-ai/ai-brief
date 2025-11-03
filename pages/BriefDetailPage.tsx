import React, { useState, useEffect } from 'react';
import { Brief } from '../types';
import { getBriefById, updateBrief } from '../utils/briefs';
import { ArrowLeftIcon, ChevronDownIcon, PencilIcon, RestartIcon, LoadingSpinner } from '../components/icons';
import Button from '../components/Button';
import { generateProjectBrief } from '../services/geminiService';

interface BriefDetailPageProps {
    briefId: string;
}

const BriefDetailSkeleton: React.FC = () => (
    <div className="max-w-4xl mx-auto animate-pulse">
        {/* Top Nav Skeleton */}
        <div className="mb-8 flex justify-between items-center">
            <div className="h-5 bg-gray-200 rounded w-40"></div>
            <div className="h-9 bg-gray-200 rounded-md w-28"></div>
        </div>

        {/* Header Skeleton */}
        <header className="mb-6">
            <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-5 bg-gray-200 rounded w-1/2"></div>
        </header>

        {/* Card Skeletons */}
        <div className="bg-white rounded-lg border border-breef-border mb-6 p-6">
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
        </div>
        
        <div className="bg-white rounded-lg border border-breef-border mb-6 p-6">
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-breef-border">
            <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-6"></div>

                <div className="h-8 bg-gray-300 rounded w-1/4 mb-6"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
        </div>
    </div>
);

const BriefDetailPage: React.FC<BriefDetailPageProps> = ({ briefId }) => {
    const [brief, setBrief] = useState<Brief | null>(null);
    const [loading, setLoading] = useState(true);
    const [isRegenerating, setIsRegenerating] = useState(false);
    const [regenerationError, setRegenerationError] = useState<string | null>(null);

    useEffect(() => {
        // NOTE: A brief timeout is used to make the skeleton loader visible.
        // In a real-world app, this would be replaced by an async data fetch.
        setTimeout(() => {
            const foundBrief = getBriefById(briefId);
            if (foundBrief) {
                setBrief(foundBrief);
            }
            setLoading(false);
        }, 500);
    }, [briefId]);
    
    const handleRegenerate = async () => {
        if (!brief) return;

        setIsRegenerating(true);
        setRegenerationError(null);

        try {
            const newContent = await generateProjectBrief(brief);
            if (!newContent) {
                throw new Error("The AI failed to generate new content.");
            }

            const updatedData = { generatedBrief: newContent };
            const savedBrief = updateBrief(brief.id, updatedData);

            if (savedBrief) {
                setBrief(savedBrief);
            } else {
                 throw new Error("Failed to save the regenerated brief.");
            }
        } catch (err: any) {
            setRegenerationError(err.message || "An unknown error occurred during regeneration.");
        } finally {
            setIsRegenerating(false);
        }
    };

    const renderMarkdown = (text: string) => {
        let html = text
            .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-2">$1</h3>')
            .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 border-b pb-2">$1</h2>')
            .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4 border-b pb-2">$1</h1>')
            .replace(/-\s(.*?):/gim, '<strong>$1:</strong>')
            .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*)\*/g, '<em>$1</em>')
            .replace(/^\* (.*$)/gim, '<li class="ml-4 mb-1 list-disc">$1</li>')
            .replace(/^\d+\. (.*$)/gim, '<li class="ml-4 mb-1 list-decimal">$1</li>')
            .replace(/\n/g, '<br />');

        html = html.replace(/<br \/>(<br \/>)+/g, '<br />');
        html = html.replace(/(<li.*<\/li>)/gs, '<ul>$1</ul>').replace(/<\/ul><br \/><ul>/g, '');

        return { __html: html };
    };

    if (loading) {
        return <BriefDetailSkeleton />;
    }

    if (!brief) {
        return <div className="text-center p-10">
            <h2 className="text-2xl font-bold">Brief not found</h2>
            <a href="#/dashboard" className="mt-4 text-breef-accent hover:underline">Return to Dashboard</a>
        </div>;
    }

    const formattedDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    const SummaryCard = () => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <div className="bg-white rounded-lg border border-breef-border mb-6 overflow-hidden transition-all duration-500">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center p-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls="summary-content"
                >
                    <h3 className="text-xl font-bold text-breef-text-primary">Summary</h3>
                    <ChevronDownIcon className={`w-5 h-5 text-breef-text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                    id="summary-content"
                    className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm px-6 pb-6">
                        <div><strong className="font-semibold text-breef-text-secondary block">Goal</strong> {brief.projectGoal}</div>
                        <div><strong className="font-semibold text-breef-text-secondary block">Audience</strong> {brief.projectAudience}</div>
                        <div><strong className="font-semibold text-breef-text-secondary block">Budget</strong> {brief.budget}</div>
                        <div><strong className="font-semibold text-breef-text-secondary block">Timeline</strong> {brief.timeline}</div>
                        <div className="md:col-span-2"><strong className="font-semibold text-breef-text-secondary block">Categories</strong> {brief.categories.join(', ')}</div>
                    </div>
                </div>
            </div>
        );
    };
    
    const CompanyIntelligenceCard: React.FC<{ brief: Brief }> = ({ brief }) => {
        const [isOpen, setIsOpen] = useState(true);
        const hasCompanyInfo = brief.companyName || brief.websiteUrl || brief.email || brief.phone;
    
        if (!hasCompanyInfo) {
            return null;
        }
    
        return (
            <div className="bg-white rounded-lg border border-breef-border mb-6 overflow-hidden transition-all duration-500">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center p-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls="company-content"
                >
                    <h3 className="text-xl font-bold text-breef-text-primary">Company Intelligence</h3>
                    <ChevronDownIcon className={`w-5 h-5 text-breef-text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                    id="company-content"
                    className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm px-6 pb-6">
                        {brief.companyName && <div><strong className="font-semibold text-breef-text-secondary block">Company</strong> {brief.companyName}</div>}
                        {brief.websiteUrl && <div><strong className="font-semibold text-breef-text-secondary block">Website</strong> <a href={brief.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-breef-accent hover:underline">{brief.websiteUrl}</a></div>}
                        {brief.email && <div><strong className="font-semibold text-breef-text-secondary block">Email</strong> <a href={`mailto:${brief.email}`} className="text-breef-accent hover:underline">{brief.email}</a></div>}
                        {brief.phone && <div><strong className="font-semibold text-breef-text-secondary block">Phone</strong> {brief.phone}</div>}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-between items-center">
                <a href="#/dashboard" className="flex items-center text-sm text-breef-text-secondary hover:text-breef-text-primary transition-colors">
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Back to Dashboard
                </a>
                <a href={`#/dashboard/brief/${briefId}/edit`} className="inline-flex items-center px-4 py-2 border border-breef-border text-sm font-medium rounded-md text-breef-text-secondary bg-white hover:bg-gray-50 transition-colors">
                    <PencilIcon className="w-4 h-4 mr-2" />
                    Edit Brief
                </a>
            </div>

            <header className="mb-6">
                <h1 className="text-4xl font-extrabold text-breef-text-primary tracking-tight">{brief.projectName}</h1>
                <p className="mt-2 text-breef-text-secondary">
                    {brief.status} | Created on {formattedDate(brief.createdAt)}
                </p>
            </header>

            <SummaryCard />
            <CompanyIntelligenceCard brief={brief} />
            
            <article className="bg-white p-6 sm:p-8 rounded-lg border border-breef-border">
                <div 
                    className="prose max-w-none prose-headings:font-bold prose-headings:text-breef-text-primary prose-p:text-breef-text-secondary prose-strong:text-breef-text-primary"
                    dangerouslySetInnerHTML={renderMarkdown(brief.generatedBrief || 'No brief content available.')}
                />
            </article>

            <div className="mt-10 pt-6 border-t border-breef-border flex flex-col items-center">
                <Button
                    variant="secondary"
                    onClick={handleRegenerate}
                    disabled={isRegenerating}
                >
                    {isRegenerating ? (
                        <>
                            <LoadingSpinner className="h-5 w-5 text-gray-700" />
                            <span className="ml-2">Regenerating...</span>
                        </>
                    ) : (
                        <>
                            <RestartIcon className="mr-2 w-5 h-5" />
                            Regenerate Brief
                        </>
                    )}
                </Button>
                {regenerationError && <p className="text-red-600 text-sm mt-4 text-center">{regenerationError}</p>}
            </div>
        </div>
    );
};

export default BriefDetailPage;