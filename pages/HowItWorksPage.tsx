import React from 'react';
import ScopingProcessVisual from '../components/ScopingProcessVisual';

const HowItWorksPage: React.FC = () => {
    return (
        <div className="bg-breef-bg">
            <div className="py-32 sm:py-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScopingProcessVisual />
                </div>
            </div>
        </div>
    );
};

export default HowItWorksPage;
