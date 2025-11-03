import React from 'react';

const ProcessPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-breef-text-primary tracking-tight sm:text-5xl">
          Our Process
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-breef-text-secondary">
          This page is under construction. We are currently detailing our streamlined process from brief to launch.
        </p>
        <div className="mt-10">
          <a
            href="#/"
            className="inline-block bg-amo-orange text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
