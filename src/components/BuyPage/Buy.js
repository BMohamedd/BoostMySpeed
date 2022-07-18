import { Box, Stepper, Step, StepLabel, Container } from "@mui/material";
import React from "react";
import NavBar from "../other/NavBar";
import Footer from "../frontPage/homePageSections/Footer";
import FinishPayment from "./subPages/FinishPayment";

const steps = [
  "Finish The Payment",
  "Add Website Information",
  "Complete The Process",
];
function Buy() {
  return (
    <Box>
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
      </Container>
      <FinishPayment />
      <Footer />
    </Box>
  );
}

export default Buy;
