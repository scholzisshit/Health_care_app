import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { Tooltip as RechartsTooltip } from 'recharts';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,  
  ReferenceLine,
  Scatter,
  ScatterChart,
  ZAxis
} from 'recharts';

interface SleepAnalysisProps {
  sleepData: any[]; // Replace with proper type from your data store
  caffeineData: any[]; // Replace with proper type from your data store
}

const SleepAnalysis: React.FC<SleepAnalysisProps> = ({ sleepData, caffeineData }) => {
  // Combine sleep and caffeine data for correlation analysis
  const correlationData = sleepData.map(sleep => {
    const matchingCaffeine = caffeineData.find(
      c => c.date === sleep.date
    );
    return {
      date: sleep.date,
      sleepQuality: sleep.quality,
      caffeineIntake: matchingCaffeine ? 
        matchingCaffeine.coffee + matchingCaffeine.energyDrink + matchingCaffeine.tea + matchingCaffeine.custom : 0,
      hoursSlept: sleep.hoursSlept
    };
  });

  // Calculate optimal wake time based on sleep cycles (90 minutes each)
  const calculateOptimalWakeTime = (bedTime: Date) => {
    const sleepCycleDuration = 90; // minutes
    const idealSleepCycles = 5; // 5-6 cycles is optimal
    const fallAsleepTime = 15; // average time to fall asleep in minutes
    
    const wakeTime = new Date(bedTime.getTime() + 
      ((fallAsleepTime + (sleepCycleDuration * idealSleepCycles)) * 60 * 1000));
    
    return wakeTime;
  };

  // Calculate sleep score based on various factors
  const calculateSleepScore = (data: any) => {
    const factors = {
      duration: 0.4, // 40% weight
      quality: 0.3, // 30% weight
      consistency: 0.2, // 20% weight
      caffeineImpact: 0.1 // 10% weight
    };

    const durationScore = Math.min(100, (data.hoursSlept / 8) * 100);
    const qualityScore = data.quality;
    const consistencyScore = 85; // This would be calculated based on sleep schedule regularity
    const caffeineImpact = Math.max(0, 100 - (data.caffeineIntake / 4)); // Reduce score for high caffeine intake

    return (
      durationScore * factors.duration +
      qualityScore * factors.quality +
      consistencyScore * factors.consistency +
      caffeineImpact * factors.caffeineImpact
    );
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Sleep-Caffeine Correlation
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <ScatterChart
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid />
              <XAxis 
                type="number" 
                dataKey="caffeineIntake" 
                name="Caffeine Intake"
                unit=" mg" 
              />
              <YAxis 
                type="number" 
                dataKey="sleepQuality" 
                name="Sleep Quality" 
                unit="%" 
              />
              <ZAxis 
                type="number" 
                dataKey="hoursSlept" 
                range={[50, 400]} 
                name="Hours Slept" 
              />
              <RechartsTooltip
                cursor={{ strokeDasharray: '3 3' }}
                labelFormatter={(value: any) => `Sleep Data: ${value}`}
              />
              <Scatter 
                name="Sleep-Caffeine Correlation" 
                data={correlationData} 
                fill="#8884d8"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Bubble size represents hours slept. This chart shows the relationship between caffeine intake and sleep quality.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Sleep Score Trends
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart
              data={correlationData.map(data => ({
                ...data,
                sleepScore: calculateSleepScore(data)
              }))}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <RechartsTooltip />
              <Legend />
              <ReferenceLine y={80} label="Optimal Score" stroke="green" strokeDasharray="3 3" />
              <Line
                type="monotone"
                dataKey="sleepScore"
                stroke="#8884d8"
                name="Sleep Score"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Sleep score is calculated based on duration, quality, consistency, and caffeine impact.
          A score above 80 indicates optimal sleep patterns.
        </Typography>
      </Paper>
    </Box>
  );
};

export default SleepAnalysis;