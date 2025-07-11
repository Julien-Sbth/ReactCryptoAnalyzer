import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ExchangeSelector = ({ exchange, setExchange }) => (
  <FormControl fullWidth sx={{ my: 2 }}>
    <InputLabel id="exchange-label">Plateforme</InputLabel>
    <Select
      labelId="exchange-label"
      value={exchange}
      label="Plateforme"
      onChange={e => setExchange(e.target.value)}
    >
      <MenuItem value="coingecko">CoinGecko</MenuItem>
      <MenuItem value="coinbase">Coinbase</MenuItem>
      <MenuItem value="kraken">Kraken</MenuItem>
    </Select>
  </FormControl>
);

export default ExchangeSelector; 