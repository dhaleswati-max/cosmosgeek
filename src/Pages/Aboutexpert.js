import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

import asmita from '../Assets/Images/asmita.webp';
import samiksha from '../Assets/Images/samiksha.webp';
import anshu from '../Assets/Images/anshu.webp';
import anushka from '../Assets/Images/anushka.webp';
import swati from '../Assets/Images/swati.webp';
import arjun from '../Assets/Images/arjun.webp';
import rishi from '../Assets/Images/rishi.webp';
import sahil from '../Assets/Images/sahil.webp';
import anagha from '../Assets/Images/anagha.webp';


const team = [
  {
    name: "Anushka Parate",
    role: "HR",
    image: anushka,
   
  },
  {
    name: "Anshu Pise",
    role: "Software Developer",
    image: anshu,
  },
  {
    name: "Asmita Kukreja",
    role: "Frontend Developer",
    image: asmita,
  },
  {
    name: "Swati Dhale",
    role: "Software Tester",
    image: swati,
   
  },
  {
    name: "Arjun Gupta",
    role: "Software Developer",
    image: arjun,
    
  },
  {
    name: "Rishi Joshi",
    role: "Android Developer",
    image: rishi,
   
  },
  
];

const Aboutexpert = () => (
  <div style={{ background: "#F5F5F5", padding: "40px 0" }}>
    <Typography align="center" variant="h5"
     style={{ color: "#4169E1", marginBottom: 8 ,fontSize:"34px"}}>
      Our Expert Team
    </Typography>
    <Typography align="center" variant="subtitle1" style={{ color: "#000000", 
      marginBottom: 32,fontSize:"24px" }}>

      Meet the talented professionals behind our successful projects.
    </Typography>
    {/*expert card*/}
    <Grid container spacing={4} justifyContent="center" sx={{ px: 2 }}>
      {team.map((member, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: "flex", justifyContent: "center" }}>
          <Card 
          sx={{ bgcolor: "white",
           color: "black",
           height: 400,
           width: 300,
           border:"1px solid #eee",
           borderRadius:"20px",
           transition: "transform 0.3s ease",
           "&:hover": { transform: "translateY(-5px)" },
           display: "flex",
           flexDirection: "column"
           }}>
            <CardMedia
              component="img"
              image={member.image}
              alt={member.name}
              loading="lazy"
              decoding="async"
              sx={{ width:"100%", height: 270,
                 objectFit: "contain",
                 bgcolor: "#f9f9f9"
              }}
            />
            <CardContent sx={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{member.name}</Typography>
              <Typography variant="subtitle2" sx={{ color: "#4169E1" }}>
                {member.role}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Aboutexpert;

