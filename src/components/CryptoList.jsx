import React, { useEffect, useState } from 'react';
import { fetchTopCryptos, fetchCryptoDetails, fetchMarketData } from '../services/coingecko';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Typography, Box, CircularProgress, Collapse, Grid, Chip, Link, Button
} from '@mui/material';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const MiniSparkline = ({ data }) => (
  <ResponsiveContainer width={100} height={30}>
    <LineChart data={data.map((v, i) => ({ pv: v, i }))}>
      <Line type="monotone" dataKey="pv" stroke="#00e1ff" dot={false} strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);

const CryptoDetailsRow = ({ open, details, chartData, loading, colSpan }) => (
  <TableRow>
    <TableCell colSpan={colSpan} sx={{ p: 0, background: 'rgba(24,28,36,0.97)' }}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {loading ? (
          <Box sx={{ p: 4, textAlign: 'center' }}><CircularProgress /></Box>
        ) : details ? (
          <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar src={details.image?.large} alt={details.name} sx={{ width: 56, height: 56 }} />
                  <Typography variant="h5" fontWeight={700}>{details.name} ({details.symbol?.toUpperCase()})</Typography>
                  <Chip label={`Rank #${details.market_cap_rank}`} color="primary" size="small" />
                </Box>
                <Typography variant="subtitle1" gutterBottom>Description :</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {details.description?.fr || details.description?.en || 'Aucune description.'}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>Graphique (30 jours) :</Typography>
                <Box sx={{ height: 250, background: 'rgba(24,28,36,0.7)', borderRadius: 2, p: 1 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" minTickGap={10} />
                      <YAxis domain={['auto', 'auto']} />
                      <Tooltip />
                      <Line type="monotone" dataKey="price" stroke="#00e1ff" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" gutterBottom>Infos marché :</Typography>
                <Typography>Prix actuel : <b>{details.market_data?.current_price?.usd?.toLocaleString()} $</b></Typography>
                <Typography>Market Cap : <b>{details.market_data?.market_cap?.usd?.toLocaleString()} $</b></Typography>
                <Typography>Volume 24h : <b>{details.market_data?.total_volume?.usd?.toLocaleString()} $</b></Typography>
                <Typography>ATH : <b>{details.market_data?.ath?.usd?.toLocaleString()} $</b></Typography>
                <Typography>Variation 24h : <b style={{color: details.market_data?.price_change_percentage_24h >= 0 ? '#00ffb3' : '#ff3b6b'}}>{details.market_data?.price_change_percentage_24h?.toFixed(2)} %</b></Typography>
                <Box mt={2}>
                  {details.links?.homepage?.[0] && <Link href={details.links.homepage[0]} target="_blank" rel="noopener" sx={{ mr: 1 }}>Site officiel</Link>}
                  {details.links?.blockchain_site?.[0] && <Link href={details.links.blockchain_site[0]} target="_blank" rel="noopener" sx={{ mr: 1 }}>Blockchain</Link>}
                  {details.links?.twitter_screen_name && <Link href={`https://twitter.com/${details.links.twitter_screen_name}`} target="_blank" rel="noopener">Twitter</Link>}
                </Box>
              </Grid>
            </Grid>
          </Box>
        ) : null}
      </Collapse>
    </TableCell>
  </TableRow>
);

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [details, setDetails] = useState(null);
  const [detailsChart, setDetailsChart] = useState([]);
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTopCryptos()
      .then(setCryptos)
      .catch(() => setError('Erreur lors du chargement des cryptos.'))
      .finally(() => setLoading(false));
  }, []);

  const handleRowClick = async (crypto) => {
    if (expandedId === crypto.id) {
      setExpandedId(null);
      return;
    }
    setExpandedId(crypto.id);
    setDetails(null);
    setDetailsChart([]);
    setDetailsLoading(true);
    try {
      const [info, chart] = await Promise.all([
        fetchCryptoDetails(crypto.id),
        fetchMarketData(crypto.id),
      ]);
      setDetails(info);
      setDetailsChart(
        chart.prices.map(([timestamp, price]) => ({
          date: new Date(timestamp).toLocaleDateString(),
          price,
        }))
      );
    } catch {
      setDetails(null);
      setDetailsChart([]);
    } finally {
      setDetailsLoading(false);
    }
  };

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ overflowX: 'auto' }}>
      <TableContainer
        component={Paper}
        sx={{
          my: 4,
          borderRadius: 4,
          boxShadow: '0 8px 32px 0 #00e1ff33',
          background: 'rgba(24,28,36,0.95)',
          backdropFilter: 'blur(4px)',
          minWidth: 700,
        }}
      >
        <Typography
          variant="h5"
          sx={{ m: 2, color: 'primary.main', fontWeight: 700, letterSpacing: 1 }}
        >
          Top 100 Cryptos
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ background: 'rgba(0,225,255,0.05)' }}>
              <TableCell>Logo</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Symbole</TableCell>
              <TableCell>Prix (USD)</TableCell>
              <TableCell>Variation 24h</TableCell>
              <TableCell>Mini-courbe (7j)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptos.map(crypto => (
              <React.Fragment key={crypto.id}>
                <TableRow
                  sx={{
                    transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                    '&:hover': {
                      background: 'rgba(0,225,255,0.08)',
                      transform: 'scale(1.015)',
                      boxShadow: '0 4px 24px 0 #00e1ff55',
                    },
                  }}
                  onClick={() => handleRowClick(crypto)}
                >
                  <TableCell><Avatar src={crypto.image} alt={crypto.name} /></TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{crypto.name}</TableCell>
                  <TableCell>{crypto.symbol.toUpperCase()}</TableCell>
                  <TableCell>{crypto.current_price.toLocaleString()} $</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        color:
                          crypto.price_change_percentage_24h >= 0
                            ? '#00ffb3'
                            : '#ff3b6b',
                        fontWeight: 700,
                      }}
                    >
                      {crypto.price_change_percentage_24h?.toFixed(2)} %
                    </Box>
                  </TableCell>
                  <TableCell>
                    {crypto.sparkline_in_7d && crypto.sparkline_in_7d.price ? (
                      <MiniSparkline data={crypto.sparkline_in_7d.price} />
                    ) : null}
                  </TableCell>
                </TableRow>
                <CryptoDetailsRow
                  open={expandedId === crypto.id}
                  details={details}
                  chartData={detailsChart}
                  loading={detailsLoading}
                  colSpan={6}
                />
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CryptoList; 