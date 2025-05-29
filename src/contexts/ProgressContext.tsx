import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  medals: Record<string, boolean>;
  awardMedal: (moduleId: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: React.ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const [medals, setMedals] = useState<Record<string, boolean>>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('catequese-progress');
      if (savedProgress) {
        setMedals(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  }, []);

  // Save progress to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('catequese-progress', JSON.stringify(medals));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }, [medals]);

  const awardMedal = (moduleId: string) => {
    setMedals(prev => ({
      ...prev,
      [moduleId]: true
    }));
  };

  return (
    <ProgressContext.Provider value={{ medals, awardMedal }}>
      {children}
    </ProgressContext.Provider>
  );
};