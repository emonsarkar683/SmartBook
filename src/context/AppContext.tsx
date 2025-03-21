
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

type AppContextType = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  notification: (message: string, type?: 'success' | 'error' | 'info') => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to show notifications
  const notification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      default:
        toast(message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        notification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
