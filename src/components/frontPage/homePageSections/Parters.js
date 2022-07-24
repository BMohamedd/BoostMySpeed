import { Container, Typography } from "@mui/material";
import React from "react";
import parters from "../../../assets/friends.png";

function Parters() {
  return (
    <Container maxWidth="xl" sx={{ mt: "6em" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "100%", height: "100px" }}
          src={parters}
          alt="our friend's logos"
        />
      </div>
    </Container>
  );
}

export default Parters;
