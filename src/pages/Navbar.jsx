import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Navbar() {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#3f51b5' }}>
            <Toolbar>
                {/* Logo Section */}
                <Box sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src="/images/logo.png"  // Ensure the logo is placed in the public/images folder
                            alt="Ganesh Milk Logo"
                            style={{ height: '70px', marginRight: '10px' }} // Customize size
                        />
                        <Typography variant="h6" component="div" sx={{ color: '#fff', fontSize: '18px' }} >
                            गणेश मिल्क प्रॉडक्ट्स
                        </Typography>
                    </Link>
                </Box>

                {/* Navbar Buttons */}
                <Button color="inherit" component={Link} to="/home">
                    मुख्यपृष्ठ
                </Button>
                <Button color="inherit" component={Link} to="/About">
                    आमच्याबद्दल
                </Button>
                <Button color="inherit" component={Link} to="/Contact">
                    संपर्क
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
