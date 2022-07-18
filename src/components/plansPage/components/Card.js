import { Paper, Box, Typography, Stack, Divider, Button } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

function Card({ name, price, features, children }) {
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
          {name} Plan
        </Typography>
        <Typography textAlign="center">
          <strong style={{ fontSize: "2em" }}>${price}</strong>{" "}
          <strong>/ video</strong>{" "}
        </Typography>
      </Box>
      <Stack py="2em" alignItems="start">
        {features.split(",").map((feature) => {
          return (
            <Typography
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
              <CheckIcon color="secondary" />
              <span>{feature}</span>
            </Typography>
          );
        })}
        <Divider />
        <Button
          sx={{ textAligh: "center", marginLeft: "1em", fontWeight: "bolder" }}
          variant="contained"
          disableElevation
          size="large"
          color="secondary"
        >
          BUY NOW{" "}
        </Button>
      </Stack>
      {children}
    </Paper>
  );
}

export default Card;
