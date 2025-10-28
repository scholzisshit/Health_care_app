import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert
} from '@mui/material';
import CaffeineChart from './CaffeineChart';
import CaffeineRecipes from './CaffeineRecipes';

interface CaffeineEntry {
  type: string;
  amount: number;
  customName?: string;
}

const defaultDrinks = [
  { name: 'Espresso (1 shot)', caffeine: 64 },
  { name: 'Brewed Coffee (8 oz)', caffeine: 95 },
  { name: 'Cold Brew (8 oz)', caffeine: 200 },
  { name: 'Green Tea (8 oz)', caffeine: 28 },
  { name: 'Black Tea (8 oz)', caffeine: 47 },
  { name: 'Energy Drink (8 oz)', caffeine: 80 },
  { name: 'Cola (12 oz)', caffeine: 34 },
];

const CaffeineTracker: React.FC = () => {
  const [selectedDrink, setSelectedDrink] = useState('');
  const [customDrink, setCustomDrink] = useState('');
  const [customCaffeine, setCustomCaffeine] = useState('');
  const [dailyTotal, setDailyTotal] = useState(0);
  const [error, setError] = useState('');

  const handleAddDrink = () => {
    if (!selectedDrink) {
      setError('Please select a drink');
      return;
    }

    let caffeineAmount = 0;
    if (selectedDrink === 'custom') {
      if (!customDrink || !customCaffeine) {
        setError('Please fill in all custom drink details');
        return;
      }
      caffeineAmount = Number(customCaffeine);
    } else {
      const drink = defaultDrinks.find(d => d.name === selectedDrink);
      caffeineAmount = drink ? drink.caffeine : 0;
    }

    const newTotal = dailyTotal + caffeineAmount;
    setDailyTotal(newTotal);

    // persist the daily total so other components (like SleepTracker) can read it
    try {
      localStorage.setItem('dailyCaffeine', String(newTotal));
      // dispatch a custom event so same-window listeners can update
      window.dispatchEvent(new CustomEvent('caffeineUpdate', { detail: newTotal }));
    } catch (err) {
      // ignore storage errors
    }

    if (newTotal > 400) {
      setError('Warning: You have exceeded the recommended daily caffeine intake of 400mg');
    } else {
      setError('');
    }

    // Reset form
    setSelectedDrink('');
    setCustomDrink('');
    setCustomCaffeine('');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Caffeine Tracker
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Add Caffeine Intake
            </Typography>
            {error && <Alert severity="warning" sx={{ mb: 2 }}>{error}</Alert>}
            
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Select Drink</InputLabel>
              <Select
                value={selectedDrink}
                onChange={(e) => setSelectedDrink(e.target.value)}
                label="Select Drink"
              >
                {defaultDrinks.map((drink) => (
                  <MenuItem key={drink.name} value={drink.name}>
                    {drink.name} ({drink.caffeine}mg)
                  </MenuItem>
                ))}
                <MenuItem value="custom">Custom Drink</MenuItem>
              </Select>
            </FormControl>

            {selectedDrink === 'custom' && (
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  label="Custom Drink Name"
                  value={customDrink}
                  onChange={(e) => setCustomDrink(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Caffeine Content (mg)"
                  type="number"
                  value={customCaffeine}
                  onChange={(e) => setCustomCaffeine(e.target.value)}
                />
              </Box>
            )}

            <Button
              variant="contained"
              onClick={handleAddDrink}
              fullWidth
              sx={{ mt: 2 }}
            >
              Add Drink
            </Button>

            <Typography variant="h6" sx={{ mt: 3 }}>
              Today's Total: {dailyTotal}mg
            </Typography>
          </Paper>

          <CaffeineChart />
        </Grid>

        <Grid item xs={12} md={6}>
          <CaffeineRecipes />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaffeineTracker;