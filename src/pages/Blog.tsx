import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

const blogPosts = [
    {
        title: 'O Impacto do Voluntariado na Comunidade',
        excerpt: 'Descubra como pequenas ações podem fazer uma grande diferença...',
        image: 'https://picsum.photos/800/600',
    },
    {
        title: 'Dicas para Novos Voluntários',
        excerpt: 'Começando sua jornada no voluntariado? Confira estas dicas essenciais...',
        image: 'https://picsum.photos/800/600',
    },
    {
        title: 'Histórias Inspiradoras: Voluntários em Ação',
        excerpt: 'Conheça as histórias de voluntários que estão transformando vidas...',
        image: 'https://picsum.photos/800/600',
    },
];

const Blog: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                    Blog
                </Typography>
                <Grid container spacing={4}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={post.image}
                                        alt={post.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.excerpt}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Blog;

