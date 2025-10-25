import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface HealthMetricCardProps {
  title: string;
  value: string;
  unit?: string;
}

const HealthMetricCard: React.FC<HealthMetricCardProps> = ({ title, value, unit }) => (
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" component="div">
        {value}
        {unit && <Typography variant="subtitle1" component="span"> {unit}</Typography>}
      </Typography>
    </CardContent>
  </Card>
);

export default HealthMetricCard;