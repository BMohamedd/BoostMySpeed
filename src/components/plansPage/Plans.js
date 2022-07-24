import React from "react";
import NavBar from "../other/NavBar";
import Footer from "../frontPage/homePageSections/Footer";
import { Grid, Stack, Stepper, Step, StepLabel } from "@mui/material";
import Card from "./components/Card";
import { plansData } from "../other/plansData/plansData";
import { Container } from "@mui/system";
import Badge from "./components/Badge";

const steps = [
  "Select A plan",
  "Finish The Payment",
  "Add Website Information",
];

function Plans() {
  return (
    <Stack>
      <NavBar />
      <Container maxWidth="xl">
        <Stepper
          sx={{ mt: "8em", color: "#9c27b0" }}
          activeStep={0}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: { xs: "center", sm: "space-between" } }}
          mt="2em"
        >
          <Grid item xs={11} sm={5.5} md={4} lg={4}>
            <Card
              name={plansData[0].name}
              price={plansData[0].price}
              features={plansData[0].features}
            />
          </Grid>
          <Grid item xs={11} sm={5.5} md={4} lg={4}>
            <Card
              name={plansData[1].name}
              price={plansData[1].price}
              features={plansData[1].features}
            >
              <Badge />
            </Card>
          </Grid>
          <Grid item xs={11} sm={5.5} md={4} lg={4}>
            <Card
              name={plansData[2].name}
              price={plansData[2].price}
              features={plansData[2].features}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Stack>
  );
}

export default Plans;
