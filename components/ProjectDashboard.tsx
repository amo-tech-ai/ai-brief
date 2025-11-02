import React from 'react';
import { ScopeData } from '../types';
import Card from './Card';
import Button from './Button';
import { DotsIcon, FileIcon, FolderIcon, PresentationIcon } from './icons';

interface ProjectDashboardProps {
  scopeData: ScopeData;
  onRestart: () => void;
}

const ProjectDashboardHeader: React.FC = () => (
    <>
        <div className="flex items-center space-x-2">
            <DotsIcon />
            <h2 className="font-semibold text-gray-700">breef.</h2>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-orange-500">Home</a>
            <a href="#" className="text-orange-500 font-semibold">Projects</a>
            <a href="#" className="hover:text-orange-500">Invoices</a>
        </div>
    </>
);

const ProjectDashboard: React.FC<ProjectDashboardProps> = ({ scopeData, onRestart }) => {
  return (
    <Card header={<ProjectDashboardHeader />}>
        <div className="min-h-[400px]">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Project Dashboard</h3>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-700">{scopeData.agencyType}</h4>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <FileIcon type="Proposal" />
                    <FileIcon type="Contract" />
                    <PresentationIcon name="Presentation" />
                    <FolderIcon name="Audits" />
                </div>
                 <div className="mt-6 h-2 bg-gray-200 rounded-full w-full"></div>
                 <div className="mt-2 h-2 bg-gray-200 rounded-full w-2/3"></div>
            </div>

            <div className="text-center mt-8">
                <p className="text-gray-600 mb-6">Your project is set up. You can now manage everything in one place.</p>
                <Button onClick={onRestart} variant="secondary">
                    Start a New Search
                </Button>
            </div>
        </div>
    </Card>
  );
};

export default ProjectDashboard;