import React from 'react';
import { Typography, Box, Grid, Paper, Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <Box>
            <Paper
                elevation={0}
                sx={{
                    backgroundImage: 'url(/rio.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 4,
                    borderRadius: '16px',
                    overflow: 'hidden',
                }}
            >
                <Box sx={{ textAlign: 'center', color: 'white', backgroundColor: 'rgba(0,0,0,0.6)', p: 4, borderRadius: '8px' }}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Bem-vindo ao VoluntaRios
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Conectando pessoas e transformando comunidades
                    </Typography>
                    <Button variant="contained" color="secondary" component={Link} to="/participate" size="large" sx={{ mt: 2 }}>
                        Participe Agora
                    </Button>
                </Box>
            </Paper>

            <Grid container spacing={4}>
                {[
                    { title: 'Sobre o VoluntaRios', content: 'O VoluntaRios é uma plataforma que conecta pessoas interessadas em ajudar comunidades locais por meio de ações voluntárias. Nosso objetivo é criar um impacto positivo, fortalecendo laços entre voluntários e organizações.', link: '/about', linkText: 'Saiba Mais' },
                    { title: 'Como Funciona', content: 'Nossa plataforma é simples e intuitiva. Você pode criar uma conta, procurar ações que combinem com seus interesses e habilidades, e se conectar com ONGs para participar de projetos incríveis.', link: '/participate', linkText: 'Comece Agora' },
                    { title: 'Benefícios', content: 'Participar de ações voluntárias oferece muitos benefícios, como desenvolvimento pessoal e profissional, fortalecimento de habilidades de trabalho em equipe e impacto positivo na vida de outras pessoas.', link: '/blog', linkText: 'Leia Histórias' },
                ].map((item, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`/logo.jpeg`}
                                alt={item.title}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ height: '100px' }} variant="body2" paragraph>
                                    {item.content}
                                </Typography>
                                <Button variant="outlined" color="primary" component={Link} to={item.link}>
                                    {item.linkText}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Home;

