import { Paper, Box, Typography, Stack, Divider } from "@mui/material";
import React from "react";
import PaymentBadge from "./PaymentBadge";
import { paymentcontext } from "../../../Context/Payment/paymentContextProvider";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function PaymentCard({ name, price, features }) {
  const { changePlanAndPrice } = React.useContext(paymentcontext);
  return (
    <Paper elevation={5} sx={{ width: "100%", position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          background: "#ba68c8",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: "4em",
        }}
      >
        <Typography
          textAlign="center"
          variant="h4"
          sx={{ fontWeight: "bolder" }}
        >
          {name}
        </Typography>
        <Typography textAlign="center" color="white">
          <strong style={{ fontSize: "2em" }}>${price}</strong>{" "}
          <strong>/ Website</strong>{" "}
        </Typography>
      </Box>
      <Stack py="2em" alignItems="start">
        {features.map((feature) => {
          return (
            <Typography
              key={feature}
              alignSelf="flex-start"
              sx={{
                marginLeft: "1em",
                mb: "1.5em",
                fontSize: "1.25em",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
              color="gray"
            >
              {feature.included ? (
                <CheckIcon color="success" />
              ) : (
                <CloseIcon color="error" />
              )}
              <span>{feature.name}</span>
            </Typography>
          );
        })}
        <Divider />
      </Stack>
      <PaymentBadge />
    </Paper>
  );
}

export default PaymentCard;
