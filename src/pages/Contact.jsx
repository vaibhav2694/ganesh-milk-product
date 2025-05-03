import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Contact() {
    return (
        <Container sx={{ py: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
                आमच्याशी संपर्क साधा
            </Typography>

            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                फ्रँचायझीबाबत माहिती किंवा ऑर्डरसाठी, कृपया खालील पत्त्यावर किंवा फोनद्वारे संपर्क साधा.
            </Typography>

            <Box sx={{ mb: 4 }}>
                <iframe
                    title="Ganesh Milk Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d912.607728160039!2d74.4562210666407!3d16.683619413572668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1746284918466!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>

            <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6">
                    गणेश मिल्क प्रॉडक्ट्स
                </Typography>
                <Typography variant="body1">
                    तीन बत्ती चौक, इचलकरंजी, ता.हातकणंगले, जिल्हा कोल्हापूर - 416115, महाराष्ट्र.
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    फोन: +91 90965 56808 <br />
                    ईमेल: info@ganeshmilk.com
                </Typography>
            </Box>
        </Container>
    );
}

export default Contact;
