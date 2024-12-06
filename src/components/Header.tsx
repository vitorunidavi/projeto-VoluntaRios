import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    VoluntaRios
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">Página Principal</Button>
                    <Button color="inherit" component={Link} to="/about">Quem Somos</Button>
                    <Button color="inherit" component={Link} to="/blog">Blog</Button>
                    <Button color="inherit" component={Link} to="/participate">Como Participar?</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;