import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Paper,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
const steps = [
  {
    title: "Requirements Analysis",
    text: "We begin by understanding your business needs, objectives, and challenges to define clear project requirements.",
    icon: ContentPasteSearchOutlinedIcon,

  },
  {
    title: "Design",
    text: "Our designers create intuitive interfaces and system architecture that align with your business goals.",
    icon:CodeOffOutlinedIcon,
  },
  {
    title: "Development",
    text: "Our expert developers build robust, scalable solutions using the latest technologies and best practices.",
    icon:  CodeOffOutlinedIcon,
  },
  {
    title: "Testing",
    text: "We conduct thorough testing to ensure your solution is reliable, secure, and performs optimally.",
    icon: TaskAltOutlinedIcon ,
  },
  {
    title: "Support",
    text: "We provide ongoing maintenance and support to ensure your solution continues to deliver value.",
    icon: SettingsIcon,
  },
];

const StepCard = ({ icon: Icon, title, text }) => (
  <Paper
    sx={{
      p: { xs: 2, md: 3 },
      borderRadius: 2,
      border: "1px solid #ABA8F9",
      bgcolor: "transparent",
      width: { xs: "100%", md: 500 },
      textAlign: "left",
    }}
  >
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Avatar
        sx={{
          bgcolor: "#ABA8F94D",
          color: "#4169E1",
          width: 48,
          height: 48,
          borderRadius: "8px",
        }}
      >
        <Icon />
      </Avatar>

      <Typography
        sx={{
          fontWeight: 700,
          color: "#000",
          fontSize: { xs: "18px", md: "24px" },
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "#000",
          fontSize: { xs: "14px", md: "16px" },
        }}
      >
        {text}
      </Typography>
    </Box>
  </Paper>
);

export default function Aboutdevelopment() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        py: { xs: 5, md: 8 },
        overflow: "hidden",
      }}
    >
      <Container>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography
            sx={{
              color: "#4169E1",
              fontWeight: 700,
              fontSize: { xs: "24px", md: "32px" },
            }}
          >
            Our Development Process
          </Typography>

          <Typography sx={{ color: "#000", mt: 1 }}>
            We follow a structured approach to ensure successful project delivery.
          </Typography>
        </Box>

        <Timeline
          sx={{
            position: "relative",
            m: 0,
            p: 0,

            "&::before": {
              content: '""',
              position: "absolute",
              left: { xs: 16, md: "50%" }, // 👈 move line on mobile
              top: 0,
              bottom: 0,
              width: "4px",
              bgcolor: "#ABA8F9",
              transform: { md: "translateX(-50%)" },
            },
          }}
        >
          {steps.map((step, i) => {
            const isRightSide =
              step.title === "Design" || step.title === "Testing";

            return (
              <TimelineItem
                key={i}
                sx={{
                  flexDirection: {
                    xs: "row",
                    md: isRightSide ? "row" : "row-reverse",
                  },
                  alignItems: "flex-start",
                  my: { xs: 3, md: 4 },
                }}
              >
                {/* Dot */}
                <TimelineSeparator
                  sx={{
                    position: "absolute",
                    left: { xs: 8, md: "50%" },
                    transform: { md: "translateX(-50%)" },
                    zIndex: 2,
                  }}
                >
                  <TimelineDot
                    sx={{
                      height: 20,
                      width: 20,
                      bgcolor: "#4169E1",
                    }}
                  />
                </TimelineSeparator>

                {/* Content */}
                <TimelineContent
                  sx={{
                    px: { xs: 4, md: 2 },
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      md: isRightSide ? "flex-start" : "flex-end",
                    },
                  }}
                >
                  <StepCard
                    icon={step.icon}
                    title={step.title}
                    text={step.text}
                  />
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </Box>
  );
}
