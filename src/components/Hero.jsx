// src/components/Hero.jsx
import { Container, Typography, Box } from '@mui/material';

export default function Hero() {
  return (
    <Box sx={{ py: 10, textAlign: 'center' }}>
      <Container>
        <Typography variant="h2" gutterBottom>
          Bienvenido a FluxTech
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Desarrollo web y soluciones tecnológicas a tu medida.
        </Typography>
      </Container>
    </Box>
  );
}
