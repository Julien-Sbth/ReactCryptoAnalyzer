import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Avatar, Link, Chip, Grid
} from '@mui/material';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const CryptoDetailsModal = ({ open, onClose, data, chartData }) => {
  if (!data) return null;
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src={data.image?.large} alt={data.name} sx={{ width: 56, height: 56 }} />
          <Box>
            <Typography variant="h5" fontWeight={700}>{data.name} ({data.symbol?.toUpperCase()})</Typography>
            <Chip label={`Rank #${data.market_cap_rank}`} color="primary" size="small" sx={{ mt: 1 }} />
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="subtitle1" gutterBottom>Description :</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {data.description?.fr || data.description?.en || 'Aucune description.'}
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
            <Typography>Prix actuel : <b>{data.market_data?.current_price?.usd?.toLocaleString()} $</b></Typography>
            <Typography>Market Cap : <b>{data.market_data?.market_cap?.usd?.toLocaleString()} $</b></Typography>
            <Typography>Volume 24h : <b>{data.market_data?.total_volume?.usd?.toLocaleString()} $</b></Typography>
            <Typography>ATH : <b>{data.market_data?.ath?.usd?.toLocaleString()} $</b></Typography>
            <Typography>Variation 24h : <b style={{color: data.market_data?.price_change_percentage_24h >= 0 ? '#00ffb3' : '#ff3b6b'}}>{data.market_data?.price_change_percentage_24h?.toFixed(2)} %</b></Typography>
            <Box mt={2}>
              {data.links?.homepage?.[0] && <Link href={data.links.homepage[0]} target="_blank" rel="noopener" sx={{ mr: 1 }}>Site officiel</Link>}
              {data.links?.blockchain_site?.[0] && <Link href={data.links.blockchain_site[0]} target="_blank" rel="noopener" sx={{ mr: 1 }}>Blockchain</Link>}
              {data.links?.twitter_screen_name && <Link href={`https://twitter.com/${data.links.twitter_screen_name}`} target="_blank" rel="noopener">Twitter</Link>}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">Fermer</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CryptoDetailsModal; 