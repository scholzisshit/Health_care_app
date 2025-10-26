import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type NavValue = 'dashboard' | 'input' | 'ai' | 'caffeine' | 'sleep';

interface NavBarProps {
  value: NavValue;
  onChange: (newValue: NavValue) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ value, onChange, darkMode, toggleDarkMode }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => setMenuAnchorEl(e.currentTarget);
  const handleMenuClose = () => setMenuAnchorEl(null);

  const handleRequestReset = () => {
    // close menu first, then open confirmation
    handleMenuClose();
    setConfirmOpen(true);
  };

  const handleConfirmReset = () => {
    // Clear localStorage (app persisted data) and reload the app
    try {
      localStorage.clear();
    } catch (err) {
      // ignore
    }
    setConfirmOpen(false);
    // reload to reset in-memory state
    window.location.reload();
  };

  return (
    <AppBar position="static" color="primary" elevation={3}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen} sx={{ mr: 1 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ mr: 3 }}>
          Health AI Assistant
        </Typography>

        <Tabs
          value={value}
          onChange={(_, newVal) => onChange(newVal as NavValue)}
          textColor="inherit"
          sx={{ flexGrow: 1 }}
          TabIndicatorProps={{ style: { backgroundColor: '#FFD600' } }}
        >
          <Tab value="dashboard" label="Dashboard" icon={<DashboardIcon />} iconPosition="start" sx={{ minHeight: 64 }} />
          <Tab value="input" label="Input Health" icon={<LocalHospitalIcon />} iconPosition="start" sx={{ minHeight: 64 }} />
          <Tab value="ai" label="AI Recs" icon={<HealthAndSafetyIcon />} iconPosition="start" sx={{ minHeight: 64 }} />
          <Tab value="caffeine" label="Caffeine" icon={<LocalCafeIcon />} iconPosition="start" sx={{ minHeight: 64 }} />
          <Tab value="sleep" label="Sleep" icon={<BedtimeIcon />} iconPosition="start" sx={{ minHeight: 64 }} />
        </Tabs>

        <IconButton onClick={toggleDarkMode} color="inherit" sx={{ ml: 2 }}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem onClick={handleRequestReset}>
            <ListItemIcon>
              <DeleteForeverIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Reset All User Data</ListItemText>
          </MenuItem>
        </Menu>

        <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
          <DialogTitle>Reset all user data?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This will clear all locally stored user settings and data (localStorage) and reload the app. This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
            <Button color="error" onClick={handleConfirmReset}>Reset</Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
