import { Box, Stepper, Step, StepLabel, Container } from "@mui/material";
import React, { useEffect } from "react";
import NavBar from "../other/NavBar";
import Footer from "../frontPage/homePageSections/Footer";
import FinishPayment from "./subPages/FinishPayment";
import { paymentcontext } from "../../Context/Payment/paymentContextProvider";
import Contact from "../ContactPage/Contact";

const steps = [
  "Finish The Payment",
  "Add Website Information",
  "Complete The Process",
];
function Buy() {
  const { Item } = React.useContext(paymentcontext);
  useEffect(() => {
    if (Item != "0") {
      console.log("step " + Item - 1 + " comleted");
    }
  }, [Item]);
  return (
    <Box>
      <NavBar />
      <Container maxWidth="xl">
        <Stepper
          sx={{ mt: "8em", color: "#9c27b0" }}
          activeStep={Number(Item)}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
      {Item === "0" ? (
        <FinishPayment />
      ) : Item === "1" ? (
        <Contact />
      ) : (
        "hello world"
      )}

      <Footer />
    </Box>
  );
}

export default Buy;
