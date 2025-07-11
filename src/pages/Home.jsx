import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import CryptoList from '../components/CryptoList';

const Home = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #181c24 0%, #23283a 60%, #1a2980 100%)',
      py: 0,
    }}>
      <Container maxWidth="lg">
        <Box my={6}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              letterSpacing: 2,
              color: 'primary.main',
              textShadow: '0 2px 16px #00e1ff55',
            }}
          >
            CryptoAnalyzer
          </Typography>
          <CryptoList />
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 