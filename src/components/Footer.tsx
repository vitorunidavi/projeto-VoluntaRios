import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Typography variant="body2" color="text.secondary" align="center">
                © 2024 VoluntaRios. Todos os direitos reservados.
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                <Link href="#" color="inherit">
                    Facebook
                </Link>{' '}
                |{' '}
                <Link href="#" color="inherit">
                    Instagram
                </Link>{' '}
                |{' '}
                <Link href="#" color="inherit">
                    Twitter
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;