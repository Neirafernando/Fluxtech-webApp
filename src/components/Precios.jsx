'use client';

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const planes = [
  {
    titulo: 'Landing Page',
    precio: '$70.000 CLP',
    descripcion: [
      '1 página con secciones',
      'Diseño responsivo',
      'Formulario de contacto',
    ],
  },
  {
    titulo: 'Web Corporativa',
    precio: '$120.000 CLP',
    descripcion: [
      'Hasta 5 secciones',
      'Formulario + mapa',
      'Diseño personalizado',
    ],
  },
  {
    titulo: 'E-commerce',
    precio: 'Desde $200.000 CLP',
    descripcion: [
      'Catálogo de productos',
      'Carrito + pagos',
      'Panel de administración',
    ],
  },
];

export default function Precios() {
  return (
    <Box id="precios" sx={{ py: 10, px: 2, bgcolor: '#121212', color: 'white' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Planes y Precios
      </Typography>
      <Typography
        align="center"
        color="text.secondary"
        sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
      >
        Elige el plan que mejor se adapte a tu negocio. Todos los sitios incluyen diseño responsivo y optimización básica.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {planes.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={6}
              sx={{
                backgroundColor: '#1e1e1e',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {plan.titulo}
                </Typography>
                <Typography variant="h5" sx={{ color: '#E94823', mb: 2 }}>
                  {plan.precio}
                </Typography>
                <List dense>
                  {plan.descripcion.map((linea, i) => (
                    <ListItem key={i} disableGutters>
                      <ListItemText primary={`• ${linea}`} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ mt: 'auto', p: 2 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  href="https://wa.me/56912345678?text=Hola%20FluxTech,%20me%20interesa%20el%20plan%20de%20${encodeURIComponent(plan.titulo)}."
                  target="_blank"
                  sx={{
                    borderColor: '#E94823',
                    color: '#E94823',
                    fontWeight: 'bold',
                  }}
                >
                  Cotizar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
