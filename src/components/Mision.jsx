// src/components/ServicesSection.jsx
'use client'
import {
  Container,
  Paper,
  Typography,
  Box,
  Fade,
  Divider,
  Grid
} from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import LanguageIcon from '@mui/icons-material/Language';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const services = [
    {
      icon: <StoreIcon sx={{ fontSize: 40, color: '#00c6ff' }} />,
      title: 'Impulsa tu negocio local',
      description: 'Descubre cómo llevar tu negocio local al siguiente nivel con soluciones digitales accesibles y efectivas. Desde sitios web simples hasta estrategias de automatización básica, te ayudamos a conectar con más clientes y expandir tu alcance.',
      tools: 'Sitios web simples | Gestión de redes sociales | Automatización básica para emprendedores',
      background: '#ffffff',
      color: '#0f111a'
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: 'Tu vitrina online',
      description: 'Transforma tu tienda física en una vitrina digital atractiva y funcional. Con nuestras soluciones, podrás mostrar tus productos y servicios en línea, aumentar tus ventas y mejorar la experiencia de tus clientes.',
      tools: 'Tienda virtual | Catálogo de productos | Integración con WhatsApp y redes sociales',
      background: '#000000',
      color: '#ffffff'
    },
    {
      icon: <MonetizationOnIcon sx={{ fontSize: 40, color: '#f7971e' }} />,
      title: 'Soluciones reales, presupuestos reales',
      description: 'Ofrecemos paquetes personalizables y escalables que se adaptan a tus necesidades y presupuesto. Desde landing pages hasta estrategias de crecimiento progresivo, te ayudamos a alcanzar tus objetivos sin complicaciones.',
      tools: 'Landing pages | Automatización mínima | Estrategias de crecimiento progresivo',
      background: '#2f2f2f',
      color: '#ffffff'
    }
  ];

  return (
    <Box ref={ref} sx={{ background: '#f5f5f5', py: 10 }}>
      <Container maxWidth="lg">
        {inView && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#0f111a',
                  fontWeight: 800,
                  mb: 6,
                  textAlign: 'center'
                }}
              >
                Servicios pensados para emprendedores reales
              </Typography>
            </motion.div>

            <Grid container spacing={4} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              {services.map((service, i) => (
                <Grid item xs={12} md={4} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)' }}
                    transition={{ delay: i * 0.05, duration: 0.1 }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        background: service.background,
                        p: { xs: '24px 12px', md: '32px 24px' },
                        borderRadius: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        color: service.color,
                        height: { xs: 600, md: 600 },
                        width: '100%',
                        maxWidth: 320,
                        margin: '0 auto',
                        alignItems: 'stretch',
                        boxSizing: 'border-box',
                      }}
                    >
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>{service.icon}</Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, wordBreak: 'break-word', textAlign: 'center', width: '100%', fontSize: '1.5rem' }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: service.color === '#ffffff' ? '#c4ccd8' : '#333', wordBreak: 'break-word', textAlign: 'center', width: '100%', fontSize: '1.2rem', overflow: 'hidden' }}>
                        {service.description}
                      </Typography>
                      <Divider sx={{ borderColor: service.color === '#ffffff' ? '#444' : '#ccc', my: 2 }} />
                      <Typography variant="caption" sx={{ color: service.color === '#ffffff' ? '#aab4c2' : '#555', fontSize: '0.95rem', wordBreak: 'break-word', textAlign: 'center', width: '100%' }}>
                        {service.tools}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
}
