import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import CryptoTable from './CryptoTable';
import CryptoChart from './CryptoChart';
import { fetchMarketData } from '../services/coingecko';

const Dashboard = ({ exchange }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Pour l'exemple, on ne gère que CoinGecko
    if (exchange === 'coingecko') {
      fetchMarketData('bitcoin')
        .then(setData)
        .catch(() => setError('Erreur lors du chargement des données.'))
        .finally(() => setLoading(false));
    } else {
      setData(null);
      setLoading(false);
    }
  }, [exchange]);

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!data) return <Typography>Sélectionnez une plateforme pour voir les données.</Typography>;

  return (
    <Box>
      <CryptoTable data={data} />
      <CryptoChart data={data} />
    </Box>
  );
};

export default Dashboard; 