import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./LandingPage.css"; // Import custom CSS

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      {/* Add a top margin to ensure your content is not hidden behind the fixed navbar */}
      <Box className="landing-page" sx={{ mt: "80px" }}>
        <Box className="hero-section">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Nodely
          </Typography>
          <Typography variant="h5" gutterBottom>
            Manage your tasks with ease.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </>
  );
}
