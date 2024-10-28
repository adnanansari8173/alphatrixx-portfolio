import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For the dropdown menu
  const open = Boolean(anchorEl); // Checks if the dropdown is open

  const navigate = useNavigate();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const links = ["Home", "About", "Services", "Contact"];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 10,
        color: "black",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            fontFamily: "Roboto, sans-serif",
            color: "#1E3A8A",
            letterSpacing: "1px",
          }}
        >
          <div className="w-10 h-10 ">
            <img
              className=""
              src="http://alphatrixx.com/wp-content/uploads/2024/07/WhatsApp-Image-2023-09-19-at-14.00.00-300x300.jpg"
              alt=""
            />
          </div>
        </Typography>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }} // Show only in mobile view
        >
          <MenuIcon />
        </IconButton>

        {/* Navbar Links for Desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {links.map((link) =>
            link === "Services" ? (
              // Dropdown Menu for "Services"
              <Button
                key={link}
                href={`/#${link.toLowerCase()}`}
                onMouseEnter={handleMenuOpen} // Show dropdown on hover
                onMouseLeave={handleMenuClose}
                sx={{
                  color: "gray",
                  transition: "color 0.3s ease-in-out, transform 0.3s ease",
                  "&:hover": {
                    color: "#3B82F6",
                    transform: "scale(1.05)", // Smooth hover effect
                  },
                  fontFamily: "Arial, sans-serif", // Change font family here
                  fontWeight: "500",
                }}
              >
                {link}
                {/* Dropdown Menu */}
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    onMouseLeave: handleMenuClose, // Close when mouse leaves the dropdown
                  }}
                  PaperProps={{
                    sx: { background: "white", color: "black" },
                  }}
                >
                  <MenuItem
                    onClick={() => navigate("/hr-services")}
                    onClose={handleMenuClose}
                  >
                    HR Services
                  </MenuItem>
                </Menu>
              </Button>
            ) : (
              <Button
                key={link}
                href={`/#${link.toLowerCase()}`}
                sx={{
                  color: "gray",
                  transition: "color 0.3s ease-in-out, transform 0.3s ease",
                  "&:hover": {
                    color: "#3B82F6",
                    transform: "scale(1.05)", // Smooth hover effect
                  },
                  fontFamily: "Arial, sans-serif", // Change font family here
                  fontWeight: "500",
                }}
              >
                {link}
              </Button>
            )
          )}
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: "block", md: "none" } }} // Show only in mobile view
      >
        <Box
          sx={{
            width: 250,
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ alignSelf: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>

          {links.map((link) => (
            <Button
              key={link}
              onClick={
                link === "Services"
                  ? handleMenuOpen
                  : () => navigate(`/${link.toLowerCase()}`)
              }
              sx={{
                color: "gray",
                margin: 1,
                transition: "color 0.3s ease-in-out, transform 0.3s ease",
                "&:hover": {
                  color: "#3B82F6",
                  transform: "scale(1.05)", // Smooth hover effect
                },
                fontFamily: "Arial, sans-serif", // Change font family here
                fontWeight: "500",
              }}
            >
              {link}
            </Button>
          ))}

          {/* HR Services link in mobile drawer */}
          <Button
            onClick={() => navigate("/hr-services")}
            sx={{
              color: "gray",
              margin: 1,
              transition: "color 0.3s ease-in-out, transform 0.3s ease",
              "&:hover": {
                color: "#3B82F6",
                transform: "scale(1.05)", // Smooth hover effect
              },
              fontFamily: "Arial, sans-serif", // Change font family here
              fontWeight: "500",
            }}
          >
            HR Services
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
