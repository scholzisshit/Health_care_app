import React, { useState } from 'react';
import { Container, Typography, Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import BedtimeIcon from '@mui/icons-material/Bedtime';

import Dashboard from './dashboard/Dashboard';
import HealthInputForm from './dashboard/HealthInputForm';
import AIRecommendations from './dashboard/AIRecommendations';
import CaffeineTracker from './caffeine/CaffeineTracker';
import SleepTracker from './sleep/SleepTracker';

interface HealthData {
  weight: string;
  bloodPressure: string;
  glucoseLevel: string;
  mood: string;
}

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState<'dashboard' | 'input' | 'ai' | 'caffeine' | 'sleep'>('dashboard');

  const handleHealthDataSubmit = (data: HealthData) => {
    console.log('Health data submitted:', data);
    // Here you would typically save this data to your database
  };

  const renderContent = () => {
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
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setIsDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Personal Health AI Assistant
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          <ListItem button onClick={() => { setActiveComponent('dashboard'); setIsDrawerOpen(false); }}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => { setActiveComponent('input'); setIsDrawerOpen(false); }}>
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText primary="Input Health Data" />
          </ListItem>
          <ListItem button onClick={() => { setActiveComponent('ai'); setIsDrawerOpen(false); }}>
            <ListItemIcon>
              <HealthAndSafetyIcon />
            </ListItemIcon>
            <ListItemText primary="AI Recommendations" />
          </ListItem>
          <ListItem button onClick={() => { setActiveComponent('caffeine'); setIsDrawerOpen(false); }}>
            <ListItemIcon>
              <LocalCafeIcon />
            </ListItemIcon>
            <ListItemText primary="Caffeine Tracker" />
          </ListItem>
          <ListItem button onClick={() => { setActiveComponent('sleep'); setIsDrawerOpen(false); }}>
            <ListItemIcon>
              <BedtimeIcon />
            </ListItemIcon>
            <ListItemText primary="Sleep Tracker" />
          </ListItem>
        </List>
      </Drawer>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {renderContent()}
      </Container>
    </>
  );
};

export default App;