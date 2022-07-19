import { Grid, Container, Box, Divider, Typography } from "@mui/material";
import React from "react";
import { plansData } from "../../other/plansData/plansData";
import { useParams } from "react-router-dom";
import PaymentCard from "../Components/PaymentCard";
import Title from "../../other/title/Title";
import PaypalComponent from "../payment/PaypalComponent";

function FinishPayment() {
  const { name } = useParams();
  const PlanToDisplay =
    name === "Basic"
      ? plansData[0]
      : name === "Standard"
      ? plansData[1]
      : plansData[2];

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
        <Grid item xs={12} sm={7.9} lg={8}>
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
          <Divider />
          <Box sx={{ mt: "2em" }}>
            <PaypalComponent price={PlanToDisplay.price} />
          </Box>
        </Grid>
        {/* summary */}
        <Grid item xs={0} sm={4} lg={4}>
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default FinishPayment;
