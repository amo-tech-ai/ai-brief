import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

type Role = 'agency' | 'client';

interface AuthContextType {
  role: Role;
  setRole: (role: Role) => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<Role>('agency'); // Default role
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Check for query param for easy testing
    const params = new URLSearchParams(window.location.search);
    const roleFromQuery = params.get('role');
    
    if (roleFromQuery === 'agency' || roleFromQuery === 'client') {
      localStorage.setItem('userRole', roleFromQuery);
      setRoleState(roleFromQuery);
      setLoading(false);
      return;
    }

    // 2. Check localStorage for persisted role
    const savedRole = localStorage.getItem('userRole');
    if (savedRole === 'agency' || savedRole === 'client') {
      setRoleState(savedRole);
    }
    
    setLoading(false);
  }, []);

  const setRole = (newRole: Role) => {
    localStorage.setItem('userRole', newRole);
    setRoleState(newRole);
  };
  
  const value = useMemo(() => ({ role, setRole, loading }), [role, loading]);

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
