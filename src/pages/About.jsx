import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ProprietorImage from '/images/proprietor.jpg';  // Replace with the correct path to the image

function AboutUs() {
    return (
        <Container sx={{ pt: 5, pb: 10 }}>
            <Typography variant="h3" gutterBottom align="center">
                आमच्याबद्दल
            </Typography>

            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <img
                        src={ProprietorImage}
                        alt="Proprietor"
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph>
                        गणेश मिल्क प्रॉडक्ट्सची स्थापना १९९० मध्ये झाली. आमचे आजोबा, बजीरंग बुगड यांच्या मार्गदर्शनाखाली आम्ही व्यवसायाची सुरुवात केली. आम्ही ताज्या आणि शुद्ध दूध उत्पादनांच्या गुणवत्ता आणि स्वच्छतेवर विशेष लक्ष देतो. आमचे प्रमुख उत्पादने म्हणजे उत्कृष्ट खवा, पेढे, रबडी, बासुंदी आणि इतर दूध उत्पादने.                    </Typography>
                    <Typography variant="body1" paragraph>
                        आम्ही लग्न, वाढदिवस आणि इतर शुभकार्यांसाठी ऑर्डर्स स्वीकारतो, तसेच हॉटेल्स, केटरर्स, होलसेल आणि किरकोळ व्यवसायांसाठी तसेच ऑनलाइन ऑर्डरचे वितरण करतो.                    </Typography>
                    <Typography variant="body1" paragraph>
                        आमच्या प्रतिष्ठानाला ३० वर्षांचा अनुभव आहे, आणि आम्ही प्रत्येक ग्राहकाच्या घरापर्यंत शुद्ध आणि ताज्या उत्पादनांची विक्री करत आहोत. आम्हाला आमच्या ग्राहकांच्या विश्वासावर गर्व आहे, आणि आम्ही प्रत्येक ऑर्डर वेळेत आणि सुरक्षितपणे पोहोचविण्याची वचनबद्धता घेतो.                    </Typography>
                    <Typography variant="body1" paragraph>
                        आम्ही वेळोवेळी ऑर्डर प्रक्रिया सुधारत जात आहोत, आणि आज आम्हाला दररोज हजारो ऑर्डर डिलिव्हरी करण्याची क्षमता आहे. आमचे कर्मचारी प्रत्येक ऑर्डर सुरक्षितपणे आणि वेळेत पोहोचवतात.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        "विश्वास आणि प्रेमाने दुधाच्या उत्पादनांची सेवा करणे हेच आमचे ध्येय."
                    </Typography>

                    <Typography variant="body2" align="right" color="text.secondary">
                        <strong>प्रो. प्रा. : श्री. सुरज अनंत बुगड.</strong>
                    </Typography>
                </Grid>
            </Grid>


        </Container>
    );
}

export default AboutUs;
