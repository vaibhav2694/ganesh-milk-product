import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';  // Import WhatsApp icon from react-icons


function Footer() {
    const whatsappNumber = "+919096556808";
    return (
        <Box sx={{ bgcolor: "#333", color: "#fff", padding: 2 }}>
            <Container>
                <Typography variant="body2" align="center">
                    © 2025 गणेश मिल्क प्रॉडक्ट. सर्व हक्क राखीव.
                </Typography>
                <Typography variant="body2" align="center">
                    <a href="mailto:info@ganeshmilk.com" style={{ color: "#fff", textDecoration: "none" }}>
                        info@ganeshmilk.com
                    </a> |
                    <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>
                        Contact Us
                    </a>
                </Typography>
            </Container>

            <Box sx={{ position: "fixed", bottom: "20px", right: "20px", backgroundColor: "#25d366", borderRadius: "50%", padding: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}>
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp करा"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#25d366",
                        borderRadius: "50%",
                        width: 60,
                        height: 60,
                        color: "#fff",
                        fontSize: 32,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                        textDecoration: "none",
                    }}
                >
                    <FaWhatsapp />
                </a>
            </Box>
        </Box>
    );
}

export default Footer;
