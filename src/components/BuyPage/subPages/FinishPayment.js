import { Grid, Container, Box, Divider, Typography } from "@mui/material";
import React from "react";
import { plansData } from "../../other/plansData/plansData";
import { useParams } from "react-router-dom";
import PaymentCard from "../Components/PaymentCard";
import Title from "../../other/title/Title";
import PaypalComponent from "../payment/PaypalComponent";

function FinishPayment() {
  const { name } = useParams();
  const payment = React.useRef();
  const PlanToDisplay =
    name === "Basic"
      ? plansData[0]
      : name === "Standard"
      ? plansData[1]
      : plansData[2];
  // all this effect is doing is scrolling to the paypal button if the devise is a mobile (smaller than 600px)
  React.useEffect(() => {
    if (600 >= window.screen.width) {
      payment.current.scrollIntoView({ block: "center" });
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="center"
        mt="2em"
      >
        {/* payment */}
        <Grid item xs={12} sm={6} lg={6}>
          <Typography color="gray" sx={{ fontWeight: "bolder" }}>
            SELECTED PLAN:
          </Typography>
          <Box
            sx={{ width: { xs: "100%", sm: "60%", lg: "400px" }, mb: "2em" }}
          >
            <PaymentCard
              name={PlanToDisplay.name}
              price={PlanToDisplay.price}
              features={PlanToDisplay.features}
            />
          </Box>
        </Grid>
        {/* summary */}
        <Grid item xs={12} sm={6} lg={6}>
          <Title preStrong="" strong="Summary:" postStrong="" />
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "2em",
              gap: "5px",
              width: "100%",
            }}
          >
            <span>Speedyourweb {PlanToDisplay.name} plan</span>
            <span>{PlanToDisplay.price}$</span>
          </Typography>
          <Typography variant="body2" color="gray" mb="2em">
            Qty: 1
          </Typography>
          <Divider />
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "4em",
              gap: "5px",
              width: "100%",
            }}
          >
            <strong>Total</strong>
            <strong>{PlanToDisplay.price}$</strong>
          </Typography>
          <Typography variant="body2" color="gray" mb="2em">
            USD
          </Typography>
          <Divider />
          <Box sx={{ mt: "2em" }} ref={payment}>
            <PaypalComponent price={PlanToDisplay.price} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FinishPayment;
