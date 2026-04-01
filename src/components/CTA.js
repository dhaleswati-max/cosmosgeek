import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
    import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FactoryIcon from "@mui/icons-material/Factory";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";


const CTA = () => {
 
  const navigate =useNavigate();
  const industries = [
    { icon: <ShoppingCartIcon fontSize="large" />,
       title: "Retail" 
      },

    { icon: <FactoryIcon fontSize="large" />, 
      title: "Manufacturing"
     },
    { icon: <LocalHospitalIcon fontSize="large" />,
       title: "Healthcare"
       },
    { icon: <SchoolIcon fontSize="large" />,
       title: "Education"
       },
    { icon: <AccountBalanceIcon fontSize="large" />, title: "Finance"
      
     },

    { icon: <FlashOnIcon fontSize="large" />, title: "Technology" },
  ];

  return (

    <Box
      sx={{
        
        color: "white",
        py: 10,
        textAlign: "center",
       
      }}
    >
      <Container  disableGutters
  sx={{
    maxWidth: { xs: "100%", md: "1439px" },  // 1439px desktop
    height: { md: "270px" },                // fixed height desktop
    px: { xs: 2, md: "100px" },             // 100px left & right desktop
    mx: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: { xs: 4, md: "10px" },    
    mt:"-20px"         // 50px gap desktop
  }}>
        {/* Section Heading */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#4169E1", // purple
        
            fontSize:"34px"
          }}
        >
          Industries We Serve
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#000000",
           mt:"-10px",
            fontSize:"24px",
            mb:"20px"
          }}
        >
          Our solutions are tailored for diverse industries with specific technological needs.
        </Typography>

        {/* Industries Grid */}
        <Grid container spacing={4} justifyContent="center">
          {industries.map((item, index) => (
            <Grid size={{ xs: 12, sm: 4, md: 2 }}  key={index}>
              <Box
                sx={{
                 
                  borderRadius: "16px",
                  height:"150px",
                  width:"150px",
                  mx:"auto",
                  display:"flex",
                  flexDirection:"column",
                alignItems:"center",
                 justifyContent:"center",
                 
                  transition: " all 0.3s ease",
                  cursor: "pointer",
                  border: "1px solid #4169E1",
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
                      mb: 2,
                      width:70,
                      height:70,
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      
                      
                     
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </Typography>
                
              </Box>
            </Grid>

          ))}
        </Grid>
      </Container>
    
  
      <Container
        maxWidth="md"
        sx={{
          backgroundImage: `url("https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772262877/image_eloif5.webp")`, // dark blue card
          borderRadius: "20px",
          py: { xs: 6, md: 8 },
          px: { xs: 4, md: 6 },
          color: "white",
          textAlign: "center",
          mx: "auto",
          mt:8,
          boxShadow: "0 0 30px rgba(162, 89, 255, 0.2)",
        }}
      >
        {/* Main heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color:"#FFFFFF",
            mb: 2,
            fontSize: { xs: "1.6rem", md: "2rem" },
          }}
        >
          Ready to grow your business with technology?
        </Typography>

        {/* Subheading */}
        <Typography
          variant="subtitle1"
          sx={{
            color: "#d1d1d1",
            mb: 4,
            fontSize: { xs: "0.95rem", md: "1rem" },
          }}
        >
          Let’s discuss how we can transform your business with our cutting-edge solutions.
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          onClick={() => navigate("/contactpage")}
          endIcon={<ArrowForwardIcon sx={{fontSize:"1.3rem"}}/>}
          sx={{
            background: "linear-gradient(90deg, #38BDF8, #ABA8F9)",
            color: "#fff",
            textTransform: "none",
            fontWeight: "600",
            px: 4,
            py: 1.2,
            borderRadius: "30px",
            fontSize: "1rem",
            boxShadow:"0 0 20px grey",
            "&:hover": {
              background: "linear-gradient(90deg, #6b5bff, #a259ff)",
              boxShadow:"0 0 20px grey",
              transform:"translateY(-3px)"
            },
          }}
        >
          Let`s Talk
        </Button>
      </Container>
    </Box>
  );
};

export default CTA;
