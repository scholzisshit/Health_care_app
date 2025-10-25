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
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

// Sample data - In a real app, this would come from your database
const sleepData = [
  {
    date: '10/12',
    hoursSlept: 7.5,
    deepSleep: 2.3,
    lightSleep: 4.2,
    remSleep: 1.0,
    quality: 85
  },
  {
    date: '10/13',
    hoursSlept: 6.8,
    deepSleep: 1.8,
    lightSleep: 4.0,
    remSleep: 1.0,
    quality: 75
  },
  {
    date: '10/14',
    hoursSlept: 8.2,
    deepSleep: 2.5,
    lightSleep: 4.5,
    remSleep: 1.2,
    quality: 90
  },
  {
    date: '10/15',
    hoursSlept: 7.2,
    deepSleep: 2.0,
    lightSleep: 4.2,
    remSleep: 1.0,
    quality: 80
  },
  {
    date: '10/16',
    hoursSlept: 7.8,
    deepSleep: 2.4,
    lightSleep: 4.3,
    remSleep: 1.1,
    quality: 88
  },
  {
    date: '10/17',
    hoursSlept: 7.5,
    deepSleep: 2.2,
    lightSleep: 4.1,
    remSleep: 1.2,
    quality: 85
  },
  {
    date: '10/18',
    hoursSlept: 8.0,
    deepSleep: 2.6,
    lightSleep: 4.2,
    remSleep: 1.2,
    quality: 92
  }
];

const SleepChart: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Sleep Duration & Quality
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart
              data={sleepData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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
                dataKey="hoursSlept"
                stroke="#8884d8"
                name="Hours Slept"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="quality"
                stroke="#82ca9d"
                name="Sleep Quality %"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Sleep Stages
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={sleepData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="deepSleep"
                stackId="1"
                stroke="#3f51b5"
                fill="#3f51b5"
                name="Deep Sleep"
              />
              <Area
                type="monotone"
                dataKey="lightSleep"
                stackId="1"
                stroke="#2196f3"
                fill="#2196f3"
                name="Light Sleep"
              />
              <Area
                type="monotone"
                dataKey="remSleep"
                stackId="1"
                stroke="#03a9f4"
                fill="#03a9f4"
                name="REM Sleep"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Box>
  );
};

export default SleepChart;