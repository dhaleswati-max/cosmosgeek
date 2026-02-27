import React from 'react';

import { Box, Chip, Container,Link,  Typography,Card,CardContent,Grid,CardMedia } from "@mui/material";

import Footer from "../components/Footer";
/*import imagenew from '../Assets/Images/imagenew.webp';*/
/*import ArrowForwardIcon from "@mui/icons-material/ArrowForward";*/
import { useState } from "react";
/*import media from '../Assets/Images/media.webp';*/
/*import { useNavigate } from "react-router-dom";*/
import powerbi from '../Assets/Images/powerbi.webp';
import erpsoftware from '../Assets/Images/erpsoftware.webp';
import meru from '../Assets/Images/meru.webp';
import malware from '../Assets/Images/malware.webp';
import pyb from '../Assets/Images/pyb.webp';
import healthcare from '../Assets/Images/healthcare.webp';


function Portfoliopage() {
 
 /* const navigate = useNavigate();*/
  const [activeFilter] = useState("All Projects");
  const projects=
    [
      {
        category:"ERP Solutions",
        title:"Mirraki ERP Software",
        desc:"A complete e-commerce solution with inventory management",
        tags:["React","MySql","Cloud","+2 more"],
        image: erpsoftware,
       

      },
        {
        category:"CRM Developemnt",
        title:"Healthcare Patient Management System",
        desc:"Streamlining patient care and administrative processes",
        tags:["Angular","Express","PostgreSQL","+2 more"],
        image: healthcare,

      },
        {
        category:"Data Analytics",
        title:"Power BI Project",
        desc:"Developed interactive dashboards using Power BI to analyze business data",
        tags:["DAX","Data Preprocessing","+2 more"],
        image: powerbi,

      },
        {
        category:" Process Control Project",
        title:"Meru Process Control",
        desc:"developing and managing process control dashboards to monitor system performance ",
        tags:["ReactNative","Node js","MongoDB","+2 more"],
        image:meru,

      },
        {
        category:"Mobile Applications",
        title:"PYB Android Application",
        desc:"Developed and supported the PYB Android application to provide a user-friendly mobile interface",
        tags:["Vue js","Laravel","MySQL","+2 more"],
        image: pyb,

      },
        {
        category:"Cyber Security Project",
        title:"Malware Detection Software",
        desc:"Developed malware detection software to identify and prevent malicious files and activities in a system",
        tags:["React","Python","PostgreSQL","+2 more"],
        image: malware,

      },

    ]
  
  const filters=[
    { label: "All Projects"},
  { label: "ERP Solutions", path: "/portfolio/erp" },
  { label: "CRM System", path: "/portfolio/crm" },
  { label: "Web Applications", path: "/portfolio/web" },
  { label: "Fintech", path: "/portfolio/fintech" },
  { label: "Mobile Apps", path: "/portfolio/mobile" },
  { label: "Digital Marketing", path: "/portfolio/digital" },

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
    src="https://cosmosdigital.in/static/media/imagenew.add581917f048947874f.webp"
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
            color:"#4169E1",
            WebkitBackgroundClip: "text",
            
            backgroundClip: "text",
            
          }}
        >
          Our Portfolio
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
                    Explore our successful projects that have helped businesses achieve their
                     digital transformation goals.
                </Typography>
        
              </Container>
              
            </Box>

            {/*Portfolio section*/}
              <Box sx={{ bgcolor: "white", minHeight: "100vh", py: 5,   px: { xs: 2, md: 5 },}}>
      {/* Filter Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "nowrap",
          justifyContent: "center",
          mb: 4,
          overflowX:"auto",
          pb:1,
           px: { xs: 1, md: 0 },
           "&::-webkit-scrollbar": { display: "none" },
          
        }}
      >
       {filters.map((filter, index) => {
  const isActive = activeFilter === filter.label;

  return (
    <Box
    key={index}
        /* onClick={() => navigate(filter.path)}*/
      variant="text"
    color="inherit"          // 🔥 IMPORTANT
  disableElevation // removes shadow
  disableRipple
  
      sx={{
        backgroundColor: isActive ? "#4169E1" : "#F5F5F5",
        color: isActive ? "white" : "#000000",
        width: 130,
        minWidth: 130,
        maxWidth: 130,
       alignItems:"center",
       display: "flex",
       justifyContent: "center",
        px: 0,
        py: 0.8,
        borderRadius: "10px",
        fontSize: "12px",
        fontWeight: 600,
        textTransform: "none",
        whiteSpace: "nowrap",
        flexShrink: 0,

      }}
    >
      {filter.label}
    </Box>
  );
})}</Box>
      {/* Project Cards */}
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
        {projects.map((p, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                bgcolor: "none",
                border: "1px solid none",
                borderRadius: "12px",
                color: "white",
                  overflow: "hidden",
                  width: { xs: "100%", md: 350 },
                 height: { xs: "auto", md: 410 },
    
                  ml: { xs: 0, md: "55px" },
                  maxWidth: 350,
                  mx: { xs: "auto", md: 0 }, 
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
              }}
            >
              <CardMedia
                component="img"
                
                src= {p.image}
                alt="project"
                sx={{
                 height: { xs: 180, md: "50%" },
                  width:"100%"
}}
              />
              <CardContent>
                <Typography sx={{ color: "#4169E1", fontWeight: 600  }}>
                  {p.category}
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 700, 
                mt: 1,
                whiteSpace:"nowrap",
                overflow:"hidden",
                  textOverflow:"ellipsis",
                  color:"black",
                  WebkitLineClamp: { xs: 2, md: 1 },
                  

                 }}>
                  {p.title}
                </Typography>

                <Typography sx={{ color: "#000000", fontSize: "14px", mt: 1 }}>
                  {p.desc}
                </Typography>

                {/* Tags */}
                <Box sx={{ display: "flex", flexWrap:"wrap",gap:1,mt:2}}>
                  {
                    p.tags.map((t,index)=>(<Chip
                    key={index}
                    label={t}
                    size="small"
                    sx={{
                      bgcolor:"#bdbdbdff",
                      color:"white",borderRadius:"20px"
                    }}/>))
                  }
                </Box>
                  {/*<Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "#4169E1",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      mt:1,
                      "&:hover": { color: "#b5179e" },
                    }}
                  >
                    Veiw Details <ArrowForwardIcon fontSize="small" />
                  </Link>*/}
                    </CardContent>
                    </Card>
                    </Grid>
        ))}
        </Grid>
        </Box>
                              
          
            
            <Footer/>
    </>
  );
};

export default Portfoliopage;