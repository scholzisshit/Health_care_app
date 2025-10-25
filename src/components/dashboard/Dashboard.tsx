import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Paper, 
  Button, 
  Card, 
  CardContent, 
  CardActions,
  IconButton,
  Divider,
  useTheme,
  Alert
} from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TimerIcon from '@mui/icons-material/Timer';
import OpacityIcon from '@mui/icons-material/Opacity';

import HealthMetricCard from './HealthMetricCard';
import PerformanceGraph from './PerformanceGraph';

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const healthMetrics = [
    { title: 'Daily Steps', value: '11,500', unit: 'steps', icon: <DirectionsRunIcon color="primary" /> },
    { title: 'Heart Rate', value: '72', unit: 'bpm', icon: <FavoriteIcon sx={{ color: '#e91e63' }} /> },
    { title: 'Sleep', value: '7.7', unit: 'hours', icon: <BedtimeIcon sx={{ color: '#673ab7' }} /> },
    { title: 'Water Intake', value: '2.1', unit: 'L', icon: <OpacityIcon sx={{ color: '#2196f3' }} /> },
  ];

  const quickActions = [
    { title: 'Track Sleep', icon: <BedtimeIcon />, color: '#673ab7', route: 'sleep' },
    { title: 'Log Caffeine', icon: <LocalCafeIcon />, color: '#795548', route: 'caffeine' },
    { title: 'View Progress', icon: <TrendingUpIcon />, color: '#2196f3', route: 'progress' },
  ];

  const dailyInsights = [
    {
      title: 'Sleep Schedule',
      message: 'Optimal bedtime in 2 hours (10:30 PM) for a full 8-hour rest',
      severity: 'info'
    },
    {
      title: 'Caffeine Intake',
      message: 'You\'ve consumed 200mg of caffeine today (50% of daily limit)',
      severity: 'success'
    },
    {
      title: 'Activity Goal',
      message: '1,500 more steps to reach your daily goal',
      severity: 'warning'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeBasedGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h3" gutterBottom>
            {getTimeBasedGreeting()}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {formatDate(currentTime)}
          </Typography>
        </Box>
        <IconButton size="large" color="primary">
          <NotificationsIcon />
        </IconButton>
      </Box>

      {/* Health Metrics Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {healthMetrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <HealthMetricCard
              title={metric.title}
              value={metric.value}
              unit={metric.unit}
            />
          </Grid>
        ))}
      </Grid>

      {/* Quick Actions Section */}
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Quick Actions
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {quickActions.map((action, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card 
              sx={{ 
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[4]
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ 
                  backgroundColor: `${action.color}20`,
                  borderRadius: '50%',
                  width: 60,
                  height: 60,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <Box sx={{ color: action.color }}>
                    {action.icon}
                  </Box>
                </Box>
                <Typography variant="h6">
                  {action.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Daily Insights Section */}
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Daily Insights
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {dailyInsights.map((insight, index) => (
          <Grid item xs={12} key={index}>
            <Alert 
              severity={insight.severity as 'info' | 'success' | 'warning' | 'error'}
              sx={{ '& .MuiAlert-message': { width: '100%' } }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {insight.title}
              </Typography>
              {insight.message}
            </Alert>
          </Grid>
        ))}
      </Grid>

      {/* Performance Graph Section */}
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Weekly Performance
      </Typography>
      <Paper sx={{ p: 2 }}>
        <PerformanceGraph />
      </Paper>
    </Box>
  );
};

export default Dashboard;