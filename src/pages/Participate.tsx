import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';

const Participate: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Formulário enviado');
    };

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                    Como Participar
                </Typography>
                <Paper elevation={3} sx={{ p: 4, borderRadius: '16px' }}>
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                        Junte-se a nós!
                    </Typography>
                    <Typography paragraph>
                        Preencha o formulário abaixo para se cadastrar e começar a participar de ações voluntárias.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Nome Completo"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="company"
                                    name="company"
                                    label="Empresa (se aplicável)"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="cpf-cnpj"
                                    name="cpf-cnpj"
                                    label="CPF/CNPJ"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="E-mail"
                                    type="email"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    name="phone"
                                    label="Telefone"
                                    type="tel"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{ py: 1.5, fontSize: '1.1rem' }}
                                >
                                    Enviar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default Participate;

