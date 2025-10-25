import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample data - In a real app, this would come from your database
const healthData = [
  {
    date: '2025-10-12',
    steps: 7500,
    sleep: 7.2,
    weight: 75,
    wellnessScore: 85
  },
  {
    date: '2025-10-13',
    steps: 8200,
    sleep: 6.8,
    weight: 74.8,
    wellnessScore: 82
  },
  {
    date: '2025-10-14',
    steps: 10000,
    sleep: 7.5,
    weight: 74.5,
    wellnessScore: 88
  },
  {
    date: '2025-10-15',
    steps: 9500,
    sleep: 7.8,
    weight: 74.3,
    wellnessScore: 90
  },
  {
    date: '2025-10-16',
    steps: 11000,
    sleep: 8.0,
    weight: 74.1,
    wellnessScore: 92
  },
  {
    date: '2025-10-17',
    steps: 12000,
    sleep: 7.9,
    weight: 73.8,
    wellnessScore: 95
  },
  {
    date: '2025-10-18',
    steps: 11500,
    sleep: 7.7,
    weight: 73.5,
    wellnessScore: 93
  }
];

const PerformanceGraph: React.FC = () => {
  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Health Performance Trends
      </Typography>
      <Box sx={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart
            data={healthData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="wellnessScore"
              stroke="#8884d8"
              name="Wellness Score"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="steps"
              stroke="#82ca9d"
              name="Steps (×100)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="sleep"
              stroke="#ffc658"
              name="Sleep (hours)"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Your wellness score is calculated based on various factors including daily activity,
        sleep quality, and other health metrics. A score above 80 indicates excellent health management.
      </Typography>
    </Paper>
  );
};

export default PerformanceGraph;