// src/components/Servicios.jsx
'use client';
import { Box, Grid, Typography, Avatar, Fade, Collapse, Paper, Slide } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import BuildIcon from '@mui/icons-material/Build';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { keyframes } from '@emotion/react';

const servicios = [
	{
		titulo: 'Diseño y Desarrollo Web SEO',
		descripcion:
			'Especialistas en diseño web profesional y desarrollo de páginas web optimizadas para SEO. Creamos sitios web responsivos, rápidos y seguros, pensados para posicionar tu negocio en Google y atraer más clientes. Mejora tu presencia online, aumenta tu visibilidad y convierte visitas en ventas con una web moderna, optimizada y enfocada en la experiencia de usuario.',
		icono: <CodeIcon sx={{ fontSize: 36, color: '#00e1ff' }} />, // celeste vibrante
		color: '#00e1ff',
		bg: 'linear-gradient(135deg, #00e1ff 0%, #007cf0 100%)',
	},
	{
		titulo: 'E-commerce & Tiendas Online',
		descripcion:
			'Lanza tu tienda digital con pagos integrados, catálogo autoadministrable y diseño que vende. ¡Empieza a vender hoy mismo!',
		icono: <StorefrontIcon sx={{ fontSize: 36, color: '#ffb300' }} />, // amarillo vibrante
		color: '#ffb300',
		bg: 'linear-gradient(135deg, #ffb300 0%, #ff6a00 100%)',
	},
	{
		titulo: 'Landing Pages & Portafolios',
		descripcion:
			'Páginas de alto impacto para captar clientes, mostrar tu trabajo o lanzar productos digitales. Minimalismo, velocidad y resultados.',
		icono: <DashboardIcon sx={{ fontSize: 36, color: '#a259ff' }} />, // violeta vibrante
		color: '#a259ff',
		bg: 'linear-gradient(135deg, #a259ff 0%, #6a82fb 100%)',
	},
];

const fadeInDesc = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

// Animación de levitación
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
  100% { transform: translateY(0); }
`;

export default function Servicios() {
	const [selected, setSelected] = useState(null);
	const [showTitle, setShowTitle] = useState(false);
	const titleRef = useRef();

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setShowTitle(true);
			},
			{ threshold: 0.5 }
		);
		if (titleRef.current) observer.observe(titleRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<Box
			id="servicios"
			sx={{
				py: 8,
				px: 2,
				background:
					'linear-gradient(135deg, #181f2a 0%, #232b3e 100%)',
				position: 'relative',
			}}
		>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
				<Typography
					ref={titleRef}
					variant="h4"
					align="center"
					gutterBottom
					sx={{
						color: '#fff',
						fontWeight: 900,
						mb: 8,
						letterSpacing: 1,
						transform: showTitle ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(40px)',
						opacity: showTitle ? 1 : 0,
						transition: 'all 2.2s cubic-bezier(.4,2,.6,1)',
						textShadow: showTitle ? '0 8px 32px #00e1ff44' : 'none',
						filter: showTitle ? 'blur(0)' : 'blur(2px)',
					}}
				>
					Servicios
				</Typography>
			</Box>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 220px)' },
						justifyContent: 'center',
						alignItems: 'start',
						gap: { xs: 4, sm: 16 }, // más espacio horizontal
						mx: 'auto',
					}}
				>
					{servicios.map((servicio, idx) => (
						<Box
							key={servicio.titulo}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								minWidth: 140,
							}}
						>
							<Paper
								elevation={selected === idx ? 12 : 4}
								onClick={() =>
									setSelected(selected === idx ? null : idx)
								}
								sx={{
									cursor: 'pointer',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									width: 100,
									height: 100,
									borderRadius: '50%',
									background:
										selected === idx
											? servicio.bg
											: 'rgba(255,255,255,0.10)',
									boxShadow: selected === idx
										? `0 8px 36px 0 ${servicio.color}77`
										: `0 2px 12px 0 ${servicio.color}22`,
									border: `3px solid ${servicio.color}`,
									transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
									mb: 1,
									transform: selected === idx ? 'scale(1.08)' : 'scale(1)',
									'&:hover': {
										boxShadow: `0 12px 40px 0 ${servicio.color}aa`,
										transform: 'scale(1.10)',
										background: servicio.bg,
									},
									animation: `${float} 3.2s ease-in-out infinite`,
									animationDelay: `${idx * 0.5}s`,
								}}
							>
								<Avatar
									sx={{ bgcolor: 'transparent', width: 56, height: 56 }}
								>
									{servicio.icono}
								</Avatar>
							</Paper>
							<Typography
								variant="h6"
								sx={{
									color: servicio.color,
									fontWeight: 800,
									mb: 1,
									textAlign: 'center',
									minWidth: 120,
									mt: 1,
									letterSpacing: 0.5,
								}}
							>
								{servicio.titulo}
							</Typography>
							<Slide direction="up" in={selected === idx} mountOnEnter unmountOnExit>
								<Paper
									elevation={0}
									sx={{
										mt: 1,
										p: 1.2,
										background: 'rgba(0,0,0,0.70)',
										color: '#fff',
										borderRadius: 2,
										minWidth: 320,
										maxWidth: 480,
										fontWeight: 500,
										fontSize: '0.98em',
										textAlign: 'center',
										letterSpacing: 0.2,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										minHeight: 40,
										boxShadow: '0 8px 32px 0 #0006',
										animation: selected === idx ? 'fadeInDesc 0.5s cubic-bezier(.4,2,.6,1)' : 'none',
									}}
								>
									<Typography
										variant="body2"
										sx={{
											color: '#fff',
											fontWeight: 500,
											fontSize: '0.98em',
											textAlign: 'center',
											m: 0,
										}}
									>
										{servicio.descripcion}
									</Typography>
								</Paper>
							</Slide>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
}
