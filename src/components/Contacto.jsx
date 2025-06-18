'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function CTA() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  const whatsappUrl =
    'https://wa.me/56912345678?text=Hola%20FluxTech,%20me%20interesa%20desarrollar%20un%20sitio%20web%20para%20mi%20negocio.';
  const instagramUrl = 'https://www.instagram.com/flux_techpc';

  return (
    <Box  
      id="cta"
      sx={{
        bgcolor: '#23272f',
        color: 'white',
        py: { xs: 10, md: 12 },
        textAlign: 'center',
        borderRadius: 4,
        boxShadow: '0 2px 16px 0 rgba(233,72,35,0.10)',
        my: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom data-aos="fade-up">
          ¿Listo para destacar con tu sitio web?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 600, mx: 'auto', mb: 4 }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          En FluxTech diseñamos sitios modernos, rápidos y personalizados para ayudarte
          a impulsar tu negocio en internet. Contáctanos por WhatsApp o visítanos en Instagram.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          justifyContent="center"
          mt={4}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              px: 5,
              py: 2,
              fontWeight: 'bold',
              fontSize: '1.1rem',
              borderRadius: 3,
              background: 'linear-gradient(90deg, #E94823 0%, #ff7e5f 100%)',
              boxShadow: '0 4px 24px 0 rgba(233,72,35,0.18)',
              transition: 'all 0.2s',
              '&:hover': {
                background: 'linear-gradient(90deg, #ff7e5f 0%, #E94823 100%)',
                color: 'white',
                transform: 'scale(1.05)',
                boxShadow: '0 8px 32px 0 rgba(233,72,35,0.25)',
              },
            }}
            startIcon={<WhatsAppIcon />}
            component="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotiza tu sitio web
          </Button>

          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'black',
              px: 5,
              py: 2,
              fontWeight: 'bold',
              fontSize: '1.1rem',
              borderRadius: 3,
              boxShadow: '0 4px 24px 0 rgba(33,203,243,0.10)',
              transition: 'all 0.2s',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
                transform: 'scale(1.05)',
                boxShadow: '0 8px 32px 0 rgba(33,203,243,0.18)',
              },
            }}
            startIcon={<InstagramIcon />}
            component="a"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
