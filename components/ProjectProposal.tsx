import React from 'react';
import { ScopeData } from '../types';
import Card from './Card';
import { HamburgerMenuIcon, ArrowRightIcon, CheckCircleIcon } from './icons';

interface ProjectProposalProps {
  scopeData: ScopeData;
  onNext: () => void;
}

const ProjectProposalHeader: React.FC = () => (
    <div className="flex items-center space-x-2">
        <HamburgerMenuIcon />
    </div>
);

const DetailRow: React.FC<{label: string, children: React.ReactNode, isLast?: boolean}> = ({label, children, isLast}) => (
    <div className={`flex justify-between items-start py-4 ${!isLast && 'border-b border-gray-200'}`}>
        <span className="font-semibold text-gray-600 text-sm">{label}</span>
        <div>{children}</div>
    </div>
);

const PlaceholderLine: React.FC<{width: string}> = ({width}) => <div className={`h-2 bg-gray-200 rounded-full ${width}`}></div>

const ProjectProposal: React.FC<ProjectProposalProps> = ({ scopeData, onNext }) => {
  return (
    <div className="relative">
      <Card header={<ProjectProposalHeader />}>
        <div className="min-h-[400px]">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Project Proposal</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <DetailRow label="Project Goals">
                           <div className="space-y-2.5 w-48 mt-1">
                             <PlaceholderLine width="w-full" />
                             <PlaceholderLine width="w-10/12" />
                           </div>
                        </DetailRow>
                         <DetailRow label="Our Approach">
                           <div className="space-y-2.5 w-48 mt-1">
                             <PlaceholderLine width="w-full" />
                             <PlaceholderLine width="w-10/12" />
                             <PlaceholderLine width="w-11/12" />
                           </div>
                        </DetailRow>
                        <DetailRow label="Budget" isLast>
                            <div className="flex items-center space-x-2 text-green-600 mt-1">
                                <CheckCircleIcon />
                                <span className="font-semibold text-sm">{scopeData.budget}</span>
                            </div>
                        </DetailRow>
                    </div>
                </div>
                 <div>
                    <span className="font-semibold text-gray-600 text-sm">Your Team</span>
                    <div className="space-y-3 mt-4">
                        {[...Array(4)].map((_, i) => (
                             <div key={i} className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300"></div>
                                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </Card>
      <button 
        onClick={onNext}
        className="absolute -bottom-5 right-10 w-14 h-14 bg-orange-500 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-orange-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        aria-label="Next step"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default ProjectProposal;