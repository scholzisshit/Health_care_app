import React, { useState, useEffect, useMemo } from 'react';
import { Container, Typography, Box, createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import Dashboard from './dashboard/Dashboard';
import HealthInputForm from './dashboard/HealthInputForm';
import AIRecommendations from './dashboard/AIRecommendations';
import CaffeineTracker from './caffeine/CaffeineTracker';
import SleepTracker from './sleep/SleepTracker';
import NavBar from './NavBar';

interface HealthData {
  weight: string;
  bloodPressure: string;
  glucoseLevel: string;
  mood: string;
}

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<'dashboard' | 'input' | 'ai' | 'caffeine' | 'sleep'>('dashboard');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    // default to dark theme if nothing saved
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          // Use yellow as the accent (primary) color
          primary: {
            main: '#FFD600', // bright yellow accent
            contrastText: '#000000',
          },
          // keep secondary subtle
          secondary: {
            main: '#FFC107',
          },
        },
        components: {
          MuiAppBar: {
            defaultProps: {
              color: 'primary',
            },
          },
        },
      }),
    [darkMode]
  );

  const handleHealthDataSubmit = (data: HealthData) => {
    console.log('Health data submitted:', data);
    // Here you would typically save this data to your database
  };

  const renderContent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'input':
        return <HealthInputForm onSubmit={handleHealthDataSubmit} />;
      case 'ai':
        return <AIRecommendations />;
      case 'caffeine':
        return <CaffeineTracker />;
      case 'sleep':
        return <SleepTracker />;
      default:
        return (
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
              Welcome to Health AI Assistant
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Your personal health companion
            </Typography>
          </Box>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <NavBar
        value={activeComponent}
        onChange={(v) => setActiveComponent(v)}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((d) => !d)}
      />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {renderContent()}
      </Container>
    </ThemeProvider>
  );
};

export default App;