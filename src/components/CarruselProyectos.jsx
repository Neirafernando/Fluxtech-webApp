'use client';

import { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const destacados = [
  {
    titulo: 'Landing Page Restaurante',
    descripcion: 'Sitio moderno con menú digital y reservas.',
    tecnologias: ['React', 'MUI', 'Firebase'],
    imagen: '/proyecto1.jpg',
    enlace: 'https://tu-sitio.com/demo1',
  },
  {
    titulo: 'E-commerce de Muebles',
    descripcion: 'Tienda online con catálogo y pagos.',
    tecnologias: ['Next.js', 'Stripe', 'MongoDB'],
    imagen: '/proyecto2.jpg',
    enlace: 'https://tu-sitio.com/demo2',
  },
  {
    titulo: 'Portafolio Personal',
    descripcion: 'Presentación profesional con proyectos y blog.',
    tecnologias: ['Next.js', 'MUI', 'AOS'],
    imagen: '/proyecto3.jpg',
    enlace: 'https://tu-sitio.com/demo3',
  },
];

export default function CarruselProyectos() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <Box id="destacados" sx={{ py: 10, px: 2, bgcolor: '#121212' }}>
      <Typography variant="h4" align="center" gutterBottom data-aos="fade-up">
        Proyectos Destacados
      </Typography>
      <Typography
        align="center"
        color="text.secondary"
        sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Mira algunos de nuestros trabajos más destacados.
      </Typography>

      <Splide
        options={{
          type: 'loop',
          perPage: 2,
          autoplay: true,
          gap: '2rem',
          arrows: true,
          pagination: true,
        }}
        aria-label="Proyectos Destacados"
      >
        {destacados.map((p, index) => (
          <SplideSlide key={index}>
            <Card
              elevation={10}
              sx={{
                bgcolor: '#1e1e1e',
                color: 'white',
                borderRadius: 4,
                maxWidth: 800,
                mx: 'auto',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={p.imagen}
                alt={p.titulo}
                sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {p.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.descripcion}
                </Typography>
                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                  {p.tecnologias.map((tec, i) => (
                    <Chip
                      key={i}
                      label={tec}
                      size="small"
                      sx={{ backgroundColor: '#333', color: 'white' }}
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  size="small"
                  variant="contained"
                  fullWidth
                  href={p.enlace}
                  target="_blank"
                  sx={{
                    bgcolor: '#E94823',
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                      bgcolor: '#ff6845',
                    },
                  }}
                >
                  Ver proyecto
                </Button>
              </CardActions>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
}