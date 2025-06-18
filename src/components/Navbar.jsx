// src/components/Navbar.jsx
'use client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <AppBar position="sticky" color="default" sx={{ backgroundColor: '#1e1e1e' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          FluxTech
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => router.push('#servicios')}>Servicios</Button>
          <Button color="inherit" onClick={() => router.push('#testimonios')}>Testimonios</Button>
          <Button color="inherit" onClick={() => router.push('#contacto')}>Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
