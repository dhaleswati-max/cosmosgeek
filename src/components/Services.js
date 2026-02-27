import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";





const services = [
  {
    title: "Web Development",
    image: "https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772008667/card2_b59sil.webp",
  },
  {
    title: "Digital Marketing",
    image: "https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772008689/card6_onfbmg.webp",
  },
  {
    title: "Mobile App Development",
    image: "https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772008684/card4_i4pk8e.webp",
  },
  {
    title: "ERP Software",
    image: "https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772008672/card1_kdrm5h.webp",
  },
  {
    title: "Custom Software Development",
    image: "https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772008680/card5_kbcg8m.webp",
  },
  {
    title: "Billing Software",
    image: "https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772008667/card3_dcveyy.webp",
  },
];

const Services = () => {
  return (
    <Box
      
     sx={{
    width: "100%",
    maxWidth: "1440px",
    mx: "auto",
    px: {
      xs: 3,
      md: 4,
      lg: "60px",   // IMPORTANT: not 100px
      xl: "100px",  // only on very large screens
    },
    pt: 8,
    pb: 8,
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  }}       // gap between heading and cards
  
    
    >
      {/* Heading */}
      <Box sx={{ textAlign: "center"}}>
        <Typography
          sx={{
            color: "#4169E1",
            fontWeight: 600,
            mb: 1,
            fontSize: "34px",
          }}
        >
          Our Services
        </Typography>

        <Typography
          sx={{
            opacity: 0.8,
            fontSize: "24px",
            color: "#000000",
            fontWeight: 500,
          }}
        >
          Comprehensive technology solutions designed to accelerate your
          business growth.
        </Typography>
      </Box>
 <Grid
  container
  spacing={2.5} 
  sx={{
      width: {
      xs: "100%",   // full width on mobile
      sm: "100%",   // full width on tablet
      md: "1240px", 
    },
    mx: "auto",
  }}
>
  {services.map((service, index) => (
    <Grid
      item
      key={index}
       xs={12}  // 1 card on mobile
      sm={6}   // 2 cards on tablet
      md="auto" 
      sx={{
        width: "400px",
        height: "477px",
        flexGrow: 0,
      }}
    >
      <Card
        sx={{
          position: "relative",
          height: "477px", 
           width: {
            xs: "100%",   // full width mobile
            sm: "100%",   // full width inside 6-column tablet
            md: "400px",  // EXACT desktop width (unchanged)
          },
          maxWidth: "400px",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <CardMedia
          component="img"
          src={service.image}
          
         
          alt={service.title}
          loading="lazy"
          decoding="async"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
             top: { xs: "8px", md: "12px" },   // smaller top on mobile
             right: { xs: "8px", md: "12px" },
            backgroundColor: "#ABA8F9",
              padding: { xs: "3px 12px", md: "4px 16px" },
          display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
            borderRadius: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <Typography
            sx={{
               fontWeight: 400,
      fontStyle: "normal",
      fontSize: { xs: "14px", md: "16px" }, // smaller text on mobile
      lineHeight: { xs: "14px", md: "16px" },
      letterSpacing: "0px",
      color: "#FFFFFF",
      whiteSpace: "nowrap",
            }}
          >
            {service.title}
          </Typography>
        </Box>
      </Card>
    </Grid>
  ))}
</Grid>
    </Box>
  );
};

export default Services;