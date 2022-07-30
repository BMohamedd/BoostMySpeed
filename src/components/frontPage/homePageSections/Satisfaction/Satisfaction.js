import { Button, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import satisfaction from "../../../../assets/satisfaction.svg";

function Satisfaction() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: { xm: "fit-content" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{ justifyContent: { xs: "start", md: "space-between" } }}
      >
        {/* text */}
        <Grid
          item
          xs={12}
          md={5.8}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".5em",
            alignItems: "space-between",
          }}
        >
          {/* titles */}
          <Typography
            component="p"
            sx={{ fontSize: { xs: "1.5em", md: "2em" }, fontWeight: "bolder" }}
          >
            100%
            <span style={{ color: "#9c27b0" }}> satisfaction</span> guarantee!
          </Typography>

          {/* reason to choose us */}
          <Typography sx={{ width: { xs: "90%", sm: "80%" } }}>
            We will make sure to finish each job<strong> successfully.</strong>{" "}
            You'll get a much faster store or your money back guaranteed.
          </Typography>
          <Divider />

          <Typography
            component="p"
            sx={{ fontSize: { xs: "1.5em", md: "2em" }, fontWeight: "bolder" }}
          >
            More
            <span style={{ color: "#9c27b0" }}> sales!</span>
          </Typography>

          {/* reason to choose us */}
          <Typography sx={{ width: { xs: "90%", sm: "80%" } }}>
            A faster store directly translates into{" "}
            <strong>higher conversions & average order values</strong>. Our
            clients rank higher on Google and have more repeat customers.
          </Typography>
          <Divider />

          <Typography
            component="p"
            sx={{ fontSize: { xs: "1.5em", md: "2em" }, fontWeight: "bolder" }}
          >
            Fast
            <span style={{ color: "#9c27b0" }}> site!</span>
          </Typography>

          {/* reason to choose us */}
          <Typography sx={{ width: { xs: "90%", sm: "80%" } }}>
            Blazing fast user experience. <strong>Great speed score</strong>.
            Fantastic results on Google Core Web Vitals.
          </Typography>
          <Divider />
        </Grid>
        {/* image */}
        <Grid
          item
          xs={12}
          md={5.8}
          sx={{ display: { xs: "none", md: "inline" } }}
        >
          <img
            style={{ maxWidth: "100%" }}
            src={satisfaction}
            alt="happy person illustration"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Satisfaction;
