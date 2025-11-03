import React from 'react';
import { useAuth } from '../hooks/useAuth';

const ForbiddenPage: React.FC = () => {
    const { role } = useAuth();
    const correctDashboard = `#/dashboard/${role}`;
    return (
        <div className="text-center p-10 flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-red-500">403</h1>
            <h2 className="text-2xl font-bold mt-4">Access Denied</h2>
            <p className="mt-2 text-gray-600">You do not have permission to view this page.</p>
            <a href={correctDashboard} className="mt-6 inline-block px-6 py-3 bg-amo-orange text-white rounded-md font-semibold">
                Go to My Dashboard
            </a>
        </div>
    );
};

export default ForbiddenPage;
