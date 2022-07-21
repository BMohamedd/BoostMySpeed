import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import heroSVG from "../../../assets/hero.svg";
import SearchArea from "./SearchArea";

function Hero() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: { xs: "10em", sm: "5em", md: "5em", lg: "0em" },
        minHeight: { xm: "fit-content", md: "100vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h2"
            mb=".5em"
            sx={{ fontWeight: "bolder", fontSize: { xs: "2em", md: "4em" } }}
          >
            Increase your{" "}
            <span style={{ borderBottom: "5px solid #9c27b0" }}>PROFITS</span> &{" "}
            <span style={{ borderBottom: "5px solid #9c27b0" }}>SPEED</span>{" "}
            Today!
          </Typography>
          <Typography variant="h5" width="70%">
            See how your site performs, reveal why it's slow and discover
            optimization opportunities.
          </Typography>
          <SearchArea />
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: { xs: "none", sm: "block" } }}>
          <img
            style={{ maxWidth: "100%" }}
            src={heroSVG}
            alt="person doing a speed test"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
