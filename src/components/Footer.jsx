import React from 'react';
import { Box, Typography } from '@mui/material';

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
      © {new Date().getFullYear()} CryptoAnalyzer
    </Typography>
  </Box>
);

export default Footer; 