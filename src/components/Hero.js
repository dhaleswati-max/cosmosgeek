
import { Box, Container, Typography, Button,Grid } from "@mui/material";
import { useEffect,useState } from "react";

import { useNavigate } from "react-router-dom";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BoltIcon from '@mui/icons-material/Bolt';





const Hero = () => {
 
const navigate = useNavigate();
const [today, setToday]=useState(0);
const [yesterday, setYesterday]= useState(0);

 useEffect(() => {
    const API_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
    
    fetch(`${API_URL}/api/visit/track`, {
      method: "POST",
    }).catch(err => console.log("Tracking error:", err));

    fetch(`${API_URL}/api/visit/stats`)
      .then(res => res.json())
      .then(data => {
        setToday(data.today);
        setYesterday(data.yesterday);
      })
      .catch(err => console.log("Stats fetch error:", err));
  }, []);

  const performance =
   yesterday > 0
    ? ((today - yesterday) / yesterday) * 100
    : 100;

    const formatUsers = (count) => {
  if (count < 1000) return count;
  return (count / 1000).toFixed(1) + "k";
};
 
  return (
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
 src="https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772009827/imagenew_gcpefb.webp"
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
          color: "white",
          px: 3,
         height:"100%" 
         
          
        }}
      >
       <Grid container spacing={1}>
               <Grid size={{xs:12,md:6}}> 
        <Typography
  variant="h2"
  sx={{
    fontWeight: 800,
    mt:10,
    mb: 2,
    fontSize: { xs: "2.5rem", md: "4rem" },
    textShadow: "0 0 20px rgba(255,255,255,0.2)",
   color :"#FFFFFF",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    textAlign:"left",
    
    

  }}
>
  Transform Your 
</Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 3,
            opacity: 0.9,
            fontSize: { xs: "2.5rem", md: "4rem" },
            textShadow: "0 0 10px rgba(255,255,255,0.15)",
            color:"#FFFFFF",
              alignItems:"left",
              textAlign:"left",
              lineHeight:0.7
          }}
        >
          Buisness With
        </Typography>
          <Typography
          variant="h5"
          sx={{
            mb: 3,
            opacity: 0.9,
            fontSize: { xs: "2.5rem", md: "4rem" },
            textShadow: "0 0 10px rgba(255,255,255,0.15)",
            background: "linear-gradient(135deg, #ABA8F9 0%,#38BDF8 100%)",
              WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
              alignItems:"left",
              textAlign:"left",
              lineHeight:0.7
          }}
        >
          Future Tech
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 3,
            opacity: 0.9,
            fontSize: { xs: "14px", md: "16px" },
            maxWidth:"700px",
            color:"#FFFFFF",
            lineHeight:"1.4",
              alignItems:"left",
              textAlign:"left",fontWeight:400
            
          }}
        >
          We build custom software solution that drive business growth and innovation, From web application to mobile
          apps, our expert team deliver result. 

        </Typography>

<Box 
sx={{
  display:"flex",
  gap:{xs:2,sm:4,md:6},
  justifyContent:"flex-start",
  flexWrap:"wrap",
  mt:2
}}>
        <Button
  variant="contained"
  onClick={() => navigate("/contactpage")}
  sx={{
    width: { xs: "180px", md: "220px" },
    height: { xs: "52px", md: "64px" },

    borderRadius: "10px",
    gap: "10px",

    px: { xs: 2, md: "20px" },
    py: { xs: 1.5, md: "20px" },

    background: "linear-gradient(135deg, #ABA8F9 0%, #38BDF8 100%)",
    textTransform: "none",
    fontSize: { xs: "0.85rem", md: "0.95rem" },
    whiteSpace: "nowrap",
    boxShadow: "0 0 20px rgba(255,255,255,0.3)",

    "&:hover": {
      background: "linear-gradient(135deg, #ABA8F9 0%, #38BDF8 100%)",
      transform: "translateY(-2px)",
      boxShadow: "0 0 25px rgba(255,255,255,0.4)",
    },
  }}
