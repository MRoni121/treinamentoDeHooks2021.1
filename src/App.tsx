import React, { createContext, useState } from 'react';
import AppProvider from './hooks';
import { ThemeProvider } from './hooks/useTheme';

import Routes from './routes';


const App: React.FC = () => {
  
  return(
    <AppProvider>
      <Routes/>
    </AppProvider>
  )
}

export default App;
