import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import whyus from "../../../../assets/whyUs.svg";
import MainContent from "./MainContent";
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
        <Grid
          item
          xs={12}
          md={5.8}
          sx={{ display: "flex", flexDirection: "column", gap: "1em" }}
        >
          {/* titles */}
          <Typography
            component="p"
            sx={{ fontSize: "2em", fontWeight: "bolder" }}
          >
            Wondering why your page is
            <span style={{ color: "#9c27b0" }}> slow?</span>
          </Typography>
          {/* reason to choose us */}
          <Typography sx={{ width: { xs: "90%", sm: "80%" } }}>
            See how your site performs, reveal why it's slow, and discover
            optimization opportunities
          </Typography>
          {/* main Section */}
          <MainContent />
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() => window.scroll(0, 0)}
          >
            Test My Speed For Free!
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MulitpicSection;
