import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useNavigate } from "react-router-dom";
import cosmo from "../Assets/Images/cosmo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/serviceone" },
    { name: "Portfolio", path: "/portfoliopage" },
    { name: "Techstack", path: "/techstack" },
    { name: "Contact", path: "/contactpage" },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* ================= DESKTOP APPBAR ================= */}
      <AppBar position="sticky" sx={{ bgcolor: "#fff" }}>
        <Toolbar
          sx={{
            px: { xs: 2, md: 4 },
            minHeight: { xs: 64, md: 72 },
          }}
        >
          {/* Logo */}
          <Box
            onClick={() => navigate("/")}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap: 1.5
            }}
          >
            <Box
              component="img"
              src={cosmo}
              alt="Cosmos Logo"
              sx={{
                height: { xs: 40, md: 50 },
                width: "auto",
                objectFit: "contain"
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "#893AEA",
                  fontSize: { xs: "24px", md: "34px" },
                  lineHeight: 1
                }}
              >
                Cosmogeek
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "20px" },
                  color: "#000",
                  mt: 0.5,
                  lineHeight: 1
                }}
              >
                Software Solution
              </Typography>
            </Box>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              flex: 1,                    // 👈 take available space
    justifyContent: "center", 
             
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.name}
                component={NavLink}
                to={item.path}
                end={item.path === "/"}
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  color: "#000",
                  position: "relative",

                  "&.active": {
                    color: "#893AEA",
                    fontWeight: 500,
                  },

                  "&.active::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -6,
                    left: "20%",
                    width: "60%",
                    height: "2px",
                    bgcolor: "#893AEA",
                    borderRadius: "2px",
                  },

                  "&:hover": {
                    color: "#a16aff",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Desktop CTA */}
          <Button
            onClick={() => navigate("/contactpage")}
            sx={{
              display: { xs: "none", md: "inline-flex" },
              textTransform: "none",
              fontSize: "0.95rem",
              fontWeight:600,
              px: 0.5,
              py: 0.8,
              minWidth:"unset",
              width:"auto",
              borderRadius: "6px",
              background:
                "linear-gradient(135deg, #ABA8F9 0%, #38BDF8 100%)",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #ABA8F9 0%, #38BDF8 100%)",
                transform: "translateY(-1px)",
                
              },
            }}
          >
            Get Free Consultation
          </Button>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              ml: "auto",
              width: 28,
              p:0.5,
               borderRadius: "50%", 
              height: 28,
              bgcolor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 260,
            bgcolor: "#000",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={handleDrawerToggle} sx=
          {{ color: "#fff",
            width:32,
            height:32,
            p:0.5,
            borderRadius:"50%",

           }}>
            <CloseIcon fontSize="small"/>
          </IconButton>
        </Box>

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                end={item.path === "/"}
                onClick={handleDrawerToggle}
                sx={{
                  "&.active": {
                    bgcolor: "rgba(137,58,234,0.15)",
                    color: "#893AEA",
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          {/* Mobile CTA */}
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              onClick={() => navigate("/contactpage")}
              sx={{
                textTransform: "none",
                fontSize: "0.9rem",
                px:1.5,
                py: 0.6,
                minWidth:"unset",
                width:"auto",
                borderRadius: "6px",
                background:
                  "linear-gradient(135deg, #7c41db, #ab74f4, #4a8add)",
              }}
            >
              Get Free Consultation
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
