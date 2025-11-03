import React, { useState, useEffect, FormEvent } from 'react';
import { Brief, BriefData } from '../types';
import { getBriefById, updateBrief } from '../utils/briefs';
import Button from '../components/Button';
import { ArrowLeftIcon, CheckIcon } from '../components/icons';
import { CATEGORIES, BUDGET_RANGES, TIMELINES } from '../constants';

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & { label: string; isTextArea?: boolean }> = ({ label, id, isTextArea, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        {isTextArea ? (
            <textarea id={id} rows={3} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3" {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}></textarea>
        ) : (
            <input id={id} type="text" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3" {...props as React.InputHTMLAttributes<HTMLInputElement>} />
        )}
    </div>
);

const OptionSelector: React.FC<{ title: string, options: string[], selected: string, onSelect: (option: string) => void }> = ({ title, options, selected, onSelect }) => (
    <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {options.map(option => (
                <button
                    key={option}
                    type="button"
                    onClick={() => onSelect(option)}
                    className={`px-4 py-2 rounded-md font-medium border-2 transition-colors duration-200 ${
                        selected === option
                        ? 'bg-orange-50 border-orange-500 text-orange-600'
                        : 'bg-white border-gray-300 text-gray-700 hover:border-orange-400'
                    }`}
                >
                    {option}
                </button>
            ))}
        </div>
    </div>
);

const EditBriefPage: React.FC<{ briefId: string }> = ({ briefId }) => {
    const [brief, setBrief] = useState<Partial<BriefData> | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundBrief = getBriefById(briefId);
        if (foundBrief) {
            setBrief(foundBrief);
        }
        setLoading(false);
    }, [briefId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBrief(prev => prev ? { ...prev, [name]: value } : null);
    };

    const handleCategoryToggle = (category: string) => {
        setBrief(prev => {
            if (!prev) return null;
            const currentCategories = prev.categories || [];
            const newCategories = currentCategories.includes(category)
                ? currentCategories.filter(c => c !== category)
                : [...currentCategories, category];
            return { ...prev, categories: newCategories };
        });
    };

    const handleOptionSelect = (field: keyof BriefData, value: string) => {
         setBrief(prev => prev ? { ...prev, [field]: value } : null);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (brief) {
            updateBrief(briefId, brief);
            window.location.hash = `#/dashboard/brief/${briefId}`;
        }
    };
    
    if (loading) {
        return <div className="text-center p-10">Loading editor...</div>;
    }

    if (!brief) {
        return <div className="text-center p-10">
            <h2 className="text-2xl font-bold">Brief not found</h2>
            <a href="#/dashboard" className="mt-4 text-breef-accent hover:underline">Return to Dashboard</a>
        </div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
             <div className="mb-8">
                <a href={`#/dashboard/brief/${briefId}`} className="flex items-center text-sm text-breef-text-secondary hover:text-breef-text-primary transition-colors">
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Cancel Edit
                </a>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-12">
                <header>
                    <h1 className="text-3xl font-bold text-gray-800">Edit Brief: {brief.projectName}</h1>
                    <p className="text-gray-600 mt-2">Make changes to your brief details below.</p>
                </header>

                <section className="space-y-6">
                     <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">Contact Information</h2>
                     <InputField id="companyName" name="companyName" label="Company / Brand Name" value={brief.companyName || ''} onChange={handleChange} required />
                     <InputField id="websiteUrl" name="websiteUrl" label="Website URL" value={brief.websiteUrl || ''} onChange={handleChange} required />
                     <InputField id="email" name="email" label="Email" type="email" value={brief.email || ''} onChange={handleChange} required />
                     <InputField id="phone" name="phone" label="WhatsApp / Phone (Optional)" value={brief.phone || ''} onChange={handleChange} />
                </section>
                
                <section className="space-y-6">
                     <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">Project Scope</h2>
                     <InputField id="projectName" name="projectName" label="Project Name" value={brief.projectName || ''} onChange={handleChange} required />
                     <InputField id="projectGoal" name="projectGoal" label="What is the main goal?" isTextArea value={brief.projectGoal || ''} onChange={handleChange} required />
                     <InputField id="projectAudience" name="projectAudience" label="Who is the target audience?" value={brief.projectAudience || ''} onChange={handleChange} required />
                </section>

                 <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">Project Categories</h2>
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {CATEGORIES.map(category => {
                        const isSelected = brief.categories?.includes(category);
                        return (
                            <button
                            key={category}
                            type="button"
                            onClick={() => handleCategoryToggle(category)}
                            className={`p-4 rounded-lg border-2 text-center font-semibold transition-all duration-200 relative ${
                                isSelected 
                                ? 'bg-orange-50 border-orange-500 text-orange-600' 
                                : 'bg-white border-gray-300 text-gray-700 hover:border-orange-400'
                            }`}
                            >
                            {isSelected && (
                                <span className="absolute top-2 right-2 bg-orange-500 rounded-full p-0.5">
                                <CheckIcon className="w-4 h-4 text-white" />
                                </span>
                            )}
                            {category}
                            </button>
                        );
                        })}
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">Budget & Timeline</h2>
                    <OptionSelector title="Estimated budget" options={BUDGET_RANGES} selected={brief.budget || ''} onSelect={(val) => handleOptionSelect('budget', val)} />
                    <OptionSelector title="Desired timeline" options={TIMELINES} selected={brief.timeline || ''} onSelect={(val) => handleOptionSelect('timeline', val)} />
                </section>

                <section className="space-y-6">
                     <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">Project Management</h2>
                     <InputField id="projectManager" name="projectManager" label="Project Manager" value={brief.projectManager || ''} onChange={handleChange} />
                     <InputField id="teamMembers" name="teamMembers" label="Team Members" value={brief.teamMembers || ''} onChange={handleChange} />
                     <InputField id="milestones" name="milestones" label="Key Milestones" isTextArea value={brief.milestones || ''} onChange={handleChange} />
                </section>

                <footer className="flex justify-end items-center pt-6 border-t">
                    <div className="flex gap-4">
                         <a href={`#/dashboard/brief/${briefId}`} className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 text-base font-semibold rounded-md transition-all">
                            Cancel
                         </a>
                        <Button type="submit">Save Changes</Button>
                    </div>
                </footer>
            </form>
        </div>
    );
};

export default EditBriefPage;