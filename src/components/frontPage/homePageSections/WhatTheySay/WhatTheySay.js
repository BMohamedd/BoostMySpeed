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
        <Grid
          container
          sx={{
            justifyContent: { xs: "start", md: "space-between", gap: "1em" },
            alignItems: "center",
          }}
        >
          {/* text */}
          <Grid item xs={12} md={5.8}>
            {" "}
            <Paper sx={{ padding: "1em 3em" }}>
              <Comments />
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            md={5.8}
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Box
              sx={{
                width: "40%",
                borderLeft: "1px solid gray",
                boxSizing: "border-box",
                paddingLeft: "2em",
              }}
            >
              <Typography
                sx={{ fontSize: "2em", fontWeight: "bolder" }}
                color="secondary"
                component="p"
              >
                17.3k
              </Typography>
              <Typography>DEEP SCANS RUNS</Typography>
            </Box>
            <Box
              sx={{
                width: "40%",
                borderLeft: "1px solid gray",
                paddingLeft: "1em",
              }}
            >
              <Typography
                sx={{ fontSize: "2em", fontWeight: "bolder" }}
                color="secondary"
                component="p"
              >
                100+
              </Typography>
              <Typography>Happy Custumers</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhatTheySay;
