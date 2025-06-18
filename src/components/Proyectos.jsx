'use client';

import { useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
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

const proyectos = [
  {
    titulo: 'Landing Page Restaurante',
    descripcion: 'Sitio web moderno con reservas y menú digital.',
    tecnologias: ['React', 'MUI', 'Firebase'],
    imagen: '/proyecto1.jpg',
    enlace: 'https://tu-sitio.com/demo1',
  },
  {
    titulo: 'E-commerce de Muebles',
    descripcion: 'Tienda online con carrito de compras y pasarela de pago.',
    tecnologias: ['Next.js', 'Stripe', 'MongoDB'],
    imagen: '/proyecto2.jpg',
    enlace: 'https://tu-sitio.com/demo2',
  },
  {
    titulo: 'Portafolio Personal',
    descripcion: 'Sitio de presentación con blog, contacto y proyectos.',
    tecnologias: ['Next.js', 'MUI', 'AOS'],
    imagen: '/proyecto3.jpg',
    enlace: 'https://tu-sitio.com/demo3',
  },
  {
    titulo: 'Sitio para Emprendimiento Local',
    descripcion: 'Landing sencilla para agendar servicios y mostrar información del negocio.',
    tecnologias: ['React', 'Tailwind CSS'],
    imagen: '/proyecto4.jpg',
    enlace: 'https://tu-sitio.com/demo4',
  },

];

export default function Proyectos() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <Box id="proyectos" sx={{ py: 10, px: 2, bgcolor: '#121212' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        data-aos="fade-up"
      >
        Proyectos Recientes
      </Typography>
      <Typography
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Aquí algunos ejemplos de lo que podemos construir juntos.
      </Typography>

      <Grid container spacing={4}>
        {proyectos.map((p, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} data-aos="zoom-in">
            <Card
              sx={{
                backgroundColor: '#1e1e1e',
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              elevation={6}
            >
              <CardMedia
                component="img"
                height="180"
                image={p.imagen}
                alt={p.titulo}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {p.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.descripcion}
                </Typography>
                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                  {p.tecnologias.map((tec, i) => (
                    <Chip key={i} label={tec} size="small" />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ mt: 'auto', p: 2 }}>
                <Button
                  size="small"
                  variant="outlined"
                  href={p.enlace}
                  target="_blank"
                  sx={{ borderColor: '#E94823', color: '#E94823' }}
                >
                  Ver proyecto
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
