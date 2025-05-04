import React from "react";
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";  // Import the carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS for carousel

// Product data with local image paths
const productData = [
    { name: 'खवा', image: '/images/basu1.jpg', description: 'शुद्ध दूधापासून तयार केलेला खवा.' },
    { name: 'रबडी', image: '/images/basu2.jpg', description: 'स्वादिष्ट रबडी ताज्या दूधाची.' },
    { name: 'पेढे', image: '/images/basu3.jpeg', description: 'गोड आणि स्वादिष्ट पेढे.' },
];

const productList = [
    {
        name: 'खवा रबडी',
        image: '/images/khavaRabadi.jpeg',
        description: 'खवापासून बनलेली गाडी आणि साजूक रबडी – पारंपरिक चव आणि घट्टपणा. ह्या स्वादिष्ट रबडीमध्ये खवा आणि रबडीचा सर्वोत्तम संगम मिळतो. तिचा गोडपणा आणि ठोस बनावट तुम्हाला प्रत्येक बाईटमध्ये पारंपरिक स्वादाचा अनुभव देतील. एक अत्युत्तम पदार्थ जे तुमच्या जेवणाचा एक भाग बनू शकतो.'
    },
    {
        name: 'सिताफळ रबडी',
        image: '/images/sitafal.jpeg',
        description: 'ताज्या सिताफळांपासून तयार केलेली थंडगार, मधुर रबडी – उन्हाळ्यासाठी परिपूर्ण. या रबडीमध्ये सिताफळाची ताजगी आणि गोडवा भरलेला आहे. प्रत्येक चमच्यात तुम्हाला ताज्या फलांचे चवदार मिश्रण आणि रबडीचा मऊपणा मिळेल. उकडलेल्या उन्हाळ्यात त्याचे सेवन खास अनुभव देणारे आहे.'
    },
    {
        name: 'आंबा रबडी',
        image: '/images/mango.jpeg',
        description: 'हापूस आंब्याच्या रसाने भरलेली साखरमय रबडी – प्रत्येक घोटाला आंब्याचा स्वाद. आंब्याचे गोडपण आणि रबडीचा शाही अनुभव यांचं मिश्रण, तुम्हाला नवा स्वाद देईल. हापूस आंब्याची ताजगी आणि मधुरता रबडीमध्ये मिसळून ती एक परिपूर्ण पदार्थ बनवते. हा खास रुचिकर पदार्थ गारवा आणि गोडवा यांचा उत्तम संगम आहे.'
    },
    {
        name: 'स्ट्रॉबेरी रबडी',
        image: '/images/strawberry.jpeg',
        description: 'फ्रेश स्ट्रॉबेरी आणि रबडीचा गोड आणि आंबटसर संगम – लहानांपासून मोठ्यांपर्यंत आवडती. स्ट्रॉबेरीची ताजगी आणि रबडीचा गोडसर चव हा अनुभव अनोखा बनवतो. ह्या मिश्रणात स्ट्रॉबेरीचा सौम्य आंबटपणा रबडीच्या गोडपणाशी आदान-प्रदान होतो, ज्यामुळे प्रत्येक बाईटला एक वेगळा स्वाद प्राप्त होतो.'
    },
    {
        name: 'अंजीर रबडी',
        image: '/images/anjeer.jpeg',
        description: 'सुक्या अंजीराने भरलेली रबडी – आरोग्यदायक आणि पौष्टिक पर्याय. अंजीरामुळे रबडीला एक उत्तम गोडसर चव मिळते, जी आरोग्याच्या दृष्टीने फायदेशीर असते. हे एक उत्कृष्ट खाद्य पदार्थ आहे, जे पौष्टिकता आणि चवीचा उत्तम संगम आहे. यामध्ये अंजीराच्या नैतिक गुणधर्मांमुळे पचन सुधारते आणि एक नवा ताजेपणा दिला जातो.'
    }
];


function Home() {
    return (
        <Box sx={{ backgroundColor: "#f0f4f8", display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Hero Section */}
            <Container sx={{ textAlign: "center", pt: 5 }}>
                <Typography variant="h6" paragraph>
                    इचलकरंजी मधिल सुप्रसिद्ध, बुगड बंधू यांचे...
                </Typography>
                <Typography variant="h2" gutterBottom>
                    गणेश मिल्क प्रॉडक्ट्स मध्ये आपले स्वागत आहे!
                </Typography>
                <Typography variant="h6" paragraph>
                    "ताज्या व शुद्ध दुधापासून तयार केलेली आमची उत्पादने आपल्या गुणवत्तेसाठी ओळखली जातात."
                </Typography>
                <Typography variant="h6" gutterBottom>
                    सन १९९० पासून आपल्या सेवेत...
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                    अधिक जाणून घ्या
                </Button>
            </Container>

            {/* Carousel Section */}
            <Container sx={{ pt: 5 }}>
                <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 500 }}>
                    ♦ आमची दर्जेदार उत्पादने ♦
                </Typography>
                <Box sx={{ maxWidth: "100%" }}>
                    <Carousel>
                        {productData.map((product, index) => (
                            <div key={index}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="carousel-image"
                                />
                            </div>
                        ))}
                    </Carousel>
                </Box>
            </Container>

            {/* Product Grid Section */}
            <Container sx={{ pt: 5, pb: 10 }}>
                <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 500 }}>
                    ♦ आमची दर्जेदार उत्पादने ♦
                </Typography>
                <Grid container spacing={4}>
                    {productList.map((product, index) => (
                        <Grid item xs={12} sm={4} md={4} key={index}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    boxShadow: 10,
                                    borderRadius: 2
                                }}
                            >

                                <CardMedia
                                    component="img"
                                    image={product.image}
                                    alt={product.name}
                                    sx={{
                                        width: '100%',
                                        height: 500,
                                        objectFit: 'contain',
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                        padding: 2
                                    }}
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ overflowWrap: 'break-word' }}>
                                        {product.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box >
    );
}

export default Home;