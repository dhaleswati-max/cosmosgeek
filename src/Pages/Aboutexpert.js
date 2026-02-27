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


const TEAM ={
  anushka :'https://cosmosdigital.in/static/media/anushka.cdfa3f8f99a2a4c95b08.webp',
   anshu :'https://cosmosdigital.in/static/media/anshu.53b385e00b36d6c203df.webp',
 asmita:'https://cosmosdigital.in/static/media/asmita.dfbad2253a2862ed363d.webp',
 swati : 'https://cosmosdigital.in/static/media/swati.8a03de1ee6d717aae1ea.webp',
 arjun : 'https://cosmosdigital.in/static/media/arjun.22da1ba1f8e95dc2a0c4.webp',
 rishi: rishi
}
const team = [
    {
    name: "Anushka parate",
    role: "HR",
   
    image: TEAM.anushka
  },
  
  
  {
    name: "Anush Pise",
    role: "Software Developer",
    image: TEAM.anshu
  },
 {
    name: "Asmita Kukreja",
    role: "Frontend Developer",
    image: TEAM.asmita
  },
  {
    name: "Swati Dhale",
    role: "Software Tester",
    
    image: TEAM.swati
  },
  {
    name: "Arjun Gupta",
    role: "Software Developer",
    image: TEAM.arjun
  },

  {
    name: "Rishi Joshi",
    role: "Android Developer", 
    image: TEAM.rishi
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
    <Grid container spacing={2} justifyContent="center">
      {team.map((member, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card 
          sx={{ bgcolor: "white",
           color: "black",
           height:360,
           width:300 ,
           mx:"auto" ,
           border:"1px solid white",
           borderRadius:"20px"}}>
            <CardMedia
              component="img"
              image={member.image}
              alt={member.name}
              sx={{ width:"100%",height:270,
                 objectFit: "contain" ,
                display:"block"}}
            />
            <CardContent>
              <Typography variant="h6">{member.name}</Typography>
              <Typography variant="subtitle2" sx={{ color: "#4169E1" }}>
                {member.role}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }} component="div">
  <span dangerouslySetInnerHTML={{ __html: member.experience }} />
</Typography>

              {/* <Typography variant="body2" sx={{ mt: 1 }}>
                {member.experience}
              </Typography> */}

             

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>

  
);

export default Aboutexpert;

