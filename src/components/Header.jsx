import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';

const logoUrl = 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029';

const Header = () => (
  <AppBar
    position="fixed"
    elevation={0}
    sx={{
      background: 'rgba(24,28,36,0.85)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #00e1ff33',
      boxShadow: '0 2px 16px 0 #00e1ff22',
    }}
  >
    <Toolbar sx={{ justifyContent: 'flex-start' }}>
      <Box display="flex" alignItems="center">
        <Avatar src={logoUrl} alt="Crypto Logo" sx={{ width: 40, height: 40, mr: 2 }} />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: 2,
            color: 'primary.main',
            textShadow: '0 2px 8px #00e1ff55',
          }}
        >
          CryptoAnalyzer
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header; 