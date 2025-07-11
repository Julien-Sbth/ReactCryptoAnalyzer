import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Analysis = () => (
  <Container maxWidth="md">
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Analyse détaillée (à personnaliser)
      </Typography>
      <Typography>
        Cette page affichera des analyses avancées sur vos données crypto.
      </Typography>
      <Button component={Link} to="/" variant="contained" sx={{ mt: 2 }}>
        Retour au dashboard
      </Button>
    </Box>
  </Container>
);

export default Analysis; 