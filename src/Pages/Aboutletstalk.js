import React from "react";
import { Box, Container, Button ,Typography} from "@mui/material";

const Aboutletstalk=()=>
{
    return(
        <>
    <Box
      sx={{
        backgroundColor: "#000000ef", // page background
        py: 10,
        textAlign: "center",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "#1e1b4b", // dark blue card
          borderRadius: "20px",
          py: { xs: 6, md: 8 },
          px: { xs: 4, md: 6 },
          color: "white",
          textAlign: "center",
          mx: "auto",
          boxShadow: "0 0 30px rgba(162, 89, 255, 0.2)",
        }}
      >
        {/* Main heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
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
          
          sx={{
            background: "linear-gradient(90deg, #893AEA, #2385C6)",
            color: "#fff",
            textTransform: "none",
            fontWeight: "600",
            px: 4,
            py: 1.2,
            borderRadius: "30px",
            fontSize: "1rem",
            "&:hover": {
              background: "linear-gradient(90deg, #6b5bff, #a259ff)",
            },
          }}
        >
          Contact Us
        </Button>
      </Container>
    </Box>
</>
    );
}
export default Aboutletstalk;