import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Slot, Stack } from 'expo-router';

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
