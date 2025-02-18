import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <AppBar position="fixed" color="transparent" className="floating-navbar">
      <Toolbar className="floating-navbar__toolbar">
        <Typography variant="h6" className="nav-title">
          Nodely
        </Typography>
        <Box className="floating-navbar__buttons">
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
