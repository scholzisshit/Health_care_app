import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample data - In a real app, this would come from your database
const caffeineData = [
  {
    day: 'Mon',
    coffee: 120,
    energyDrink: 80,
    tea: 40,
    custom: 30
  },
  {
    day: 'Tue',
    coffee: 180,
    energyDrink: 0,
    tea: 60,
    custom: 0
  },
  {
    day: 'Wed',
    coffee: 140,
    energyDrink: 160,
    tea: 30,
    custom: 45
  },
  {
    day: 'Thu',
    coffee: 160,
    energyDrink: 80,
    tea: 40,
    custom: 0
  },
  {
    day: 'Fri',
    coffee: 200,
    energyDrink: 160,
    tea: 20,
    custom: 30
  },
  {
    day: 'Sat',
    coffee: 100,
    energyDrink: 0,
    tea: 80,
    custom: 60
  },
  {
    day: 'Sun',
    coffee: 80,
    energyDrink: 0,
    tea: 100,
    custom: 0
  }
];

const CaffeineChart: React.FC = () => {
  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Weekly Caffeine Intake (mg)
      </Typography>
      <Box sx={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart
            data={caffeineData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="coffee" name="Coffee" fill="#795548" stackId="a" />
            <Bar dataKey="energyDrink" name="Energy Drinks" fill="#f44336" stackId="a" />
            <Bar dataKey="tea" name="Tea" fill="#4caf50" stackId="a" />
            <Bar dataKey="custom" name="Custom Drinks" fill="#2196f3" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Daily recommended maximum caffeine intake: 400mg for healthy adults
      </Typography>
    </Paper>
  );
};

export default CaffeineChart;