import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import App from './App';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#181c24',
      paper: '#23283a',
    },
    primary: {
      main: '#00e1ff',
    },
    secondary: {
      main: '#ff00c8',
    },
  },
  typography: {
    fontFamily: 'Roboto Mono, monospace',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// Ajout de la font Roboto Mono
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link); 