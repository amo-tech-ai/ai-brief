import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { LoadingSpinner } from '../components/icons';

const DashboardDispatcher: React.FC = () => {
    const { role } = useAuth();

    useEffect(() => {
        if (role) {
            window.location.hash = `#/dashboard/${role}`;
        }
    }, [role]);

    return (
        <div className="flex items-center justify-center h-screen">
            <LoadingSpinner className="h-10 w-10 text-amo-orange" />
        </div>
    );
};

export default DashboardDispatcher;
