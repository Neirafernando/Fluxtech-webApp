// src/components/Servicios.jsx
'use client';
import { Box, Grid, Paper, Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';

const servicios = [
  {
    titulo: 'Desarrollo Web',
    descripcion: 'Sitios modernos, responsivos y optimizados para tu negocio.',
    icono: <CodeIcon sx={{ fontSize: 50 }} />,
  },
  {
    titulo: 'Soporte Técnico',
    descripcion: 'Diagnóstico y mantención de equipos con asistencia remota o presencial.',
    icono: <BuildIcon sx={{ fontSize: 50 }} />,
  },
  {
    titulo: 'Asesoría Tecnológica',
    descripcion: 'Te ayudamos a elegir la mejor solución para tu infraestructura.',
    icono: <ComputerIcon sx={{ fontSize: 50 }} />,
  },
];

export default function Servicios() {
  return (
    <Box id="servicios" sx={{ py: 10, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Servicios
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {servicios.map((servicio, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                height: '100%',
                textAlign: 'center',
                backgroundColor: '#2a2a2a',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              <Box>{servicio.icono}</Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {servicio.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {servicio.descripcion}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
