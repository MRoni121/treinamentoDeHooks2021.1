import React, { useCallback, useContext, useState } from 'react';
import { createContext } from "react";

interface ThemeContextData {
  theme: 'light' | 'dark',
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>,
  handleChangeTheme: () => void
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);



export const ThemeProvider: React.FC = (props) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleChangeTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);
  
  return (
    <ThemeContext.Provider value={
      {
        theme,
        setTheme,
        handleChangeTheme
      }
  }
    >
      {props.children}
    </ThemeContext.Provider>
  );
}


const useTheme = () => useContext(ThemeContext);

export default useTheme;