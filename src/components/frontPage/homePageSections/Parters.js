import { Container, Typography } from "@mui/material";
import React from "react";
import parters from "../../../assets/friends.png";
import Title from "../../other/title/Title";

function Parters() {
  return (
    <Container maxWidth="xl" sx={{ mt: "6em" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img style={{ width: "100%" }} src={parters} alt="our friend's logos" />
      </div>
      <Typography color="gray" textAlign="center">
        The world's best product teams trust Us to deliver an unrivaled
        experience for both Buyers and Sellers.
      </Typography>
    </Container>
  );
}

export default Parters;
