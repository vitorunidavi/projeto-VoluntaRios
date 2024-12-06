import React from 'react';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';

const About: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                    Quem Somos
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: '16px' }}>
                            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                                Nossa Missão
                            </Typography>
                            <Typography paragraph>
                                O <strong>VoluntaRios</strong> é uma plataforma dedicada a conectar pessoas interessadas em contribuir com suas comunidades através de ações voluntárias.
                                Nosso propósito é promover o impacto social positivo, facilitando a interação entre voluntários e organizações não governamentais (ONGs).
                            </Typography>
                            <Typography paragraph>
                                Criamos um ambiente intuitivo onde você pode descobrir iniciativas que combinam com seus interesses e habilidades, além de fortalecer sua rede de contatos
                                com outros voluntários e instituições. Acreditamos no poder da solidariedade para transformar vidas e construir um mundo mais justo.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: '16px' }}>
                            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                                O que Oferecemos
                            </Typography>
                            <List>
                                {[
                                    'Uma plataforma fácil de usar para encontrar oportunidades de voluntariado',
                                    'Conexão direta com ONGs e projetos sociais',
                                    'Espaço para compartilhar histórias, experiências e aprendizado',
                                    'Suporte e orientação para novos voluntários',
                                    'Oportunidades de desenvolvimento pessoal e profissional'
                                ].map((text, index) => (
                                    <ListItem key={index} sx={{ py: 1 }}>
                                        <ListItemIcon>
                                            <CheckIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <Box mt={6} textAlign="center">
                    <Typography variant="h5" gutterBottom>
                        Junte-se a nós e faça a diferença em sua comunidade!
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default About;

