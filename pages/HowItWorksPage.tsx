import React from 'react';
import SiteFooter from '../components/SiteFooter';
import ScopingProcessVisual from '../components/ScopingProcessVisual';

const Nav = () => (
    <header className="absolute top-0 left-0 right-0 z-20">
       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
           <div className="flex justify-between items-center">
               <a href="#/" className="flex items-center space-x-2">
                   <div className="bg-breef-text-primary text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
                       A
                   </div>
                   <span className="font-bold text-breef-text-primary text-2xl">AMO AI</span>
               </a>
                <div className="hidden md:flex items-center space-x-8">
                   <a href="#/services" className="text-gray-600 hover:text-amo-orange font-medium">Services</a>
                   <a href="#/how-it-works" className="text-amo-orange font-semibold">How It Works</a>
                   <a href="#/projects" className="text-gray-600 hover:text-amo-orange font-medium">Projects</a>
               </div>
               <div>
                   <a href="#/dashboard" className="text-gray-600 hover:text-amo-orange font-medium">
                       Dashboard
                   </a>
               </div>
           </div>
       </nav>
   </header>
);

const HowItWorksPage: React.FC = () => {
    return (
        <div className="bg-breef-bg">
            <Nav />
            <main className="py-32 sm:py-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScopingProcessVisual />
                </div>
            </main>
            <SiteFooter />
        </div>
    );
};

export default HowItWorksPage;