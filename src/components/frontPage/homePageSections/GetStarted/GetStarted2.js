import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function GetStarted2() {
  const navigate = useNavigate("");
  return (
    <Box sx={{ background: "#ddd", paddingY: "2em" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "3em", fontWeight: "bolder" }}
          component="h2"
          textAlign="center"
        >
          Ready To <span style={{ color: "#9c27b0" }}>Level Up</span> Your
          WebSite Speed?
        </Typography>
        <Typography
          sx={{ fontSize: "1.5em", fontWeight: "bolder" }}
          component="p"
          textAlign="center"
        >
          {" "}
          Improve site performs, reveal Bugs and discover optimization
          opportunities.
        </Typography>
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
      </Container>
    </Box>
  );
}

export default GetStarted2;
