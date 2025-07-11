import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Paper, Typography } from '@mui/material';

const CryptoChart = ({ data }) => {
  if (!data || !data.prices) return null;
  const chartData = data.prices.map(([timestamp, price]) => ({
    date: new Date(timestamp).toLocaleDateString(),
    price: price,
  }));
  return (
    <Paper sx={{ p: 2, my: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Évolution du prix (30 jours)
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" minTickGap={10} />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#1976d2" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default CryptoChart; 