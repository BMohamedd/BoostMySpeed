import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function GetStarted1() {
  const navigate = useNavigate();
  return (
    <Box sx={{ background: "#ddd", paddingY: "2em" }}>
      <Container maxWidth="xl">
        {/* text */}
        <Typography
          color="secondary"
          component="h3"
          sx={{ fontSize: "1em", fontWeight: "bolder" }}
          textAlign="center"
        >
          Start now
        </Typography>
        <Typography
          component="p"
          sx={{ fontSize: "2em", fontWeight: "bolder" }}
          textAlign="center"
        >
          Make Your Dream Project{" "}
          <span style={{ color: "#9c27b0" }}>Faster</span>
        </Typography>
        <Typography textAlign="center" color="gray">
          Find out why We are trusted by developers and teams around the world,
          To Take Their business To the next level.
        </Typography>
        <Box
          sx={{
            width: "100%",
            mt: "2em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/plans")}
            color="secondary"
            sx={{ width: "60%" }}
            endIcon={<ArrowForwardIosIcon />}
          >
            {" "}
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default GetStarted1;
