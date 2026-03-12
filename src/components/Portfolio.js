import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Portfolio = () => {
  const features = [
    {
      icon: <LayersIcon sx={{ fontSize: 40 }} />,
      title: "Tailored Solutions",
      description:
        "We develop custom solutions that address your specific business challenges and objectives.",
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: "Expert Developers",
      description:
        "Our team consists of skilled developers with expertise in the latest technologies.",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: "Scalable & Secure",
      description:
        "We build solutions that grow with your business and prioritize security at every step.",
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: "Ongoing Support",
      description:
        "We provide continuous support and maintenance to ensure your systems remain effective.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        color: "white",
        textAlign: "center",
        pt: { xs: 4, md: "50px" },
    pb: { xs: 4, md: "50px" },
   
    
   
      }}
    >
      <Container  disableGutters

    sx={{
      maxWidth: { xs: "100%", md: "1439px" },
  minHeight: { md: "475px" },
   
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
       px: { xs: 2, sm: 3, md: 0 },
     
    }}
  >
        {/* --- Section Title --- */}
        <Typography
          variant="h5"
          sx={{
             
     fontFamily: "Poppins",
    fontWeight: 600,
   fontSize: { xs: "22px", sm: "26px", md: "34px" },
    lineHeight: { xs: "24px", md: "34px" },
    letterSpacing: "0px",
    textAlign: "center",
    color: "#4169E1",
    width: { xs: "100%", md: "1239px" },
    mx: "auto",
    margin: 0,
    marginBottom: "20px", 
    
  }}
>
          Why Choose Cosmos Digital ?
        </Typography>

        {/* --- Subtitle --- */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
    fontStyle: "normal",
      fontSize: { xs: "16px", sm: "18px", md: "24px" },
    lineHeight: "24px",   // 100% of 24px
    letterSpacing: "0px",
    textAlign: "center",
    color: "#000000",
              gap:"14px",
    width: { xs: "100%", md: "1239px" },
    mx: "auto",
    margin:0,
    mb:"25px",
 
    
  

          }}
        >
          We combine technical expertise with business insights to deliver
          solutions that drive growth.
        </Typography>

        {/* --- Icon + Text Row --- */}
        <Grid
          container
        justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="flex-start"
          
         sx={{
    width: { xs: "100%", md: "1240px" },
   minHeight: { md: "208px" },
    mx: "auto",
     mt: { xs: 4, md: "70px" }, 
     
  }}>
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                  mb: { xs: 4, sm: 0 },
                  minHeight: { md: "208px" },
                   gap:"15px",
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "translateY(5px)",
                },
              }}
            >
              <Stack
                spacing={{ xs: 1.5, md: 3}}
                alignItems="center"
                sx={{ 
                  transition: "all 0.3s ease",
                  "&:hover .iconBox": {
                    backgroundColor: "#ABA8F9",
                    boxShadow: "0 0 25px rgba(168,85,247,0.5)",
                  },
                  "&:hover .icon": {
                    color: "#c084fc",
                    transform: "scale(1.1)",
                  },
                }}
              >
                {/* Icon Box */}
                <Box
                  className="iconBox"
                  sx={{
                    backgroundColor: "#ABA8F94D",
                    borderRadius: "10px",
                      width: { xs: 60, md: 70 }, 
                  height: { xs: 60, md: 70 },
                    display: "flex",
                    padding:"15px",
                    gap:"10px",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                   
                  }}
                >
                  <Box
                    className="icon"
                    sx={{
                      color: "#4169E1",
                      transition: "all 0.3s ease",
                       width: "37.21px",
                      height: "39.68px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                       
                    }}
                  >
                    {feature.icon}
                  </Box>
                </Box>

                {/* Text */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#000000",
                    textAlign: "center",
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                     mb: { xs: 0.5, md: 0 }, 
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000000",
                   textAlign: "center",
                     maxWidth: { xs: "100%", md: "250px" },
                     mt: { xs: 0, md: 0 },
                  }}
                >
                  {feature.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;