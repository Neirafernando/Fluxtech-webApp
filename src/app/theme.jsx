// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Puedes cambiarlo a 'light' si prefieres
    primary: {
      main: '#E94823', // Color característico de FluxTech
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: ['"Outfit"', 'Inter', 'sans-serif'].join(','),
  },
});

export default theme;
