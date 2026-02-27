import React from "react";
import {
  Box,
  
  Grid,
  Typography,
  Link,
  TextField,
  Button,
 } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { InputAdornment } from "@mui/material";


const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#191D41",
        color: "white",
        display: "flex",
    justifyContent: "center",
    width: "100%",
      }}
    >
      <Box
  sx={{
    width: "100%",
    maxWidth: "1440px",
    minHeight: "500px",
    px: { xs: 3, md: "100px" },   // 👈 Figma padding
    pt: "60px",
    pb: "40px",
  }}
>
        <Grid container 
        
  columnSpacing="44px"   // 👈 horizontal gap between columns
  sx={{
    width: "100%",
    maxWidth: "1240px",   // 👈 exact figma content width
    minHeight: "368px",   // 👈 figma height
    margin: "0 auto",
  }}
        >
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ lineHeight: 1, mb: 2 ,  display: "flex",
      flexDirection: "column",
      gap: "20px", }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#893AEA",
                  fontWeight: 700,
                 
                  lineHeight: 1,
                  ml:2,
                }}
              >
                Cosmos
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  color: "#FFFFFF",
                  mt: "-15px",
                  lineHeight: 1,
                }}
              >
                Digital Service
              </Typography>
           

            <Typography
              variant="body2"
              sx={{ opacity: 0.8, mb: 2, maxWidth: 280,alignItems:"left" }}
            >
              Cosmos Digital is a Web Design Company that provides one-stop
              solutions for all your web branding needs. We make your business
              noticeable on online platforms.
            </Typography>

            <Box
            sx={{
    display: "flex",
    alignItems: "center",
  }}>
              <Box
  sx={{
    width: 50,
    height: 50,
    borderRadius: "10px",
    bgcolor: "#292A55",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
    mr: 1,
    gap:"10px",

    "&:hover": {
      bgcolor: "#4169E1", // your blue
      color: "white",
    },
  }}
>
  <FacebookIcon />
</Box>
<Box
  sx={{
    width: 50,
    height: 50,
    borderRadius: "10px",
    bgcolor: "#292A55",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
    mr: 1,
    gap:"10px",

    "&:hover": {
      bgcolor: "#4169E1", // your blue
      color: "white",
    },
  }}
>
  <LinkedInIcon />
</Box>
<Box
  sx={{
    width: 50,
    height: 50,
    borderRadius: "10px",
    bgcolor: "#292A55",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
    mr: 1,
    gap:"10px",

    "&:hover": {
      bgcolor: "#4169E1", // your blue
      color: "white",
    },
  }}
>
  <InstagramIcon />
</Box>

             
             </Box> 
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
             <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      
    }}
  >
            <Typography variant="h6" sx={{ fontWeight: 700,mb:2 }}>
              Quick Links
            </Typography>
            {["Home", "About Us", "Services", "Portfolio", "Tech Stack", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    display: "block",
                    color: "rgba(255,255,255,0.8)",
                    mb: 1,
                    "&:hover": { color: "#9d4edd" },
                  }}
                >
                  {item}
                </Link>
              )
            )}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}
          sx={{  ml: { md: "auto" },
    textAlign: "left",}}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Services
            </Typography>
            {[
              "Web Development",
              "Digital Marketing",
              "Mobile Development",
              "ERP Software",
              "Custom Software Development",
              "Billing Software",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{
                  display: "block",
                  color: "rgba(255,255,255,0.8)",
                  mb: 1,
                  "&:hover": { color: "#9d4edd" },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* Newsletter + Contact */}
          <Grid item xs={12} sm={6} md={4}
          sx={{  ml: { md: "auto" },
    textAlign: "left",}}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Subscribe to Our Newsletter
            </Typography>

           <Box sx={{ mb: 3 }}>
  <TextField
   
    placeholder="Enter your email "
    size="small"
    sx={{
      width:260,
      bgcolor: "white",
      borderRadius: "6px",
    }}
    InputProps={{
       sx: {
        pr: 0, // 🔥 remove right padding
      },
      endAdornment: (
        <InputAdornment position="end">
          <Button
            sx={{
              background:
                "linear-gradient(90deg, #3CC0F2 0%, #ABA8F9 100%)",
              color: "white",
              textTransform: "none",
              borderRadius: "6px",
              px: 1,
              py: 0,
              fontSize: "14px",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #7b2cbf 0%, #3a0070 100%)",
              },
            }}
          >
            Subscribe
          </Button>
        </InputAdornment>
      ),
    }}
  />
</Box>


            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              ask@cosmosdigital.in  
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              support@cosmosdigital.in
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              + (555) 123-4567
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              + (555) 987-6543
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              123 Innovation Drive, Tech City, TC 12345
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
           
            pt: 2,
            borderTop: "1px solid #893AEAB2",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © 2025 Cosmos Digital. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="#" sx={{ color: "white", opacity: 0.7, "&:hover": { color: "#9d4edd" } }}>
              Privacy Policy
            </Link>
            <Link href="#" sx={{ color: "white", opacity: 0.7, "&:hover": { color: "#9d4edd" } }}>
              Terms of Service
            </Link>
            <Link href="#" sx={{ color: "white", opacity: 0.7, "&:hover": { color: "#9d4edd" } }}>
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;