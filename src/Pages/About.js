import React from "react";
import { Box, Typography, Container, Grid, Stack,Button } from "@mui/material";
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Aboutdevelopment from "./Aboutdevelopment";
import Aboutexpert from "./Aboutexpert";
import Footer from "../components/Footer";
import imagenew from '../Assets/Images/imagenew.webp';

import { useNavigate } from "react-router-dom";

const About = () => {
  
  
  const navigate= useNavigate();
  const features = [
    {
      title: "Client-Centric Approach",
      description:
        "We put our clients’ needs at the center of everything we do, ensuring solutions that deliver real business value.",
    },
    {
      title: "Technical Excellence",
      description:
        "We are committed to maintaining the highest standards of technical quality in all our projects.",
    },
    {
      title: "Continuous Innovation",
      description:
        "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
    },
  ];

  const vals=[
    {
        icon:<SecurityIcon fontSize="36"/>,
        title:"Integrity",
        description:"We operate with honesty and transparency in all our business dealings. "

    },
    {
        icon:<CheckCircleOutlineIcon fontSize="36"/>,
        title: "Excellance",
        description:"We strive for exellance in every aspect of work. "

    },
    {
        icon:<CodeOffIcon fontSize="36"/>,
        title:"Innovation",
        description:"We embrass a new ideas and technologies to solve complex problem. "

    },
    {
    icon:<SettingsApplicationsIcon fontSize="36"/>,
    title:"integrity",
    description:"We belive in the power of teamwork and partnership."
    },

  ]
  return (
    <>
       <Box
      id="home"
        sx={{
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
  }}
>
  {/* LCP Image */}
  <Box
    component="img"
    src={imagenew}
    alt=""
    loading="eager"
    fetchpriority="high"
    sx={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  />

     
    

      {/* 🌠 Hero Text Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          px: 3,
          display:"flex",flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
         
          height:"100vh"
        }}
      >
        <Typography
  variant="h2"
  sx={{
    fontWeight: "bold",
    mb: 2,
    fontSize: { xs: "2.5rem", md: "4rem" },
    textShadow: "0 0 20px rgba(255,255,255,0.2)",
    background: "linear-gradient(90deg, #4169E1, #38BDF8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  }}
>
  About Us
</Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 3,
            opacity: 0.9,
            fontSize: { xs: "1.2rem", md: "1.8rem" },
            textShadow: "0 0 10px rgba(255,255,255,0.15)",
          }}
        >
          Passionate about technology,commited to exellance-your growth is our mission.
        </Typography>

        

<Box 
sx={{
  display:"flex",
  gap:{xs:2,sm:4,md:6},
  justifyContent:"center",
  flexWrap:"wrap",
  mt:2
}}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/contactpage")}
          sx={{
             background: "linear-gradient(135deg, #ABA8F9 0%,  #38BDF8 100%)",
            textTransform: "none",
            px: 5,
            py: 1.5,
            whiteSpace:"nowrap",
            fontSize: "1.1rem",
            boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            borderRadius:"8px",
            "&:hover": {
              background: "linear-gradient(135deg, #6a24a8 0%, #ab74f4 100%)",
              transform: "translateY(-2px)",
              boxShadow: "0 0 25px rgba(255,255,255,0.4)",
            },
          }}
        >
          Get In Touch
         
        </Button>
         <Button
            variant="outlined"
            size="large"
            onClick={()=>navigate("/serviceone")}
            sx={{
             px: 4,
           py: 1.5,
           whiteSpace:"nowrap",
            fontSize: "1rem",
             textTransform: "none",
            borderRadius: "10px",
             position: "relative",
               overflow: "hidden",
                color: "#3DC1F4",
               border: "2px solid #3DC1F4",
           background: "transparent",
             "&:before": {
      
      position: "absolute",
      inset: 0,
      padding: "2px",
      borderRadius: "inherit",
      background: "linear-gradient(135deg, #893AEA, #b073ff)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      pointerEvents: "none",
             },
              "&:hover": {
                transform: "translateY(-3px)",
              },
            }}
          >
          Our Services
        </Button>
        </Box>
      </Container>
    </Box>
 <Box sx={{ bgcolor: "white", color: "white", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
         <Typography
              variant="h4"
              sx={{
                color: "#4169E1",
                fontWeight: "bold",
                mb: 4,
                textAlign:"center",
                mt:-3
              }}
            >
              Our Mission
  </Typography>
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* ---------- Left Side (Text) ---------- */}
          <Grid size={{ xs: 12, md: 6 }}>
           

            <Typography
              sx={{
                mb: 4,
                lineHeight: 1.5,
                color: "black",
              }}
            >
              Our mission is to empower businesses through innovative technology
              solutions that drive growth, efficiency, and competitive advantage.
              We believe in building long-term partnerships with our clients,
              understanding their unique challenges, and delivering solutions
              that exceed expectations.
            </Typography>

            <Stack spacing={3}>
              {features.map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "flex-start" }}>
                  <TaskAltRoundedIcon
                    sx={{
                      color: "#4169E1",
                      fontSize: 22,
                      mt: "3px",
                      mr: 1.5,
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 0.5, color: "black" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "black", lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
  {/* ---------- Right Side (Image) ---------- */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://cosmosdigital.in/static/media/mission.529589e6b5fece9137da.webp"
              alt="Our Mission"
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 3,
                boxShadow: "0 0 30px rgba(178, 102, 255, 0.3)",
                
                mt:-10
              }}
            />
          </Grid>
        </Grid>
      </Container>
 </Box>
 <Box sx={{ bgcolor: "#F5F5F5", color: "white", py: { xs: 6, md: 2} }}>
      <Container maxWidth="lg">
         <Typography
              variant="h4"
              sx={{
                color: "#4169E1",
                fontWeight: "bold",
                mb: 4,
                textAlign:"center",
                fontSize:"34px"
              }}
            >
              Our Values
  </Typography>

 <Grid container spacing={4} justifyContent="center">
           {vals.map((item, index) => (
             <Grid item xs={12} sm={6} md={3}  key={index}>
               <Box
                 sx={{
                   backgroundColor: "white",
                   borderRadius: "16px",
                   height:"230px",
                   width:"250px",
                   mx:"auto",
                   display:"flex",
                   flexDirection:"column",
                 alignItems:"flex-start",
                  justifyContent:"flex-start",
                  p:2.5,
                   transition: " all 0.3s ease",
                   cursor: "pointer",
                   border: "1px solid #ABA8F9",
                   "&:hover": {
                     transform: "translateY(-8px)",
                     boxShadow: "0 0 20px rgba(168,85,247,0.4)",
                      border: "1px solid  #a259ff",
                   },
                 }}
               >
                
                   <Box
                     sx={{
                       color: "#4169E1",
                       mb: 4,
                       width:50,
                       height:50,
                       display:"flex",
                       alignItems:"center",
                       justifyContent:"center",
                       borderRadius:"10%",
                       backgroundColor:"#ABA8F94D",
                       fontSize:"30px"
                      
                     }}
                   >
                     {item.icon}
                   </Box>
                   <Typography
                     variant="title"
                     sx={{
                       color: "black",
                       fontWeight: "700",
                       
                     }}
                   >
                     {item.title}
                   </Typography>
                    <Typography
                     variant="subtitle"
                     sx={{
                       color: "black",
                       fontWeight: "300",
                       mt:1.2,
                     }}
                   >
                     {item.description}
                   </Typography>
                 
               </Box>
             </Grid>
 
           ))}
         </Grid>
  </Container>
  </Box>
  
  <Aboutdevelopment />
  <Aboutexpert/>
  
  <Footer/>
 </>
  );
};

export default About;