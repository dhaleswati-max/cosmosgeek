import React from 'react'

import Footer from './Footer';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack
} from "@mui/material";

import react from '../Assets/Images/react.png';
import angular from '../Assets/Images/angular.png';
import vue from '../Assets/Images/vue.png';
import flutter from '../Assets/Images/flutter.png';
import bootstrap from '../Assets/Images/bootstrap.png';
import csharp from '../Assets/Images/react.png';
import java from '../Assets/Images/angular.png';
import php from '../Assets/Images/php.png';
import  nodejs from '../Assets/Images/nodejs.png';
import asp from '../Assets/Images/asp.png';
import python from '../Assets/Images/python.png';
import mysql from '../Assets/Images/mysql.png';
import mongodb from '../Assets/Images/mongodb.png';
import oracle from '../Assets/Images/oracle.png';
import postgresql from '../Assets/Images/postgresql.webp'
import sqlite from '../Assets/Images/sqlite.png';
import mariadb from '../Assets/Images/mariadb.png';
import github from '../Assets/Images//github.png';
import gitlab from '../Assets/Images/gitlab.png';
import docker from '../Assets/Images/docker.png';
import aws from '../Assets/Images/aws.png';
import bitbucket from  '../Assets/Images/bitbucket.png';


function Techstack() {
  
const tech = [
    { icon: <img src={react}alt="react"  width={50} height={50} loading="lazy" decoding="async"/>,
       title: "React" 
      },

    { icon: <img src={angular}alt="angular"  width={50} height={50} loading="lazy" decoding="async" />, 
      title: "Angular"
     },
    { icon: <img src={vue}alt="react" width={50} height={50} loading="lazy" decoding="async" />,
       title: "Vue"
       },
    { icon: <img src={bootstrap}alt="react" width={50} height={50} loading="lazy" decoding="async" />,
       title: "Bootstrap"
       },

    { icon: <img src={flutter}alt="react"  width={50} height={50} loading="lazy" decoding="async" />, 
        title: "Flutter" },
    { icon: <img src={react}alt="react" width={50} height={50} loading="lazy" decoding="async"/>,
         title: "React Native" },
  ];

  const techbackend = [
    { icon: <img src={java}alt="react" width={50} height={50} loading="lazy" decoding="async" />,
       title: "Java" 
      },

    { icon: <img src={python}alt="angular"  width={50} height={50} loading="lazy" decoding="async" />, 
      title: "Python"
     },
    { icon: <img src={nodejs}alt="react" width={50} height={50} loading="lazy" decoding="async" />,
       title: "Nodejs"
       },
    { icon: <img src={php}alt="react"  width={50} height={50} loading="lazy" decoding="async" />,
       title: "PHP"
       },

    { icon: <img src={asp}alt="react"  width={50} height={50} loading="lazy" decoding="async"/>, 
        title: "ASP.net" },

    { icon: <img src={csharp}alt="react"  width={50} height={50} loading="lazy" decoding="async"/>,
         title: "C#" },
  ];
  const database = [
    { icon: <img src={mysql}alt="react"  width={50} height={50} loading="lazy" decoding="async" />,
       title: "MySql" 
      },

    { icon: <img src={postgresql}
      alt="angular" width={50} height={50} loading="lazy" decoding="async" />, 
      title: "PostgreSql"
     },
    { icon: <img src={oracle}alt="react"  width={50} height={50} loading="lazy" decoding="async"/>,
       title: "Oracle"
       },
    { icon: <img src={mongodb}alt="react" width={50} height={50} loading="lazy" decoding="async" />,
       title: "MongoDB"
       },

    { icon: <img src={sqlite}alt="react" width={50} height={50} />, 
        title: "SqLite" },

    { icon: <img src={mariadb}alt="react"  width={50} height={50}/>,
         title: "MariaDB" },
  ];

   const mobiletech= [
    { icon: <img src="https://cosmosdigital.in/static/media/ai.2743622226576bb432d8.webp"
 
    alt="react"  width={50} height={50}/>,
       title: "AI" 
      },

    { icon: <img src={flutter}alt="angular" width={50} height={50} />, 
      title: "Flutter"
     },
    { icon: <img src="https://cosmosdigital.in/static/media/cloud.f4b8b83eb7edd562d840.webp"
      alt="react"  width={50} height={50}/>,
       title: "Cloud Computing"
       },
    { icon: <img src={react}alt="react"  
    width={50} height={50} />,
       title: "React Native"
       },

    { icon: <img src="https://cosmosdigital.in/static/media/NativeScript.df5ab84659a2474f4b13.webp"alt="react"  
      width={50} height={50}/>, 
        title: "Native Script" },

    { icon: <img src="https://cosmosdigital.in/static/media/swift.5fd4ac4a679c771b049c.webp"alt="react"  
      width={50} height={50} />,
         title: "Swift" },
  ];
   const devops = [
    { icon: <img src={gitlab}alt="react" width={50} height={50}/>,
       title: "GitLab" 
      },

    { icon: <img src={docker}alt="angular" width={50} height={50} />, 
      title: "Docker"
     },
    { icon: <img src={aws}alt="react"  width={50} height={50} />,
       title: "AWS"
       },
    { icon: <img src={bitbucket}alt="react"  width={50} height={50} />,
       title: "BitBucket"
       },

    { icon: <img src={github}alt="react"  width={50} height={50} />, 
        title: "GitHub" },

    { icon: <img src="https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772093623/kubernet_ywwxwl.webp"
      alt="react" 
       width={50} height={50} />,
         title: "KuberNet" },
  ];

   const features = [
    {
      title: "Technology Selection",
      description:
        "We carefully select technologies based on project requirements, performance needs, and long-term maintenance considerations",
    },
    {
      title: "Scalable Architecture",
      description:
        "We design systems that can scale with your business growth, using microservices architecture when appropriate.",
    },
    {
      title: "Security First",
      description:
        "Security is integrated throughout our development process, not added as an afterthought.",
    },
    {
      title: "DevOps Integration",
      description:
        "We implement CI/CD pipelines for reliable, frequent deployments and quality assurance.",
    },
  ];


 return (
    <>
 <Box
      id="home"
        sx={{
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    display:"flex",
    alignItems:"center"

  }}
>
  {/* LCP Image */}
  <Box
    component="img"
    src="https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772009827/imagenew_gcpefb.webp"
    alt=""
    loading="eager"
    fetchPriority="high"
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
                  minHeight:"100vh"
                }}
              >
                <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2.5rem", md: "4rem" },
            textShadow: "0 0 20px rgba(255,255,255,0.2)",
            backgroundClip: "text",
            color: "#4169E1",
          }}
        >
          Our Tech Stack
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
                    We leverage cutting-edge technologies to build robust, scalable, and innovative solutions for our clients.
                </Typography>
        
              </Container>
              
            </Box>

    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        py: 10,
        textAlign: "center",
        
        pb:5,
      
        
      }}
    >
      <Container>
        {/* Section Heading */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "black", // purple
            mb: 1,
            fontSize:"34px"
          }}
        >
          Frontend Technologies
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "black",
            mb: 6,
            fontSize:"24px"
          }}
        >
          Modern frameworks and libraries for building responsive and interactive user interfaces.
        </Typography>

        {/* Industries Grid */}
        <Grid container spacing={4} justifyContent="center">
          {tech.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }}  key={index}>
              <Box
                sx={{
                  backgroundColor: "#ABA8F9",
                  borderRadius: "16px",
                  height:"130px",
                 width: { xs: "150px", sm: "150px" },
                  mx:"auto",
                  display:"flex",
                  flexDirection:"column",
                alignItems:"center",
                 justifyContent:"center",
                 
                  transition: " all 0.3s ease",
                  cursor: "pointer",
                  border: "1px solid none",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 0 20px rgba(168,85,247,0.4)",
                     border: "1px solid  #a259ff",
                  },
                }}
              >
               
                  <Box
                    sx={{
                      color: "white",
                      mb: 1,
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
                      color: "#fff",
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

      {/*backend*/}
    <Container>
        {/* Section Heading */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "black", // purple
            mb: 1,
            mt:7,
            fontSize:"34px"
          }}
        >
          Backend Technologies
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "black",
            mb: 6,
            fontSize:"24px"
          }}
        >
          Powerful server-side technologies for building robust APIs and services. 
        </Typography>

        {/* Industries Grid */}
        <Grid container spacing={4} justifyContent="center">
          {techbackend.map((item, index) => (
            <Grid size={{ xs: 12, sm: 4, md: 2 }}  key={index}>
              <Box
                sx={{
                  backgroundColor: "#ABA8F9",
                  borderRadius: "16px",
                  height:"130px",
                  width:"150px",
                  mx:"auto",
                  display:"flex",
                  flexDirection:"column",
                alignItems:"center",
                 justifyContent:"center",
                 
                  transition: " all 0.3s ease",
                  cursor: "pointer",
                  border: "1px solid none",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 0 20px rgba(168,85,247,0.4)",
                     border: "1px solid  #a259ff",
                  },
                }}
              >
               
                  <Box
                    sx={{
                      color: "#a855f7",
                      mb: 1,
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
                      color: "#fff",
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

       {/*database*/}
    <Container>
        {/* Section Heading */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "black", // purple
            mb: 1,
            mt:7,
            fontSize:"34px"
          }}
        >
          Database Technologies
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "black",
            mb: 6,
            fontSize:"24px"
          }}
        >
          Reliable database solutions for storing and retrieving data efficiently. 
        </Typography>

        {/* Industries Grid */}
        <Grid container spacing={4} justifyContent="center">
          {database.map((item, index) => (
            <Grid size={{ xs: 12, sm: 4, md: 2 }}  key={index}>
              <Box
                sx={{
                  backgroundColor: "#ABA8F9",
                  borderRadius: "16px",
                  height:"130px",
                  width:"150px",
                  mx:"auto",
                  display:"flex",
                  flexDirection:"column",
                alignItems:"center",
                 justifyContent:"center",
                 
                  transition: " all 0.3s ease",
                  cursor: "pointer",
                  border: "1px solid none",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 0 20px rgba(168,85,247,0.4)",
                     border: "1px solid  #a259ff",
                  },
                }}
              >
               
                  <Box
                    sx={{
                      color: "#a855f7",
                      mb: 1,
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
                      color: "#fff",
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
      
       {/*database*/}
    <Container>
        {/* Section Heading */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "black", // purple
            mb: 1,
            mt:7,
            fontSize:"34px"
          }}
        >
          Mobile Technologies
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "black",
            mb: 6,
            fontSize:"24px"
          }}
        >
         Cross-platform and native technologies for building mobile applications.
        </Typography>

        {/* Industries Grid */}
        <Grid container spacing={4} justifyContent="center">
          {mobiletech.map((item, index) => (
            <Grid size={{ xs: 12, sm: 4, md: 2 }}  key={index}>
              <Box
                sx={{
                  backgroundColor: "#ABA8F9",
                  borderRadius: "16px",
                  height:"130px",
                  width:"150px",
                  mx:"auto",
                  display:"flex",
                  flexDirection:"column",
                alignItems:"center",
                 justifyContent:"center",
                 
                  transition: " all 0.3s ease",
                  cursor: "pointer",
                  border: "1px solid none",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 0 20px rgba(168,85,247,0.4)",
                     border: "1px solid  #a259ff",
                  },
                }}
              >
               
                  <Box
                    sx={{
                      color: "#a855f7",
                      mb: 1,
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
                      color: "#fff",
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
      {/*devops*/}

      {/*database*/}
    <Container>
        {/* Section Heading */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "black", // purple
            mb: 1,
            mt:7,
            fontSize:"34px"
          }}
        >
         DevOps & Cloud
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "black",
            mb: 6,
            fontSize:"24px"
          }}
        >
          Tools and platforms for continuous integration, delivery, and cloud infrastructure.
        </Typography>

        {/* Industries Grid */}
        <Grid container spacing={4} justifyContent="center">
          {devops.map((item, index) => (
            <Grid size={{ xs: 12, sm: 4, md: 2 }}  key={index}>
              <Box
                sx={{
                  backgroundColor: "#ABA8F9",
                  borderRadius: "16px",
                  height:"130px",
                  width:"150px",
                  mx:"auto",
                  display:"flex",
                  flexDirection:"column",
                alignItems:"center",
                 justifyContent:"center",
                 
                  transition: " all 0.3s ease",
                  cursor: "pointer",
                  border: "1px solid none",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 0 20px rgba(168,85,247,0.4)",
                     border: "1px solid  #a259ff",
                  },
                }}
              >
               
                  <Box
                    sx={{
                      color: "#a855f7",
                      mb: 1,
                      width:179,
                      height:127.7,
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
                      color: "#fff",
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

<Grid
  container
  sx={{
    width: { xs: "100%", md: "1241px" },
    height: { md: "526px" },
   mx:"auto",
   mt:"20px",
   mb:"20px",
     flexDirection: { xs: "column", md: "row" },   // 👈 stack on mobile
    px: { xs: 2, md: 0 },      
  }}
>
  {/* LEFT SIDE — TEXT */}
  <Box
    sx={{
       width: { xs: "100%", md: "760px" },
      height: { md: "515px" },
      mr: { md: "16px" },   // gap between text & image
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign:"left",
      pt: { xs: 2, md: "25px" },
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: "bold",
        color: "black",
        mb: 2,
      }}
    >
      Our Technical Approach
    </Typography>

    <Typography
      sx={{
        color: "black",
        lineHeight: 1.6,
        mb: 4,
      }}
    >
      We believe in using the right technology for each specific problem.
      Our approach focuses on building scalable, maintainable, and secure
      solutions that provide long-term value for our clients.
    </Typography>

    <Stack spacing={2.5}>
      {features.map((item, index) => (
        <Box key={index} sx={{ display: "flex", gap: 2 }}>
          <Typography sx={{ fontWeight: "bold" }}>
            {index + 1}.
          </Typography>
          <Box>
            <Typography sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
            <Typography sx={{ lineHeight: 1.6 }}>
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  </Box>

  {/* RIGHT SIDE — IMAGE */}
  <Box
    sx={{
      width: { xs: "100%", md: "465px" },
        height: { xs: "auto", md: "526px" },
      display: "flex",
      alignItems: "center",
       pt: { xs: 4, md: "45px" },
    }}
  >
    <Box
      component="img"
      src="https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772009827/techstack_hrgfua.webp"
      alt="Techstack"
      sx={{
          width: { xs: "100%", md: "465px" },
        height: { xs: "auto", md: "500px" },
        objectFit: "cover",
      }}
    />
  </Box>
</Grid>
</Box>
   
      
    <Footer/>
    
    </>
  )
}

export default Techstack;
