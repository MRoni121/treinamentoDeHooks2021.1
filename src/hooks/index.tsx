import React from 'react';
import { AuthProvider } from './useAuth';
import { ThemeProvider } from './useTheme';


const AppProvider: React.FC = ({children}) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}

export default AppProvider;