import React, { useState } from 'react';
import { TextField, Button, Box, Paper, Typography, Alert } from '@mui/material';

interface HealthInputFormProps {
  onSubmit: (data: HealthData) => void;
}

interface HealthData {
  weight: string;
  bloodPressure: string;
  glucoseLevel: string;
  mood: string;
}

const HealthInputForm: React.FC<HealthInputFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<HealthData>({
    weight: '',
    bloodPressure: '',
    glucoseLevel: '',
    mood: ''
  });

  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.weight || !formData.bloodPressure || !formData.glucoseLevel || !formData.mood) {
      setError('Please fill in all fields');
      return;
    }
    onSubmit(formData);
    setFormData({ weight: '', bloodPressure: '', glucoseLevel: '', mood: '' });
    setError('');
  };

  const handleChange = (field: keyof HealthData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 500, mx: 'auto', mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Enter Today's Health Data
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Weight (kg)"
          value={formData.weight}
          onChange={handleChange('weight')}
          margin="normal"
          type="number"
        />
        <TextField
          fullWidth
          label="Blood Pressure (systolic/diastolic)"
          value={formData.bloodPressure}
          onChange={handleChange('bloodPressure')}
          margin="normal"
          placeholder="120/80"
        />
        <TextField
          fullWidth
          label="Glucose Level (mg/dL)"
          value={formData.glucoseLevel}
          onChange={handleChange('glucoseLevel')}
          margin="normal"
          type="number"
        />
        <TextField
          fullWidth
          label="Mood"
          value={formData.mood}
          onChange={handleChange('mood')}
          margin="normal"
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default HealthInputForm;