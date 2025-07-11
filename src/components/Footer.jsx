import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 8,
      py: 2,
      textAlign: 'center',
      background: 'rgba(24,28,36,0.7)',
      color: 'grey.400',
      borderTop: '1px solid #00e1ff22',
      fontSize: 14,
    }}
  >
    <Typography variant="body2" sx={{ display: 'inline', mr: 1 }}>
      © {new Date().getFullYear()} CryptoAnalyzer React
    </Typography>
    <MuiLink
      href="https://github.com/Julien-Sbth/CryptoAnalyzer"
      target="_blank"
      rel="noopener"
      underline="none"
      sx={{ color: 'primary.main', verticalAlign: 'middle' }}
    >
      <GitHubIcon fontSize="small" sx={{ mb: '-2px' }} />
    </MuiLink>
  </Box>
);

export default Footer; 