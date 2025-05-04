import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const navLinks = [
        { text: 'मुख्यपृष्ठ', to: '/home' },
        { text: 'आमच्याबद्दल', to: '/About' },
        { text: 'संपर्क', to: '/Contact' }
    ];

    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: '#3f51b5' }}>
                <Toolbar>
                    {/* Logo and Title */}
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <img
                                src="/images/logo.png"
                                alt="Ganesh Milk Logo"
                                style={{ height: '60px', marginRight: '10px' }}
                            />
                            <Typography variant="h6" sx={{ color: '#fff', fontSize: '18px' }}>
                                गणेश मिल्क प्रॉडक्ट्स
                            </Typography>
                        </Link>
                    </Box>

                    {/* Mobile Menu Icon */}
                    {isMobile ? (
                        <>
                            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                                <List sx={{ width: 200 }}>
                                    {navLinks.map((item, index) => (
                                        <ListItem
                                            button
                                            key={index}
                                            component={Link}
                                            to={item.to}
                                            onClick={toggleDrawer(false)}
                                        >
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        // Desktop Menu
                        navLinks.map((item, index) => (
                            <Button
                                key={index}
                                color="inherit"
                                component={Link}
                                to={item.to}
                                sx={{ ml: 2 }}
                            >
                                {item.text}
                            </Button>
                        ))
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
