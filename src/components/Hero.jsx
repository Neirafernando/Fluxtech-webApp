"use client"; // Indica que este componente es cliente (necesario para hooks e interactividad en Next.js App Router)

// Importaciones de MUI y React
import {
  Container, Typography, Box, Button, Grid, Paper, Avatar, Fade, Zoom
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaymentIcon from '@mui/icons-material/Payment';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useEffect, useState } from 'react';

// features: array de funcionalidades que se muestran como tarjetas circulares
const features = [
  { icon: <EmailIcon sx={{ color: '#00c6ff' }} />, label: 'Contacto directo', value: 'Tus clientes pueden escribirte fácil y rápido.' },
  { icon: <WhatsAppIcon sx={{ color: '#25D366' }} />, label: 'WhatsApp integrado', value: 'Comunicación instantánea y cercana.' },
  { icon: <FacebookIcon sx={{ color: '#1877f3' }} />, label: 'Redes sociales', value: 'Conecta y crece tu comunidad.' },
  { icon: <PaymentIcon sx={{ color: '#f7971e' }} />, label: 'Pagos WebPay Plus', value: 'Recibe pagos online de forma segura.' },
  { icon: <StorefrontIcon sx={{ color: '#7f53ac' }} />, label: 'Tienda virtual', value: 'Vende y administra tus productos fácilmente.' },
  { icon: <DashboardIcon sx={{ color: '#00c6ff' }} />, label: 'Panel propio', value: 'Gestiona tu web sin depender de nadie.' },
  { icon: <InstagramIcon sx={{ color: '#e1306c' }} />, label: 'Instagram', value: 'Muestra tu marca y portafolio visual.' },
];

export default function Hero() {
  // Estado para animaciones de entrada
  const [showContent, setShowContent] = useState(false);

  // Efecto para mostrar animaciones al montar el componente
  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    // Contenedor principal con fondo degradado oscuro y padding vertical
    <Box
      sx={{
        pt: { xs: 4, md: 10 }, // padding top
        pb: { xs: 1, md: 2 }, // padding bottom reducido
        background: 'linear-gradient(145deg, #0f111a, #1d2233)',
        minHeight: { xs: 'auto', md: '30vh' }, // Mucho menor altura mínima
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Fondo decorativo con gradientes sutiles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at 20% 30%, #00c6ff22 0%, transparent 60%), radial-gradient(circle at 80% 70%, #f7971e22 0%, transparent 60%)',
          filter: 'blur(3px)'
        }}
      />

      {/* Contenido principal centrado */}
      <Container maxWidth="lg" sx={{ zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Columna izquierda: texto y funcionalidades */}
          <Grid item xs={12} md={7}>
            <Fade in={showContent} timeout={800}>
              <Box textAlign={{ xs: 'center', md: 'left' }} sx={{ mt: { xs: 4, md: 7 }, pr: { xs: 1, md: 6 } }}>
                {/* Título principal */}
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '2rem', md: '2.4rem' }, // Más pequeño
                    color: '#ffffff',
                    mb: 1.5, // Menor margen inferior
                    lineHeight: 1.15
                  }}
                >
                  Soluciones digitales a tu medida
                </Typography>
                {/* Subtítulo */}
                <Typography
                  variant="h6"
                  sx={{
                    color: '#c4ccd8',
                    mb: 2.5, // Menor margen inferior
                    maxWidth: 500,
                    fontWeight: 300,
                    fontSize: '1rem', // Más pequeño
                    lineHeight: 1.5
                  }}
                >
                  Creamos páginas web modernas, intuitivas y funcionales que representan el corazón de tu negocio. Simples, potentes y elegantes.
                </Typography>

                {/* Lista de funcionalidades en tarjetas circulares */}
                  <Grid container spacing={3} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                  {features.map((f, index) => (
                    <Zoom in={showContent} style={{ transitionDelay: `${300 + index * 100}ms` }} key={f.label}>
                      <Grid item xs={12} sm={6} md={4} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                          <Paper
                            elevation={3}
                            sx={{
                              background: 'rgba(255, 255, 255, 0.08)',
                              borderRadius: '50%',
                              width: 56,
                              height: 56,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                            }}
                          >
                            <Avatar sx={{ bgcolor: 'transparent', width: 36, height: 36 }}>
                              {f.icon}
                            </Avatar>
                          </Paper>
                          <Box>
                            <Typography variant="body1" sx={{ color: '#fff', fontWeight: 700, mb: 0.5 }}>
                              {f.label}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#b0b8c2', fontSize: '0.85rem', lineHeight: 1.4 }}>
                              {f.value}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Zoom>
                  ))}
                </Grid>

                {/* Botón de llamado a la acción */}
                <Fade in={showContent} timeout={1200}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2, // Menor margen superior
                      px: 8,
                      py: 1.2,
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      background: 'linear-gradient(90deg, #00c6ff, #1976d2)',
                      color: '#fff',
                      boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #1976d2, #00c6ff)',
                        boxShadow: '0 6px 24px rgba(0, 198, 255, 0.4)'
                      }
                    }}
                  >
                    Ver precios
                  </Button>
                </Fade>
              </Box>
            </Fade>
          </Grid>

          {/* Columna derecha: imagen/ilustración decorativa */}
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Fade in={showContent} timeout={1000}>
              <Box
                sx={{
                  height: 180, // Más bajo
                  background: 'url(/images/code-mockup.png) center/contain no-repeat'
                }}
              />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}