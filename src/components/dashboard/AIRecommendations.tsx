import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import HealthTipsIcon from '@mui/icons-material/HealthAndSafety';

const AIRecommendations: React.FC = () => {
  const recommendations = [
    "Based on your sleep pattern, try going to bed 30 minutes earlier",
    "Your step count is below target. Consider a 15-minute walk after lunch",
    "Water intake is good! Keep maintaining this level",
    "Your blood pressure readings suggest you might benefit from stress-reduction activities",
    "Consider adding more protein to your breakfast based on your energy levels"
  ];

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        AI Health Recommendations
      </Typography>
      <List>
        {recommendations.map((recommendation, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <HealthTipsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={recommendation} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AIRecommendations;