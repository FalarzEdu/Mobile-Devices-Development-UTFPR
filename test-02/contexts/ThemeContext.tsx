import React, { createContext, useState, ReactNode } from 'react';

export interface Theme {
  mode: 'light' | 'dark';
  background: string;
  text: string;
  bigText: string;
  icon: string;
}

export const lightTheme: Theme = {
  mode: 'light',
  background: '#ffffff',
  text: '#000000',
  bigText: 'darkblue',
  icon: 'black'
};

export const darkTheme: Theme = {
  mode: 'dark',
  background: '#40403e',
  text: '#ffffff',
  bigText: '#DBAFA0',
  icon: '#ffffff'
};

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: darkTheme,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.mode === 'light' ? darkTheme : lightTheme
    );
  };

  const contextValue: ThemeContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};