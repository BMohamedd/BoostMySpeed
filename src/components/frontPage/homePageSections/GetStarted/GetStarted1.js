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
          sx={{ fontSize: "3em", fontWeight: "bolder" }}
          component="h2"
          textAlign="center"
        >
          Users
          <span style={{ color: "#9c27b0" }}> hate </span>slow websites!
        </Typography>
        <Typography
          sx={{ fontSize: "1.5em", fontWeight: "bolder" }}
          component="p"
          textAlign="center"
        >
          Boost site load speed, Page ranks and converstion rates.
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
            variant="outlined"
            disableElevation
            onClick={() => navigate("/plans")}
            color="secondary"
            sx={{ width: { xs: "60%", md: "30%" }, mt: "2em", height: "60px" }}
            endIcon={<ArrowForwardIosIcon />}
          >
            {" "}
            <Typography
              color="secondary"
              sx={{ fontSize: "1.5em", fontWeight: "bolder" }}
            >
              Let's Do it
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default GetStarted1;
