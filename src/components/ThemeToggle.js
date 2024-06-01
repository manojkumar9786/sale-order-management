import React from 'react';
import { Switch, FormControl, FormLabel } from '@chakra-ui/react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="theme-toggle" mb="0">Dark Mode</FormLabel>
      <Switch id="theme-toggle" isChecked={isDark} onChange={toggleTheme} />
    </FormControl>
  );
};

export default ThemeToggle;
