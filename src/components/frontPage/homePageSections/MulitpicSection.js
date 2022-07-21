import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import partners from "../../../assets/friends.png";
import whyus from "../../../assets/whyUs.svg";
import Reason from "./Reason";

function MulitpicSection() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: { xm: "fit-content" },
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* image */}
      <Grid
        container
        sx={{ justifyContent: { xs: "start", md: "space-between" } }}
      >
        <Grid item xs={12} md={5.8}>
          <img
            style={{ maxWidth: "100%" }}
            src={whyus}
            alt="person doing a speed test"
          />
        </Grid>
        {/* text */}
        <Grid item xs={12} md={5.8}>
          {/* titles */}
          <Typography
            color="secondary"
            component="h3"
            sx={{ fontSize: "1em", fontWeight: "bolder" }}
          >
            Some Reasons
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "2em", fontWeight: "bolder" }}
          >
            Why <span style={{ color: "#9c27b0" }}>Choose</span> Us?
          </Typography>
          {/* reason to choose us */}
          <Typography sx={{ width: { xs: "90%", sm: "80%" } }}>
            With Our Years of Experiance And Team Of Professionals We Guarantee
            Fast Delivary and A Good Experiance For You We alse Offer a 100%
            money Back Guarantee if You're Not Satisfied With The Results So Why
            waste Time Start Today!{" "}
          </Typography>
          {/* partners */}
          <Box mt="4em" sx={{ width: { xs: "100%", sm: "70%", md: "60%" } }}>
            <Typography
              color="secondary"
              component="h3"
              sx={{ fontSize: "1em", fontWeight: "bolder" }}
            >
              Our Partners
            </Typography>
            <img width="100%" src={partners} alt="our partners" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MulitpicSection;
