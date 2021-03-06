import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import heroGif from "../../../assets/heroGif.gif";
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
      <Grid
        container
        sx={{
          flexDirection: {
            xs: "row-reverse",
            sm: "row",
          },
        }}
      >
        <Grid item xs={12} md={7}>
          <Typography
            variant="h2"
            mb=".5em"
            sx={{
              fontWeight: "bolder",
              fontSize: { xs: "2em", md: "4em" },
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            Improve your sales with a{" "}
            <span style={{ borderBottom: "5px solid #9c27b0" }}>
              faster website
            </span>{" "}
            Today!
          </Typography>
          <Typography
            variant="h5"
            sx={{
              width: { xs: "100%", sm: "70%" },
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            The average user takes 2 seconds to decide to stay on your site or
            not! How fast does your website load?
          </Typography>
          <SearchArea />
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            style={{ maxWidth: "100%" }}
            src={heroGif}
            alt="diffrence in loading speeds"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
