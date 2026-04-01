import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid,
  Container,
  Button,
  Stack,
  Card
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


export default function ErpSolution() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
        {/* HERO IMAGE */}
        <Box
          component="img"
          src="/static/media/erp.e1b5bf9fde77ae85b514.png"
          alt="ERP Solution"
          loading="lazy"
          decoding="async"
          sx={{
            width: "100%",
            height: { xs: 180, md: 260 },
            objectFit: "cover",
          }}
        />

        {/* CONTENT */}
        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {/* Title */}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            E-Commerce Platform for Fashion Retailer
          </Typography>

          {/* Chips */}
          <Stack direction="row" spacing={1} flexWrap="wrap" mb={3}>
            {["React", "Node.js", "MongoDB", "Stripe", "AWS"].map((tech) => (
              <Chip key={tech} label={tech} size="small" />
            ))}
          </Stack>

          {/* Challenge */}
          <Typography variant="h6" color="primary" gutterBottom>
            The Challenge
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            The client was struggling with an outdated e-commerce platform that
            couldn’t handle their growing product catalog and increasing customer
            base. They needed a scalable solution with seamless shopping and
            inventory integration.
          </Typography>

          {/* Solution */}
          <Typography variant="h6" color="primary" gutterBottom>
            Our Solution
          </Typography>

          <Grid container spacing={2} mb={4}>
            {[
              "Responsive design for mobile & desktop",
              "Secure Stripe payment integration",
              "Customer accounts & order history",
              "Advanced filtering & search",
              "Analytics dashboard insights",
              "Real-time inventory management",
            ].map((item) => (
              <Grid size={{ xs: 12, sm: 6 }} key={item}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CheckCircleIcon color="primary" fontSize="small" />
                  <Typography variant="body2">{item}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* STATS */}
          <Grid container spacing={2} mb={3}>
            {[
              { value: "+45%", label: "Increase in Sales" },
              { value: "+60%", label: "Mobile Conversion" },
              { value: "0.8s", label: "Page Load Speed" },
            ].map((stat) => (
              <Grid size={{ xs: 12, sm: 4 }} key={stat.label}>
                <Box
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: 2,
                    p: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" color="primary">
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* BUTTON */}
          <Box textAlign="right">
            <Button variant="contained">Close</Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
