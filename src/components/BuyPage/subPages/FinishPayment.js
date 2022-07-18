import { Grid, Container, Box } from "@mui/material";
import React from "react";
import PaymentCard from "../Components/PaymentCard";
import { paymentcontext } from "../../../Context/Payment/paymentContextProvider";
import PaypalComponent from "../payment/PaypalComponent";

function FinishPayment() {
  const { selectedPlan } = React.useContext(paymentcontext);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} justifyContent="space-between" mt="2em">
        <Grid item xs={11} sm={5.5} lg={3.5}>
          <PaymentCard
            name="Basic"
            price="300"
            features="Up to 30 Seconds, Up to 1 Round of Revisions, 75 words overlay text script"
            selected={selectedPlan === "basic" ? true : false}
            plan="basic"
          />
        </Grid>
        <Grid item xs={11} sm={5.5} lg={3.5}>
          <PaymentCard
            name="Standard"
            price="600"
            features="Up to 60 Seconds, Up to 2 Rounds of Revisions, 150 words overlay text script"
            selected={selectedPlan === "standard" ? true : false}
            plan="standard"
          />
        </Grid>
        <Grid item xs={11} sm={5.5} lg={3.5}>
          <PaymentCard
            name="premium"
            price="1,200"
            features="Up to 90 Seconds, Up to 3 Rounds of Revisions, 200 words overlay text script"
            selected={selectedPlan === "premium" ? true : false}
            plan="premium"
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: "2em" }}>
        <PaypalComponent />
      </Box>
    </Container>
  );
}

export default FinishPayment;