>
  Join Us
</Button>

         <Button
            variant="outlined"
            
            onClick={()=>navigate("/portfoliopage")}
          sx={{
    width: { xs: "180px", md: "220px" },   // smaller on mobile
    height: { xs: "52px", md: "64px" },    // smaller on mobile
    borderRadius: "10px",
    px: { xs: 2, md: 2.5 },
    py: { xs: 1.5, md: 2 },
    gap: "10px",

    textTransform: "none",
    whiteSpace: "nowrap",
    position: "relative",
    overflow: "hidden",

    color: "#3DC1F4",
    border: "2px solid #3DC1F4",
    background: "transparent",

    "&:before": {
      content: '""',
      position: "absolute",
      inset: 0,
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
          view our work
        </Button>
        </Box>
        </Grid>

         <Grid size={{xs:12,md:6}} 
                          sx={{textAlign:"center" , mt: { xs: 6, sm: 4, md: 0 }}}
                          > 
                        
                          <Box sx={{
                            position:"relative",
                            display:"inline-block",
                             zIndex: { xs: 1, md: "auto" }
                          }} >
      <Box

        component="img"
          src="https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772009826/heroimagee_o3blw2.webp" // default fallback
 
  alt="Hero Illustration"
  loading="eager"
  fetchpriority="high"
        sx={{
          mt:"95px",
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          borderRadius:"12px",
          background:"linear-gradient(135deg, #7a41b7,#ABA8F9)",
          border:"8px solid  #7a41b7"
        }}
      />

 {/* PERFORMANCE CARD (TOP RIGHT) */}
    <Box
      sx={{
        position: "absolute",
        top: 55,
        right: -10,
        background: "#ffffff",
        px: 2,
        py: 1,
        borderRadius: "10px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        fontSize: "0.85rem",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box sx={{
        height:36,width:36,
        borderRadius:"6px",
        display:"flex",
        background:"#ebf1f4",
        alignItems:"center",
        justifyContent:"center"
      }}>
       <BoltIcon 
    sx={{

        color:"#38BDF8",
        fontSize :"1.4rem"
      }}/>
      </Box>
      <Box sx={{ display: "flex", 
      flexDirection: "column",
         lineHeight: 1 }}>
      <Typography variant="caption" color="black" >
        Performance
      </Typography>
      
      <Typography fontWeight="bold" color="black">
        +{performance.toFixed(0)}%
      </Typography></Box>
    </Box>


    {/* ACTIVE USERS CARD (BOTTOM LEFT) */}
    <Box
      sx={{
        position: "absolute",
    bottom: { xs: 10, sm: -35, md: -35 },
    left: { xs: 10, sm: -35, md: -35 },
    background: "#ffffff",
    px: { xs: 1.3, sm: 1.5, md: 1 },
    py: { xs: 1, sm: 1.5, md: 1.5 },
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    fontSize: "0.85rem",
    display: "flex",
    alignItems: "center",
   gap: { xs: 1, sm: 1.5, md: 1.5 },

      }}
    >
       <Box sx={{
         height: { xs: 28, sm: 32, md: 32 },
      width: { xs: 28, sm: 32, md: 32 },
        borderRadius:"6px",
        display:"flex",
        background:"#ebf1f4",
        alignItems:"center",
        justifyContent:"center",
        flexShrink: 0,
      }}>

      <PeopleAltIcon sx={{

        color:"#38BDF8",
         fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.4rem" },
      }}/>
      </Box>
 <Box sx={{ display: "flex",
   flexDirection: "column",
    lineHeight: 1 }}>
      <Typography variant="caption"
       color="black"
        sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.85rem" } }}>
        Active Users
      </Typography>
     <Typography fontWeight="bold" 
        sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" } }} color="black">
  {formatUsers(today)}
</Typography>
</Box>
    </Box>





      
    </Box>
    </Grid>
    </Grid>

      </Container>

    </Box>
  );
};

export default Hero;