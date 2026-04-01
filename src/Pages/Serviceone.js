import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"; 
import React from "react"; 
import Footer from "../components/Footer";
 import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; 
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
                                     <Container maxWidth="lg"
                                   sx={{ position: "relative", zIndex: 2, textAlign: "center", 
                                    color: "white", px: { xs: 2, md: 3 }, display:"flex",flexDirection:"column", 
                                    justifyContent:"center", alignItems:"center", height:"100vh" }} > 
                                    <Typography 
                                    variant="h2" sx={{ fontWeight: "bold", mb: 2,
                                       fontSize:
                                       { xs: "2rem", sm: "3rem", md: "4rem" }, 
                                       textShadow: "0 0 20px rgba(255,255,255,0.2)", 
                                       background: "linear-gradient(90deg, #4169E1, #38BDF8)",
   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    backgroundClip: "text", color: "transparent", }} >
     Our Services 
     </Typography> 
     <Typography variant="h5" 
     sx={{ mb: 3, opacity: 0.9, 
      fontSize: { xs: "1rem", sm: "1.4rem", md: "1.8rem" }, 
      maxWidth: "800px",
     textShadow: "0 0 10px rgba(255,255,255,0.15)", }} > 
     We offer comprehensive software development services to help businesses transform their digital 
     presence and operations. 
     </Typography>
      </Container>
       </Box> 

       <Box
        sx={{
          bgcolor: "#F5F5F5",
          color: "black",
          py: { xs: "40px", md: "70px" },
          px: { xs: "20px", md: "100px" },
        }}
      >
        <Container maxWidth="lg">
          <Grid container columnSpacing={{ xs: 2, md: 4.375 }} rowSpacing={{ xs: 2, md: 4 }}>
        <Grid size={{xs:12,md:6}}> 
          <Typography 
          sx=
          {{ mb:1, lineHeight:1.5, color:"Black", 
          fontWeight:"600", fontSize: { xs: "20px", md: "24px" }}}>
             ERP Solutions
              </Typography>
           <Typography
            sx={{ mb:3, lineHeight:1.5, color:"black", fontWeight:"500", fontSize: { xs: "16px", md: "18px" }}}>
            Streamline your business operations with custom enterprise resource planning
             solutions that integrate all aspect of your business into a single unified ststem. 
             </Typography> 
             <Stack spacing={1}> {itemfirst.map((item,index)=>( 
              <Box key={index} sx={{display:"flex", alignItems:"flex-start",}}>
               < FiberManualRecordIcon 
               sx={{ color:"Black", fontSize:10, flexShrink:0, mt:"8px", mr:1.4, }}>
                </FiberManualRecordIcon> 
                <Typography sx={{ fontWeight: 400, color: "black", lineHeight: 1.4, m: 0, fontSize: { xs: "14px", md: "16px" }}}>
                 {item.description}
                  </Typography> 
                  </Box> 
                ) )}
                  </Stack> 
                  </Grid> 
                  <Grid size={{xs:12,md:6}} 
                  sx={{textAlign:"center", display: "flex", justifyContent: "center", alignItems: "center"}}> 
                  <Box component="img" 
                  src="https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772009828/servicetwoimg_so2e3d.webp"
                  alt="service"
                   loading="lazy"
                   decoding="async"
                   sx={{ 
                    width:"100%",
                    maxWidth: 440,
                    height: "293px",
                    borderRadius:"10px",
                    ml: { xs: 0, md: "auto" },   
                    mt: { xs: 4, md: 0 },
                    boxShadow:"0 0 30px #893AEA40 ", }} >
                      </Box>
                       </Grid>
                        </Grid>
                         </Container>
                          </Box>
                      {/*second container*/}

                       <Box
   sx={{
     bgcolor: "#FFFFFF",
     color: "black",
     py: { xs: "40px", md: "70px" },
     px: { xs: "20px", md: "100px" },
   }}
 >
   <Container maxWidth="lg">
     <Grid container columnSpacing={{ xs: 2, md: 4.375 }} rowSpacing={{ xs: 2, md: 4 }}> 
                            <Grid size={{xs:12,md:6}} 
                            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                               <Box
                                 component="img" 
                                src= "https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772009827/serviceoneimg_s6ta7j.webp"
                                 alt="service"
                                  loading="lazy"
                                  decoding="async"
                                  sx=
                                  {{ width:"100%", 
                                  maxWidth: 440,
                                  height: "293px",
                                  borderRadius:"10px",
                                  ml: { xs: 0, md: 0 },   
                                  mt: { xs: 4, md: 0 },
                                  boxShadow:"0 0 30px #893AEA40 ",
                                   }} >
                                     </Box>
                                     </Grid>
                                     <Grid size={{xs:12,md:6}} >
                                       <Typography sx={{mb: 1, lineHeight: 1.5, color: "black",fontWeight:"600",fontSize: { xs: "20px", md: "24px" } }}>
                                         CRM Developement
                                          </Typography> 
                                          <Typography
                                           sx={{mb: 3,
                                            lineHeight: 1.5, 
                                            color: "black",
                                             fontWeight:"500",
                                             fontSize: { xs: "16px", md: "18px" }}} >
                                             Build stronger customer relationships with our tailored
                                              Customer Relationship Management systems that enhance engagement,
                                               streamline sales processes, and boost customer satisfaction. 
                                               </Typography>
                                                <Stack spacing={1}>
                                                   {itemtwo.map((item, index) => ( 
                                                    <Box key={index} 
                                                    sx={{ display: "flex", alignItems: "flex-start" }}>
                                                       <FiberManualRecordIcon sx={{ color: "black", fontSize: 10, flexShrink: 0, mt: "8px", mr: 1.4 }} /> 
                                                       <Typography sx={{ lineHeight: 1.5, color: "black" ,fontWeight:"400",fontSize: { xs: "14px", md: "16px" } }}> 
                                                        {item.description}
                                                         </Typography>
                                                          </Box> ))} 
                                                        </Stack>
                                                         </Grid>
                                                         </Grid> 
                                                        </Container> 
                                                        </Box> 
                                      {/*third container*/}
                          <Box
   sx={{
     bgcolor: "#F5F5F5",
     color: "black",
     py: { xs: "40px", md: "70px" },
     px: { xs: "20px", md: "100px" },
   }}
 >
   <Container maxWidth="lg">
     <Grid container columnSpacing={{ xs: 2, md: 4.375 }} rowSpacing={{ xs: 4, md: 4 }}>
                                     <Grid size={{xs:12,md:6}}>
                                          <Typography 
                                          sx={{ mb:1, lineHeight:1.5, 
                                            color:"black",
                                          
                                      fontWeight:"600",
                                      fontSize: { xs: "20px", md: "24px" }  }}>
                                      Custom Web Applications 
                                              </Typography>
                                         <Typography
                                      sx={{ mb:3, lineHeight:1.5,
                               color:"black", fontWeight:"500",fontSize: { xs: "16px", md: "18px" } , }}
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
                          <Typography sx={{ fontWeight: 400,
                             color: "black",
                              lineHeight: 1.4, m: 0,
                              fontSize: { xs: "14px", md: "16px" } }}>
                          {item.description}
                           </Typography> 
                           </Box> )
                           )}

                            </Stack>
                             </Grid> 
                            <Grid size={{xs:12,md:6}} sx={{textAlign:"center", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                                  <Box component="img"
                                                                    src="https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772009827/servicethreeimg_enyfm1.webp"
                                                                    alt="service"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    sx={{
                                                                      width: "100%",
                                                                      maxWidth: 440,
                                                                      height: "293px",
                                                                      borderRadius:"10px",
                                                                      ml: { xs: 0, md: "auto" },   
                                                                      mt: { xs: 4, md: 0 },
                                                                      boxShadow: "0 0 30px #893AEA40 ",
                                                                    }} >
                                                                  </Box>
                                </Grid>
                                 </Grid> 
                                 </Container>
                                 </Box> 
                                 {/*Fourth container*/} 
                                 <Box
   sx={{
     bgcolor: "#FFFFFF",
     color: "black",
     py: { xs: "40px", md: "70px" },
     px: { xs: "20px", md: "100px" },
   }}
 >
   <Container maxWidth="lg">
     <Grid container columnSpacing={{ xs: 2, md: 4.375 }} 
     rowSpacing={{ xs: 4, md: 4 }}
      direction={{ xs: "column-reverse", md: "row" }}>
                                      {/*image*/} 
                                     <Grid  size={{xs:12,md:6}} 
                                     sx={{ display: "flex", 
                                      justifyContent: "center", 
                                      alignItems: "center" }}
                                     > <Box component="img" 
                                     src="https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772262877/four_ucphk3.webp"
                                     alt="service" 
                                     loading="lazy"
                                     decoding="async"
                                     sx={{ width:"100%", 
                                           maxWidth: 440,
                                           height: "293px",
                                           borderRadius:"10px",
                                           ml: { xs: 0, md: 0 },   
                                           mt: { xs: 4, md: 0 },
                                      boxShadow:"0 0 30px #893AEA40 ", }} ></Box>
                                       </Grid>
                                        <Grid size={{xs:12,md:6}} > 
                                      <Typography sx={{mb: 1, lineHeight: 1.5, color: "black",
                                        fontWeight:"600",fontSize: { xs: "20px", md: "24px" }  }}> 
                                        Billing & Accounting Software </Typography> 
                                        <Typography 
                                        sx={{mb: 3, lineHeight: 1.5, color: "black",
                                         fontWeight:"500",fontSize: { xs: "16px", md: "18px" } }} >
                                           Automate your financial processes with our custom billing 
                                           and accounting solutions designed to improve accuracy, 
                              reduce manual work, and provide better financial insights.
                               </Typography> 
                               <Stack spacing={1}>
                                 {itemfour.map((item, index) => 
                                ( <Box key={index} sx={{ display: "flex", alignItems: "flex-start" }}> 
                                  <FiberManualRecordIcon sx={{ color: "black", fontSize: 10, flexShrink: 0, mt: "8px", mr: 1.4 }} />
                                   <Typography 
                                   sx={{ lineHeight: 1.5, color: "black",fontWeight:"400",fontSize: { xs: "14px", md: "16px" }  }}> 
                                   {item.description}
                                    </Typography>
                                     </Box> ))}
                                     </Stack>
                                      </Grid>
                                      </Grid>
                                      </Container>
                                       </Box> 
                                    {/*fifth Container*/} 
                                    <Box
   sx={{
     bgcolor: "#F5F5F5",
     color: "black",
     py: { xs: "40px", md: "70px" },
     px: { xs: "20px", md: "100px" },
   }}
 >
   <Container maxWidth="lg">
     <Grid container columnSpacing={{ xs: 2, md: 4.375 }} rowSpacing={{ xs: 4, md: 4 }}> 
                                      <Grid size={{xs:12,md:6}}>
                                       <Typography sx={{ mb:1, lineHeight:1.5,
                                          color:"black", fontWeight:"600",fontSize: { xs: "20px", md: "24px" }  }}>
                                        Mobile Applications 
                                        </Typography> 
                                        <Typography 
                                        sx={{ mb:3, lineHeight:1.5, color:"black", 
                                         fontWeight:"500",
                                        fontSize: { xs: "16px", md: "18px" }  }}>
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
                                             </FiberManualRecordIcon> <Typography sx={{ fontWeight: 400,
                                               color: "black", lineHeight: 1.4, m: 0,fontSize: { xs: "14px", md: "16px" } }}> 
                                          {item.description}
                                           </Typography>
                                           </Box> ) )} 
                                          </Stack> 
                                          </Grid> 
                                          <Grid size={{xs:12,md:6}} sx={{textAlign:"center",
                                             display: "flex", justifyContent: "center",
                                              alignItems: "center"}}>
                                           <Box component="img" 
                                           src="https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772009827/servicefiveimg_h5h8ko.webp"
                                           alt="service" 
                                           loading="lazy"
                                           decoding="async"
                                           sx={{ width:"100%",
                                            maxWidth: 440,
                                            height: "293px",
                                            borderRadius:"10px",
                                            ml: { xs: 0, md: "auto" },   
                                            mt: { xs: 4, md: 0 },
                                            boxShadow:"0 0 30px #893AEA40 ", }} >
                                              </Box> </Grid>
                                               </Grid>
                                               </Container> 
                                            </Box>
{/*sixth */}
                                        <Box
   sx={{
     bgcolor: "#FFFFFF",
     color: "black",
     py: { xs: "40px", md: "70px" },
     px: { xs: "20px", md: "100px" },
   }}
 >
   <Container maxWidth="lg">
     <Grid container columnSpacing={{ xs: 2, md: 4.375 }} rowSpacing={{ xs: 4, md: 4 }}> 
                         <Grid 
                    size={{ xs: 12, md: 6 }} 
                        sx={{ display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center" }}
>
                      <Box component="img" 
                      src="https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772009826/servicesiximg_oo5cdq.webp"alt="service"
                       loading="lazy"
                   decoding="async"
                     sx=
                    {{ width:"100%",
                        maxWidth: 440,
                     height: "293px",
                    borderRadius:"10px",
            ml: { xs: 0, md: 0 },   
                    mt: { xs: 4, md: 0 },
                    boxShadow:"0 0 30px #893AEA40 ", }} >
                        </Box> 
                         </Grid> 
                                                 <Grid size={{xs:12,md:6}}  > 
                                                  <Typography
                                                   sx={{mb: 1, lineHeight: 1.5, color: "black" ,
                                                   fontWeight:"600",
                                                   fontSize: { xs: "20px", md: "24px" } }}>
                                                     Digital Marketing 
                                                    </Typography>
                                                     <Typography
                                                      sx={{mb: 3, lineHeight: 1.5, color: "black",
                                                       fontWeight:"500",
                                                       fontSize: { xs: "16px", md: "18px" } }} >
                                                       Boost your online presence and reach your 
                                                       target audience with our comprehensive digital 
                                                       marketing services designed to increase visibility and 
                                  drive conversions.
                                          </Typography>
                                                         <Stack spacing={1}> {itemsix.map((item, index) => 
                                                        ( <Box key={index} sx=
                                                        {{ display: "flex", 
                                                        alignItems: "flex-start" }}>
                                                           <FiberManualRecordIcon sx={
                                                            { color: "black", fontSize: 10, flexShrink: 0, mt: "8px", mr: 1.4 }} /> 
                                                           <Typography sx=
                                                           {{ lineHeight: 1.5, 
                                                           color: "black" ,fontWeight:"400",fontSize: { xs: "14px", md: "16px" } }}>
                                                             {item.description}
                                                             </Typography>
                                                              </Box> ))} 
                                                              </Stack> 
                                                              </Grid> 
                                                              </Grid>
                                                               </Container> 
                                   </Box>
                                           <Container maxWidth="md"
                                            sx={{ backgroundImage: `url("https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772262877/image_eloif5.webp")`, 
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            borderRadius: "20px", 
               py: { xs: 6, md: 8 },
                px: { xs: 3, md: 6 },
                 color: "white", textAlign: "center",
                  mx: "auto", mt: 1, mb: 6,
                  width: { xs: "90%", md: "100%" },

              boxShadow: "0 0 30px rgba(162, 89, 255, 0.2)", }} >
                 {/* Main heading */} 
                   <Typography variant="h4" sx={{ fontWeight: "bold", color:"#FFFFFF", mb: 2,
                         fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2rem" }, }} > 
                         Ready to grow your business with technology? 
                           </Typography> {/* Subheading */} 
                           <Typography variant="subtitle1" 
                       sx={{ color: "#d1d1d1", mb: 4, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" }, }} >
                     Let’s discuss how we can transform your business with our cutting-edge solutions.
                  </Typography> 
                  {/* CTA Button */}
                    <Button variant="contained"
                     onClick={()=>navigate("/contactpage")} 
                       endIcon={<ArrowForwardIcon 
                        sx={{fontSize: { xs: "1.1rem", md: "1.3rem" }}}/>} 
                      sx={{ 
                        background: "linear-gradient(90deg, #38BDF8, #ABA8F9)", color: "#fff", textTransform: "none", 
                          fontWeight: "600", px: { xs: 3, md: 4 },
                           py: 1.2,
                           borderRadius: "30px",
                            fontSize: { xs: "0.9rem", md: "1rem" },
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