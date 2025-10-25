import React, { useState, useEffect } from 'react';
import SleepChart from './SleepChart';
import SleepAnalysis from './SleepAnalysis';

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  Alert
} from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { format } from 'date-fns';

interface SleepFormData {
  bedTime: Date | null;
  wakeTime: Date | null;
  quality: number;
  mood: string;
  notes: string;
}

interface SleepGoals {
  targetBedtime: Date | null;
  targetWakeTime: Date | null;
  targetDuration: number;
  targetQuality: number;
}

const SleepTracker: React.FC = () => {
  const [formData, setFormData] = useState<SleepFormData>({
    bedTime: null,
    wakeTime: null,
    quality: 0,
    mood: '',
    notes: ''
  });

  const [sleepGoals, setSleepGoals] = useState<SleepGoals>({
    targetBedtime: null,
    targetWakeTime: null,
    targetDuration: 8,
    targetQuality: 85
  });

  const [showGoalSettings, setShowGoalSettings] = useState(false);
  const [error, setError] = useState<string>('');
  
  // Sample caffeine data - In a real app, this would come from your CaffeineTracker
  const [recentCaffeineIntake, setRecentCaffeineIntake] = useState(0);

  const calculateSleepDuration = () => {
    if (formData.bedTime && formData.wakeTime) {
      const duration = (formData.wakeTime.getTime() - formData.bedTime.getTime()) / (1000 * 60 * 60);
      return Math.round(duration * 10) / 10;
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.bedTime || !formData.wakeTime) {
      setError('Please fill in both bed time and wake time');
      return;
    }

    const duration = calculateSleepDuration();
    if (duration && (duration < 0 || duration > 24)) {
      setError('Sleep duration must be between 0 and 24 hours');
      return;
    }

    // Here you would typically save the sleep data
    console.log('Sleep data:', {
      ...formData,
      duration,
      bedTime: formData.bedTime ? format(formData.bedTime, 'HH:mm') : null,
      wakeTime: formData.wakeTime ? format(formData.wakeTime, 'HH:mm') : null,
    });

    // Reset form
    setFormData({
      bedTime: null,
      wakeTime: null,
      quality: 0,
      mood: '',
      notes: ''
    });
    setError('');
  };

  const sleepTips = [
    "Maintain a consistent sleep schedule",
    "Avoid screens 1 hour before bedtime",
    "Keep your bedroom cool and dark",
    "Avoid caffeine in the evening",
    "Exercise regularly, but not close to bedtime"
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Log Sleep
              </Typography>
              {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
              
              <Box component="form" onSubmit={handleSubmit}>
                <TimePicker
                  label="Bed Time"
                  value={formData.bedTime}
                  onChange={(newValue) => setFormData({ ...formData, bedTime: newValue })}
                  sx={{ mb: 2, width: '100%' }}
                />

                <TimePicker
                  label="Wake Time"
                  value={formData.wakeTime}
                  onChange={(newValue) => setFormData({ ...formData, wakeTime: newValue })}
                  sx={{ mb: 2, width: '100%' }}
                />

                <Box sx={{ mb: 2 }}>
                  <Typography gutterBottom>Sleep Quality</Typography>
                  <Rating
                    name="sleep-quality"
                    value={formData.quality}
                    onChange={(event, newValue) => {
                      setFormData({ ...formData, quality: newValue || 0 });
                    }}
                    size="large"
                  />
                </Box>

                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Morning Mood</InputLabel>
                  <Select
                    value={formData.mood}
                    label="Morning Mood"
                    onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                  >
                    <MenuItem value="energized">Energized</MenuItem>
                    <MenuItem value="refreshed">Refreshed</MenuItem>
                    <MenuItem value="neutral">Neutral</MenuItem>
                    <MenuItem value="tired">Tired</MenuItem>
                    <MenuItem value="exhausted">Exhausted</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  sx={{ mb: 2 }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                >
                  Save Sleep Log
                </Button>
              </Box>
            </Paper>

            <Paper sx={{ p: 3, mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Sleep Tips
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {sleepTips.map((tip, index) => (
                  <Typography component="li" key={index} gutterBottom>
                    {tip}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Sleep Goals & Recommendations
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Sleep Goal Settings
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TimePicker
                      label="Target Bedtime"
                      value={sleepGoals.targetBedtime}
                      onChange={(newValue) => setSleepGoals({ ...sleepGoals, targetBedtime: newValue })}
                      sx={{ width: '100%', mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TimePicker
                      label="Target Wake Time"
                      value={sleepGoals.targetWakeTime}
                      onChange={(newValue) => setSleepGoals({ ...sleepGoals, targetWakeTime: newValue })}
                      sx={{ width: '100%', mb: 2 }}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Smart Recommendations
                </Typography>
                {recentCaffeineIntake > 100 && (
                  <Alert severity="warning" sx={{ mb: 2 }}>
                    Your recent caffeine intake may affect your sleep. Consider avoiding caffeine after 2 PM.
                  </Alert>
                )}
                {formData.bedTime && (
                  <Alert severity="info" sx={{ mb: 2 }}>
                    Based on your bedtime, optimal wake times for complete sleep cycles:
                    <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                      <Typography component="li">First option: {format(calculateOptimalWakeTime(formData.bedTime, 5), 'HH:mm')}</Typography>
                      <Typography component="li">Second option: {format(calculateOptimalWakeTime(formData.bedTime, 6), 'HH:mm')}</Typography>
                    </Box>
                  </Alert>
                )}
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Sleep Cycle Analysis
                </Typography>
                <Typography variant="body2" paragraph>
                  A complete sleep cycle lasts about 90 minutes, with 5-6 cycles recommended per night.
                  Your current sleep pattern shows:
                </Typography>
                <Box sx={{ pl: 2 }}>
                  <Typography variant="body2">
                    • Average cycles per night: {((dailyAverage || 8) / 1.5).toFixed(1)}
                  </Typography>
                  <Typography variant="body2">
                    • Deep sleep percentage: {((deepSleepAverage || 2.5) / (dailyAverage || 8) * 100).toFixed(1)}%
                  </Typography>
                  <Typography variant="body2">
                    • REM sleep percentage: {((remSleepAverage || 1.5) / (dailyAverage || 8) * 100).toFixed(1)}%
                  </Typography>
                </Box>
              </Box>
            </Paper>
            
            <SleepChart />
            <SleepAnalysis sleepData={sleepData} caffeineData={caffeineData} />
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

// Helper function to calculate optimal wake time based on sleep cycles
const calculateOptimalWakeTime = (bedTime: Date, cycles: number) => {
  const cycleLength = 90; // minutes
  const fallAsleepBuffer = 15; // minutes
  return new Date(bedTime.getTime() + ((fallAsleepBuffer + (cycleLength * cycles)) * 60 * 1000));
};

// Mock data - In a real app, these would be calculated from actual sleep records
const dailyAverage = 7.8;
const deepSleepAverage = 2.4;
const remSleepAverage = 1.8;
interface SleepEntry {
  date: string;
  duration: number;
  quality: number;
}

interface CaffeineEntry {
  date: string;
  amount: number;
  type: string;
}

const sleepData: SleepEntry[] = [];
const caffeineData: CaffeineEntry[] = [];

export default SleepTracker;