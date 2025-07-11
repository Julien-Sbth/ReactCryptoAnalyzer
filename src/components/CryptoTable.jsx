import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const CryptoTable = ({ data }) => {
  if (!data || !data.prices) return null;
  return (
    <TableContainer component={Paper} sx={{ my: 4 }}>
      <Typography variant="h6" sx={{ m: 2 }}>
        Historique des prix (30 derniers jours)
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Prix (USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.prices.slice(-10).map(([timestamp, price]) => (
            <TableRow key={timestamp}>
              <TableCell>{new Date(timestamp).toLocaleDateString()}</TableCell>
              <TableCell>{price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable; 