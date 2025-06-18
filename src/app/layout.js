// src/app/layout.jsx
'use client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Navbar from '@/components/Navbar';
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
