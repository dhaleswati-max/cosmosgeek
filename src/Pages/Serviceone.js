import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"; 
import React from "react"; import Footer from "../components/Footer";
 import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; 
import image from '../Assets/Images/image.webp';
import imagenew from '../Assets/Images/imagenew.webp';
import serviceonimge from '../Assets/Images/serviceoneimg.webp';
import servicetwoimg from '../Assets/Images/servicetwoimg.webp';
import servicethreeimg from '../Assets/Images/servicethreeimg.webp';
import servicefiveimg from '../Assets/Images/servicefiveimg.webp';
import servicesiximg from '../Assets/Images/servicesiximg.webp';
import four from '../Assets/Images/four.webp';
    import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
    
    import { useNavigate } from "react-router-dom"; 
    
    const Serviceone =()=> 
      {


         const navigate=useNavigate();
       const itemfirst=
       [ {
         description:"Customs modules tailers to your buisness processes. "
         }, 
        { description:"Seamless integration with existings system. " }, 
        { description:"Real-time data analytics and reporting. " },
         { description:"Scalable architecture that grows with your business." },
          { description:"User-friendly interfaces for improved adaption" } ]

           const itemtwo=[ { description:"360° customer view for better insights " }, 
            { description:"Sales pipeline management and forecasting " },
             { description:"Marketing campaign integration and tracking " },
              { description:"Customer service and support management" }, 
              { description:"Analytics and reporting for data-driven decisions" } ] 

              const itemthree= [ { description:"Responsive design for all devices" },
                 { description:"Intuitive user interfaces for improved productivity" },
                  { description:"Robust security measures to protect sensitive data" }, 
                  { description:"API integration with third-party services" }, 
                  { description:"Scalable architecture for future growth" }, ] 
                  const itemfour=
                  [ { description:"Automated invoicing and payment processing" }, 
                    { description:"Financial reporting and analytics" }, 
                    { description:" Tax calculation and compliance" }, 
                    { description:"Multi-currency and multi-entity support" }, 
                    { description:"Integration with banking and payment gateways" }, 
                  ]
                   const itemfive=
                   [ { description:"Native iOS and Android development" },
                     { description:"Cross-platform solutions for wider reach" },
                      { description:"Offline functionality for uninterrupted use" },
                       { description:"Push notifications for user engagement" }, 
                       { description:"Seamless integration with backend systems" }, ]
                        const itemsix=
                        [ { description:"Search engine optimization (SEO)" }, 
                          { description:"Pay-per-click (PPC) advertising" },
                           { description:"Social media marketing and management" },
                            { description:"Content marketing strategy and execution" },
                             { description:"Analytics and performance tracking" }, 
                            ] 

                             return( 
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
                                     <Container maxWidth="lg"
                                   sx={{ position: "relative", zIndex: 2, textAlign: "center", 
                                    color: "white", px: 3, display:"flex",flexDirection:"column", 
                                    justifyContent:"center", alignItems:"center", height:"100vh" }} > 
                                    <Typography 
                                    variant="h2" sx={{ fontWeight: "bold", mb: 2,
                                       fontSize:
                                       { xs: "2.5rem", md: "4rem" }, 
                                       textShadow: "0 0 20px rgba(255,255,255,0.2)", 
                                       background: "linear-gradient(90deg, #4169E1, #38BDF8)",
   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    backgroundClip: "text", color: "transparent", }} >
     Our Services 
     </Typography> 
     <Typography variant="h5" 
     sx={{ mb: 3, opacity: 0.9, 
      fontSize: { xs: "1.2rem", md: "1.8rem" }, 
     textShadow: "0 0 10px rgba(255,255,255,0.15)", }} > 
     We offer comprehensive software development services to help businesses transform their digital 
     presence and operations. 
     </Typography>
      </Container>
       </Box> 

       <Box
        sx={{bgcolor:"#F5F5F5",
          color:"black",
         py:{xs:8,md:12} }} > 

       <Container maxWidth="lg" >
         <Grid container spacing={1}>
        <Grid size={{xs:12,md:6}}> 
          <Typography 
          sx=
          {{ mb:1, lineHeight:1.5, color:"Black", 
          fontWeight:"bold", fontsize:"34px"}}>
             ERP Solutions
              </Typography>
           <Typography
            sx={{ mb:3, lineHeight:1.5, color:"black", fontWeight:"bold", }}>
            Streamline your business operations with custom enterprise resource planning
             solutions that integrate all aspect of your business into a single unified ststem. 
             </Typography> 
             <Stack spacing={1}> {itemfirst.map((item,index)=>( 
              <Box key={index} sx={{display:"flex", alignItems:"flex-start",}}>
               < FiberManualRecordIcon 
               sx={{ color:"Black", fontSize:10, flexShrink:0, mt:"8px", mr:1.4, }}>
                </FiberManualRecordIcon> 
                <Typography sx={{ fontWeight: 300, color: "black", lineHeight: 1.4, m: 0}}>
                 {item.description}
                  </Typography> 
                  </Box> 
                ) )}
                  </Stack> 
                  </Grid> 
                  <Grid size={{xs:12,md:6}} 
                  sx={{textAlign:"center"}}> 
                  <Box component="img" 
                  src="https://cosmosdigital.in/static/media/servicetwoimg.91e31acde4c3c44e3a4e.webp"
                  alt="service"
                   sx={{ 
                    width:"100%",
                     maxWidth:450, 
                    borderRadius:"8px",
                       ml:{ xs:0, md:"80px" },
                       mx:{ xs:"auto", md:0 },
                     mt:"30px",
                     boxShadow:"0 0 30px #893AEA40 ", }} >
                      </Box>
                       </Grid>
                        </Grid>
                         </Container>
                          </Box>
                      {/*second container*/}

                       <Box sx={{bgcolor:"#FFFFFF",color:"black", py:{xs:8,md:12} }} >
                         <Container maxWidth="lg">
                           <Grid container spacing={1}> 
                            <Grid size={{xs:12,md:6}}>
                               <Box
                                component="img" 
                               src= "https://cosmosdigital.in/static/media/serviceoneimg.b0252c0a3a480127796c.webp"
                                alt="service"
                                 sx=
                                 {{ width:"100%", 
                                  maxWidth:450, 
                                 borderRadius:"8px", 
                                 ml:{ xs:0, md:"80px" },
                                 mx:{ xs:"auto", md:0 },
                                 
                                 boxShadow:"0 0 30px #893AEA40 ",
                                  }} >
                                    </Box>
                                     </Grid> 
                                     <Grid size={{xs:12,md:6}} >
                                       <Typography sx={{mb: 1, lineHeight: 1.5, color: "black",fontWeight:"bold" }}>
                                         CRM Developement
                                          </Typography> 
                                          <Typography
                                           sx={{mb: 3,
                                            lineHeight: 1.5, 
                                            color: "black",
                                             fontWeight:"bold"}} >
                                             Build stronger customer relationships with our tailored
                                              Customer Relationship Management systems that enhance engagement,
                                               streamline sales processes, and boost customer satisfaction. 
                                               </Typography>
                                                <Stack spacing={1}>
                                                   {itemtwo.map((item, index) => ( 
                                                    <Box key={index} 
                                                    sx={{ display: "flex", gap: "6px" }}>
                                                       <FiberManualRecordIcon sx={{ fontSize: 10, mt: "7px" }} /> 
                                                       <Typography sx={{ lineHeight: 1.5, color: "black" }}> 
                                                        {item.description}
                                                         </Typography>
                                                          </Box> ))} 
                                                        </Stack>
                                                         </Grid>
                                                         </Grid> 
                                                        </Container> 
                                                        </Box> 
                                      {/*third container*/}
                          <Box sx={{bgcolor:"#F5F5F5",color:"black",
                             px:{xs:"20px" ,md:"20px"}, py:"70px" }} >
                             <Container maxWidth="lg">
                               <Grid container spacing={1}>
                                   <Grid size={{xs:12,md:6}}>
                                        <Typography 
                                          sx={{ mb:1, lineHeight:1.5, color:"black",
                                      fontWeight:"bold" }}>
                                      Custom Web Applications 
                                              </Typography>
                                         <Typography
                                      sx={{ mb:3, lineHeight:1.5,
                               color:"black", fontWeight:"bold", }}
                  >Transform your business processes
                             with scalable, secure, 
                         and user-friendly web applications built to 
                      address your specific operational challenges and opportunities. 
                      </Typography> 
                      <Stack spacing={1}>
                         {itemthree.map((item,index)=>(
                         <Box key={index} sx={{display:"flex", alignItems:"flex-start",}}> 
                         < FiberManualRecordIcon
                          sx={{ color:"black", fontSize:10,
                           flexShrink:0, mt:"8px", mr:1.4, }}> 

                         </FiberManualRecordIcon>
                          <Typography sx={{ fontWeight: 300,
                             color: "black",
                              lineHeight: 1.4, m: 0}}>
                          {item.description}
                           </Typography> 
                           </Box> )
                           )}

                            </Stack>
                             </Grid> 
                            <Grid size={{xs:12,md:6}} sx={{textAlign:"center"}}>
                 <Box component="img"
                  src= "https://cosmosdigital.in/static/media/servicethreeimg.09eec1602c15400de9b2.webp" alt="service"
                              sx={{ width:"100%",
                               maxWidth:450, borderRadius:"8px",
                                ml:{ xs:0, md:"80px" },
                                mx:{ xs:"auto", md:0 },
                                mt:"10px", 
                                boxShadow:"0 0 30px #893AEA40 ", 
                                }} ></Box> 
                                </Grid>
                                 </Grid> 
                                 </Container>
                                 </Box> 
                                 {/*Fourth container*/} 
                                 <Box sx={{bgcolor:"#FFFFFF",color:"black", py:{xs:8,md:12} }} > 
                                  <Container maxWidth="lg" > <Grid container spacing={1}>
                                     {/*image*/} 
                                    <Grid size={{xs:12,md:6}}
                                    > <Box component="img" 
                                    src= "https://cosmosdigital.in/static/media/four.0fe5f246695575c781ec.webp" alt="service" 
                                    sx={{ width:"100%", maxWidth:450, 
                                    borderRadius:"8px", ml:{ xs:0, md:3 },
                              mx:{ xs:"auto", md:0 },
                                     mt:3,
                                      boxShadow:"0 0 30px #893AEA40 ", }} ></Box> </Grid> <Grid size={{xs:12,md:6}} > 
                                      <Typography sx={{mb: 1, lineHeight: 1.5, color: "black",fontWeight:"bold" }}> 
                                        Billing & Accounting Software </Typography> <Typography 
                                        sx={{mb: 3, lineHeight: 1.5, color: "black", fontWeight:"bold"}} >
                                           Automate your financial processes with our custom billing and accounting solutions designed to improve accuracy, 
                              reduce manual work, and provide better financial insights.
                               </Typography> 
                               <Stack spacing={1}>
                                 {itemfour.map((item, index) => 
                                ( <Box key={index} sx={{ display: "flex", gap: "6px" }}> 
                                  <FiberManualRecordIcon sx={{ fontSize: 10, mt: "7px" }} />
                                   <Typography 
                                   sx={{ lineHeight: 1.5, color: "black" }}> 
                                   {item.description}
                                    </Typography>
                                     </Box> ))}
                                     </Stack>
                                      </Grid>
                                      </Grid>
                                      </Container>
                                       </Box> 
                                    {/*fifth Container*/} 
                                    <Box sx={{bgcolor:"#F5F5F5",color:"black",
                                       px:{xs:"20px" ,md:"20px"}, py:"70px" }} >

                                    <Container maxWidth="lg">
                                     <Grid container spacing={1}> 
                                     <Grid size={{xs:12,md:6}}>
                                      <Typography sx={{ mb:1, lineHeight:1.5,
                                         color:"black", fontWeight:"bold" }}>
                                       Mobile Applications 
                                       </Typography> 
                                       <Typography 
                                       sx={{ mb:3, lineHeight:1.5, color:"black", fontWeight:"bold", }}>
                                       Engage your customers on-the-go with intuitive and 
                                       feature-rich mobile applications 
                                       that provide value and enhance your brand presence 
                                       in the mobile ecosystem. 
                                       </Typography>
                                        <Stack spacing={1}>
                                         {itemfive.map((item,index)=>( <Box key={index} 
                                         sx={{display:"flex", alignItems:"flex-start",}}>
                                           < FiberManualRecordIcon 
                                           sx={{ color:"black", fontSize:10, flexShrink:0, mt:"8px", mr:1.4, }}>
                                             </FiberManualRecordIcon> <Typography sx={{ fontWeight: 300, color: "black", lineHeight: 1.4, m: 0}}> 
                                          {item.description}
                                           </Typography>
                                           </Box> ) )} 
                                          </Stack> 
                                          </Grid> 
                                          <Grid size={{xs:12,md:6}} sx={{textAlign:"center"}}>
                                           <Box component="img" 
                                           src="https://cosmosdigital.in/static/media/servicefiveimg.6cab9f121c61e892145c.webp" alt="service" 
                                           sx={{ width:"100%",
                                             maxWidth:450,
                                              borderRadius:"8px"
                                              ,ml:{ xs:0, md:"80px" },
                                              mx:{ xs:"auto", md:0 },
                                             mt:"10px", 
                                            boxShadow:"0 0 30px #893AEA40 ", }} >
                                              </Box> </Grid>
                                               </Grid>
                                               </Container> 
                                            </Box>
                                             <Box
                                              sx={{bgcolor:"#FFFFFF",color:"black", py:{xs:8,md:12} }} > 
                                              <Container maxWidth="lg"> 
                                                <Grid container spacing={1}> 
                                                  <Grid size={{xs:12,md:6}}>
                                                 <Box component="img" src="https://cosmosdigital.in/static/media/servicesiximg.0aa9f99429f1811ad434.webp"alt="service"
                                                  sx=
                                                  {{ width:"100%",
                                                     maxWidth:450, 
                                                 borderRadius:"8px",
                                                  ml:{ xs:0, md:3 },
                                                  mx:{ xs:"auto", md:0 },
                                                  boxShadow:"0 0 30px #893AEA40 ", }} ></Box> 
                                                 </Grid> <Grid size={{xs:12,md:6}} > 
                                                  <Typography sx={{mb: 1, lineHeight: 1.5, color: "black" ,fontWeight:"bold"}}> Digital Marketing 
                                                    </Typography>
                                                     <Typography
                                                      sx={{mb: 3, lineHeight: 1.5, color: "black", fontWeight:"bold"}} >
                                                       Boost your online presence and reach your 
                                                       target audience with our comprehensive digital 
                                                       marketing services designed to increase visibility and 
                                  drive conversions.
                                          </Typography>
                                                         <Stack spacing={1}> {itemsix.map((item, index) => 
                                                        ( <Box key={index} sx=
                                                        {{ display: "flex", 
                                                        gap: "6px" }}>
                                                           <FiberManualRecordIcon sx={
                                                            { fontSize: 10,
                                                             mt: "7px" }} /> 
                                                           <Typography sx=
                                                           {{ lineHeight: 1.5, 
                                                           color: "black" }}>
                                                             {item.description}
                                                             </Typography>
                                                              </Box> ))} 
                                                              </Stack> 
                                                              </Grid> 
                                                              </Grid>
                                                               </Container> 
                                   </Box>
                                           <Container maxWidth="md"
                                            sx={{ backgroundImage: `url("https://cosmosdigital.in/static/media/image.cdacfdb9a37c035ccf22.webp")`, 
                                            borderRadius: "20px", 
               py: { xs: 6, md: 8 },
                px: { xs: 4, md: 6 },
                 color: "white", textAlign: "center",
                  mx: "auto", mt:1, mb:6,

              boxShadow: "0 0 30px rgba(162, 89, 255, 0.2)", }} >
                 {/* Main heading */} 
                   <Typography variant="h4" sx={{ fontWeight: "bold", color:"#FFFFFF", mb: 2,
                         fontSize: { xs: "1.6rem", md: "2rem" }, }} > 
                         Ready to grow your business with technology? 
                           </Typography> {/* Subheading */} 
                           <Typography variant="subtitle1" 
                       sx={{ color: "#d1d1d1", mb: 4, fontSize: { xs: "0.95rem", md: "1rem" }, }} >
                     Let’s discuss how we can transform your business with our cutting-edge solutions.
                  </Typography> 
                  {/* CTA Button */}
                    <Button variant="contained"
                     onClick={()=>navigate("/contactpage")} 
                       endIcon={<ArrowForwardIcon 
                        sx={{fontSize:"1.3rem"}}/>} 
                      sx={{ 
                        background: "linear-gradient(90deg, #38BDF8, #ABA8F9)", color: "#fff", textTransform: "none", 
                          fontWeight: "600", px: 4,
                           py: 1.2,
                           borderRadius: "30px",
                            fontSize: "1rem",
                             boxShadow:"0 0 20px grey", 
                              "&:hover": { background: "linear-gradient(90deg, #6b5bff, #a259ff)",
                            boxShadow:"0 0 20px grey", transform:"translateY(-3px)" }, }} > 
                             Lets Talk
                              </Button>
                               </Container>
                                <Footer/>
                                 </>
                                  );
                                   };
                                    export default Serviceone;