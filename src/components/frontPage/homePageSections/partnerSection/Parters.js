import { Container, Grid } from "@mui/material";
import React from "react";
import parters from "../../../../assets/friends.png";
import AutoIncrement from "./AutoIncrement";
import Title from "../../../other/title/Title";

function Parters() {
  return (
    <Container maxWidth="xl" sx={{ mt: "6em" }}>
      <Title preStrong="Our" strong="Partners:" />
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={5.5}>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              style={{ width: "100%", height: "100px" }}
              src={parters}
              alt="our friend's logos"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <AutoIncrement
            start={17345}
            time={4000}
            title="pages analized so far"
            subtitle="join thousands of people and companies around the world commited to make the web consistantly faster."
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Parters;
