import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, Link as MuiLink } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

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
    <Toolbar sx={{ justifyContent: 'space-between' }}>
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
      <MuiLink
        href="https://github.com/Julien-Sbth/CryptoAnalyzer"
        target="_blank"
        rel="noopener"
        underline="none"
        sx={{ color: 'primary.main' }}
      >
        <IconButton color="inherit">
          <GitHubIcon fontSize="large" />
        </IconButton>
      </MuiLink>
    </Toolbar>
  </AppBar>
);

export default Header; 