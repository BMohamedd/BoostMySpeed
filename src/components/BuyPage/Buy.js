import { Box, Stepper, Step, StepLabel, Container } from "@mui/material";
import React, { useEffect } from "react";
import NavBar from "../other/NavBar";
import Footer from "../frontPage/homePageSections/Footer";
import FinishPayment from "./subPages/FinishPayment";
import { paymentcontext } from "../../Context/Payment/paymentContextProvider";
import WesiteInfo from "./WebsiteInfo/WebsiteInfo";
const steps = [
  "Select A plan",
  "Finish The Payment",
  "Add Website Information",
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
      {Item === "1" ? <FinishPayment /> : <WesiteInfo />}
      <Footer />
    </Box>
  );
}

export default Buy;
