import React from "react";
import NavBar from "../other/NavBar";
import Footer from "../frontPage/homePageSections/Footer";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import Card from "./components/Card";
import { Container } from "@mui/system";
import Badge from "./components/Badge";

function Plans() {
  return (
    <Stack>
      <NavBar />
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          sx={{ fontSize: "2.5em", mt: "5em", fontWeight: "bolder" }}
          textAlign="center"
        >
          Explore A New Level Of Web Speed With Our Help
        </Typography>
        <Grid container spacing={2} justifyContent="space-between" mt="2em">
          <Grid item xs={11} sm={5.5} lg={3.5}>
            <Card
              name="Basic"
              price="300"
              features="Up to 30 Seconds, Up to 1 Round of Revisions, 75 words overlay text script"
            />
          </Grid>
          <Grid item xs={11} sm={5.5} lg={4}>
            <Card
              name="Standard"
              price="600"
              features="Up to 60 Seconds, Up to 2 Rounds of Revisions, 150 words overlay text script"
            >
              <Badge />
            </Card>
          </Grid>
          <Grid item xs={11} sm={5.5} lg={3.5}>
            <Card
              name="premium"
              price="1,200"
              features="Up to 90 Seconds, Up to 3 Rounds of Revisions, 200 words overlay text script"
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "2em" }}>
          <Chip
            label="Contact Us"
            variant="outlined"
            color="secondary"
            onClick={() => console.log("chip clicked")}
          />
        </Box>
      </Container>
      <Footer />
    </Stack>
  );
}

export default Plans;
