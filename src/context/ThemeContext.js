import React, { createContext, useState, useEffect, useContext } from 'react';
import { useColorMode } from '@chakra-ui/react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(colorMode === 'dark');

  useEffect(() => {
    localStorage.setItem('chakra-ui-color-mode', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    toggleColorMode();
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);