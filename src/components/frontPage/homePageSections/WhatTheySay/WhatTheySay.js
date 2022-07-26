import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Comments from "./Comments";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function WhatTheySay() {
  const navigate = useNavigate();
  return (
    <Box sx={{ background: "#ddd", paddingY: "2em" }}>
      <Container maxWidth="xl">
        <Typography
          component="h3"
          sx={{ fontSize: "2em", fontWeight: "bold" }}
          textAlign="center"
          mb="1em"
        >
          What Our Clients Say About Us
        </Typography>
        <Grid
          container
          sx={{
            justifyContent: { xs: "start", md: "space-between", gap: "1em" },
            alignItems: "center",
          }}
        >
          {/* text */}
          <Grid item xs={12} md={12}>
            {" "}
            <Paper sx={{ padding: "1em 3em" }}>
              <Comments />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhatTheySay;
