'use client';

import { Box, Container, Typography, Stack, IconButton, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1e1e1e',
        color: 'white',
        py: 6,
        px: 2,
        mt: 8,
        borderTop: '1px solid #333',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {/* Logo / Nombre */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#E94823' }}>
            FluxTech
          </Typography>

          {/* Enlaces */}
          <Stack direction="row" spacing={3}>
            <Link href="#servicios" underline="hover" color="inherit">
              Servicios
            </Link>
            <Link href="#proyectos" underline="hover" color="inherit">
              Proyectos
            </Link>
            <Link href="#cta" underline="hover" color="inherit">
              Contacto
            </Link>
          </Stack>

          {/* Redes */}
          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#E94823' }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/flux_techpc"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#E94823' }}
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Stack>

        {/* Abajo */}
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ mt: 4 }}
        >
          © {year} FluxTech. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
